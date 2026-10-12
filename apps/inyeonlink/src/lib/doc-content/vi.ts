import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu Inyeon-Link",
    "summary": "Chúng tôi so sánh hai biểu đồ sinh theo truyền thống Saju Hàn Quốc. Đây là những gì chúng tôi tính toán và những gì chúng tôi từ chối tuyên bố.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì",
        "blocks": [
          {
            "p": "Inyeon-Link xây dựng hai biểu đồ sinh từ ngày tháng và giờ sinh và cho thấy **cách hai tập hợp năng lượng gặp nhau.** Bạn cũng có thể đọc biểu đồ của riêng mình và xem những tính cách nào thường phù hợp với bạn."
          },
          {
            "p": "Đọc trên màn hình là **miễn phí và không cần tài khoản.** Các mục trả phí là báo cáo PDF chứa các số liệu mà màn hình không bao giờ hiển thị — sức mạnh của các yếu tố, sự kết hợp của mười vị thần và các mối quan hệ giữa tất cả bốn trụ cột."
          }
        ]
      },
      {
        "title": "Chúng tôi tính toán gì",
        "blocks": [
          {
            "p": "Các biểu đồ được xây dựng từ **lịch âm dương Hàn Quốc**, và thời gian sinh được điều chỉnh theo **thời gian mặt trời thực** cho nơi sinh — cùng một thời gian đồng hồ có nghĩa là vị trí mặt trời khác nhau tùy thuộc vào nơi bạn sinh ra."
          },
          {
            "p": "Điểm số đến từ các quy tắc cố định. Các khái niệm truyền thống — mười vị thần, quan hệ nhánh, yếu tố hỗ trợ — được thể hiện dưới dạng quy tắc, vì vậy **cùng một đầu vào luôn cho cùng một kết quả.** Khi một quy tắc thay đổi, chúng tôi chạy một hệ thống hồi quy để đảm bảo rằng các đọc cũ không bị thay đổi."
          },
          {
            "p": "**Không có AI tham gia.** Mỗi câu trên màn hình là văn bản cố định gắn liền với một kết quả đã tính toán."
          }
        ]
      },
      {
        "title": "Những gì chúng tôi sẽ không tuyên bố",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không đoán vận mệnh.** Không có gì ở đây bảo bạn theo đuổi hoặc tránh xa ai đó. Đây là một tài liệu tham khảo được rút ra từ một truyền thống.",
              "**Chúng tôi không lưu trữ những gì bạn nhập.** Thông tin sinh được sử dụng cho thời điểm tính toán và không bao giờ được ghi lại; các liên kết kết quả sống trong phần URL mà trình duyệt không gửi đến máy chủ.",
              "**Một điểm số không phải là phán quyết về một người.** Một số thấp không làm vô hiệu hóa một mối quan hệ."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Phương pháp được mô tả chi tiết trong [hướng dẫn](/guide). Thông tin công ty và cách liên hệ với chúng tôi có trên [trang liên hệ](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Cơ sở Tính toán",
    "title": "Cơ sở nào cho Tính toán?",
    "summary": "Inyeon-Link tiết lộ tất cả các quy tắc mà nó sử dụng. Bạn có thể kiểm tra các mục và trọng số của chúng, các điểm số từ bảng quan hệ nhánh đất, và các giá trị ngưỡng phân biệt giữa một ngày chủ mạnh và một ngày chủ yếu — bạn có thể thấy các con số trên màn hình đến từ đâu.",
    "backLabel": "Quay lại Bắt đầu",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các giá trị được viết ở đây đều **được đọc trực tiếp từ mã tính toán**. Vì chúng không được sao chép thủ công vào văn bản, nếu các quy tắc thay đổi, các con số trong tài liệu này cũng sẽ thay đổi."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Cơ sở Dịch vụ",
    "title": "Saju Compatibility Nhìn vào Điều Gì?",
    "summary": "Nó làm rõ bốn mục và trọng số tương ứng của chúng, và giải thích lý do tại sao bốn mục đó được chọn. Nó cũng đề cập đến lý do tại sao có thể thực hiện các phép tính ngay cả khi không biết thời gian sinh.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Tính toán và Kết hợp Hai Trục",
        "blocks": [
          {
            "p": "Tỷ lệ khớp đến từ hai nhánh. **Saju compatibility** nhìn vào toàn bộ biểu đồ saju gốc của cả hai cá nhân, trong khi **zodiac compatibility** chỉ xem xét một nhánh đất từ năm sinh. Giá trị cuối cùng được thu được bằng cách tính trung bình trọng số của hai."
          },
          {
            "table": {
              "head": [
                "Trục",
                "Điều gì được xem xét",
                "Trọng số"
              ],
              "rows": [
                [
                  "Saju Compatibility",
                  "Ngày chủ, nhánh ngày, và năm yếu tố — bốn mục",
                  "{weightSaju}"
                ],
                [
                  "Zodiac Compatibility",
                  "Mối quan hệ giữa các nhánh năm",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Phía saju nặng hơn nhiều vì lượng thông tin được sử dụng là khác nhau. Saju xem xét tất cả bốn trụ cột, trong khi cung hoàng đạo chỉ nhìn vào một ký tự. Tuy nhiên, cung hoàng đạo không bị loại trừ vì hai lý do — đó là mục dễ hiểu nhất về mặt trực quan, và đó là **trục duy nhất có giá trị không dao động ngay cả khi không biết thời gian sinh.**"
          }
        ]
      },
      {
        "title": "Bốn Mục của Saju Compatibility",
        "blocks": [
          {
            "p": "Phía saju được chia thành bốn. Mỗi mục được chọn để đảm bảo rằng những gì họ xem xét không chồng chéo."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju bao gồm tám ký tự được hình thành bởi các thiên can và địa chi của năm, tháng, ngày và giờ sinh. Ngày can và ngày chi được đề cập dưới đây là hai ký tự trong trụ ngày.",
            "labels": {
              "year": "Trụ Năm",
              "yearNote": "Gốc · Cung Hoàng Đạo",
              "month": "Trụ Tháng",
              "monthNote": "Mùa · Sức Mạnh",
              "day": "Trụ Ngày",
              "dayNote": "Tôi · Cung Phu Thê",
              "hour": "Trụ Giờ",
              "hourNote": "Năm Cuối · Sử Dụng",
              "stem": "Thiên Can",
              "stemNote": "Ngày Can = Tôi",
              "branch": "Nhánh Địa",
              "branchNote": "Nhánh Ngày = Cung Vợ"
            }
          },
          {
            "table": {
              "head": [
                "Mục",
                "Điều Được Xem Xét",
                "Trọng Số"
              ],
              "rows": [
                [
                  "Mối Quan Hệ Nhánh Ngày",
                  "Những gì mà hai nhánh ngày (日干) của người đó là với nhau — được xem qua Mười Thần",
                  "{weightDayMaster}"
                ],
                [
                  "Sự Bổ Sung của Năm Nguyên Tố",
                  "Người bạn đời có năng lượng mà tôi cần không — được xem qua yếu tố hỗ trợ mà biểu đồ hiện tại cần",
                  "{weightElementSupply}"
                ],
                [
                  "Ngôi Sao Vợ",
                  "Nhánh ngày của đối tác có tương ứng với vị trí vợ của tôi không?",
                  "{weightSpouseStar}"
                ],
                [
                  "Mối Quan Hệ Nhánh Ngày",
                  "Hai nhánh ngày (日支) của hai người có phải là sự kết hợp hay xung đột không?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Nhánh ngày được đọc vì truyền thống coi nó như là **cung vợ**. Trong bốn trụ, nó là cái chỉ về đối tác, điều này khiến nó trở thành nơi đầu tiên mà sự tương thích được xem xét."
          }
        ]
      },
      {
        "title": "Nếu giới tính không được tiết lộ, yếu tố vợ sẽ bị bỏ qua",
        "blocks": [
          {
            "p": "Yếu tố vợ yêu cầu kiến thức về giới tính để tính toán. Truyền thống đọc vị trí chỉ về một người vợ khác nhau tùy thuộc vào giới tính. Nếu không được tiết lộ, mục này sẽ bị **loại trừ** và trọng số của ba mục còn lại sẽ được chuẩn hóa lại."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nó sẽ không được coi là 0 điểm",
        "blocks": [
          {
            "p": "Nếu các vị trí thiếu được coi là 0 điểm, điểm số sẽ bị giảm không công bằng chỉ vì giới tính không được tiết lộ. Việc chuẩn hóa lại trọng số ngăn chặn vấn đề này."
          }
        ]
      },
      {
        "title": "Các phép tính có thể được thực hiện mà không cần biết thời gian sinh",
        "blocks": [
          {
            "p": "Thời gian sinh được sử dụng để xác định trụ giờ. Nếu không biết, các phép tính sẽ được thực hiện mà không có trụ giờ, và điều này sẽ được chỉ ra trên màn hình kết quả. Vì không có đầu vào trực tiếp cho trụ giờ trong bốn mục tương thích, các giá trị sẽ không dao động đáng kể, nhưng nó ảnh hưởng đến sự cân bằng của năm nguyên tố."
          },
          {
            "p": "Nếu bạn biết thời gian, vui lòng cũng chọn nơi sinh. Nếu thời gian chuẩn khác với vị trí mặt trời thực tế, việc sử dụng nó như vậy có thể làm lệch trụ giờ [(sửa đổi thời gian mặt trời thực)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Cùng một đầu vào sẽ luôn tạo ra cùng một giá trị",
        "blocks": [
          {
            "p": "Tất cả điểm số được xác định bởi các quy tắc. Không có trí tuệ nhân tạo nào được sử dụng, cũng như không có số ngẫu nhiên nào được áp dụng. Do đó, việc nhập cùng một hai ngày sinh nhiều lần sẽ không tạo ra kết quả khác nhau. Là một dịch vụ không lưu trữ dữ liệu, các kết quả trước đó không thể được truy xuất, nhưng **định tính** bù đắp cho điều đó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Thay đổi quy tắc sẽ nâng cấp phiên bản",
        "blocks": [
          {
            "p": "Mỗi lần quy tắc tính điểm được thay đổi, phiên bản của động cơ sẽ được cập nhật. Phiên bản được ghi chú ở dưới cùng của màn hình kết quả, cho phép bạn phân biệt quy tắc nào đã được sử dụng để tính toán các số mà bạn đang xem."
          }
        ]
      },
      {
        "title": "Kết quả này không phải là gì",
        "blocks": [
          {
            "p": "Đây là một **tài liệu tham khảo** được tính toán từ các quy tắc được xây dựng trên quan điểm của truyền thống. Nó không phải là một dự đoán khoa học, cũng không phải là một tuyên bố xác định về mối quan hệ giữa hai cá nhân. Phạm vi điểm số được đặt tối thiểu khoảng 45 điểm vì lý do này — không có sự kết hợp nào sẽ tạo ra giá trị gần 0 điểm."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Bảng quan hệ",
    "title": "Cách con giáp và nhánh ngày gặp nhau — Bảng mười hai nhánh",
    "summary": "Bảng quan hệ được dùng khi con giáp và nhánh ngày của hai người được đặt cạnh nhau. Bảng cho biết với từng con trong mười hai con giáp, những con nào hợp, xung hay bất hòa, và công khai điểm số của mọi mối quan hệ.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Con giáp và nhánh ngày dùng chung một bảng",
        "blocks": [
          {
            "p": "Inyeon-Link đặt nhánh đất của hai người cạnh nhau ở hai nơi: **độ tương hợp con giáp**, xét nhánh của năm sinh, và **độ tương hợp nhánh ngày** (cung vợ), xét nhánh của ngày sinh. Cả hai đều được đánh giá bằng bảng dưới đây; điểm khác biệt duy nhất là mức độ ảnh hưởng của mỗi phần lên điểm số cuối cùng."
          },
          {
            "figure": "branch-wheel",
            "caption": "Xếp mười hai ký tự thành vòng tròn giúp thấy rõ các mối quan hệ chỉ trong một cái nhìn. Một cặp xung luôn nằm đối diện trực tiếp, còn cặp sáu hài hòa và cặp bất hòa yên tĩnh là những người hàng xóm gần hơn. Những đường này không được vẽ tay; chúng được vẽ trực tiếp từ các quy tắc tính toán.",
            "labels": {
              "alt": "Sơ đồ cho thấy mười hai nhánh đất được xếp thành vòng tròn, với các đường nối các cặp sáu hài hòa, xung và bất hòa.",
              "yukhap": "Sáu hài hòa",
              "chung": "Xung",
              "wonjin": "Bất hòa",
              "rat": "Chuột",
              "ox": "Trâu",
              "tiger": "Hổ",
              "rabbit": "Thỏ",
              "dragon": "Rồng",
              "snake": "Rắn",
              "horse": "Ngựa",
              "goat": "Dê",
              "monkey": "Khỉ",
              "rooster": "Gà",
              "dog": "Chó",
              "pig": "Lợn"
            }
          }
        ]
      },
      {
        "title": "Các mối quan hệ của từng con trong mười hai con giáp",
        "blocks": [
          {
            "p": "Với mỗi con giáp, bảng liệt kê những con nào tạo thành từng loại quan hệ với nó. Chỉ những cặp mà dịch vụ này công nhận là hợp mới được liệt kê, nên một con giáp không xuất hiện trong hàng đó thì không có quan hệ đặc biệt nào với nó — đó là **trung lập**."
          },
          {
            "table": {
              "caption": "Bốn loại quan hệ nhìn từ một con giáp",
              "head": [
                "Con giáp của bạn",
                "Cặp hút nhau (Sáu hài hòa)",
                "Nửa tam hợp",
                "Âm thầm lệch nhau (Bất hòa)",
                "Va chạm trực diện (Xung)"
              ],
              "rows": [
                [
                  "Chuột (子)",
                  "Trâu",
                  "Khỉ · Rồng",
                  "Dê",
                  "Ngựa"
                ],
                [
                  "Trâu (丑)",
                  "Chuột",
                  "Gà",
                  "Ngựa",
                  "Dê"
                ],
                [
                  "Hổ (寅)",
                  "Lợn",
                  "Ngựa",
                  "Gà",
                  "Khỉ"
                ],
                [
                  "Thỏ (卯)",
                  "Chó",
                  "Lợn · Dê",
                  "Khỉ",
                  "Gà"
                ],
                [
                  "Rồng (辰)",
                  "Gà",
                  "Chuột",
                  "Lợn",
                  "Chó"
                ],
                [
                  "Rắn (巳)",
                  "Khỉ",
                  "Gà",
                  "Chó",
                  "Lợn"
                ],
                [
                  "Ngựa (午)",
                  "Dê",
                  "Hổ · Chó",
                  "Trâu",
                  "Chuột"
                ],
                [
                  "Dê (未)",
                  "Ngựa",
                  "Thỏ",
                  "Chuột",
                  "Trâu"
                ],
                [
                  "Khỉ (申)",
                  "Rắn",
                  "Chuột",
                  "Thỏ",
                  "Hổ"
                ],
                [
                  "Gà (酉)",
                  "Rồng",
                  "Rắn · Trâu",
                  "Hổ",
                  "Thỏ"
                ],
                [
                  "Chó (戌)",
                  "Thỏ",
                  "Ngựa",
                  "Rắn",
                  "Rồng"
                ],
                [
                  "Lợn (亥)",
                  "Hổ",
                  "Thỏ",
                  "Rồng",
                  "Rắn"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Khi hai người gặp nhau trong bảng",
        "blocks": [
          {
            "p": "Đọc bảng nghĩa là tìm hai con giáp trên cùng một hàng. Sau đây là vài cặp làm ví dụ."
          },
          {
            "ul": [
              "**Chuột và Trâu** — một cặp sáu hài hòa. Chỉ cần hai ký tự nên đây là kiểu hợp xuất hiện nhiều nhất trong xem tương hợp, và là một kiểu hợp tốt.",
              "**Chuột và Rồng** — một nửa tam hợp: hai trong ba ký tự 申子辰, bao gồm ký tự ở giữa (子).",
              "**Chuột và Hổ** — không có trong bảng nên là trung lập: không hợp cũng không xung, chỉ là mức nền.",
              "**Chuột và Dê** — một cặp bất hòa. Bề ngoài có vẻ yên ả, nhưng sự lệch nhịp được tin là kéo dài.",
              "**Hổ và Khỉ** — một cặp xung. Hai bên ngồi đối diện trực tiếp nhau và được coi là va chạm trực diện."
            ]
          }
        ]
      },
      {
        "title": "Mỗi mối quan hệ được bao nhiêu điểm",
        "blocks": [
          {
            "table": {
              "caption": "Từ cao nhất xuống. Đây là các giá trị Inyeon-Link thực sự sử dụng.",
              "head": [
                "Mối quan hệ",
                "Điểm"
              ],
              "rows": [
                [
                  "Sáu hài hòa",
                  "{scoreYukhap}"
                ],
                [
                  "Nửa tam hợp",
                  "{scoreBanhap}"
                ],
                [
                  "Cùng nhánh",
                  "{scoreSame}"
                ],
                [
                  "Trung lập",
                  "{scoreNeutral}"
                ],
                [
                  "Bất hòa",
                  "{scoreWonjin}"
                ],
                [
                  "Xung",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Cùng nhánh (hai người cùng con giáp) nghĩa là giống nhau chứ không phải hút nhau, nên nằm ngay trên mức trung lập. Dù là tương hợp con giáp hay nhánh ngày, giá trị trong bảng này được đưa thẳng vào điểm số cuối cùng."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Vì sao tam hợp đầy đủ không có trong bảng",
        "blocks": [
          {
            "p": "Một tam hợp đầy đủ (申子辰, 巳酉丑, 寅午戌, 亥卯未) cần đủ cả ba ký tự. Khi đặt hai người cạnh nhau chỉ có hai ký tự, nên tam hợp đầy đủ không thể xảy ra trong xem tương hợp và chỉ có nửa tam hợp xuất hiện. Điểm tam hợp đầy đủ là {scoreSamhap} được giữ cho trường hợp ba ký tự cùng có mặt trong lá số của riêng một người."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 và 亥未 không được tính là hợp",
        "blocks": [
          {
            "p": "Một số phương pháp tính hai ký tự bất kỳ trong cùng một nhóm tam hợp là nửa tam hợp. Inyeon-Link không làm vậy: như cột nửa tam hợp ở trên cho thấy, chỉ nhận những cặp có **nhánh vương** ở trung tâm của nhóm (子, 午, 卯, 酉). Một cặp không có nó thì không có trung tâm để cấu trúc quy tụ quanh, nên được coi là trung lập."
          }
        ]
      },
      {
        "title": "Bất hòa và xung không nằm ở đáy",
        "blocks": [
          {
            "p": "Nếu chỉ tính hợp và xung, cả sáu cặp bất hòa sẽ bị chôn vùi trong mức trung lập. Vì vậy bất hòa có chỗ riêng: cao hơn va chạm trực diện và thấp hơn trung lập, ở mức {scoreWonjin} điểm."
          },
          {
            "p": "Ngay cả một cặp xung vẫn giữ {scoreChung} điểm. Trong myeongri truyền thống, xung là một va chạm chứ không phải sự kết thúc của một mối quan hệ. Một giá trị gần bằng không sẽ khiến dịch vụ tuyên một phán quyết về hai con người, nên khoảng điểm được giữ đủ rộng để cho thấy sự khác biệt mà không phán quyết."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Cung hoàng đạo",
    "title": "Tại sao sự tương thích của cung hoàng đạo lại xem xét nhánh năm?",
    "summary": "Cung hoàng đạo là nhánh đất của năm sinh. Điều này giải thích tại sao nó được lấy từ trụ năm của saju thay vì năm dương lịch, và làm rõ ý nghĩa của sự tương thích cung hoàng đạo.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Cung hoàng đạo là nhánh đất của năm sinh",
        "blocks": [
          {
            "p": "Saju bao gồm bốn trụ: năm, tháng, ngày và giờ, với mỗi trụ chứa một thiên can và một địa chi. **Nhánh năm** là nhánh mang con vật mà chúng ta gọi là cung hoàng đạo."
          },
          {
            "table": {
              "caption": "Mười Hai Nhánh Đất và Cung Hoàng Đạo",
              "head": [
                "Nhánh Đất",
                "Cung Hoàng Đạo"
              ],
              "rows": [
                [
                  "子",
                  "Chuột"
                ],
                [
                  "丑",
                  "Trâu"
                ],
                [
                  "寅",
                  "Hổ"
                ],
                [
                  "卯",
                  "Thỏ"
                ],
                [
                  "辰",
                  "Rồng"
                ],
                [
                  "巳",
                  "Rắn"
                ],
                [
                  "午",
                  "Ngựa"
                ],
                [
                  "未",
                  "Dê"
                ],
                [
                  "申",
                  "Khỉ"
                ],
                [
                  "酉",
                  "Gà"
                ],
                [
                  "戌",
                  "Chó"
                ],
                [
                  "亥",
                  "Lợn"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Chúng tôi sử dụng năm của saju, không phải năm dương lịch",
        "blocks": [
          {
            "p": "Thời điểm mà cung hoàng đạo thay đổi không phải là ngày 1 tháng 1 của dương lịch hay Tết Nguyên Đán. Tiêu chuẩn để thay đổi năm trong saju là **Ipchun**. Do đó, những người sinh vào tháng 1 hoặc đầu tháng 2 có thể có năm cung hoàng đạo khác với năm trên lịch."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lý do chúng tôi không hỏi trực tiếp về cung hoàng đạo",
        "blocks": [
          {
            "p": "Đó là lý do tại sao chúng tôi chỉ thu thập ngày sinh mà không hỏi về cung hoàng đạo trên màn hình nhập liệu. Khi động cơ saju tính toán nhánh năm, ranh giới của Ipchun được điều chỉnh tự động. Nếu bạn chọn trực tiếp, người sinh vào đầu tháng 2 có thể chọn một cung hoàng đạo không khớp với cung hoàng đạo thực tế của họ."
          }
        ]
      },
      {
        "title": "Sự tương thích cung hoàng đạo chỉ xem xét một mối quan hệ",
        "blocks": [
          {
            "p": "Việc tính toán sự tương thích cung hoàng đạo rất đơn giản. Nó so sánh các nhánh năm của hai người để xác định liệu mối quan hệ có hài hòa, có xung đột hay có sự bất hòa nhẹ, và sử dụng điểm số đó như vậy. Vì chỉ có một mục, không cần phân phối trọng số."
          },
          {
            "p": "Các điểm số cho mỗi mối quan hệ đều được liệt kê trong [Bảng Quan Hệ Mười Hai Nhánh](/guide/branches). Sự tương thích nhánh ngày sử dụng cùng một bảng."
          }
        ]
      },
      {
        "title": "Lý do xác định trọng số",
        "blocks": [
          {
            "p": "Sự tương thích cung hoàng đạo chiếm {weightZodiac} trong tỷ lệ khớp cuối cùng. Trong khi sự tương thích saju xem xét cả bốn trụ, cung hoàng đạo chỉ xem xét một nhân vật, vì vậy chúng không thể được trọng số như nhau."
          },
          {
            "p": "Tuy nhiên, có hai lý do tại sao nó không bị loại trừ."
          },
          {
            "ul": [
              "**Đó là mục dễ hiểu nhất một cách trực quan**. Ngay cả khi không biết từ vựng của truyền thống, 'hổ và khỉ xung đột' cũng có ý nghĩa.",
              "**Đó là trục duy nhất không thay đổi ngay cả khi thời gian sinh không được biết**. Nếu bạn không biết thời gian, trụ giờ sẽ thiếu và sức mạnh của năm yếu tố sẽ thay đổi, nhưng nhánh năm vẫn giữ nguyên."
            ]
          }
        ]
      },
      {
        "title": "Bạn cũng có thể xem sự tương thích cung hoàng đạo riêng biệt",
        "blocks": [
          {
            "p": "Trên màn hình kết quả, chúng tôi hiển thị điểm số cho cả sự tương thích saju và sự tương thích cung hoàng đạo một cách riêng biệt. Nếu chỉ trình bày tỷ lệ khớp cuối cùng, sẽ không rõ số đó đến từ đâu. Nếu hai giá trị khác nhau đáng kể, điều đó tự nó cũng đáng lưu ý."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Mười Thần",
    "title": "Mười Thần và Vị Trí Vợ Chồng",
    "summary": "Chúng tôi xem xét thiên can của mỗi người đối với nhau thông qua Mười Thần. Chúng tôi giải thích tại sao tài sản trực tiếp và tài sản gián tiếp được đọc khác nhau mặc dù cả hai đều là tài sản.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Căn ngày là chính bản thân người đó",
        "blocks": [
          {
            "p": "Trong tám ký tự của saju, **căn ngày** (căn thiên của ngày sinh) đề cập đến chính bản thân người đó. Bảy ký tự còn lại được đọc như môi trường mà căn ngày đó được đặt vào."
          },
          {
            "p": "**Mười Thần** (十神) phân chia cách mà căn ngày nhận thức các ký tự khác thành mười loại. Điều nuôi dưỡng tôi là **tài nguyên**, điều giống tôi là **bạn bè**, điều tôi sản xuất là **đầu ra**, điều tôi kiểm soát là **tài sản**, và điều kiểm soát tôi là **quyền lực** — mỗi một trong năm điều này sau đó được chia theo tính cực, tạo thành mười."
          }
        ]
      },
      {
        "title": "Căn ngày của mỗi người là gì đối với nhau",
        "blocks": [
          {
            "p": "Đây là mục đầu tiên trong sự tương hợp. Khi xác định được căn ngày của A nhận thức căn ngày của B như thế nào, nhận thức của B về A cũng được xác định, vì vậy chỉ có **sáu khả năng**."
          },
          {
            "table": {
              "caption": "Theo thứ tự điểm số cao nhất",
              "head": [
                "Cặp",
                "Âm/Dương",
                "Tên",
                "Ý nghĩa"
              ],
              "rows": [
                [
                  "Tài sản trực tiếp ↔ Quyền lực trực tiếp",
                  "Tính cực đối lập",
                  "Mối liên kết ấm (有情)",
                  "Đây là cặp đôi truyền thống được xem như vị trí của vợ/chồng. Âm và dương không khớp nhau, thu hút lẫn nhau."
                ],
                [
                  "Sát thương Quan ↔ Tài nguyên trực tiếp",
                  "Tính cực đối lập",
                  "Sát thương Quan mang Ấn (傷官佩印)",
                  "Một bên bao bọc năng lượng mãnh liệt của bên kia."
                ],
                [
                  "Bạn bè ↔ Bạn bè",
                  "Tính cực giống nhau",
                  "Bằng nhau",
                  "Họ giống nhau và bằng nhau, nhưng không thúc đẩy lẫn nhau."
                ],
                [
                  "Đối thủ ↔ Đối thủ",
                  "Tính cực đối lập",
                  "Cạnh tranh",
                  "Họ thu hút lẫn nhau nhưng cạnh tranh cho cùng một vị trí."
                ],
                [
                  "Tài sản gián tiếp ↔ Quyền lực gián tiếp",
                  "Tính cực giống nhau",
                  "Mối liên kết lạnh (無情)",
                  "Sự kích thích rất lớn, nhưng gánh nặng cũng nặng nề."
                ],
                [
                  "Thần ăn ↔ Tài nguyên gián tiếp",
                  "Tính cực giống nhau",
                  "Ngôi sao cú cắp thực phẩm (梟神奪食)",
                  "Năng lượng được cung cấp bị bên đối tác lấy đi, chặn dòng chảy."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Âm và Dương đang ở ngã ba đường",
        "blocks": [
          {
            "p": "Bên mà âm và dương không khớp (Tài sản chính, Quan chính, Bạn đồng hành chính) là cảm xúc, trong khi bên giống nhau (Tài nguyên, Quan, Bạn đồng hành) là không có cảm xúc, đây là nguyên tắc phân biệt giữa chính và bên của Mười Thần."
          }
        ]
      },
      {
        "title": "Lý do xem xét với Mười Thần thay vì ba yếu tố",
        "blocks": [
          {
            "p": "Có một phương pháp xem xét mối quan hệ của căn ngày với ba yếu tố (sinh ra lẫn nhau, giống nhau, vượt qua lẫn nhau). Nó đơn giản, nhưng **âm và dương biến mất.** 甲 (gỗ dương) và 乙 (gỗ âm) trở thành cùng một 'sự giống nhau' như 甲 và 甲, và sự vượt qua lẫn nhau bị nghiền nát thành một điểm số duy nhất mà không có hướng đi hoặc âm và dương."
          },
          {
            "p": "Vị trí vợ/chồng phải được đánh giá theo Mười Thần. Nếu các mục được xem xét bởi năm yếu tố và các mục được xem xét bởi Mười Thần được trộn lẫn trong một động cơ, sẽ có hai tiêu chuẩn cho cùng hai ký tự. Do đó, chúng tôi thống nhất với Mười Thần."
          }
        ]
      },
      {
        "title": "Vị trí vợ/chồng là Tài sản chính và Quan chính",
        "blocks": [
          {
            "p": "Trong truyền thống, Mười Thần nào đại diện cho vợ/chồng khác nhau theo giới tính."
          },
          {
            "table": {
              "head": [
                "Giới tính",
                "Vị trí Vợ/chồng",
                "Vị trí Tương ứng"
              ],
              "rows": [
                [
                  "Nam",
                  "Tài sản trực tiếp (正財)",
                  "Tài sản gián tiếp (偏財)"
                ],
                [
                  "Nữ",
                  "Quyền lực trực tiếp (正官)",
                  "Quyền lực gián tiếp (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Ngay cả khi chúng là cùng một tài nguyên, chỉ có **Tài sản Chính** cảm xúc được coi là vị trí của vợ/chồng, trong khi Tài nguyên được đọc như bản chất của hoạt động và tài sản. Do đó, Tài sản Chính và Quan Chính tính là 2 điểm, trong khi Tài nguyên và Quan tính là 1 điểm, và cả hai hướng được cộng lại — nếu cả hai được coi là vị trí vợ/chồng, đó là cao nhất."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nếu giới tính không được tiết lộ, hãy bỏ qua mục này",
        "blocks": [
          {
            "p": "Nếu một mục không thể quyết định được đặt thành 0 điểm, điều đó dẫn đến một điểm số không công bằng. Trọng số còn lại sau khi bỏ qua mục đó được chuẩn hóa lại [(mục và trọng số)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Chúng tôi cũng cho thấy hình dạng của mối quan hệ",
        "blocks": [
          {
            "p": "Ngoài điểm số, chúng tôi mô tả **hình dạng** mà cặp ngày chi có trên màn hình kết quả. Liệu chúng có vị trí tương tự, liệu một bên hỗ trợ bên kia, hay liệu một bên bị áp chế — nếu đó là mối quan hệ hỗ trợ hoặc áp chế, chúng tôi làm rõ bên nào giữ vị trí đó."
          },
          {
            "p": "Nếu chỉ có một điểm số được trình bày, nó để lại câu hỏi 'vậy thì sao'. Hình dạng không phải là một điểm số mà là điều để đọc, và ngay cả những cặp có điểm số thấp cũng có điều gì đó để diễn giải."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Ngũ hành",
    "title": "Yếu tố hỗ trợ — Năng lượng cần thiết ngay bây giờ",
    "summary": "Chúng tôi xem ngũ hành không phải là 'họ có chọn hai không' mà là 'đối tác có những gì tôi cần không'. Chúng tôi cũng tiết lộ giá trị ranh giới phân biệt giữa một ngày chủ mạnh và một ngày chủ yếu.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Liệu ngũ hành có 'cân bằng' hay không không phải là câu hỏi về sự tương thích",
        "blocks": [
          {
            "p": "Có một phương pháp để đo lường liệu năm năng lượng có được phân bổ đều hay không bằng cách kết hợp ngũ hành của hai người. Tuy nhiên, câu hỏi về sự tương thích không phải là điều đó. **Đối tác có những gì tôi cần không?**"
          },
          {
            "p": "Mức độ cân bằng là đối xứng, nhưng tính bổ sung thì vốn dĩ không đối xứng. Điều này là vì những gì A cần khác với những gì B cần. Do đó, chúng tôi đo lường từng bên riêng biệt và trung bình — vì đây là một trung bình, tổng điểm vẫn giữ tính đối xứng."
          }
        ]
      },
      {
        "title": "Yếu tố hỗ trợ — Giảm nếu quá mức, thêm nếu không đủ",
        "blocks": [
          {
            "p": "Yếu tố hỗ trợ (用神) là 'năng lượng mà người này cần ngay bây giờ'. Có một số phương pháp để xác định nó (áp chế, hỗ trợ, bệnh tật và giao tiếp), nhưng nó có thể được dịch thành các quy tắc, và phương pháp được sử dụng rộng rãi nhất là **áp chế (抑扶)**. Nếu ngày chủ mạnh, người ta thấy rằng cần năng lượng để giảm, và nếu yếu, cần năng lượng để thêm."
          },
          {
            "table": {
              "head": [
                "Phán đoán",
                "Những gì cần thiết",
                "Số lượng"
              ],
              "rows": [
                [
                  "Ngày chủ mạnh (身强)",
                  "Giảm năng lượng — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Ba"
                ],
                [
                  "Ngày chủ yếu (身弱)",
                  "Thêm năng lượng — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Hai"
                ],
                [
                  "Cân bằng (中和)",
                  "Không thể được bao phủ bởi yếu tố hỗ trợ, vì vậy đây là năng lượng mỏng nhất",
                  "Hai"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Giá trị ngưỡng cho sức mạnh và yếu",
        "blocks": [
          {
            "p": "Bên ngày chi là **印星 và 比劫** — năng lượng sinh ra tôi và năng lượng giống như tôi. Vì hai trong số năm, nếu năng lượng hoàn toàn cân bằng, nó trở thành {evenAllyRatio}. Một khoảng giá trị được thiết lập trên và dưới giá trị đó."
          },
          {
            "table": {
              "caption": "Tỷ lệ đồng minh (印星 + 比劫) trong tổng sức mạnh",
              "head": [
                "Tỷ lệ",
                "Phán đoán"
              ],
              "rows": [
                [
                  "{strongThreshold} hoặc hơn",
                  "Ngày chủ mạnh"
                ],
                [
                  "{weakThreshold} hoặc hơn và ít hơn {strongThreshold}",
                  "Cân bằng"
                ],
                [
                  "Ít hơn {weakThreshold}",
                  "Ngày chủ yếu"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cân bằng là một 'phán đoán ít chắc chắn hơn'",
        "blocks": [
          {
            "p": "Cân bằng có nghĩa là nó không thể được bao phủ bởi yếu tố hỗ trợ. Lúc này, chúng tôi đơn giản xem hai năng lượng mỏng nhất là cần thiết. Trên màn hình kết quả, nó được ghi chú là 'hiện tại ở vị trí mỏng' thay vì một tuyên bố chắc chắn."
          }
        ]
      },
      {
        "title": "Sức mạnh không phải là số lượng ký tự",
        "blocks": [
          {
            "p": "Khi đếm sức mạnh của ngũ hành, chúng tôi không chỉ đơn giản đếm tám ký tự như chúng xuất hiện. Chúng tôi sử dụng một giá trị phản ánh các thiên can ẩn (地藏干) bên trong các nhánh đất và mùa của năng lượng của tháng (月令) mà một người được sinh ra."
          },
          {
            "p": "Nếu chúng tôi chỉ đếm các ký tự bề mặt, chúng tôi bỏ lỡ thực tế rằng ngay cả hai ký tự của 木 cũng có thể có sức mạnh hoàn toàn khác nhau tùy thuộc vào mùa. 木 của mùa xuân và 木 của mùa thu, mặc dù chúng là cùng một ký tự, có sức mạnh khác nhau."
          }
        ]
      },
      {
        "title": "Chấm điểm mức độ lấp đầy",
        "blocks": [
          {
            "p": "Chúng tôi xem xét tỷ lệ của yếu tố hỗ trợ của tôi trong sức mạnh của đối thủ. Tuy nhiên, chúng tôi không sử dụng tỷ lệ đó trực tiếp mà **chia kỳ vọng cho kích thước của yếu tố hỗ trợ.** Khi mạnh, yếu tố hỗ trợ là ba (kỳ vọng 60%), và khi yếu, nó là hai (kỳ vọng 40%), vì vậy việc sử dụng tỷ lệ trực tiếp có nghĩa là một người mạnh luôn nhận được điểm số cao hơn."
          },
          {
            "p": "Nếu lấp đầy đến mức kỳ vọng, một điểm số gần 78 điểm được đạt được, và nếu lấp đầy nhiều hơn, nó đạt 100 điểm, trong khi nếu thiếu hụt đáng kể, nó hướng tới 55 điểm. Ở đây, cũng vậy, đáy không được đặt ở 0."
          }
        ]
      },
      {
        "title": "Đây là một phán đoán sơ bộ",
        "blocks": [
          {
            "p": "Phân tích saju thực tế xem xét sự hình thành và khí hậu theo mùa (nhiệt độ và độ ẩm của mùa) để xác định yếu tố hỗ trợ, và các kết luận có thể thay đổi tùy thuộc vào phương pháp được sử dụng. Inyeon-Link chỉ sử dụng các yếu tố hỗ trợ có thể được đo bằng **giá trị sức mạnh.** Điều này là do nguyên tắc chỉ sử dụng những gì có thể được dịch thành quy tắc, vì vậy cùng một đầu vào sẽ luôn cho ra cùng một câu trả lời."
          },
          {
            "p": "Thay vào đó, màn hình kết quả cũng trình bày sức mạnh và yếu của mỗi người cùng với năng lượng cần thiết hiện tại như **tài liệu đọc.** Điều này nhằm tránh việc che giấu cơ sở của điểm số."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Tiêu chuẩn của chúng tôi",
    "title": "Inyeon’s Match — Lý do không cung cấp điểm tổng",
    "summary": "Chúng tôi chỉ lấy dữ liệu của một người trong khi để vị trí của đối thủ trống và thay thế tất cả các giá trị có thể vào vị trí đó. Chúng tôi giải thích lý do không gán điểm tổng cho loại thu được theo cách này.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Các phép tính được thực hiện trong khi để vị trí của đối thủ trống",
        "blocks": [
          {
            "p": "Điểm tương thích được tính toán bằng cách ghép hai người lại với nhau. **Inyeon’s Match** chỉ lấy dữ liệu của một người trong khi để vị trí của đối thủ trống và kiểm tra tất cả các giá trị có thể mà có thể vào vị trí đó. Nó giống như chạy động cơ tương thích theo chiều ngược lại."
          },
          {
            "p": "Do đó, không cần biết ngày sinh của đối thủ. Chúng tôi vẫn có thể nói, 'Loại hồ sơ kết hợp nào phù hợp với tôi?' về một người mà chúng tôi chưa gặp."
          }
        ]
      },
      {
        "title": "Chúng tôi không chạy hàng triệu sự kết hợp",
        "blocks": [
          {
            "p": "Điểm tương thích trong saju bao gồm bốn mục, và **mỗi mục không chồng chéo lên nhau trong những gì nó kiểm tra.**"
          },
          {
            "table": {
              "head": [
                "Mục",
                "Trục kiểm tra là gì",
                "Số trường hợp"
              ],
              "rows": [
                [
                  "Mối quan hệ giữa ngày can · Tính chất vợ chồng",
                  "Các ngày can của cả hai người — thiên can",
                  "10"
                ],
                [
                  "Ngũ hành bổ sung",
                  "Yếu tố hỗ trợ của tôi và sức mạnh ngũ hành của đối thủ",
                  "5"
                ],
                [
                  "Mối quan hệ giữa ngày chi",
                  "các ngày chi của hai người",
                  "12"
                ],
                [
                  "Mối quan hệ giữa các con giáp",
                  "các năm chi của hai người",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Vì các giá trị không trao đổi giữa các mục, **tìm điểm cao nhất cho mỗi nhánh sẽ là điểm cao nhất tổng thể.** Không cần kiểm tra tất cả các sự kết hợp của ngày sinh — chỉ cần thiết lập mười thiên can, mười hai địa chi và năm yếu tố là đủ."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Các quy tắc tương tự áp dụng",
        "blocks": [
          {
            "p": "Các điểm được viết ở đây được lấy trực tiếp từ động cơ tương thích. Vì không có quy tắc mới nào được tạo ra, loại xuất hiện ở đây cũng sẽ có điểm cao nhất cho mục đó trong tương thích thực tế. Nếu các quy tắc tương thích thay đổi, màn hình này cũng sẽ theo đó."
          }
        ]
      },
      {
        "title": "Không cung cấp điểm tổng",
        "blocks": [
          {
            "p": "Đây là quyết định quan trọng nhất trên màn hình này. Việc thu thập các điểm cao nhất cho mỗi nhánh có thể có vẻ tạo ra một 'sự kết hợp hoàn hảo', nhưng người đó có thể **không thực sự tồn tại.**"
          },
          {
            "p": "Trong thực tế, ngày chủ và ngũ hành không hoạt động riêng biệt. Một người có 甲木 thường có năng lượng 木 mạnh mẽ. Phương pháp này tính toán các nhánh riêng biệt bỏ qua mối tương quan đó, vì vậy giá trị thu được bằng cách kết nối các điểm cao nhất cho mỗi nhánh trở thành một sự kết hợp không tồn tại trong thực tế."
          },
          {
            "p": "Do đó, màn hình chỉ hiển thị **điểm mục** và không cung cấp điểm tổng. Điểm tổng sẽ được tính toán bằng cách nhận ngày sinh của người khác cho [tương thích saju](/compatibility)."
          }
        ]
      },
      {
        "title": "Cách đọc 'các loại kết hợp'",
        "blocks": [
          {
            "p": "Kết quả có nghĩa là 'nếu bạn gặp một người thuộc loại này, mục này sẽ có điểm cao'. Đây không phải là tiêu chí để chọn một người, mà là một cách để đọc từ một góc độ hiểu biết về bản thân."
          },
          {
            "p": "Các lý do tại sao một số loại có điểm cao cũng được ghi chú từng mục — liệu ngày chủ có ở vị trí thuận lợi hay không, hoặc liệu người đó có sở hữu năng lượng mà tôi hiện cần."
          }
        ]
      },
      {
        "title": "Công cụ xác nhận",
        "blocks": [
          {
            "p": "Bạn có thể thắc mắc liệu người mà bạn đang nghĩ đến có tương ứng với loại đó hay không. Bằng cách nhập ngày sinh của họ vào công cụ xác nhận trên màn hình kết quả, bạn sẽ được thông báo về ngày chủ, ngày chi và năm chi của họ. Các giá trị nhập vào không được lưu lại vào thời điểm này [(không được lưu)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Giờ sinh",
    "title": "Giờ sinh của mỗi người được hiệu chỉnh riêng",
    "summary": "Tương hợp tính giờ của hai người riêng biệt. Phần này giải thích cách hiệu chỉnh được áp dụng khi nơi sinh và thời đại khác nhau, và điều gì thay đổi khi chỉ một trong hai người không biết giờ sinh.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Đồng hồ và mặt trời không khớp nhau",
        "blocks": [
          {
            "p": "Trong saju, giờ sinh được đọc theo vị trí của mặt trời chứ không theo đồng hồ. Nhưng cả một quốc gia dùng một múi giờ chuẩn, nên đồng hồ và mặt trời của từng nơi bị lệch nhau."
          },
          {
            "p": "Giờ chuẩn của Hàn Quốc dựa trên kinh tuyến 135°E, trong khi Seoul nằm ở khoảng 127°E. Mặt trời ở Seoul lên điểm cao nhất muộn hơn đồng hồ chỉ khoảng **32 phút**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 phút có thể làm trụ giờ dịch một bước",
        "blocks": [
          {
            "p": "Người sinh ở Seoul lúc 11:40 theo đồng hồ thì sinh lúc 11:08 theo giờ mặt trời thực, vẫn nằm trong giờ Ngọ (午, 11:00–13:00). Sinh lúc 11:20 theo đồng hồ thì sinh lúc 10:48, rơi vào giờ Tỵ (巳, 9:00–11:00). Việc hiệu chỉnh tồn tại cho những người đứng đúng ở ranh giới như vậy."
          }
        ]
      },
      {
        "title": "Việc hiệu chỉnh được áp dụng riêng cho từng người",
        "blocks": [
          {
            "p": "Tương hợp dựng lá số của từng người riêng. Đó là lý do màn hình nhập yêu cầu nơi sinh **cho từng người**. Nếu một người sinh ở Seoul và người kia sinh ở nước ngoài, giờ của họ được hiệu chỉnh riêng, với kinh độ và múi giờ khác nhau."
          },
          {
            "p": "Danh sách thành phố hiện có {cityCount} địa điểm. Với những quốc gia có kinh độ trải rộng, các thành phố được tách ra, vì **15° kinh độ làm trụ giờ dịch một bước**."
          },
          {
            "p": "Nếu bạn không chọn, Seoul sẽ được dùng. Nếu chỉ một người sinh ở nước ngoài và cả hai đều để Seoul, thì chỉ trụ giờ của người sinh ở nước ngoài bị lệch; giá trị của người kia không bị ảnh hưởng, vì việc hiệu chỉnh được áp dụng theo từng người."
          }
        ]
      },
      {
        "title": "Các thời đại khác nhau dùng giờ chuẩn khác nhau",
        "blocks": [
          {
            "p": "Hai người ở độ tuổi khác nhau đã sống dưới giờ chuẩn của những thời kỳ khác nhau. Vì vậy chỉ riêng chênh lệch kinh độ là chưa đủ."
          },
          {
            "ul": [
              "**Trước năm 1912** — Hàn Quốc chưa có giờ chuẩn thống nhất (giờ trung bình địa phương).",
              "**1954–1961** — giờ chuẩn là UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — có áp dụng giờ mùa hè."
            ]
          },
          {
            "p": "Inyeon-Link không gán cứng một kinh tuyến chuẩn. Dịch vụ tra **múi giờ IANA** của nơi sinh để tìm giờ chuẩn thực sự được dùng vào thời điểm đó, nên thời đại của từng người được áp dụng ngay cả khi năm sinh khác nhau."
          }
        ]
      },
      {
        "title": "Ngay sau nửa đêm, thiên can của ngày thay đổi",
        "blocks": [
          {
            "p": "Mức hiệu chỉnh là −32 phút, nên người sinh trong khoảng 00:00 đến 00:32 theo đồng hồ thì sinh vào **giờ 23:00 của ngày hôm trước** theo giờ mặt trời thực. Ngày cũng được lùi theo."
          },
          {
            "p": "Trong xem tương hợp điều này rất quan trọng. Khi trụ ngày lùi một ngày, cả thiên can ngày và nhánh ngày đều đổi, nên quan hệ thiên can ngày, Sao Vợ và quan hệ nhánh ngày đều được tính lại với các ký tự khác, và sức mạnh ngũ hành cũng dịch chuyển theo."
          }
        ]
      },
      {
        "title": "Không sao nếu chỉ một người không biết giờ sinh",
        "blocks": [
          {
            "p": "Giờ sinh là tùy chọn, và tương hợp vẫn được tính nếu chỉ một trong hai người không biết. Chỉ người không biết được tính mà không có trụ giờ, và màn hình kết quả sẽ nói rõ điều đó. Giá trị của người kia giữ nguyên."
          },
          {
            "p": "Không mục nào trong bốn mục tương hợp dùng trực tiếp trụ giờ, nhưng nó ảnh hưởng đến sức mạnh ngũ hành, nên nhập vào sẽ chính xác hơn nếu bạn biết. Tương hợp con giáp cho cùng một giá trị dù có giờ hay không — [chỉ xét nhánh năm](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Quyền riêng tư",
    "title": "Cách chúng tôi tránh lưu thông tin của hai người",
    "summary": "Tương hợp yêu cầu bạn nhập cả ngày sinh của một người khác. Phần này giải thích, về mặt kỹ thuật, việc dữ liệu nhập của cả hai người không được ghi lại ở đâu cả có nghĩa là gì, và liên kết kết quả mang theo những gì.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Bạn đang nhập thông tin của người khác",
        "blocks": [
          {
            "p": "Màn hình tương hợp nhận cùng lúc ngày sinh của bạn và của người kia. Ngày sinh của người kia là thông tin cá nhân của họ, nên chúng tôi nêu riêng cách Inyeon-Link xử lý cả hai."
          },
          {
            "p": "Không có tài khoản, và chúng tôi không hỏi tên, địa chỉ email hay số điện thoại. Chúng tôi chỉ nhận hai ngày sinh và, tùy chọn, giờ sinh, nơi sinh và giới tính, và không có gì trong đó còn lại sau khi phép tính kết thúc."
          },
          {
            "p": "Có một ô để nhập tên hiển thị trên màn hình kết quả, nhưng nó chỉ để hiển thị và không được dùng trong phép tính. Bạn không cần nhập tên thật."
          }
        ]
      },
      {
        "title": "Một liên kết kết quả chứa cả hai ngày sinh",
        "blocks": [
          {
            "p": "Khi phép tính xong, địa chỉ trông như thế này."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Phần sau dấu **#** chứa dữ liệu nhập của hai người. Nó được gọi là fragment, và theo hành vi chuẩn của web, **trình duyệt không gửi nó đến máy chủ**. Nó được thiết kế để trỏ đến một vị trí trong tài liệu, nên máy chủ không bao giờ thấy nó."
          },
          {
            "p": "Khi bạn mở một liên kết kết quả, trình duyệt đọc giá trị đó và yêu cầu một phép tính; máy chủ nhận các giá trị cần thiết, trả về đáp án và quên chúng đi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Trước khi gửi liên kết cho người kia",
        "blocks": [
          {
            "p": "Không được lưu trên máy chủ không đồng nghĩa với việc liên kết là bí mật. Ai nhận được liên kết đều thấy nguyên vẹn cả hai ngày sinh, và một liên kết để lại trong phòng chat vẫn nằm trong phòng chat đó bất kể máy chủ của chúng tôi. Hãy gửi nó với ý thức rằng nó chứa thông tin của người kia."
          }
        ]
      },
      {
        "title": "Vì sao không còn gì lại dù phép tính chạy trên máy chủ",
        "blocks": [
          {
            "p": "Để dựng lá số saju chúng tôi cần một bảng lịch vạn niên, quá lớn để gửi xuống trình duyệt, nên phép tính chạy trên máy chủ. Nhưng **sau khi yêu cầu được xử lý xong, các giá trị không được dùng ở bất kỳ nơi nào khác.** Không có đoạn mã nào ghi chúng vào cơ sở dữ liệu."
          },
          {
            "p": "Bản ghi duy nhất còn lại là một bộ đếm ngăn một người gửi quá nhiều yêu cầu trong thời gian ngắn. Nó không chứa ngày sinh nào và không giữ nguyên địa chỉ IP; nó đếm một giá trị duy nhất, được băm cùng với ngày, và giá trị đó đổi khi sang ngày mới."
          }
        ]
      },
      {
        "title": "Những gì chúng tôi từ bỏ khi không lưu",
        "blocks": [
          {
            "p": "Vì không lưu gì cả, chúng tôi đã từ bỏ một vài thứ."
          },
          {
            "ul": [
              "**Bạn không thể lấy lại kết quả tương hợp cũ.** Bạn cần giữ liên kết để xem lại.",
              "**Cùng hai người được tính lại mỗi lần.** Không có bộ nhớ đệm. Nhưng mọi quy tắc đều xác định, nên [cùng một dữ liệu nhập luôn cho cùng một giá trị](/guide/how-compatibility).",
              "**Tải lại trang sẽ đưa cổng quảng cáo trở lại.** Không có nơi nào để giữ bản ghi rằng bạn đã xem."
            ]
          }
        ]
      },
      {
        "title": "Nếu bạn mua báo cáo",
        "blocks": [
          {
            "p": "Nếu bạn mua báo cáo, một bản ghi giao dịch được giữ lại vào lúc đó: hồ sơ thanh toán có thời hạn lưu giữ theo quy định pháp luật, và không có lịch sử đơn hàng thì không thể xử lý hoàn tiền. Ngay cả khi đó, **hai ngày sinh không được gắn vào đơn hàng**; chúng được hỏi lại khi tạo PDF sau khi xác nhận thanh toán, và chỉ được dùng vào đúng lúc đó."
          },
          {
            "p": "Chi tiết có trong [chính sách quyền riêng tư](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Sản phẩm trả phí",
    "title": "Những gì được bao gồm trong báo cáo trả phí?",
    "summary": "Điều này giải thích những gì đã được thêm vào PDF trong khi giữ nguyên màn hình, từng mục một. Các giá trị và nội dung được đọc từ các cài đặt sản phẩm thực tế.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Màn hình vẫn không thay đổi, chỉ thêm vào PDF",
        "blocks": [
          {
            "p": "Các phép tính tương thích và yêu cầu kết quả là **miễn phí**. Tỷ lệ khớp, điểm và trọng số của các mục, các biểu đồ saju gốc của cả hai cá nhân, và hình dạng của mối quan hệ đều có thể được xem trên màn hình. Không có gì bị xóa khỏi màn hình trong khi tạo báo cáo trả phí."
          },
          {
            "p": "Mục đích của báo cáo là **thêm các lớp không có trên màn hình**. Và lớp đó không phải là giả tạo; nó bao gồm các giá trị đã được tính toán trong quá trình chấm điểm nhưng không được sử dụng trên màn hình."
          }
        ]
      },
      {
        "title": "Báo cáo Tương thích Saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Thanh toán trong nước {priceGunghapDomestic} (bao gồm VAT), thanh toán quốc tế {priceGunghapGlobal}. A4 {pagesGunghap} trang."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Các trang 1-3 được tổ chức để giữ những gì hiển thị trên màn hình** và **từ trang 4 trở đi là nội dung không hiển thị trên màn hình**. Dưới đây, nó giải thích lý do tại sao một số điều không được hiển thị trên màn hình."
          }
        ]
      },
      {
        "title": "Trang 4 — Hướng của hai năng lượng",
        "blocks": [
          {
            "p": "Các mục của **ngũ hành** trên màn hình được trình bày như một điểm số duy nhất. Tuy nhiên, điểm số duy nhất đó là **trung bình của hai hướng** — đo lường mức độ mà bên kia lấp đầy tôi và mức độ tôi lấp đầy bên kia, và trung bình các giá trị đó."
          },
          {
            "p": "Sự bổ sung vốn có là **mất cân bằng**. Điều này là do các năng lượng cần thiết cho tôi và các năng lượng cần thiết cho bên kia là khác nhau. Nếu bạn chỉ nhìn vào trung bình, một mối quan hệ mà một bên lấp đầy bên kia một cách đáng kể và một mối quan hệ mà cả hai lấp đầy nhau đều sẽ xuất hiện với cùng một số. Báo cáo phân tách hai điều đó."
          },
          {
            "p": "Cũng được bao gồm trong cùng một phần là **biểu đồ mối quan hệ của bốn trụ cột**. Chỉ có một cái đi vào tỷ lệ khớp là **nhánh ngày** (日支) — vì nó là vị trí của vợ/chồng — nhưng các nhánh năm, tháng và giờ khác cũng có thể được đọc với cùng một biểu đồ mối quan hệ."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Các điểm số trong bảng này không đi vào tỷ lệ khớp",
        "blocks": [
          {
            "p": "Nếu được bao gồm, tổng điểm sẽ thay đổi và sẽ không khớp với liên kết kết quả đã gửi. Do đó, nó chỉ được bao gồm như tài liệu đọc, và điều đó được ghi chú dưới bảng."
          }
        ]
      },
      {
        "title": "Trang 5 — Xem xét kỹ lưỡng saju của từng người",
        "blocks": [
          {
            "p": "Các thanh của **ngũ hành** trên màn hình cho thấy **mức độ hiện diện**. Báo cáo thêm **liệu tháng sinh có hỗ trợ năng lượng đó hay không**. Ngay cả với cùng một lượng, năng lượng mạnh (旺) và năng lượng chết (死) có sức mạnh khác nhau."
          },
          {
            "p": "Bạn có thể thấy các lực trước và sau khi nhân với năng lượng của tháng bên cạnh nhau, cho thấy mức độ mà mùa đã đẩy nó lên. Tỷ lệ **đồng minh** phân biệt giữa **ngày chủ mạnh** và **ngày chủ yếu** cũng được ghi chú — màn hình chỉ hiển thị phán đoán, nhưng báo cáo cho thấy nơi mà phán đoán đó được thực hiện."
          }
        ]
      },
      {
        "title": "Trang 6 — Những gì bốn trụ cột của người khác có nghĩa với tôi",
        "blocks": [
          {
            "p": "Tỷ lệ khớp chỉ so sánh **ngày can** của cả hai cá nhân. Tuy nhiên, ba cột còn lại của người kia cũng được xác định bởi **Mười vị thần** theo cùng một quy tắc. Trong khi bạn có thể hiểu **người này có ý nghĩa gì với tôi** chỉ bằng cách nhìn vào ngày can, bạn không thể biết **vị trí của người đó có ý nghĩa gì với tôi**."
          },
          {
            "p": "Vì có các hướng, cả hai bên được trình bày riêng biệt. Những gì tôi thấy và những gì bên kia thấy là khác nhau."
          }
        ]
      },
      {
        "title": "Trang 7 — Cách saju này được tính toán",
        "blocks": [
          {
            "p": "Nó cho biết thời gian sinh đã được điều chỉnh bao nhiêu so với **thời gian mặt trời thực** , liệu việc điều chỉnh có làm thay đổi ngày hay không, và ngày dương lịch cũng như âm lịch là gì khi saju được tạo ra. Khái niệm này được giải thích trong tài liệu [Điều chỉnh thời gian sinh đến thời gian mặt trời thực](/guide/true-solar-time), nhưng **giá trị của số phút đã được điều chỉnh trong trường hợp của bạn** khác nhau giữa các cá nhân, vì vậy nó chỉ được bao gồm trong báo cáo."
          }
        ]
      },
      {
        "title": "Báo cáo hồ sơ khớp Inyeon — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Thanh toán trong nước {priceAffinityDomestic} (bao gồm VAT), thanh toán quốc tế {priceAffinityGlobal}. {pagesAffinity} trang A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Phần này là **bảng xếp hạng tổng thể**. Màn hình chỉ hiển thị các bộ khớp tốt, nhưng báo cáo xếp hạng tất cả mười **thiên can** và mười hai **địa chi** **hoàn toàn**. Nếu bạn chỉ nhìn vào các bộ hàng đầu, bạn sẽ không biết 'ai đến tiếp theo' và 'cái nào là ít tương thích nhất'."
          }
        ]
      },
      {
        "title": "Những điều cần biết trước khi mua",
        "blocks": [
          {
            "p": "**Máy chủ không lưu trữ tệp.** Khi thanh toán được phê duyệt, tài liệu được tạo ra và gửi ngay lập tức, không để lại gì trên máy chủ. Nguyên tắc của dịch vụ này là không lưu trữ các giá trị đầu vào vẫn được duy trì ngay cả trong quy trình thanh toán."
          },
          {
            "p": "Vì vậy, **vui lòng lưu tệp ngay sau khi thanh toán.** Bạn có thể nhận cùng một đơn hàng lên đến năm lần, nhưng nếu bạn rời khỏi màn hình kết quả và các giá trị đầu vào biến mất, bạn không thể tái tạo lại nó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Báo cáo cũng là tài liệu tham khảo",
        "blocks": [
          {
            "p": "Chỉ vì độ dài đã tăng lên không có nghĩa là kết luận chắc chắn hơn. Những gì báo cáo chứa nhiều hơn là **cơ sở của cùng một phép tính**, không phải một khẳng định mạnh mẽ hơn. Đọc vận mệnh là một lĩnh vực mà các kết luận có thể khác nhau tùy thuộc vào người thực hành, và dịch vụ này chỉ tính toán những gì có thể được dịch thành quy tắc."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Thông báo",
    "title": "Thông báo",
    "summary": "Đây là nơi để thông báo về những thay đổi ảnh hưởng đến việc sử dụng.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": []
  },
  "contact": {
    "eyebrow": "Liên hệ",
    "title": "Yêu cầu",
    "summary": "Đây là kênh để yêu cầu về việc sử dụng, hoàn tiền, yêu cầu thông tin cá nhân và báo cáo lỗi, cùng với thông tin doanh nghiệp.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": [
      {
        "title": "Liên hệ qua Email",
        "blocks": [
          {
            "p": "Vui lòng gửi yêu cầu đến **{email}**. Chúng tôi sẽ phản hồi trong vòng 2 ngày làm việc. Đối với yêu cầu thanh toán và hoàn tiền, vui lòng bao gồm **số đơn hàng hoặc email đã sử dụng để thanh toán** để xác nhận nhanh hơn."
          },
          {
            "p": "Yêu cầu qua điện thoại có thể được thực hiện tại {customerCenter}."
          }
        ]
      },
      {
        "title": "Những gì có thể được gửi đến kênh này?",
        "blocks": [
          {
            "ul": [
              "**Thanh toán và Hoàn tiền** — Nếu tài liệu không được tạo ra hoặc số tiền thanh toán khác với đơn hàng, sẽ được hoàn tiền đầy đủ. Điều kiện có trong [chính sách hoàn tiền](/refund-policy).",
              "**Thông tin cá nhân** — Chúng tôi chấp nhận yêu cầu xem, chỉnh sửa và xóa. Chính sách xử lý có trong [chính sách bảo mật](/privacy).",
              "**Báo cáo Lỗi Tính toán** — Nếu biểu đồ gốc saju hoặc điểm số có vẻ lạ, vui lòng cho chúng tôi biết. Nếu bạn bao gồm thời gian và ngày bạn đã nhập, chúng tôi có thể tính toán lại với cùng một giá trị."
            ]
          }
        ]
      },
      {
        "title": "Thông tin Doanh nghiệp",
        "blocks": [
          {
            "ul": [
              "**Tên Doanh Nghiệp** — {companyName}",
              "**Người đại diện** — {representative}",
              "**Số Đăng Ký Doanh Nghiệp** — {businessNumber}",
              "**Số Đăng Ký Kinh Doanh Bán Hàng Qua Bưu Điện** — {mailOrderNumber}",
              "**Địa chỉ** — {address}",
              "**Trung Tâm Khách Hàng** — {customerCenter}",
              "**Email** — {email}",
              "**Nhân viên Bảo vệ Thông tin Cá nhân** — {privacyOfficer}",
              "**Nhà cung cấp Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bạn không cần bao gồm ngày và giờ sinh của mình trong email yêu cầu. Chúng tôi không lưu trữ đầu vào, vì vậy chúng tôi không thể lấy lại chúng, và số đơn hàng là đủ để xác nhận. Vui lòng chỉ bao gồm nó nếu cần thiết cho báo cáo lỗi tính toán."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const VI_NOTICES = {
  "kindLabels": {
    "service": "Dịch vụ",
    "product": "Báo cáo",
    "engine": "Tính toán",
    "support": "Hỗ trợ"
  },
  "intro": "Các thay đổi về điều khoản sử dụng của bạn — giá cả, chính sách — được đăng ở đây trước khi có hiệu lực. Các cải tiến nội bộ không được liệt kê: những gì xuất hiện ở đây là những gì bạn cần biết.",
  "empty": {
    "title": "Chưa có thông báo nào",
    "body": "Khi có điều gì thay đổi, nó sẽ xuất hiện ở đây."
  },
  "effective": "Có hiệu lực từ {date}",
  "pager": {
    "label": "Các trang thông báo",
    "newer": "← Mới hơn",
    "older": "Cũ hơn →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Trang Liên hệ và Giới thiệu đã mở",
      "body": [
        "Các câu hỏi, hoàn tiền, yêu cầu về quyền riêng tư và báo cáo lỗi tính toán giờ đây có một nơi để gửi — xem trang liên hệ ở chân trang.",
        "Nếu có điều gì đó trông như bị tính toán sai, vui lòng bao gồm thông tin sinh mà đã tạo ra nó. Chúng tôi không lưu trữ những gì bạn nhập, vì vậy nếu không có chúng, chúng tôi không thể tái tạo lại việc đọc."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Báo cáo được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer",
      "body": [
        "Nếu bạn đang đọc bằng tiếng Ả Rập hoặc Khmer, báo cáo PDF bạn mua được sản xuất bằng tiếng Anh. Công cụ định dạng tài liệu của chúng tôi hiện chưa thể đặt đoạn văn bằng các chữ viết đó.",
        "Màn hình vẫn ở ngôn ngữ của bạn, và tên của bạn được in bằng chữ viết của bạn trong báo cáo.",
        "Ghi chú tương tự xuất hiện trước khi thanh toán. Khi công cụ hỗ trợ các chữ viết này, chúng tôi sẽ thông báo ở đây."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Mỗi lần đọc đều mang phiên bản của các quy tắc được sử dụng",
      "body": [
        "Mỗi lần đọc và báo cáo đều mang bộ quy tắc được sử dụng để sản xuất nó (ví dụ inyeonlink-match-v10). Cùng một đầu vào trên cùng một bộ quy tắc luôn cho ra cùng một số.",
        "Nếu chúng tôi thay đổi các quy tắc diễn giải theo cách có thể thay đổi điểm số, chúng tôi sẽ đăng ở đây trước tiên, với ngày có hiệu lực — vì một liên kết kết quả bạn đã giữ sẽ đọc khác đi.",
        "Bộ quy tắc hiện tại là v10. Các khoản thanh toán vẫn chưa mở."
      ]
    }
  }
} satisfies NoticeCopy;
