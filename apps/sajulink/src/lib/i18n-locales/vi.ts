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
    "howTitle": "Cách tính",
    "steps": [
      "Nhập ngày sinh của bạn. Giờ sinh là tùy chọn.",
      "Năm, tháng, ngày và giờ sinh của bạn trở thành tám ký tự — biểu đồ natal của bạn. Từ đó, chúng tôi đọc trọng số của từng yếu tố và sức mạnh của ngày chủ.",
      "Trụ của hôm nay được đặt lên biểu đồ đó để đưa ra vận mệnh của bạn hôm nay."
    ],
    "privacyTitle": "Chúng tôi không lưu bất cứ thứ gì bạn nhập",
    "privacyBody": "Ngày sinh chỉ được dùng trong lúc tính kết quả và không được ghi lại ở đâu cả. Không cần tài khoản. Những gì nằm trong đường dẫn kết quả cũng không được gửi lên máy chủ.",
    "disclaimer": "Đây là một buổi đọc Saju truyền thống được cung cấp để tham khảo. Nó không phải là một dự đoán khoa học hay một phán quyết về tương lai của bất kỳ ai."
  },
  "form": {
    "title": "Ngày sinh của bạn",
    "description": "Biết giờ sinh thì luận sẽ sắc hơn, nhưng không có cũng vẫn xem được.",
    "meLegend": "Về bạn",
    "nickname": "Cách gọi",
    "nicknamePlaceholder": "ví dụ: Tôi",
    "nicknameHint": "Chỉ hiển thị trên màn hình kết quả. Không dùng vào việc tính toán.",
    "gender": "Giới tính",
    "male": "Nam",
    "female": "Nữ",
    "genderUnspecified": "Không muốn nêu",
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
    "birthTime": "Giờ sinh",
    "unknownTime": "Tôi không biết giờ sinh",
    "hour": "Giờ",
    "minute": "Phút",
    "submit": "Xem quảng cáo và xem Saju của tôi",
    "submitNoAd": "Xem Saju của tôi",
    "submitting": "Đang tính…",
    "errorInvalidDate": "Vui lòng kiểm tra lại ngày sinh. Nếu là âm lịch, hãy xem thêm ngày đó có rơi vào tháng nhuận không.",
    "errorGeneric": "Việc tính toán không thành công. Vui lòng thử lại sau giây lát."
  },
  "reading": {
    "chartTitle": "Bảng sao của bạn",
    "chartHint": "Saju thể hiện năm, tháng, ngày và giờ sinh dưới dạng hai ký tự mỗi cái. Mọi thứ bên dưới đều được đọc từ tám ký tự này.",
    "pillarYear": "Trụ năm",
    "pillarMonth": "Trụ tháng",
    "pillarDay": "Trụ ngày",
    "pillarHour": "Trụ giờ",
    "pillarHourUnknown": "Không có giờ sinh",
    "dayMasterLabel": "Nhật can",
    "animalLabel": "Con giáp",
    "seasonLabel": "Mùa sinh",
    "elementsTitle": "Thế lực ngũ hành",
    "strongest": "Mạnh nhất",
    "scarcest": "Mỏng nhất",
    "strengthTitle": "Những gì bạn được sinh ra với",
    "cautionTitle": "Điều cần lưu ý",
    "bodyStrengthTitle": "Sức của nhật can",
    "favorableLabel": "Khí bạn đang cần"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Thân vượng (身强)",
      "body": "Khí trợ giúp nhật can của bạn khá dồi dào. Điều đó cho bạn sức tự đẩy mình đi, nhưng cũng dễ nghiêng hẳn về một phía — bạn thấy dễ chịu hơn khi có thứ gì đó rút bớt phần dư ra."
    },
    "BALANCED": {
      "name": "Trung hòa (中和)",
      "body": "Khí trợ giúp nhật can và khí rút bớt nó gần như ngang nhau. Chỗ này khó nói hẳn về bên nào, nên ở đây thứ gì đang mỏng nhất sẽ được xem là thứ bạn cần."
    },
    "WEAK": {
      "name": "Thân nhược (身弱)",
      "body": "Khí trợ giúp nhật can của bạn khá mỏng. Bạn mượn sức từ xung quanh rất khéo, nhưng chống đỡ một mình lâu thì dễ đuối — bạn bừng lên khi có chỗ dựa phía sau."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Tỷ Kiên (比肩)",
      "body": "Năng lượng đứng bên cạnh bạn. Dày dạn, nó mang lại sức mạnh để bạn đứng vững và chiếm lĩnh phần của mình trước."
    },
    "GEOPJAE": {
      "name": "Kiếp Tài (劫財)",
      "body": "Năng lượng giống bạn nhưng hoạt động khác. Nó cung cấp sức mạnh để thúc đẩy, nhưng nếu quá nhiều, những gì bạn có thể dễ dàng bị phân tán."
    },
    "SIKSIN": {
      "name": "Thực Thần (食神)",
      "body": "Năng lượng kéo những gì bên trong bạn ra thế giới. Biểu hiện và niềm vui đơn giản của cuộc sống đến từ đây; nơi nó ngự trị, có sự thoải mái."
    },
    "SANGGWAN": {
      "name": "Thương Quan (傷官)",
      "body": "Năng lượng làm rối loạn một khuôn khổ cố định. Nó ban tặng tài năng và sự sắc bén, nhưng nếu quá nhiều, nó va chạm với quy tắc và thứ bậc."
    },
    "PYEONJAE": {
      "name": "Thiên Tài (偏財)",
      "body": "Năng lượng tài sản rộng lớn. Năng động và thoải mái với những gì nó có, nó mang lại cơ hội từ những nơi không ngờ tới."
    },
    "JEONGJAE": {
      "name": "Chính Tài (正財)",
      "body": "Năng lượng tài sản ổn định, được tích lũy từng chút một. Saju truyền thống cũng đọc nó như vị trí của người phối ngẫu cho một người đàn ông."
    },
    "PYEONGWAN": {
      "name": "Thiên Quan (偏官)",
      "body": "Năng lượng giữ bạn trong trạng thái căng thẳng và thẳng đứng. Bạn trở nên mạnh mẽ dưới áp lực, nhưng nếu quá nhiều, bạn luôn cảm thấy bị đuổi theo."
    },
    "JEONGGWAN": {
      "name": "Chính Quan (正官)",
      "body": "Năng lượng của trật tự giúp bạn thẳng hàng. Nó giữ gìn tên tuổi và vị trí của bạn; Saju truyền thống cũng đọc nó như vị trí của người phối ngẫu cho một người phụ nữ."
    },
    "PYEONIN": {
      "name": "Thiên Ấn (偏印)",
      "body": "Năng lượng hỗ trợ bạn bằng một con đường khác thường. Nó ban tặng sức mạnh để đào sâu, nhưng nếu quá nhiều, suy nghĩ chạy trước tay."
    },
    "JEONGIN": {
      "name": "Chính Ấn (正印)",
      "body": "Năng lượng ôm ấp và nuôi dưỡng bạn. Nó mang lại sự học hỏi và một nơi để dựa vào; nếu quá nhiều, việc tự lập sẽ đến muộn."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Giáp Mộc (甲)",
      "trait": "Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong."
    },
    "乙": {
      "name": "Ất Mộc (乙)",
      "trait": "Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy."
    },
    "丙": {
      "name": "Bính Hỏa (丙)",
      "trait": "Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên."
    },
    "丁": {
      "name": "Đinh Hỏa (丁)",
      "trait": "Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước."
    },
    "戊": {
      "name": "Mậu Thổ (戊)",
      "trait": "Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi."
    },
    "己": {
      "name": "Kỷ Thổ (己)",
      "trait": "Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra."
    },
    "庚": {
      "name": "Canh Kim (庚)",
      "trait": "Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng."
    },
    "辛": {
      "name": "Tân Kim (辛)",
      "trait": "Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả."
    },
    "壬": {
      "name": "Nhâm Thủy (壬)",
      "trait": "Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc."
    },
    "癸": {
      "name": "Quý Thủy (癸)",
      "trait": "Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Ngay lần gặp đầu cũng nói thẳng điều mình nghĩ.",
      "Hiếm khi đổi một kế hoạch hay lời hứa đã định.",
      "Từ chối thẳng thừng, nghe có thể cộc."
    ],
    "乙": [
      "Tránh chỗ đối đầu và đi đường khác.",
      "Trông thì mềm, cuối cùng vẫn tới đúng nơi mình định.",
      "Dò không khí trước rồi mới nhập vào một nhóm."
    ],
    "丙": [
      "Chủ động bắt chuyện với người vừa mới gặp.",
      "Thích hay không thích lộ hết ra trên mặt.",
      "Không cố ý mà vẫn thành trung tâm của cuộc gặp."
    ],
    "丁": [
      "Ban đầu ít nói, thân rồi thì chăm chút từng li.",
      "Thích trò chuyện lâu với một hai người hơn là chỗ đông.",
      "Nhớ một câu nói thoáng qua rồi lúc khác nhắc lại."
    ],
    "戊": [
      "Nói ít; việc có gấp thì giọng cũng hiếm khi cao lên.",
      "Là người chốt lại ở phút cuối khi những người khác còn chần chừ.",
      "Đã nói không thì rất lâu vẫn là không."
    ],
    "己": [
      "Nghe lâu hơn nói.",
      "Khó từ chối nên việc cứ dồn về mình.",
      "Việc lặng lẽ lo liệu mãi sau mới lộ ra."
    ],
    "庚": [
      "Quyết nhanh và nói ngay tại chỗ.",
      "Không làm mềm lời, nghe có thể thấy lạnh.",
      "Thấy rõ sự sốt ruột khi việc kéo dài."
    ],
    "辛": [
      "Có tiêu chuẩn rõ ràng về quần áo và những thứ mình chọn.",
      "Không thể để một việc làm dở dang trôi qua mà không nói.",
      "Ít khen, nhưng đã khen thì rất chắc."
    ],
    "壬": [
      "Hòa được với đủ kiểu người.",
      "Nhắc chuyện về sau trước cả chuyện trước mắt.",
      "Khó chịu khi bị buộc vào một chỗ quá lâu."
    ],
    "癸": [
      "Nói ít nhưng đọc tình hình rất chuẩn.",
      "Là người đầu tiên nhận ra khi không khí đổi.",
      "Giữ kín lòng mình, nên phải có thời gian mới hiểu được."
    ]
  },
  "animalTraits": {
    "rat": "Nhanh nhận ra và nhanh giữ lấy điều quan trọng. Động trước tiên khi có biến.",
    "ox": "Trông chậm nhưng theo đến cùng. Đã nhận việc thì không buông.",
    "tiger": "Không biết sợ và luôn đi đầu. Không để chuyện bất công trôi qua.",
    "rabbit": "Dịu dàng và tinh ý. Biết đi vòng thay vì đâm thẳng vào.",
    "dragon": "Lòng rộng và lý tưởng cao. Hiếm khi hài lòng với những điều tầm thường.",
    "snake": "Giữ ý riêng và nghĩ sâu. Phán đoán chính xác.",
    "horse": "Sáng và hiếu động. Khổ nhất là bị nhốt trong khuôn.",
    "goat": "Ấm áp và biết nghĩ cho người khác. Lời nặng thì giữ trong lòng rất lâu.",
    "monkey": "Nhiều tài xoay xở và thích ứng nhanh. Chán việc lặp đi lặp lại.",
    "rooster": "Chăm chỉ và kỹ tính. Không để thứ gì lệch chỗ.",
    "dog": "Đã tin thì trung thành đến cùng. Bị phản bội thì đau đặc biệt sâu.",
    "pig": "Rộng lượng và thẳng thắn. Tin người dễ, đôi khi phải trả giá."
  },
  "result": {
    "title": "Bói Saju của bạn",
    "recalculate": "Tính lại từ đầu",
    "copyLink": "Sao chép liên kết kết quả",
    "copied": "Đã sao chép",
    "missingInput": "Không đọc được kết quả này. Vui lòng nhập lại ngày sinh.",
    "partialTime": "Không có giờ sinh nên trụ giờ đã được bỏ ra. Thêm giờ sinh sẽ cho kết quả chính xác hơn.",
    "engineVersion": "Tính theo",
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
    "remaining": "Kết quả mở sau {seconds} giây"
  },
  "reportDetail": {
    "depthTitle": "Nhìn sâu hơn vào biểu đồ của bạn",
    "vitalityTitle": "Điều mùa tiết nâng đỡ",
    "vitalityHint": "Các thanh cho biết có bao nhiêu yếu tố; bảng này cho biết tháng sinh có đẩy nó lên hay không. Cùng một lượng nhưng mang sức mạnh khác nhau ở wang và sa.",
    "vitalities": {
      "WANG": {
        "name": "Vượng (旺)",
        "body": "ở mức mạnh nhất"
      },
      "SANG": {
        "name": "Tướng (相)",
        "body": "tiếp theo về sức mạnh"
      },
      "HYU": {
        "name": "Hưu (休)",
        "body": "nghỉ sau lượt của mình"
      },
      "SU": {
        "name": "Tù (囚)",
        "body": "bị giữ lại, khó di chuyển"
      },
      "SA": {
        "name": "Tử (死)",
        "body": "lúc yếu nhất"
      }
    },
    "rawLabel": "Trước mùa",
    "strengthLabel": "Sau mùa",
    "earthSeasonNote": "Sinh ra trong tháng chuyển tiếp (辰未戌丑), nên đất cũng được tính là wang.",
    "allyRatioLabel": "Tỷ lệ đồng minh",
    "allyRatioHint": "Tỷ lệ giữa các sao tài nguyên và bạn đồng hành kết hợp. Trên 45% là mạnh, dưới 35% là yếu. Số này được in ra để bạn thấy gần như quyết định ở đâu.",
    "stemGodsTitle": "Mỗi cột có ý nghĩa gì với bạn",
    "stemGodsHint": "Được đo từ ngày chủ của bạn, mỗi cột còn lại lấy một trong mười tên thần. Những cái nào dày đặc nói lên rất nhiều về tính cách.",
    "pillarColumn": "Trụ",
    "tenGodColumn": "Mười thần",
    "meaningColumn": "Nó có nghĩa là gì",
    "yearOutlookTitle": "Triển vọng của năm nay",
    "domainsTitle": "Bốn lĩnh vực của cuộc sống",
    "factorsTitle": "Điều gì tạo ra điểm số hôm nay",
    "factorsHint": "Màn hình chỉ tên các yếu tố; ở đây mỗi yếu tố được in với số điểm mà nó đã thêm hoặc trừ.",
    "deltaColumn": "Điểm",
    "appendixTitle": "Cách biểu đồ này được xây dựng",
    "timeCorrectionLabel": "Giờ sinh",
    "timeCorrectionApplied": "Đã hiệu chỉnh về giờ mặt trời thật và đọc là {time}.",
    "timeCorrectionNone": "Không có thời gian sinh được cung cấp, vì vậy cột giờ đã bị bỏ qua.",
    "timeCorrectionDateShift": "Sự điều chỉnh đã chuyển ngày đến {date}, vì vậy cột ngày hôm đó đã được sử dụng.",
    "calendarLabel": "Ngày dùng để lập lá số",
    "solarLabel": "Dương lịch",
    "lunarLabel": "Âm lịch",
    "lunarUnavailable": "Ngày này không có trong bảng lịch, vì vậy không có ngày âm lịch nào được hiển thị."
  },
  "report": {
    "title": "Giữ bản đọc cuộc sống của bạn dưới dạng PDF",
    "body": "Chúng tôi biến bản đọc này thành một tệp PDF — biểu đồ sinh của bạn, trọng số của năm yếu tố, sức mạnh của ngày chủ và những gì nó cần bây giờ, cùng với vận may hôm nay, tất cả trên một trang.",
    "buyButton": "Thanh toán {price} và tải về",
    "preparing": "Chưa mở bán",
    "ordering": "Đang tạo đơn hàng…",
    "paying": "Đang xử lý thanh toán…",
    "issuing": "Đang chuẩn bị bản luận…",
    "done": "Đã tải về. Dùng nút bên dưới để tải lại.",
    "failed": "Thanh toán hoặc việc tải về không thành công. Vui lòng thử lại sau giây lát.",
    "retry": "Tải lại",
    "contents": [
      "Ngày chủ và tính cách — tóm tắt, điểm mạnh và điểm cần lưu ý",
      "Biểu đồ sinh của bạn — tám ký tự của bốn trụ",
      "Trọng số của năm yếu tố, dày nhất và mỏng nhất",
      "Sức mạnh của ngày chủ, và năng lượng mà nó cần bây giờ",
      "Vận may hôm nay và bốn lĩnh vực (tiền bạc, tình yêu, công việc, sức khỏe)"
    ],
    "consentLabel": "Tôi hiểu đây là nội dung số được cung cấp ngay khi thanh toán, và **một khi việc tải về hoàn tất thì quyền rút lại đơn vì đơn thuần đổi ý sẽ bị hạn chế**.",
    "consentRequired": "Vui lòng xác nhận điều khoản rút lại đơn trước khi thanh toán.",
    "productInfoTitle": "Thông tin sản phẩm",
    "productInfo": [
      [
        "Nhà cung cấp",
        "{brand}"
      ],
      [
        "Hình thức",
        "Một tài liệu PDF (5 trang A4), tải xuống ngay sau khi thanh toán."
      ],
      [
        "Yêu cầu",
        "Bất kỳ thiết bị nào mở được PDF. Không cần cài đặt hay tài khoản."
      ],
      [
        "Thời hạn sử dụng",
        "Không giới hạn. Tệp đã tải về là của bạn."
      ],
      [
        "Tải lại",
        "Tối đa năm lần trên cùng một đơn hàng. Chúng tôi không giữ bản sao, nên khi bạn rời màn hình kết quả thì không thể tạo lại."
      ],
      [
        "Rút lại đơn",
        "Hoàn tiền toàn bộ trước khi việc tải về bắt đầu. Sau khi tải xong, việc rút lại đơn vì đổi ý bị hạn chế (Điều 17 khoản 2, Luật Thương mại điện tử Hàn Quốc)."
      ],
      [
        "Chi phí đổi trả",
        "Không có — là nội dung số, không có gì để giao."
      ]
    ],
    "refundContact": "Về hoàn tiền hay thắc mắc, xin liên hệ trung tâm hỗ trợ khách hàng hoặc email bên dưới. Nếu tài liệu không được tạo ra, hoặc số tiền bị trừ khác với đơn hàng, chúng tôi hoàn tiền toàn bộ.",
    "pdfLanguageNotice": "Tệp PDF được tạo bằng cùng ngôn ngữ với màn hình này."
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
    "summary": "Một {dayMaster} ngày sinh ra trong năng lượng của {season}. Trong toàn bộ biểu đồ, {strongest} chạy dày nhất và {scarcest} chạy mỏng nhất. Mọi thứ bên dưới đều dựa trên tám ký tự đó — mỗi số và mỗi cột ở đây đều được tính toán, không phải chọn lựa.",
    "personality": "Ngày sinh của bạn là {dayMaster} — năng lượng {element} — và biểu đồ này đọc như {strengthName}. Bên nào chạy dày hơn, cái gì hỗ trợ ngày chủ hay cái gì rút ra từ nó, là điều hình thành nên tính cách, và trong cuộc sống hàng ngày, nó thể hiện như thế này.",
    "cautions": {
      "STRONG": [
        "Bạn đẩy mạnh đến mức thường chỉ nhận ra sự nghiêng ngả sau khi nó đã xảy ra.",
        "Ngay cả khi có sự giúp đỡ, bạn vẫn xử lý một mình, điều này làm công việc trở nên lớn hơn.",
        "Mọi thứ sẽ ổn định khi bạn để chỗ cho những gì rút đi phần thừa."
      ],
      "BALANCED": [
        "Không có gì nghiêng về bên nào, vì vậy một quyết định hoãn lại chỉ đơn giản là vẫn hoãn lại.",
        "Bạn thích nghi tốt với tình huống, điều này có thể làm mờ đi ranh giới của chính bạn.",
        "Hướng về cái gì hiện đang mỏng nhất sẽ cho bạn một hướng để giữ."
      ],
      "WEAK": [
        "Cố gắng chịu đựng một mình sẽ làm bạn mệt mỏi sớm hơn bạn nghĩ.",
        "Khi không có gì hỗ trợ bạn, các quyết định trượt đi và khoảnh khắc trôi qua.",
        "Giữ những người hỗ trợ gần bên không phải là một điểm yếu trong biểu đồ này — đó là phương pháp."
      ]
    },
    "scarcityCaution": "Yếu tố mỏng nhất ngay bây giờ là {scarcest}. Bất cứ điều gì mà yếu tố đó quản lý là nơi bạn chậm nhất để hành động.",
    "elementBalance": "Theo sức mạnh, {strongest} dẫn đầu với {strongestPct}% và {scarcest} theo sau với {scarcestPct}%. Tháng sinh của bạn nằm trong {season}, điều này đẩy yếu tố đó lên một lần nữa — cùng một lượng nhưng có sức mạnh khác nhau tùy thuộc vào việc mùa có hỗ trợ hay không. Điều bạn cần bây giờ là {favorable}, và mọi thứ sẽ dễ dàng hơn khi yếu tố đó được lấp đầy.",
    "todayHeadline": "Hôm nay là ngày {grade}",
    "todayMessage": "Hôm nay ghi được {score}, được chấm {gradeName}. {gradeBody} Cột ngày là {pillar}, và yếu tố lớn nhất ảnh hưởng đến điểm số đó là “{topFactor}”.",
    "todayAdvice": {
      "HIGH": "Một ngày tốt để thực hiện thông điệp hoặc dọn dẹp mà bạn đã trì hoãn — tuy nhiên, tốt hơn là không nên cố gắng hoàn thành tất cả trong hôm nay.",
      "MID": "Hãy làm như bạn thường làm và bạn sẽ nhận được những gì bạn thường nhận. Thay vì bắt đầu điều gì mới, hãy tiến một bước với một thứ đã có trong tay.",
      "LOW": "Một số điều hôm nay đi ngược lại với biểu đồ. Tốt hơn là dành thời gian để hoàn thành và kiểm tra hơn là bắt đầu."
    },
    "luckyNote": "Yếu tố may mắn hôm nay là {element}. Phạm vi {colors}, phía {direction}, và những giờ xung quanh {time} là nơi năng lượng đó mạnh nhất.",
    "domains": {
      "wealth": "Đọc từ bản đồ sinh, tiền bạc đến với {score}. Nó cân nhắc những gì kiếm được cùng với sức mạnh để mang nó.",
      "love": "Đọc từ bản đồ sinh, tình cảm đến với {score}. Nó cân nhắc sao phu thê cùng với hình dáng của chỗ ngồi mà nó ngồi.",
      "career": "Đọc từ bản đồ sinh, công việc đến với {score}. Nó cân nhắc những gì bạn đảm nhận cùng với những gì bạn đưa ra.",
      "health": "Đọc từ bản đồ sinh, sức khỏe đến với {score}. Nó cân nhắc sự cân bằng bạn được sinh ra cùng với những gì va chạm bên trong."
    },
    "yearOutlook": "Cột của năm nay là {pillar}, mang theo {element}. {relation} Đọc này chỉ xem xét cách cột của năm gặp những gì bạn cần bây giờ; nó không phân tích năm theo từng tháng.",
    "yearRelations": {
      "YONGSIN": "Yếu tố bạn cần sẽ đến trực tiếp trong năm nay. Thời điểm thích hợp để mang ra những gì bạn đã để sang một bên.",
      "GENERATES": "Năm nay nuôi dưỡng yếu tố bạn cần, vì vậy tình hình trở nên nhẹ nhàng hơn — không ngay lập tức, nhưng từ từ.",
      "GISIN": "Năm nay lại đẩy bạn về hướng mà bạn đã nghiêng. Tốt hơn là dành thời gian để hoàn tất những gì đang có hơn là mở ra điều gì mới.",
      "CONTROLS": "Có điều gì đó trong năm nay gây áp lực lên yếu tố bạn cần, vì vậy quyết định đến chậm hơn. Đặt thời hạn cho bản thân sẽ giúp ích.",
      "NEUTRAL": "Năm nay không va chạm cũng không nuôi dưỡng những gì bạn cần. Giữ vững những gì bạn có là giao dịch tốt hơn."
    },
    "disclaimer": "Tài liệu tham khảo truyền thống về myeongri, không phải là dự đoán khoa học hay tuyên bố về những gì phải xảy ra.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Biện chứng dày đặc. Bạn xây dựng bằng chính đôi tay của mình thay vì vay mượn, điều này khiến bạn mạnh mẽ trong việc hoàn thành nhiệm vụ. Nhưng chấp nhận sự giúp đỡ cũng là một kỹ năng, và coi đó là điểm yếu sẽ khiến bạn phải gánh vác mọi thứ một mình — và va chạm, về phần chia, với bất kỳ ai đứng bên cạnh bạn. Nơi công việc được chia sẻ, việc đưa tay ra trước sẽ là con đường nhanh hơn.",
        "absent": "Biện chứng vắng mặt. Di chuyển cùng người khác phù hợp với bạn hơn là giữ vững vị trí của riêng mình. Bạn do dự lâu khi quyết định là của riêng bạn, và tăng tốc khi có ai đó cùng tham gia. Khi một vị trí là của bạn để giữ, đáng để luyện tập việc đẩy mạnh."
      },
      "GEOPJAE": {
        "thick": "Tài sản dày đặc. Bạn hành động trước khi người khác do dự. Lực lượng đó không dễ dàng để giữ, vì vậy những gì bạn kiếm được không ở lại lâu trong tay. Quyết định trước nơi tiền đi không phải là tiết kiệm trong biểu đồ này — đó là phương pháp.",
        "absent": "Tài sản vắng mặt. Bạn hiếm khi ép buộc một điều gì đó và bạn tránh né các cuộc thi. Bạn ít mất mát, nhưng bạn đến muộn một nhịp khi điều gì đó cần phải được thúc đẩy mạnh mẽ. Khi cược là thật, việc đặt thời hạn cho bản thân sẽ giúp ích."
      },
      "SIKSIN": {
        "thick": "Thực thần dày đặc. Những gì bên trong dễ dàng xuất hiện, vì vậy việc tạo ra, phát triển và nuôi dưỡng là những lĩnh vực thoải mái. Bạn làm tốt công việc được thực hiện từ từ và lâu dài, và kết quả đến chậm nhưng đều đặn. Khi sự thoải mái kéo dài, bạn có xu hướng ổn định hơn là mở rộng.",
        "absent": "Thực thần vắng mặt. Kênh từ bên trong ra bên ngoài mỏng manh: suy nghĩ có đó, nhưng việc nói ra thì chậm. Chờ cho đến khi mọi thứ sẵn sàng sẽ đẩy lùi thời điểm bắt đầu. Đưa ra điều gì đó chưa hoàn thiện không phải là một tổn thất trong biểu đồ này."
      },
      "SANGGWAN": {
        "thick": "Cảnh sát thương dày đặc. Bạn thấy những gì không đúng chỗ trong một khung cố định trước bất kỳ ai khác, và bạn có từ ngữ để gọi tên nó. Bạn tỏa sáng nơi mọi thứ đang được tạo ra và va chạm nơi mọi thứ đang được giữ lại. Cách mà điều đúng được nói ra quan trọng không kém gì việc nhìn thấy nó.",
        "absent": "Cảnh sát thương vắng mặt. Bạn tìm kiếm cách đi qua một khung thay vì làm rung chuyển nó. Bạn hiếm khi va chạm với mọi người, nhưng bạn để mọi thứ trôi qua nơi chúng cần thay đổi, và điều đó dẫn đến sự thất vọng. Tốt hơn là không nên hoãn lại từ ngữ cần phải nói."
      },
      "PYEONJAE": {
        "thick": "Tài sản gián tiếp dày đặc. Bạn giữ một tay ở nhiều nơi và nắm bắt cơ hội rộng rãi, vì vậy mọi thứ mở ra ở những góc không ngờ. Tuy nhiên, những gì được trải rộng cũng cần được chăm sóc, và việc chăm sóc ít thú vị hơn với bạn — vì vậy bạn thường thất bại trong việc thu thập những gì bạn đã mở ra. Đóng một cái trước khi mở cái tiếp theo là thứ tự mà biểu đồ này cần.",
        "absent": "Tài sản gián tiếp vắng mặt. Bạn chọn điều chắc chắn trên mặt đất quen thuộc thay vì mở rộng. Có ít điều làm bạn rung chuyển, và bạn thường thấy những cơ hội lớn đi qua. Mở rộng tầm với của bạn từng chút một sẽ giúp ích."
      },
      "JEONGJAE": {
        "thick": "Tài sản trực tiếp dày đặc. Bạn đếm những gì vào và những gì ra, và bạn xây dựng — vì vậy mặt đất dưới bạn trở nên vững chắc theo thời gian. Chỉ với những điều chắc chắn khiến bạn đến muộn với cơ hội, và sự tiết kiệm quá mức làm tay bạn nặng nề nơi nó nên mở ra. Quyết định trước tiền sẽ dùng để làm gì giúp ích.",
        "absent": "Tài sản trực tiếp vắng mặt. Phía tích lũy ổn định trở nên mỏng manh, vì vậy việc quản lý những gì đến cứ bị hoãn lại. Kiếm tiền và giữ tiền là những kỹ năng khác nhau; biểu đồ này phải học kỹ năng thứ hai một cách riêng biệt. Các quy tắc di chuyển tiền mà không cần bạn quyết định mỗi lần rất phù hợp với bạn."
      },
      "PYEONGWAN": {
        "thick": "Cảnh sát gián tiếp dày đặc. Áp lực làm nổi bật sức mạnh của bạn, và bạn gánh vác trách nhiệm mà người khác thấy nặng nề. Tuy nhiên, khi căng thẳng không bao giờ giảm bớt, nó cứng lại thành cảm giác bị săn đuổi và nghỉ ngơi không còn cảm giác như nghỉ ngơi. Đặt một thời gian để dừng lại không phải là sự lười biếng trong biểu đồ này.",
        "absent": "Cảnh sát gián tiếp vắng mặt. Ít áp lực đè nặng lên bạn, điều này dễ chịu cho tâm trí, nhưng sức mạnh để giữ vững bản thân trong một cuộc khủng hoảng trở nên mỏng manh. Bạn làm tốt hơn nhiều khi có một thời hạn hoặc một lời hứa được đặt ra từ bên ngoài."
      },
      "JEONGGWAN": {
        "thick": "Cảnh sát trực tiếp dày đặc. Vị trí và các đường bạn giữ rõ ràng, và việc giữ chúng là nơi sự ổn định của bạn đến từ — bạn xây dựng niềm tin trong các hệ thống. Nơi quy tắc dao động, bạn chậm để phán xét, và nơi bảng là của bạn để thiết lập, bạn cảm thấy bị gò bó.",
        "absent": "Cảnh sát trực tiếp vắng mặt. Một cách tự tạo của bạn phù hợp hơn với bạn so với một vị trí được chỉ định từ bên ngoài. Đó là tự do, nhưng tiêu chuẩn dễ bị lung lay; việc viết các quy tắc của riêng bạn như thể chúng là chính sách giúp ích."
      },
      "PYEONIN": {
        "thick": "Tài nguyên gián tiếp dày đặc. Bạn đi xuống con đường mà người khác bỏ qua và xây dựng chiều sâu của riêng bạn. Việc học hỏi và cân nhắc rất mạnh mẽ, nhưng suy nghĩ vượt xa bàn tay và bạn có thể cảm thấy mệt mỏi trước khi bắt đầu. Di chuyển với nửa sự chuẩn bị phù hợp với biểu đồ này.",
        "absent": "Tài nguyên gián tiếp vắng mặt. Bạn học bằng cách va chạm với mọi thứ thay vì đào sâu. Bạn không chậm học, nhưng việc học một mình trong thời gian dài không phù hợp với bạn. Hỏi người khác và học hỏi tại chỗ nhanh hơn."
      },
      "JEONGIN": {
        "thick": "Tài nguyên trực tiếp dày dạn. Những gì nâng đỡ bạn là phong phú, vì vậy việc học hỏi và nơi để dựa vào không bao giờ cạn kiệt. Sự ổn định đó khiến việc tiến bước trở nên chậm trễ, và sự chuẩn bị trở thành lý do cho việc bắt đầu bị hoãn lại. Giữ một chỗ nơi những gì bạn nhận được quay trở lại là điều đáng giá.",
        "absent": "Tài nguyên trực tiếp vắng mặt. Bạn đã tự tạo ra chỗ đứng của mình, vì vậy việc đứng một mình đã phát triển sớm. Tuy nhiên, việc yêu cầu giúp đỡ là điều không quen thuộc, và bạn vẫn kiên trì một mình ngay cả khi không cần thiết. Trong biểu đồ này, việc hỏi là rất đáng giá."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Biểu đồ mang bao nhiêu tài sản (財星) — độ dày của những gì bạn xử lý và thu thập.",
      "WEALTH_STRONG_BODY": "Ngày chủ chạy đầy đủ, vì vậy có sức mạnh để mang tài sản.",
      "WEALTH_WEAK_BODY": "Ngày chủ chạy mỏng, vì vậy tài sản khó mang ngay cả khi nó tồn tại.",
      "WEALTH_YONGSIN": "Những gì bạn cần bây giờ là cùng một yếu tố với các ngôi sao tài sản, để đất đó trở nên dễ dàng hơn.",
      "LOVE_SPOUSE_STAR": "Biểu đồ mang bao nhiêu ngôi sao vợ chồng — tài sản trực tiếp cho nam giới, quan trực tiếp cho phụ nữ.",
      "LOVE_SPOUSE_PALACE": "Ngôi sao vợ chồng ngồi bên trong nhánh ngày của bạn, cung vợ chồng, vì vậy chỗ ngồi đã được lấp đầy.",
      "LOVE_PALACE_CHUNG": "Cung vợ chồng va chạm với một nhánh khác, vì vậy chỗ ngồi đó không ổn định.",
      "LOVE_GENDER_UNKNOWN": "Không có giới tính nào được nhập, vì vậy ngôi sao vợ chồng không được tính. Giá trị chia sẻ giữa các ngôi sao tài sản và quan theo giới tính, và chúng tôi không chọn một cách tùy tiện.",
      "CAREER_OFFICER": "Các ngôi sao quan (正官·偏官) trong biểu đồ — độ dày của những gì bạn đảm nhận và giữ.",
      "CAREER_OUTPUT": "Các ngôi sao đầu ra (食神·傷官) trong biểu đồ — độ dày của những gì bạn đưa ra và thể hiện.",
      "CAREER_STRONG_BODY": "Ngày chủ chạy đầy đủ, vì vậy nó sử dụng các sao quan chức thay vì bị chúng đè nén.",
      "HEALTH_BALANCE": "Sự cân bằng của năm yếu tố — càng nghiêng về một phía, càng nhiều áp lực rơi vào những gì yếu tố đó quản lý.",
      "HEALTH_CHUNG": "Số lượng cặp nhánh va chạm bên trong biểu đồ.",
      "HEALTH_EXTREME_BODY": "Ngày chủ nghiêng nặng về một bên, điều này tự nó đã là một gánh nặng. Một ngày chủ cân bằng không mất gì ở đây."
    },
    "yongsinDepth": {
      "STRONG": "Các yếu tố hỗ trợ cho ngày chủ của bạn rất đầy đủ. Điều đó mang lại cho bạn động lực riêng nhưng dễ nghiêng về một phía, vì vậy điều bạn cần bây giờ không phải là thêm hỗ trợ — mà là một cái gì đó để loại bỏ sự thừa thãi. {favorable} làm điều đó. Nơi mà yếu tố đó đến — phát ra, tiếp nhận, thu thập — là nơi bạn ổn định.",
      "BALANCED": "Những gì hỗ trợ cho ngày chủ của bạn và những gì rút ra từ nó gần như cân bằng. Quá gần để có thể xác định theo cách nào, vì vậy ở đây chúng ta đọc bất cứ điều gì mỏng manh nhất như là điều bạn cần: {favorable}. Một biểu đồ không nghiêng sẽ thích ứng tốt nhưng có thể làm mờ đi tiêu chuẩn của chính nó, vì vậy việc hướng về nơi mỏng manh sẽ cho bạn một hướng đi để giữ.",
      "WEAK": "Các yếu tố hỗ trợ cho ngày chủ của bạn rất mỏng manh. Bạn vay mượn sức mạnh từ xung quanh rất tốt nhưng dễ mệt mỏi khi phải tự mình chịu đựng, vì vậy điều bạn cần bây giờ là một cái gì đó để hỗ trợ và bổ sung cho bạn. {favorable} làm điều đó. Giữ những thứ hỗ trợ gần bên không phải là một điểm yếu trong biểu đồ này — đó là phương pháp."
    }
  },
  "footer": {
    "privacy": "Quyền riêng tư",
    "terms": "Điều khoản",
    "refund": "Hoàn tiền",
    "pricing": "Bảng giá",
    "legalEntity": "Tên công ty",
    "representative": "Đại diện",
    "businessNumber": "Đăng ký KD",
    "mailOrderNumber": "Bán hàng online",
    "address": "Địa chỉ",
    "customerCenter": "Hỗ trợ khách hàng",
    "email": "Email",
    "privacyOfficer": "Phụ trách dữ liệu",
    "hostingProvider": "Hosting",
    "providedBy": "Cung cấp bởi",
    "effective": "Ngày hiệu lực",
    "backHome": "Về trang chủ"
  },
  "animals": {
    "rat": "Tý",
    "ox": "Sửu",
    "tiger": "Dần",
    "rabbit": "Mão",
    "dragon": "Thìn",
    "snake": "Tỵ",
    "horse": "Ngọ",
    "goat": "Mùi",
    "monkey": "Thân",
    "rooster": "Dậu",
    "dog": "Tuất",
    "pig": "Hợi"
  },
  "elements": {
    "WOOD": "Mộc",
    "FIRE": "Hỏa",
    "EARTH": "Thổ",
    "METAL": "Kim",
    "WATER": "Thủy"
  }
};
