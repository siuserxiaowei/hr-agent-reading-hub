import { learningPaths } from "../data/learning-paths.js";
import { sources } from "../data/sources.js";
import { candidates, categories, firstPartyPlatformNames } from "../data/taxonomy.js";
import { createInitialState, filterSources, getSourceById, saveReadState } from "./state.js";
import { renderApp } from "./render.js";

const state = createInitialState(sources);

const elements = {
  categoryFilters: document.querySelector("#categoryFilters"),
  sourceCards: document.querySelector("#sourceCards"),
  readerDetail: document.querySelector("#readerDetail"),
  searchInput: document.querySelector("#searchInput"),
  courseTimeline: document.querySelector("#courseTimeline"),
  candidateList: document.querySelector("#candidateList"),
  statusFilters: document.querySelectorAll("[data-status]"),
  totalCount: document.querySelector("#totalCount"),
  officialCount: document.querySelector("#officialCount"),
  readCount: document.querySelector("#readCount"),
  progressCount: document.querySelector("#progressCount"),
  sourcesSection: document.querySelector("#sources"),
};

const actions = {
  onCategoryChange(category) {
    state.category = category;
    render();
  },
  onStatusChange(status) {
    state.status = status;
    render();
  },
  onSearchChange(query) {
    state.query = query;
    render();
  },
  onSelectSource(id) {
    state.selectedId = id;
    render();
  },
  onToggleRead(id) {
    if (state.read.has(id)) {
      state.read.delete(id);
    } else {
      state.read.add(id);
    }
    saveReadState(state);
    render();
  },
  onJumpSource(id) {
    state.selectedId = id;
    state.category = "全部";
    state.status = "all";
    state.query = "";
    render();
    elements.sourcesSection.scrollIntoView({ behavior: "smooth" });
  },
};

function ensureSelectedSourceIsVisible() {
  const items = filterSources(sources, state);
  if (items.length && !items.some((item) => item.id === state.selectedId)) {
    state.selectedId = items[0].id;
  }
  if (!getSourceById(sources, state.selectedId)) {
    state.selectedId = sources[0]?.id || "";
  }
}

function render() {
  ensureSelectedSourceIsVisible();
  renderApp({
    sources,
    categories,
    candidates,
    learningPaths,
    firstPartyPlatformNames,
    state,
    elements,
    actions,
  });
}

render();
