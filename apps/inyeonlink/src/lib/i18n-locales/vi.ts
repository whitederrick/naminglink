// 인연링크 화면 사전의 베트남어(vi) 판. `src/lib/i18n.ts`의 `en`을 구조와 번역의 기준으로 옮겼고,
// 영어가 모호하거나 명리 용어의 뉘앙스가 필요한 자리는 같은 파일의 `ko` 원문을 대조해 뜻을 맞췄다.
// 언어 선택기 3개 키와 footer 13개 키는 naminglink(`i18n.ts`·`SiteFooter.tsx`)의 vi를 그대로 가져와,
// 두 서비스에서 같은 말이 같은 자리에 보이도록 했다.

import type { Dictionary } from "@/lib/i18n";

export const vi: Dictionary = {
  brand: "InyeonLink",
  tagline: "Xem duyên đôi lứa qua Tứ Trụ và con giáp",
  currentLanguage: "Ngôn ngữ hiện tại",
  moreLanguages: "Thêm",
  closeLanguages: "Đóng",
  landing: {
    title: "Xem hai người\nhợp nhau đến đâu",
    subtitle:
      "Bạn chỉ cần một ngày sinh.\nChúng tôi kết hợp hợp duyên Tứ Trụ (Bát Tự) với hợp duyên con giáp rồi hiển thị thành tỉ lệ hợp.",
    cta: "Xem hợp duyên Tứ Trụ",
    howTitle: "Cách tính",
    steps: [
      "Nhập ngày sinh của cả hai người. Giờ sinh không bắt buộc.",
      "Hợp duyên Tứ Trụ lấy từ ngũ hành của nhật can, mức bù trừ ngũ hành và nhật chi; hợp duyên con giáp lấy từ chi của năm sinh.",
      "Hai điểm số được gộp lại theo trọng số thành một tỉ lệ hợp.",
    ],
    privacyTitle: "Chúng tôi không lưu bất cứ thứ gì bạn nhập",
    privacyBody:
      "Ngày sinh chỉ được dùng trong lúc tính kết quả và không được ghi lại ở đâu cả. Không cần tài khoản. Những gì nằm trong đường dẫn kết quả cũng không được gửi lên máy chủ.",
    disclaimer:
      "Đây là một luận giải Tứ Trụ truyền thống, chỉ mang tính tham khảo. Nó không phải dự đoán khoa học hay một phán quyết về bất kỳ mối quan hệ nào.",
  },
  form: {
    title: "Ngày sinh của cả hai người",
    description:
      "Biết giờ sinh thì luận sẽ sắc hơn, nhưng không có cũng vẫn xem được.",
    personA: "Người thứ nhất",
    personB: "Người thứ hai",
    nickname: "Cách gọi",
    nicknamePlaceholder: "ví dụ: Tôi",
    nicknameHint: "Chỉ hiển thị trên màn hình kết quả. Không dùng vào việc tính toán.",
    gender: "Giới tính",
    male: "Nam",
    female: "Nữ",
    genderUnspecified: "Không muốn nêu",
    genderHint:
      "Tứ Trụ truyền thống luận vị trí phối ngẫu khác nhau theo giới tính. Nếu bạn bỏ qua mục này, mục đó sẽ được loại khỏi phép tính.",
    birthplace: "Nơi sinh",
    birthplaceHint:
      "Trụ giờ được tính theo giờ mặt trời thật tại nơi sinh, có tính cả giờ mùa hè và những lần đổi múi giờ trong quá khứ. Nếu không thấy nơi sinh trong danh sách, hãy chọn thành phố gần nhất — càng gần thì trụ giờ càng chính xác.",
    calendar: "Lịch",
    solar: "Dương lịch",
    lunar: "Âm lịch",
    leapMonth: "Tháng nhuận",
    birthDate: "Ngày sinh",
    year: "Năm",
    month: "Tháng",
    day: "Ngày",
    birthTime: "Giờ sinh",
    unknownTime: "Tôi không biết giờ sinh",
    hour: "Giờ",
    minute: "Phút",
    submit: "Xem quảng cáo để xem kết quả tương thích",
    submitNoAd: "Xem kết quả tương thích",
    submitting: "Đang tính…",
    errorInvalidDate:
      "Vui lòng kiểm tra lại ngày sinh. Nếu là âm lịch, hãy xem thêm ngày đó có rơi vào tháng nhuận không.",
    errorGeneric: "Việc tính toán không thành công. Vui lòng thử lại sau giây lát.",
  },
  reading: {
    chartTitle: "Lá số của cả hai",
    chartHint:
      "Tứ Trụ ghi năm, tháng, ngày và giờ sinh, mỗi trụ hai chữ. Mọi điểm số bên dưới đều ra từ tám chữ này.",
    pillarYear: "Trụ năm",
    pillarMonth: "Trụ tháng",
    pillarDay: "Trụ ngày",
    pillarHour: "Trụ giờ",
    pillarHourUnknown: "Không có giờ sinh",
    dayMasterLabel: "Nhật can",
    animalLabel: "Con giáp",
    seasonLabel: "Mùa sinh",
    elementsTitle: "Thế lực ngũ hành",
    strongest: "Mạnh nhất",
    scarcest: "Mỏng nhất",
    strengthTitle: "Chỗ mạnh của cặp đôi này",
    cautionTitle: "Điều cần lưu ý",
    bodyStrengthTitle: "Sức của nhật can",
    favorableLabel: "Khí bạn đang cần",
  },
  bodyStrength: {
    STRONG: {
      name: "Thân vượng (身强)",
      body: "Khí trợ giúp nhật can của bạn khá dồi dào. Điều đó cho bạn sức tự đẩy mình đi, nhưng cũng dễ nghiêng hẳn về một phía — bạn thấy dễ chịu hơn khi có thứ gì đó rút bớt phần dư ra.",
    },
    BALANCED: {
      name: "Trung hòa (中和)",
      body: "Khí trợ giúp nhật can và khí rút bớt nó gần như ngang nhau. Chỗ này khó nói hẳn về bên nào, nên ở đây thứ gì đang mỏng nhất sẽ được xem là thứ bạn cần.",
    },
    WEAK: {
      name: "Thân nhược (身弱)",
      body: "Khí trợ giúp nhật can của bạn khá mỏng. Bạn mượn sức từ xung quanh rất khéo, nhưng chống đỡ một mình lâu thì dễ đuối — bạn bừng lên khi có chỗ dựa phía sau.",
    },
  },
  relation: {
    title: "Hai người đứng với nhau thế nào",
    hint: "Tứ Trụ gọi tên cách hai nhật can nhìn nhau bằng mười tên gọi, gọi là thập thần (十神). Cách nhìn có chiều: chỗ bạn nhìn người kia và chỗ người kia nhìn bạn có thể khác nhau.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Giống nhau",
        body: "Nhật can của hai người cùng một khí. Nhiều điều không nói cũng hiểu và sở thích trùng nhau. Cái khó là hai người mạnh yếu ở cùng những chỗ, nên gặp chuyện khó thì cả hai cùng tắc ở một điểm.",
      },
      NURTURING: {
        name: "Một bên nuôi, một bên nở",
        body: "Khí chảy theo một chiều. Bên nhận thấy thoải mái và nảy ra nhiều điều muốn làm; bên cho thì vui vì người kia tiến lên. Vì dòng chảy chỉ một chiều nên phải có gì đó quay trở lại, không thì bên cho rồi cũng cạn.",
      },
      TENSION: {
        name: "Một bên giữ nhịp cho bên kia",
        body: "Một người ở vị trí chế ngự người kia. Cái căng ấy giữ cho cả hai không chùng xuống và thường ra kết quả khi làm việc cùng nhau. Bên bị chế ngự dễ thấy mình luôn bị đánh giá, nên ghi nhận phải đến trước lời chỉnh sửa.",
      },
    },
    leadNote: {
      NURTURING: "Ở đây **{lead}** là bên trao khí đi.",
      TENSION: "Ở đây **{lead}** là bên giữ nhịp.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Tỷ Kiên (比肩)",
      body: "Người sánh vai ngang hàng với bạn. Dễ nói chuyện và dễ ở gần — nhưng khó nhường khi cả hai cùng muốn một thứ.",
    },
    GEOPJAE: {
      name: "Kiếp Tài (劫財)",
      body: "Giống nhau nhưng cách làm khác nhau. Rất mạnh khi cùng đẩy về một hướng; lại tính toán rạch ròi khi có gì đó phải chia.",
    },
    SIKSIN: {
      name: "Thực Thần (食神)",
      body: "Người kéo những gì trong bạn ra ngoài. Ở cạnh họ, bạn nói nhiều hơn và muốn làm nhiều hơn. Một trong những vị trí dễ chịu nhất.",
    },
    SANGGWAN: {
      name: "Thương Quan (傷官)",
      body: "Người làm lung lay khuôn khổ của bạn. Thú vị và kích thích — nhưng một khi lời qua tiếng lại trở nên sắc, vết cắt để lại rất lâu.",
    },
    PYEONJAE: {
      name: "Thiên Tài (偏財)",
      body: "Người khiến bạn muốn chăm lo. Nhiều niềm vui ngẫu hứng, dù sức nặng của mối quan hệ có thể vẫn nhẹ.",
    },
    JEONGJAE: {
      name: "Chính Tài (正財)",
      body: "Theo truyền thống, đây là vị trí phối ngẫu của người nam. Sự chăm sóc đến đều đặn, và mối quan hệ an vị trong những ngày thường hơn là ở những đỉnh cao.",
    },
    PYEONGWAN: {
      name: "Thiên Quan (偏官)",
      body: "Người khiến bạn luôn ở thế căng. Sức hút mạnh và khó rời mắt, nhưng ở gần lâu thì có thể thành áp lực.",
    },
    JEONGGWAN: {
      name: "Chính Quan (正官)",
      body: "Theo truyền thống, đây là vị trí phối ngẫu của người nữ. Họ uốn bạn cho ngay ngắn, và mang trật tự cùng sự vững vàng đến cho mối quan hệ.",
    },
    PYEONIN: {
      name: "Thiên Ấn (偏印)",
      body: "Người giúp bạn theo một cách khác thường. Có những lúc hiểu nhau rất sâu, dù phải mất thời gian mới hiểu được cách của nhau.",
    },
    JEONGIN: {
      name: "Chính Ấn (正印)",
      body: "Người ôm lấy và chăm nom bạn. Bạn muốn tựa vào, và lòng thấy yên. Nhưng nếu chỉ một bên tựa mãi thì mối quan hệ sẽ lệch.",
    },
  },
  dayMasters: {
    甲: { name: "Giáp Mộc (甲)", trait: "Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong." },
    乙: { name: "Ất Mộc (乙)", trait: "Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy." },
    丙: { name: "Bính Hỏa (丙)", trait: "Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên." },
    丁: { name: "Đinh Hỏa (丁)", trait: "Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước." },
    戊: { name: "Mậu Thổ (戊)", trait: "Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi." },
    己: { name: "Kỷ Thổ (己)", trait: "Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra." },
    庚: { name: "Canh Kim (庚)", trait: "Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng." },
    辛: { name: "Tân Kim (辛)", trait: "Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả." },
    壬: { name: "Nhâm Thủy (壬)", trait: "Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc." },
    癸: { name: "Quý Thủy (癸)", trait: "Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói." },
  },
  dayMasterSigns: {
    甲: [
      "Ngay lần gặp đầu cũng nói thẳng điều mình nghĩ.",
      "Hiếm khi đổi một kế hoạch hay lời hứa đã định.",
      "Từ chối thẳng thừng, nghe có thể cộc.",
    ],
    乙: [
      "Tránh chỗ đối đầu và đi đường khác.",
      "Trông thì mềm, cuối cùng vẫn tới đúng nơi mình định.",
      "Dò không khí trước rồi mới nhập vào một nhóm.",
    ],
    丙: [
      "Chủ động bắt chuyện với người vừa mới gặp.",
      "Thích hay không thích lộ hết ra trên mặt.",
      "Không cố ý mà vẫn thành trung tâm của cuộc gặp.",
    ],
    丁: [
      "Ban đầu ít nói, thân rồi thì chăm chút từng li.",
      "Thích trò chuyện lâu với một hai người hơn là chỗ đông.",
      "Nhớ một câu nói thoáng qua rồi lúc khác nhắc lại.",
    ],
    戊: [
      "Nói ít; việc có gấp thì giọng cũng hiếm khi cao lên.",
      "Là người chốt lại ở phút cuối khi những người khác còn chần chừ.",
      "Đã nói không thì rất lâu vẫn là không.",
    ],
    己: [
      "Nghe lâu hơn nói.",
      "Khó từ chối nên việc cứ dồn về mình.",
      "Việc lặng lẽ lo liệu mãi sau mới lộ ra.",
    ],
    庚: [
      "Quyết nhanh và nói ngay tại chỗ.",
      "Không làm mềm lời, nghe có thể thấy lạnh.",
      "Thấy rõ sự sốt ruột khi việc kéo dài.",
    ],
    辛: [
      "Có tiêu chuẩn rõ ràng về quần áo và những thứ mình chọn.",
      "Không thể để một việc làm dở dang trôi qua mà không nói.",
      "Ít khen, nhưng đã khen thì rất chắc.",
    ],
    壬: [
      "Hòa được với đủ kiểu người.",
      "Nhắc chuyện về sau trước cả chuyện trước mắt.",
      "Khó chịu khi bị buộc vào một chỗ quá lâu.",
    ],
    癸: [
      "Nói ít nhưng đọc tình hình rất chuẩn.",
      "Là người đầu tiên nhận ra khi không khí đổi.",
      "Giữ kín lòng mình, nên phải có thời gian mới hiểu được.",
    ],
  },
  animalTraits: {
    rat: "Nhanh nhận ra và nhanh giữ lấy điều quan trọng. Động trước tiên khi có biến.",
    ox: "Trông chậm nhưng theo đến cùng. Đã nhận việc thì không buông.",
    tiger: "Không biết sợ và luôn đi đầu. Không để chuyện bất công trôi qua.",
    rabbit: "Dịu dàng và tinh ý. Biết đi vòng thay vì đâm thẳng vào.",
    dragon: "Lòng rộng và lý tưởng cao. Hiếm khi hài lòng với những điều tầm thường.",
    snake: "Giữ ý riêng và nghĩ sâu. Phán đoán chính xác.",
    horse: "Sáng và hiếu động. Khổ nhất là bị nhốt trong khuôn.",
    goat: "Ấm áp và biết nghĩ cho người khác. Lời nặng thì giữ trong lòng rất lâu.",
    monkey: "Nhiều tài xoay xở và thích ứng nhanh. Chán việc lặp đi lặp lại.",
    rooster: "Chăm chỉ và kỹ tính. Không để thứ gì lệch chỗ.",
    dog: "Đã tin thì trung thành đến cùng. Bị phản bội thì đau đặc biệt sâu.",
    pig: "Rộng lượng và thẳng thắn. Tin người dễ, đôi khi phải trả giá.",
  },
  affinity: {
    menu: "Nét duyên",
    formTitle: "Người hợp với bạn có nét thế nào",
    formDescription:
      "Chỉ cần một ngày sinh. Bạn xem được ngay cả khi chưa biết ngày sinh của ai — hoặc chưa có ai trong lòng.",
    meLegend: "Bạn",
    genderHint:
      "Tứ Trụ truyền thống luận vị trí phối ngẫu khác nhau theo giới tính. Để trống thì mục đó bị bỏ ra chứ không đoán bừa.",
    seekingLabel: "Đang tìm",
    seekingHint:
      "Vị trí phối ngẫu (Chính Tài / Chính Quan) chỉ luận được khi biết giới tính của cả hai.",
    seekingAny: "Không xác định",
    submit: "Xem quảng cáo để xem kết quả mối quan hệ",
    submitNoAd: "Xem kết quả mối quan hệ",
    submitting: "Đang xem…",

    resultTitle: "Nét duyên của bạn",
    intro:
      "Đây là nét người mà lá số của bạn nghiêng về. **Bạn có thể nhận ra những kiểu này qua tính khí,** từ rất lâu trước khi biết ngày sinh của họ.",
    scoreCaption:
      "Đây đúng là điểm từng mục mà bộ máy hợp duyên dùng — không phải tỉ lệ hợp đã gộp lại.",
    meTitle: "Chỗ đứng của bạn",
    meBody: "Bạn là {dayMaster}, và hiện giờ bạn ở thế {strength}.",
    meHint:
      "Tứ Trụ ghi năm, tháng, ngày và giờ sinh của bạn thành tám chữ. **Chữ đầu của ngày sinh chính là bạn** — chữ đó gọi là nhật can. Mọi kiểu bên dưới đều được chia theo một chữ ấy.",
    bestTitle: "Những nét hợp với bạn",
    bestHint:
      "Đây là nhật can của người kia — **khí của ngày người ấy sinh ra** — chia thành mười loại, trong đó ba loại này ăn khớp với bạn. Bạn thường đoán được qua những biểu hiện bên dưới, từ lâu trước khi biết ngày sinh.",
    signsTitle: "Biểu hiện ra ngoài thế này",
    avoidTitle: "Nét cần thời gian",
    avoidHint:
      "Không phải lời cảnh báo. Nghĩa là sự dễ chịu đến sau, khi cả hai đã bỏ đủ thời gian vào.",
    bondLabel: "Độ ăn khớp tính khí",
    spouseLabel: "Vị trí phối ngẫu",
    spouseSkipped: "Giới tính để trống nên mục này đã được bỏ ra",
    scoreHelp:
      "**Độ ăn khớp tính khí** — khí của hai ngày sinh khớp vào nhau ra sao. Ngay cả một cặp đẩy-kéo cũng được điểm cao nhất khi âm và dương chéo nhau.\n**Vị trí phối ngẫu** — Tứ Trụ truyền thống dành riêng một vị trí cho người bạn đời: Chính Tài với nam, Chính Quan với nữ. Chúng tôi xét **cả hai chiều** — người ấy có ở vị trí đó với bạn không, và bạn có ở vị trí đó với người ấy không. Cả hai cùng đúng là cặp mà truyền thống đánh giá cao nhất.",
    typeHeading: "Người thuộc kiểu {name}",
    needTitle: "Khí bạn đang thiếu lúc này",
    needBody:
      "Nếu khí {elements} dồi dào ở người ấy, chỗ đang mỏng trong bạn sẽ được lấp đầy.",
    needHint:
      "Không thể nhìn mặt mà đọc ra ngũ hành của một người. Nhưng khi đã biết ngày sinh của họ, hãy xem chỗ này trước.",
    zodiacTitle: "Con giáp, đọc thêm bên lề",
    zodiacHint:
      "Con giáp chỉ cần năm sinh nên là thứ kiểm tra nhanh nhất. Nó cũng chỉ là một trong bốn trụ — hãy xem như một gợi ý.",
    zodiacGood: "Những tuổi hợp với bạn",
    zodiacHard: "Những tuổi dễ cấn",
    tableType: "Kiểu",
    tableSign: "Tuổi",
    tableYears: "Năm sinh",
    bornYear: "sinh năm {year}",
    younger: "kém {n} tuổi",
    older: "hơn {n} tuổi",
    sameAge: "bằng tuổi",
    zodiacYearsCaution:
      "Trong Tứ Trụ, năm đổi vào tiết Lập Xuân (khoảng ngày 4 tháng 2) chứ không phải ngày 1 tháng 1. **Người sinh trong tháng 1 hoặc đầu tháng 2 thuộc con giáp của năm trước**, nên với những ngày sinh đó hãy xem cả năm liền kề.",
    dayBranchTitle: "Người này có hợp với mình không?",
    dayBranchBody:
      "Chỉ cần ngày sinh là kiểm tra được người đó có hợp với bạn không.\nMuốn luận đầy đủ, hãy dùng phần hợp duyên Tứ Trụ ở cuối trang.",
    check: {
      button: "Kiểm tra bằng ngày sinh của người ấy",
      title: "Người này thuộc nét nào?",
      body: "Nhập ngày sinh và chúng tôi sẽ cho biết người đó thuộc kiểu nào trong mười kiểu ở trên. Không tính điểm hợp duyên.",
      submit: "Kiểm tra",
      checking: "Đang kiểm tra…",
      rank: "hạng {rank} của bạn",
      heading: "Người này thuộc kiểu {name}",
      caution:
        "Chỗ này chỉ đọc ngày sinh. **Nếu người ấy sinh vào quãng nửa đêm** thì ngày có thể rơi về một trong hai bên, và ngày sinh trong tháng 1 hay đầu tháng 2 thuộc con giáp của năm trước.",
      close: "Đóng",
      another: "Kiểm tra người khác",
      error: "Vui lòng kiểm tra lại ngày — ngày này không có thật hoặc nằm ngoài phạm vi.",
    },
    nextTitle: "Đã có ai trong lòng?",
    nextBody:
      "Nhập ngày sinh của cả hai, bạn sẽ có tỉ lệ hợp thật sự với mọi mục ở trên cộng lại.",
    nextButton: "Xem hợp duyên Tứ Trụ",
    recalculate: "Xem lại",
    copyLink: "Sao chép liên kết kết quả",
    copied: "Đã sao chép",
    missingInput: "Không đọc được kết quả. Vui lòng bắt đầu lại từ đầu.",
    partialTime:
      "Không có giờ sinh nên trụ giờ đã được bỏ ra. Thêm giờ sinh sẽ cho biết rõ hơn bạn đang thiếu gì.",
    disclaimer:
      "Một tài liệu tham khảo theo góc nhìn Tứ Trụ truyền thống. Nó không bảo bạn phải tìm đến hay tránh xa bất kỳ ai.",
  },
  result: {
    title: "Kết quả hợp duyên",
    totalLabel: "Tỉ lệ hợp",
    breakdown: "Điểm theo từng mục",
    recalculate: "Tính lại từ đầu",
    copyLink: "Sao chép liên kết kết quả",
    copied: "Đã sao chép",
    missingInput: "Không đọc được kết quả này. Vui lòng nhập lại ngày sinh.",
    partialTime:
      "Không có giờ sinh nên trụ giờ đã được bỏ ra. Thêm giờ sinh sẽ cho kết quả chính xác hơn.",
    engineVersion: "Tính theo",
    disclaimer:
      "Đây là một luận giải Tứ Trụ truyền thống, chỉ mang tính tham khảo. Nó không phải dự đoán khoa học hay một phán quyết về bất kỳ mối quan hệ nào.",
  },
  ads: { label: "Quảng cáo" },
  analyzing: {
    title: "Đang đối chiếu lá số của hai người",
    quotes: [
      "Người hợp duyên không hẳn là gặp, mà là nhận ra.",
      "Một cặp hợp nhau không phải là cặp không bao giờ cãi — mà là cặp cãi xong vẫn quay lại với nhau.",
      "Tứ Trụ không phải một đáp án cố định. Nó là một thứ ngôn ngữ để hiểu nhau.",
      "Có những cặp dễ chịu vì giống nhau; có những cặp dạy được nhau vì khác nhau.",
      "Những mối quan hệ bền thường là nơi không điều gì bị để im quá lâu.",
      "Nếu cách của người ấy thấy lạ, nghĩa là họ đang có thứ mà bạn không có.",
      "Hợp duyên một nửa là bẩm sinh, một nửa là do mình dựng nên.",
      "Quan hệ bền khi việc tựa vào và việc trao đi luân phiên nhau.",
      "Quan trọng hơn điểm số là cách bạn đọc điểm số ấy.",
      "Nếu hai người đang ở hai mùa khác nhau, hãy kể cho nhau nghe mùa của mình ra sao.",
    ],
    watching: "Đang xem quảng cáo",
    remaining: "Kết quả mở sau {seconds} giây",
  },
  report: {
    title: "Giữ lại bản luận này dưới dạng PDF",
    body:
      "Chúng tôi làm kết quả này thành tệp PDF 7 trang. **Bốn trang trong đó không có trên màn hình** — khí đi theo chiều nào, nhìn kỹ hơn vào lá số từng người, nơi bốn trụ gặp nhau, và cách tính.",
    buyButton: "Thanh toán {price} và tải về",
    preparing: "Chưa mở bán",
    ordering: "Đang tạo đơn hàng…",
    paying: "Đang xử lý thanh toán…",
    issuing: "Đang chuẩn bị bản luận…",
    done: "Đã tải về. Dùng nút bên dưới để tải lại.",
    failed: "Thanh toán hoặc việc tải về không thành công. Vui lòng thử lại sau giây lát.",
    retry: "Tải lại",
    contents: [
      "Trang 1 — tỉ lệ hợp, chỗ mạnh của cặp đôi và điều cần lưu ý",
      "Trang 2 — hình thái của mối quan hệ, thập thần và điểm theo từng mục",
      "Trang 3 — lá số của cả hai và thế lực ngũ hành",
          "Trang 4 — khí đi theo chiều nào và nơi bốn trụ gặp nhau",
      "Trang 5 — nhìn kỹ hơn vào lá số từng người (điều mùa tiết nâng đỡ)",
      "Trang 6 — mỗi trụ của người ấy là gì với ta",
      "Trang 7 — những lá số này được tính như thế nào",
    ],
    consentLabel:
      "Tôi hiểu đây là nội dung số được cung cấp ngay khi thanh toán, và **một khi việc tải về hoàn tất thì quyền rút lại đơn vì đơn thuần đổi ý sẽ bị hạn chế**.",
    consentRequired: "Vui lòng xác nhận điều khoản rút lại đơn trước khi thanh toán.",
    productInfoTitle: "Thông tin sản phẩm",
    productInfo: [
      ["Nhà cung cấp", "{brand}"],
      ["Hình thức", "Một tệp PDF (7 trang), tải về ngay trên màn hình sau khi thanh toán."],
      ["Yêu cầu", "Bất kỳ thiết bị nào mở được PDF. Không cần cài đặt hay tài khoản."],
      ["Thời hạn sử dụng", "Không giới hạn. Tệp đã tải về là của bạn."],
      ["Tải lại", "Tối đa năm lần trên cùng một đơn hàng. Chúng tôi không giữ bản sao, nên khi bạn rời màn hình kết quả thì không thể tạo lại."],
      ["Rút lại đơn", "Hoàn tiền toàn bộ trước khi việc tải về bắt đầu. Sau khi tải xong, việc rút lại đơn vì đổi ý bị hạn chế (Điều 17 khoản 2, Luật Thương mại điện tử Hàn Quốc)."],
      ["Chi phí đổi trả", "Không có — là nội dung số, không có gì để giao."],
    ],
    refundContact:
      "Về hoàn tiền hay thắc mắc, xin liên hệ trung tâm hỗ trợ khách hàng hoặc email bên dưới. Nếu tài liệu không được tạo ra, hoặc số tiền bị trừ khác với đơn hàng, chúng tôi hoàn tiền toàn bộ.",
    pdfLanguageNotice:
      "Tệp PDF được tạo bằng cùng ngôn ngữ với màn hình này.",
  },
  affinityReport: {
    title: "Giữ lại nét duyên của bạn dưới dạng PDF",
    body: "Chúng tôi chuyển bản luận này thành một tệp PDF bốn trang. Trong đó có **bảng xếp hạng đầy đủ mà màn hình không hiện** — màn hình cho bạn ba kiểu đứng đầu, còn PDF chứa đủ mười kiểu và mười hai con giáp.",
    buyButton: "Thanh toán {price} và tải về",
    preparing: "Đang chuẩn bị",
    ordering: "Đang tạo đơn hàng…",
    paying: "Đang xử lý thanh toán…",
    issuing: "Đang dựng bản luận…",
    done: "Đã tải về. Dùng nút bên dưới để lấy lại.",
    failed: "Thanh toán hoặc việc tải về chưa xong. Vui lòng thử lại sau ít phút.",
    retry: "Tải lại",
    contents: [
      "Trang 1 — Chỗ đứng của bạn và thứ bạn đang thiếu",
      "Trang 2 — Ba nét hợp với bạn, kèm dấu hiệu hành vi",
      "Trang 3 — Nét cần thời gian, cùng bảng xếp hạng đầy đủ mười nhật can",
      "Trang 4 — Bảng xếp hạng đầy đủ mười hai con giáp, kèm năm sinh",
    ],
    consentLabel:
      "Đây là nội dung số được cung cấp ngay sau khi thanh toán. Tôi hiểu rằng **một khi việc tải về hoàn tất, quyền rút lại đơn vì đổi ý sẽ bị hạn chế.**",
    consentRequired: "Vui lòng đồng ý với điều khoản rút lại đơn trước khi thanh toán.",
    productInfoTitle: "Thông tin sản phẩm",
    productInfo: [
      ["Nhà cung cấp", "{brand}"],
      ["Hình thức", "Một tệp PDF (4 trang), tải về ngay trên màn hình này sau khi thanh toán."],
      ["Yêu cầu", "Bất kỳ thiết bị nào mở được PDF. Không cài đặt, không tài khoản."],
      ["Thời gian cung cấp", "Không giới hạn thời gian. Tệp đã tải về là của bạn."],
      ["Tải lại", "Tối đa 5 lần trên cùng một đơn hàng. Chúng tôi không lưu tệp, nên khi bạn rời màn hình này thì không dựng lại được."],
      ["Rút lại đơn", "Hoàn tiền toàn bộ trước khi việc tải về hoàn tất. Sau khi hoàn tất, việc rút lại đơn vì đổi ý bị hạn chế."],
      ["Chi phí đổi trả", "Không có. Không có gì để giao."],
    ],
    refundContact:
      "Về hoàn tiền hay thắc mắc, xin liên hệ bộ phận hỗ trợ hoặc email bên dưới. Nếu tài liệu chưa từng được tạo ra, hoặc số tiền bị trừ khác với đơn hàng, chúng tôi hoàn tiền toàn bộ.",
    pdfLanguageNotice:
      "Tệp PDF được tạo bằng cùng ngôn ngữ với màn hình này.",
  },
  reportDetail: {
    supplyTitle: "Khí đi theo chiều nào",
    supplyHint: "Điểm Ngũ hành là trung bình của hai chiều. Trung bình che mất ai đang bù cho ai. Ở đây chúng tôi tách ra — có những cặp chỉ một bên được bù đầy.",
    supplyReceiveLabel: "Mức {name} được bù",
    needsLabel: "Điều đang cần lúc này",
    bondTitle: "Mối kết giữa hai Nhật chủ",
    depthTitle: "Nhìn kỹ hơn vào lá số từng người",
    vitalityTitle: "Điều mùa tiết nâng đỡ",
    vitalityHint: "Các thanh cho biết mỗi hành có bao nhiêu. Bảng này cho biết tháng sinh có nâng đỡ hành đó không. Cùng một lượng, ở Vượng khác với ở Tử.",
    vitalities: {
      WANG: { name: "Vượng (旺)", body: "lúc mạnh nhất" },
      SANG: { name: "Tướng (相)", body: "kế tiếp đang lên" },
      HYU: { name: "Hưu (休)", body: "nghỉ sau lượt của mình" },
      SU: { name: "Tù (囚)", body: "bị giam, khó chuyển" },
      SA: { name: "Tử (死)", body: "lúc yếu nhất" },
    },
    seasonBoostTitle: "Tháng sinh nâng lên bao nhiêu",
    rawLabel: "Trước tháng lệnh",
    strengthLabel: "Sau tháng lệnh",
    earthSeasonNote: "Sinh vào tháng chuyển mùa (辰未戌丑) nên Thổ cũng được xem là vượng.",
    allyRatioLabel: "Tỉ lệ phe của Nhật chủ",
    allyRatioHint: "Ấn cộng Tỉ kiếp, so với tổng. Trên 45% là thân vượng, dưới 35% là thân nhược. Chúng tôi in con số để quý vị thấy ranh giới rơi ở đâu.",
    pillarsTitle: "Nơi bốn trụ gặp nhau",
    pillarsHint: "Chỉ chi Ngày đi vào tỉ lệ hợp duyên — đó là chỗ của bạn đời. Ba trụ còn lại cũng đọc được bằng bảng ấy nên chúng tôi đưa vào.",
    branchRelations: {
      SAMHAP: "Tam hợp",
      BANHAP: "Bán hợp",
      YUKHAP: "Lục hợp",
      SAME: "Cùng chi",
      NEUTRAL: "Không quan hệ",
      WONJIN: "Oán hận ngầm",
      CHUNG: "Xung",
    },
    pillarColumn: "Trụ",
    relationColumn: "Quan hệ",
    relationScoreColumn: "Điểm",
    tenGodColumn: "Thập thần",
    stemGodsTitle: "Mỗi trụ của người ấy là gì với ta",
    stemGodsHint: "Tỉ lệ hợp duyên chỉ so Nhật chủ. Cùng quy tắc ấy định thập thần cho các trụ còn lại — thấy được phần nào của người ấy là gì với quý vị.",
    seesLabel: "Nhìn từ {from}",
    notScoredNote: "Điểm trong bảng này không tính vào tỉ lệ hợp duyên. Chúng tôi in ra để quý vị so mức mạnh yếu.",
    appendixTitle: "Lá số này được tính như thế này",
    timeCorrectionLabel: "Giờ sinh",
    timeCorrectionApplied: "Đã hiệu chỉnh về giờ mặt trời thật và đọc là {time}.",
    timeCorrectionNone: "Không có giờ sinh nên trụ Giờ được bỏ ra.",
    timeCorrectionDateShift: "Hiệu chỉnh làm ngày dời sang {date}; trụ Ngày lấy theo ngày đó.",
    calendarLabel: "Ngày dùng để lập lá số",
    solarLabel: "Dương lịch",
    lunarLabel: "Âm lịch",
    lunarUnavailable: "Bảng vạn niên lịch thiếu ngày này nên không in được ngày âm lịch.",
  },
  footer: {
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
    refund: "Hoàn tiền",
    pricing: "Bảng giá",
    legalEntity: "Tên công ty",
    representative: "Đại diện",
    businessNumber: "Đăng ký KD",
    mailOrderNumber: "Bán hàng online",
    address: "Địa chỉ",
    customerCenter: "Hỗ trợ khách hàng",
    email: "Email",
    privacyOfficer: "Phụ trách dữ liệu",
    hostingProvider: "Hosting",
    providedBy: "Cung cấp bởi",
    effective: "Ngày hiệu lực",
    backHome: "Về trang chủ",
  },
  bands: {
    EXCELLENT: "Cặp đôi rất hợp nhau",
    GOOD: "Cặp đôi hợp nhau",
    FAIR: "Cặp đôi tạm ổn",
    CHALLENGING: "Cặp đôi cần cố gắng",
  },
  engines: {
    saju: {
      name: "Hợp duyên Tứ Trụ",
      description:
        "Xem chung ngũ hành nhật can, mức bù trừ ngũ hành và quan hệ nhật chi.",
    },
    zodiac: {
      name: "Hợp duyên con giáp",
      description: "Xem quan hệ giữa hai chi của năm sinh.",
    },
  },
  factors: {
    dayMasterRelation: "Ngũ hành nhật can",
    spouseStar: "Sao phối ngẫu",
    elementSupply: "Bù trừ ngũ hành",
    dayBranchRelation: "Nhật chi",
    branchRelation: "Con giáp",
  },
  notes: {
    "strength.dayMasterRelation":
      "Tính khí của hai người nằm ở thế phục vụ cho nhau. Ngay cả khi cách của người kia thấy lạ, nó vẫn thường bù vào đúng chỗ bạn thiếu.",
    "strength.spouseStar":
      "Mỗi người đều mang khí mà truyền thống đọc là vị trí phối ngẫu. Nếu ngay từ đầu mọi thứ đã dễ chịu mà không rõ vì sao, phần nhiều là do chỗ này.",
    "strength.elementSupply":
      "Mỗi người đang giữ đúng thứ mà người kia cần lúc này. Những việc một mình khó chuyển thường nhẹ đi khi có nhau.",
    "strength.dayBranchRelation":
      "Nhật chi theo truyền thống được đọc là chỗ ngồi của người bạn đời. Hai chỗ ấy hợp nhau, nên thời gian ở cạnh nhau thường dễ chịu.",
    "strength.branchRelation":
      "Hai con giáp hợp nhau — kiểu cặp đôi nhìn từ ngoài vào thấy tự nhiên và gặp lần đầu đã thấy thuận.",
    "caution.dayMasterRelation":
      "Đây là chỗ tính khí cấn nhau. Trước cùng một việc, tốc độ và cách làm của hai người khác nhau, rất dễ hiểu nhầm là người kia cố ý. Hãy thống nhất cách làm trước khi thống nhất kết luận.",
    "caution.spouseStar":
      "Không ai trong hai người mang khí mà truyền thống gọi là vị trí phối ngẫu của người kia. Sức hút có thể không đến ngay; đây là cặp bồi đắp dần theo thời gian.",
    "caution.elementSupply":
      "Thứ mỗi người cần thì ở người kia cũng mỏng. Việc cả hai giỏi thì rất giỏi — nhưng những chỗ cả hai đều thiếu vẫn cứ trống. Tốt hơn là bù những chỗ ấy từ bên ngoài mối quan hệ.",
    "caution.dayBranchRelation":
      "Dễ có va chạm ở chỗ chung sống. Thường lộ ra ở những thói quen nhỏ hơn là chuyện lớn, nên định trước vài quy ước sẽ đỡ đi nhiều.",
    "caution.branchRelation":
      "Hai con giáp nằm đối nhau. Cách nhìn khác nhau nên có cọ xát — và cũng vì thế mà có nhiều điều học được từ nhau.",

    "spouseStar.MUTUAL":
      "Mỗi người đều đứng đúng vào vị trí phối ngẫu của người kia — cặp mà Tứ Trụ truyền thống đánh giá cao nhất.",
    "spouseStar.STRONG":
      "Một người đứng đúng vào vị trí phối ngẫu, người kia thì gần với vị trí ấy. Mức tình cảm hai bên dành cho nhau có thể lệch nhau đôi chút.",
    "spouseStar.PARTIAL":
      "Chỉ một người đứng vào vị trí phối ngẫu của người kia. Sức hút ban đầu thường nghiêng về một phía, nên đừng để lời cần nói bị hoãn lại.",
    "spouseStar.SLIGHT":
      "Một người đứng kề bên vị trí phối ngẫu. Điều này bồi đắp qua thời gian ở cạnh nhau hơn là đến ngay như một sức hút.",
    "spouseStar.NONE":
      "Không ai giữ cái mà truyền thống gọi là vị trí phối ngẫu. Cặp này được dựng nên bằng việc sống bên nhau hơn là bằng sức hút.",
    "dayMaster.CLASH_BONDED":
      "{elementA} và {elementB} chế ngự lẫn nhau, nhưng âm dương thì ngược nhau. Truyền thống đọc đây là cặp phối ngẫu — cái căng thường chuyển thành gắn bó.",
    "dayMaster.CLASH_HARSH":
      "{elementA} và {elementB} chế ngự lẫn nhau với âm dương giống nhau. Lực kích thích mạnh, và gánh nặng mỗi bên đặt lên nhau cũng mạnh như vậy.",
    "dayMaster.FLOW_GUARDED":
      "Một bên trao khí ra và bên kia giữ lấy. Xung động sắc hơn được người kia mài dịu — cái mà truyền thống gọi là cặp được giữ gìn.",
    "dayMaster.FLOW_BLOCKED":
      "Một bên trao khí ra còn bên kia lại rút nó đi. Ở đây bên cho dễ đuối, nên nói rõ ra mỗi người đang cho và nhận điều gì sẽ có ích.",
    "dayMaster.PEER_EVEN":
      "Cả hai đều mang khí {elementA} với âm dương giống nhau. Vì thế mọi việc ngang bằng và dễ chịu, nhưng không ai đẩy được ai đi tới.",
    "dayMaster.PEER_RIVAL":
      "Cả hai đều mang khí {elementA} với âm dương ngược nhau. Hút nhau rất nhanh, nhưng lại giành nhau cùng một chỗ.",
    "supply.AMPLE":
      "Mỗi người đang giữ dư dả thứ mà người kia cần. Người thứ nhất cần {needA} và người thứ hai cần {needB} — và người bên cạnh cấp đúng thứ đó.",
    "supply.ENOUGH":
      "Mỗi người giữ được một phần kha khá thứ mà người kia cần: người thứ nhất cần {needA}, người thứ hai cần {needB}.",
    "supply.THIN":
      "Thứ mỗi người cần — người thứ nhất cần {needA}, người thứ hai cần {needB} — lại mỏng ở phía người kia.",
    "supply.SCARCE":
      "Không ai cấp được cho người kia thứ họ cần: người thứ nhất cần {needA}, người thứ hai cần {needB}, mà cả hai chỗ ấy đều trống. Tốt hơn là bù phần đó từ bên ngoài mối quan hệ.",
    "dayBranch.SAMHAP":
      "Hai nhật chi hợp thành tam hợp — cặp mạnh nhất ở vị trí phối ngẫu.",
    "dayBranch.BANHAP":
      "Hai nhật chi hợp thành bán hợp quanh chữ trung tâm của một tam hợp. Một cặp rất xứng ở vị trí phối ngẫu.",
    "dayBranch.YUKHAP": "Hai nhật chi hợp thành lục hợp. Hai người hút lấy nhau.",
    "dayBranch.SAME":
      "Hai nhật chi giống hệt nhau. Vì thế mọi việc dễ chịu, nhưng ít điều mới mẻ.",
    "dayBranch.NEUTRAL": "Hai nhật chi không có quan hệ gì đặc biệt.",
    "dayBranch.WONJIN":
      "Hai nhật chi ở thế oán chân, tức ngấm ngầm bất hòa. Ít khi bùng ra ngoài, nhưng những giận hờn khó gọi tên lại dễ chất lại — nói ngay lúc đó tốt hơn là cho qua.",
    "dayBranch.CHUNG":
      "Hai nhật chi xung nhau. Vị trí này dễ có va chạm, nên cách nói với nhau rất quan trọng.",
    "zodiac.SAMHAP":
      "Tuổi {animalA} và tuổi {animalB} hợp thành tam hợp — cặp con giáp tốt nhất.",
    "zodiac.BANHAP":
      "Tuổi {animalA} và tuổi {animalB} hợp thành bán hợp quanh chữ trung tâm của một tam hợp, nên hai bên hợp nhau.",
    "zodiac.YUKHAP": "Tuổi {animalA} và tuổi {animalB} hợp thành lục hợp. Hai bên rất hợp nhau.",
    "zodiac.SAME": "Cả hai cùng tuổi {animalA}, nên tính khí vọng lại giống nhau.",
    "zodiac.NEUTRAL": "Tuổi {animalA} và tuổi {animalB} không có quan hệ gì đặc biệt.",
    "zodiac.WONJIN":
      "Tuổi {animalA} và tuổi {animalB} ở thế oán chân — hiếm khi cãi nhau ra mặt, nhưng cái lệch pha ngấm ngầm thì thường kéo dài.",
    "zodiac.CHUNG":
      "Tuổi {animalA} và tuổi {animalB} xung nhau. Hai bên khác nhau rõ rệt, cũng có nghĩa là có nhiều điều để học.",
  },
  animals: {
    rat: "Tý",
    ox: "Sửu",
    tiger: "Dần",
    rabbit: "Mão",
    dragon: "Thìn",
    snake: "Tỵ",
    horse: "Ngọ",
    goat: "Mùi",
    monkey: "Thân",
    rooster: "Dậu",
    dog: "Tuất",
    pig: "Hợi",
  },
  elements: {
    WOOD: "Mộc",
    FIRE: "Hỏa",
    EARTH: "Thổ",
    METAL: "Kim",
    WATER: "Thủy",
  },
};
