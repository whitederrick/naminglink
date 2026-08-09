import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu Saju-Link",
    "summary": "Đây là một dịch vụ thiết lập một saju (đọc bốn trụ) dựa trên ngày và giờ sinh của bạn và giải thích ý nghĩa của tám ký tự. Nó làm rõ những gì được tính toán và những gì không.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì?",
        "blocks": [
          {
            "p": "Saju-Link thiết lập **biểu đồ saju (bốn trụ) dựa trên ngày và giờ sinh của bạn và cho thấy ý nghĩa của tám ký tự**. Nó đọc sức mạnh của năm yếu tố và sức mạnh của ngày chủ, và cũng xem xét vận mệnh hôm nay dựa trên thân ngày."
          },
          {
            "p": "Những gì bạn thấy trên màn hình là **miễn phí và không yêu cầu thành viên.** Sản phẩm trả phí là một tài liệu PDF chứa các giá trị không hiển thị trên màn hình — cơ sở để phân biệt giữa một ngày chủ mạnh và một ngày chủ yếu, Wang Sang Hyu Su Sa, và các chi tiết điều chỉnh cho thời gian mặt trời thực."
          }
        ]
      },
      {
        "title": "Chúng tôi tính toán gì?",
        "blocks": [
          {
            "p": "Saju được thiết lập bằng cách sử dụng **manseyeok (lịch âm dương Hàn Quốc)**. Thời gian sinh được điều chỉnh về **thời gian mặt trời thực** của nơi sinh — vì vị trí thực tế của mặt trời thay đổi theo vùng miền ngay cả khi đồng hồ hiển thị cùng một thời gian."
          },
          {
            "p": "Điểm số chỉ được đưa ra theo các quy tắc đã thiết lập. Các khái niệm từ truyền thống 명리 (myeongri, nghiên cứu về số phận) như Mười vị thần, mối quan hệ giữa các nhánh đất, và các yếu tố hỗ trợ được chuyển thành các quy tắc tính toán, và **cùng một đầu vào sẽ luôn cho ra cùng một giá trị**. Khi các quy tắc thay đổi, kiểm tra hồi quy được thực hiện để đảm bảo rằng các kết quả trước đó không thay đổi."
          },
          {
            "p": "**AI không được sử dụng trong các câu trên màn hình.** Các giải thích xuất hiện trên màn hình miễn phí là các cụm từ cố định gắn liền với kết quả tính toán. **Chỉ có các diễn giải trong các báo cáo trả phí** sử dụng AI sinh, và ngay cả khi đó, AI không tạo ra điểm số — nó chỉ viết câu dựa trên các giá trị do động cơ cung cấp."
          }
        ]
      },
      {
        "title": "Chúng tôi không nói gì?",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không cung cấp bói toán.** Chúng tôi không viết rằng bạn nên gặp hoặc tránh ai đó. Đây là tài liệu tham khảo tóm tắt các quan điểm của truyền thống 명리.",
              "**Chúng tôi không lưu trữ đầu vào.** Ngày và giờ sinh chỉ được sử dụng vào thời điểm tính toán và không được giữ lại trên máy chủ. Liên kết kết quả cũng được lưu trữ ở một vị trí mà trình duyệt không gửi đến máy chủ.",
              "**Điểm số không được coi là giá trị con người.** Chỉ vì vận mệnh hôm nay thấp không có nghĩa là bạn nên từ bỏ ngày đó."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các phương pháp tính toán chi tiết được viết trong [Hướng dẫn Người dùng](/guide). Thông tin doanh nghiệp và chi tiết liên hệ có thể được tìm thấy trong [Liên hệ với chúng tôi](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Cơ sở Tính toán",
    "title": "Cơ sở nào cho các phép tính?",
    "summary": "Chúng tôi công khai tất cả các quy tắc được sử dụng bởi Saju-Link. Bạn có thể kiểm tra nguồn gốc của các số hiển thị trên màn hình, bao gồm các điều chỉnh cho vận mệnh hôm nay, các điểm số từ bảng mối quan hệ nhánh đất, và các giá trị ranh giới phân biệt giữa một ngày chủ mạnh và một ngày chủ yếu.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các giá trị được viết ở đây đều **được đọc trực tiếp từ mã tính toán**. Vì chúng không được sao chép thủ công vào văn bản, nếu các quy tắc thay đổi, các số trong tài liệu này cũng sẽ thay đổi tương ứng."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Cơ sở Dịch vụ",
    "title": "Biểu đồ Saju — Tám ký tự đến từ đâu?",
    "summary": "Nó giải thích cách mà năm, tháng, ngày và giờ sinh trở thành bốn trụ và tám ký tự, và xác định ký tự nào chỉ về bạn. Nó cũng thảo luận về lý do tại sao nó có thể được xem ngay cả khi không biết chính xác thời gian sinh.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Bốn Trụ, Tám Ký Tự",
        "blocks": [
          {
            "p": "Saju (四柱) nghĩa đen là **bốn trụ**. Mỗi năm, tháng, ngày và giờ sinh được thiết lập như một trụ, và hai ký tự được viết cho mỗi trụ. Do đó, có tổng cộng tám ký tự, được gọi là **원국 (won-guk)**."
          },
          {
            "table": {
              "head": [
                "Trụ",
                "Nó đến từ đâu?",
                "Hai Ký Tự"
              ],
              "rows": [
                [
                  "Trụ Năm (年柱)",
                  "Năm sinh",
                  "Thiên Can + Địa Chi"
                ],
                [
                  "Trụ Tháng (月柱)",
                  "Tháng sinh",
                  "Thiên Can + Địa Chi"
                ],
                [
                  "Trụ Ngày (日柱)",
                  "Ngày sinh",
                  "Thiên Can + Địa Chi"
                ],
                [
                  "Trụ Giờ (時柱)",
                  "Giờ sinh",
                  "Thiên Can + Địa Chi"
                ]
              ]
            }
          },
          {
            "p": "Các ký tự trên cùng được gọi là thiên can (天干), và các ký tự dưới cùng được gọi là địa chi (地支). Có mười thiên can và mười hai địa chi. Mười hai địa chi thường được gọi là **các dấu hiệu hoàng đạo**."
          }
        ]
      },
      {
        "title": "Trong số đó, một ký tự chỉ về tôi.",
        "blocks": [
          {
            "p": "Không phải tất cả tám ký tự đều có trọng số như nhau. **Thiên can của ngày sinh**, cụ thể là ký tự trên cùng của trụ ngày, chỉ về **bản thân tôi**. Điều này được gọi là **thân ngày (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju bao gồm tám ký tự được thiết lập bằng cách sử dụng hai ký tự cho mỗi năm, tháng, ngày và giờ sinh, được đại diện bởi thiên can và địa chi. Ở đây, thân ngày nổi bật (日干) là ký tự chỉ về bản thân tôi.",
            "labels": {
              "year": "Trụ Năm",
              "yearNote": "Gốc · Dấu Hiệu Hoàng Đạo",
              "month": "Trụ Tháng",
              "monthNote": "Mùa · Sức Mạnh",
              "day": "Chủ Ngày",
              "dayNote": "Bản Thân · Cung Vợ Chồng",
              "hour": "Chủ Giờ",
              "hourNote": "Những Năm Sau · Cách Sử Dụng",
              "stem": "Thiên Can",
              "stemNote": "Thiên Can Ngày = Bản Thân",
              "branch": "Địa Chi",
              "branchNote": "Địa Chi Ngày = Cung Vợ Chồng"
            }
          },
          {
            "p": "Những gì dịch vụ này cho thấy chủ yếu xuất phát từ một ký tự này — việc giải thích xu hướng, sức mạnh của năm yếu tố, năng lượng hiện tại cần thiết, và **đọc hôm nay** đều được đo lường dựa trên Thiên Can Ngày. Bảy ký tự còn lại chỉ ra 'môi trường mà Thiên Can Ngày được đặt trong'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tại Sao Ngày Sinh Lại Quan Trọng?",
        "blocks": [
          {
            "p": "Thiên Can Năm giống nhau cho tất cả những người sinh trong năm đó, và Thiên Can Tháng giống nhau cho tất cả những người sinh trong tháng đó. Thiên Can Ngày thay đổi khi ngày thay đổi, và việc bói toán truyền thống đã coi vị trí này là Bản Thân kể từ triều đại Tống. Nếu có Thiên Can Giờ, nó phân biệt ngay cả giữa những người sinh vào cùng một ngày."
          }
        ]
      },
      {
        "title": "Chia Theo Tiết Khí, Không Phải Năm Lịch",
        "blocks": [
          {
            "p": "Một năm saju không thay đổi vào ngày 1 tháng 1 mà thay vào đó vào **Ipchun (khoảng ngày 4 tháng 2)**. Tháng cũng được chia dựa trên tiết khí."
          },
          {
            "p": "Do đó, những người sinh vào **tháng 1 và đầu tháng 2 nhận Thiên Can Năm của năm trước**. Đây là nơi mà sự hiểu lầm phổ biến về cung hoàng đạo phát sinh. Điều tương tự cũng áp dụng nếu bạn nhập ngày sinh âm lịch — nó được chuyển đổi trở lại thành dương lịch và sau đó chia theo tiết khí."
          }
        ]
      },
      {
        "title": "Bạn Có Thể Đọc Ngay Cả Khi Không Biết Thời Gian Sinh",
        "blocks": [
          {
            "p": "Nếu bạn không nhập thời gian, việc đọc sẽ dựa trên ba trụ cột và sáu ký tự, không bao gồm Chủ Giờ. Chúng tôi không đoán các giá trị thiếu — việc gán ngẫu nhiên một Chủ Giờ có thể làm rối loạn sức mạnh của năm yếu tố, dẫn đến những kết luận sai lầm thay vì những kết luận có thể chính xác."
          },
          {
            "p": "Nếu bạn biết thời gian, tốt hơn là nên bao gồm nó. Vì hai ký tự được thêm vào trong số tám ký tự, sức mạnh và đánh giá của năm yếu tố có thể thay đổi. Tuy nhiên, chúng tôi không sử dụng thời gian đồng hồ trực tiếp mà thay vào đó sử dụng [Thời Gian Mặt Trời Thật](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Phương pháp đếm tám ký tự như năm yếu tố để đánh giá sức mạnh được tiếp tục trong [Sức Mạnh Năm Yếu Tố và Chủ Ngày Mạnh/Yếu](/guide/five-elements), trong khi phương pháp đọc các ký tự còn lại dựa trên Thiên Can Ngày được tiếp tục trong [Mười Thần](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Năm Yếu Tố",
    "title": "Sức Mạnh Năm Yếu Tố và Chủ Ngày Mạnh/Yếu",
    "summary": "Chúng tôi đếm tám ký tự như năm yếu tố để xem năng lượng nào mạnh và năng lượng nào yếu. Chúng tôi công bố các giá trị ngưỡng (45%·35%) xác định sức mạnh của Thiên Can Ngày.",
    "backLabel": "Cơ Sở Tính Toán",
    "sections": [
      {
        "title": "Đếm Tám Ký Tự Như Năm Năng Lượng",
        "blocks": [
          {
            "p": "Mười Thiên Can và Mười Hai Địa Chi mỗi cái thuộc về một trong **Năm Yếu Tố (五行)** — Mộc (木), Hỏa (火), Thổ (土), Kim (金), Thủy (水). Bằng cách đếm các ký tự trong biểu đồ gốc theo các yếu tố tương ứng của chúng, chúng tôi có thể xác định năng lượng nào mạnh và năng lượng nào yếu."
          },
          {
            "p": "Tuy nhiên, chúng tôi không chỉ đếm số lượng. Chúng tôi cũng xem xét **liệu tháng sinh có hỗ trợ năng lượng đó hay không**. Ngay cả cùng một ký tự cũng có thể có sức mạnh khác nhau tùy thuộc vào việc nó có gặp mùa của nó hay không. Điều này được gọi là Dấu Tháng (月令), và nó được chia thành năm giai đoạn: Wang (旺), Sang (相), Hyu (休), Su (囚), và Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nơi Màn Hình và Báo Cáo Khác Nhau",
        "blocks": [
          {
            "p": "Màn hình miễn phí chỉ hiển thị **sức mạnh sau khi phản ánh Dấu Tháng**. Các giá trị trước Dấu Tháng và bảng Wang, Sang, Hyu, Su, và Sa được bao gồm trong báo cáo trả phí — điều này được cung cấp để bạn kiểm tra trực tiếp nơi mà đánh giá khác nhau."
          }
        ]
      },
      {
        "title": "Sức Mạnh của Thiên Can Ngày — Mạnh và Yếu",
        "blocks": [
          {
            "p": "Sau khi đếm sức mạnh của năm yếu tố, chúng tôi đánh giá liệu **Thiên Can Ngày có mạnh hay yếu**. Tiêu chí là tỷ lệ năng lượng phù hợp với Thiên Can Ngày."
          },
          {
            "p": "Các năng lượng phù hợp với Thiên Can Ngày là **Nhân Tính và Bạn Bè** — các năng lượng sinh ra tôi và những người tương tự như tôi. Vì có hai trong số năm, nếu không có thiên lệch, nó sẽ khoảng {evenAllyRatio}. Chúng tôi đánh giá trên và dưới ranh giới này là cân bằng."
          },
          {
            "table": {
              "head": [
                "Tỷ Lệ Năng Lượng Phù Hợp Với Thiên Can Ngày",
                "Đánh Giá",
                "Điều Đó Có Nghĩa Là Gì?"
              ],
              "rows": [
                [
                  "{strongThreshold} hoặc cao hơn",
                  "Chủ Ngày Mạnh (身强)",
                  "Các năng lượng hỗ trợ Thiên Can Ngày rất phong phú."
                ],
                [
                  "{weakThreshold} hoặc cao hơn và ít hơn {strongThreshold}",
                  "Cân Bằng (中和)",
                  "Khó để kết luận theo cả hai hướng."
                ],
                [
                  "Ít hơn {weakThreshold}",
                  "Chủ Ngày Yếu (身弱)",
                  "Các năng lượng hỗ trợ Thiên Can Ngày yếu."
                ]
              ]
            }
          },
          {
            "p": "Các số trong bảng này không được sao chép từ văn bản mà được **đọc trực tiếp từ động cơ**. Nếu các quy tắc thay đổi, tài liệu này cũng sẽ thay đổi."
          }
        ]
      },
      {
        "title": "Sức Mạnh Không Tốt Hay Xấu",
        "blocks": [
          {
            "p": "Mạnh không có nghĩa là tốt, và yếu không có nghĩa là xấu. Nếu mạnh, có sức mạnh để tiến lên, nhưng dễ nghiêng về một bên; nếu yếu, dễ dàng mượn sức mạnh của người khác, nhưng có thể mệt mỏi khi chịu đựng một mình. **Năng lượng cần thiết khác nhau trong cả hai trường hợp.**"
          },
          {
            "p": "Xác định 'năng lượng cần thiết' là yếu tố hỗ trợ, và nó tiếp tục trong [Yếu Tố Hỗ Trợ](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Cách tám ký tự được thiết lập là trong [Biểu Đồ Gốc Saju](/guide/natal-chart). Cách mà Chủ Ngày hôm nay tương tác với sức mạnh này được đề cập trong [Đọc Hôm Nay](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Yếu Tố Hỗ Trợ",
    "title": "Yếu Tố Hỗ Trợ — Năng Lượng Cần Thiết Hiện Tại",
    "summary": "Nếu Thiên Can Ngày mạnh, chúng tôi xem xét năng lượng cần giảm; nếu yếu, chúng tôi xem xét năng lượng cần hỗ trợ là cần thiết. Điều này giải thích cách chọn năng lượng đó và cách xử lý khi cân bằng.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Năm yếu tố một mình không đủ",
        "blocks": [
          {
            "p": "Có những cách để đo lường xem năm yếu tố có được phân bố đồng đều hay không. Tuy nhiên, điều thực sự cần thiết là **những gì đang thiếu và những gì đang thừa trong saju này**."
          },
          {
            "p": "Một saju được phân bố đồng đều không phải lúc nào cũng thoải mái, cũng như một saju bị lệch không phải lúc nào cũng khó khăn. Hướng lệch và liệu có một yếu tố nào đó để giảm bớt nó là ngã rẽ."
          }
        ]
      },
      {
        "title": "Yếu tố hỗ trợ — Giảm nếu thừa, Thêm nếu thiếu",
        "blocks": [
          {
            "p": "Yếu tố hỗ trợ (用神) là **năng lượng hiện tại mà người này cần**. Có một số phương pháp để xác định nó (giảm, thêm, bệnh tật và hòa hợp), nhưng phương pháp được sử dụng rộng rãi nhất là **giảm (抑扶)**. Nếu ngày chủ mạnh, người ta tin rằng cần một năng lượng để giảm; nếu yếu, cần một năng lượng để thêm."
          },
          {
            "table": {
              "head": [
                "Phán đoán",
                "Những gì cần thiết",
                "Số loại"
              ],
              "rows": [
                [
                  "Ngày chủ mạnh (身强)",
                  "Năng lượng để giảm — Thực phẩm và Tài sản, Chức vụ",
                  "Ba"
                ],
                [
                  "Ngày chủ yếu (身弱)",
                  "Năng lượng để thêm — Tài nguyên, Bạn đồng hành",
                  "Hai"
                ],
                [
                  "Cân bằng (中和)",
                  "Không thể được bù đắp bằng cách giảm, do đó là năng lượng mỏng nhất",
                  "Hai"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ngưỡng cho sức mạnh và sự yếu kém",
        "blocks": [
          {
            "p": "Phía ngày chủ là **Tài nguyên và Bạn đồng hành** — năng lượng sinh ra cho tôi và năng lượng giống như tôi. Vì hai trong số năm yếu tố có liên quan, sự cân bằng hoàn chỉnh sẽ là {evenAllyRatio}. Độ rộng được đặt trên và dưới {evenAllyRatio} này."
          },
          {
            "table": {
              "caption": "Tỷ lệ Đồng minh (Tài nguyên + Bạn đồng hành) trong Lực tổng thể",
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
        "title": "Cân bằng là 'Phán đoán ít chắc chắn'",
        "blocks": [
          {
            "p": "Cân bằng có nghĩa là không thể được bù đắp bằng cách giảm. Lúc này, hai năng lượng mỏng nhất được coi là cần thiết. Trong màn hình kết quả, nó được ghi chú là 'vị trí hiện tại mỏng' thay vì một tuyên bố xác định."
          }
        ]
      },
      {
        "title": "Sức mạnh không phải là số lượng ký tự",
        "blocks": [
          {
            "p": "Khi đếm sức mạnh của năm yếu tố, tám ký tự không được đếm như chúng xuất hiện. Các giá trị phản ánh các thiên can ẩn (地藏干) trong các nhánh đất và mùa của năng lượng của tháng (月令) mà một người được sinh ra."
          },
          {
            "p": "Chỉ đếm các ký tự bề mặt bỏ qua thực tế rằng ngay cả các ký tự 木 giống nhau cũng có thể có sức mạnh hoàn toàn khác nhau tùy thuộc vào mùa. 木 của mùa xuân và 木 của mùa thu, mặc dù là cùng một ký tự, có sức mạnh khác nhau."
          }
        ]
      },
      {
        "title": "Nơi sử dụng yếu tố hỗ trợ",
        "blocks": [
          {
            "p": "Yếu tố hỗ trợ đã xác định được sử dụng ở hai nơi. Một là **'năng lượng hiện tại cần thiết'** trên màn hình kết quả, và cái còn lại là [vận mệnh hôm nay](/guide/today-fortune) — liệu năng lượng hôm nay có tương ứng với yếu tố hỗ trợ hay không là yếu tố ảnh hưởng nhiều nhất đến điểm số trong ngày đó."
          }
        ]
      },
      {
        "title": "Đây là một phán đoán đơn giản",
        "blocks": [
          {
            "p": "Phân tích vận mệnh thực tế xem xét cấu trúc và điều kiện mùa vụ (nhiệt độ và độ ẩm của mùa) để xác định yếu tố hỗ trợ, và kết luận có thể khác nhau tùy thuộc vào phương pháp. Saju-Link chỉ sử dụng **giảm có thể được đo bằng giá trị sức mạnh**. Điều này là do nguyên tắc chỉ sử dụng những gì có thể chuyển đổi thành quy tắc, vì vậy cùng một đầu vào sẽ luôn cho ra cùng một câu trả lời."
          },
          {
            "p": "Thay vào đó, màn hình kết quả cũng trình bày ngày chủ mạnh và yếu cùng với năng lượng hiện tại cần thiết như **tài liệu đọc**. Điều này nhằm tránh việc che giấu cơ sở của điểm số."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Mười vị thần",
    "title": "Mười vị thần — Mười vị trí trong saju của tôi",
    "summary": "Dựa trên ngày chủ, các ký tự còn lại được chia thành mười tên. Nó thảo luận về lý do phân biệt giữa tài sản thông thường và tài sản phụ, ngay cả khi chúng là cùng một yếu tố tài sản.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Ngày chủ là chính bản thân người đó",
        "blocks": [
          {
            "p": "Trong tám ký tự của saju, **ngày chủ** (thiên can của ngày sinh) đề cập đến chính bản thân người đó. Bảy ký tự còn lại được đọc như môi trường mà ngày chủ đó tồn tại."
          },
          {
            "p": "**Mười vị thần** (十神) là mười phân chia cách mà ngày chủ nhận thức các ký tự khác. Năng lượng nuôi dưỡng tôi là Tài nguyên, năng lượng giống như tôi là Bạn đồng hành, năng lượng tôi sinh ra là Thực phẩm và Tài sản, năng lượng kiềm chế tôi là Chức vụ, và năng lượng tôi kiềm chế là Tài sản — năm nhánh này được chia thêm thành âm và dương, tạo thành mười."
          }
        ]
      },
      {
        "title": "Những ký tự còn lại có ý nghĩa gì với tôi",
        "blocks": [
          {
            "p": "Khi ngày chủ được xác định, các ký tự còn lại trong biểu đồ gốc mỗi ký tự nhận được một tên. Năng lượng sinh ra cho tôi, năng lượng giống như tôi, năng lượng tôi sinh ra, năng lượng kiềm chế tôi, và năng lượng tôi kiềm chế — năm nhánh này được chia thêm thành **mười** thông qua âm và dương. Đây là Mười vị thần."
          },
          {
            "p": "Do đó, Mười vị thần không đề cập đến mối quan hệ với người khác mà là **các vị trí bên trong chính tôi**. Những vị trí nào dày hay mỏng cho thấy xu hướng và cách tôi sống."
          }
        ]
      },
      {
        "title": "Lý do xem như Mười vị thần thay vì Ba yếu tố",
        "blocks": [
          {
            "p": "Có một phương pháp khác để xem mối quan hệ của ngày chi chỉ thông qua ba khía cạnh của **ngũ hành** (hỗ trợ, giống nhau và đối kháng). Nó đơn giản, nhưng **âm và dương biến mất.** 甲 (gỗ dương) và 乙 (gỗ âm) trở thành giống nhau như 甲, điều này đại diện cho 'sự giống nhau', và mối quan hệ đối kháng được gộp lại thành một điểm số duy nhất mà không có hướng đi hay âm dương."
          },
          {
            "p": "Vị trí của người phối ngẫu phải được đánh giá theo **Mười vị thần** về âm và dương. Nếu các mục được xem qua **ngũ hành** được trộn lẫn với những mục được xem qua **Mười vị thần** trong một hệ thống, sẽ có hai tiêu chuẩn cho cùng hai ký tự. Do đó, chúng tôi thống nhất nó dưới **Mười vị thần**."
          }
        ]
      },
      {
        "title": "Vị trí của người phối ngẫu là **정재** và **정관**",
        "blocks": [
          {
            "p": "Dự đoán truyền thống xem vị trí của người phối ngẫu khác nhau dựa trên giới tính. Đối với nam, đó là **정재 (正財)**, và đối với nữ, đó là **정관 (正官)**. Ngay cả khi chúng là cùng một yếu tố tài sản, chỉ có **정재** không phù hợp về âm và dương được coi là vị trí của người phối ngẫu, trong khi **편재** không được đọc là một người phối ngẫu mà được xem xét về hoạt động và tài sản."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nếu bạn không chỉ định giới tính, vị trí này sẽ bị bỏ qua",
        "blocks": [
          {
            "p": "Điều này là vì không thể xác định bên nào, **정재** hay **정관**, để xem xét như là vị trí của người phối ngẫu. Thay vì đoán để lấp đầy một giá trị thiếu, chúng tôi đọc các mục còn lại mà không có mục đó."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Vận mệnh hôm nay",
    "title": "Vận mệnh hôm nay ra sao?",
    "summary": "Ngày hôm nay, **ngày chi** được so sánh với biểu đồ gốc để tính điểm. Mười hai mối quan hệ của các yếu tố hỗ trợ và bảy mối quan hệ của các **địa chi**, cùng với tất cả hai mươi mục và các phép cộng trừ tương ứng của chúng, được công bố đầy đủ.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Hôm nay, chúng tôi cũng thiết lập nó theo cách giống như tám ký tự",
        "blocks": [
          {
            "p": "Mỗi ngày có **일진 (日辰)** riêng của nó. Sử dụng cùng một phương pháp như thiết lập chu kỳ ngày của biểu đồ gốc, hôm nay cũng có một **thiên can** và một **địa chi** gắn liền. Vận mệnh hôm nay là so sánh hai ký tự đó với biểu đồ gốc."
          },
          {
            "p": "Điểm cơ bản là **{baseScore} điểm**. Các mục bên dưới được cộng và trừ, và cuối cùng, nó được giới hạn giữa **{clampLow} điểm** và **{clampHigh} điểm** — chúng tôi không đề cập đến 0 điểm hoặc 100 điểm."
          }
        ]
      },
      {
        "title": "① Năng lượng hôm nay có phải là thứ tôi cần không?",
        "blocks": [
          {
            "p": "Đây là vị trí quan trọng nhất. Chúng tôi kiểm tra xem năng lượng hôm nay có tương ứng với 'năng lượng cần thiết ngay bây giờ' được xác định bởi [억부용신](/guide/yongsin) hay không."
          },
          {
            "table": {
              "head": [
                "Năng lượng hôm nay là",
                "Cộng/Trừ"
              ],
              "rows": [
                [
                  "Năng lượng cần thiết ngay bây giờ",
                  "{todayIsYongsin}"
                ],
                [
                  "Nó tạo ra năng lượng cần thiết",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Nó kiềm chế năng lượng cần thiết",
                  "{todayControlsYongsin}"
                ],
                [
                  "Nó đẩy mạnh hơn về phía đã tràn đầy",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đừng coi 기신 là 'mọi thứ ngoại trừ 용신'",
        "blocks": [
          {
            "p": "Nếu bạn làm như vậy, cả năng lượng tạo ra **용신** và năng lượng kiềm chế **용신** đều trở thành xấu, và hai hàng cuối cùng trong bảng trên trở nên không thể phân biệt. Chỉ có năng lượng mà **đẩy mạnh hơn theo hướng ngược lại** theo nghĩa của **억부** được xem là **기신**."
          }
        ]
      },
      {
        "title": "② Mối quan hệ giữa **thiên can** hôm nay và **ngày chi**",
        "blocks": [
          {
            "p": "Các mối quan hệ hỗ trợ và đối kháng của **ngũ hành** được áp dụng trực tiếp giữa **ngày chi** và **thiên can** hôm nay."
          },
          {
            "table": {
              "head": [
                "Mối quan hệ",
                "Cộng/Trừ"
              ],
              "rows": [
                [
                  "Hôm nay tạo ra tôi",
                  "{generatesSelf}"
                ],
                [
                  "Hôm nay và tôi là năng lượng giống nhau",
                  "{sameElement}"
                ],
                [
                  "Tôi kiềm chế hôm nay",
                  "{selfControls}"
                ],
                [
                  "Tôi chảy ra với hôm nay",
                  "{selfGenerates}"
                ],
                [
                  "Hôm nay kiềm chế tôi",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ **Địa chi** hôm nay gặp các **địa chi** của biểu đồ gốc",
        "blocks": [
          {
            "p": "**Địa chi** hôm nay được so sánh với các **địa chi** của biểu đồ gốc. Bảng mối quan hệ tự nó nằm trong [십이지 관계](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Mối quan hệ",
                "Cộng/Trừ"
              ],
              "rows": [
                [
                  "tam hợp đầy đủ (三合)",
                  "{branchSamhap}"
                ],
                [
                  "cặp lục hợp (六合)",
                  "{branchYukhap}"
                ],
                [
                  "nửa hợp (半合)",
                  "{branchBanhap}"
                ],
                [
                  "mâu thuẫn yên tĩnh, kéo dài (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "va chạm (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Khi có nhiều trụ, nhiều mối quan hệ phát sinh. Tất cả đều được cộng lại, nhưng toàn bộ mục này bị giới hạn trong **±{branchMaxAbs} điểm** — điều này nhằm ngăn chặn một mối quan hệ giữa các nhánh đất xác định toàn bộ ngày."
          }
        ]
      },
      {
        "title": "④ Điều chỉnh Dựa trên Sức mạnh",
        "blocks": [
          {
            "p": "Ngay cả khi có cùng năng lượng, ý nghĩa khác nhau đối với một ngày chủ mạnh và một ngày chủ yếu. Do đó, chúng tôi thực hiện một điều chỉnh cuối cùng."
          },
          {
            "table": {
              "head": [
                "Tình huống",
                "Điều chỉnh"
              ],
              "rows": [
                [
                  "Ngày chủ yếu nhưng hôm nay hỗ trợ họ",
                  "{weakTodayHelps}"
                ],
                [
                  "Ngày chủ mạnh nhưng hôm nay giảm bớt gánh nặng một cách hợp lý",
                  "{strongTodayDrains}"
                ],
                [
                  "Ngày chủ mạnh nhưng hôm nay làm dày thêm sự hỗ trợ",
                  "{strongTodayHelps}"
                ],
                [
                  "Ngày chủ yếu nhưng hôm nay tăng thêm gánh nặng",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Điểm số theo Cấp độ và Khu vực",
        "blocks": [
          {
            "p": "Tổng điểm được chia thành năm cấp độ."
          },
          {
            "table": {
              "head": [
                "Điểm số",
                "Cấp độ"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} điểm trở lên",
                  "Đại Cát (大吉)"
                ],
                [
                  "{gradeGilMin} điểm trở lên",
                  "Cát (吉)"
                ],
                [
                  "{gradePyeongMin} điểm trở lên",
                  "Trung Bình (平)"
                ],
                [
                  "{gradeJuuiMin} điểm trở lên",
                  "Cảnh Giác (注意)"
                ],
                [
                  "{gradeJosimMin} điểm trở lên",
                  "Cẩn Thận (操心)"
                ]
              ]
            }
          },
          {
            "p": "Bốn lĩnh vực về tài sản, tình yêu, sự nghiệp và sức khỏe thừa hưởng tổng điểm là {overallShare}, trong khi phần còn lại được chia theo mối quan hệ của Mười Thần và các nhánh đất liên quan đến những lĩnh vực đó. Do đó, ngay cả khi tổng điểm giống nhau, các con số theo lĩnh vực khác nhau từ người này sang người khác."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các con số trên đều được đọc từ cài đặt của hệ thống. Nếu các quy tắc thay đổi, tài liệu này cũng sẽ thay đổi, và bất kỳ thay đổi nào về điểm số sẽ được đăng trước trong [Thông báo](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Bảng Quan hệ",
    "title": "Mối quan hệ giữa các Nhánh Đất — Kết hợp, Va chạm và Mâu thuẫn",
    "summary": "Đây là bảng quan hệ cho thấy cách mà ngày chủ hôm nay tương tác với biểu đồ sinh. Nó tiết lộ mỗi kết hợp, va chạm và mâu thuẫn là gì và chúng có bao nhiêu điểm.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Các Nhánh Đất là Mười Hai Ký Tự",
        "blocks": [
          {
            "p": "Mười hai nhánh đất (十二支) là 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Các cung hoàng đạo thường được biết đến — Chuột, Trâu, Hổ, Thỏ, Rồng, Rắn, Ngựa, Dê, Khỉ, Gà, Chó, Lợn — mỗi cung đều gắn liền với một trong mười hai ký tự này."
          },
          {
            "figure": "branch-wheel",
            "caption": "Khi mười hai ký tự được sắp xếp thành một vòng tròn, các mối quan hệ trở nên rõ ràng. Va chạm (沖) luôn đối diện nhau, trong khi sáu-hài hòa và mâu thuẫn là những cặp gần nhau hơn. Những đường này không được viết trong văn bản nhưng được lấy trực tiếp từ các quy tắc tính toán.",
            "labels": {
              "alt": "Một sơ đồ cho thấy mười hai nhánh đất được sắp xếp thành một vòng tròn với các đường nối giữa sáu-hài hòa, va chạm và mâu thuẫn.",
              "yukhap": "Sáu-Hài Hòa",
              "chung": "Va Chạm",
              "wonjin": "Mâu Thuẫn",
              "rat": "Chuột",
              "ox": "Trâu",
              "tiger": "Hổ",
              "rabbit": "Thỏ",
              "dragon": "Rồng",
              "snake": "rắn",
              "horse": "ngựa",
              "goat": "dê",
              "monkey": "khỉ",
              "rooster": "gà",
              "dog": "chó",
              "pig": "lợn"
            }
          },
          {
            "p": "Trong saju, mỗi cột trụ có một nhánh đất. **Đọc hôm nay** được xác định bằng cách so sánh **nhánh của ngày** với bốn nhánh của biểu đồ gốc bằng cách sử dụng bảng quan hệ dưới đây."
          }
        ]
      },
      {
        "title": "Bảng Quan Hệ Tổng Thể",
        "blocks": [
          {
            "table": {
              "caption": "Theo thứ tự điểm số cao nhất. Đây là các giá trị được sử dụng bởi Saju-Link.",
              "head": [
                "Quan hệ",
                "Cặp Tương Ứng",
                "Ý nghĩa",
                "Điểm số"
              ],
              "rows": [
                [
                  "Tam hợp (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Khi tất cả ba ký tự kết hợp lại, chúng tạo thành một hình thức nguyên tố hoàn chỉnh (局). Đây được coi là sự kết hợp mạnh nhất.",
                  "{scoreSamhap}"
                ],
                [
                  "Lục hợp (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Các cặp thu hút lẫn nhau. Đây là sự kết hợp phổ biến nhất vì nó chỉ bao gồm hai ký tự.",
                  "{scoreYukhap}"
                ],
                [
                  "Bán hợp (半合)",
                  "Hai ký tự bao gồm một trong các ký tự hoàng gia (子·酉·午·卯) từ tam hợp",
                  "Một sự kết hợp bán mà bao gồm một ký tự trung tâm trong hình thức. Nó không tạo thành một hình thức nguyên tố hoàn chỉnh chỉ với hai ký tự, làm cho nó thấp hơn tam hợp.",
                  "{scoreBanhap}"
                ],
                [
                  "Cùng nhánh",
                  "子子 · 丑丑 …",
                  "Các ký tự giống nhau. Điều này có nghĩa là chúng tương tự nhau nhưng không ngụ ý sự thu hút, vì vậy chúng được đặt ở giữa.",
                  "{scoreSame}"
                ],
                [
                  "Không có quan hệ",
                  "Các cặp không thuộc bất kỳ đâu ở trên hoặc dưới",
                  "Các sự kết hợp không có quan hệ đặc biệt. Điều này phục vụ như một điểm tham chiếu.",
                  "{scoreNeutral}"
                ],
                [
                  "Bất hòa yên tĩnh (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Các cặp không thể tách rời mặc dù không thích nhau. Chúng có vẻ yên tĩnh trên bề mặt nhưng được coi là kéo dài lâu.",
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
        "title": "Tam hợp và Bán hợp",
        "blocks": [
          {
            "p": "Một tam hợp yêu cầu tất cả ba ký tự phải có mặt. Vì có bốn nhánh đất trong biểu đồ gốc, nên có thể nhánh của ngày kết hợp với chúng, tạo thành một tam hợp — lúc đó, nó nhận được điểm số {scoreSamhap}. Nếu chỉ có hai ký tự tham gia, đó là một bán hợp."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bán hợp yêu cầu các ký tự hoàng gia để được công nhận",
        "blocks": [
          {
            "p": "Cũng có một phương pháp được coi là bán hợp nếu cả hai ký tự thuộc cùng một nhóm tam hợp. Điều này cho phép các sự kết hợp như 申辰, mà khó có thể gọi là một sự kết hợp, nhận được điểm số cao. Do đó, dịch vụ này chỉ công nhận một bán hợp khi nó bao gồm các ký tự hoàng gia (子·酉·午·卯), và không coi các sự kết hợp như 申辰·巳丑·寅戌·亥未 là hợp lệ."
          }
        ]
      },
      {
        "title": "Lý do tách biệt Bất hòa yên tĩnh",
        "blocks": [
          {
            "p": "Sáu cặp bất hòa yên tĩnh được xem là thường xuyên như các va chạm. Nếu chúng ta tính các sự kết hợp của cả va chạm và các sự kết hợp, sáu cặp này sẽ bị chôn vùi dưới điểm số không có quan hệ {scoreNeutral}, vì vậy chúng được đặt riêng."
          },
          {
            "p": "Nếu các va chạm là các cặp va chạm trực diện và được hiển thị rõ ràng, thì bất hòa yên tĩnh là sự lệch lạc tinh tế. Do đó, nó được đặt ở điểm số {scoreWonjin}, cao hơn các va chạm ({scoreChung}) nhưng chắc chắn thấp hơn không có quan hệ ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Điểm số cũng được gán cho các va chạm",
        "blocks": [
          {
            "p": "Điểm va chạm thấp nhất là {scoreChung}. Điều này có chủ ý không đưa ra giá trị gần 0. Trong truyền thống 명리 (myeongri), một va chạm không phải là 'kết thúc' mà là 'va chạm', và việc đưa ra một điểm số gần đáy sẽ có nghĩa là dịch vụ đang đưa ra một tuyên bố rõ ràng về mối quan hệ."
          },
          {
            "p": "Với điểm tối thiểu là {scoreChung} và tối đa là {scoreSamhap}, sự khác biệt rõ ràng nhưng không quyết định."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Cung Hoàng Đạo",
    "title": "Cung Hoàng Đạo ở đâu trong Saju?",
    "summary": "Cung hoàng đạo là nhánh đất của năm bạn sinh ra. Điều này giải thích tại sao nó được rút ra từ năm saju thay vì năm dương lịch, và tại sao những người sinh vào đầu tháng 1 hoặc tháng 2 lại có cung hoàng đạo của năm trước.",
    "backLabel": "Cơ sở Tính Toán",
    "sections": [
      {
        "title": "Cung hoàng đạo là nhánh đất của năm bạn sinh ra.",
        "blocks": [
          {
            "p": "Saju bao gồm bốn trụ: năm, tháng, ngày và giờ, với mỗi trụ có một thiên can và một địa chi. Trong số đó, **địa chi của năm**, hay 연지 (nhánh năm), là con vật mà chúng ta gọi là cung hoàng đạo."
          },
          {
            "table": {
              "caption": "Mười Hai Địa Chi và Cung Hoàng Đạo",
              "head": [
                "Địa Chi",
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
        "title": "Chúng tôi sử dụng năm saju, không phải năm dương lịch.",
        "blocks": [
          {
            "p": "Thời điểm mà cung hoàng đạo thay đổi không phải là ngày 1 tháng 1 của dương lịch hay Tết Nguyên Đán. Tiêu chuẩn để thay đổi năm trong saju là **Ipchun**. Do đó, những người sinh vào đầu tháng 1 hoặc tháng 2 có thể có cung hoàng đạo khác với những gì lịch chỉ ra."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lý do chúng tôi không hỏi trực tiếp về cung hoàng đạo.",
        "blocks": [
          {
            "p": "Đây là lý do tại sao chúng tôi chỉ hỏi về ngày sinh mà không chọn cung hoàng đạo trên màn hình nhập liệu. Khi động cơ saju tính toán năm, nó tự động căn chỉnh với ranh giới Ipchun. Nếu chọn trực tiếp, người sinh vào đầu tháng 2 sẽ chọn một cung hoàng đạo không khớp với cung hoàng đạo thực tế của họ."
          }
        ]
      },
      {
        "title": "Cung hoàng đạo là một ký tự trong saju.",
        "blocks": [
          {
            "p": "Trong số tám ký tự, ký tự tương ứng với cung hoàng đạo là **một 연지 (nhánh năm)**. Bảy ký tự còn lại — đặc biệt là thiên can ngày mà ám chỉ đến bản thân — không có liên quan đến cung hoàng đạo."
          },
          {
            "p": "Những người sinh cùng năm đều có cùng một cung hoàng đạo. Do đó, những gì có thể biết từ cung hoàng đạo chỉ bằng với một trong tám ký tự. Đây là lý do tại sao dịch vụ này không **xem xét cung hoàng đạo một cách riêng biệt hoặc quan trọng** — 연지 (nhánh năm) được tính toán cho sức mạnh và phán đoán 일진 (vận mệnh hàng ngày) hôm nay giống như bất kỳ nhánh đất nào khác."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tuy nhiên, lý do chúng tôi hiển thị cung hoàng đạo.",
        "blocks": [
          {
            "p": "Đây là vị trí duy nhất mà ý nghĩa được hiểu ngay cả khi bạn không biết thuật ngữ của 명리 (myeongri). Nếu cung hoàng đạo được ghi chú cùng với 연지 (nhánh năm) trên màn hình biểu đồ gốc, nó trở thành một manh mối để đọc bảy ký tự còn lại."
          }
        ]
      },
      {
        "title": "Nhánh năm vẫn giữ nguyên ngay cả khi bạn không biết thời gian sinh.",
        "blocks": [
          {
            "p": "Nếu bạn không nhập thời gian, trụ giờ sẽ bị bỏ qua và sức mạnh của 오행 (năm yếu tố) sẽ thay đổi. Tuy nhiên, **nhánh năm vẫn giữ nguyên** — nó được xác định chỉ bởi năm bạn sinh ra."
          },
          {
            "p": "Do đó, câu chuyện phát sinh từ nhánh năm không thay đổi ngay cả đối với những người không biết thời gian. Ngược lại, điều này có nghĩa là những gì có thể nói chỉ dựa vào cung hoàng đạo là hạn chế, bất kể thời gian có được bao gồm hay không."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Thời gian",
    "title": "Chúng tôi chuyển đổi thời gian sinh sang thời gian mặt trời thật.",
    "summary": "Giờ chuẩn và vị trí thực tế của mặt trời khác nhau. Điều này giải thích tại sao thời gian phải được điều chỉnh theo kinh độ của nơi sinh để đảm bảo trụ giờ là chính xác.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Thời gian trên đồng hồ và thời gian mặt trời là khác nhau",
        "blocks": [
          {
            "p": "Trụ giờ (時柱) của saju được xác định bởi vị trí của mặt trời. Tuy nhiên, đồng hồ mà chúng ta thấy sử dụng một thời gian chuẩn duy nhất cho toàn quốc, điều này làm sai lệch với vị trí thực tế của mặt trời."
          },
          {
            "p": "Giờ chuẩn của Hàn Quốc dựa trên kinh độ 135° đông. Kinh độ của Seoul khoảng 127°, vì vậy nó cách khoảng 8° về phía tây, khiến mặt trời đạt đỉnh muộn hơn — khi đồng hồ chỉ 12 giờ trưa, mặt trời ở Seoul vẫn chưa đạt đỉnh. Sự khác biệt này khoảng **32 phút**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 phút thay đổi trụ giờ một vị trí",
        "blocks": [
          {
            "p": "Thời gian trong saju được chia thành các đơn vị hai giờ. Những người sinh gần ranh giới sẽ có trụ giờ hoàn toàn thay đổi do sự khác biệt 32 phút — các điều chỉnh là cần thiết chính xác vì những người rơi ngay trên ranh giới này."
          }
        ]
      },
      {
        "title": "Lý do hỏi nơi bạn sinh",
        "blocks": [
          {
            "p": "Nếu kinh độ khác nhau, số lượng điều chỉnh cũng sẽ khác. Nếu bạn áp dụng điều chỉnh dựa trên Seoul cho người sinh ở nước ngoài, trụ giờ sẽ bị sai lệch đáng kể. Do đó, màn hình nhập liệu yêu cầu bạn chọn nơi sinh của mình, và các phép tính được thực hiện dựa trên kinh độ và giờ chuẩn của thành phố đó. Hiện tại, có {cityCount} địa điểm trong danh sách."
          },
          {
            "p": "Ngay cả trong cùng một quốc gia, những nơi có kinh độ khác biệt đáng kể (như Hoa Kỳ, Nga, Indonesia, v.v.) đã được chia thành các thành phố. **15° kinh độ tương đương với một trụ giờ**."
          },
          {
            "p": "Nếu bạn không chọn, các phép tính sẽ được thực hiện dựa trên Seoul. Hầu hết các ca sinh là trong nước, vì vậy điều này ít có khả năng sai sót, nhưng nếu bạn sinh ở nước ngoài, hãy chắc chắn chọn."
          }
        ]
      },
      {
        "title": "Giờ chuẩn đã thay đổi nhiều lần trong quá khứ",
        "blocks": [
          {
            "p": "Có lý do tại sao việc điều chỉnh không thể được tính toán đơn giản là \"sự khác biệt kinh độ ÷ 15° × 60 phút.\" Giờ chuẩn bản thân đã thay đổi qua các thời kỳ khác nhau."
          },
          {
            "table": {
              "caption": "Những thay đổi trong giờ chuẩn của Hàn Quốc — những người sinh trong thời gian này sẽ bị sai lệch với các phép tính đơn giản",
              "head": [
                "Thời kỳ",
                "Điều gì đã khác?"
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
            "p": "Saju-Link không cố định kinh tuyến chuẩn như một giá trị cố định, mà tính toán thời gian chuẩn thực tế được sử dụng tại thời điểm đó dựa trên thông tin **múi giờ IANA** của nơi sinh. Thời gian tiết kiệm ánh sáng ban ngày và các giờ chuẩn trong quá khứ được tự động phản ánh."
          }
        ]
      },
      {
        "title": "Sinh ngay sau nửa đêm cũng xem xét ngày",
        "blocks": [
          {
            "p": "Vì điều chỉnh là -32 phút, những người sinh giữa 00:00 và 00:32 theo đồng hồ sẽ là **11 giờ tối ngày hôm trước** theo thời gian mặt trời thực. Nếu chỉ điều chỉnh thời gian lùi lại và ngày vẫn giữ nguyên, nó sẽ ghi trụ ngày (日柱) là \"11 giờ tối ngày hôm trước.\""
          },
          {
            "p": "Saju-Link cũng sẽ điều chỉnh ngày trong trường hợp này. Ký tự trên trụ ngày đề cập đến trụ ngày (日干), điều này chỉ ra bản thân tôi, vì vậy nếu điều này bị sai lệch, gần như tất cả các mục trong phần giải thích sẽ bị sai lệch."
          }
        ]
      },
      {
        "title": "Bạn không cần biết thời gian",
        "blocks": [
          {
            "p": "Thời gian sinh là tùy chọn. Nếu bạn không biết, các phép tính sẽ được thực hiện mà không có trụ giờ, và điều này sẽ được hiển thị trên màn hình kết quả. Vì điều này có nghĩa là hai trong số tám ký tự bị thiếu, nó sẽ ảnh hưởng đến việc đánh giá sức mạnh và yếu của các yếu tố, vì vậy nếu bạn biết, việc bao gồm nó sẽ chính xác hơn."
          },
          {
            "p": "Trụ năm (띠) luôn giống nhau bất kể thời gian — [bởi vì chúng ta chỉ xem xét trụ năm](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Thông tin cá nhân",
    "title": "Một phương pháp không lưu thông tin đã nhập",
    "summary": "Nó làm rõ ý nghĩa kỹ thuật rằng ngày sinh không được ghi lại ở bất kỳ đâu và những gì có trong liên kết kết quả.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Không có đăng ký thành viên",
        "blocks": [
          {
            "p": "Saju-Link không tạo tài khoản. Nó không thu thập tên, email hoặc số điện thoại. Thông tin duy nhất được thu thập là ngày sinh và (tùy chọn) thời gian sinh, nơi sinh và giới tính, và thông tin đó không còn lại sau khi tính toán hoàn tất."
          },
          {
            "p": "Có một trường để nhập tiêu đề hiển thị trên màn hình kết quả, nhưng đó là **chỉ để hiển thị** và không được sử dụng trong các phép tính. Bạn không cần nhập tên thật của mình."
          }
        ]
      },
      {
        "title": "Những gì có trong liên kết kết quả?",
        "blocks": [
          {
            "p": "Khi tính toán hoàn tất, địa chỉ trông như thế này."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Những gì theo sau **#** là các giá trị đầu vào. Phần này được gọi là **mảnh**, là một phần mà **trình duyệt không gửi đến máy chủ**. Đây là hành vi web tiêu chuẩn và không phải là quy tắc mà chúng tôi tạo ra — nó được thiết kế ban đầu để chỉ ra một vị trí trong tài liệu, vì vậy máy chủ không cần phải thấy nó."
          },
          {
            "p": "Nói cách khác, khi bạn mở liên kết kết quả, trình duyệt đọc giá trị đó để yêu cầu tính toán, và máy chủ của chúng tôi nhận các giá trị để sử dụng cho tính toán, trả về câu trả lời, và sau đó quên nó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Xin hãy cẩn thận khi gửi liên kết cho người khác",
        "blocks": [
          {
            "p": "Thực tế là nó không được lưu trên máy chủ không có nghĩa là liên kết là an toàn. Liên kết kết quả chứa ngày sinh của hai cá nhân, vì vậy người nhận liên kết đó có thể thấy cùng một kết quả."
          }
        ]
      },
      {
        "title": "Tại sao tính toán được thực hiện trên máy chủ nhưng không được lưu?",
        "blocks": [
          {
            "p": "Việc tính toán bản thân được thực hiện trên máy chủ. Bảng lịch âm-dương là cần thiết để tạo ra saju, và bảng đó quá lớn để gửi xuống trình duyệt. Tuy nhiên, **sau khi xử lý yêu cầu, chúng tôi không sử dụng giá trị đó ở bất kỳ đâu.** Không có mã nào để chèn nó vào cơ sở dữ liệu."
          },
          {
            "p": "Các bản ghi tối thiểu cần thiết cho hoạt động được giữ lại — một bộ đếm để ngăn cùng một người gửi quá nhiều yêu cầu trong thời gian ngắn. Điều này không bao gồm ngày sinh, và địa chỉ IP truy cập không được giữ lại. Chỉ một giá trị được băm với ngày được đếm, và giá trị đó thay đổi khi ngày thay đổi."
          }
        ]
      },
      {
        "title": "Những điều không thể thực hiện vì thông tin không được lưu",
        "blocks": [
          {
            "p": "Thành thật mà nói, có những điều đã bị từ bỏ vì chúng tôi không lưu thông tin."
          },
          {
            "ul": [
              "**Bạn không thể lấy lại kết quả trước đây.** Bạn cần có liên kết để xem lại chúng.",
              "**Các giá trị giống nhau sẽ được tính toán lại.** Không có bộ nhớ cache. Tuy nhiên, vì tất cả các quy tắc là xác định, [cùng một đầu vào sẽ luôn cho ra cùng một giá trị](/guide/natal-chart).",
              "**Làm mới sẽ mang lại cổng quảng cáo.** Điều này là do không có nơi nào để lưu lại lịch sử xem."
            ]
          }
        ]
      },
      {
        "title": "Nếu bạn thực hiện một giao dịch mua",
        "blocks": [
          {
            "p": "Khi bạn mua một báo cáo, một bản ghi giao dịch sẽ được giữ lại. Thanh toán phải tuân theo các thời gian lưu giữ hợp pháp, và nếu không có lịch sử đơn hàng, việc hoàn tiền không thể được xử lý. Tuy nhiên, vào thời điểm này, **ngày sinh được sử dụng để tính toán saju sẽ không được đính kèm vào đơn hàng** — nó sẽ được yêu cầu lại khi tạo PDF sau khi xác nhận thanh toán."
          },
          {
            "p": "Để biết thêm chi tiết, vui lòng tham khảo [Chính sách Bảo mật](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Sản phẩm trả phí",
    "title": "Nội dung bao gồm trong báo cáo trả phí",
    "summary": "Nó làm rõ những gì đã được thêm vào PDF trong khi giữ nguyên màn hình. Các giá trị và nội dung được lấy từ cài đặt sản phẩm thực tế.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Giữ nguyên màn hình, chỉ thêm vào PDF",
        "blocks": [
          {
            "p": "Tính toán saju và tra cứu kết quả là **miễn phí**. Bạn có thể xem mọi thứ trên màn hình, bao gồm biểu đồ gốc, năm yếu tố, vận may hôm nay và cơ sở của chúng, vì không có gì bị bỏ sót trong khi tạo báo cáo trả phí."
          },
          {
            "p": "Vai trò của báo cáo là **thêm các lớp không có trên màn hình**. Những lớp này không phải là giả mạo; chúng là các giá trị đã được tính toán trong quá trình chấm điểm nhưng không được sử dụng trên màn hình."
          }
        ]
      },
      {
        "title": "Báo cáo saju trọn đời và vận may năm nay PDF — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Thanh toán trong nước {priceDomestic} (bao gồm VAT), thanh toán quốc tế {priceGlobal}. Nó bao gồm {pageCount} trang A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Mục lục được đọc trực tiếp từ mô tả sản phẩm. **Số trang là giống như tài liệu thực tế** — nó không bị thổi phồng vì đây là giá trị được nêu trong thông báo thông tin sản phẩm."
          }
        ]
      },
      {
        "title": "Những gì không có trên màn hình",
        "blocks": [
          {
            "p": "Màn hình miễn phí hiển thị biểu đồ gốc, năm yếu tố và vận may hôm nay. Có ba giá trị được sản xuất trong quá trình tính toán nhưng không được hiển thị trên màn hình, và đây là các phần của báo cáo trả phí."
          },
          {
            "ul": [
              "**Tỷ lệ tiện lợi của ngày chi** — Nó cho thấy một cách số học nơi mà sự phán xét của một ngày chủ mạnh hoặc yếu đã được thực hiện. Tên phán xét không cho biết liệu nó có ở rìa hay phong phú.",
              "**Wang Sang Hyu Su Sa** — Mức độ mà tháng sinh đã đẩy lên từng năng lượng. Nếu thanh sức mạnh chỉ ra 'có bao nhiêu', bảng này chỉ ra 'nó có trong mùa không'.",
              "**Chi tiết điều chỉnh thời gian mặt trời thật** — Khái niệm này có trong tài liệu hướng dẫn, nhưng **'bao nhiêu phút đã bị dịch chuyển trong trường hợp của bạn'** là một giá trị khác nhau cho mỗi người, vì vậy nó chỉ được bao gồm trong báo cáo."
            ]
          }
        ]
      },
      {
        "title": "Những gì bạn nên biết trước khi mua",
        "blocks": [
          {
            "p": "**Máy chủ không lưu trữ tệp.** Khi thanh toán được phê duyệt, tài liệu sẽ được tạo và gửi ngay lập tức, không để lại gì trên máy chủ. Nguyên tắc của dịch vụ này về việc không lưu trữ các giá trị đầu vào được duy trì ngay cả trong quy trình trả phí."
          },
          {
            "p": "Do đó, **vui lòng lưu tệp ngay sau khi thanh toán.** Bạn có thể nhận nó tối đa năm lần với cùng một đơn hàng, nhưng nếu bạn rời khỏi màn hình kết quả và các giá trị đầu vào biến mất, nó không thể được tái tạo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Báo cáo cũng là tài liệu tham khảo",
        "blocks": [
          {
            "p": "Chỉ vì số trang đã tăng lên không có nghĩa là các kết luận trở nên chắc chắn hơn. Những gì báo cáo thêm vào là **cơ sở của cùng một phép tính**, không phải là một khẳng định mạnh mẽ hơn. Vận mệnh là một lĩnh vực mà các kết luận có thể khác nhau tùy thuộc vào người thực hành, và dịch vụ này chỉ tính toán những gì có thể được dịch sang quy tắc."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Thông báo",
    "title": "Thông báo",
    "summary": "Đây là nơi để thông báo về những thay đổi có thể ảnh hưởng đến việc sử dụng.",
    "backLabel": "Quay lại đầu trang",
    "sections": []
  },
  "contact": {
    "eyebrow": "Liên hệ",
    "title": "Yêu cầu",
    "summary": "Đây là kênh để yêu cầu về việc sử dụng, hoàn tiền, yêu cầu thông tin cá nhân và báo cáo lỗi, cùng với thông tin doanh nghiệp.",
    "backLabel": "Quay lại đầu trang",
    "sections": [
      {
        "title": "Liên hệ qua email",
        "blocks": [
          {
            "p": "Vui lòng gửi yêu cầu đến **{email}**. Chúng tôi sẽ phản hồi trong vòng 2 ngày làm việc. Đối với yêu cầu thanh toán và hoàn tiền, vui lòng bao gồm **số đơn hàng hoặc email đã sử dụng để thanh toán** để xác nhận nhanh hơn."
          },
          {
            "p": "Yêu cầu qua điện thoại được nhận tại {customerCenter}."
          }
        ]
      },
      {
        "title": "Những gì có thể được gửi đến kênh này",
        "blocks": [
          {
            "ul": [
              "**Thanh toán và hoàn tiền** — Nếu tài liệu chưa được tạo hoặc số tiền thanh toán khác với đơn hàng, sẽ được hoàn tiền toàn bộ. Các điều kiện có trong [Chính sách Hoàn tiền](/refund-policy).",
              "**Thông tin cá nhân** — Chúng tôi chấp nhận yêu cầu xem, chỉnh sửa và xóa. Chính sách xử lý có trong [Chính sách Bảo mật](/privacy).",
              "**Báo cáo lỗi tính toán** — Nếu biểu đồ gốc saju hoặc điểm số có vẻ lạ, vui lòng cho chúng tôi biết. Nếu bạn bao gồm thời điểm bạn nhập ngày và giờ sinh, chúng tôi có thể tính toán lại với cùng một giá trị."
            ]
          }
        ]
      },
      {
        "title": "Thông tin doanh nghiệp",
        "blocks": [
          {
            "ul": [
              "**Tên doanh nghiệp** — {companyName}",
              "**Đại diện** — {representative}",
              "**Số đăng ký kinh doanh** — {businessNumber}",
              "**Số đăng ký kinh doanh bán hàng qua thư** — {mailOrderNumber}",
              "**Địa chỉ** — {address}",
              "**Trung tâm khách hàng** — {customerCenter}",
              "**Email** — {email}",
              "**Nhân viên bảo vệ thông tin cá nhân** — {privacyOfficer}",
              "**Nhà cung cấp dịch vụ lưu trữ** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Không cần phải bao gồm ngày và giờ sinh của bạn trong email yêu cầu. Chúng tôi không lưu trữ đầu vào, vì vậy chúng tôi không thể lấy lại chúng sau này, và những gì cần xác nhận là đủ với số đơn hàng. Vui lòng chỉ bao gồm nó khi các giá trị là hoàn toàn cần thiết, chẳng hạn như trong báo cáo lỗi tính toán."
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
    "engine": "Tiêu chí tính toán",
    "support": "Yêu cầu"
  },
  "intro": "Các thay đổi ảnh hưởng đến điều kiện sử dụng, chẳng hạn như giá cả và điều khoản, sẽ được đăng ở đây trước khi thực hiện. Có nhiều cải tiến nội bộ, chẳng hạn như màn hình trở nên nhanh hơn — chỉ những gì bạn cần biết sẽ được ghi chú ở đây.",
  "empty": {
    "title": "Chưa có thông báo nào được đăng.",
    "body": "Nếu có bất kỳ thay đổi nào cần thông báo cho bạn, chúng sẽ được đăng ở đây."
  },
  "effective": "Có hiệu lực từ {date}",
  "pager": {
    "label": "Trang thông báo",
    "newer": "← Mới nhất",
    "older": "Thông báo trước →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Cửa sổ yêu cầu và trang giới thiệu dịch vụ đã được mở.",
      "body": [
        "Chúng tôi đã tập hợp một cửa sổ duy nhất cho các yêu cầu, hoàn tiền, yêu cầu thông tin cá nhân và báo cáo lỗi tính toán. Bạn có thể kiểm tra nó ở dưới cùng của màn hình dưới mục 'Yêu cầu'.",
        "Khi bạn thông báo cho chúng tôi về điều gì đó có vẻ là lỗi tính toán, vui lòng bao gồm ngày và giờ sinh mà bạn đã nhập. Chúng tôi không lưu trữ thông tin đầu vào, vì vậy nếu không có giá trị đó, chúng tôi không thể tính toán lại."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Trên màn hình tiếng Ả Rập và Khmer, báo cáo sẽ được tạo bằng tiếng Anh.",
      "body": [
        "Nếu bạn đang xem màn hình bằng tiếng Ả Rập hoặc Khmer, báo cáo PDF bạn mua sẽ được tạo bằng tiếng Anh. Điều này là do công cụ chưa thể định dạng hai ngôn ngữ này thành các đoạn văn.",
        "Bạn vẫn có thể xem màn hình như nó, và tên được viết trong báo cáo sẽ chính xác như bạn đã nhập.",
        "Thông tin tương tự cũng được cung cấp trước trên màn hình thanh toán. Chúng tôi sẽ thông báo cho bạn ở đây khi công cụ hỗ trợ các ngôn ngữ này."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Tiêu chí tính toán sẽ được bao gồm cùng với kết quả.",
      "body": [
        "Dưới màn hình kết quả và báo cáo, tiêu chí tính toán (ví dụ: sajulink-natal-v1) được chỉ định. Nếu đầu vào giống nhau, cùng một giá trị sẽ luôn được đưa ra dưới cùng một tiêu chí.",
        "Nếu các quy tắc để diễn giải 명리 (myeongri) bị thay đổi và các điểm số có thể khác nhau, chúng tôi sẽ đầu tiên đăng sự thật đó và ngày có hiệu lực ở đây. Điều này là vì các số trong các liên kết kết quả mà bạn đã nhận trước đó có thể thay đổi.",
        "Tiêu chí hiện tại là v10, và việc thanh toán vẫn đang trong quá trình chuẩn bị."
      ]
    }
  }
} satisfies NoticeCopy;
