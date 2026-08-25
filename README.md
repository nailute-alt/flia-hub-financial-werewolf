# FLIA-hub · 金融狼人杀 / Financial Werewolf

> FLIA-hub 校园财商教育游戏的独立桌游馆模块——将金融知识融入经典狼人杀玩法。

## 游戏简介 / About

9 人局金融狼人杀，玩家在白天讨论与投票中识别"金融狼人"（内幕交易者、市场操纵者、诈骗犯），同时通过 6 轮金融决策题积累财富、规避破产。

- **身份系统**：3 狼（内幕者/操纵者/诈骗犯）/ 3 神（审计师/监管者/风控经理）/ 3 民（学生/上班族/退休者）
- **核心循环**：夜晚行动 → 白天发言 → 投票放逐 → 金融决策题 → 结算
- **金融教育**：13 道决策题覆盖储蓄、投资、债务、规划、反诈、综合六大主题
- **7 种结局**：从社区英雄到多米诺崩塌，取决于财富净值与社交声誉
- **中英双语**：实时切换，覆盖正文、UI、按钮、结局

## 技术栈 / Tech Stack

- 纯原生 HTML + CSS + JavaScript，零依赖
- 16-bit 像素风 UI，参考《星露谷物语》
- 单页应用，GitHub Pages 直接部署

## 目录结构 / Structure

```
├── index.html              # 游戏主文件（含全部逻辑与样式）
├── game_data/              # 游戏数据（A2 叙事内容交付）
│   ├── npc_dialogues.js    # NPC 双语台词
│   ├── rounds_data.js      # 6 轮剧本与决策题
│   ├── knowledge_cards.js  # 知识点卡片
│   ├── endings_data.js     # 7 结局数据
│   └── role_info.js        # 身份与技能说明
└── assets/                 # 像素风素材
    ├── characters/         # 角色头像与全身像
    ├── scenes/             # 场景背景（白天/夜晚）
    ├── ui/                 # UI 组件
    ├── props/              # 道具
    └── effects/            # 特效
```

## 本地运行 / Run Locally

直接用浏览器打开 `index.html` 即可，无需构建。

## 部署 / Deploy

推送到 GitHub 后启用 Pages，访问 `https://<username>.github.io/flia-hub-financial-werewolf/`。

---

*FLIA-hub · Financial Literacy Interactive Adventure*
