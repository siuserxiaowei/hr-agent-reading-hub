import { filterSources, getSourceById } from "./state.js";

export function renderApp(context) {
  bindSearch(context);
  renderFilters(context);
  renderStatusFilters(context);
  renderMetrics(context);
  renderCards(context);
  renderReader(context);
  renderCourse(context);
  renderCandidates(context);
}

function bindSearch({ state, elements, actions }) {
  if (!elements.searchInput) return;

  if (elements.searchInput.value !== state.query) {
    elements.searchInput.value = state.query;
  }

  elements.searchInput.oninput = (event) => {
    actions.onSearchChange(event.target.value);
  };
}

function renderFilters({ categories, state, elements, actions }) {
  if (!elements.categoryFilters) return;

  elements.categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-chip ${state.category === category ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");

  elements.categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      actions.onCategoryChange(button.dataset.category);
    });
  });
}

function renderStatusFilters({ state, elements, actions }) {
  elements.statusFilters.forEach((button) => {
    button.classList.toggle("active", button.dataset.status === state.status);
    button.onclick = () => {
      actions.onStatusChange(button.dataset.status);
    };
  });
}

function renderMetrics({ sources, firstPartyPlatformNames, state, elements }) {
  const official = sources.filter(
    (source) =>
      source.category === "官方文档" ||
      source.platform.includes("官方") ||
      firstPartyPlatformNames.some((platform) => source.platform.includes(platform)),
  ).length;
  const readCount = state.read.size;
  const progress = sources.length ? Math.round((readCount / sources.length) * 100) : 0;

  elements.totalCount.textContent = String(sources.length);
  elements.officialCount.textContent = String(official);
  elements.readCount.textContent = String(readCount);
  elements.progressCount.textContent = `${progress}%`;
}

function renderCards({ sources, state, elements, actions }) {
  const items = filterSources(sources, state);

  if (!items.length) {
    elements.sourceCards.innerHTML = `<div class="empty-state">没有找到匹配资料。换个关键词或分类试试。</div>`;
    return;
  }

  const selectedId = items.some((item) => item.id === state.selectedId) ? state.selectedId : items[0].id;

  elements.sourceCards.innerHTML = items
    .map((source) => {
      const isRead = state.read.has(source.id);
      return `
        <article class="source-card ${selectedId === source.id ? "selected" : ""}" data-source-id="${source.id}" tabindex="0">
          <div class="card-meta">
            <span class="tag">${source.category}</span>
            <span class="tag secondary">${source.priority}</span>
            <span class="tag neutral">${source.module}</span>
          </div>
          <h3>${source.title}</h3>
          <p>${source.usefulFor}</p>
          <div class="tag-row">
            ${source.focus.slice(0, 3).map((item) => `<span class="tag neutral">${item}</span>`).join("")}
          </div>
          <div class="card-footer">
            <span class="tag neutral">${source.platform}</span>
            <button class="read-toggle ${isRead ? "done" : ""}" data-read-id="${source.id}">
              ${isRead ? "已读" : "标记已读"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  elements.sourceCards.querySelectorAll("[data-source-id]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-read-id]")) return;
      actions.onSelectSource(card.dataset.sourceId);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        actions.onSelectSource(card.dataset.sourceId);
      }
    });
  });

  elements.sourceCards.querySelectorAll("[data-read-id]").forEach((button) => {
    button.addEventListener("click", () => {
      actions.onToggleRead(button.dataset.readId);
    });
  });
}

function renderReader({ sources, state, elements, actions }) {
  const source = getSourceById(sources, state.selectedId) || sources[0];

  if (!source) {
    elements.readerDetail.innerHTML = `<div class="empty-state">暂无资料。</div>`;
    return;
  }

  const isRead = state.read.has(source.id);
  elements.readerDetail.innerHTML = `
    <div class="card-meta">
      <span class="tag">${source.category}</span>
      <span class="tag secondary">${source.priority}</span>
      <span class="tag neutral">${isRead ? "已读" : "未读"}</span>
    </div>
    <h3>${source.title}</h3>
    <p><strong>平台：</strong>${source.platform}</p>
    <p><strong>学习用途：</strong>${source.module}</p>
    <p><strong>为什么读：</strong>${source.usefulFor}</p>
    <p><strong>阅读笔记：</strong>${source.note}</p>
    <p><strong>重点看：</strong></p>
    <ul>
      ${source.focus.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <button class="read-toggle ${isRead ? "done" : ""}" data-detail-read="${source.id}">
      ${isRead ? "取消已读" : "标记为已读"}
    </button>
    <a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">打开原文链接</a>
  `;

  elements.readerDetail.querySelector("[data-detail-read]").addEventListener("click", () => {
    actions.onToggleRead(source.id);
  });
}

function renderCourse({ sources, learningPaths, elements, actions }) {
  elements.courseTimeline.innerHTML = learningPaths
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-time">${item.time}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div class="timeline-links">
              ${item.sourceIds
                .map((id) => {
                  const source = getSourceById(sources, id);
                  if (!source) return "";
                  return `<button data-jump-source="${id}">${source.title}</button>`;
                })
                .join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  elements.courseTimeline.querySelectorAll("[data-jump-source]").forEach((button) => {
    button.addEventListener("click", () => {
      actions.onJumpSource(button.dataset.jumpSource);
    });
  });
}

function renderCandidates({ candidates, elements }) {
  elements.candidateList.innerHTML = candidates
    .map((item) => `<li><strong>${item}</strong><span>候选源，未完成正文深读</span></li>`)
    .join("");
}
