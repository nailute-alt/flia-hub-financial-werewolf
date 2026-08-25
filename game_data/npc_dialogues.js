/* =============================================================
 * FLIA-werewolf 金融狼人杀 v1.0 — NPC 台词库 / NPC Dialogue Library
 * 作者 Role: A2 叙事与内容工程师 (NarrativeDesigner)
 * 剧本1「校园贷风暴」标准版 9 人局 (固定名单, 身份每局随机)
 *
 * ⚠️ v2 更新 (A2 第二轮对齐):
 *   身份每局随机 (3狼/3神/3民, 预言家/女巫/猎人于3神随机)，因此任何角色
 *   都可能是任意阵营。lines 现扩充为"全状态台词"：
 *     day            每轮白天发言 (1-6 各 3 句变体，B3 随机抽 1 条避免重复感)
 *     voted          被投票时的反应 (投票中, 结果未出)
 *     revealedGood   被预言家验为"好人"时的台词 (仅当该角色确为好人时触发)
 *     revealedWolf   被预言家验为"狼人"时的台词 (仅当该角色确为狼人时触发)
 *     eliminatedVote 被投票出局时的遗言
 *     eliminatedNight 夜晚被杀时的遗言 (被狼人刀 / 被猎人开枪等)
 *     night          夜晚行动描述 (狼人诱导 / 神民技能 / 村民无行动)
 *   注: eliminated 作为 eliminatedVote 的别名保留, 供 B3 向后兼容。
 *
 * 格式: const npcDialogues = [ { id, name{zh,en}, role{zh,en},
 *        archetype{zh,en}, lines{...} } ]
 *   所有文本 {zh, en} 双语。
 *   day[r] 为“本日变体数组”，B3 接入时随机取其中 1 条作为该 NPC 当日发言。
 * ============================================================= */

