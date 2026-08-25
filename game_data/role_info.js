/* =============================================================
 * FLIA-werewolf 金融狼人杀 v1.0 — 玩家身份告知文本 / Role Info
 * 作者 Role: A2 叙事与内容工程师 (NarrativeDesigner)
 * 用途: B3 v0.5.2「开局玩家身份告知」面板数据源
 *
 * 设计约定:
 *   - 5 个身份均为 {zh, en} 双语 (游戏支持中英切换)。
 *   - name / skill 为身份固有文本; opening 为"开局告知"模板,
 *     内含运行时占位符: {编号} {名字} {身份} {技能描述}
 *       · {编号}    → 玩家座位号 (如 7)
 *       · {名字}    → 玩家角色名 (如 陈小明 / Xiaoming Chen)
 *       · {身份}    → 由 role.name[lang] 填充
 *       · {技能描述} → 由 role.skill[lang] 填充
 *   - B3 按当前语言取对应字段, 做字符串替换后展示。
 *
 * ⚠️ 金融数值沿用已校准值, 本文件不含数值, 无需改动。
 * ============================================================= */

// 共享开局模板 (5 个身份共用同一套占位符结构)
const openingTemplate = {
  zh: "你是 {编号}号 {名字}，身份是{身份}。{技能描述}。游戏开始！",
  en: "You are Player {number} {name}, your role is {role}. {skill_description}. Game start!"
};

const roleInfo = {
  roles: {
    villager: {
      id: "villager",
      name: { zh: "村民", en: "Villager" },
      skill: {
        zh: "无特殊技能。白天靠发言与投票找出狼人，是好人阵营的人数基石。",
        en: "No special power. By day, use talk and votes to root out the wolves — the numerical backbone of the good side."
      },
      opening: openingTemplate
    },
    werewolf: {
      id: "werewolf",
      name: { zh: "狼人", en: "Werewolf" },
      skill: {
        zh: "每晚与同伴袭击一名玩家，并伪装成好人混淆视听。目标：淘汰所有好人。",
        en: "Each night, with your pack, attack one player and blend in as a good guy by day. Goal: eliminate all the good folks."
      },
      opening: openingTemplate
    },
    seer: {
      id: "seer",
      name: { zh: "预言家", en: "Seer" },
      skill: {
        zh: "每晚可查验一名玩家的身份（好人或狼人）。用信息带领好人，但小心暴露。",
        en: "Each night inspect one player's identity (good or wolf). Lead the good with info, but beware exposure."
      },
      opening: openingTemplate
    },
    witch: {
      id: "witch",
      name: { zh: "女巫", en: "Witch" },
      skill: {
        zh: "拥有一瓶解药（救被刀者）和一瓶毒药（毒一人），全局各限一次。",
        en: "Holds one antidote (save the night's victim) and one poison (kill one), each usable once per game."
      },
      opening: openingTemplate
    },
    hunter: {
      id: "hunter",
      name: { zh: "猎人", en: "Hunter" },
      skill: {
        zh: "被投票或袭击出局时，可开枪带走一名玩家（被女巫毒死则不可开枪）。",
        en: "When voted or attacked out, may shoot one player (except if poisoned by the Witch)."
      },
      opening: openingTemplate
    }
  },
  openingTemplate: openingTemplate
};

if (typeof window !== "undefined") { window.roleInfo = roleInfo; }
if (typeof module !== "undefined" && module.exports) { module.exports = roleInfo; }
