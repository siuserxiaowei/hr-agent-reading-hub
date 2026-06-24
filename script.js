const sources = [
  {
    id: "feishu-resume-template",
    title: "飞书 HR 简历初筛模板",
    platform: "飞书官方模板",
    category: "官方文档",
    url: "https://www.feishu.cn/template/hr-resume-preliminary-screening",
    status: "verified",
    priority: "先读",
    module: "MVP 搭建",
    usefulFor: "理解招聘 Agent 的标准化筛选字段，以及多维表格如何承接 AI 评分。",
    focus: ["技术栈匹配", "技能标签", "AI 智能评估报告", "自动化追踪"],
    note:
      "这篇适合作为课程演示的业务起点：先让学员看到飞书里已经存在的简历初筛结构，再解释你要做的是把它升级成可复核、可沉淀的工作流。",
  },
  {
    id: "feishu-recruitment-system",
    title: "招聘全流程管理表模板",
    platform: "飞书官方模板",
    category: "官方文档",
    url: "https://www.feishu.cn/template/light-recruitment-management-system",
    status: "verified",
    priority: "先读",
    module: "流程拆解",
    usefulFor: "建立招聘流程的业务骨架，避免只讲简历筛选一个点。",
    focus: ["候选人信息", "招聘进度", "试用期洞察", "仪表盘", "全流程管理"],
    note:
      "这篇能帮你把课程从“AI 筛简历”拉回“招聘全流程”：候选人进入、流转、面试、入职和复盘都要在系统里有位置。",
  },
  {
    id: "feishu-recruiting-quickstart",
    title: "快速上手飞书招聘",
    platform: "飞书帮助中心",
    category: "官方文档",
    url:
      "https://www.feishu.cn/hc/zh-CN/articles/566584729896-%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%E9%A3%9E%E4%B9%A6%E6%8B%9B%E8%81%98",
    status: "verified",
    priority: "先读",
    module: "流程拆解",
    usefulFor: "了解飞书官方招聘产品的完整能力边界。",
    focus: ["三合一工作台", "视频面试", "简历解析", "集中面试", "报表"],
    note:
      "它适合用来讲“飞书官方招聘产品”和“我们用多维表格搭 Agent 原型”的区别：前者是产品化方案，后者是可教学、可拆解、可迁移的方法。",
  },
  {
    id: "feishu-base-workflow",
    title: "多维表格工作流介绍",
    platform: "飞书帮助中心",
    category: "官方文档",
    url:
      "https://www.feishu.cn/hc/zh-CN/articles/908751305974-%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%BB%8B%E7%BB%8D",
    status: "verified",
    priority: "先读",
    module: "MVP 搭建",
    usefulFor: "理解“当发生某事，就自动执行动作”的飞书原生工作流。",
    focus: ["条件分支", "节点编排", "流程画布", "触发条件", "执行操作"],
    note:
      "这篇是课程工程底座。你可以用它讲清楚：Agent 不是一个聊天框，而是一组触发器、条件、动作、数据回写和人工确认点。",
  },
  {
    id: "feishu-http-request",
    title: "多维表格自动化发送 HTTP 请求功能介绍",
    platform: "飞书帮助中心",
    category: "官方文档",
    url:
      "https://www.feishu.cn/hc/zh-CN/articles/410063847664-%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E8%87%AA%E5%8A%A8%E5%8C%96%E5%8F%91%E9%80%81-http-%E8%AF%B7%E6%B1%82%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E",
    status: "verified",
    priority: "先读",
    module: "MVP 搭建",
    usefulFor: "理解飞书表格如何调用外部 AI、解析服务或自动化服务。",
    focus: ["POST/GET", "JSON 返回值", "消息卡片", "任务", "日程", "翻译 API"],
    note:
      "它适合放在高级扩展里：基础版先用飞书原生能力，高阶版再讲 HTTP 请求如何连接外部模型或自建服务。",
  },
  {
    id: "feishu-ai-resume-tool",
    title: "飞书多维表格首款 AI 简历筛选工具",
    platform: "飞书飞行社",
    category: "招聘自动化",
    url: "https://www.feishu.cn/community/article?id=7484808747844370434",
    status: "verified",
    priority: "案例",
    module: "MVP 搭建",
    usefulFor: "观察生态工具如何完成招聘平台简历同步到飞书，再生成 AI 评估。",
    focus: ["招聘平台同步", "AI 结构化解析", "评估报告", "邀约建议"],
    note:
      "这篇可以当作竞品/案例参考。课程里不需要照搬，而是提炼它的业务路径：外部简历进入飞书、AI 解析、HR 复核、状态推进。",
  },
  {
    id: "hermes-feishu",
    title: "Hermes Agent 全解析：与 OpenClaw 对比及飞书接入指南",
    platform: "飞书内容中心",
    category: "Agent 方法论",
    url: "https://www.feishu.cn/content/article/7628541877674953666",
    status: "verified",
    priority: "扩展",
    module: "趋势判断",
    usefulFor: "理解 Agent 如何接入飞书入口、技能和工具层。",
    focus: ["飞书 Bot", "飞书 CLI", "工具注册", "记忆", "技能沉淀", "多平台入口"],
    note:
      "这篇适合放在结尾“继续进阶”里：如果学员不满足于多维表格自动化，可以继续探索飞书 Bot、CLI 和技能化 Agent。",
  },
  {
    id: "feishu-cli",
    title: "飞书 CLI：让 AI 直接操作你的飞书",
    platform: "飞书官方",
    category: "官方文档",
    url: "https://www.feishu.cn/feishu-cli",
    status: "verified",
    priority: "扩展",
    module: "MVP 搭建",
    usefulFor: "理解 AI Agent 操作文档、表格、日历、消息的官方工具层。",
    focus: ["文档", "表格", "日历", "消息", "AI 直接操作飞书"],
    note:
      "课程中可轻轻带过：CLI 是更强的工程入口，但初学者先用多维表格工作流更容易完成第一版。",
  },
  {
    id: "anthropic-effective-agents",
    title: "Anthropic: Building Effective Agents",
    platform: "Anthropic",
    category: "Agent 方法论",
    url: "https://www.anthropic.com/research/building-effective-agents",
    status: "verified",
    priority: "先读",
    module: "趋势判断",
    usefulFor: "学习 Agent 方法论，避免把聊天机器人误当 Agent。",
    focus: ["简单可组合模式", "workflow 与 agent 的区别", "透明性", "工具使用"],
    note:
      "这篇是趋势模块的核心支撑。你的课可以借它强调：先做可靠的 workflow，再谈更高自主性的 agent。",
  },
  {
    id: "openai-agents-sdk",
    title: "OpenAI Agents SDK 文档",
    platform: "OpenAI",
    category: "Agent 方法论",
    url: "https://developers.openai.com/api/docs/guides/agents",
    status: "verified",
    priority: "先读",
    module: "趋势判断",
    usefulFor: "理解生产级 Agent 需要 tracing、evals、guardrails 和持续改进。",
    focus: ["调试", "评估", "可观测性", "工作流改进", "工具调用"],
    note:
      "这篇能支撑“Agent 是系统能力”这个观点。招聘场景不是一次 prompt，而是带状态、工具、评估和人工审核的系统。",
  },
  {
    id: "langgraph-overview",
    title: "LangGraph Overview",
    platform: "LangChain 官方文档",
    category: "Agent 方法论",
    url: "https://docs.langchain.com/oss/python/langgraph/overview",
    status: "verified",
    priority: "先读",
    module: "Agent 边界",
    usefulFor: "理解长流程 Agent 为什么需要持久化、人类确认和状态管理。",
    focus: ["durable execution", "streaming", "human-in-the-loop", "persistence"],
    note:
      "它适合帮你解释：招聘流程横跨多天、多角色、多轮状态变化，所以必须有状态和审计，而不是一个临时聊天窗口。",
  },
  {
    id: "langchain-human-loop",
    title: "LangChain Human-in-the-loop",
    platform: "LangChain 官方文档",
    category: "Agent 方法论",
    url: "https://docs.langchain.com/oss/python/langchain/human-in-the-loop",
    status: "verified",
    priority: "先读",
    module: "Agent 边界",
    usefulFor: "把招聘 Agent 的风险点讲清楚：筛人、发消息、约面都需要人工确认点。",
    focus: ["approve", "edit", "reject", "respond"],
    note:
      "这篇可直接服务课程的边界表：AI 输出建议，人可以批准、修改、拒绝或补充响应。",
  },
  {
    id: "hr-agent-paper",
    title: "HR-Agent: A Task-Oriented Dialogue LLM Agent Tailored for HR Applications",
    platform: "arXiv",
    category: "招聘自动化",
    url: "https://arxiv.org/abs/2410.11239",
    status: "verified",
    priority: "参考",
    module: "趋势判断",
    usefulFor: "给“HR Agent”这个方向找一个学术参照。",
    focus: ["HR 重复流程", "保密性", "任务型对话 Agent", "HR 自动化"],
    note:
      "不建议课堂里花太久讲论文，但可以用来证明 HR Agent 不是凭空想象，而是有研究和产品实践共同推动的方向。",
  },
  {
    id: "zhihu-ai-recruiting",
    title: "用 AI Agent 优化招聘流程的四个关键环节",
    platform: "知乎专栏",
    category: "招聘自动化",
    url: "https://zhuanlan.zhihu.com/p/1924477308233839993",
    status: "verified",
    priority: "参考",
    module: "流程拆解",
    usefulFor: "用中文业务语言理解招聘 Agent 的四段闭环。",
    focus: ["岗位发布", "简历筛选", "面试安排", "入职联动"],
    note:
      "这篇适合用来补中文表达。课程里可以把四段闭环换成飞书表结构和状态流转。",
  },
  {
    id: "zhihu-feishu-base-tutorial",
    title: "飞书多维表格保姆级教程",
    platform: "知乎专栏",
    category: "飞书基础",
    url: "https://zhuanlan.zhihu.com/p/1976989613622067260",
    status: "verified",
    priority: "补基础",
    module: "MVP 搭建",
    usefulFor: "给不熟悉飞书多维表格的人补基础。",
    focus: ["结构化数据库", "自动化工厂", "视图", "字段"],
    note:
      "这篇不是招聘专用，但很适合学员预习。你讲课时要反复强调：多维表格不是 Excel，而是轻量业务数据库。",
  },
  {
    id: "zhihu-feishu-api",
    title: "AI 小白也能搞定，5 分钟集成飞书多维表格 API",
    platform: "知乎专栏",
    category: "飞书基础",
    url: "https://zhuanlan.zhihu.com/p/1962509957896311374",
    status: "verified",
    priority: "扩展",
    module: "MVP 搭建",
    usefulFor: "补 API 权限、token、应用身份等工程基础。",
    focus: ["user_access_token", "tenant_access_token", "API 权限", "自动写入多维表格"],
    note:
      "这篇适合给进阶学员：当飞书原生自动化不够时，可以通过 API 把外部系统写回多维表格。",
  },
  {
    id: "n8n-hr-job-posting",
    title: "n8n: HR Job Posting and Evaluation with AI",
    platform: "n8n workflow template",
    category: "工作流案例",
    url: "https://n8n.io/workflows/2773-hr-job-posting-and-evaluation-with-ai/",
    status: "verified",
    priority: "参考",
    module: "MVP 搭建",
    usefulFor: "看非飞书生态里完整招聘 AI 工作流怎么设计。",
    focus: ["表单提交", "简历存储", "AI 评分", "面试安排", "邮件通知"],
    note:
      "它能帮助你抽象跨平台共性：输入、解析、评分、审批、通知。飞书只是承载系统，不是唯一思路。",
  },
  {
    id: "n8n-recruitment-pipeline",
    title: "n8n: AI Recruitment Automation Pipeline",
    platform: "n8n workflow template",
    category: "工作流案例",
    url: "https://n8n.io/workflows/4813-save-time-hiring-with-ai-automate-screening-assessments-and-interviews/",
    status: "verified",
    priority: "参考",
    module: "Agent 边界",
    usefulFor: "看更完整的简历解析、GPT 评估、TA 审批、测评、面试排期流程。",
    focus: ["状态流转", "人工审批", "候选人沟通", "评分字段设计"],
    note:
      "这篇很适合支撑“保留人工审批”的观点：自动化不是越权决策，而是把证据送到人面前。",
  },
  {
    id: "dify-resume-screening",
    title: "Dify 101: Building No-Code Resume Screening Assistants",
    platform: "Dify Community",
    category: "工作流案例",
    url: "https://forum.dify.ai/t/dify-101-building-no-code-resume-screening-assistants/612?tl=en",
    status: "verified",
    priority: "参考",
    module: "MVP 搭建",
    usefulFor: "看低代码/无代码如何把招聘逻辑变成工作流节点。",
    focus: ["Hiring Logic to Workflow Logic", "简历提取", "候选人鸟瞰", "评分"],
    note:
      "这篇适合帮助你讲“从业务逻辑到工作流逻辑”的转译：岗位要求不是一段文字，而是可执行的判断规则。",
  },
  {
    id: "bazhuayu-rpa-feishu",
    title: "八爪鱼 RPA + 飞书多维表相关应用市场页",
    platform: "八爪鱼 RPA",
    category: "工作流案例",
    url:
      "https://rpa.bazhuayu.com/appstore/app/dev_3t-onb/xiao-hong-shu-rpa-ai--tu-wen-tie-xia-zai-zhi-fei-shu-duo-wei-biao--han-fen-xi-mo-ban---lisa-",
    status: "verified",
    priority: "扩展",
    module: "MVP 搭建",
    usefulFor: "理解 RPA 把外部平台数据写入飞书多维表的模式。",
    focus: ["字段映射", "App ID/Secret", "表 token", "平台风控", "写回飞书"],
    note:
      "这不是 HR 专用，但可以作为外部平台数据写回飞书的模式参考。招聘平台抓取要格外注意平台条款和风控。",
  },
];

