// 사주링크 화면 사전의 Vietnamese (Tiếng Việt)(vi) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const vi: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Bốn Trụ của bạn, được đọc từ ngày sinh",
  "currentLanguage": "Ngôn ngữ hiện tại",
  "moreLanguages": "Thêm",
  "closeLanguages": "Đóng",
  "landing": {
    "title": "Tám ký tự\nbạn được sinh ra",
    "subtitle": "Tất cả những gì bạn cần là ngày sinh.\nChúng tôi xây dựng biểu đồ Saju (Bốn Trụ) của bạn, cân nhắc năm yếu tố và đọc sức mạnh của ngày chủ.",
    "cta": "Xem Saju của tôi",
    "howTitle": "Cách thức hoạt động",
    "steps": [
      "Nhập ngày sinh của bạn. Giờ sinh là tùy chọn.",
      "Năm, tháng, ngày và giờ sinh của bạn trở thành tám ký tự — biểu đồ natal của bạn. Từ đó, chúng tôi đọc trọng số của từng yếu tố và sức mạnh của ngày chủ.",
      "Trụ của hôm nay được đặt lên biểu đồ đó để đưa ra vận mệnh của bạn hôm nay."
    ],
    "privacyTitle": "Không có gì bạn nhập được lưu trữ",
    "privacyBody": "Ngày sinh chỉ được sử dụng trong khi kết quả đang được tính toán và không bao giờ được ghi lại. Không cần tài khoản. Không có gì trong liên kết kết quả được gửi đến máy chủ.",
    "disclaimer": "Đây là một buổi đọc Saju truyền thống được cung cấp để tham khảo. Nó không phải là một dự đoán khoa học hay một phán quyết về tương lai của bất kỳ ai."
  },
  "form": {
    "title": "Ngày sinh của bạn",
    "description": "Biết thời gian sinh sẽ làm cho việc đọc chính xác hơn, nhưng không bắt buộc.",
    "meLegend": "Về bạn",
    "nickname": "Gọi họ là gì",
    "nicknamePlaceholder": "ví dụ: Tôi",
    "nicknameHint": "Chỉ hiển thị trên màn hình kết quả. Nó không được sử dụng trong tính toán.",
    "gender": "Giới tính",
    "male": "Nam",
    "female": "Nữ",
    "genderUnspecified": "Không muốn nói",
    "genderHint": "Saju truyền thống đọc các vị trí của vợ/chồng và con cái khác nhau theo giới tính. Nếu bạn bỏ qua điều này, các yếu tố đó sẽ không được tính vào.",
    "birthplace": "Nơi sinh",
    "birthplaceHint": "Cột giờ được tính từ thời gian mặt trời thực tế tại nơi sinh của bạn. Nếu nơi sinh của bạn không có trong danh sách, hãy chọn thành phố gần nhất.\nTrong lãnh thổ Hàn Quốc, sự khác biệt giữa các thành phố là dưới hai phút. Thời gian tiết kiệm ánh sáng và các thay đổi múi giờ lịch sử cũng được phản ánh.",
    "calendar": "Lịch",
    "solar": "Dương lịch",
    "lunar": "Âm lịch",
    "leapMonth": "Tháng nhuận",
    "birthDate": "Ngày sinh",
    "year": "Năm",
    "month": "Tháng",
    "day": "Ngày",
    "birthTime": "Thời gian sinh",
    "unknownTime": "Tôi không biết thời gian",
    "hour": "Giờ",
    "minute": "Phút",
    "submit": "Xem quảng cáo và xem Saju của tôi",
    "submitNoAd": "Xem Saju của tôi",
    "submitting": "Đang tính toán…",
    "errorInvalidDate": "Vui lòng kiểm tra ngày sinh. Đối với ngày âm lịch, cũng kiểm tra xem nó có rơi vào tháng nhuận không.",
    "errorGeneric": "Tính toán thất bại. Vui lòng thử lại sau một lúc."
  },
  "reading": {
    "chartTitle": "Bảng sao của bạn",
    "chartHint": "Saju thể hiện năm, tháng, ngày và giờ sinh dưới dạng hai ký tự mỗi cái. Mọi thứ bên dưới đều được đọc từ tám ký tự này.",
    "pillarYear": "Năm",
    "pillarMonth": "Tháng",
    "pillarDay": "Ngày",
    "pillarHour": "Giờ",
    "pillarHourUnknown": "Không có thời gian sinh",
    "dayMasterLabel": "Ngày chủ",
    "animalLabel": "Cung hoàng đạo",
    "seasonLabel": "Mùa sinh",
    "elementsTitle": "Sức mạnh nguyên tố",
    "strongest": "Mạnh nhất",
    "scarcest": "Yếu nhất",
    "strengthTitle": "Những gì bạn được sinh ra với",
    "cautionTitle": "Những điều cần chú ý",
    "bodyStrengthTitle": "Sức mạnh của ngày chủ",
    "favorableLabel": "Những gì bạn cần bây giờ"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Ngày chủ mạnh",
      "body": "Các yếu tố hỗ trợ cho ngày chủ của bạn rất đầy đủ. Điều đó mang lại cho bạn động lực riêng, nhưng cũng dễ dàng nghiêng về một bên — bạn có xu hướng cảm thấy thoải mái khi có điều gì đó làm giảm bớt sự thừa thãi."
    },
    "BALANCED": {
      "name": "Ngày chủ cân bằng",
      "body": "Những gì hỗ trợ cho ngày chủ của bạn và những gì rút ra từ nó gần như bằng nhau. Quá gần để có thể xác định theo cách nào, vì vậy ở đây chúng ta đọc bất cứ điều gì mỏng nhất như là điều bạn cần."
    },
    "WEAK": {
      "name": "Ngày chủ yếu",
      "body": "Các yếu tố hỗ trợ cho ngày chủ của bạn khá mỏng. Bạn vay mượn sức mạnh từ xung quanh rất tốt, nhưng dễ mệt mỏi khi phải chịu đựng một mình — bạn trở nên mạnh mẽ hơn khi có điều gì đó hỗ trợ bạn."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Bạn đồng hành (比肩)",
      "body": "Năng lượng đứng bên cạnh bạn. Dày dạn, nó mang lại sức mạnh để bạn đứng vững và chiếm lĩnh phần của mình trước."
    },
    "GEOPJAE": {
      "name": "Đối thủ (劫財)",
      "body": "Năng lượng giống bạn nhưng hoạt động khác. Nó cung cấp sức mạnh để thúc đẩy, nhưng nếu quá nhiều, những gì bạn có thể dễ dàng bị phân tán."
    },
    "SIKSIN": {
      "name": "Biểu hiện (食神)",
      "body": "Năng lượng kéo những gì bên trong bạn ra thế giới. Biểu hiện và niềm vui đơn giản của cuộc sống đến từ đây; nơi nó ngự trị, có sự thoải mái."
    },
    "SANGGWAN": {
      "name": "Kẻ phá hoại (傷官)",
      "body": "Năng lượng làm rối loạn một khuôn khổ cố định. Nó ban tặng tài năng và sự sắc bén, nhưng nếu quá nhiều, nó va chạm với quy tắc và thứ bậc."
    },
    "PYEONJAE": {
      "name": "Tài lộc bất ngờ (偏財)",
      "body": "Năng lượng tài sản rộng lớn. Năng động và thoải mái với những gì nó có, nó mang lại cơ hội từ những nơi không ngờ tới."
    },
    "JEONGJAE": {
      "name": "Tài sản ổn định (正財)",
      "body": "Năng lượng tài sản ổn định, được tích lũy từng chút một. Saju truyền thống cũng đọc nó như vị trí của người phối ngẫu cho một người đàn ông."
    },
    "PYEONGWAN": {
      "name": "Thách thức (偏官)",
      "body": "Năng lượng giữ bạn trong trạng thái căng thẳng và thẳng đứng. Bạn trở nên mạnh mẽ dưới áp lực, nhưng nếu quá nhiều, bạn luôn cảm thấy bị đuổi theo."
    },
    "JEONGGWAN": {
      "name": "Quyền lực (正官)",
      "body": "Năng lượng của trật tự giúp bạn thẳng hàng. Nó giữ gìn tên tuổi và vị trí của bạn; Saju truyền thống cũng đọc nó như vị trí của người phối ngẫu cho một người phụ nữ."
    },
    "PYEONIN": {
      "name": "Hỗ trợ phi truyền thống (偏印)",
      "body": "Năng lượng hỗ trợ bạn bằng một con đường khác thường. Nó ban tặng sức mạnh để đào sâu, nhưng nếu quá nhiều, suy nghĩ chạy trước tay."
    },
    "JEONGIN": {
      "name": "Nuôi dưỡng (正印)",
      "body": "Năng lượng ôm ấp và nuôi dưỡng bạn. Nó mang lại sự học hỏi và một nơi để dựa vào; nếu quá nhiều, việc tự lập sẽ đến muộn."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Gỗ Dương (甲)",
      "trait": "Một cái cây cao lớn mọc thẳng. Khi đã xác định hướng đi thì không dao động, và thà chịu đựng hơn là uốn cong."
    },
    "乙": {
      "name": "Gỗ Âm (乙)",
      "trait": "Một dây leo — cỏ linh hoạt. Nó uốn cong theo hoàn cảnh để tiếp tục di chuyển, và không dễ bị gãy."
    },
    "丙": {
      "name": "Lửa Dương (丙)",
      "trait": "Mặt trời giữa trưa. Cảm xúc thể hiện rõ ràng, không gian trở nên sáng sủa, và việc tiến lên diễn ra một cách tự nhiên."
    },
    "丁": {
      "name": "Lửa Âm (丁)",
      "trait": "Ánh nến. Nó cháy âm thầm và lâu, và sưởi ấm những người gần gũi trước tiên."
    },
    "戊": {
      "name": "Đất Dương (戊)",
      "trait": "Đồng cỏ rộng và núi. Khó bị rung chuyển và dễ để dựa vào, mặc dù chậm thay đổi quyết định một khi đã đưa ra."
    },
    "己": {
      "name": "Đất Âm (己)",
      "trait": "Đất ruộng. Nó tiếp nhận mọi thứ đến và nuôi dưỡng chúng, chăm sóc hơn là phô bày."
    },
    "庚": {
      "name": "Kim Dương (庚)",
      "trait": "Sắt chưa chế tác. Quyết đoán và rõ ràng, không kiên nhẫn với những điều còn dang dở."
    },
    "辛": {
      "name": "Kim Âm (辛)",
      "trait": "Một viên đá quý đã được cắt. Gu thẩm mỹ tinh tế và tiêu chuẩn cao; sự lôi thôi khó có thể được chấp nhận."
    },
    "壬": {
      "name": "Nước Dương (壬)",
      "trait": "Sông và biển. Tầm nhìn rộng, có khả năng đọc được cách mọi thứ đang chảy."
    },
    "癸": {
      "name": "Nước Âm (癸)",
      "trait": "Sương và mưa. Nó thấm vào một cách yên lặng và đọc được tâm trạng trước khi có lời nói."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Nói những gì họ nghĩ ngay cả khi gặp lần đầu.",
      "Hiếm khi thay đổi kế hoạch hoặc lời hứa một khi đã được đặt ra.",
      "Từ chối thẳng thừng, có thể nghe có vẻ thô lỗ."
    ],
    "乙": [
      "Tránh đối đầu và chọn một con đường khác.",
      "Có vẻ mềm mại, nhưng cuối cùng vẫn đến nơi họ muốn.",
      "Đọc không khí trước khi tham gia vào nhóm."
    ],
    "丙": [
      "Nói trước với những người họ vừa gặp.",
      "Những gì họ thích và không thích thể hiện rõ trên khuôn mặt.",
      "Tự nhiên đứng ở trung tâm của một buổi tụ họp mà không cố gắng."
    ],
    "丁": [
      "Im lặng lúc đầu, nhưng chú ý khi bạn gần gũi.",
      "Thích nói chuyện lâu với một hoặc hai người hơn là với đám đông.",
      "Nhớ một câu nói thoáng qua và mang ra sau đó."
    ],
    "戊": [
      "Nói ít; giọng nói của họ hiếm khi cao lên ngay cả khi mọi việc khẩn cấp.",
      "Người quyết định vào cuối cùng khi người khác trì hoãn quyết định.",
      "Một khi đã nói không, thì sẽ giữ nguyên lâu dài."
    ],
    "己": [
      "Lắng nghe lâu hơn họ nói.",
      "Khó từ chối, nên công việc chất đống lên họ.",
      "Những gì họ âm thầm chăm sóc chỉ lộ ra sau này."
    ],
    "庚": [
      "Quyết định nhanh và nói ngay tại chỗ.",
      "Không làm mềm vấn đề, điều này có thể nghe có vẻ lạnh lùng.",
      "Rõ ràng không yên khi mọi thứ kéo dài."
    ],
    "辛": [
      "Có tiêu chuẩn rõ ràng về quần áo và những thứ họ chọn.",
      "Không thể bỏ qua một công việc làm dở mà không chỉ ra.",
      "Ít khi khen ngợi, nhưng một khi đã công nhận thì rất chắc chắn."
    ],
    "壬": [
      "Dễ dàng hòa nhập với mọi loại người.",
      "Đưa ra những gì sẽ xảy ra sau trước khi nói về những gì đang ở trước mặt họ.",
      "Cảm thấy bực bội khi bị gắn bó với một nơi quá lâu."
    ],
    "癸": [
      "Nói ít nhưng đã đọc đúng tình huống.",
      "Là người đầu tiên nhận ra khi tâm trạng thay đổi.",
      "Giữ kín cuộc sống nội tâm, nên mất thời gian để hiểu họ."
    ]
  },
  "animalTraits": {
    "rat": "Nhanh nhạy và nhanh chóng nắm bắt những điều quan trọng. Là người đầu tiên hành động trong khủng hoảng.",
    "ox": "Có vẻ chậm chạp nhưng nhìn nhận mọi thứ đến cùng. Những gì đã nhận, sẽ không bỏ qua.",
    "tiger": "Không sợ hãi và luôn đi đầu. Không thể để sự bất công trôi qua.",
    "rabbit": "Nhẹ nhàng và nhạy bén. Biết cách đi vòng thay vì va chạm.",
    "dragon": "Có tấm lòng rộng lớn và lý tưởng cao cả. Hiếm khi hài lòng với những điều bình thường.",
    "snake": "Giữ kín suy nghĩ và suy ngẫm sâu sắc. Đánh giá chính xác.",
    "horse": "Sáng sủa và không ngừng nghỉ. Bị giam cầm là điều khó khăn nhất.",
    "goat": "Nồng ấm và chu đáo. Giữ những lời nói khắc nghiệt trong lòng lâu.",
    "monkey": "Khéo léo và nhanh chóng thích nghi. Chán nản với sự lặp lại.",
    "rooster": "Chăm chỉ và tỉ mỉ. Không thể để mọi thứ không đúng chỗ.",
    "dog": "Trung thành đến cùng một khi đã được tin tưởng. Sự phản bội đặc biệt đau đớn.",
    "pig": "Hào phóng và thẳng thắn. Dễ dàng tin tưởng, đôi khi phải trả giá."
  },
  "result": {
    "title": "Bói Saju của bạn",
    "recalculate": "Bắt đầu lại",
    "copyLink": "Sao chép liên kết kết quả",
    "copied": "Đã sao chép",
    "missingInput": "Không thể đọc kết quả này. Vui lòng nhập lại ngày tháng.",
    "partialTime": "Không có thời gian sinh được cung cấp, vì vậy cột giờ đã bị bỏ qua. Thêm vào sẽ làm cho việc bói toán chính xác hơn.",
    "engineVersion": "Tính toán với",
    "disclaimer": "Đây là một bài bói Saju truyền thống được cung cấp để tham khảo. Nó không phải là một dự đoán khoa học hay một phán quyết về tương lai của bạn."
  },
  "today": {
    "menu": "Vận mệnh hôm nay",
    "title": "Vận mệnh hôm nay",
    "pillarLabel": "Cột hôm nay",
    "scoreLabel": "Điểm hôm nay",
    "grades": {
      "DAEGIL": {
        "name": "Rất tốt lành",
        "body": "Năng lượng hôm nay gặp biểu đồ của bạn ở góc tốt nhất. Một ngày tốt để thực hiện những việc bạn đã trì hoãn."
      },
      "GIL": {
        "name": "Tốt lành",
        "body": "Dòng chảy hôm nay thuận lợi với bạn. Những gì bạn thường làm sẽ dễ dàng hơn bình thường."
      },
      "PYEONG": {
        "name": "Bình thường",
        "body": "Không có gì thúc đẩy bạn và cũng không có gì cản trở bạn. Hãy làm như thường lệ và bạn sẽ nhận được những gì bạn thường nhận."
      },
      "JUUI": {
        "name": "Cẩn thận",
        "body": "Một số năng lượng hôm nay đi ngược lại biểu đồ của bạn. Tốt hơn là hoàn thành những việc đã làm hơn là bắt đầu cái mới."
      },
      "JOSIM": {
        "name": "Cẩn trọng",
        "body": "Năng lượng hôm nay đè nén biểu đồ của bạn. Nếu một quyết định có thể chờ đợi, hãy để nó chờ."
      }
    },
    "categories": {
      "wealth": "Tiền bạc",
      "love": "Tình yêu",
      "career": "Công việc",
      "health": "Sức khỏe"
    },
    "luckyTitle": "Giữ những điều này gần bên hôm nay",
    "luckyElement": "Yếu tố",
    "luckyColor": "Màu sắc",
    "luckyDirection": "Hướng",
    "luckyTime": "Giờ",
    "luckyNumber": "Số",
    "luckyColors": {
      "TEAL": "xanh ngọc",
      "GREEN": "xanh lá",
      "RED": "đỏ",
      "ORANGE": "cam",
      "YELLOW": "vàng",
      "OCHRE": "màu đất",
      "WHITE": "trắng",
      "GOLD": "vàng",
      "BLACK": "đen",
      "NAVY": "xanh đậm"
    },
    "luckyDirections": {
      "EAST": "Đông",
      "SOUTH": "Nam",
      "CENTER": "Giữa",
      "WEST": "Tây",
      "NORTH": "Bắc"
    },
    "basisTitle": "Nơi điểm số này đến từ",
    "factors": {
      "TODAY_IS_YONGSIN": "Yếu tố hôm nay là thứ mà biểu đồ của bạn cần",
      "TODAY_GENERATES_YONGSIN": "Yếu tố hôm nay nuôi dưỡng thứ mà biểu đồ của bạn cần",
      "TODAY_IS_GISIN": "Yếu tố hôm nay đẩy mạnh phía đã đầy",
      "TODAY_CONTROLS_YONGSIN": "Yếu tố hôm nay giữ lại thứ mà biểu đồ của bạn cần",
      "TODAY_GENERATES_SELF": "Yếu tố hôm nay hỗ trợ ngày chủ của bạn",
      "TODAY_SAME_ELEMENT": "Yếu tố hôm nay giống như ngày chủ của bạn",
      "SELF_GENERATES_TODAY": "Ngày chủ của bạn chảy ra yếu tố hôm nay",
      "TODAY_CONTROLS_SELF": "Yếu tố hôm nay giữ lại ngày chủ của bạn",
      "SELF_CONTROLS_TODAY": "Ngày chủ của bạn giữ lại yếu tố hôm nay",
      "WEAK_HELPED": "Một ngày chủ yếu yếu được tăng cường hôm nay",
      "STRONG_OVERFED": "Một ngày chủ yếu mạnh trở nên nặng nề hơn hôm nay",
      "STRONG_DRAINED": "Một ngày chủ yếu mạnh được giảm bớt để cân bằng tốt hơn hôm nay",
      "WEAK_BURDENED": "Một ngày chủ yếu yếu được giao thêm gánh nặng hôm nay",
      "BRANCH_SAMHAP": "Nhánh hôm nay tạo thành một tam hợp đầy đủ với biểu đồ của bạn",
      "BRANCH_BANHAP": "Nhánh hôm nay tạo thành một bán hợp với biểu đồ của bạn",
      "BRANCH_YUKHAP": "Nhánh hôm nay tạo thành một lục hợp với biểu đồ của bạn",
      "BRANCH_SAME": "Nhánh hôm nay giống như một nhánh trong biểu đồ của bạn",
      "BRANCH_NEUTRAL": "Nhánh hôm nay không có mối liên hệ đặc biệt với biểu đồ của bạn",
      "BRANCH_WONJIN": "Nhánh hôm nay ngồi trong sự bất hòa yên tĩnh với biểu đồ của bạn",
      "BRANCH_CHUNG": "Nhánh hôm nay va chạm với biểu đồ của bạn"
    },
    "bookmarkHint": "Chúng tôi không lưu ngày sinh của bạn, vì vậy bạn phải nhập lại mỗi lần. **Đánh dấu liên kết kết quả này** và nó sẽ mở vận mệnh của ngày đó mỗi ngày.",
    "disclaimer": "Vận mệnh hôm nay chuyển đổi mối quan hệ giữa cột ngày và biểu đồ của bạn thành một điểm số. Đây là một ghi chú về cách dành thời gian trong ngày, không phải là một lời tiên tri."
  },
  "ads": {
    "label": "Quảng cáo"
  },
  "analyzing": {
    "title": "Xây dựng biểu đồ của bạn",
    "quotes": [
      "Saju không phải là một câu trả lời cố định. Nó là một ngôn ngữ để hiểu bản thân bạn.",
      "Biết những gì bạn đã sinh ra và sống theo nó là hai điều khác nhau.",
      "Vị trí mạnh là vấn đề sử dụng; vị trí mỏng là vấn đề lấp đầy.",
      "Cùng một tám ký tự tạo ra một ngày khác nhau tùy thuộc vào cách bạn đọc chúng.",
      "Tốt hơn là biết cách sử dụng ngày bạn có hơn là chờ đợi một ngày tốt.",
      "Vị trí mà mọi người gọi là điểm yếu thường là nơi mà sự phát triển lớn nhất xảy ra.",
      "Có một số năng lượng mà mùa đẩy tới; có một số bạn phải tự tạo ra.",
      "Điều quan trọng hơn điểm số là cách bạn đọc nó.",
      "Vận may hôm nay là thời tiết của một ngày, không phải khí hậu nơi bạn sống.",
      "Biết Saju của bạn có nghĩa là nhìn thấy bản thân, không phải nhìn về phía trước."
    ],
    "watching": "Đang xem quảng cáo",
    "remaining": "Kết quả của bạn sẽ mở trong {seconds}s"
  },
  "reportDetail": {
    "depthTitle": "Nhìn sâu hơn vào biểu đồ của bạn",
    "vitalityTitle": "Năng lượng mà mùa đẩy tới",
    "vitalityHint": "Các thanh cho biết có bao nhiêu yếu tố; bảng này cho biết tháng sinh có đẩy nó lên hay không. Cùng một lượng nhưng mang sức mạnh khác nhau ở wang và sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "ở mức mạnh nhất"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "tiếp theo về sức mạnh"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "nghỉ ngơi sau khi đã đến lượt"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "bị giữ lại, khó di chuyển"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "ở mức yếu nhất"
      }
    },
    "rawLabel": "Trước mùa",
    "strengthLabel": "Sau mùa",
    "earthSeasonNote": "Sinh ra trong tháng chuyển tiếp (辰未戌丑), nên đất cũng được tính là wang.",
    "allyRatioLabel": "Tỷ lệ đồng minh",
    "allyRatioHint": "Tỷ lệ giữa các sao tài nguyên và bạn đồng hành kết hợp. Trên 45% là mạnh, dưới 35% là yếu. Số này được in ra để bạn thấy gần như quyết định ở đâu.",
    "stemGodsTitle": "Mỗi cột có ý nghĩa gì với bạn",
    "stemGodsHint": "Được đo từ ngày chủ của bạn, mỗi cột còn lại lấy một trong mười tên thần. Những cái nào dày đặc nói lên rất nhiều về tính cách.",
    "pillarColumn": "Cột",
    "tenGodColumn": "Mười thần",
    "meaningColumn": "Nó có nghĩa là gì",
    "yearOutlookTitle": "Triển vọng của năm nay",
    "factorsTitle": "Điều gì tạo ra điểm số hôm nay",
    "factorsHint": "Màn hình chỉ tên các yếu tố; ở đây mỗi yếu tố được in với số điểm mà nó đã thêm hoặc trừ.",
    "deltaColumn": "Điểm",
    "appendixTitle": "Cách biểu đồ này được xây dựng",
    "timeCorrectionLabel": "Thời gian sinh",
    "timeCorrectionApplied": "Đã được chỉnh sửa theo thời gian mặt trời thực và đọc là {time}.",
    "timeCorrectionNone": "Không có thời gian sinh được cung cấp, vì vậy cột giờ đã bị bỏ qua.",
    "timeCorrectionDateShift": "Sự điều chỉnh đã chuyển ngày đến {date}, vì vậy cột ngày hôm đó đã được sử dụng.",
    "calendarLabel": "Ngày biểu đồ được vẽ từ",
    "solarLabel": "Dương lịch",
    "lunarLabel": "Âm lịch",
    "lunarUnavailable": "Ngày này không có trong bảng lịch, vì vậy không có ngày âm lịch nào được hiển thị."
  },
  "report": {
    "title": "Giữ bản đọc cuộc sống của bạn dưới dạng PDF",
    "body": "Chúng tôi biến bản đọc này thành một tệp PDF — biểu đồ sinh của bạn, trọng số của năm yếu tố, sức mạnh của ngày chủ và những gì nó cần bây giờ, cùng với vận may hôm nay, tất cả trên một trang.",
    "buyButton": "Thanh toán {price} và tải xuống",
    "preparing": "Chưa có sẵn",
    "ordering": "Đang tạo đơn hàng của bạn…",
    "paying": "Đang xử lý thanh toán…",
    "issuing": "Đang chuẩn bị báo cáo của bạn…",
    "done": "Đã tải xuống. Sử dụng nút bên dưới để tải xuống lại.",
    "failed": "Thanh toán hoặc tải xuống không thành công. Vui lòng thử lại sau một lúc.",
    "retry": "Tải xuống lại",
    "contents": [
      "Ngày chủ và tính cách — tóm tắt, điểm mạnh và điểm cần lưu ý",
      "Biểu đồ sinh của bạn — tám ký tự của bốn trụ",
      "Trọng số của năm yếu tố, dày nhất và mỏng nhất",
      "Sức mạnh của ngày chủ, và năng lượng mà nó cần bây giờ",
      "Vận may hôm nay và bốn lĩnh vực (tiền bạc, tình yêu, công việc, sức khỏe)"
    ],
    "consentLabel": "Tôi hiểu rằng đây là nội dung kỹ thuật số được cung cấp ngay lập tức khi thanh toán, và rằng **việc rút lui vì lý do thay đổi ý kiến đơn giản bị hạn chế sau khi tải xuống hoàn tất**.",
    "consentRequired": "Vui lòng xác nhận các điều khoản rút lui trước khi thanh toán.",
    "productInfoTitle": "Thông tin sản phẩm",
    "productInfo": [
      [
        "Nhà cung cấp",
        "{brand}"
      ],
      [
        "Định dạng",
        "Một tài liệu PDF (5 trang A4), tải xuống ngay sau khi thanh toán."
      ],
      [
        "Yêu cầu",
        "Bất kỳ thiết bị nào có thể mở PDF. Không cần cài đặt hoặc tài khoản."
      ],
      [
        "Thời hạn sử dụng",
        "Không giới hạn. Bạn giữ tệp bạn tải xuống."
      ],
      [
        "Tải xuống lại",
        "Tối đa năm lần trên cùng một đơn hàng. Chúng tôi không giữ bản sao, vì vậy không thể tạo lại sau khi bạn rời khỏi màn hình kết quả."
      ],
      [
        "Rút lui",
        "Hoàn tiền đầy đủ trước khi tải xuống bắt đầu. Sau khi hoàn tất, việc rút lui vì lý do thay đổi ý kiến bị hạn chế (Điều 17(2), Luật Thương mại điện tử Hàn Quốc)."
      ],
      [
        "Chi phí trả lại",
        "Không có — nội dung kỹ thuật số, không có gì được gửi."
      ]
    ],
    "refundContact": "Để yêu cầu hoàn tiền hoặc có câu hỏi, vui lòng liên hệ với trung tâm khách hàng hoặc email dưới đây. Nếu tài liệu không thể được tạo ra, hoặc số tiền bị tính khác với đơn hàng, chúng tôi sẽ hoàn tiền đầy đủ.",
    "pdfLanguageNotice": "Tài liệu PDF được sản xuất bằng ngôn ngữ giống như màn hình này."
  },
  "premiumReport": {
    "title": "Giữ bản đọc cao cấp của bạn dưới dạng PDF",
    "body": "Mọi thứ trong bản đọc cuộc sống, cộng với **các con số phía sau mà không bao giờ xuất hiện trên màn hình** — tỷ lệ đồng minh quyết định mạnh hay yếu, tháng sinh đã đẩy từng yếu tố lên bao xa, và sự điều chỉnh thời gian mặt trời thực áp dụng cho giờ sinh của bạn.",
    "buyButton": "Thanh toán {price} và tải xuống",
    "preparing": "Chưa có sẵn",
    "ordering": "Đang tạo đơn hàng…",
    "paying": "Đang xử lý thanh toán…",
    "issuing": "Đang chuẩn bị báo cáo của bạn…",
    "done": "Đã tải xuống. Sử dụng nút bên dưới để tải xuống lại.",
    "failed": "Thanh toán hoặc tải xuống không thành công. Vui lòng thử lại sau một lúc.",
    "retry": "Tải xuống lại",
    "contents": [
      "Ngày chủ và tính cách của bạn — tóm tắt, điểm mạnh và điểm cần lưu ý",
      "Bản đồ sinh của bạn — tám ký tự của bốn trụ",
      "Năm yếu tố, sức mạnh của ngày chủ và những gì nó cần",
      "Vận may hôm nay và bốn lĩnh vực (tiền bạc, tình yêu, công việc, sức khỏe)",
      "Mỗi trụ có ý nghĩa gì với bạn — mười thần được đọc từ biểu đồ của bạn",
      "Tình trạng theo mùa và tỷ lệ đồng minh — các con số phía sau phán quyết",
      "Triển vọng của năm nay, các yếu tố chấm điểm hôm nay và sự điều chỉnh thời gian"
    ],
    "consentLabel": "Tôi hiểu rằng đây là nội dung kỹ thuật số được cung cấp ngay lập tức khi thanh toán, và rằng **việc rút lui vì lý do thay đổi ý kiến đơn giản bị hạn chế ngay khi tải xuống hoàn tất**.",
    "consentRequired": "Vui lòng xác nhận các điều khoản rút lui trước khi thanh toán.",
    "productInfoTitle": "Thông tin sản phẩm",
    "productInfo": [
      [
        "Nhà cung cấp",
        "{brand}"
      ],
      [
        "Định dạng",
        "Một tài liệu PDF (7 trang A4), tải xuống ngay sau khi thanh toán."
      ],
      [
        "Yêu cầu",
        "Bất kỳ thiết bị nào mở được PDF. Không cần cài đặt hoặc tài khoản."
      ],
      [
        "Thời hạn sử dụng",
        "Không giới hạn. Bạn giữ tệp mà bạn tải xuống."
      ],
      [
        "Tải xuống lại",
        "Tối đa năm lần trên cùng một đơn hàng. Chúng tôi không giữ bản sao, vì vậy không thể tạo lại một khi bạn rời khỏi màn hình kết quả."
      ],
      [
        "Rút lui",
        "Hoàn tiền đầy đủ trước khi tải xuống bắt đầu. Sau khi hoàn tất, việc rút lui vì thay đổi ý kiến đơn giản bị hạn chế (Điều 17(2), Luật Thương mại điện tử Hàn Quốc)."
      ],
      [
        "Chi phí trả lại",
        "Không có — nội dung kỹ thuật số, không có gì được gửi đi."
      ]
    ],
    "refundContact": "Để yêu cầu hoàn tiền hoặc có thắc mắc, hãy liên hệ với trung tâm khách hàng hoặc email bên dưới. Nếu tài liệu không thể được tạo ra, hoặc số tiền bị tính khác với đơn hàng, chúng tôi sẽ hoàn tiền đầy đủ.",
    "pdfLanguageNotice": "Tài liệu PDF được sản xuất bằng ngôn ngữ giống như màn hình này."
  },
  "fallbackReport": {
    "summary": "Một {dayMaster} ngày sinh ra trong năng lượng của {season}. Trong toàn bộ biểu đồ, {strongest} chạy dày nhất và {scarcest} chạy mỏng nhất. Mọi thứ bên dưới đều theo từ tám ký tự đó — mỗi số và mỗi cột ở đây đều được tính toán, không phải chọn lựa.",
    "personality": "Ngày của bạn là {dayMaster} — năng lượng {element} — và biểu đồ này đọc là {strengthName}. Bên nào chạy dày hơn, cái gì hỗ trợ ngày chủ hay cái gì rút ra từ nó, là điều hình thành tính cách, và trong cuộc sống hàng ngày, nó thể hiện như thế này.",
    "cautions": {
      "STRONG": [
        "Bạn đẩy mạnh đến mức thường chỉ nhận ra sự nghiêng ngả sau khi nó đã xảy ra.",
        "Ngay cả khi có sự giúp đỡ, bạn vẫn xử lý một mình, điều này làm công việc trở nên lớn hơn.",
        "Mọi thứ ổn định khi bạn để lại chỗ cho những gì rút bớt đi."
      ],
      "BALANCED": [
        "Không có gì nghiêng về phía nào, vì vậy quyết định bị hoãn lại chỉ đơn giản là vẫn bị hoãn.",
        "Bạn thích ứng tốt với tình huống, điều này có thể làm mờ ranh giới của chính bạn.",
        "Hướng về phía nào mỏng nhất hiện tại sẽ cho bạn một hướng đi để giữ."
      ],
      "WEAK": [
        "Chịu đựng một mình khiến bạn mệt mỏi sớm hơn bạn mong đợi.",
        "Khi không có gì hỗ trợ bạn, quyết định trượt đi và khoảnh khắc trôi qua.",
        "Giữ những người hỗ trợ gần bên không phải là điểm yếu trong biểu đồ này — đó là phương pháp."
      ]
    },
    "scarcityCaution": "Yếu tố mỏng nhất hiện tại là {scarcest}. Bất cứ điều gì yếu tố đó quản lý là nơi bạn chậm hành động nhất.",
    "elementBalance": "Theo sức mạnh, {strongest} dẫn đầu với {strongestPct}% và {scarcest} theo sau với {scarcestPct}%. Tháng sinh của bạn nằm trong {season}, điều này đẩy yếu tố đó lên một lần nữa — cùng một lượng mang sức mạnh khác nhau tùy thuộc vào việc mùa có hỗ trợ nó hay không. Điều bạn cần bây giờ là {favorable}, và mọi thứ dễ dàng hơn nơi yếu tố đó được lấp đầy.",
    "todayHeadline": "Hôm nay đọc là {grade}",
    "todayMessage": "Hôm nay ghi được {score}, xếp loại {gradeName}. {gradeBody} Cột ngày là {pillar}, và yếu tố lớn nhất trong điểm số đó là “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Một ngày tốt để lấy lại thông điệp hoặc việc dọn dẹp mà bạn đã trì hoãn — mặc dù tốt hơn là không cố gắng hoàn thành tất cả hôm nay.",
      "MID": "Hãy làm như bạn thường làm và bạn sẽ nhận được những gì bạn thường nhận. Thay vì bắt đầu một cái gì đó mới, hãy tiến một bước với một thứ đã có trong tay.",
      "LOW": "Một số điều hôm nay đi ngược lại biểu đồ. Tốt hơn là dành thời gian hoàn thành và kiểm tra hơn là bắt đầu."
    },
    "luckyNote": "Yếu tố may mắn hôm nay là {element}. Dải {colors}, phía {direction}, và những giờ xung quanh {time} là nơi năng lượng đó chạy dày nhất.",
    "domains": {
      "wealth": "Tiền bạc hôm nay ghi được {score}. Giá trị này thay đổi tùy thuộc vào việc năng lượng hôm nay có đến được các sao tài lộc (財星) hay không — những gì bạn xử lý và những gì bạn thu thập.",
      "love": "Tình cảm hôm nay ghi được {score}. Giá trị này được quyết định bởi cách mà nhánh hôm nay gặp nhánh ngày của bạn (日支), cung vợ — sự hòa hợp nâng cao nó, một sự va chạm kéo nó xuống.",
      "career": "Công việc hôm nay ghi được {score}. Giá trị này thay đổi tùy thuộc vào việc năng lượng hôm nay có đến được sao quan (官星) và sao xuất (食傷) hay không — những gì bạn đảm nhận và những gì bạn đưa ra.",
      "health": "Sức khỏe hôm nay ghi được {score}. Giá trị này được quyết định bởi số lượng nhánh sinh của bạn hôm nay va chạm với, và bởi việc yếu tố hôm nay có phải là một yếu tố bạn cần hay không."
    },
    "yearOutlook": "Cột của năm nay là {pillar}, mang {element}. {relation} Đọc này chỉ xem xét cách cột của năm gặp những gì bạn cần bây giờ; nó không phân tích năm theo từng tháng.",
    "yearRelations": {
      "YONGSIN": "Yếu tố bạn cần đến trực tiếp trong năm nay. Thời điểm phù hợp để mang ra những gì bạn đã để sang một bên.",
      "GENERATES": "Năm nay nuôi dưỡng yếu tố bạn cần, vì vậy dòng chảy hiện tại trở nên nhẹ nhàng hơn — không ngay lập tức, nhưng từ từ.",
      "GISIN": "Năm nay lại đẩy thêm về phía bạn đã nghiêng. Tốt hơn là dành thời gian để hoàn thành những gì đang có hơn là mở ra cái gì mới.",
      "CONTROLS": "Có điều gì đó trong năm nay đè nặng lên yếu tố bạn cần, vì vậy quyết định đến chậm hơn. Đặt thời hạn cho riêng bạn sẽ giúp ích.",
      "NEUTRAL": "Năm nay không va chạm cũng không nuôi dưỡng những gì bạn cần. Giữ vững vị trí bạn có là giao dịch tốt hơn."
    },
    "disclaimer": "Tài liệu tham khảo truyền thống về myeongri, không phải là dự đoán khoa học hay tuyên bố về những gì phải xảy ra."
  },
  "footer": {
    "privacy": "Chính sách Bảo mật",
    "terms": "Điều khoản Dịch vụ",
    "refund": "Chính sách Hủy bỏ & Hoàn tiền",
    "pricing": "Bảng giá",
    "legalEntity": "Doanh nghiệp",
    "representative": "Đại diện",
    "businessNumber": "Số đăng ký",
    "mailOrderNumber": "Đăng ký thương mại điện tử",
    "address": "Địa chỉ",
    "customerCenter": "Dịch vụ khách hàng",
    "email": "Email",
    "privacyOfficer": "Nhân viên bảo vệ thông tin cá nhân",
    "hostingProvider": "Dịch vụ lưu trữ",
    "providedBy": "Cung cấp bởi",
    "effective": "Có hiệu lực",
    "backHome": "Quay lại trang chủ"
  },
  "animals": {
    "rat": "Chuột",
    "ox": "Bò",
    "tiger": "Hổ",
    "rabbit": "Thỏ",
    "dragon": "Rồng",
    "snake": "Rắn",
    "horse": "Ngựa",
    "goat": "Dê",
    "monkey": "Khỉ",
    "rooster": "Gà",
    "dog": "Chó",
    "pig": "Heo"
  },
  "elements": {
    "WOOD": "Gỗ",
    "FIRE": "Lửa",
    "EARTH": "Đất",
    "METAL": "Kim loại",
    "WATER": "Nước"
  }
};
