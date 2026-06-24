export function createInitialState(sources) {
  return {
    category: "全部",
    status: "all",
    query: "",
    selectedId: sources[0]?.id || "",
    read: new Set(
      JSON.parse(
        localStorage.getItem("agentArchitectureReadSources") ||
          localStorage.getItem("hrAgentReadSources") ||
          "[]",
      ),
    ),
  };
}

export function saveReadState(state) {
  localStorage.setItem("agentArchitectureReadSources", JSON.stringify([...state.read]));
}

export function getSourceById(sources, id) {
  return sources.find((source) => source.id === id);
}

export function filterSources(sources, state) {
  const query = state.query.trim().toLowerCase();
  return sources.filter((source) => {
    const inCategory = state.category === "全部" || source.category === state.category;
    const isRead = state.read.has(source.id);
    const inStatus = state.status === "all" || (state.status === "read" ? isRead : !isRead);
    const haystack = [
      source.title,
      source.platform,
      source.category,
      source.module,
      source.usefulFor,
      source.note,
      ...source.focus,
    ]
      .join(" ")
      .toLowerCase();
    return inCategory && inStatus && (!query || haystack.includes(query));
  });
}
