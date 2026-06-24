import { learningPaths } from "../data/learning-paths.js";
import { sources } from "../data/sources.js";
import { categories } from "../data/taxonomy.js";

const REQUIRED_FIELDS = [
  "id",
  "title",
  "platform",
  "category",
  "url",
  "status",
  "priority",
  "module",
  "usefulFor",
  "focus",
  "note",
];

const checkLinks = process.argv.includes("--check-links");
const errors = [];
const LINK_CHECK_ATTEMPTS = 3;
const LINK_CHECK_CONCURRENCY = 3;
const RETRYABLE_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function addError(message) {
  errors.push(message);
}

function validateSources() {
  if (!Array.isArray(sources)) {
    addError("sources must be an array.");
    return;
  }

  const sourceIds = new Set();
  const validCategories = new Set(categories.filter((category) => category !== "全部"));

  sources.forEach((source, index) => {
    const label = source?.id || `source at index ${index}`;

    if (!source || typeof source !== "object") {
      addError(`${label}: source must be an object.`);
      return;
    }

    REQUIRED_FIELDS.forEach((field) => {
      if (!(field in source)) {
        addError(`${label}: missing required field "${field}".`);
        return;
      }

      if (field === "focus") {
        if (!Array.isArray(source.focus) || source.focus.length === 0) {
          addError(`${label}: focus must be a non-empty array.`);
        }
        return;
      }

      if (!isNonEmptyString(source[field])) {
        addError(`${label}: field "${field}" must be a non-empty string.`);
      }
    });

    if (isNonEmptyString(source.id)) {
      if (sourceIds.has(source.id)) {
        addError(`${label}: duplicate source id.`);
      }
      sourceIds.add(source.id);
    }

    if (isNonEmptyString(source.category) && !validCategories.has(source.category)) {
      addError(`${label}: category "${source.category}" is not defined in taxonomy.`);
    }

    if (Array.isArray(source.focus)) {
      source.focus.forEach((item, focusIndex) => {
        if (!isNonEmptyString(item)) {
          addError(`${label}: focus item ${focusIndex + 1} must be a non-empty string.`);
        }
      });
    }
  });
}

function validateLearningPaths() {
  if (!Array.isArray(learningPaths)) {
    addError("learningPaths must be an array.");
    return;
  }

  const sourceIds = new Set(sources.map((source) => source.id));

  learningPaths.forEach((learningPath, index) => {
    const label = learningPath?.title || `learning path module at index ${index}`;

    if (!Array.isArray(learningPath.sourceIds)) {
      addError(`${label}: sourceIds must be an array.`);
      return;
    }

    learningPath.sourceIds.forEach((sourceId) => {
      if (!sourceIds.has(sourceId)) {
        addError(`${label}: references missing source id "${sourceId}".`);
      }
    });
  });
}

function reportSchemaErrors() {
  if (!errors.length) return;

  console.error("Source validation failed:");
  errors.forEach((error) => {
    console.error(`- ${error}`);
  });
  process.exit(1);
}

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function formatFetchError(error) {
  const cause = error?.cause?.code || error?.cause?.message;
  return error?.name === "AbortError" ? "request timed out" : [error.message, cause].filter(Boolean).join(": ");
}

async function requestSourceUrl(source, method) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(source.url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,application/pdf,*/*;q=0.8",
        "User-Agent": "agent-architecture-reading-hub-source-validator/1.0",
      },
    });
    const { status } = response;

    if (response.body) {
      await response.body.cancel().catch(() => {});
    }

    return { status };
  } catch (error) {
    return { error: formatFetchError(error) };
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchSourceUrl(source) {
  let lastError = "";

  for (let attempt = 1; attempt <= LINK_CHECK_ATTEMPTS; attempt += 1) {
    const headResult = await requestSourceUrl(source, "HEAD");
    if (headResult.status === 200) {
      return null;
    }

    const getResult = await requestSourceUrl(source, "GET");
    if (getResult.status === 200) {
      return null;
    }

    if (getResult.status) {
      lastError = `${source.id}: ${source.url} returned HTTP ${getResult.status}.`;
      if (!RETRYABLE_STATUSES.has(getResult.status)) {
        return lastError;
      }
    } else {
      lastError = `${source.id}: ${source.url} failed (${getResult.error}).`;
    }

    if (attempt < LINK_CHECK_ATTEMPTS) {
      await wait(500 * attempt);
    }
  }

  return lastError;
}

async function validateLinks() {
  const linkErrors = [];
  const queue = [...sources];
  const workerCount = Math.min(LINK_CHECK_CONCURRENCY, queue.length);

  async function worker() {
    while (queue.length) {
      const source = queue.shift();
      const error = await fetchSourceUrl(source);
      if (error) {
        linkErrors.push(error);
      }
    }
  }

  await Promise.all(Array.from({ length: workerCount }, worker));

  if (!linkErrors.length) {
    console.log(`Checked ${sources.length} source URLs.`);
    return;
  }

  console.error("Source URL validation failed:");
  linkErrors.forEach((error) => {
    console.error(`- ${error}`);
  });
  process.exit(1);
}

validateSources();
validateLearningPaths();
reportSchemaErrors();

console.log(`Validated ${sources.length} sources, ${learningPaths.length} learning path modules.`);

if (checkLinks) {
  await validateLinks();
}
