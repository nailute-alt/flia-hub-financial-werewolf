/* =============================================================
 * FLIA-werewolf 金融狼人杀 v1.0 — 7个结局叙事文本 / 7 Endings
 * 作者 Role: A2 叙事与内容工程师 (NarrativeDesigner)
 * 胜利结局 3 个: 知识守护者 / 财务自由者 / 社区英雄
 * 失败结局 4 个: 破产者 / 被狼同化 / 孤独幸存者 / 多米诺崩塌
 *
 * ⚠️ v2 更新 (A2 第二轮对齐):
 *   每个结局的 condition 已改为 8 显示键 + 隐藏 liability 的判定写法
 *   (coins / savings / energy / credit / social / academics / literacy /
 *    survival 为显示键; liability 为隐藏判定键, 破产机制核心)。
 *   literacy = 原"财商"; coins = 原"金币"; survival = 原"心情/心理状态"。
 *
 * 数据格式约定:
 *   - 顶层: const endingsData = { ... }  (对象, key 为结局 id)
 *   - 每个结局:
 *       title            : {zh, en}
 *       type             : "victory" | "defeat"
 *       narrative        : {zh, en}  英文 100-150 词叙事; 中文同义
 *       unlocked_achievement : {zh, en}
 *       reflection_question  : {zh, en}
 *       condition        : String  触发条件 (B3 评分模块按 8 键 + 标记判定)
 * ============================================================= */

