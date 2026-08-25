/* =============================================================
 * FLIA-werewolf 金融狼人杀 v1.0 — 知识点卡片 / Knowledge Cards
 * 作者 Role: A2 叙事与内容工程师 (NarrativeDesigner)
 * 对应: 6轮剧本触发的全部金融知识点 (key = rounds_data.js 中引用的 knowledge id)
 *
 * 数据格式约定:
 *   - 顶层: const knowledgeCards = { ... }  (对象, key 为知识点 id)
 *   - 每个知识点:
 *       title         : {zh, en}  中英双语标题
 *       content       : {zh, en}  正文 (英文 50-80 词；中文同义)
 *       related_theory: {zh, en}  对应理论 (行为经济学 / 信息不对称 / 道德风险 / 系统性风险 等)
 *       source        : String    出处标注 (大论文知识点校准, 可选)
 *   - 金融专有名词已核对: 50/30/20法则、72法则、信用卡最低还款真实年化≈18%、月息20%=年化240%、复利¥100@6%10年≈¥16,388 均准确。
 * ============================================================= */

const knowledgeCards = {
  k_budget_503020: {
    title: { zh: "50/30/20 预算法则", en: "The 50/30/20 Budget Rule" },
    content: {
      zh: "50/30/20 法则将税后收入分为必需品 50%、想要品 30%、储蓄投资 20%。它把抽象的“预算”变成三个具体篮子，既留出安全垫又允许适度享受。行为经济学青睐它，因为减少了日常消费决策的认知负担。",
      en: "The 50/30/20 rule splits after-tax income into needs (50%), wants (30%), and savings/investments (20%). It turns abstract 'budgeting' into three concrete buckets that build a buffer while allowing enjoyment. Behavioral economists favor it because it cuts the cognitive load of daily spending decisions."
    },
    related_theory: { zh: "行为经济学（认知负荷、自我控制）", en: "Behavioral Economics (cognitive load, self-control)" },
    source: "Elizabeth Warren 预算框架；大论文 Phase 2"
  },
  k_saving_overfrugal: {
    title: { zh: "储蓄意识（过度节俭的陷阱）", en: "Saving Sense (The Over-Frugal Trap)" },
    content: {
      zh: "储蓄是财务安全的基石，但极度节俭、牺牲一切享受反而适得其反：既降低幸福感，钱仍会被通胀蚕食。目标应是平衡——积累储备，又不牺牲让努力有意义的生活质量。",
      en: "Saving is a foundation of financial security, yet extreme frugality that cuts all enjoyment backfires: it lowers well-being while money still erodes to inflation. The goal is balance — build reserves without sacrificing the quality of life that makes the effort worthwhile."
    },
    related_theory: { zh: "行为经济学（延迟满足、心理账户）", en: "Behavioral Economics (delayed gratification, mental accounting)" }
  },
  k_impulse_consumption: {
    title: { zh: "冲动消费与需求区分", en: "Impulse Buying & Need vs. Want" },
    content: {
      zh: "冲动消费把“想要”误当“需要”。商家用稀缺性与从众心理诱发快速情绪化购买。延迟 24 小时、自问“没有它能否生活或正常运转”，能激活理性系统、减少后悔。区分需要与想要是防负债的第一道防线。",
      en: "Impulse buying confuses 'want' with 'need.' Marketers use scarcity and social proof to trigger fast, emotional purchases. Pausing 24 hours and asking 'do I need this to live or function?' engages the rational system and curbs regret. Telling needs from wants is the first line of defense against debt."
    },
    related_theory: { zh: "行为经济学（双系统思维、情绪化决策）", en: "Behavioral Economics (dual-system thinking, emotional decision)" }
  },
  k_no_free_lunch: {
    title: { zh: "“稳赚不赔”是骗局信号", en: "'Guaranteed No-Loss' Is a Fraud Signal" },
    content: {
      zh: "“稳赚不赔”的承诺是典型骗局信号。任何投资都有风险，声称没有的人是在隐瞒风险。在信息不对称的市场里，卖方比你更清楚真相，而“好得不像真的”的推销，正是利用这种不对称的时刻。转身离开。",
      en: "Promises of 'guaranteed, no-loss' returns are a classic fraud signal. Every investment carries risk; anyone claiming otherwise hides it. In information-asymmetric markets the seller knows more than you — and the too-good-to-be-true pitch is exactly where the asymmetry is exploited. Walk away."
    },
    related_theory: { zh: "信息不对称（信号与隐瞒）", en: "Information Asymmetry (signaling & concealment)" }
  },
  k_knowledge_paywall: {
    title: { zh: "知识付费的甄别", en: "Spotting Paywalled 'Knowledge' Scams" },
    content: {
      zh: "真正有价值的金融知识往往免费——图书馆、公开课、监管机构指南。收费的“内部资料”“荐股”多是割韭菜。付费前先问：谁受益？说法可验证吗？筛选与批判性思维胜过从未存在的“秘方”。",
      en: "Genuinely valuable financial knowledge is often free — libraries, public courses, regulators' guides. Paid 'insider materials' and 'stock tips' frequently scalp. Before paying, ask who benefits and whether the claim is verifiable. Curation and critical thinking beat secret formulas that never existed."
    },
    related_theory: { zh: "信息不对称（信号与筛选）", en: "Information Asymmetry (signaling & screening)" }
  },
  k_compound: {
    title: { zh: "复利效应 · 定投微笑曲线 · 72法则", en: "Compound Interest · DCA Smile · Rule of 72" },
    content: {
      zh: "复利让收益再生收益；小额定期投入随时间滚大（定投“微笑曲线”）。72法则估算翻倍年限：72÷年化利率%。6%时约 12 年翻倍。尽早开始，就是利用你最能掌控的变量——时间。例：月投¥100@6%，10年≈¥16,388。",
      en: "Compound interest earns returns on past returns; small regular contributions grow large over time (the 'smile curve' of dollar-cost averaging). The Rule of 72 estimates years to double: 72 ÷ annual rate %. At 6%, money doubles in ~12 years. Starting early harnesses time — the variable you control most. E.g. ¥100/mo @6% ≈ ¥16,388 in 10y."
    },
    related_theory: { zh: "货币时间价值（复利）", en: "Time Value of Money (compounding)" },
    source: "大论文确认: compound interest"
  },
  k_risk_return: {
    title: { zh: "风险与收益成正比", en: "Risk and Return Are Proportional" },
    content: {
      zh: "更高预期收益必然伴随更高风险——这是金融的核心权衡。“低风险高回报”是自相矛盾；一旦被承诺，风险只是被隐藏或错误定价。分散投资、认清自己的亏损承受力，是理性投资者管理（而非消除）这一关系的方式。",
      en: "Higher expected return demands higher risk — the core trade-off in finance. 'Low risk, high return' is a contradiction; when promised, the risk is hidden or mispriced. Diversification and knowing your own loss tolerance are how rational investors manage, not eliminate, the relationship."
    },
    related_theory: { zh: "现代投资组合理论（风险收益权衡）", en: "Portfolio Theory (risk-return trade-off)" }
  },
  k_inflation: {
    title: { zh: "通胀侵蚀购买力", en: "Inflation Erodes Purchasing Power" },
    content: {
      zh: "通胀悄悄侵蚀购买力：年 3% 时，现金约 24 年贬值一半。全部存活期（近零利率）等于确定亏损。哪怕低风险、收益略高于通胀的工具也能保值。“什么都不做”本身就是一个财务决定。",
      en: "Inflation silently erodes purchasing power: at 3% a year, cash loses half its value in ~24 years. Keeping everything in a near-zero savings account guarantees a real loss. Even low-risk vehicles above the inflation rate help preserve wealth. Doing nothing is itself a financial decision."
    },
    related_theory: { zh: "货币时间价值（通胀）", en: "Time Value of Money (inflation)" }
  },
  k_too_good_true: {
    title: { zh: "高收益必是骗局（月息20%=年化240%）", en: "Too-Good Returns Are Fraud (20%/mo = 240%/yr)" },
    content: {
      zh: "“月息20%”约等于年化 240%，远超任何合法市场回报（巴菲特长期约年化 20%）。这种数字无法持续，必是骗局。当预期收益碾压大盘，基本可断定：被推销的就是这个“项目”本身。",
      en: "A '20% monthly' pitch equals ~240% annualized — far above any legitimate market return (Buffett's long-run ~20% yearly). Such numbers cannot sustain and signal fraud. When projected returns dwarf the broad market, assume the pitch itself is the product being sold to you."
    },
    related_theory: { zh: "信息不对称（庞氏结构）", en: "Information Asymmetry (Ponzi structure)" }
  },
  k_emergency_fund: {
    title: { zh: "应急基金（3-6个月生活费）", en: "Emergency Fund (3-6 Months of Costs)" },
    content: {
      zh: "应急基金——3至6个月生活费、存放于安全流动资产——是财务防御第一道防线。它避免一次冲击（失业、疾病）逼人借入毁灭性债务。行为研究表明，现金缓冲还能降低由压力导致的短期错误决策。",
      en: "An emergency fund — three to six months of living costs in liquid, safe assets — is the first line of financial defense. It prevents a single shock (job loss, illness) from forcing destructive debt. Behavioral research shows a cash buffer also lowers stress-driven, short-term money mistakes."
    },
    related_theory: { zh: "行为经济学（心理账户、压力决策）", en: "Behavioral Economics (mental accounting, stress decisions)" },
    source: "大论文确认: emergency fund allocation"
  },
  k_credit_card_apr: {
    title: { zh: "信用卡最低还款真实利率≈18%/年", en: "Credit-Card Minimum Payment ≈ 18% APR" },
    content: {
      zh: "只还信用卡最低还款看似便宜实则昂贵：日息约 0.05% 对全部剩余本金复利，真实年化逼近 18%。一旦有余额，“免息期”即结束。务必全额还款；最低还款是债务陷阱，而非便利。",
      en: "Paying only the minimum looks cheap but is costly: daily interest (~0.05%) compounds on the full residual, pushing the true APR near 18%. The 'interest-free period' ends once you carry a balance. Always pay in full; minimum payment is a debt trap, not a convenience."
    },
    related_theory: { zh: "利息计算（复利式计息）", en: "Interest Calculation (compounding interest)" },
    source: "大论文确认: interest calculation accuracy"
  },
  k_hidden_fee_installment: {
    title: { zh: "免息分期里的隐藏手续费", en: "Hidden Fees Inside 'Interest-Free' Installments" },
    content: {
      zh: "“免息分期”常含每月手续费或抬高标价，真实成本很少为零。一部“免费”手机分 12 期、月付 30 元，实际更贵。比较总到手价，并把延迟满足、二手等选项与“无痛付款”的营销话术对照。",
      en: "'Interest-free' installments usually carry per-month fees or inflated prices, so the real cost is rarely zero. A 'free' phone paid over 12 months with a ¥30 fee actually costs more. Compare the all-in price, and weigh delayed gratification or second-hand against the marketing of 'painless' payments."
    },
    related_theory: { zh: "行为经济学（框架效应、隐性成本）", en: "Behavioral Economics (framing effect, hidden cost)" }
  },
  k_predatory_lending: {
    title: { zh: "无资质校园贷 / 暴力催收违法", en: "Unlicensed Campus Loans & Violent Collection Are Illegal" },
    content: {
      zh: "无资质校园贷与暴力催收均属违法。掠夺性放贷者瞄准信息薄弱、易受压迫的学生，用借新还旧套牢他们。正确做法是告知家人、学校与警方——绝不要借更多去还。保护你的是法律，不是沉默。",
      en: "Unlicensed campus loans and violent collection are illegal. Predatory lenders target students with weak information and high pressure, trapping them in rolling debt. The correct response is to tell family, the school, and police — never borrow more to repay. The law, not silence, protects you."
    },
    related_theory: { zh: "道德风险；法律合规", en: "Moral Hazard; Legal Compliance" },
    source: "大论文确认: campus loan / predatory lending"
  },
  k_emergency_fund_insurance: {
    title: { zh: "应急基金与保险的作用", en: "Emergency Fund & Insurance in Tandem" },
    content: {
      zh: "面对疾病等大额冲击，分层防御最佳：应急基金扛第一击，保险（医疗/意外）覆盖其余，合规渠道（众筹、校助、社保）填补缺口。用高息贷款付医药费，是把健康危机变成债务漩涡。要在意外前规划。",
      en: "For large shocks like illness, layered defense works best: an emergency fund absorbs the first hit, insurance (medical/accident) covers the rest, and compliant channels (crowdfunding, school aid, public insurance) fill gaps. High-interest loans for medical bills convert a health crisis into a debt spiral. Plan before the emergency."
    },
    related_theory: { zh: "系统性风险；应急保障", en: "Systemic Risk; Risk Protection" },
    source: "大论文确认: emergency fund"
  },
  k_insurance_value: {
    title: { zh: "保险是财务安全第二道防线", en: "Insurance: The Second Line of Defense" },
    content: {
      zh: "保险是继储蓄之后的第二道防线。年轻人保费低、杠杆高——几百元医疗险可撬动数百万保额。它把不确定、毁灭性的损失，变成小额、可预期的成本。为“投资”保费而弃保，是虚假节约。",
      en: "Insurance is the second line of defense after savings. Young people pay low premiums for high leverage — a few hundred yuan of medical insurance can unlock millions in coverage. It converts an uncertain, devastating loss into a small, predictable cost. Skipping it to 'invest' the premium is a false economy."
    },
    related_theory: { zh: "风险管理（风险转移）", en: "Risk Management (risk transfer)" }
  },
  k_scam_types: {
    title: { zh: "常见诈骗类型识别", en: "Recognizing Common Scam Types" },
    content: {
      zh: "常见诈骗有共性：先交钱刷单、钓鱼退款链接、“杀猪盘”情感投资、拉人头返利传销。正规机构绝不会让你点陌生链接、或先交钱才能取出自己的钱。务必通过官方渠道核实。",
      en: "Common scams share patterns: up-front payment for fake jobs (brushing orders), phishing refund links, romance-investment 'pig-butchering,' and pyramid recruitment paying commissions for bringing people in. Legitimate institutions never ask you to click unknown links or pay to withdraw your own money. Verify via official channels."
    },
    related_theory: { zh: "信息不对称（欺诈识别）", en: "Information Asymmetry (fraud detection)" }
  },
  k_whistleblowing: {
    title: { zh: "举报与揭穿：道德与策略", en: "Whistleblowing: Morality & Strategy" },
    content: {
      zh: "揭穿骗局保护他人，却伴个人风险。公开指认有力但招报复；暗中取证或匿名举报更安全且同样有效。道德上应选“行动”——沉默让骗局长大。在可承受风险内，选“单位风险止损最多”的方式。",
      en: "Exposing fraud protects others but carries personal risk. Public calling-out is powerful yet draws retaliation; gathering evidence quietly or reporting anonymously is safer and still effective. The moral choice is to act — silence lets the scheme grow. Pick the method that maximizes harm stopped per unit of risk you can bear."
    },
    related_theory: { zh: "道德风险；集体行动", en: "Moral Hazard; Collective Action" }
  },
  k_systemic_risk_joint_liability: {
    title: { zh: "系统性金融风险与连带责任", en: "Systemic Risk & Joint Liability" },
    content: {
      zh: "一人违约，担保人与合伙人被拖垮——债务沿关系网扩散而非孤立发生。这种“多米诺”即系统性风险：个人谨慎不够，因他人失败会经连带责任波及你。健全规则、透明、拒签鲁莽连带，才能保护整组。",
      en: "When one borrower fails, guarantors and partners are dragged down — debts propagate through a network, not in isolation. This 'domino' dynamic is systemic risk: individual caution is not enough because others' failures reach you via joint liability. Sound rules, transparency, and refusing reckless co-signing protect the whole group."
    },
    related_theory: { zh: "系统性金融风险；连带责任", en: "Systemic Financial Risk; Joint Liability" },
    source: "大论文确认: domino bankruptcy and joint liability"
  }
};

if (typeof window !== "undefined") { window.knowledgeCards = knowledgeCards; }
if (typeof module !== "undefined" && module.exports) { module.exports = knowledgeCards; }
