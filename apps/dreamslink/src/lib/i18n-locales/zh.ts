// 인연링크(사주 궁합) 화면 사전의 중국어 간체 번역이다.
// 키 구성·중첩·배열 길이는 `src/lib/i18n.ts`의 `en`을 그대로 따르고, 문구의 뜻과 줄바꿈(\n)은
// 같은 파일의 `ko`(원문)를 기준으로 옮겼다. 명리 용어는 중화권 관용어(日主·十神·地支·五行·合婚)를 쓴다.
// 언어 선택기 3개 키와 footer의 13개 키는 naminglink 쪽 zh 문구를 그대로 가져온 것이라 임의로 바꾸지 않는다.

import type { Dictionary } from "@/lib/i18n";

export const zh: Dictionary = {
  brand: "InyeonLink",
  tagline: "以八字与生肖来看两人的缘分",
  currentLanguage: "当前语言",
  moreLanguages: "更多",
  closeLanguages: "关闭",
  // **아직 번역 전이다.** en 문구를 그대로 둔 자리로, 번역 파이프라인이 채운다.
  // `verify-i18n`이 en과 같은 문자열을 의심으로 잡는다.
  dream: {
    title: "Dream reading",
    subtitle: "Write down the dream you had and we will look it up in a dictionary of traditional Korean dream symbols.",
    textLabel: "What did you dream about?",
    textPlaceholder: "Write it as you remember it. For example: a carp leapt out of clear water",
    moodLabel: "How you felt on waking",
    moods: {
      good: "Good",
      scary: "Frightening",
      strange: "Strange",
      sad: "Sad",
      unsure: "Not sure",
    },
    recurringLabel: "I have this dream again and again",
    submit: "Read my dream",
    submitting: "Looking it up…",
    errorEmpty: "Please write a little more about the dream.",
    errorGeneric: "We could not load the reading. Please try again in a moment.",
    resultTitle: "Dream reading",
    symbolsHeading: "Symbols found in your dream",
    noSymbols: "No traditional symbol from our dictionary appeared in this dream. We leave this empty rather than invent a meaning.",
    themesHeading: "What they point to together",
    conceptionNotice: "Symbols traditionally read as conception omens appear here. This does not determine pregnancy.",
    disclaimer: "This is reference material from a traditional dream-reading perspective, not medical, financial, or legal advice. We do not store the dream you wrote.",
    again: "Read another dream",
  },
  landing: {
    title: "两人的缘分，\n用数字来确认",
    subtitle:
      "只需一个出生日期。\n同时推算传统命理的八字合婚与生肖合婚，以匹配度呈现给您。",
    cta: "查看八字合婚",
    howTitle: "我们这样推算",
    steps: [
      "输入两人的出生年月日。出生时刻为选填项。",
      "以日主五行、五行补益、日支关系分析八字合婚，以年支关系分析生肖合婚。",
      "将两项分数加权平均，得出最终匹配度。",
    ],
    privacyTitle: "您输入的信息不会被保存",
    privacyBody:
      "输入的信息仅用于分析，不会记录在任何地方。\n结果链接中所含的信息不会发送至服务器，也不会被保存。",
    disclaimer:
      "分析结果只是传统命理视角的参考资料，并非科学预测，也不是对某段关系的定论。",
  },
  form: {
    title: "两段缘分的出生年月日",
    description:
      "知道出生时刻可以分析得更准确，但不知道也可以分析。",
    personA: "我的信息",
    personB: "我的缘分对象",
    nickname: "姓名（本名）",
    nicknamePlaceholder: "例：王思远",
    nicknameHint: "仅用于结果画面的显示，不会用于分析。",
    gender: "性别",
    male: "男性",
    female: "女性",
    genderUnspecified: "不便透露",
    genderHint:
      "传统命理会依性别不同来看代表配偶的位置。若不填写，该项目将从分析中剔除。",
    birthplace: "出生地",
    birthplaceHint:
      "以出生地的真实太阳时来推算时柱。列表中没有的地区，请选择最近的城市——越接近，时柱越准确。\n夏令时与历史上的标准时变更也会一并反映。",
    calendar: "历法",
    solar: "阳历",
    lunar: "阴历",
    leapMonth: "闰月",
    birthDate: "出生年月日",
    year: "年",
    month: "月",
    day: "日",
    birthTime: "出生时刻",
    unknownTime: "不知道时刻",
    hour: "时",
    minute: "分",
    submit: "观看广告后查看结果",
    submitNoAd: "查看结果",
    submitting: "推算中…",
    errorInvalidDate:
      "请确认输入的出生年月日。若为阴历，还需确认是否为闰月。",
    errorGeneric: "推算失败。请稍后再试。",
  },
  reading: {
    chartTitle: "两人的八字",
    chartHint:
      "把出生的年、月、日、时各以两个字来表示，就是八字（四柱）。下面的合婚分数全部出自这八个字。",
    pillarYear: "年柱",
    pillarMonth: "月柱",
    pillarDay: "日柱",
    pillarHour: "时柱",
    pillarHourUnknown: "未填时刻",
    dayMasterLabel: "日主",
    animalLabel: "生肖",
    seasonLabel: "出生季节之气",
    elementsTitle: "五行的力量",
    strongest: "最旺之气",
    scarcest: "最弱之气",
    strengthTitle: "这段关系的长处",
    cautionTitle: "值得留意之处",
    bodyStrengthTitle: "日主的强弱",
    favorableLabel: "当下需要之气",
  },
  bodyStrength: {
    STRONG: {
      name: "身强",
      body: "扶助日主之气较为充足。您有自行推进的力量，但也容易偏向一端；当有能泄耗、疏通的气时，反而更为安稳。",
    },
    BALANCED: {
      name: "中和",
      body: "扶助日主之气与泄耗之气大致相当。难以断定偏向哪一边，因此在这里把当下最薄的一气视为您所需要的。",
    },
    WEAK: {
      name: "身弱",
      body: "扶助日主之气较为单薄。您善于借用周围的力量，但独自长久支撑容易疲惫；有人在背后托举时才使得上劲。",
    },
  },
  relation: {
    title: "两人的关系",
    hint: "日主之间如何看待彼此，命理用十神这十个名称来划分。它是有方向的，我看对方的位置与对方看我的位置可能不同。",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "相似的关系",
        body: "两人的日主同属一气。不必解释也能相通的地方很多，喜好也相互重叠。但擅长与不擅长的地方一样，遇到难处时两人容易卡在同一个点上。",
      },
      NURTURING: {
        name: "一方培育、一方绽放的关系",
        body: "一方之气流向另一方。承接的一方觉得自在，想做的事也变多；付出的一方则从对方的顺遂中得到成就感。只是这股流动是单向的，需要有所回馈，付出的一方才不至于耗尽。",
      },
      TENSION: {
        name: "彼此约束的关系",
        body: "一方处在约束另一方的位置。因为有张力，彼此不易松懈，共事时也容易做出成果。但被约束的一方容易觉得自己一直在被评判，所以肯定要先于指正。",
      },
    },
    leadNote: {
      NURTURING: "在这段关系中，**{lead}** 是付出气的一方。",
      TENSION: "在这段关系中，**{lead}** 是主导的一方。",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "比肩（比肩）",
      body: "与我并肩而立的位置。话说得来、相处自在，但想要同一样东西时，很难让步。",
    },
    GEOPJAE: {
      name: "劫财（劫財）",
      body: "相似却方式不同的位置。一同发力时力量很大，一旦有东西要分，算计就变得敏感。",
    },
    SIKSIN: {
      name: "食神（食神）",
      body: "把我内在之物引出来的位置。在一起时话变多，想做的事也变多，是最自在的对象之一。",
    },
    SANGGWAN: {
      name: "伤官（傷官）",
      body: "动摇我固有框架的位置。有趣且富有刺激，但一旦言语变得尖锐，伤口会拖得很久。",
    },
    PYEONJAE: {
      name: "偏财（偏財）",
      body: "让人想去照顾的位置。活跃而即兴的乐趣很多，只是关系的分量容易偏轻。",
    },
    JEONGJAE: {
      name: "正财（正財）",
      body: "传统上对男性而言代表配偶的位置。会踏实地珍惜对方，关系在日常中沉稳地安定下来。",
    },
    PYEONGWAN: {
      name: "偏官（偏官）",
      body: "让我紧张的位置。吸引力强、难以移开视线，但长久相处可能会感到压迫。",
    },
    JEONGGWAN: {
      name: "正官（正官）",
      body: "传统上对女性而言代表配偶的位置。会把我导正，给关系带来秩序与安定感。",
    },
    PYEONIN: {
      name: "偏印（偏印）",
      body: "以与众不同的方式帮助我的位置。有深深相通的时刻，但理解彼此的方式需要时间。",
    },
    JEONGIN: {
      name: "正印（正印）",
      body: "包容并照顾我的位置。会让人想依靠，心也安定下来。只是依靠的一方若一味索取，关系就会倾斜。",
    },
  },
  dayMasters: {
    甲: { name: "甲木（阳木）", trait: "笔直生长的大树。方向一旦定下就不再动摇，宁可硬撑也不愿弯折。" },
    乙: { name: "乙木（阴木）", trait: "如藤蔓般柔韧的草。顺着情势弯曲前行，却有着不会折断的韧劲。" },
    丙: { name: "丙火（阳火）", trait: "正午的太阳。不掩饰情绪，使周围明亮，也不怯于站到前面。" },
    丁: { name: "丁火（阴火）", trait: "烛火与灯火。含蓄而持久，先把暖意分给身边亲近的人。" },
    戊: { name: "戊土（阳土）", trait: "辽阔的原野与高山。不易动摇，可供人倚靠，但一旦决定就不轻易更改。" },
    己: { name: "己土（阴土）", trait: "田间的泥土。什么都接纳并加以培育，比起显露，更倾向于默默照料。" },
    庚: { name: "庚金（阳金）", trait: "未经琢磨的金属。决断快、了断分明，无法忍受事情拖延。" },
    辛: { name: "辛金（阴金）", trait: "打磨过的珠宝。感觉细腻、标准很高，看不惯敷衍了事的东西。" },
    壬: { name: "壬水（阳水）", trait: "大江与海。胸襟宽广，善于读懂流向，能把局面看得很大。" },
    癸: { name: "癸水（阴水）", trait: "露水与雨水。悄然渗透，比起言语，先从气氛中察觉。" },
  },
  dayMasterSigns: {
    甲: [
      "即便是初次见面，也照直说出自己的想法。",
      "一旦定下的约定或计划，不轻易更改。",
      "拒绝时不绕弯子，听起来可能有些生硬。",
    ],
    乙: [
      "避开正面冲突，改走别的路。",
      "看起来柔和，最终却仍走到了自己想去的地方。",
      "人多的场合，先观察气氛再融入。",
    ],
    丙: [
      "会主动向初次见面的人搭话。",
      "喜欢与不喜欢都写在脸上。",
      "人一多，自然而然就站到了中间。",
    ],
    丁: [
      "起初话不多，熟络之后照顾得很细致。",
      "比起人多的场合，更喜欢与一两个人长谈。",
      "记住别人随口说过的话，日后再提起。",
    ],
    戊: [
      "话少，即使事情紧急，声音也很少提高。",
      "众人都拖着不决时，最后收拾局面的那一个。",
      "一旦说了不行，很长时间都不会变。",
    ],
    己: [
      "听对方讲的时间比讲自己的更长。",
      "不太会拒绝请托，事情便都堆到身上。",
      "默默照料过的事，往往事后才被人发现。",
    ],
    庚: [
      "决定得快，觉得不对就当场说出来。",
      "不绕弯子说话，有时听起来显得冷淡。",
      "事情一拖沓，明显看得出焦躁。",
    ],
    辛: [
      "在穿着或挑选物品上，有明确的自己的标准。",
      "看到做得敷衍的地方，无法放过，一定会点出来。",
      "不轻易称赞，但一旦认可就十分确定。",
    ],
    壬: [
      "不挑人，与各种人都能相处。",
      "比起眼前的事，先谈起往后的事。",
      "长期被拴在一个地方会觉得憋闷。",
    ],
    癸: [
      "话不多，却把情况看得很准。",
      "气氛一有变化，最先察觉。",
      "不轻易表露心事，要了解需要时间。",
    ],
  },
  animalTraits: {
    rat: "察觉得快，也懂得抓住实利。危机时率先行动。",
    ox: "看似缓慢却能善始善终。一旦接下就不放手。",
    tiger: "无所畏惧，勇于带头。见到不公无法坐视。",
    rabbit: "柔和而机敏。懂得绕行，而非硬碰。",
    dragon: "胸襟大、理想高。对平淡之事不易满足。",
    snake: "不轻易显露内心，思虑深远。判断准确。",
    horse: "开朗好动。最难忍受被拘束。",
    goat: "重情且体贴。刺耳的话会记很久。",
    monkey: "才艺多、应变快。对重复的事感到无聊。",
    rooster: "勤勉细致。见不得有偏差的东西。",
    dog: "重义气，一旦信任就走到最后。对背叛尤其伤心。",
    pig: "宽厚而坦率。容易信任人，有时因此吃亏。",
  },
  affinity: {
    menu: "姻缘之相",
    formTitle: "适合我的人是什么样的类型",
    formDescription:
      "只要填入一个出生年月日即可。即使不知道对方的生日，或还没有那样的人，也能查看。",
    meLegend: "我",
    genderHint:
      "传统命理会依性别来看配偶的位置。若不填写，则剔除该项目，只以其余项目来看。",
    seekingLabel: "寻找的对象",
    seekingHint:
      "配偶位置（正财·正官）需要两人的性别都具备才能判定。",
    seekingAny: "不指定",
    submit: "观看广告后查看匹配结果",
    submitNoAd: "查看匹配结果",
    submitting: "查找中…",

    resultTitle: "姻缘之相",
    intro:
      "我们整理了您的八字所召唤的对象类型。下面这些类型，**即使不知道生日，也能先从性情上认出来。**",
    scoreCaption: "这就是合婚所用的各项分数本身，并非合算后的匹配度。",
    meTitle: "您所在的位置",
    meBody: "您是{dayMaster}，目前为{strength}。",
    meHint:
      "八字是把出生的年、月、日、时写成八个字。其中**出生当日的第一个字代表我自己**，称为日主（日干）。下面的类型也都是依这一个字来划分的。",
    bestTitle: "与您契合的类型",
    bestHint:
      "这是对方的日主，也就是把**那个人出生当日之气**分成十种。我们按与您相合的顺序挑出了三种。即使不知道生日，也能先从下面的行为来推测。",
    signsTitle: "会以这样的样子表现出来",
    avoidTitle: "需要相处磨合的类型",
    avoidHint:
      "这并不是说不行。而是说，比起最初的自在，这个位置更需要彼此磨合的时间。",
    bondLabel: "气质咬合",
    spouseLabel: "配偶位置",
    spouseSkipped: "未指定性别，因此剔除了这一项",
    scoreHelp:
      "**气质咬合** — 看两人出生当日之气如何相互咬合。即使是相互推拉的组合，阴与阳交错的一对也被看得最高。\n**配偶位置** — 传统命理另有代表配偶的位置。对男性称为正财，对女性称为正官；我们会**从双向**来看——对方对我是否为该位置，以及我对对方是否为该位置。两者都成立时，就是传统合婚中评价最高的一对。",
    typeHeading: "像{name}这样的人",
    needTitle: "您当下需要之气",
    needBody: "若对方的{elements}之气深厚，就能补上您单薄的位置。",
    needHint:
      "要凭外表看出一个人的五行并不容易。不过一旦知道了对方的生日，请先看这个位置。",
    zodiacTitle: "顺带一看的生肖",
    zodiacHint:
      "生肖只要知道出生年份即可，所以是最先能确认的。但它只是四柱之一，请当作参考。",
    zodiacGood: "契合的生肖",
    zodiacHard: "容易起摩擦的生肖",
    tableType: "类型",
    tableSign: "生肖",
    tableYears: "对应年份",
    bornYear: "{year}年生",
    younger: "小{n}岁",
    older: "大{n}岁",
    sameAge: "同岁",
    zodiacYearsCaution:
      "八字换年不在元旦，而在立春（2月4日前后）。**1月与2月初出生的人属前一年的生肖**，所以这段时期的生日请连同前后一年一起查看。",
    dayBranchTitle: "这个人与我合不合",
    dayBranchBody:
      "用出生年月日就能简单确认对方是否适合您。\n详细内容请通过页面下方的「查看八字合婚」确认。",
    check: {
      button: "用对方的生日确认看看",
      title: "这个人是什么类型",
      body: "只要填入出生年月日，我们就会告诉您这个人属于上面十种类型中的哪一种。不会计算合婚分数。",
      submit: "确认",
      checking: "确认中…",
      rank: "您的第{rank}位",
      heading: "这个人是{name}",
      caution:
        "这只依出生当日来看。**若出生在午夜前后**，日期可能落在前后两天；1月与2月初的生日，生肖则归到前一年。",
      close: "关闭",
      another: "确认其他人",
      error: "请确认日期。该日期不存在或超出了范围。",
    },
    nextTitle: "如果心里已有那个人",
    nextBody:
      "填入两人的出生年月日，就能得到把以上各项全部合算后的实际匹配度。",
    nextButton: "查看八字合婚",
    recalculate: "重新查看",
    copyLink: "复制结果链接",
    copied: "已复制",
    missingInput: "无法读取结果信息。请从头重新输入。",
    partialTime:
      "由于未填写出生时刻，我们在剔除时柱的情况下进行了分析。填入时刻后，所需之气会更加准确。",
    disclaimer:
      "这是传统命理视角的参考资料，并非要您去结识或回避某个特定的人。",
  },
  result: {
    title: "合婚结果",
    totalLabel: "匹配度",
    breakdown: "各项分数",
    recalculate: "重新推算",
    copyLink: "复制结果链接",
    copied: "已复制",
    missingInput: "无法读取结果信息。请从头重新输入。",
    partialTime:
      "由于未填写出生时刻，我们在剔除时柱的情况下进行了推算。填入时刻会更准确。",
    engineVersion: "推算基准",
    disclaimer:
      "这是传统命理视角的参考资料，并非科学预测，也不是对某段关系的定论。",
  },
  ads: { label: "广告" },
  analyzing: {
    title: "正在对照两人的八字",
    quotes: [
      "缘分不是遇见，而是认出。",
      "契合的关系，并非从不争执，而是争执之后仍会回来。",
      "八字不是既定的答案，而是理解彼此的一种语言。",
      "有因为相似而自在的关系，也有因为不同而学习的关系。",
      "长久的关系，大多是没有把表达一再推迟的关系。",
      "若觉得对方的方式陌生，那说明他拥有我所没有的东西。",
      "好的缘分，一半是天生，一半是经营出来的。",
      "依靠的一方与付出的一方轮流交替时，关系才能长久。",
      "比分数更重要的，是如何解读那个分数。",
      "两人的季节若不同，把彼此的季节告诉对方就好。",
    ],
    watching: "正在播放广告",
    remaining: "{seconds}秒后为您开启结果",
  },
  report: {
    title: "将合婚报告保存为 PDF",
    body:
      "我们会把这个结果做成 7 页的 PDF。**其中 4 页是画面上没有的** — 气的流动方向、更深入地看各自的命局、四柱相遇之处，以及计算依据。",
    buyButton: "支付 {price} 并获取",
    preparing: "准备中",
    ordering: "正在建立订单…",
    paying: "正在处理支付…",
    issuing: "正在生成报告…",
    done: "已获取。若要再次下载，请点击下方按钮。",
    failed: "支付或发放失败。请稍后再试。",
    retry: "重新获取",
    contents: [
      "第 1 页 — 匹配度与这段关系的长处、值得留意之处",
      "第 2 页 — 关系的形态与十神、各项分数",
      "第 3 页 — 两人的八字原局与五行力量",
          "第 4 页 — 气的流动方向与四柱相遇之处",
      "第 5 页 — 更深入地看各自的命局（季节推动的气）",
      "第 6 页 — 对方的四柱对我而言是什么",
      "第 7 页 — 这个命局是这样算出来的",
    ],
    consentLabel:
      "本商品为支付后即时提供的数字内容，我已确认**下载完成后，因单纯改变心意而提出的撤回将受到限制**。",
    consentRequired: "须同意撤回限制事项后方可支付。",
    productInfoTitle: "商品信息告示",
    productInfo: [
      ["制作·供应方", "{brand}"],
      ["商品形态", "PDF 文档 1 份（7 页）。支付后即可在画面上立即下载。"],
      ["使用条件", "只要是能打开 PDF 的设备即可。无需另行安装或注册会员。"],
      ["使用期限", "无限制。下载的文件由用户自行保管。"],
      ["重新获取", "同一笔订单最多 5 次。服务器不保存文件，因此离开结果画面后无法再次生成。"],
      ["撤回申请", "下载完成前可全额退款。完成后，因单纯改变心意而提出的撤回将受到限制（《电子商务法》第17条第2款）。"],
      ["换货·退货费用", "无。属数字内容，不涉及配送。"],
    ],
    refundContact:
      "退款·咨询请通过下方客服中心或邮箱提出。若文档未能生成，或支付金额与订单不符，我们将全额退款。",
    pdfLanguageNotice:
      "PDF 文档以与本画面相同的语言生成。",
  },
  affinityReport: {
    title: "将姻缘之相报告保存为 PDF",
    body: "我们会把画面上的结果做成 4 页的 PDF，其中还包含**画面上没有的完整排名表**——画面只显示前三名，而 PDF 会完整收录十种类型与十二生肖。",
    buyButton: "支付 {price} 并获取",
    preparing: "准备中",
    ordering: "正在建立订单…",
    paying: "正在处理支付…",
    issuing: "正在生成报告…",
    done: "已获取。若要再次下载，请点击下方按钮。",
    failed: "支付或发放失败。请稍后再试。",
    retry: "重新获取",
    contents: [
      "第 1 页 — 您所在的位置与当下需要之气",
      "第 2 页 — 契合的三种类型，性情与行为线索",
      "第 3 页 — 需要磨合的类型 + 天干十种的完整排名表",
      "第 4 页 — 十二生肖的完整排名表（含出生年份与年龄差）",
    ],
    consentLabel:
      "本商品为支付后即时提供的数字内容，我已确认**下载完成后，因单纯改变心意而提出的撤回将受到限制**。",
    consentRequired: "须同意撤回限制事项后方可支付。",
    productInfoTitle: "商品信息告示",
    productInfo: [
      ["制作·供应方", "{brand}"],
      ["商品形态", "PDF 文档 1 份（4 页）。支付后即可在画面上立即下载。"],
      ["使用条件", "只要是能打开 PDF 的设备即可。无需另行安装或注册会员。"],
      ["使用期限", "无限制。下载的文件由用户自行保管。"],
      ["重新获取", "同一笔订单最多 5 次。服务器不保存文件，因此离开结果画面后无法再次生成。"],
      ["撤回申请", "下载完成前可全额退款。完成后，因单纯改变心意而提出的撤回将受到限制（《电子商务法》第17条第2款）。"],
      ["换货·退货费用", "无。属数字内容，不涉及配送。"],
    ],
    refundContact:
      "退款·咨询请通过下方客服中心或邮箱提出。若文档未能生成，或支付金额与订单不符，我们将全额退款。",
    pdfLanguageNotice:
      "PDF 文档以与本画面相同的语言生成。",
  },
  reportDetail: {
    supplyTitle: "气的流动方向",
    supplyHint: "匹配率中的五行项目是两个方向的平均值。只看平均，就看不出是谁在补谁。这里分开来看 — 也有只有一方被大量补足的关系。",
    supplyReceiveLabel: "{name}被补足的程度",
    needsLabel: "当下需要的气",
    bondTitle: "两个日干结成的组合",
    depthTitle: "更深入地看各自的命局",
    vitalityTitle: "季节推动的气",
    vitalityHint: "势力条显示的是「有多少」，这张表显示的是「出生月份是否推动它」。同样的量，旺的气与死的气力道不同。",
    vitalities: {
      WANG: { name: "旺", body: "最得力的位置" },
      SANG: { name: "相", body: "随后得力的位置" },
      HYU: { name: "休", body: "事毕休息的位置" },
      SU: { name: "囚", body: "受困难以施展的位置" },
      SA: { name: "死", body: "最无力的位置" },
    },
    seasonBoostTitle: "月令抬升了多少",
    rawLabel: "月令前",
    strengthLabel: "月令后",
    earthSeasonNote: "生于四季月（辰未戌丑），因此土也视为旺。",
    allyRatioLabel: "日干同党的比例",
    allyRatioHint: "印星与比劫相加的比例。超过45%视为身强，不足35%视为身弱。我们把数字一并列出，让您看到判定落在何处。",
    pillarsTitle: "四柱相遇之处",
    pillarsHint: "进入匹配率的只有日支一项，因为那是配偶宫。其余三柱也可用同一张关系表来看，故一并列出。",
    branchRelations: {
      SAMHAP: "三合",
      BANHAP: "半合",
      YUKHAP: "六合",
      SAME: "同支",
      NEUTRAL: "无关系",
      WONJIN: "怨嗔",
      CHUNG: "冲",
    },
    pillarColumn: "柱",
    relationColumn: "关系",
    relationScoreColumn: "关系分数",
    tenGodColumn: "十神",
    stemGodsTitle: "对方的四柱对我而言是什么",
    stemGodsHint: "匹配率只比较日干。对方其余各柱也按同一规则定出十神 — 可以看出那个人的哪个位置对您意味着什么。",
    seesLabel: "以{from}的角度看",
    notScoredNote: "此表的分数未计入匹配率，列出是供您比较强弱。",
    appendixTitle: "这个命局是这样算出来的",
    timeCorrectionLabel: "出生时刻",
    timeCorrectionApplied: "已校正为真太阳时，按{time}计算。",
    timeCorrectionNone: "未填写出生时刻，因此不计时柱。",
    timeCorrectionDateShift: "校正后日期移至{date}，日柱按该日推算。",
    calendarLabel: "推算命局所用的日期",
    solarLabel: "阳历",
    lunarLabel: "农历",
    lunarUnavailable: "万年历表中没有这一天，因此无法一并列出农历日期。",
  },
  footer: {
    privacy: "隐私政策",
    terms: "使用条款",
    refund: "退款政策",
    pricing: "价格",
    legalEntity: "商号",
    representative: "代表",
    businessNumber: "营业登记号",
    mailOrderNumber: "网络销售",
    address: "地址",
    customerCenter: "客服中心",
    email: "邮箱",
    privacyOfficer: "隐私负责人",
    hostingProvider: "托管",
    providedBy: "提供",
    effective: "生效日",
    backHome: "返回首页",
  },
  bands: {
    EXCELLENT: "非常契合的关系",
    GOOD: "契合的关系",
    FAIR: "平顺的关系",
    CHALLENGING: "需要用心经营的关系",
  },
  engines: {
    saju: {
      name: "八字合婚",
      description: "同时看日主五行、五行补益与日支关系。",
    },
    zodiac: {
      name: "生肖合婚",
      description: "看两人出生年份地支（生肖）之间的关系。",
    },
  },
  factors: {
    dayMasterRelation: "日主五行关系",
    spouseStar: "配偶星",
    elementSupply: "五行补益（用神）",
    dayBranchRelation: "日支关系",
    branchRelation: "生肖关系",
  },
  notes: {
    "strength.dayMasterRelation":
      "两人的气质正处在彼此所需要的方向上。即使有时觉得对方的方式陌生，最终仍会朝着补足自己所欠缺之处的方向发挥作用。",
    "strength.spouseStar":
      "两人彼此都带有传统上属于配偶位置的气。如果从一开始就莫名地觉得自在，很可能就是因为这一点。",
    "strength.elementSupply":
      "各自当下所需要的气，对方正好拥有。这是独自难以化解的地方，与这个人在一起时会变得顺畅的组合。",
    "strength.dayBranchRelation":
      "日支在传统上被视为配偶的位置。这个位置彼此相合，共处的时间往往较为自在。",
    "strength.branchRelation":
      "生肖的关系很好。初次见面的印象，或旁人眼中的画面，都是自然而然的组合。",
    "caution.dayMasterRelation":
      "这是气质容易起摩擦的位置。面对同一件事，速度与方式都不同，容易误以为对方是故意的。比起结论，请先把过程对齐。",
    "caution.spouseStar":
      "彼此并非传统所说的配偶位置之气。吸引力可能不会即刻出现，而更偏向长久相处后慢慢积累。",
    "caution.elementSupply":
      "各自所需要的气，在对方身上也很单薄。两人都擅长的事会做得非常好，但彼此欠缺的位置会一直空着。那个位置最好从关系之外去填补。",
    "caution.dayBranchRelation":
      "在共同生活的位置上容易产生摩擦。多半不是大问题，而是生活习惯之类的小事，因此事先定好规则会减少许多。",
    "caution.branchRelation":
      "以生肖来看，两人处在相对的一端。看事情的方式不同，容易起摩擦，但也正因如此，彼此有很多可以学习的地方。",

    "spouseStar.MUTUAL":
      "两人恰好互为对方的配偶位置（正财·正官）。这是传统合婚中评价最高的一对。",
    "spouseStar.STRONG":
      "一方恰好落在配偶位置上，另一方也处在与之相当的位置。两人朝向对方的心意，分量上可能略有不同。",
    "spouseStar.PARTIAL":
      "只有一方把对方视为配偶位置。最初的吸引容易偏向一边，因此最好不要把表达一再推迟。",
    "spouseStar.SLIGHT":
      "其中一方有与配偶位置相当的关系。这更偏向在相处中慢慢积累，而非即刻的吸引。",
    "spouseStar.NONE":
      "彼此都不是传统所说的配偶位置。这个组合比起吸引，更偏向在共同生活中一点点建立起来。",
    "dayMaster.CLASH_BONDED":
      "{elementA}与{elementB}相互克制，但阴阳交错。这是传统上视为夫妻位置的配合，张力容易转化为情意。",
    "dayMaster.CLASH_HARSH":
      "{elementA}与{elementB}相互克制，而且阴阳相同。刺激很大，彼此加诸对方的负担也同样大。",
    "dayMaster.FLOW_GUARDED":
      "一方付出气，另一方将其包容起来。这是激烈之气在对方那里被打磨的配合（伤官佩印）。",
    "dayMaster.FLOW_BLOCKED":
      "一方付出气，对方却把它收走。这是付出的一方容易疲惫的配合（枭神夺食），因此最好用言语彼此确认在给予和接受什么。",
    "dayMaster.PEER_EVEN":
      "两人同为{elementA}之气，连阴阳也相同。彼此对等而自在，但相互推动的力量较弱。",
    "dayMaster.PEER_RIVAL":
      "两人同为{elementA}之气，但阴阳不同。会很快被彼此吸引，却也容易为同一个位置相争。",
    "supply.AMPLE":
      "彼此都充分拥有对方所需要之气。第一位需要{needA}、第二位需要{needB}之气，而对方正好补上了那个位置。",
    "supply.ENOUGH":
      "彼此在某种程度上拥有对方所需要之气。第一位需要{needA}、第二位需要{needB}之气，而对方也有相应的分量。",
    "supply.THIN":
      "彼此所需要之气，在对方身上并不充裕。第一位需要{needA}、第二位需要{needB}之气，而那个位置很单薄。",
    "supply.SCARCE":
      "这是难以从彼此身上获得所需之气的组合。第一位需要{needA}、第二位需要{needB}之气，而对方那个位置也是空的。那一部分最好从关系之外去填补。",
    "dayBranch.SAMHAP": "日支形成三合。这是配偶位置上最为契合的组合。",
    "dayBranch.BANHAP":
      "日支形成半合。因夹着三合的中心之字，是配偶位置上相当相配的一对。",
    "dayBranch.YUKHAP": "日支形成六合。是彼此相互吸引的一对。",
    "dayBranch.SAME": "日支相同。相似之处多而自在，但新鲜感较少。",
    "dayBranch.NEUTRAL": "日支之间没有特别的关系。",
    "dayBranch.WONJIN":
      "日支形成元辰（怨嗔）。虽不至于大起冲突，却容易积累说不出缘由的委屈，因此最好不要放过，当下就说出来。",
    "dayBranch.CHUNG": "日支相冲。这是容易起摩擦的位置，因此对话的方式很重要。",
    "zodiac.SAMHAP": "{animalA}与{animalB}为三合。这是生肖合婚中最好的组合。",
    "zodiac.BANHAP":
      "{animalA}与{animalB}为半合。因夹着三合的中心，彼此相当契合。",
    "zodiac.YUKHAP": "{animalA}与{animalB}为六合。彼此相处融洽。",
    "zodiac.SAME": "两人同为{animalA}。性情相似。",
    "zodiac.NEUTRAL": "{animalA}与{animalB}没有特别的关系。",
    "zodiac.WONJIN":
      "{animalA}与{animalB}为元辰（怨嗔）。即使不至于大吵，隐隐的不合也容易拖得很久。",
    "zodiac.CHUNG": "{animalA}与{animalB}相冲。正因彼此不同，可学之处也多。",
  },
  animals: {
    rat: "鼠",
    ox: "牛",
    tiger: "虎",
    rabbit: "兔",
    dragon: "龙",
    snake: "蛇",
    horse: "马",
    goat: "羊",
    monkey: "猴",
    rooster: "鸡",
    dog: "狗",
    pig: "猪",
  },
  elements: {
    WOOD: "木",
    FIRE: "火",
    EARTH: "土",
    METAL: "金",
    WATER: "水",
  },
};
