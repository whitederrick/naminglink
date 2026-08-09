import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu về Inyeon-Link",
    "summary": "Chúng tôi so sánh hai biểu đồ sinh theo truyền thống Saju của Hàn Quốc. Đây là những gì chúng tôi tính toán và những gì chúng tôi từ chối tuyên bố.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì",
        "blocks": [
          {
            "p": "Inyeon-Link xây dựng hai biểu đồ sinh từ ngày và giờ sinh và cho thấy **cách hai tập hợp năng lượng gặp nhau.** Bạn cũng có thể đọc biểu đồ của riêng mình và xem những tính cách nào thường phù hợp với bạn."
          },
          {
            "p": "Đọc trên màn hình là **miễn phí và không cần tài khoản.** Các mục trả phí là các báo cáo PDF chứa các số liệu mà màn hình không bao giờ hiển thị — sức mạnh của các yếu tố, các cặp mười thần và các mối quan hệ giữa tất cả bốn trụ cột."
          }
        ]
      },
      {
        "title": "Chúng tôi tính toán gì",
        "blocks": [
          {
            "p": "Các biểu đồ được xây dựng từ **lịch âm dương Hàn Quốc**, và thời gian sinh được điều chỉnh về **thời gian mặt trời thực** cho nơi sinh — cùng một thời gian đồng hồ có nghĩa là vị trí mặt trời khác nhau tùy thuộc vào nơi bạn sinh ra."
          },
          {
            "p": "Điểm số đến từ các quy tắc cố định. Các khái niệm truyền thống — mười thần, quan hệ nhánh, yếu tố hỗ trợ — được thể hiện dưới dạng quy tắc, vì vậy **cùng một đầu vào luôn cho cùng một kết quả.** Khi một quy tắc thay đổi, chúng tôi chạy một hệ thống hồi quy để đảm bảo rằng các đọc cũ không bị thay đổi."
          },
          {
            "p": "**Không có AI nào tham gia.** Mỗi câu trên màn hình là văn bản cố định gắn liền với một kết quả đã tính toán."
          }
        ]
      },
      {
        "title": "Những gì chúng tôi sẽ không tuyên bố",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không đoán số phận.** Không có gì ở đây bảo bạn theo đuổi hoặc tránh xa ai đó. Đây là một tài liệu tham khảo được rút ra từ một truyền thống.",
              "**Chúng tôi không lưu trữ những gì bạn nhập.** Chi tiết sinh được sử dụng trong khoảnh khắc tính toán và không bao giờ được ghi lại; các liên kết kết quả sống trong phần URL mà trình duyệt không gửi đến máy chủ.",
              "**Một điểm số không phải là phán quyết về một người.** Một số thấp không làm mất giá trị của một mối quan hệ."
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
            "p": "Các giá trị được viết ở đây đều **được đọc trực tiếp từ mã tính toán**. Vì chúng không được ghi chép thủ công vào văn bản, nếu các quy tắc thay đổi, các con số trong tài liệu này cũng sẽ thay đổi."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Cơ sở Dịch vụ",
    "title": "Saju Compatibility Nhìn Vào Điều Gì?",
    "summary": "Nó làm rõ bốn mục và trọng số tương ứng của chúng, và giải thích lý do tại sao bốn mục đó được chọn. Nó cũng đề cập đến lý do tại sao có thể thực hiện các phép tính ngay cả khi không biết thời gian sinh.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Tính toán và Kết hợp Hai Trục",
        "blocks": [
          {
            "p": "Tỷ lệ khớp đến từ hai nhánh. **Saju compatibility** nhìn vào toàn bộ biểu đồ saju gốc của cả hai cá nhân, trong khi **zodiac compatibility** chỉ xem xét một nhánh đất từ năm sinh. Giá trị cuối cùng được lấy bằng cách trung bình trọng số hai."
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
            "p": "Phía saju nặng hơn nhiều vì lượng thông tin sử dụng là khác nhau. Saju xem xét tất cả bốn trụ cột, trong khi zodiac chỉ nhìn vào một ký tự. Tuy nhiên, zodiac không bị loại trừ vì hai lý do — nó là mục dễ hiểu nhất về mặt trực quan, và nó là **trục duy nhất mà giá trị của nó không dao động ngay cả khi không biết thời gian sinh.**"
          }
        ]
      },
      {
        "title": "Bốn Mục của Saju Compatibility",
        "blocks": [
          {
            "p": "Phía saju được chia thành bốn. Mỗi mục được chọn để đảm bảo rằng những gì chúng xem xét không chồng chéo lên nhau."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju bao gồm tám ký tự được hình thành bởi các thiên can và địa chi của năm, tháng, ngày và giờ sinh. Ngày can và ngày chi được đề cập dưới đây là hai ký tự trong trụ ngày.",
            "labels": {
              "year": "Trụ Năm",
              "yearNote": "Gốc · Zodiac",
              "month": "Trụ Tháng",
              "monthNote": "Mùa · Sức mạnh",
              "day": "Trụ Ngày",
              "dayNote": "Tôi · Cung Phu Thê",
              "hour": "Trụ Giờ",
              "hourNote": "Năm Sau · Sử Dụng",
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
                "Cái gì được coi là",
                "Trọng số"
              ],
              "rows": [
                [
                  "Mối Quan Hệ Nhánh Ngày",
                  "Những gì mà ngày can (日干) của hai người đối với nhau — được nhìn qua the Ten Gods (Ten Gods)",
                  "{weightDayMaster}"
                ],
                [
                  "Sự Bổ Sung của Năm Yếu Tố",
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
                  "Hai nhánh ngày (日支) của hai người có phải là sự kết hợp hay là một sự va chạm?",
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
            "p": "Nếu các vị trí thiếu được coi là 0 điểm, điểm số sẽ bị giảm một cách không công bằng chỉ vì giới tính không được tiết lộ. Việc chuẩn hóa lại trọng số ngăn chặn vấn đề này."
          }
        ]
      },
      {
        "title": "Các phép tính có thể được thực hiện mà không cần biết giờ sinh",
        "blocks": [
          {
            "p": "Giờ sinh được sử dụng để xác định trụ giờ. Nếu không biết, các phép tính sẽ được thực hiện mà không có trụ giờ, và điều này sẽ được chỉ ra trên màn hình kết quả. Vì không có đầu vào trực tiếp cho trụ giờ trong bốn mục tương thích, các giá trị sẽ không dao động đáng kể, nhưng nó ảnh hưởng đến sự cân bằng của năm yếu tố."
          },
          {
            "p": "Nếu bạn biết thời gian, vui lòng cũng chọn nơi sinh. Nếu giờ chuẩn khác với vị trí mặt trời thực tế, việc sử dụng nó như vậy có thể làm lệch trụ giờ [(sửa đổi giờ mặt trời thực)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Cùng một đầu vào sẽ luôn cho ra cùng một giá trị",
        "blocks": [
          {
            "p": "Tất cả các điểm số được xác định bởi các quy tắc. Không có trí tuệ nhân tạo nào được sử dụng, cũng như không có số ngẫu nhiên nào được áp dụng. Do đó, việc nhập cùng một hai ngày sinh nhiều lần sẽ không cho ra kết quả khác nhau. Là một dịch vụ không lưu trữ dữ liệu, các kết quả trước đó không thể được truy xuất, nhưng **định tính** bù đắp cho điều đó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Thay đổi quy tắc sẽ nâng cấp phiên bản",
        "blocks": [
          {
            "p": "Mỗi khi các quy tắc tính điểm được thay đổi, phiên bản của hệ thống sẽ được cập nhật. Phiên bản được ghi chú ở dưới cùng của màn hình kết quả, cho phép bạn phân biệt quy tắc nào đã được sử dụng để tính toán các số mà bạn đang xem."
          }
        ]
      },
      {
        "title": "Kết quả này không phải là gì",
        "blocks": [
          {
            "p": "Đây là một **tài liệu tham khảo** được tính toán từ các quy tắc được xây dựng trên quan điểm của truyền thống. Nó không phải là một dự đoán khoa học, cũng không phải là một tuyên bố xác định về mối quan hệ giữa hai cá nhân. Phạm vi điểm số được đặt tối thiểu khoảng 45 điểm vì lý do này — không có sự kết hợp nào sẽ cho ra giá trị gần 0 điểm."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Bảng Quan Hệ",
    "title": "Mười Hai Nhánh Địa — Kết Hợp, Va Chạm, Bất Hòa",
    "summary": "Đây là một bảng quan hệ được sử dụng cho cả sự tương thích nhánh ngày và sự tương thích hoàng đạo. Nó hoàn toàn tiết lộ ý nghĩa của mỗi sự kết hợp, va chạm và bất hòa cũng như điểm số tương ứng của chúng.",
    "backLabel": "Cơ Sở Tính Toán",
    "sections": [
      {
        "title": "Các nhánh địa bao gồm mười hai ký tự",
        "blocks": [
          {
            "p": "Mười hai nhánh địa (十二支) là 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Các dấu hiệu hoàng đạo thường được biết đến liên quan đến mỗi ký tự trong số mười hai này."
          },
          {
            "figure": "branch-wheel",
            "caption": "Sắp xếp mười hai ký tự trong một vòng tròn cung cấp cái nhìn rõ ràng về các mối quan hệ. Một sự va chạm luôn ngồi đối diện trực tiếp, trong khi một cặp sáu-hài hòa và một bất hòa yên tĩnh thì gần nhau hơn. Những đường này được lấy trực tiếp từ các quy tắc tính toán, không được viết trong văn bản.",
            "labels": {
              "alt": "Một sơ đồ cho thấy mười hai nhánh địa được sắp xếp trong một vòng tròn với các đường nối kết hợp sáu-hài hòa, va chạm và bất hòa.",
              "yukhap": "Sáu-Hài Hòa",
              "chung": "Va Chạm",
              "wonjin": "Bất Hòa",
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
              "pig": "Lợn"
            }
          },
          {
            "p": "Trong saju, mỗi trong bốn trụ có một nhánh đất. Inyeon-Link sử dụng **nhánh ngày** (cung phu thê) và **nhánh năm** (động vật hoàng đạo) trong số đó. Cả hai vị trí đều được đánh giá bằng cách sử dụng bảng quan hệ dưới đây."
          }
        ]
      },
      {
        "title": "Toàn bộ Bảng Quan hệ",
        "blocks": [
          {
            "table": {
              "caption": "Sắp xếp theo điểm số cao nhất. Đây là các giá trị thực sự được Inyeon-Link sử dụng.",
              "head": [
                "Quan hệ",
                "Cặp tương ứng",
                "Ý nghĩa",
                "Điểm số"
              ],
              "rows": [
                [
                  "Kết hợp (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Khi tất cả ba ký tự tụ họp, chúng tạo thành một cấu trúc nguyên tố hoàn chỉnh — một **guk** (局). Đây được coi là sự kết hợp mạnh nhất.",
                  "{scoreSamhap}"
                ],
                [
                  "Sáu-Hài (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Các cặp thu hút lẫn nhau. Đây là sự kết hợp phổ biến nhất trong tương thích vì nó chỉ bao gồm hai ký tự.",
                  "{scoreYukhap}"
                ],
                [
                  "Nửa tam hợp (半合)",
                  "Hai ký tự bao gồm một nhánh hoàng gia (王地) từ tam hợp (子·酉·午·卯)",
                  "Một sự kết hợp nửa bao gồm ký tự ở trung tâm của cấu trúc. Nó không thể tạo thành một sự kết hợp hoàn chỉnh chỉ với hai ký tự, khiến nó thấp hơn một tam hợp đầy đủ.",
                  "{scoreBanhap}"
                ],
                [
                  "Nhánh đất giống nhau",
                  "子子 · 丑丑 …",
                  "Các ký tự giống nhau. Điều này có nghĩa là chúng tương tự nhau, nhưng không có nghĩa là thu hút, vì vậy nó được đặt ở giữa.",
                  "{scoreSame}"
                ],
                [
                  "Trung lập",
                  "Các cặp không thuộc về bất kỳ đâu ở trên hoặc dưới",
                  "Một sự kết hợp không có mối quan hệ đặc biệt. Đây là điểm tham chiếu.",
                  "{scoreNeutral}"
                ],
                [
                  "Bất hòa yên tĩnh (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Các cặp không thể tách rời mặc dù có sự oán giận. Chúng có vẻ yên tĩnh bề ngoài nhưng được coi là kéo dài lâu.",
                  "{scoreWonjin}"
                ],
                [
                  "Va chạm (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Các cặp va chạm trực diện. Đây là sáu cặp đối diện nhau.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tam hợp đầy đủ không xuất hiện trong dịch vụ này",
        "blocks": [
          {
            "p": "Một tam hợp đầy đủ cần ba ký tự để hình thành. Tuy nhiên, sự tương thích được cấu trúc bằng cách ghép các nhánh đất của hai người **một cách lần lượt**, dẫn đến chỉ hai ký tự. Do đó, những gì xuất hiện ở đây luôn là một nửa tam hợp, và các điểm tam hợp đầy đủ {scoreSamhap} được giữ lại cho khi xem xét các cấu trúc trong mỗi saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nửa tam hợp phải bao gồm một nhánh hoàng gia",
        "blocks": [
          {
            "p": "Cũng có một phương pháp được coi là nửa tam hợp nếu cả hai ký tự thuộc cùng một nhóm tam hợp. Điều này có thể dẫn đến điểm số cao ngay cả cho các sự kết hợp khó gọi là tam hợp, chẳng hạn như 申辰. Do đó, dịch vụ này chỉ công nhận một nửa tam hợp cho các cặp bao gồm một nhánh hoàng gia (王地) (子·酉·午·卯), và các sự kết hợp như 申辰·巳丑·寅戌·亥未 mà không có nhánh hoàng gia không được tính là tam hợp."
          }
        ]
      },
      {
        "title": "Lý do tách biệt bất hòa yên tĩnh",
        "blocks": [
          {
            "p": "Sáu cặp bất hòa yên tĩnh được xem là thường xuyên trong sự tương thích như các va chạm. Nếu chúng ta tính các sự kết hợp như các cặp và va chạm, sáu cặp này sẽ bị chôn vùi dưới các điểm trung lập {scoreNeutral}, vì vậy chúng được đặt riêng."
          },
          {
            "p": "Trong khi các va chạm là rõ ràng và nổi bật, bất hòa yên tĩnh thì lệch lạc một cách tinh tế. Do đó, nó được đặt ở điểm số {scoreWonjin}, cao hơn các va chạm ({scoreChung}) nhưng chắc chắn thấp hơn trung lập ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Điểm số cũng được gán cho các va chạm",
        "blocks": [
          {
            "p": "Điểm số va chạm thấp nhất là {scoreChung}. Ý định không phải là gán một giá trị gần 0. Trong truyền thống, một va chạm không phải là một 'kết thúc' mà là một 'va chạm', và việc gán một điểm số thấp sẽ ngụ ý rằng dịch vụ đang đưa ra một tuyên bố dứt khoát về mối quan hệ."
          },
          {
            "p": "Với điểm tối thiểu là {scoreChung} và tối đa là {scoreSamhap}, phạm vi là rõ ràng, nhưng nó không đưa ra một kết luận dứt khoát."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Hoàng đạo",
    "title": "Tại sao sự tương thích của cung hoàng đạo lại xem xét nhánh năm?",
    "summary": "Cung hoàng đạo là nhánh đất của năm sinh. Điều này giải thích tại sao nó được lấy từ trụ năm của saju thay vì năm dương lịch, và làm rõ tầm quan trọng của sự tương thích cung hoàng đạo.",
    "backLabel": "Cơ sở tính toán",
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
                  "Heo"
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
            "p": "Thời điểm mà cung hoàng đạo thay đổi không phải là ngày 1 tháng 1 của dương lịch cũng không phải là Tết Nguyên Đán. Tiêu chuẩn để thay đổi năm trong saju là **Ipchun**. Do đó, những người sinh vào tháng 1 hoặc đầu tháng 2 có thể có năm cung hoàng đạo khác với năm trên lịch."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lý do chúng tôi không hỏi trực tiếp về cung hoàng đạo",
        "blocks": [
          {
            "p": "Đó là lý do tại sao chúng tôi chỉ thu thập ngày sinh mà không hỏi về cung hoàng đạo trên màn hình nhập liệu. Khi động cơ saju tính toán nhánh năm, ranh giới của Ipchun được điều chỉnh tự động. Nếu bạn chọn trực tiếp, một người sinh vào đầu tháng 2 có thể chọn một cung hoàng đạo không khớp với cung hoàng đạo thực tế của họ."
          }
        ]
      },
      {
        "title": "Sự tương thích cung hoàng đạo chỉ xem xét một mối quan hệ",
        "blocks": [
          {
            "p": "Việc tính toán sự tương thích cung hoàng đạo rất đơn giản. Nó so sánh các nhánh năm của hai người để xác định xem mối quan hệ có hài hòa, có xung đột hay có sự bất hòa nhẹ, và sử dụng điểm số đó như vậy. Vì chỉ có một mục, không cần phân phối trọng số."
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
            "p": "Sự tương thích cung hoàng đạo chiếm {weightZodiac} trong tỷ lệ khớp cuối cùng. Trong khi sự tương thích saju xem xét tất cả bốn trụ, cung hoàng đạo chỉ xem xét một nhân vật, vì vậy chúng không thể được trọng số như nhau."
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
            "p": "Trên màn hình kết quả, chúng tôi hiển thị điểm số cho cả sự tương thích saju và sự tương thích cung hoàng đạo riêng biệt. Nếu chỉ trình bày tỷ lệ khớp cuối cùng, sẽ không rõ số đó đến từ đâu. Nếu hai giá trị khác nhau đáng kể, điều đó tự nó cũng đáng lưu ý."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Mười Thần",
    "title": "Mười Thần và Vị Trí Vợ Chồng",
    "summary": "Chúng tôi xem xét ngày can của mỗi người đối với nhau thông qua Mười Thần. Chúng tôi giải thích tại sao tài sản trực tiếp và tài sản gián tiếp được đọc khác nhau mặc dù cả hai đều là tài sản.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Cột ngày là chính bản thân người đó",
        "blocks": [
          {
            "p": "Trong tám ký tự của saju, **cột ngày** (cột thiên của ngày sinh) đề cập đến chính bản thân người đó. Bảy ký tự còn lại được đọc như môi trường mà cột ngày đó được đặt vào."
          },
          {
            "p": "**Mười vị thần** (十神) phân chia cách mà cột ngày nhận thức các ký tự khác thành mười loại. Điều nuôi dưỡng tôi là **tài nguyên**, điều giống tôi là **bạn bè**, điều tôi sản xuất là **đầu ra**, điều tôi kiểm soát là **tài sản**, và điều kiểm soát tôi là **quyền lực** — mỗi trong năm điều này sau đó được chia theo cực, tạo thành mười."
          }
        ]
      },
      {
        "title": "Cột ngày của mỗi người là gì đối với nhau",
        "blocks": [
          {
            "p": "Đây là mục đầu tiên trong sự tương thích. Khi xác định được cách mà cột ngày của A nhận thức cột ngày của B, thì nhận thức của B về A cũng được xác định, vì vậy chỉ có **sáu khả năng**."
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
                  "Cực đối",
                  "Liên kết ấm (有情)",
                  "Đây là cặp thường được xem như vị trí của vợ/chồng. Âm và dương không khớp, thu hút nhau."
                ],
                [
                  "Sát thương quan chức ↔ Tài nguyên trực tiếp",
                  "Cực đối",
                  "Sát thương quan chức mang ấn (傷官佩印)",
                  "Một bên bao bọc năng lượng mạnh mẽ của bên kia."
                ],
                [
                  "Bạn bè ↔ Bạn bè",
                  "Cùng cực",
                  "Bình đẳng",
                  "Họ giống nhau và bình đẳng, nhưng không thúc đẩy nhau."
                ],
                [
                  "Đối thủ ↔ Đối thủ",
                  "Cực đối",
                  "Cạnh tranh",
                  "Họ thu hút nhau nhưng cạnh tranh cho cùng một vị trí."
                ],
                [
                  "Tài sản gián tiếp ↔ Quyền lực gián tiếp",
                  "Cùng cực",
                  "Liên kết lạnh (無情)",
                  "Sự kích thích rất lớn, nhưng gánh nặng cũng nặng nề."
                ],
                [
                  "Thần ăn ↔ Tài nguyên gián tiếp",
                  "Cùng cực",
                  "Ngôi sao cú cướp thức ăn (梟神奪食)",
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
            "p": "Bên mà âm và dương không khớp (Tài sản chính, Quan chức chính, Bạn đồng hành chính) là cảm xúc, trong khi bên giống nhau (Tài nguyên, Quan chức, Bạn đồng hành) là không cảm xúc, đây là nguyên tắc phân biệt giữa chính và bên của Mười vị thần."
          }
        ]
      },
      {
        "title": "Lý do xem xét với Mười vị thần thay vì ba yếu tố",
        "blocks": [
          {
            "p": "Có một phương pháp xem xét mối quan hệ của cột ngày với ba yếu tố (sinh ra lẫn nhau, giống nhau, vượt qua lẫn nhau). Nó đơn giản, nhưng **âm và dương biến mất.** 甲 (gỗ dương) và 乙 (gỗ âm) trở thành cùng một 'sự giống nhau' như 甲 và 甲, và sự vượt qua lẫn nhau bị nghiền nát thành một điểm số duy nhất mà không có hướng đi hoặc âm và dương."
          },
          {
            "p": "Vị trí vợ/chồng phải được đánh giá theo Mười vị thần. Nếu các mục được xem xét bởi năm yếu tố và các mục được xem xét bởi Mười vị thần bị trộn lẫn trong một động cơ, sẽ có hai tiêu chuẩn cho cùng hai ký tự. Do đó, chúng tôi thống nhất với Mười vị thần."
          }
        ]
      },
      {
        "title": "Vị trí vợ/chồng là Tài sản chính và Quan chức chính",
        "blocks": [
          {
            "p": "Trong truyền thống, vị thần nào trong Mười vị thần đại diện cho vợ/chồng khác nhau theo giới tính."
          },
          {
            "table": {
              "head": [
                "Giới tính",
                "Vị trí vợ/chồng",
                "Vị trí tương ứng"
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
            "p": "Ngoài điểm số, chúng tôi mô tả **hình dạng** mà cặp ngày can có trên màn hình kết quả. Liệu chúng có vị trí tương tự, liệu một bên có hỗ trợ bên kia, hay liệu một bên bị áp chế — nếu đó là một mối quan hệ hỗ trợ hoặc áp chế, chúng tôi làm rõ bên nào giữ vị trí đó."
          },
          {
            "p": "Nếu chỉ có một điểm số được trình bày, nó để lại câu hỏi 'vậy thì sao'. Hình dạng không phải là một điểm số mà là một điều để đọc, và ngay cả những cặp có điểm số thấp cũng có điều gì đó để diễn giải."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Ngũ hành",
    "title": "Yếu tố Hỗ trợ — Năng lượng cần thiết ngay bây giờ",
    "summary": "Chúng tôi xem ngũ hành không phải là 'họ có chọn hai không' mà là 'đối tác có những gì tôi cần không'. Chúng tôi cũng tiết lộ giá trị ranh giới phân biệt giữa một ngày chủ mạnh và một ngày chủ yếu.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Liệu ngũ hành có 'cân bằng' hay không không phải là câu hỏi về sự tương thích",
        "blocks": [
          {
            "p": "Có một phương pháp để đo lường liệu năm năng lượng có được phân phối đều hay không bằng cách kết hợp ngũ hành của hai người. Tuy nhiên, câu hỏi về sự tương thích không phải là điều đó. **Đối tác có những gì tôi cần không?**"
          },
          {
            "p": "Mức độ cân bằng là đối xứng, nhưng tính bổ sung thì vốn dĩ không đối xứng. Điều này là vì những gì A cần khác với những gì B cần. Do đó, chúng tôi đo lường mỗi bên riêng biệt và trung bình — vì đây là một giá trị trung bình, tổng điểm vẫn giữ tính đối xứng."
          }
        ]
      },
      {
        "title": "Yếu tố Hỗ trợ — Giảm nếu quá mức, thêm nếu không đủ",
        "blocks": [
          {
            "p": "Yếu tố Hỗ trợ (用神) là 'năng lượng mà người này cần ngay bây giờ'. Có nhiều phương pháp để xác định nó (áp chế, hỗ trợ, bệnh tật và giao tiếp), nhưng nó có thể được dịch thành các quy tắc, và phương pháp được sử dụng rộng rãi nhất là **áp chế (抑扶)**. Nếu ngày chủ mạnh, người ta cho rằng cần năng lượng để giảm, và nếu yếu, cần năng lượng để thêm vào."
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
            "p": "Bên ngày can là **印星 và 比劫** — năng lượng sinh ra tôi và năng lượng giống như tôi. Vì hai trong số năm, nếu năng lượng hoàn toàn cân bằng, nó trở thành {evenAllyRatio}. Một khoảng giá trị được thiết lập trên và dưới giá trị đó."
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
                  "{strongThreshold} hoặc nhiều hơn",
                  "Ngày chủ mạnh"
                ],
                [
                  "{weakThreshold} hoặc nhiều hơn và ít hơn {strongThreshold}",
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
            "p": "Nếu chúng tôi chỉ đếm các ký tự bề mặt, chúng tôi sẽ bỏ lỡ thực tế rằng ngay cả hai ký tự của 木 cũng có thể có sức mạnh hoàn toàn khác nhau tùy thuộc vào mùa. 木 của mùa xuân và 木 của mùa thu, mặc dù chúng là cùng một ký tự, có sức mạnh khác nhau."
          }
        ]
      },
      {
        "title": "Chấm điểm mức độ lấp đầy",
        "blocks": [
          {
            "p": "Chúng tôi xem tỷ lệ của yếu tố hỗ trợ của tôi trong sức mạnh của đối thủ. Tuy nhiên, chúng tôi không sử dụng tỷ lệ đó trực tiếp mà **chia kỳ vọng cho kích thước của yếu tố hỗ trợ.** Khi mạnh, yếu tố hỗ trợ là ba (kỳ vọng 60%), và khi yếu, nó là hai (kỳ vọng 40%), vì vậy việc sử dụng tỷ lệ trực tiếp sẽ có nghĩa là một người mạnh luôn nhận được điểm số cao hơn."
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
            "p": "Phân tích saju thực tế xem xét sự hình thành và khí hậu mùa vụ (nhiệt độ và độ ẩm của mùa) để xác định yếu tố hỗ trợ, và kết luận có thể khác nhau tùy thuộc vào phương pháp được sử dụng. Inyeon-Link chỉ sử dụng các yếu tố hỗ trợ có thể được đo bằng **giá trị sức mạnh.** Điều này là do nguyên tắc chỉ sử dụng những gì có thể được dịch thành quy tắc, vì vậy cùng một đầu vào sẽ luôn cho ra cùng một câu trả lời."
          },
          {
            "p": "Thay vào đó, màn hình kết quả cũng trình bày sức mạnh và yếu của mỗi người cùng với năng lượng hiện tại cần thiết như **tài liệu đọc**. Điều này nhằm tránh việc che giấu cơ sở của điểm số."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Tiêu chuẩn của chúng tôi",
    "title": "Inyeon’s Match — Lý do không cung cấp điểm số tổng thể",
    "summary": "Chúng tôi chỉ lấy dữ liệu của một người trong khi để trống vị trí của đối thủ và thay thế tất cả các giá trị có thể vào vị trí đó. Chúng tôi giải thích lý do không đính kèm điểm số tổng thể vào loại thu được theo cách này.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Các phép tính được thực hiện trong khi để trống vị trí của đối thủ",
        "blocks": [
          {
            "p": "Điểm số tương thích được tính toán bằng cách ghép hai người lại với nhau. **Inyeon’s Match** chỉ lấy dữ liệu của một người trong khi để trống vị trí của đối thủ và kiểm tra tất cả các giá trị có thể có thể vào vị trí đó. Nó giống như chạy động cơ tương thích theo chiều ngược lại."
          },
          {
            "p": "Do đó, không cần biết ngày sinh của đối thủ. Chúng tôi vẫn có thể nói, 'Loại hồ sơ kết hợp nào phù hợp với tôi?' về một người mà chúng tôi chưa gặp."
          }
        ]
      },
      {
        "title": "Chúng tôi không chạy hàng triệu tổ hợp",
        "blocks": [
          {
            "p": "Điểm số tương thích trong saju bao gồm bốn mục, và **mỗi mục không chồng chéo lên những gì nó kiểm tra.**"
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
                  "Mối quan hệ giữa ngày stem · Tính chất vợ chồng",
                  "Các ngày stem của cả hai người — heavenly stems",
                  "10"
                ],
                [
                  "Năm yếu tố bổ sung",
                  "Yếu tố hỗ trợ của tôi và sức mạnh năm yếu tố của đối thủ",
                  "5"
                ],
                [
                  "Mối quan hệ giữa ngày branch",
                  "các ngày branch của hai người",
                  "12"
                ],
                [
                  "Mối quan hệ giữa cung hoàng đạo",
                  "các năm branch của hai người",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Vì các giá trị không trao đổi giữa các mục, **tìm điểm cao nhất cho mỗi nhánh sẽ là điểm cao nhất tổng thể.** Không cần kiểm tra tất cả các tổ hợp ngày sinh — chỉ cần đặt mười heavenly stems, mười hai earthly branches, và năm yếu tố là đủ."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Các quy tắc tương tự áp dụng",
        "blocks": [
          {
            "p": "Các điểm số được viết ở đây được lấy trực tiếp từ động cơ tương thích. Vì không có quy tắc mới nào được tạo ra, loại xuất hiện ở đây cũng sẽ có điểm số cao nhất cho mục đó trong tương thích thực tế. Nếu các quy tắc tương thích thay đổi, màn hình này cũng sẽ theo đó."
          }
        ]
      },
      {
        "title": "Không cung cấp điểm số tổng thể",
        "blocks": [
          {
            "p": "Đây là quyết định quan trọng nhất trên màn hình này. Việc thu thập các điểm số cao nhất cho mỗi nhánh có thể có vẻ tạo ra một 'kết hợp hoàn hảo', nhưng người đó có thể **không thực sự tồn tại.**"
          },
          {
            "p": "Trong những người thực, day master và năm yếu tố không hoạt động riêng biệt. Một người có 甲木 thường có năng lượng 木 mạnh mẽ. Phương pháp tính toán các nhánh riêng biệt này bỏ qua mối tương quan đó, vì vậy giá trị thu được bằng cách kết nối các điểm số cao nhất cho mỗi nhánh trở thành một tổ hợp không tồn tại trong thực tế."
          },
          {
            "p": "Do đó, màn hình chỉ hiển thị **điểm số mục** và không cung cấp điểm số tổng thể. Điểm số tổng thể sẽ được tính toán bằng cách nhận ngày sinh của người khác cho [saju compatibility](/compatibility)."
          }
        ]
      },
      {
        "title": "Cách đọc 'các loại kết hợp'",
        "blocks": [
          {
            "p": "Kết quả có nghĩa là 'nếu bạn gặp một người thuộc loại này, mục này sẽ có điểm số cao'. Đây không phải là tiêu chí để chọn một người, mà là một cách để đọc từ một góc độ hiểu bản thân."
          },
          {
            "p": "Các lý do tại sao một số loại có điểm số cao cũng được ghi chú từng mục — liệu day master có ở vị trí thuận lợi hay không, hoặc liệu người đó có sở hữu năng lượng mà tôi hiện cần."
          }
        ]
      },
      {
        "title": "Công cụ xác nhận",
        "blocks": [
          {
            "p": "Bạn có thể tò mò liệu người mà bạn đang nghĩ đến có tương ứng với loại đó hay không. Bằng cách nhập ngày sinh của họ vào công cụ xác nhận trên màn hình kết quả, bạn sẽ được thông báo về day master, day branch, và year branch của họ. Các giá trị nhập vào không được lưu lại vào thời điểm này [(không lưu)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Thời gian",
    "title": "Chuyển đổi thời gian sinh sang thời gian mặt trời thực",
    "summary": "Thời gian chuẩn và vị trí thực tế của mặt trời khác nhau. Thời gian phải được điều chỉnh dựa trên kinh độ của nơi sinh để giải thích lý do tại sao cột thời gian là chính xác.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Thời gian trên đồng hồ và thời gian của mặt trời là khác nhau",
        "blocks": [
          {
            "p": "Cột thời gian (時柱) của saju được xác định bởi vị trí của mặt trời. Tuy nhiên, đồng hồ mà chúng ta thấy sử dụng một thời gian chuẩn duy nhất cho toàn quốc, điều này gây ra sự khác biệt với vị trí thực tế của mặt trời."
          },
          {
            "p": "Thời gian chuẩn của Hàn Quốc dựa trên kinh độ 135° đông. Vì kinh độ của Seoul khoảng 127°, nó cách khoảng 8° về phía tây, khiến mặt trời đạt đỉnh muộn hơn — khi đồng hồ chỉ 12 giờ trưa, mặt trời ở Seoul vẫn chưa đạt đỉnh. Sự khác biệt này khoảng **32 phút**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 phút thay đổi cột thời gian một slot",
        "blocks": [
          {
            "p": "Thời gian trong saju được chia thành các đơn vị hai giờ. Những người sinh gần ranh giới sẽ có cột thời gian của họ hoàn toàn thay đổi bởi sự khác biệt 32 phút — sự điều chỉnh này là cần thiết đối với những người rơi đúng vào ranh giới này."
          }
        ]
      },
      {
        "title": "Tại sao chúng tôi yêu cầu nơi sinh",
        "blocks": [
          {
            "p": "Nếu kinh độ khác nhau, lượng điều chỉnh cũng sẽ khác. Áp dụng điều chỉnh dựa trên Seoul cho một người sinh ở nước ngoài sẽ dẫn đến sự khác biệt đáng kể trong cột thời gian. Do đó, màn hình nhập liệu yêu cầu bạn chọn nơi sinh của mình, và việc tính toán dựa trên kinh độ và thời gian chuẩn của thành phố đó. Hiện tại, có {cityCount} địa điểm trong danh sách."
          },
          {
            "p": "Tại những nơi mà kinh độ thay đổi lớn ngay cả trong cùng một quốc gia (như Mỹ, Nga, Indonesia, v.v.), các thành phố đã được chia nhỏ. **15° kinh độ tương đương với một slot cột thời gian.**"
          },
          {
            "p": "Nếu bạn không chọn, việc tính toán sẽ dựa trên Seoul. Vì hầu hết các ca sinh là trong nước, điều này giảm khả năng xảy ra lỗi, nhưng nếu bạn sinh ra ở nước ngoài, hãy chắc chắn chọn."
          }
        ]
      },
      {
        "title": "Thời gian chuẩn đã thay đổi nhiều lần trong quá khứ",
        "blocks": [
          {
            "p": "Có lý do tại sao việc điều chỉnh không thể được tính toán đơn giản là 'chênh lệch kinh độ ÷ 15° × 60 phút'. Thời gian chuẩn bản thân đã thay đổi qua các thời kỳ khác nhau."
          },
          {
            "table": {
              "caption": "Thay đổi về giờ chuẩn của Hàn Quốc — những người sinh trong khoảng thời gian này sẽ có sự khác biệt với các phép tính đơn giản",
              "head": [
                "Thời kỳ",
                "Điều gì đã khác"
              ],
              "rows": [
                [
                  "Trước năm 1912",
                  "Không có giờ chuẩn (giờ trung bình địa phương)"
                ],
                [
                  "1954 – 1961",
                  "Giờ chuẩn là UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Thời gian tiết kiệm ánh sáng ban ngày đã được thực hiện"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link không sử dụng một giá trị cố định cho kinh tuyến chuẩn, mà tính toán giờ chuẩn thực sự đã được sử dụng vào thời điểm đó dựa trên thông tin **múi giờ IANA** của nơi sinh. Thời gian tiết kiệm ánh sáng ban ngày và các giờ chuẩn trong quá khứ được phản ánh tự động."
          }
        ]
      },
      {
        "title": "Sinh ngay sau nửa đêm cũng cần xem xét ngày",
        "blocks": [
          {
            "p": "Vì sự điều chỉnh là -32 phút, những người sinh từ 00:00 đến 00:32 theo đồng hồ sẽ là **23:00 của ngày trước** theo giờ mặt trời thực. Nếu chỉ thời gian được đảo ngược và ngày không thay đổi, nó sẽ ghi cột ngày là '23:00 của ngày trước'."
          },
          {
            "p": "Inyeon-Link cũng sẽ đảo ngược ngày trong trường hợp này. Cột ngày chỉ ra chính người đó trong saju, vì vậy nếu điều này không chính xác, hầu hết các mục tương thích sẽ không chính xác."
          }
        ]
      },
      {
        "title": "Bạn không cần biết thời gian",
        "blocks": [
          {
            "p": "Thời gian sinh là tùy chọn. Nếu bạn không biết, phép tính sẽ được thực hiện mà không có cột thời gian, và điều này sẽ được hiển thị trên màn hình kết quả. Không có mục nào trong tương thích yêu cầu cột thời gian phải được ghi trực tiếp, nhưng nó có ảnh hưởng đến năm yếu tố, vì vậy nếu bạn biết, việc bao gồm nó sẽ chính xác hơn."
          },
          {
            "p": "Tương thích theo cung hoàng đạo luôn có giá trị giống nhau bất kể thời gian — [bởi vì nó chỉ xem xét nhánh năm](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Thông tin cá nhân",
    "title": "Phương pháp không lưu trữ thông tin đã nhập",
    "summary": "Điều này giải thích ý nghĩa kỹ thuật của việc ngày sinh của bạn không được ghi lại ở bất kỳ đâu và những gì được bao gồm trong liên kết kết quả.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Không cần thành viên",
        "blocks": [
          {
            "p": "Inyeon-Link không tạo tài khoản. Nó không thu thập tên, email hoặc số điện thoại. Thông tin duy nhất được thu thập là ngày sinh và (tùy chọn) thời gian sinh, nơi sinh và giới tính, và ngay cả điều đó cũng không được giữ lại sau khi phép tính hoàn tất."
          },
          {
            "p": "Có một trường để nhập tiêu đề hiển thị trên màn hình kết quả, nhưng điều đó **chỉ để mục đích hiển thị** và không được sử dụng trong phép tính. Bạn không cần phải nhập tên thật của mình."
          }
        ]
      },
      {
        "title": "Những gì được bao gồm trong liên kết kết quả?",
        "blocks": [
          {
            "p": "Khi phép tính hoàn tất, địa chỉ trông như thế này."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Những gì theo sau **#** là các giá trị đầu vào. Phần này được gọi là **mảnh**, là một **phần mà trình duyệt không gửi đến máy chủ**. Đây là hành vi web tiêu chuẩn và không phải là quy tắc mà chúng tôi tạo ra — nó ban đầu được thiết kế để chỉ ra một vị trí trong tài liệu, vì vậy máy chủ không cần phải thấy nó."
          },
          {
            "p": "Nói cách khác, khi bạn mở liên kết kết quả, trình duyệt đọc giá trị đó để yêu cầu phép tính, và máy chủ của chúng tôi nhận được các giá trị cần thiết cho phép tính, trả về câu trả lời, và sau đó quên nó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Xin hãy cẩn thận khi gửi liên kết cho người khác",
        "blocks": [
          {
            "p": "Thực tế là nó không được lưu trữ trên máy chủ và rằng liên kết là an toàn không phải là điều giống nhau. Liên kết kết quả chứa cả hai ngày sinh của bạn, vì vậy người nhận liên kết đó có thể thấy cùng một kết quả."
          }
        ]
      },
      {
        "title": "Tại sao phép tính được thực hiện trên máy chủ nhưng không được lưu trữ?",
        "blocks": [
          {
            "p": "Phép tính tự nó được thực hiện trên máy chủ. Almanac âm dương Hàn Quốc là cần thiết để tạo ra saju, và bảng đó quá lớn để gửi xuống trình duyệt. Tuy nhiên, **sau khi xử lý yêu cầu, giá trị đó không được sử dụng ở bất kỳ đâu.** Không có mã nào để lưu trữ nó trong cơ sở dữ liệu."
          },
          {
            "p": "Một bản ghi tối thiểu cần thiết cho hoạt động được giữ lại — một bộ đếm để ngăn chặn cùng một người gửi quá nhiều yêu cầu trong thời gian ngắn. Điều này không bao gồm ngày sinh, và địa chỉ IP truy cập cũng không được giữ lại. Chỉ một giá trị, được băm với ngày, được đếm, và giá trị đó thay đổi khi ngày thay đổi."
          }
        ]
      },
      {
        "title": "Những điều không thể thực hiện vì thông tin không được lưu trữ",
        "blocks": [
          {
            "p": "Thành thật mà nói, có những điều chúng tôi đã từ bỏ vì chúng tôi không lưu trữ thông tin."
          },
          {
            "ul": [
              "**Bạn không thể lấy lại kết quả trước đó.** Bạn cần có liên kết để xem lại chúng.",
              "**Các giá trị giống nhau sẽ được tính lại.** Không có bộ nhớ cache. Tuy nhiên, vì tất cả các quy tắc là xác định, [đầu vào giống nhau sẽ luôn cho ra cùng một giá trị](/guide/how-compatibility).",
              "**Làm mới sẽ mang lại cổng quảng cáo.** Điều này là do không có nơi nào để giữ lại hồ sơ xem."
            ]
          }
        ]
      },
      {
        "title": "Trong trường hợp mua hàng",
        "blocks": [
          {
            "p": "Nếu bạn mua một báo cáo, một bản ghi giao dịch sẽ được giữ lại vào thời điểm đó. Luật pháp quy định thời gian lưu giữ cho các khoản thanh toán, và không có lịch sử đơn hàng, việc hoàn tiền không thể được xử lý. Tuy nhiên, ngay cả trong trường hợp đó, **ngày sinh được sử dụng cho các phép tính tương thích không gắn liền với đơn hàng** — nó sẽ được thu thập lại khi tạo PDF sau khi xác nhận thanh toán."
          },
          {
            "p": "Chi tiết được nêu trong [Chính sách Bảo mật](/privacy)."
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
            "p": "**Các trang 1-3 được tổ chức để giữ những gì hiển thị trên màn hình** và **từ trang 4 trở đi là nội dung không hiển thị trên màn hình**. Dưới đây, nó giải thích lý do tại sao một số thứ không được hiển thị trên màn hình."
          }
        ]
      },
      {
        "title": "Trang 4 — Hướng đi của hai năng lượng",
        "blocks": [
          {
            "p": "Các mục của **ngũ hành** trên màn hình được trình bày như một điểm số duy nhất. Tuy nhiên, điểm số duy nhất đó là **trung bình của hai hướng** — đo lường mức độ mà bên kia lấp đầy tôi và mức độ tôi lấp đầy bên kia, và trung bình các giá trị đó."
          },
          {
            "p": "Sự bổ sung vốn có là **không đối xứng**. Điều này là do các năng lượng cần thiết cho tôi và các năng lượng cần thiết cho bên kia là khác nhau. Nếu bạn chỉ nhìn vào trung bình, một mối quan hệ mà một bên lấp đầy bên kia một cách đáng kể và một mối quan hệ mà cả hai lấp đầy nhau đều sẽ xuất hiện với cùng một số. Báo cáo tách biệt hai điều đó."
          },
          {
            "p": "Cũng được bao gồm trong cùng một phần là **biểu đồ mối quan hệ của bốn trụ**. Chỉ có một cái đi vào tỷ lệ tương thích là **nhánh ngày** (日支) — vì nó là vị trí của vợ/chồng — nhưng các nhánh năm, tháng và giờ khác cũng có thể được đọc với cùng một biểu đồ mối quan hệ."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Các điểm số trong bảng này không đi vào tỷ lệ tương thích",
        "blocks": [
          {
            "p": "Nếu được bao gồm, tổng điểm sẽ thay đổi và sẽ không khớp với liên kết kết quả đã gửi. Do đó, nó chỉ được bao gồm như tài liệu đọc, và thực tế đó được ghi chú dưới bảng."
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
            "p": "Bạn có thể thấy các lực trước và sau khi nhân với năng lượng của tháng bên cạnh nhau, cho thấy mức độ mà mùa đã đẩy nó lên. Tỷ lệ **đồng minh** phân biệt giữa **ngày chủ mạnh** và **ngày chủ yếu** cũng được ghi chú — màn hình chỉ hiển thị phán đoán, nhưng báo cáo cho thấy nơi mà phán đoán đó được đưa ra."
          }
        ]
      },
      {
        "title": "Trang 6 — Ý nghĩa của bốn trụ của người khác đối với tôi",
        "blocks": [
          {
            "p": "Tỷ lệ tương thích chỉ so sánh **những trụ ngày** của cả hai cá nhân. Tuy nhiên, ba trụ còn lại của người khác cũng được xác định bởi **Thập Thần** theo cùng một quy tắc. Trong khi bạn có thể hiểu **người này có ý nghĩa gì đối với tôi** chỉ bằng cách nhìn vào trụ ngày, bạn không thể biết **vị trí của người đó có ý nghĩa gì đối với tôi**."
          },
          {
            "p": ""
          }
        ]
      },
      {
        "title": "Trang 7 — Cách tính toán saju này",
        "blocks": [
          {
            "p": "Nó nêu rõ mức độ điều chỉnh thời gian sinh về true solar time (true solar time), liệu việc điều chỉnh có làm thay đổi ngày tháng hay không, và ngày dương lịch cũng như âm lịch là gì khi saju được tạo ra. Khái niệm này được giải thích trong tài liệu [Điều chỉnh thời gian sinh về true solar time](/guide/true-solar-time), nhưng **giá trị của số phút đã được điều chỉnh trong trường hợp của bạn** khác nhau giữa các cá nhân, vì vậy nó chỉ được bao gồm trong báo cáo."
          }
        ]
      },
      {
        "title": "Báo cáo hồ sơ kết hợp Inyeon PDF — {priceAffinityDomestic}",
        "slot": "",
        "blocks": [
          {
            "p": "Thanh toán trong nước {priceAffinityDomestic} (bao gồm VAT), thanh toán quốc tế {priceAffinityGlobal}. {pagesAffinity} trang A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "kind": "note",
        "title": "",
        "blocks": [
          {
            "p": ""
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Thông báo",
    "title": "Thông báo",
    "summary": "Đây là nơi thông báo những thay đổi ảnh hưởng đến việc sử dụng.",
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
              "**Thông tin cá nhân** — Chúng tôi chấp nhận yêu cầu xem, sửa đổi và xóa. Chính sách xử lý có trong [chính sách bảo mật](/privacy).",
              "**Báo cáo Lỗi Tính toán** — Nếu biểu đồ gốc saju hoặc điểm số có vẻ lạ, vui lòng cho chúng tôi biết. Nếu bạn bao gồm thời điểm bạn nhập ngày và giờ, chúng tôi có thể tính toán lại với cùng một giá trị."
            ]
          }
        ]
      },
      {
        "title": "Thông tin Doanh nghiệp",
        "blocks": [
          {
            "ul": [
              "**Tên Doanh nghiệp** — {companyName}",
              "**Người đại diện** — {representative}",
              "**Số Đăng ký Doanh nghiệp** — {businessNumber}",
              "**Số Đăng ký Kinh doanh Bán hàng qua Thư** — {mailOrderNumber}",
              "**Địa chỉ** — {address}",
              "**Trung tâm Khách hàng** — {customerCenter}",
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
            "p": "Bạn không cần phải bao gồm ngày sinh và giờ sinh trong email yêu cầu. Chúng tôi không lưu trữ thông tin đầu vào, vì vậy chúng tôi không thể truy xuất chúng, và số đơn hàng là đủ để xác nhận. Vui lòng chỉ bao gồm nếu điều đó cần thiết cho báo cáo lỗi tính toán."
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
    "label": "Trang thông báo",
    "newer": "← Mới hơn",
    "older": "Cũ hơn →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Trang Liên hệ và Giới thiệu đã mở",
      "body": [
        "Câu hỏi, hoàn tiền, yêu cầu bảo mật và báo cáo lỗi tính toán giờ đây có một nơi để gửi — xem trang liên hệ ở chân trang.",
        "Nếu có điều gì đó trông sai sót trong tính toán, vui lòng bao gồm thông tin sinh mà đã tạo ra nó. Chúng tôi không lưu trữ những gì bạn nhập, vì vậy nếu không có chúng, chúng tôi không thể tái tạo lại việc đọc."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Báo cáo được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer",
      "body": [
        "Nếu bạn đang đọc bằng tiếng Ả Rập hoặc Khmer, báo cáo PDF bạn mua được sản xuất bằng tiếng Anh. Công cụ bố trí tài liệu của chúng tôi hiện chưa thể định dạng đoạn văn bằng những ngôn ngữ đó.",
        "Màn hình vẫn ở ngôn ngữ của bạn, và tên của bạn được in bằng ngôn ngữ của bạn trong báo cáo.",
        "Ghi chú tương tự xuất hiện trước khi thanh toán. Khi công cụ hỗ trợ những ngôn ngữ này, chúng tôi sẽ thông báo ở đây."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Mỗi lần đọc đều mang phiên bản của các quy tắc đã sử dụng",
      "body": [
        "Mỗi lần đọc và báo cáo đều mang bộ quy tắc đã sử dụng để sản xuất nó (ví dụ inyeonlink-match-v10). Đầu vào giống nhau trên cùng một bộ quy tắc luôn cho ra cùng một số.",
        "Nếu chúng tôi thay đổi các quy tắc diễn giải theo cách có thể làm thay đổi điểm số, chúng tôi sẽ đăng điều đó ở đây trước tiên, cùng với ngày có hiệu lực — vì một liên kết kết quả mà bạn đã giữ sẽ đọc khác đi.",
        "Bộ quy tắc hiện tại là v10. Thanh toán vẫn chưa mở."
      ]
    }
  }
} satisfies NoticeCopy;