const endingsData = {
  /* ---------------- 胜利结局 1 ---------------- */
  knowledge_guardian: {
    type: "victory",
    title: { zh: "知识守护者", en: "Knowledge Guardian" },
    narrative: {
      zh: "你走出校园，钱包未必最鼓，却带着更锋利的东西——能在一里外嗅出骗局的大脑。你质疑过“月息20%”的推销，拒绝为鲁莽的贷款担保，还悄悄帮别人看穿狼人。骗子失去了猎物，你身边的人因你保持好奇而更安全。知识，原来才是真正的铠甲。游戏结束，但你的财商才刚刚起步，它会陪你走完后半生每一个决定。",
      en: "You walk out of campus not with the fattest wallet, but with something sharper — a mind that smells a scam a mile away. You questioned the '20% monthly' pitch, refused to cosign reckless loans, and quietly helped others see through the wolves. The crooks lost their prey, and the people around you are safer because you stayed curious. Knowledge, it turns out, was the real armor. The game ends, but your financial literacy is only beginning — and it will travel with you into every decision ahead."
    },
    unlocked_achievement: { zh: "知识守护者徽章：识别并阻止 ≥3 次金融骗局", en: "Knowledge Guardian Badge: spotted & stopped ≥3 financial scams" },
    reflection_question: { zh: "哪一次“拒绝诱惑”让你最骄傲？若把这套判断教给一年前的自己，你会先改掉哪个习惯？", en: "Which moment of 'refusing temptation' are you proudest of? If you taught this judgment to last year's self, which habit would you fix first?" },
    condition: "好人胜 + literacy>80 + 成功举报/揭穿 ≥1 次 (priorityKill 未触发或已揭穿)"
  },

  /* ---------------- 胜利结局 2 ---------------- */
  financial_freedom: {
    type: "victory",
    title: { zh: "财务自由者", en: "Financial Freedom" },
    narrative: {
      zh: "毕业典礼上，你的账户静静躺着五位数以上的净资产，没有一分负债。别人在还卡债、愁房租，你已用稳健定投和应急基金铺好了第一块砖。狼人没能碰你的钱，也没能动摇你的判断。自由不是暴富，而是“意外来时我不慌”的底气。你证明了：慢就是快，复利站在耐心的人这边。下一站，是属于你的从容人生。",
      en: "At graduation, your account rests on five figures of net worth, not a cent in debt. While others juggle card bills and rent, you laid the first brick with steady investing and an emergency fund. The wolves never touched your money nor shook your judgment. Freedom isn't getting rich fast — it's the calm of 'I won't panic when shock comes.' You proved slow is fast, and compounding sides with the patient. Next stop: a life of ease that's yours."
    },
    unlocked_achievement: { zh: "财务自由徽章：净资产 coins-liability>¥10,000 且无负债", en: "Financial Freedom Badge: net coins-liability >¥10,000, zero debt" },
    reflection_question: { zh: "这笔“不慌的底气”是怎么攒出来的？如果重来，你会在哪一轮更早开始定投？", en: "How did this 'calm cushion' get built? If you restarted, in which round would you begin investing earlier?" },
    condition: "好人胜 + coins-liability>¥10,000 + liability=0"
  },

  /* ---------------- 胜利结局 3 ---------------- */
  community_hero: {
    type: "victory",
    title: { zh: "社区英雄", en: "Community Hero" },
    narrative: {
      zh: "你不止保住了自己，还把整栋楼的人拉出了坑。两次以上的举报、一次次把证据摆上台面，让狼人无处藏身，也让小明妈这样的家庭免遭厄运。大家说，要不是你站出来，更多人会掉进同一个陷阱。英雄不一定是孤胆侠客，而是那个愿意为陌生人按下“举报”键的普通人。你离开时，身后是一群更安全的人。",
      en: "You didn't just save yourself — you pulled the whole building out of the pit. Reporting more than twice, laying evidence on the table each time, left the wolves nowhere to hide and spared families like Xiaoming's mom their fate. People say if you hadn't stepped up, many more would have fallen into the same trap. A hero isn't always a lone swordsman, but the ordinary person willing to hit 'report' for a stranger. You leave behind a safer crowd."
    },
    unlocked_achievement: { zh: "社区英雄徽章：举报≥2次 且 literacy>80 且 social 偏高", en: "Community Hero Badge: reported ≥2 times & literacy>80 & high social" },
    reflection_question: { zh: "你为什么愿意为陌生人冒险？下次遇到类似骗局，你还会第一个站出来吗？", en: "Why were you willing to risk it for strangers? Next time a scam appears, will you still be the first to stand up?" },
    condition: "好人胜 + 举报≥2次 + literacy>80 + social≥6"
  },

  /* ---------------- 失败结局 1 ---------------- */
  bankrupt: {
    type: "defeat",
    title: { zh: "破产者", en: "The Bankrupt" },
    narrative: {
      zh: "当催收的电话第无数次响起，你终于看清账单上的数字早已超出承受。以贷养贷的雪球滚到了山顶，你连下个月的生活费都凑不出。狼人拿走了佣金，留下你一个人面对空账户和满屏红字。破产不是一瞬的事，而是一次次“先借一点周转”的累积。游戏在此提前结束——但现实里，这样的结局往往更难重启。",
      en: "When the collector's call rang for the countless time, you finally saw the number had long passed what you could bear. The snowball of rolling debt reached the cliff; you couldn't even scrape next month's living costs. The wolves took their commission and left you alone with an empty account and a screen full of red. Bankruptcy isn't a moment — it's the buildup of every 'just borrow a little to get by.' The game ends early here, but in reality such an ending is far harder to restart."
    },
    unlocked_achievement: { zh: "警钟徽章：认清了以贷养贷的雪球", en: "Alarm Bell Badge: saw the rollover-debt snowball for what it is" },
    reflection_question: { zh: "第一笔“以贷养贷”是在哪一轮发生的？如果当时选了全额还款，结局会怎样？", en: "In which round did the first 'rollover' happen? If you'd paid in full then, how would the ending change?" },
    condition: "破产机制触发: coins<0 且 liability>¥5,000"
  },

  /* ---------------- 失败结局 2 ---------------- */
  assimilated: {
    type: "defeat",
    title: { zh: "被狼同化", en: "Assimilated by the Wolves" },
    narrative: {
      zh: "你收下了那笔封口费，也收下了狼人的剧本。起初只是“拿点好处别声张”，后来你开始替他们说话、把同学往坑里引。月底你账户多了¥5,000，却再也分不清自己是被骗的人，还是骗人的人。当真相曝光，所有人看你的眼神都变了。你全身而退了吗？也许钱到了账，但有些东西，再也回不来。",
      en: "You took the hush money, and with it the wolves' script. At first it was just 'take the perk, stay quiet'; then you began speaking for them, nudging classmates toward the pit. By month's end your account grew ¥5,000, yet you could no longer tell whether you were the deceived or the deceiver. When the truth broke, the way everyone looked at you changed. Did you walk away clean? The money landed, perhaps — but some things never come back."
    },
    unlocked_achievement: { zh: "自省徽章：看清了利诱如何一步步改写自己", en: "Self-Awareness Badge: saw how a bribe rewrites you, step by step" },
    reflection_question: { zh: "那笔钱真的值得吗？如果重来，你会在哪一刻选择拒绝？", en: "Was that money truly worth it? If you restarted, at which moment would you choose to refuse?" },
    condition: "collude 标记 (接受利诱/封口费) 且 未被投出"
  },

  /* ---------------- 失败结局 3 ---------------- */
  lone_survivor: {
    type: "defeat",
    title: { zh: "孤独幸存者", en: "The Lone Survivor" },
    narrative: {
      zh: "你谁也没帮，谁也没惹，安安静静地把自己照顾到了毕业。钱包没破产，也没被卷进任何泥潭——这不是懦弱，是一种清醒的“独善其身”。你守住了本心与生活，也避开了别人的坑；代价只是身边少了几位能一起扛事的人。毕业那天，你对自己说：这一步，我走得踏实。",
      en: "You helped no one and crossed no one, quietly taking care of yourself all the way to graduation. Your wallet held, and no mud stuck to you — not cowardice, but a clear-eyed 'looking out for number one.' You kept your heart and your life intact, and stepped around others' pits; the only cost is a few fewer people to lean on. On graduation day you told yourself: this step, I took it steady."
    },
    unlocked_achievement: { zh: "独善其身徽章：在风暴中守住了自己，未被人拖下水", en: "Self-Contained Badge: kept yourself safe through the storm, never pulled under" },
    reflection_question: { zh: "独善其身和挺身而出，你觉得哪种更需要勇气？如果重来，你会不会想留下一两个能并肩的人？", en: "Between looking out for yourself and stepping up, which do you think takes more courage? If you restarted, would you want a friend or two standing beside you?" },
    condition: "明哲保身 (消极回避关键决策 / 未参与关键投票) 且 social 偏低 且 非正义结局"
  },

  /* ---------------- 失败结局 4 ---------------- */
  domino_collapse: {
    type: "defeat",
    title: { zh: "多米诺崩塌", en: "The Domino Collapse" },
    narrative: {
      zh: "你为小明担保的那笔校园贷，像推倒的第一张牌。小明还不上，你被扣¥2,000；你的合伙人收入减半，连锁反应一路蔓延。整组的财务健康度断崖下跌，催收者笑着拿走提成。你以为只是“帮个忙”，却忘了债务从不在孤岛发生——一个人的鲁莽，能拖垮一整张关系网。系统性风险，从来不分好坏人。",
      en: "The campus loan you guaranteed for Xiaoming was the first domino to fall. When he couldn't pay, ¥2,000 was docked from you; your partner's income halved, and the chain kept spreading. The group's financial health plummeted while the collector laughed all the way to his commission. You thought it was 'just doing a favor,' forgetting debt never lives on an island — one person's recklessness can drag down a whole network. Systemic risk never asks whether you were good or bad."
    },
    unlocked_achievement: { zh: "系统觉知徽章：明白了担保从不是“帮个忙”那么简单", en: "System-Aware Badge: learned a guarantee is never 'just a favor'" },
    reflection_question: { zh: "你为什么答应做担保？在“帮忙”和“自保”之间，下次你会怎么权衡？", en: "Why did you agree to guarantee? Between 'helping' and 'self-protecting,' how would you weigh it next time?" },
    condition: "dominoRisk 标记 且 连锁成立 (担保人 liability 触发, 全组 credit/coins 下降)"
  }
};

if (typeof window !== "undefined") { window.endingsData = endingsData; }
if (typeof module !== "undefined" && module.exports) { module.exports = endingsData; }