const categories = ["全部", "官方文档", "Agent 方法论", "招聘自动化", "飞书基础", "工作流案例"];
const candidates = [
  "飞书 + AI Agent 落地指南：从流程自动化到智能助手",
  "HR 招聘 Agent 搭建（评估）",
  "简历太多看不过来？用飞书多维表格搭一个 AI 初筛工具",
  "HR * AI｜用 AI 打造一支 HR Agent 专家团队全过程",
  "HR AI 落地指南，Skill + Agent 实战落地（下）",
];

const courseModules = [
  {
    time: "0-8 分钟",
    title: "趋势判断",
    body: "会用 AI 正在变成基础能力，能把业务流程架构成 Agent 系统才更有壁垒。",
    sourceIds: ["anthropic-effective-agents", "openai-agents-sdk", "hr-agent-paper"],
  },
  {
    time: "8-18 分钟",
    title: "拆 HR 招聘业务流",
    body: "从 JD、简历收集、初筛、候选人沟通、面试安排到反馈沉淀，先画业务漏斗。",
    sourceIds: ["feishu-recruitment-system", "feishu-recruiting-quickstart", "zhihu-ai-recruiting"],
  },
  {
    time: "18-30 分钟",
    title: "定义 Agent 边界",
    body: "自动化负责准备证据和推进流程，人负责定义标准、复核结果和承担决策。",
    sourceIds: ["langgraph-overview", "langchain-human-loop", "n8n-recruitment-pipeline"],
  },
  {
    time: "30-48 分钟",
    title: "搭最小可用系统",
    body: "用飞书多维表格作为业务中枢，完成简历进入、AI 初筛、状态流转和消息草稿。",
    sourceIds: ["feishu-resume-template", "feishu-base-workflow", "feishu-http-request", "dify-resume-screening"],
  },
  {
    time: "48-60 分钟",
    title: "从 60 分到更高分",
    body: "让学员看到替代执行之后，真正要沉淀的是岗位画像、候选人质量判断和组织招聘经验。",
    sourceIds: ["feishu-ai-resume-tool", "n8n-hr-job-posting", "hermes-feishu"],
  },
];

