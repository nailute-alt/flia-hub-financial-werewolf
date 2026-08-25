/* =============================================================
 * FLIA-werewolf 金融狼人杀 v1.0 — 6轮剧本数据 / 6-Round Script Data
 * 作者 Role: A2 叙事与内容工程师 (NarrativeDesigner)
 * 剧本1「校园贷风暴」标准版 9 人局
 *
 * ⚠️ v2 更新 (A2 第二轮对齐):
 *   状态键已统一为 8 显示键 + 1 隐藏判定键 (见下方 STATE_KEYS)。
 *   原 gold→coins, financialIQ→literacy, mood→survival(并入)。
 *   新增 savings/energy/credit/social/academics。liability 保留为隐藏键。
 *   每个选项的 effects 现在覆盖全部 8 显示键 + liability 键 (未变化的键记 0)。
 *
 * STATE_KEYS (9):
 *   coins     显示 金币/现金        (原 gold)
 *   savings   显示 储蓄/存款        (新增)
 *   energy    显示 精力             (新增)
 *   credit    显示 信用             (新增)
 *   social    显示 社交             (新增)
 *   academics 显示 学业             (新增)
 *   literacy  显示 财商素养         (原 financialIQ)
 *   survival  显示 生存值/心理      (原 mood 并入)
 *   liability 隐藏 负债 (破产机制判定, 不显示在UI)
 *
 * 数据格式约定 (请 B3 接入游戏状态机):
 *   - 顶层: const roundsData = [ ... ]  (6 个元素, 每轮一个月)
 *   - 每轮对象字段:
 *       round        : Number (1-6)
 *       title        : {zh, en}
 *       theme        : {zh, en}
 *       livingExpense : Number  本轮系统自动扣除的生活费 (-500, 计入 coins)
 *       scene        : {zh, en}
 *       dialogues    : [ {speaker, name:{zh,en}, text:{zh,en}} ]
 *       choices      : [ { id, text:{zh,en}, effects:{9键}, knowledge:"k_id" } ]
 *       consequences : { A:{zh,en}, ... }  叙事化结算结果
 *       subEvents    : [ 附加题, 结构同主线 ]
 *   - effects 键固定 9 个 (见 STATE_KEYS); 标记键: markedBy/markedRound/
 *     markedDeep/dominoRisk/moralHazard/collude/priorityKill/isGroupVote/
 *     justiceEnding (非状态值, 供逻辑判定)。
 * ============================================================= */