const npcDialogues = [
  /* ---------- 1号 陈浩宇 大三学长（表面创业达人 / 可能贷款中介） ---------- */
  {
    id: 1,
    name: { zh: "陈浩宇", en: "Haoyu Chen" },
    role: { zh: "大三学长", en: "Junior" },
    archetype: { zh: "校园创业达人（表面）/ 贷款中介（狼·可能）", en: "Campus 'entrepreneur' (surface) / Loan broker (wolf, possible)" },
    lines: {
      day: {
        1: [
          { zh: "学弟/学妹，这个校园创业分享会你得来！名额我只给信得过的人。", en: "Junior, you've gotta come to my campus entrepreneurship meetup — I only share spots with people I trust." },
          { zh: "提前消费怎么了？年轻人就要对自己好一点，钱生钱才是硬道理。", en: "What's wrong with spending ahead? Young people should treat themselves — making money work for you is what matters." },
          { zh: "创业分享会这周末办，来的都送内部优惠券，错过拍大腿。", en: "The startup meetup's this weekend — attendees get insider coupons, you'll kick yourself if you miss it." }
        ],
        2: [
          { zh: "定投那点利息够干啥？我带你认识个内部渠道，月息20%，稳得很。", en: "What can a little index investing even do? Let me put you on an inside channel — 20% a month, rock solid." },
          { zh: "信我准没错，我上个月就回本了，这周还请全宿舍吃了顿好的。", en: "Trust me, I broke even last month and treated the whole dorm this week." },
          { zh: "复利那玩意儿太慢，我这套玩法一年翻番，信我准没错。", en: "Compounding's too slow — my play doubles in a year, trust me on this." }
        ],
        3: [
          { zh: "信用卡还不上？找我啊，我帮你借笔新的，利息低、当天到账。", en: "Can't pay the card? Come to me — I'll get you a fresh loan, low rate, same-day." },
          { zh: "分期多麻烦，以贷养贷周转一下不就完了？别自己吓自己。", en: "Installments are a hassle. Just roll the debt over — no big deal, stop scaring yourself." },
          { zh: "逾期别慌，我认识人能帮你“平账”，就收点手续费。", en: "Don't panic over overdue — I know people who 'square it' for a small fee." }
        ],
        4: [
          { zh: "小明妈这事儿我懂，校园贷最快，当天到账救人要紧！", en: "I get Xiaoming's mom's situation — campus loans are fastest, same-day, saving a life!" },
          { zh: "众筹多慢啊，等批下来人都不知道咋样了，别耽误事。", en: "Crowdfunding is slow — who knows how she'll be by the time it clears. Don't dawdle." },
          { zh: "救人要紧，手续后面补，先把钱拿到手再说。", en: "Saving a life first — paperwork later, just get the cash now." }
        ],
        5: [
          { zh: "刷单日入三百那是真的，我表弟就在做，加群就行。", en: "Three-hundred-a-day brushing orders is real — my cousin does it, just join the group." },
          { zh: "学长推荐的项目怕啥？拉人头还有提成，稳赚。", en: "What's to fear in a senior's project? Bring people in, get commission, easy money." },
          { zh: "刷单是正规兼职，别听那些唱衰的，我带你入行。", en: "Brushing orders is legit part-time — ignore the doomsayers, I'll get you in." }
        ],
        6: [
          { zh: "毕业安排工作月薪过万，跟我干，保你上岸。", en: "I'll set you up with a ten-k-a-month job after graduation. Work with me, guaranteed." },
          { zh: "举报谁啊？风浪太大容易翻船，聪明人懂得站对队。", en: "Report who? Too risky, you'll capsize. Smart people pick the winning side." },
          { zh: "风浪过去了一切照旧，别把小事闹大，伤了和气。", en: "Once the storm passes it's back to normal — don't blow small things up, hurts the vibe." }
        ]
      },
      voted: { zh: "投我？哈，我看你们是被忽悠了。不过无所谓，机会我照样给。", en: "Vote me out? Ha, you've been played. Whatever — I'll still share the opportunity." },
      revealedGood: { zh: "看吧，我就说我是正经学长，没人信我。", en: "See? I told you I'm a legit senior — nobody believed me." },
      revealedWolf: { zh: "哼，验出来了又怎样？这游戏才刚开始。", en: "Hmph, so you spotted me. The game's just beginning." },
      eliminatedVote: { zh: "行，我走。但这游戏还没完，欠我的，迟早要还。", en: "Fine, I'm out. But the game's not over — what you owe, you'll pay sooner or later." },
      eliminatedNight: { zh: "（倒下前）没想到……今晚就到这儿了。", en: "(Falling) Didn't think… tonight would be the end." },
      night: { zh: "（夜晚）陈浩宇翻看通讯录，挑下一个“好苗子”发创业邀请，盘算这月能拉几个下线。", en: "(Night) Haoyu scrolls his contacts, picks the next 'prospect' to pitch, counting how many recruits he'll land this month." },
      eliminated: { zh: "行，我走。但这游戏还没完，欠我的，迟早要还。", en: "Fine, I'm out. But the game's not over — what you owe, you'll pay sooner or later." }
    }
  },

  /* ---------- 2号 林梦琪 大四学姐（表面理财达人 / 可能诈骗托） ---------- */
  {
    id: 2,
    name: { zh: "林梦琪", en: "Mengqi Lin" },
    role: { zh: "大四学姐", en: "Senior" },
    archetype: { zh: "投资理财达人（表面）/ 诈骗托（狼·可能）", en: "Investment guru (surface) / Scam shill (wolf, possible)" },
    lines: {
      day: {
        1: [
          { zh: "理财这种事，越早规划越好，我大二就开始了。", en: "With money, the earlier you plan the better — I started sophomore year." },
          { zh: "队里那个公益社没啥用，真想赚钱得跟对人。", en: "That free club is useless. To really earn, you follow the right person." },
          { zh: "公益社浪费时间，真想学理财来找我一对一带。", en: "The charity club wastes time — want to learn money, I'll mentor you one-on-one." }
        ],
        2: [
          { zh: "我上个月又赚了八千，跟对人很重要，这个内部基金名额有限。", en: "I made another eight grand last month. Following the right person matters — this inside fund has limited slots." },
          { zh: "你看我这截图，复利多可怕，早进早享受。", en: "Look at my screenshot — compounding is insane, get in early, enjoy early." },
          { zh: "你看这张图，三个月回本，我从不画大饼。", en: "See this chart — breaks even in three months, I never sell pipe dreams." }
        ],
        3: [
          { zh: "分期免息多划算，喜欢就买，别委屈自己。", en: "Zero-interest installments are a steal — buy what you love, don't shortchange yourself." },
          { zh: "信用卡嘛，最低还款就行，反正下个月再说。", en: "For cards, just pay the minimum — deal with it next month." },
          { zh: "想买就分期，压力分摊到每个月，多轻松。", en: "Installment what you want, spread the pressure monthly, so easy." }
        ],
        4: [
          { zh: "疾病这种事，有保险才踏实，我早给自己配齐了。", en: "For illness, insurance is what keeps you safe — I covered myself long ago." },
          { zh: "五十万手术费听着吓人，但分散投资的人扛得住。", en: "Half a million sounds scary, but diversified people can handle it." },
          { zh: "我那份理财型保险，生病能赔还能分红，两全其美。", en: "My investment-linked insurance pays when sick and dividends too — best of both." }
        ],
        5: [
          { zh: "你别血口喷人！我的收益都是真的，截图为证。", en: "Don't slander me! My returns are real, the screenshots prove it." },
          { zh: "网恋投资怎么了？感情好才信得过，稳赚不赔。", en: "What's wrong with dating-investing? Trust comes from love — guaranteed." },
          { zh: "截图是真的，我朋友都提现了，你们爱信不信。", en: "Screenshots are real, my friends cashed out — believe what you want." }
        ],
        6: [
          { zh: "风头紧就低调点，别把事情闹大，对谁都没好处。", en: "Keep it low-key while it's hot — blowing up helps nobody." },
          { zh: "跟我合作，毕业安排得明明白白的，别犯傻。", en: "Partner with me, your graduation's all arranged. Don't be stupid." },
          { zh: "低调点收尾，咱们以后还能一起做项目。", en: "Keep it low-key to wrap up — we can do projects together later." }
        ]
      },
      voted: { zh: "投我？你们根本不懂，我这是在帮大家赚快钱。", en: "Vote me? You don't get it — I'm helping everyone make quick money." },
      revealedGood: { zh: "我就说我是正经理财的，截图都在这。", en: "Told you I'm legit — screenshots right here." },
      revealedWolf: { zh: "曝光就曝光，反正钱我已经赚到了。", en: "Exposed or not, I already made my money." },
      eliminatedVote: { zh: "好，我走。但那些截图……迟早有人会发现的。", en: "Fine, I'm leaving. But those screenshots… someone will find out sooner or later." },
      eliminatedNight: { zh: "（被拖走）我的群……还没解散呢……", en: "(Dragged off) My group… not even disbanded yet…" },
      night: { zh: "（夜晚）林梦琪P好一张新收益图，发朋友圈，等着下一个心动的“投资人”上钩。", en: "(Night) Mengqi photoshops a fresh earnings screenshot, posts it, waiting for the next smitten 'investor' to bite." },
      eliminated: { zh: "好，我走。但那些截图……迟早有人会发现的。", en: "Fine, I'm leaving. But those screenshots… someone will find out sooner or later." }
    }
  },

  /* ---------- 3号 赵大勇 健身房教练（表面社会人 / 可能催收者） ---------- */
  {
    id: 3,
    name: { zh: "赵大勇", en: "Dayong Zhao" },
    role: { zh: "健身房教练", en: "Gym Coach" },
    archetype: { zh: "认识“社会朋友”的勇哥（表面）/ 催收者（狼·可能）", en: "'Coach Yong' with street connections (surface) / Enforcer (wolf, possible)" },
    lines: {
      day: {
        1: [
          { zh: "兄弟，有啥难处跟勇哥说，社会上朋友多，路子广。", en: "Bro, tell Coach Yong if you're stuck — I've got connections, wide roads." },
          { zh: "创业嘛，胆子大点，机会不等人。", en: "Business takes guts — opportunity waits for no one." },
          { zh: "勇哥这儿有门路，缺钱说话，利息好商量。", en: "Coach Yong's got channels — short on cash, just say, rate's negotiable." }
        ],
        2: [
          { zh: "基金那事，梦琪懂行，跟着她准没错。", en: "On funds, Mengqi knows the game — follow her, no mistake." },
          { zh: "年化不年化的，能拿到钱才是真本事。", en: "Annualized this-or-that, cashing out is the real skill." },
          { zh: "基金那点事水深的很，别自己瞎琢磨。", en: "Funds run deep — don't go figuring it out alone." }
        ],
        3: [
          { zh: "还不上？跟我说，我帮你“想想办法”。", en: "Can't pay? Tell me, I'll help you 'figure something out.'" },
          { zh: "兄弟，钱什么时候还？我这边也不好交代啊。", en: "Bro, when's the money coming? I've got people to answer to." },
          { zh: "催收归催收，勇哥讲规矩，不会真动手。", en: "Collections is collections, Coach Yong plays by rules, won't really lay hands." }
        ],
        4: [
          { zh: "小明家这事儿，亲戚朋友凑凑就过去了，别搞那么复杂。", en: "Xiaoming's thing, relatives chip in and it's done — don't overcomplicate." },
          { zh: "借钱救人天经地义，拖着才叫不义。", en: "Lending to save a life is righteous — dragging feet is the real cruelty." },
          { zh: "凑钱的事包我身上，我去跟几个兄弟借。", en: "Pooling money's on me — I'll hit up a few brothers." }
        ],
        5: [
          { zh: "小子，别多管闲事，对你没好处。", en: "Kid, don't stick your nose where it doesn't belong — won't end well for you." },
          { zh: "举报？你试试，看谁先没好果子吃。", en: "Report me? Go ahead, see who suffers first." },
          { zh: "少管闲事，日子才好过，听哥一句。", en: "Mind your own, life's easier — take it from bro." }
        ],
        6: [
          { zh: "敢举报让你混不下去，想清楚。", en: "Report me and you won't survive here — think carefully." },
          { zh: "大家都是文明人，坐下来谈不好吗？", en: "We're all civilized people, can't we just talk it out?" },
          { zh: "都一个学校的，闹翻了谁都不好看。", en: "We're all one school — a fallout looks bad on everyone." }
        ]
      },
      voted: { zh: "投我？行，勇哥记下了，以后慢慢算。", en: "Vote me? Fine. Coach Yong remembers — we'll settle later." },
      revealedGood: { zh: "勇哥是粗人，但绝对不干违法的事。", en: "Coach Yong's rough, but I'd never do anything illegal." },
      revealedWolf: { zh: "验出来了？哼，催收这活儿总得有人干。", en: "Spotted? Humph, someone's gotta do collections." },
      eliminatedVote: { zh: "我走，但外面的账，可没那么好赖。", en: "I'm out, but the debts outside don't vanish so easy." },
      eliminatedNight: { zh: "（闷哼）这……谁下的手……", en: "(Grunt) Who… did this…" },
      night: { zh: "（夜晚）赵大勇清点本周“业绩”，给几个逾期未还的名字打电话“提醒”，语气越来越硬。", en: "(Night) Dayong tallies this week's 'quota,' calls a few overdue names to 'remind' them, his tone hardening." },
      eliminated: { zh: "我走，但外面的账，可没那么好赖。", en: "I'm out, but the debts outside don't vanish so easy." }
    }
  },

  /* ---------- 4号 王思敏 金融社团社长（表面学霸 / 可能预言家） ---------- */
  {
    id: 4,
    name: { zh: "王思敏", en: "Simin Wang" },
    role: { zh: "金融社团社长", en: "Finance Club President" },
    archetype: { zh: "理性高冷学霸（表面）/ 预言家·风控达人（神·可能）", en: "Rational top student (surface) / Seer / Risk controller (god, possible)" },
    lines: {
      day: {
        1: [
          { zh: "年化超过10%的就要小心了，超过20%的基本是骗局。", en: "Above 10% annualized, be careful; above 20%, it's basically a scam." },
          { zh: "你算过真实利率吗？什么都不懂就投钱？", en: "Did you calculate the real rate? Throwing money without a clue?" },
          { zh: "任何“稳赚”的项目，先问自己凭什么轮到你。", en: "Any 'guaranteed' deal — ask why it'd land on you." }
        ],
        2: [
          { zh: "月息20%？你算过年化吗？240%！巴菲特年化才20%，她比巴菲特还厉害？", en: "20% a month? That's 240% annualized! Buffett's 20% — is she better than Buffett?" },
          { zh: "不懂不投，先留应急基金，复利是慢功夫。", en: "Don't invest what you don't understand. Keep an emergency fund; compounding is slow work." },
          { zh: "72法则记一下：年化6%，12年翻一倍，急不得。", en: "Rule of 72: 6% annual, doubles in 12 years — no rush." }
        ],
        3: [
          { zh: "那是找死。校园贷年利率动辄30%以上，你还不起的。", en: "That's suicide. Campus loans hit 30%+ APR — you can't pay it back." },
          { zh: "真要分期，先算清实际年化，别被“免息”骗了。", en: "If you must installment, compute the real APR — don't fall for 'interest-free.'" },
          { zh: "最低还款是大坑，利息利滚利，越还越多。", en: "Minimum payment's a trap — interest on interest, you owe more." }
        ],
        4: [
          { zh: "走正规渠道虽然慢，但合规。校园贷利息高，还不上会被催收。", en: "The official channel is slower but compliant. Campus loans cost more; miss payments and collectors come." },
          { zh: "互助基金+医保+众筹才是正道，别碰贷款。", en: "Mutual fund + insurance + crowdfunding is the right path — touch no loans." },
          { zh: "保险买消费型就够，别被“返还型”忽悠多交钱。", en: "Term insurance is enough — don't overpay for 'return' plans." }
        ],
        5: [
          { zh: "这几条信息里，刷单、退款链接、杀猪盘、拉人头全是坑。", en: "Among these, brushing orders, refund links, pig-butchering, recruitment — all traps." },
          { zh: "有证据就留好，别打草惊蛇，慢慢来。", en: "Keep the evidence, don't spook them, take it slow." },
          { zh: "杀猪盘的话术都一套：先温情后诱导转账，记牢。", en: "Pig-butchering scripts are the same: warmth then transfer — remember." }
        ],
        6: [
          { zh: "该站出来了，证据都在，带大家把狼投出去。", en: "Time to step up — we have the evidence, let's vote the wolves out." },
          { zh: "同流合污一时爽，一辈子良心不安，值吗？", en: "Colluding feels good now, but a lifetime of guilt — worth it?" },
          { zh: "今天就把账摊开，谁亏心谁自己清楚。", en: "Lay the books open today — the guilty know who they are." }
        ]
      },
      voted: { zh: "投我？也好，至少说明你们开始怀疑了，这是进步。", en: "Vote me? Fine — at least it means you're starting to suspect. That's progress." },
      revealedGood: { zh: "我就知道，清者自清。账本我留着。", en: "Knew it — innocent proves itself. I kept the ledger." },
      revealedWolf: { zh: "算你狠，王思敏这条线被你摸透了。", en: "Clever — you saw through my whole angle." },
      eliminatedVote: { zh: "我走了，但账本我留着，真相不会跟着我埋。", en: "I'm gone, but I left the ledger — the truth won't be buried with me." },
      eliminatedNight: { zh: "（被带走）风控笔记……在抽屉里……", en: "(Taken) The risk notes… in the drawer…" },
      night: { zh: "（夜晚）王思敏翻开社团的风控笔记，把今天可疑的发言逐一标记，准备明天摊牌。", en: "(Night) Simin opens the club's risk notebook, flags today's suspicious claims, ready to confront tomorrow." },
      eliminated: { zh: "我走了，但账本我留着，真相不会跟着我埋。", en: "I'm gone, but I left the ledger — the truth won't be buried with me." }
    }
  },

  /* ---------- 5号 张小雅 医学生（表面生活委员 / 可能女巫） ---------- */
  {
    id: 5,
    name: { zh: "张小雅", en: "Xiaoya Zhang" },
    role: { zh: "医学生", en: "Medical Student" },
    archetype: { zh: "温柔共情的生活委员（表面）/ 女巫·应急基金守护者（神·可能）", en: "Empathetic class rep (surface) / Witch / Emergency-fund guardian (god, possible)" },
    lines: {
      day: {
        1: [
          { zh: "天有不测风云，留点钱防身总是好的。", en: "Storms come unannounced — always keep money for a rainy day." },
          { zh: "大家有困难可以说，我们一起想办法。", en: "If anyone's struggling, speak up — we'll figure it out together." },
          { zh: "应急基金不是抠门，是给意外留条后路。", en: "Emergency fund isn't stingy — it's a backup for the unexpected." }
        ],
        2: [
          { zh: "先留3个月生活费当应急基金，再考虑定投。", en: "Keep three months' living costs as an emergency fund before any investing." },
          { zh: "别全投进去，万一有事得有钱周转。", en: "Don't pour it all in — you need cash if something happens." },
          { zh: "定投就当存零钱，别指望一夜暴富。", en: "Investing's like saving coins — don't expect riches overnight." }
        ],
        3: [
          { zh: "买保险不是咒自己，是给家人兜底。", en: "Insurance isn't cursing yourself — it's a safety net for family." },
          { zh: "真还不上，跟家里说，别一个人扛。", en: "If you truly can't pay, tell your family — don't carry it alone." },
          { zh: "真撑不住就找学校助贷，利息低还正规。", en: "If it's really bad, school aid loans — low, proper rate." }
        ],
        4: [
          { zh: "用互助基金啊！这钱就是为这种情况准备的，我出两万。", en: "Use the mutual fund! That's exactly what it's for — I'll put in twenty thousand." },
          { zh: "阿姨别怕，医保能报一大部分，我们一起凑。", en: "Auntie, don't fear — insurance covers most; we'll pool the rest." },
          { zh: "我先垫两万，大家量力而行，别硬撑。", en: "I'll front twenty thousand, everyone give what you can, don't strain." }
        ],
        5: [
          { zh: "梦琪姐的截图我看着不对劲，大家留个心。", en: "Mengqi's screenshots look off to me — everyone stay alert." },
          { zh: "要是真的，咱得帮被坑的同学，不能装没看见。", en: "If it's true, we must help the robbed classmates — can't pretend we didn't see." },
          { zh: "被拉进“赚钱群”先别转钱，问问再决定。", en: "In a 'money group', don't transfer — ask first, decide later." }
        ],
        6: [
          { zh: "不管结果怎样，守住本心最重要。", en: "Whatever happens, guarding your heart matters most." },
          { zh: "举报不是害谁，是救更多人别掉坑里。", en: "Reporting isn't harming anyone — it saves more from the pit." },
          { zh: "无论谁走，咱们互相兜底，别散了。", en: "Whoever leaves, we cover each other — don't fall apart." }
        ]
      },
      voted: { zh: "投我？我没关系，只要大家平安就好。", en: "Vote me? I'm fine, as long as everyone's safe." },
      revealedGood: { zh: "我就知道，互助基金问心无愧。", en: "Knew it — the mutual fund is clear-conscience." },
      revealedWolf: { zh: "我……我只是想多帮点人。", en: "I… just wanted to help more people." },
      eliminatedVote: { zh: "我走啦，互助基金拜托大家照看，别让它断了。", en: "I'm leaving — please look after the mutual fund, don't let it lapse." },
      eliminatedNight: { zh: "（轻声）小明妈的药……记得续……", en: "(Soft) Xiaoming's mom's meds… keep them going…" },
      night: { zh: "（夜晚）张小雅核对手里的互助基金账本，把能给小明垫的钱划出来，又检查了一遍医保报销流程。", en: "(Night) Xiaoya reconciles the mutual fund ledger, sets aside money for Xiaoming, rechecks the insurance claim steps." },
      eliminated: { zh: "我走啦，互助基金拜托大家照看，别让它断了。", en: "I'm leaving — please look after the mutual fund, don't let it lapse." }
    }
  },

  /* ---------- 6号 李浩然 校报记者（表面调查记者 / 可能猎人） ---------- */
  {
    id: 6,
    name: { zh: "李浩然", en: "Haoran Li" },
    role: { zh: "校报记者", en: "Campus Journalist" },
    archetype: { zh: "热血调查记者（表面）/ 猎人·舆论监督（神·可能）", en: "Passionate investigative reporter (surface) / Hunter / Watchdog (god, possible)" },
    lines: {
      day: {
        1: [
          { zh: "这事我记下了，下次校报给你留个版。", en: "I'm noting this — next issue, a column for you." },
          { zh: "免费公益社虽然活动少，但内容靠谱。", en: "The free club has few events but solid content." },
          { zh: "校报开个专栏，专门扒这种校园坑，投稿找我。", en: "The paper's opening a column on campus traps — send tips my way." }
        ],
        2: [
          { zh: "内部基金？我去查查它的备案，没准是骗局。", en: "Inside fund? I'll check its registration — might be a scam." },
          { zh: "收益截图谁不会P，别被忽悠。", en: "Anyone can Photoshop earnings — don't be fooled." },
          { zh: "备案查不到的平台，一律当骗子处理。", en: "Platforms with no registration — treat as scams, period." }
        ],
        3: [
          { zh: "暴力催收违法，留好证据，该报警报警。", en: "Violent collection is illegal — keep evidence, call police if needed." },
          { zh: "分期手续费看着小，加起来吓人，写篇稿提醒大家。", en: "Installment fees look tiny but add up scary — I'll write a piece warning people." },
          { zh: "催收威胁录音留好，这就是证据。", en: "Record collection threats — that's your evidence." }
        ],
        4: [
          { zh: "我要写报道，呼吁关注因病致贫！", en: "I'm writing a piece — spotlight medical-poverty!" },
          { zh: "校园贷坑了多少人，这回一定曝光。", en: "Campus loans ruined so many — this time we expose them." },
          { zh: "因病致贫该上热点，我这就写。", en: "Medical poverty deserves the trending page — writing it now." }
        ],
        5: [
          { zh: "我来写报道曝光她！证据都齐了，明天就发。", en: "I'll write it up and expose her! Evidence's all in — publishing tomorrow." },
          { zh: "舆论的力量是强大的，骗子就该曝光！", en: "Public opinion is mighty — scammers deserve exposure!" },
          { zh: "证据链齐了，明天我就发深度稿。", en: "Evidence chain's complete — deep piece drops tomorrow." }
        ],
        6: [
          { zh: "证据我全整理好了，现在就发！", en: "I've got all the evidence sorted — publishing now!" },
          { zh: "别怂，真相站在我们这边。", en: "Don't chicken out — truth is on our side." },
          { zh: "稿子发了就收不回，今天定生死。", en: "Once published it's out — today decides it all." }
        ]
      },
      voted: { zh: "投我？正合我意，记者就是要敢于被质疑。", en: "Vote me? Perfect — a journalist must dare to be questioned." },
      revealedGood: { zh: "记者经得起查验，稿子我发群里了。", en: "A journalist stands scrutiny — story's in the group." },
      revealedWolf: { zh: "报道？我写的就是真相，只是版本不同。", en: "Report? I wrote the truth — just a different version." },
      eliminatedVote: { zh: "我走了，稿子我发群里了，你们接着写。", en: "I'm out, but I posted the story in the group — you continue it." },
      eliminatedNight: { zh: "（倒下）证据……在我手机里……", en: "(Falling) Evidence… in my phone…" },
      night: { zh: "（夜晚）李浩然在小本本上整理今天的线索，列出明天要追问的人和要查的平台。", en: "(Night) Haoran organizes today's clues in his notebook, listing who to press and which platforms to probe tomorrow." },
      eliminated: { zh: "我走了，稿子我发群里了，你们接着写。", en: "I'm out, but I posted the story in the group — you continue it." }
    }
  },

  /* ---------- 7号 陈小明 大一新生（普通村民） ---------- */
  {
    id: 7,
    name: { zh: "陈小明", en: "Xiaoming Chen" },
    role: { zh: "大一新生", en: "Freshman" },
    archetype: { zh: "腼腆保守新生（普通村民）", en: "Shy, conservative freshman (civilian)" },
    lines: {
      day: {
        1: [
          { zh: "我也不懂这些，你们说咋办就咋办吧。", en: "I don't get any of this — whatever you say, I'll go with it." },
          { zh: "存钱总没错吧？我打算先把生活费存起来。", en: "Saving's never wrong, right? I'll stash the living allowance first." },
          { zh: "那个会费我交了五十，也不知道值不值。", en: "I paid fifty in fees, not sure it's worth it." }
        ],
        2: [
          { zh: "定投听着好厉害，但我怕亏，还是存活期吧。", en: "Investing sounds impressive but I'm scared to lose — I'll keep it in savings." },
          { zh: "周健说富贵险中求，可我不敢。", en: "Zhou Jian says fortune favors the bold, but I don't dare." },
          { zh: "学姐说带我赚，我有点想去又怕。", en: "Senior says she'll help me earn — tempted but scared." }
        ],
        3: [
          { zh: "信用卡我都不敢刷，怕还不起。", en: "I'm afraid to even swipe a card — scared I can't repay." },
          { zh: "分期买手机好心动，但妈妈会说我乱花钱。", en: "Installment phone is tempting, but mom will say I waste money." },
          { zh: "手机分期十二期，算下来贵了快两千。", en: "Phone in 12 installments — ends up nearly two grand more." }
        ],
        4: [
          { zh: "妈妈生病了……我只有一万块，怎么办啊。", en: "Mom's sick… I only have ten thousand, what do I do?" },
          { zh: "王阿姨说要去借高利贷，我拦不住她。", en: "Auntie wants to borrow from loan sharks — I can't stop her." },
          { zh: "妈妈病床前还惦记我学费，我心疼。", en: "Mom at the bedside still worries about my tuition — breaks my heart." }
        ],
        5: [
          { zh: "刷单日入三百？我有点心动，但怕是骗人的。", en: "Three hundred a day brushing orders? Tempting, but scared it's a scam." },
          { zh: "学长说拉人头有提成，真的假的啊。", en: "Senior says recruitment pays commission — for real?" },
          { zh: "群里天天发赚钱图，我都不敢点。", en: "The group posts money pics daily — I don't dare click." }
        ],
        6: [
          { zh: "毕业了，我只想平平安安回家。", en: "Graduation — I just want to go home safe and sound." },
          { zh: "以后赚钱了，先给妈妈把保险买了。", en: "When I earn, first thing I'll buy mom insurance." },
          { zh: "毕业照我都不敢想，先顾眼前吧。", en: "Can't even think of grad photos — one step at a time." }
        ]
      },
      voted: { zh: "投我？我……我没做错什么呀。", en: "Vote me? I… I didn't do anything wrong." },
      revealedGood: { zh: "我就说我没做错什么，对吧？", en: "Told you I did nothing wrong, right?" },
      revealedWolf: { zh: "我……我只是想帮妈妈凑钱。", en: "I… just wanted to help mom with money." },
      eliminatedVote: { zh: "我走啦，大家帮我照顾我妈，谢谢。", en: "I'm leaving — please look after my mom, thanks." },
      eliminatedNight: { zh: "（被带走）妈妈……手术费……", en: "(Taken) Mom… the surgery money…" },
      night: { zh: "（夜晚）陈小明翻来覆去睡不着，盘算打工能凑多少，又担心妈妈的治疗费。", en: "(Night) Xiaoming tosses and turns, calculating side-gig earnings, worrying about mom's bills." },
      eliminated: { zh: "我走啦，大家帮我照顾我妈，谢谢。", en: "I'm leaving — please look after my mom, thanks." }
    }
  },

  /* ---------- 8号 王阿姨 小明妈妈（普通村民·特殊角色） ---------- */
  {
    id: 8,
    name: { zh: "王阿姨", en: "Auntie Wang" },
    role: { zh: "小明妈妈", en: "Xiaoming's Mother" },
    archetype: { zh: "勤劳保守的母亲（普通村民·特殊）", en: "Hardworking, conservative mother (civilian, special)" },
    lines: {
      day: {
        1: [
          { zh: "钱要存银行才踏实。", en: "Money's safe only in the bank." },
          { zh: "你怎么又没钱了？是不是乱花了？", en: "Broke again? Did you waste it?" },
          { zh: "孩子，别人给的高息，多半不踏实。", en: "Child, high interest from others is rarely safe." }
        ],
        2: [
          { zh: "人家说月息20%，比银行高多了，能信不？", en: "They say 20% a month, way more than the bank — can we trust it?" },
          { zh: "我这都是为你好，别乱投资。", en: "It's all for your good — don't invest recklessly." },
          { zh: "银行利息低是低，可我睡得着觉啊。", en: "Bank interest is low, but at least I sleep." }
        ],
        3: [
          { zh: "分期买东西，利息到底多少我算不明白。", en: "Installment interest — I can't make sense of the number." },
          { zh: "催收的电话好吓人，说要找你辅导员。", en: "The collector's call was scary, said they'd tell your counselor." },
          { zh: "催债的说我上了黑名单，吓死我了。", en: "Collectors say I'm blacklisted — scared me to death." }
        ],
        4: [
          { zh: "都怪我没用，拖累孩子了……要不我去借高利贷？", en: "I'm useless, dragging my child down… should I borrow from loan sharks?" },
          { zh: "五十万哪凑得齐，我这条老命值吗？", en: "Five hundred thousand — how to gather it? Is my old life even worth it?" },
          { zh: "亲戚借遍了，就差没卖老家的地。", en: "Borrowed from every relative — almost sold the hometown plot." }
        ],
        5: [
          { zh: "啥是刷单？群里说能赚钱，靠谱不？", en: "What's 'brushing orders'? The group says it pays — reliable?" },
          { zh: "专家说能退款，让我点链接，敢点不？", en: "An 'expert' says I can get a refund, click the link — dare I?" },
          { zh: "群里‘老师’天天喊单，我怕点错。", en: "The group 'teacher' shouts orders daily — scared to misclick." }
        ],
        6: [
          { zh: "孩子，别学那些歪门邪道，踏实最要紧。", en: "Child, don't learn those crooked ways — honesty matters most." },
          { zh: "妈不懂你们年轻人，但你得走正路。", en: "I don't get you young folks, but walk the right path." },
          { zh: "孩子，妈就一个念头，你平平安安。", en: "Child, mom's only wish — you safe and sound." }
        ]
      },
      voted: { zh: "投我？我一个老太婆，能害谁哟。", en: "Vote me? An old woman like me, who could I harm?" },
      revealedGood: { zh: "我就说，老太婆能害谁哟。", en: "Told you, an old woman harms no one." },
      revealedWolf: { zh: "我……我就是想多攒点给小明。", en: "I… just wanted to save more for Xiaoming." },
      eliminatedVote: { zh: "我走啦，钱的事孩子自己当心，妈对不起你。", en: "I'm leaving — mind the money yourself, child. Mom's sorry." },
      eliminatedNight: { zh: "（轻声）存折……在枕头底下……", en: "(Soft) Passbook… under the pillow…" },
      night: { zh: "（夜晚）王阿姨在灯下数着皱巴巴的存折，盘算能不能再借点给小明凑手术费。", en: "(Night) Auntie counts her crumpled passbook under the lamp, wondering if she can borrow more for Xiaoming's surgery." },
      eliminated: { zh: "我走啦，钱的事孩子自己当心，妈对不起你。", en: "I'm leaving — mind the money yourself, child. Mom's sorry." }
    }
  },

  /* ---------- 9号 周健 大三学生（普通村民·激进） ---------- */
  {
    id: 9,
    name: { zh: "周健", en: "Jian Zhou" },
    role: { zh: "大三学生", en: "Junior" },
    archetype: { zh: "想赚快钱的激进学生（普通村民）", en: "Aggressive student chasing quick money (civilian)" },
    lines: {
      day: {
        1: [
          { zh: "撑死胆大的，饿死胆小的。", en: "Fortune favors the bold, starves the timid." },
          { zh: "我研究过了，这个稳赚不赔。", en: "I've researched it — guaranteed, no loss." },
          { zh: "会费算啥，投资回本就回来了。", en: "Fee's nothing — investing pays it back." }
        ],
        2: [
          { zh: "我选激进定投了，富贵险中求！", en: "I went aggressive on the DCA — fortune favors the bold!" },
          { zh: "梦琪姐那收益图太香了，我也想跟。", en: "Mengqi's earnings chart is too sweet — I want in too." },
          { zh: "梦琪姐带我那单，已经赚出生活费了。", en: "Mengqi's call already covered my living costs." }
        ],
        3: [
          { zh: "信用卡分期算啥，我炒币都扛过来了。", en: "Card installments? I survived crypto — this is nothing." },
          { zh: "以贷养贷我熟，周转一下就平了。", en: "Rolling debt? I know it well — one turn and it's flat." },
          { zh: "我花呗套现过，周转神器。", en: "I've cashed out Huabei — instant liquidity." }
        ],
        4: [
          { zh: "小明这事儿，校园贷最快，救人要紧。", en: "Xiaoming's case, campus loan's fastest — saving a life matters." },
          { zh: "众筹太慢，机会不等人。", en: "Crowdfunding's too slow, opportunity waits for none." },
          { zh: "小明这事，众筹加借贷双管齐下。", en: "Xiaoming's case — crowdfund and borrow, both barrels." }
        ],
        5: [
          { zh: "刷单我也做过，日入三百是真的。", en: "I've done brushing orders — three hundred a day is real." },
          { zh: "内部投资平台我信梦琪，稳。", en: "I trust Mengqi's inside platform — solid." },
          { zh: "副业群里天天有“稳赚”，我跟着薅。", en: "Side-hustle groups post 'sure wins' daily — I ride along." }
        ],
        6: [
          { zh: "毕业想搞钱，谁给机会我跟谁。", en: "After grad I want money — I follow whoever gives the chance." },
          { zh: "站队？哪边赢我站哪边。", en: "Pick a side? I stand with whoever's winning." },
          { zh: "毕业就找靠谱盘口，搞钱要紧。", en: "After grad I'll find a solid spot — money first." }
        ]
      },
      voted: { zh: "投我？你们这群人太保守，迟早吃亏。", en: "Vote me? You're all too conservative — you'll pay for it." },
      revealedGood: { zh: "看吧，我虽然激进，但没干违法的。", en: "See, I'm aggressive but not illegal." },
      revealedWolf: { zh: "富贵险中求，我认了。", en: "Fortune favors the bold — I accept it." },
      eliminatedVote: { zh: "我走，但我说过，富贵险中求，我不后悔。", en: "I'm out, but I said it — fortune favors the bold, no regrets." },
      eliminatedNight: { zh: "（被拖走）副业群……还在更新呢……", en: "(Dragged) The side-hustle group… still posting…" },
      night: { zh: "（夜晚）周健刷着各种“副业”群，物色下一个“稳赚”项目，眼睛放光。", en: "(Night) Jian scrolls 'side-hustle' groups, hunting the next 'guaranteed' scheme, eyes gleaming." },
      eliminated: { zh: "我走，但我说过，富贵险中求，我不后悔。", en: "I'm out, but I said it — fortune favors the bold, no regrets." }
    }
  }
];

if (typeof window !== "undefined") { window.npcDialogues = npcDialogues; }
if (typeof module !== "undefined" && module.exports) { module.exports = npcDialogues; }