const state = {
  category: "全部",
  status: "all",
  query: "",
  selectedId: sources[0].id,
  read: new Set(JSON.parse(localStorage.getItem("hrAgentReadSources") || "[]")),
};

const categoryFilters = document.querySelector("#categoryFilters");
const sourceCards = document.querySelector("#sourceCards");
const readerDetail = document.querySelector("#readerDetail");
const searchInput = document.querySelector("#searchInput");
const courseTimeline = document.querySelector("#courseTimeline");
const candidateList = document.querySelector("#candidateList");

function saveReadState() {
  localStorage.setItem("hrAgentReadSources", JSON.stringify([...state.read]));
}

function byId(id) {
  return sources.find((source) => source.id === id);
}

function filteredSources() {
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

function renderFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-chip ${state.category === category ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");

  categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });
}

function renderMetrics() {
  const official = sources.filter((source) => source.category === "官方文档" || source.platform.includes("官方")).length;
  const readCount = state.read.size;
  const progress = Math.round((readCount / sources.length) * 100);
  document.querySelector("#totalCount").textContent = String(sources.length);
  document.querySelector("#officialCount").textContent = String(official);
  document.querySelector("#readCount").textContent = String(readCount);
  document.querySelector("#progressCount").textContent = `${progress}%`;
}