const roundsData = [
  /* ============================ 第1轮 入学月 ============================ */
  {
    round: 1,
    title: { zh: "入学月", en: "Enrollment Month" },
    theme: { zh: "基础财务认知", en: "Basic Financial Literacy" },
    livingExpense: -500,
    scene: {
      zh: "开学第一天，你拿到 ¥2,000 生活费。1号陈浩宇学长热情邀请你参加“校园创业分享会”，说有个“稳赚不赔”的项目。9号周健刚买了新手机在宿舍炫耀。",
      en: "First day of school, you get ¥2,000 living allowance. No.1 Haoyu Chen warmly invites you to a 'campus entrepreneurship meetup' promising a 'can't-lose' project. No.9 Jian Zhou flaunts a new phone in the dorm."
    },
    dialogues: [
      { speaker: 1, name: { zh: "1号 陈浩宇", en: "No.1 Haoyu Chen" }, text: { zh: "跟着学长投啊兄弟，我上个月投了两千，这周就回本了！", en: "Invest with the senior, bro — I put in two grand last month and broke even this week!" } },
      { speaker: 4, name: { zh: "4号 王思敏", en: "No.4 Simin Wang" }, text: { zh: "那个创业项目你了解过吗？什么都不懂就投钱？", en: "Do you even know that startup project? Throwing money in blind?" } },
      { speaker: 9, name: { zh: "9号 周健", en: "No.9 Jian Zhou" }, text: { zh: "买新手机那个！新手机太香了，分期一个月才几百！", en: "Get the new phone! It's gorgeous, installments are just a few hundred a month!" } }
    ],
    choices: [
      { id: "A", text: { zh: "预算分配：¥1,500必要 + ¥900消费 + ¥600储蓄（50/30/20）", en: "Budget: ¥1,500 needs + ¥900 wants + ¥600 savings (50/30/20)" },
        effects: { coins: 0, savings: 600, energy: 0, credit: 0, social: 2, academics: 0, literacy: 5, survival: 5, liability: 0 }, knowledge: "k_budget_503020" },
      { id: "B", text: { zh: "省吃俭用：全存银行，只花¥500", en: "Frugal: bank it all, spend only ¥500" },
        effects: { coins: 2500, savings: 2500, energy: -5, credit: 0, social: -3, academics: 3, literacy: 3, survival: -15, liability: 0 }, knowledge: "k_saving_overfrugal" },
      { id: "C", text: { zh: "及时行乐：买新手机¥2,500 + 聚餐¥300", en: "Live now: new phone ¥2,500 + dinner ¥300" },
        effects: { coins: -2800, savings: 0, energy: 3, credit: 0, social: 8, academics: -3, literacy: -5, survival: 20, liability: 0 }, knowledge: "k_impulse_consumption" },
      { id: "D", text: { zh: "跟学长投资 ¥2,000 到“校园创业项目”", en: "Invest ¥2,000 with the senior's 'campus startup'" },
        effects: { coins: -2000, savings: 0, energy: 0, credit: -5, social: 3, academics: -2, literacy: -3, survival: 10, liability: 0, markedBy: 1, markedRound: 2 }, knowledge: "k_no_free_lunch" }
    ],
    consequences: {
      A: { zh: "你按计划分配，既顾生活又留了储蓄，心里踏实。", en: "You allocated by plan — living covered, savings kept, mind at ease." },
      B: { zh: "你省下 ¥2,500，但半个月只吃食堂，有点闷。", en: "You saved ¥2,500, but a fortnight of canteen food left you dull." },
      C: { zh: "新手机到手很爽，但生活费见底，下月要发愁。", en: "The new phone feels great, but the allowance is gone — next month looms." },
      D: { zh: "学长记下了你，下轮开始“特别关照”你的钱包。", en: "The senior flagged you — next round he'll give your wallet 'special attention.'" }
    },
    subEvents: [
      {
        id: "1-2",
        title: { zh: "社团招新的“会费”陷阱", en: "The 'Membership Fee' Trap" },
        scene: {
          zh: "社团招新季，一个“投资理财协会”收 ¥300 会费，承诺“每周荐股+内部资料”；另一个“金融知识公益社”免费但活动少。",
          en: "Club fair: an 'Investment Association' charges ¥300 for 'weekly stock picks + insider materials'; a free 'Financial Literacy Club' has few events."
        },
        dialogues: [],
        choices: [
          { id: "A", text: { zh: "交¥300加入“投资理财协会”", en: "Pay ¥300 to join the 'Investment Association'" },
            effects: { coins: -300, savings: 0, energy: 0, credit: 0, social: 2, academics: 1, literacy: -3, survival: 0, liability: 0 }, knowledge: "k_knowledge_paywall" },
          { id: "B", text: { zh: "加入免费的“金融知识公益社”", en: "Join the free 'Financial Literacy Club'" },
            effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 3, academics: 2, literacy: 5, survival: 2, liability: 0 }, knowledge: "k_knowledge_paywall" },
          { id: "C", text: { zh: "都不加，自己看书学习", en: "Join none, self-study from books" },
            effects: { coins: 0, savings: 0, energy: -2, credit: 0, social: -1, academics: 5, literacy: 8, survival: 0, liability: 0 }, knowledge: "k_knowledge_paywall" },
          { id: "D", text: { zh: "两个都加，对比看看", en: "Join both, compare" },
            effects: { coins: -300, savings: 0, energy: -2, credit: 0, social: 3, academics: 2, literacy: 2, survival: 0, liability: 0 }, knowledge: "k_knowledge_paywall" }
        ],
        consequences: {
          A: { zh: "你交了“智商税”，所谓的内部资料全是公开信息。", en: "You paid the 'stupidity tax' — the 'insider' materials were all public." },
          B: { zh: "免费社团内容扎实，你少花冤枉钱还学到真东西。", en: "The free club was solid — you learned real things without wasting money." },
          C: { zh: "图书馆和公开课才是真宝库，你财商大涨。", en: "Libraries and open courses are the real treasure — your literacy jumped." },
          D: { zh: "两边对比让你看清真假，但 ¥300 打了水漂。", en: "Comparing both showed you the truth, but ¥300 sank with no return." }
        },
        knowledge: "k_knowledge_paywall"
      }
    ]
  },

  /* ============================ 第2轮 储蓄月 ============================ */
  {
    round: 2,
    title: { zh: "储蓄月", en: "Savings Month" },
    theme: { zh: "复利与投资", en: "Compound Interest & Investing" },
    livingExpense: -500,
    scene: {
      zh: "一个月过去，你看到2号林梦琪在朋友圈晒“月入八千”的收益截图，私聊说有个“内部基金”月息20%、名额有限。",
      en: "A month later, No.2 Mengqi Lin posts 'eight-grand-a-month' earnings screenshots and DMs you about an 'inside fund' at 20% monthly, limited slots."
    },
    dialogues: [
      { speaker: 2, name: { zh: "2号 林梦琪", en: "No.2 Mengqi Lin" }, text: { zh: "跟学长投那个！我这个月又赚了八千，跟对人很重要。", en: "Invest with the senior! I made eight grand again — following the right person matters." } },
      { speaker: 4, name: { zh: "4号 王思敏", en: "No.4 Simin Wang" }, text: { zh: "月息20%？你算过年化吗？240%！巴菲特年化才20%，她比巴菲特还厉害？", en: "20% a month? That's 240% annualized! Buffett's 20% — is she better than Buffett?" } },
      { speaker: 9, name: { zh: "9号 周健", en: "No.9 Jian Zhou" }, text: { zh: "我选激进定投了，富贵险中求！", en: "I went aggressive on the DCA — fortune favors the bold!" } }
    ],
    choices: [
      { id: "A", text: { zh: "稳健定投：每月¥100，年化6%（10年≈¥16,388）", en: "Steady DCA: ¥100/mo, 6% APR (10y ≈ ¥16,388)" },
        effects: { coins: -100, savings: 100, energy: 0, credit: 2, social: 0, academics: 1, literacy: 8, survival: 2, liability: 0 }, knowledge: "k_compound" },
      { id: "B", text: { zh: "激进定投：每月¥300，年化10%（高风险，可能亏）", en: "Aggressive DCA: ¥300/mo, 10% APR (high risk, may lose)" },
        effects: { coins: -300, savings: 300, energy: -2, credit: 1, social: 0, academics: 0, literacy: 5, survival: 0, liability: 0, riskNote: "50% +15% / 50% -20%" }, knowledge: "k_risk_return" },
      { id: "C", text: { zh: "存活期：余额宝年化2%（每月¥100，10年≈¥13,270，跑不赢通胀）", en: "Idle cash: Yu'ebao 2% APR (¥100/mo, ≈¥13,270 in 10y, loses to inflation)" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: 2, survival: 1, liability: 0 }, knowledge: "k_inflation" },
      { id: "D", text: { zh: "跟学姐投“内部基金”月息20%", en: "Join the senior's 'inside fund' at 20% monthly" },
        effects: { coins: -500, savings: 0, energy: 2, credit: -5, social: 2, academics: -2, literacy: -5, survival: 10, liability: 0, markedBy: 2, markedRound: 4 }, knowledge: "k_too_good_true" }
    ],
    consequences: {
      A: { zh: "复利慢慢滚雪球，你睡得踏实。", en: "Compounding rolls the snowball slowly — you sleep easy." },
      B: { zh: "高风险伴随波动，可能大赚也可能回撤，你赌了一把。", en: "High risk swings both ways — you gambled on a big swing." },
      C: { zh: "钱安全但被通胀悄悄吃掉购买力。", en: "Money's safe but inflation quietly eats its power." },
      D: { zh: "学姐把你拉进群，第4轮你会发现本金“暂时取不出”。", en: "She pulled you into the group — by round 4 your principal will be 'temporarily locked.'" }
    },
    subEvents: [
      {
        id: "2-2",
        title: { zh: "应急基金要不要留？", en: "Keep an Emergency Fund?" },
        scene: {
          zh: "你刚决定定投，5号张小雅提醒你“先留3个月生活费当应急基金”。你现在只有 ¥3,000 存款。",
          en: "Just as you commit to investing, No.5 Xiaoya Zhang reminds you to 'keep 3 months' living costs as an emergency fund.' You have only ¥3,000 saved."
        },
        dialogues: [
          { speaker: 5, name: { zh: "5号 张小雅", en: "No.5 Xiaoya Zhang" }, text: { zh: "先留3个月生活费当应急基金，再考虑定投。", en: "Keep three months' costs as a fund first, then invest." } }
        ],
        choices: [
          { id: "A", text: { zh: "留¥1,500应急基金，剩下定投", en: "Keep ¥1,500 emergency fund, invest the rest" },
            effects: { coins: 0, savings: 1500, energy: 0, credit: 1, social: 0, academics: 0, literacy: 5, survival: 3, liability: 0 }, knowledge: "k_emergency_fund" },
          { id: "B", text: { zh: "全部定投，应急以后再说", en: "Invest it all, deal with emergencies later" },
            effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: -3, survival: -3, liability: 0 }, knowledge: "k_emergency_fund" },
          { id: "C", text: { zh: "留¥3,000全部当应急基金", en: "Keep all ¥3,000 as emergency fund" },
            effects: { coins: 0, savings: 3000, energy: 0, credit: 2, social: 0, academics: 0, literacy: 2, survival: 5, liability: 0 }, knowledge: "k_emergency_fund" },
          { id: "D", text: { zh: "借呗借¥3,000定投，用收益还利息", en: "Borrow ¥3,000 to invest, repay interest with gains" },
            effects: { coins: 3000, savings: 0, energy: -3, credit: -10, social: 0, academics: 0, literacy: -8, survival: -3, liability: 3000 }, knowledge: "k_emergency_fund" }
        ],
        consequences: {
          A: { zh: "攻守兼备，万一有事有钱周转。", en: "Balanced — cash on hand if something hits." },
          B: { zh: "没缓冲，一次意外就得借高利贷。", en: "No buffer — one shock forces a loan shark." },
          C: { zh: "过于保守，钱没跑赢通胀，但安全。", en: "Over-cautious, loses to inflation, but safe." },
          D: { zh: "借钱投资是大忌，利息会吃掉你的收益。", en: "Investing on borrow is a cardinal sin — interest eats your gains." }
        },
        knowledge: "k_emergency_fund"
      }
    ]
  },

  /* ============================ 第3轮 消费月 ============================ */
  {
    round: 3,
    title: { zh: "消费月", en: "Spending Month" },
    theme: { zh: "债务管理", en: "Debt Management" },
    livingExpense: -500,
    scene: {
      zh: "双11信用卡刷了 ¥5,000，最低还款 ¥500。1号陈浩宇说“还不上找我，我帮你借新的，利息低”。",
      en: "You swiped ¥5,000 on Singles' Day, minimum payment ¥500. No.1 Haoyu Chen says 'can't pay? borrow new from me, low rate.'"
    },
    dialogues: [
      { speaker: 1, name: { zh: "1号 陈浩宇", en: "No.1 Haoyu Chen" }, text: { zh: "找我借啊！我这边利息低，当天到账，先把信用卡还了再说！", en: "Borrow from me! Low rate, same-day — pay the card first!" } },
      { speaker: 4, name: { zh: "4号 王思敏", en: "No.4 Simin Wang" }, text: { zh: "那是找死。校园贷年利率动辄30%以上，你还不起的。", en: "That's suicide. Campus loans hit 30%+ APR — you can't pay." } },
      { speaker: 3, name: { zh: "3号 赵大勇", en: "No.3 Dayong Zhao" }, text: { zh: "还不上？跟我说，我帮你“想想办法”。", en: "Can't pay? Tell me, I'll help you 'figure it out.'" } }
    ],
    choices: [
      { id: "A", text: { zh: "全额还款 ¥5,000（无利息）", en: "Pay in full ¥5,000 (no interest)" },
        effects: { coins: -5000, savings: 0, energy: -3, credit: 8, social: 0, academics: 0, literacy: 8, survival: 1, liability: 0 }, knowledge: "k_credit_card_apr" },
      { id: "B", text: { zh: "最低还款 ¥500（剩余日息0.05%，年化≈18%）", en: "Minimum ¥500 (daily 0.05%, ~18% APR)" },
        effects: { coins: -500, savings: 0, energy: -2, credit: -3, social: 0, academics: 0, literacy: -3, survival: -2, liability: 68 }, knowledge: "k_credit_card_apr" },
      { id: "C", text: { zh: "分期12个月（月¥446，实际年化≈13%）", en: "Installment 12 mo (¥446/mo, real APR ≈13%)" },
        effects: { coins: -446, savings: 0, energy: 0, credit: 2, social: 0, academics: 0, literacy: 0, survival: 0, liability: 0 }, knowledge: "k_credit_card_apr" },
      { id: "D", text: { zh: "借校园贷还信用卡（以贷养贷）", en: "Campus loan to pay card (debt rollover)" },
        effects: { coins: 5000, savings: 0, energy: -5, credit: -15, social: 0, academics: -3, literacy: -10, survival: -5, liability: 5000, markedDeep: 1 }, knowledge: "k_predatory_lending" }
    ],
    consequences: {
      A: { zh: "一刀还清，免息期保住，干干净净。", en: "Paid clean, grace period kept, spotless." },
      B: { zh: "每月只还最低，利息悄悄复利，越欠越多（约¥68/月）。", en: "Minimum only — interest compounds quietly, debt grows (~¥68/mo)." },
      C: { zh: "分期透明，但手续费也是成本，中庸之选。", en: "Installment is transparent, but fees are still cost — a middling pick." },
      D: { zh: "你被1号深度套牢，债务雪球开始滚动。", en: "You're deeply hooked by No.1 — the debt snowball starts rolling." }
    },
    subEvents: [
      {
        id: "3-2",
        title: { zh: "分期购物的真实成本", en: "The Real Cost of Installments" },
        scene: { zh: "¥6,000 笔记本，“12期免息”但每月手续费 ¥30。", en: "A ¥6,000 laptop, '12-month interest-free' but ¥30 monthly fee." },
        dialogues: [],
        choices: [
          { id: "A", text: { zh: "12期分期（总花费¥6,360）", en: "12-month installment (total ¥6,360)" },
            effects: { coins: -530, savings: 0, energy: 0, credit: 1, social: 2, academics: 2, literacy: -2, survival: 0, liability: 0 }, knowledge: "k_hidden_fee_installment" },
          { id: "B", text: { zh: "攒3个月全款买", en: "Save 3 months, pay in full" },
            effects: { coins: 0, savings: 500, energy: -2, credit: 0, social: -1, academics: 2, literacy: 5, survival: 1, liability: 0 }, knowledge: "k_hidden_fee_installment" },
          { id: "C", text: { zh: "买二手 ¥3,500", en: "Buy used ¥3,500" },
            effects: { coins: -3500, savings: 0, energy: 0, credit: 0, social: 1, academics: 2, literacy: 3, survival: 1, liability: 0 }, knowledge: "k_hidden_fee_installment" },
          { id: "D", text: { zh: "不买，用学校机房", en: "Don't buy, use the lab" },
            effects: { coins: 0, savings: 0, energy: -2, credit: 0, social: 0, academics: 3, literacy: 5, survival: 0, liability: 0 }, knowledge: "k_hidden_fee_installment" }
        ],
        consequences: {
          A: { zh: "“免息”其实花了 ¥360 手续费。", en: "'Interest-free' actually cost ¥360 in fees." },
          B: { zh: "延迟满足，全款到手最划算。", en: "Delayed gratification — full price upfront is cheapest." },
          C: { zh: "二手省一半，理性之选。", en: "Used saves half — a rational pick." },
          D: { zh: "不消费也是一种省钱。", en: "Not buying is also saving." }
        },
        knowledge: "k_hidden_fee_installment"
      },
      {
        id: "3-3",
        title: { zh: "催收电话来了", en: "The Collection Call" },
        condition: {
          trigger: "markedDeep",
          desc: { zh: "条件题：仅当玩家在题3-1选择 D（借校园贷还信用卡，被1号深度套牢，status.markedDeep=1）时触发；否则跳过此题。B3 渲染前请判定 status.markedDeep===1。", en: "Conditional: triggers only if player chose Q3-1 D (campus loan, markedDeep=1). B3 should render this only when status.markedDeep===1; skip otherwise." }
        },
        scene: {
          zh: "若你之前借了校园贷，3号赵大勇“勇哥”来电：“再不还联系你家人和辅导员。”",
          en: "If you borrowed before, No.3 Dayong Zhao calls: 'Pay up or we tell your family and counselor.'"
        },
        dialogues: [
          { speaker: 3, name: { zh: "3号 赵大勇", en: "No.3 Dayong Zhao" }, text: { zh: "兄弟，钱什么时候还？我这边也不好交代啊。", en: "Bro, when's the money? I've got people to answer to." } }
        ],
        choices: [
          { id: "A", text: { zh: "再借一笔还旧的（以贷养贷）", en: "Borrow more to pay old (rollover)" },
            effects: { coins: 3000, savings: 0, energy: -8, credit: -15, social: 0, academics: -5, literacy: -10, survival: -8, liability: 3000 }, knowledge: "k_predatory_lending" },
          { id: "B", text: { zh: "告诉家人/辅导员", en: "Tell family / counselor" },
            effects: { coins: 0, savings: 0, energy: -3, credit: 0, social: 5, academics: 0, literacy: 5, survival: 5, liability: 0, note: "负债可被协商减免" }, knowledge: "k_predatory_lending" },
          { id: "C", text: { zh: "硬刚“敢联系我家人就报警”", en: "Stand firm: 'contact my family and I call police'" },
            effects: { coins: 0, savings: 0, energy: -2, credit: 0, social: -2, academics: 0, literacy: 3, survival: 3, liability: 0 }, knowledge: "k_predatory_lending" },
          { id: "D", text: { zh: "拉黑电话假装没事", en: "Block the call, pretend nothing" },
            effects: { coins: 0, savings: 0, energy: -3, credit: -2, social: -3, academics: -1, literacy: -5, survival: -5, liability: 68 }, knowledge: "k_predatory_lending" }
        ],
        consequences: {
          A: { zh: "以贷养贷是无底洞，债务翻倍。", en: "Rollover is a bottomless pit — debt doubles." },
          B: { zh: "家人老师介入，校园贷违法，可协商减免。", en: "Family and school step in; campus loan is illegal, debt can be negotiated down." },
          C: { zh: "无资质校园贷本身违法，你有理。", en: "Unlicensed campus loan is illegal — you're in the right." },
          D: { zh: "沉默让利息继续滚，问题没消失。", en: "Silence lets interest roll on — the problem stays." }
        },
        knowledge: "k_predatory_lending"
      }
    ]
  },

  /* ============================ 第4轮 规划月 ============================ */
  {
    round: 4,
    title: { zh: "规划月", en: "Planning Month" },
    theme: { zh: "风险与保障", en: "Risk & Protection" },
    livingExpense: -500,
    scene: {
      zh: "7号陈小明的妈妈（8号王阿姨）查出重病，需 ¥50,000 手术费，小明只有 ¥10,000。8号王阿姨急得直哭，说“实在不行我去借高利贷”。",
      en: "No.7 Xiaoming's mom (No.8 Auntie Wang) has a critical illness needing ¥50,000 surgery; Xiaoming has only ¥10,000. Auntie Wang weeps, 'if all fails I'll borrow from loan sharks.'"
    },
    dialogues: [
      { speaker: 1, name: { zh: "1号 陈浩宇", en: "No.1 Haoyu Chen" }, text: { zh: "当天到账的那个最快，救人要紧！", en: "The same-day one is fastest — saving a life!" } },
      { speaker: 5, name: { zh: "5号 张小雅", en: "No.5 Xiaoya Zhang" }, text: { zh: "用互助基金啊！这钱就是为这种情况准备的，我出两万。", en: "Use the mutual fund! That's exactly what it's for — I'll put in twenty thousand." } },
      { speaker: 4, name: { zh: "4号 王思敏", en: "No.4 Simin Wang" }, text: { zh: "众筹加救助虽然慢，但合规。校园贷利息高，小明还不上会被催收。", en: "Crowdfund plus aid is slower but compliant. Campus loan is costly; Xiaoming can't pay, collectors come." } },
      { speaker: 6, name: { zh: "6号 李浩然", en: "No.6 Haoran Li" }, text: { zh: "我要写报道，呼吁关注因病致贫！", en: "I'm writing a piece — spotlight medical-poverty!" } },
      { speaker: 8, name: { zh: "8号 王阿姨", en: "No.8 Auntie Wang" }, text: { zh: "都怪我没用，拖累孩子了……要不我去借高利贷？", en: "I'm useless, dragging my child down… should I borrow from loan sharks?" } }
    ],
    choices: [
      { id: "A", text: { zh: "每人捐¥500（共¥4,500，杯水车薪）", en: "Each donates ¥500 (¥4,500 total, a drop)" },
        effects: { coins: -500, savings: -500, energy: -2, credit: 0, social: 5, academics: 0, literacy: 2, survival: 2, liability: 0, isGroupVote: true }, knowledge: "k_emergency_fund_insurance" },
      { id: "B", text: { zh: "班级互助基金出¥20,000（5号管理，正确路径）", en: "Class mutual fund pays ¥20,000 (managed by No.5, correct)" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 2, social: 8, academics: 0, literacy: 8, survival: 5, liability: 0, isGroupVote: true }, knowledge: "k_emergency_fund_insurance" },
      { id: "C", text: { zh: "帮小明申请校园贷¥50,000（触发多米诺风险）", en: "Get Xiaoming a ¥50,000 campus loan (triggers domino risk)" },
        effects: { coins: 50000, savings: 0, energy: -5, credit: -10, social: 3, academics: -3, literacy: -10, survival: -5, liability: 50000, dominoRisk: true }, knowledge: "k_predatory_lending" },
      { id: "D", text: { zh: "众筹+学校救助+医保报销（最终¥30,000+，正确路径）", en: "Crowdfund + school aid + insurance (¥30,000+, correct)" },
        effects: { coins: 0, savings: 0, energy: -3, credit: 1, social: 6, academics: 0, literacy: 8, survival: 4, liability: 0, isGroupVote: true }, knowledge: "k_emergency_fund_insurance" }
    ],
    consequences: {
      A: { zh: "心意到了，但离手术费还差得远。", en: "Kind gesture, but far short of the bill." },
      B: { zh: "互助基金显神威，小明妈顺利入院。", en: "The mutual fund shines — Xiaoming's mom is admitted in time." },
      C: { zh: "小明背上¥50,000债务，多米诺骨牌开始倒。", en: "Xiaoming takes ¥50,000 debt — the domino starts falling." },
      D: { zh: "合规渠道叠加，凑齐大部分费用，最稳妥。", en: "Layered compliant channels covered most — the safest path." }
    },
    subEvents: [
      {
        id: "4-2",
        title: { zh: "保险要不要买？", en: "Buy Insurance?" },
        scene: {
          zh: "学校推 ¥100/年意外险和 ¥300/年百万医疗险。你觉得年轻身体好用不上。",
          en: "School offers ¥100/yr accident and ¥300/yr million-medical insurance. You feel young and healthy, no need."
        },
        dialogues: [],
        choices: [
          { id: "A", text: { zh: "两个都买（¥400/年）", en: "Buy both (¥400/yr)" },
            effects: { coins: -400, savings: 0, energy: 0, credit: 3, social: 0, academics: 0, literacy: 8, survival: 3, liability: 0 }, knowledge: "k_insurance_value" },
          { id: "B", text: { zh: "只买意外险", en: "Accident insurance only" },
            effects: { coins: -100, savings: 0, energy: 0, credit: 1, social: 0, academics: 0, literacy: 3, survival: 1, liability: 0 }, knowledge: "k_insurance_value" },
          { id: "C", text: { zh: "只买医疗险", en: "Medical insurance only" },
            effects: { coins: -300, savings: 0, energy: 0, credit: 2, social: 0, academics: 0, literacy: 5, survival: 2, liability: 0 }, knowledge: "k_insurance_value" },
          { id: "D", text: { zh: "都不买，省钱投资", en: "Buy none, invest the money" },
            effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: -3, survival: -3, liability: 0 }, knowledge: "k_insurance_value" }
        ],
        consequences: {
          A: { zh: "几百块撬动数百万保额，年轻人杠杆最高。", en: "A few hundred unlocks millions in cover — best leverage when young." },
          B: { zh: "意外有保障，但大病仍裸奔。", en: "Accident covered, but critical illness still exposed." },
          C: { zh: "医疗兜底，意外靠运气。", en: "Medical backstop, accident left to luck." },
          D: { zh: "省下保费，却赌上未知的大额风险。", en: "Saved the premium, but bet on unknown huge risk." }
        },
        knowledge: "k_insurance_value"
      }
    ]
  },

  /* ============================ 第5轮 警觉月 ============================ */
  {
    round: 5,
    title: { zh: "警觉月", en: "Alertness Month" },
    theme: { zh: "反诈与识别", en: "Anti-Fraud & Detection" },
    livingExpense: -500,
    scene: {
      zh: "手机收到多条信息，哪些是诈骗？你需识别刷单、钓鱼退款、杀猪盘、传销等套路。",
      en: "Your phone gets several messages — which are scams? Spot brushing-order, phishing refund, pig-butchering, pyramid traps."
    },
    dialogues: [
      { speaker: 6, name: { zh: "6号 李浩然", en: "No.6 Haoran Li" }, text: { zh: "这几条里刷单、退款链接、杀猪盘、拉人头全是坑！", en: "Among these, brushing, refund links, pig-butchering, recruitment — all traps!" } }
    ],
    choices: [
      { id: "A", text: { zh: "“零门槛刷单，日入300，加QQ群”", en: "'No-threshold brushing, ¥300/day, join QQ'" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: 0, survival: 0, liability: 0 }, isScam: true, knowledge: "k_scam_types" },
      { id: "B", text: { zh: "“客服来电：订单有问题，点击链接退款”", en: "'CS call: order issue, click link to refund'" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: 0, survival: 0, liability: 0 }, isScam: true, knowledge: "k_scam_types" },
      { id: "C", text: { zh: "“工商银行：理财收益¥12.50，登录APP查看”", en: "'ICBC: ¥12.50 earnings, open APP'" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: 0, survival: 0, liability: 0 }, isScam: false, knowledge: "k_scam_types" },
      { id: "D", text: { zh: "“网恋对象：内部投资平台稳赚不赔”", en: "'Dating partner: insider platform, guaranteed'" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: 0, survival: 0, liability: 0 }, isScam: true, knowledge: "k_scam_types" },
      { id: "E", text: { zh: "“学校资助中心：助学金申请，登录官网”", en: "'Aid center: grant apply, official site'" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: 0, survival: 0, liability: 0 }, isScam: false, knowledge: "k_scam_types" },
      { id: "F", text: { zh: "“学长推荐：校园创业，拉人头提成¥500”", en: "'Senior: campus startup, ¥500 recruit commission'" },
        effects: { coins: 0, savings: 0, energy: 0, credit: 0, social: 0, academics: 0, literacy: 0, survival: 0, liability: 0 }, isScam: true, knowledge: "k_scam_types" }
    ],
    multiSelect: true,
    scoring: {
      allCorrect: { literacy: 15, label: { zh: "反诈达人", en: "Anti-Fraud Master" } },
      correct45: { literacy: 8 },
      correct23: { literacy: 3 },
      correct01: { literacy: -5 }
    },
    consequences: {
      A: { zh: "刷单是典型先交钱骗局，识别正确。", en: "Brushing orders is the classic pay-first scam — correct call." },
      B: { zh: "钓鱼退款链接，正规客服绝不会让你点陌生链接。", en: "Phishing refund — real CS never sends unknown links." },
      C: { zh: "银行官方APP通知属正规渠道。", en: "Bank's official-app notice is a legit channel." },
      D: { zh: "杀猪盘：感情+投资=骗局。", en: "Pig-butchering: romance + investment = scam." },
      E: { zh: "学校官网通知可信。", en: "School's official-site notice is trustworthy." },
      F: { zh: "拉人头返利是传销特征。", en: "Recruitment commission is pyramid-scheme hallmark." }
    },
    subEvents: [
      {
        id: "5-2",
        title: { zh: "发现了“学姐”的秘密", en: "You Discover the 'Senior's' Secret" },
        scene: {
          zh: "你偶然发现2号林梦琪的收益截图是P的，还拉了好几个同学进“内部基金”。3号赵大勇警告你“别多管闲事”。",
          en: "You find No.2 Mengqi's earnings screenshots are faked; she pulled classmates into the 'inside fund.' No.3 Dayong warns you 'mind your own business.'"
        },
        dialogues: [
          { speaker: 6, name: { zh: "6号 李浩然", en: "No.6 Haoran Li" }, text: { zh: "我来写报道曝光她！证据都齐了，这就发。", en: "I'll write it up and expose her! Evidence's all in — publishing now." } },
          { speaker: 2, name: { zh: "2号 林梦琪", en: "No.2 Mengqi Lin" }, text: { zh: "你别血口喷人！我的收益都是真的！", en: "Don't slander me! My returns are real!" } },
          { speaker: 3, name: { zh: "3号 赵大勇", en: "No.3 Dayong Zhao" }, text: { zh: "小子，别多管闲事，对你没好处。", en: "Kid, don't stick your nose in — won't end well." } }
        ],
        choices: [
          { id: "A", text: { zh: "公开揭穿", en: "Expose publicly" },
            effects: { coins: 0, savings: 0, energy: -3, credit: 2, social: 5, academics: 0, literacy: 10, survival: 3, liability: 0, priorityKill: true }, knowledge: "k_whistleblowing" },
          { id: "B", text: { zh: "暗中收集证据", en: "Gather evidence quietly" },
            effects: { coins: 0, savings: 0, energy: -2, credit: 0, social: 2, academics: 2, literacy: 5, survival: 2, liability: 0 }, knowledge: "k_whistleblowing" },
          { id: "C", text: { zh: "私下谈判“分我一笔就不说”", en: "Negotiate: 'cut me in, I stay quiet'" },
            effects: { coins: 2000, savings: 2000, energy: 1, credit: -10, social: -5, academics: -3, literacy: -15, survival: 1, liability: 0, moralHazard: true }, knowledge: "k_whistleblowing" },
          { id: "D", text: { zh: "匿名举报", en: "Report anonymously" },
            effects: { coins: 0, savings: 0, energy: -1, credit: 1, social: 3, academics: 0, literacy: 8, survival: 2, liability: 0 }, knowledge: "k_whistleblowing" }
        ],
        consequences: {
          A: { zh: "你正面开火，狼人把你列为优先清除目标。", en: "You went loud — the wolves marked you for priority removal." },
          B: { zh: "稳妥取证，进可攻退可守。", en: "Steady evidence-gathering — flexible offense and defense." },
          C: { zh: "你拿了封口费，踏进道德风险深渊。", en: "You took hush money — stepped into moral hazard." },
          D: { zh: "匿名举报既止损又自保。", en: "Anonymous report stops harm while keeping you safe." }
        },
        knowledge: "k_whistleblowing"
      }
    ]
  },

  /* ============================ 第6轮 毕业月 ============================ */
  {
    round: 6,
    title: { zh: "毕业月", en: "Graduation Month" },
    theme: { zh: "综合整合与多米诺破产", en: "Integration & Domino Bankruptcy" },
    livingExpense: -500,
    scene: {
      zh: "你掌握了狼人证据，3号赵大勇威胁“敢举报让你混不下去”，1号陈浩宇利诱“跟我干毕业安排工作月薪过万”。这是终极抉择。",
      en: "You hold the wolves' evidence. No.3 Dayong threatens 'report me and you won't survive,' No.1 Haoyu tempts 'work with me, ten-k job after grad.' The final choice."
    },
    dialogues: [
      { speaker: 3, name: { zh: "3号 赵大勇", en: "No.3 Dayong Zhao" }, text: { zh: "敢举报让你混不下去，想清楚。", en: "Report me and you won't survive here — think." } },
      { speaker: 1, name: { zh: "1号 陈浩宇", en: "No.1 Haoyu Chen" }, text: { zh: "跟我干，毕业安排工作月薪过万，保你上岸。", en: "Work with me, ten-k job after grad, guaranteed." } },
      { speaker: 4, name: { zh: "4号 王思敏", en: "No.4 Simin Wang" }, text: { zh: "该站出来了，证据都在，带大家把狼投出去。", en: "Time to step up — evidence is all there, vote the wolves out." } }
    ],
    choices: [
      { id: "A", text: { zh: "公开身份带领投票", en: "Reveal identity, lead the vote" },
        effects: { coins: 0, savings: 0, energy: -3, credit: 5, social: 8, academics: 3, literacy: 15, survival: 5, liability: 0, justiceEnding: true }, knowledge: "k_systemic_risk_joint_liability" },
      { id: "B", text: { zh: "匿名举报 + 投票", en: "Anonymous report + vote" },
        effects: { coins: 0, savings: 0, energy: -2, credit: 3, social: 4, academics: 1, literacy: 10, survival: 3, liability: 0 }, knowledge: "k_systemic_risk_joint_liability" },
      { id: "C", text: { zh: "接受利诱加入狼人", en: "Take the bribe, join the wolves" },
        effects: { coins: 5000, savings: 5000, energy: 2, credit: -15, social: -8, academics: -5, literacy: -20, survival: 1, liability: 0, collude: true }, knowledge: "k_systemic_risk_joint_liability" },
      { id: "D", text: { zh: "明哲保身不站队", en: "Stay safe, pick no side" },
        effects: { coins: 0, savings: 0, energy: 0, credit: -2, social: -5, academics: 0, literacy: -5, survival: -3, liability: 0 }, knowledge: "k_systemic_risk_joint_liability" }
    ],
    consequences: {
      A: { zh: "你站出来，狼人被投出，正义结局触发。", en: "You stepped up, wolves voted out — justice ending triggers." },
      B: { zh: "匿名出击，既清场又保全自己。", en: "Anonymous strike — cleared the field while staying safe." },
      C: { zh: "你拿了¥5,000，却走向同流合污结局。", en: "You took ¥5,000 but walked into the collusion ending." },
      D: { zh: "你置身事外，换来一个平庸而孤独的收场。", en: "You stood aside — an ordinary, lonely ending." }
    },
    subEvents: [
      {
        id: "6-2",
        title: { zh: "毕业财务体检（自动结算）", en: "Graduation Financial Checkup (Auto)" },
        autoCalc: true,
        scene: {
          zh: "系统自动计算净资产、财商分数、财务健康度，并给出 S/A/B/C/D 评级。",
          en: "System auto-computes net worth, literacy score, health %, and grades S/A/B/C/D."
        },
        dialogues: [],
        choices: [],
        consequences: {
          S: { zh: "S级（净资产 coins-liability>¥10,000，literacy>90）：财务自由。", en: "Grade S (net coins-liability>¥10,000, literacy>90): Financial Freedom." },
          A: { zh: "A级（净资产>¥5,000，literacy>70）：理财达人。", en: "Grade A (net>¥5,000, literacy>70): Investing Pro." },
          B: { zh: "B级（净资产>0，literacy>50）：平安毕业。", en: "Grade B (net>0, literacy>50): Safe Graduation." },
          C: { zh: "C级（净资产<0或liability>¥3,000）：需要反思。", en: "Grade C (net<0 or liability>¥3,000): Reflect." },
          D: { zh: "D级（破产或同流合污）：深刻教训。", en: "Grade D (bankrupt or colluded): Hard Lesson." }
        },
        knowledge: "k_systemic_risk_joint_liability",
        formula: {
          netWorth: "coins - liability",
          literacy: "答题正确率×100 + 道德选择加分（effects.literacy 累加）",
          healthRatio: "(coins - liability) / 3000 × 100%"
        }
      }
    ]
  }
];

if (typeof window !== "undefined") { window.roundsData = roundsData; }
if (typeof module !== "undefined" && module.exports) { module.exports = roundsData; }