function renderCards() {
  const items = filteredSources();
  if (!items.length) {
    sourceCards.innerHTML = `<div class="empty-state">没有找到匹配资料。换个关键词或分类试试。</div>`;
    return;
  }

  if (!items.some((item) => item.id === state.selectedId)) {
    state.selectedId = items[0].id;
  }

  sourceCards.innerHTML = items
    .map((source) => {
      const isRead = state.read.has(source.id);
      return `
        <article class="source-card ${state.selectedId === source.id ? "selected" : ""}" data-source-id="${source.id}" tabindex="0">
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

  sourceCards.querySelectorAll("[data-source-id]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-read-id]")) return;
      state.selectedId = card.dataset.sourceId;
      render();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        state.selectedId = card.dataset.sourceId;
        render();
      }
    });
  });

  sourceCards.querySelectorAll("[data-read-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.readId;
      if (state.read.has(id)) state.read.delete(id);
      else state.read.add(id);
      saveReadState();
      render();
    });
  });
}

function renderReader() {
  const source = byId(state.selectedId) || sources[0];
  const isRead = state.read.has(source.id);
  readerDetail.innerHTML = `
    <div class="card-meta">
      <span class="tag">${source.category}</span>
      <span class="tag secondary">${source.priority}</span>
      <span class="tag neutral">${isRead ? "已读" : "未读"}</span>
    </div>
    <h3>${source.title}</h3>
    <p><strong>平台：</strong>${source.platform}</p>
    <p><strong>课程用途：</strong>${source.module}</p>
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

  readerDetail.querySelector("[data-detail-read]").addEventListener("click", () => {
    if (state.read.has(source.id)) state.read.delete(source.id);
    else state.read.add(source.id);
    saveReadState();
    render();
  });
}

function renderCourse() {
  courseTimeline.innerHTML = courseModules
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
                  const source = byId(id);
                  return `<button data-jump-source="${id}">${source.title}</button>`;
                })
                .join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  courseTimeline.querySelectorAll("[data-jump-source]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.jumpSource;
      state.category = "全部";
      state.status = "all";
      state.query = "";
      searchInput.value = "";
      render();
      document.querySelector("#sources").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderCandidates() {
  candidateList.innerHTML = candidates
    .map((item) => `<li><strong>${item}</strong><span>候选源，未完成正文深读</span></li>`)
    .join("");
}

function renderStatusFilters() {
  document.querySelectorAll("[data-status]").forEach((button) => {
    button.classList.toggle("active", button.dataset.status === state.status);
  });
}

function render() {
  renderFilters();
  renderStatusFilters();
  renderMetrics();
  renderCards();
  renderReader();
  renderCourse();
  renderCandidates();
}

document.querySelectorAll("[data-status]").forEach((button) => {
  button.addEventListener("click", () => {
    state.status = button.dataset.status;
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

render();
