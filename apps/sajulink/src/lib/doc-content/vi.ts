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
            "p": "Saju-Link thiết lập **biểu đồ saju (bốn trụ) dựa trên ngày và giờ sinh của bạn và cho thấy ý nghĩa của tám ký tự**. Nó đọc sức mạnh của năm yếu tố và sức mạnh của trụ ngày, và cũng xem xét vận may hôm nay dựa trên thân ngày."
          },
          {
            "p": "Những gì bạn thấy trên màn hình là **miễn phí và không yêu cầu thành viên.** Sản phẩm trả phí là một tài liệu PDF chứa các giá trị không hiển thị trên màn hình — cơ sở để phân biệt giữa một trụ ngày mạnh và một trụ ngày yếu, Wang Sang Hyu Su Sa, và các chi tiết điều chỉnh cho thời gian mặt trời thật."
          }
        ]
      },
      {
        "title": "Chúng tôi tính toán gì?",
        "blocks": [
          {
            "p": "Saju được thiết lập bằng **manseyeok (lịch âm dương Hàn Quốc)**. Thời gian sinh được điều chỉnh về **thời gian mặt trời thật** của nơi sinh — vì vị trí thực tế của mặt trời thay đổi theo vùng miền ngay cả khi đồng hồ chỉ cùng một thời gian."
          },
          {
            "p": "Điểm số chỉ được đưa ra theo các quy tắc đã thiết lập. Các khái niệm từ truyền thống myeongri (nghiên cứu số mệnh Hàn Quốc) như Mười Thần, mối quan hệ giữa các nhánh đất, và cân bằng các yếu tố được chuyển thành quy tắc tính toán, và **cùng một đầu vào sẽ luôn cho ra cùng một giá trị**. Khi các quy tắc thay đổi, kiểm tra hồi quy được thực hiện để đảm bảo rằng các kết quả trước đó không thay đổi."
          },
          {
            "p": "**AI không được sử dụng trong các câu trên màn hình.** Các giải thích xuất hiện trên màn hình miễn phí là các cụm từ cố định gắn liền với kết quả tính toán. **Chỉ các diễn giải trong các báo cáo trả phí** sử dụng AI sinh, và ngay cả khi đó, AI không tạo ra điểm số — nó chỉ viết câu dựa trên các giá trị do động cơ cung cấp."
          }
        ]
      },
      {
        "title": "Chúng tôi không nói gì?",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không cung cấp bói toán.** Chúng tôi không viết rằng bạn nên gặp hoặc tránh ai đó. Đây là tài liệu tham khảo tóm tắt các quan điểm của truyền thống myeongri.",
              "**Chúng tôi không lưu trữ đầu vào.** Ngày và giờ sinh chỉ được sử dụng tại thời điểm tính toán và không được giữ lại trên máy chủ. Liên kết kết quả cũng được lưu trữ ở một vị trí mà trình duyệt không gửi đến máy chủ.",
              "**Điểm số không được coi là giá trị con người.** Chỉ vì vận may hôm nay thấp không có nghĩa là bạn nên từ bỏ ngày hôm đó."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các phương pháp tính toán chi tiết được viết trong [Hướng dẫn Người dùng](/guide). Thông tin doanh nghiệp và chi tiết liên hệ có thể được tìm thấy trong [Liên hệ với Chúng tôi](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Cơ sở Tính toán",
    "title": "Cơ sở nào cho các phép tính?",
    "summary": "Chúng tôi công bố tất cả các quy tắc được sử dụng bởi Saju-Link. Bạn có thể kiểm tra nguồn gốc của các số hiển thị trên màn hình, bao gồm các điều chỉnh cho vận may hôm nay, các điểm số từ bảng mối quan hệ nhánh đất, và các giá trị biên phân biệt giữa một trụ ngày mạnh và một trụ ngày yếu.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": [
      {
        "blocks": [
          {
            "p": "Saju ghi lại năm, tháng, ngày và giờ sinh của bạn, mỗi mục bằng hai chữ Hán, tổng cộng tám chữ. Chữ trên của mỗi cặp được gọi là **Thiên can**, chữ dưới là **Địa chi**, và hai chữ của ngày sinh bạn được gọi là **Trụ Ngày**. Nếu những từ này còn mới với bạn, hãy bắt đầu với [Thiên can, Địa chi và Trụ Ngày — Cách đọc các chữ trong Saju](/guide/saju-letters)."
          },
          {
            "ul": [
              "**Thiên can** — mười chữ trên của Saju. Mỗi chữ có ngũ hành và âm dương cố định, và Thiên can của ngày sinh bạn chính là Can ngày chỉ về bạn.",
              "**Địa chi** — mười hai chữ dưới của Saju, chính là những chữ dùng cho mười hai con giáp. Mỗi Địa chi chứa các tàng can (支藏干) bên trong.",
              "**Trụ ngày** — cặp do Thiên can và Địa chi của ngày sinh bạn tạo thành. Có 60 cặp, từ 甲子 đến 癸亥, và mỗi cặp có một mục riêng. Bạn sẽ thấy chúng trong các danh sách thu gọn bên dưới."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các giá trị được viết ở đây đều **được đọc trực tiếp từ mã tính toán**. Vì chúng không được sao chép thủ công vào văn bản, nếu các quy tắc thay đổi, các số trong tài liệu này cũng sẽ thay đổi theo."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Cơ sở Dịch vụ",
    "title": "biểu đồ sinh — Tám ký tự đến từ đâu?",
    "summary": "Nó giải thích cách mà năm, tháng, ngày và giờ sinh trở thành bốn trụ và tám ký tự, và xác định ký tự nào chỉ về bạn. Nó cũng thảo luận về lý do tại sao nó có thể được xem ngay cả khi không biết chính xác thời gian sinh.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Bốn Trụ, Tám Ký Tự",
        "blocks": [
          {
            "p": "Saju (四柱) nghĩa đen là **bốn trụ**. Mỗi năm, tháng, ngày và giờ sinh được thiết lập như một trụ, và hai ký tự được viết cho mỗi trụ. Do đó, tổng cộng có tám ký tự, được gọi là **biểu đồ sinh**."
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
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Trụ Tháng (月柱)",
                  "Tháng sinh",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Trụ Ngày (日柱)",
                  "Ngày sinh",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Trụ Giờ (時柱)",
                  "Giờ sinh",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "Các ký tự trên được gọi là heavenly stems (天干), và các ký tự dưới được gọi là earthly branches (地支). Có mười heavenly stems và mười hai earthly branches. Mười hai earthly branches thường được gọi là **cung hoàng đạo**."
          }
        ]
      },
      {
        "title": "Trong số đó, một ký tự chỉ về tôi.",
        "blocks": [
          {
            "p": "Không phải tất cả tám ký tự đều có trọng số như nhau. **Heavenly stem của ngày sinh**, cụ thể là ký tự trên của trụ ngày, chỉ về **bản thân tôi**. Đây được gọi là **day stem (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju bao gồm tám ký tự được thiết lập bằng cách sử dụng hai ký tự cho mỗi năm, tháng, ngày và giờ sinh, được đại diện bởi heavenly stems và earthly branches. Ở đây, day stem (日干) nổi bật là ký tự chỉ về bản thân tôi.",
            "labels": {
              "year": "Trụ Năm",
              "yearNote": "Gốc · Cung Hoàng Đạo",
              "month": "Trụ Tháng",
              "monthNote": "Mùa · Sức Mạnh",
              "day": "Cột Ngày",
              "dayNote": "Bản Thân · Cung Vợ Chồng",
              "hour": "Cột Giờ",
              "hourNote": "Năm Cuối · Sử Dụng",
              "stem": "Thiên Can",
              "stemNote": "Thiên Can Ngày = Bản Thân",
              "branch": "Địa Chi",
              "branchNote": "Địa Chi Ngày = Cung Vợ Chồng"
            }
          },
          {
            "p": "Những gì dịch vụ này cho thấy chủ yếu xuất phát từ một ký tự này — việc giải thích xu hướng, sức mạnh của năm yếu tố, năng lượng hiện tại cần thiết và **hôm nay**'s vận mệnh đều được đo lường dựa trên Thiên Can Ngày. Bảy ký tự còn lại chỉ ra 'môi trường mà Thiên Can Ngày được đặt trong đó'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tại Sao Ngày Sinh Lại Quan Trọng?",
        "blocks": [
          {
            "p": "Thiên Can Năm giống nhau cho tất cả những người sinh trong năm đó, và Thiên Can Tháng giống nhau cho tất cả những người sinh trong tháng đó. Thiên Can Ngày thay đổi khi ngày thay đổi, và việc bói toán truyền thống đã coi vị trí này là Bản Thân kể từ triều đại Tống. Nếu Thiên Can Giờ được bao gồm, nó phân biệt ngay cả giữa những người sinh vào cùng một ngày."
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
            "p": "Do đó, những người sinh vào **tháng 1 và đầu tháng 2 nhận Thiên Can Năm của năm trước**. Đây là nơi mà sự hiểu lầm phổ biến về các cung hoàng đạo phát sinh. Điều tương tự cũng áp dụng nếu bạn nhập ngày sinh âm lịch — nó được chuyển đổi trở lại thành dương lịch và sau đó được chia theo tiết khí."
          }
        ]
      },
      {
        "title": "Bạn Có Thể Đọc Ngay Cả Khi Không Biết Thời Gian Sinh",
        "blocks": [
          {
            "p": "Nếu bạn không nhập thời gian, việc đọc sẽ dựa trên ba cột và sáu ký tự, không bao gồm Cột Giờ. Chúng tôi không đoán các giá trị thiếu — việc gán một Cột Giờ một cách tùy tiện có thể làm rối loạn sức mạnh của năm yếu tố, dẫn đến những kết luận sai lầm thay vì những kết luận có thể chính xác."
          },
          {
            "p": "Nếu bạn biết thời gian, tốt hơn là nên bao gồm nó. Vì hai ký tự được thêm vào trong số tám ký tự, sức mạnh và đánh giá của năm yếu tố có thể thay đổi. Tuy nhiên, chúng tôi không sử dụng thời gian đồng hồ trực tiếp mà thay vào đó sử dụng [Thời Gian Mặt Trời Thực](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Phương pháp đếm tám ký tự như năm yếu tố để đánh giá sức mạnh được tiếp tục trong [Sức Mạnh Năm Yếu Tố và Cột Ngày Mạnh/Yếu](/guide/five-elements), trong khi phương pháp đọc các ký tự còn lại dựa trên Thiên Can Ngày được tiếp tục trong [Mười Thần](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Năm Yếu Tố",
    "title": "Sức Mạnh Năm Yếu Tố và Cột Ngày Mạnh/Yếu",
    "summary": "Chúng tôi đếm tám ký tự như năm yếu tố để xem năng lượng nào mạnh và năng lượng nào yếu. Chúng tôi công bố các giá trị ngưỡng (45%·35%) xác định sức mạnh của Thiên Can Ngày.",
    "backLabel": "Cơ Sở Tính Toán",
    "sections": [
      {
        "title": "Đếm Tám Ký Tự Như Năm Năng Lượng",
        "blocks": [
          {
            "p": "Mười Thiên Can và Mười Hai Địa Chi mỗi cái thuộc về một trong **Năm Yếu Tố (五行)** — Mộc (木), Hỏa (火), Thổ (土), Kim (金), Thủy (水). Bằng cách đếm các ký tự trong biểu đồ sinh theo các yếu tố tương ứng của chúng, chúng tôi có thể xác định năng lượng nào mạnh và năng lượng nào yếu."
          },
          {
            "p": "Tuy nhiên, chúng tôi không chỉ đếm số lượng. Chúng tôi cũng xem xét **liệu tháng sinh có hỗ trợ năng lượng đó hay không**. Ngay cả cùng một ký tự cũng có thể có sức mạnh khác nhau tùy thuộc vào việc nó có gặp mùa của nó hay không. Điều này được gọi là Dấu Hiệu Tháng (月令), và nó được chia thành năm giai đoạn: Wang (旺), Sang (相), Hyu (休), Su (囚), và Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Sự Khác Biệt Giữa Màn Hình và Báo Cáo",
        "blocks": [
          {
            "p": "Màn hình miễn phí chỉ hiển thị **sức mạnh sau khi phản ánh Dấu Hiệu Tháng**. Các giá trị trước Dấu Hiệu Tháng và bảng Wang, Sang, Hyu, Su, và Sa được bao gồm trong báo cáo trả phí — điều này được cung cấp để bạn kiểm tra trực tiếp nơi mà đánh giá đã khác biệt."
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
            "p": "Các năng lượng phù hợp với Thiên Can Ngày là **Tài Nguyên và Bạn Bè** — các năng lượng sinh ra cho tôi và những năng lượng tương tự với tôi. Vì có hai trong số năm, nếu không có sự thiên lệch, nó sẽ khoảng {evenAllyRatio}. Chúng tôi coi khu vực xung quanh con số đó là cân bằng, và đọc trên và dưới nó là mạnh hoặc yếu."
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
                  "Cột Ngày Mạnh (身强)",
                  "Các năng lượng hỗ trợ Thiên Can Ngày rất phong phú."
                ],
                [
                  "{weakThreshold} hoặc cao hơn và ít hơn {strongThreshold}",
                  "Cân Bằng (中和)",
                  "Khó để kết luận theo cả hai hướng."
                ],
                [
                  "Ít hơn {weakThreshold}",
                  "Cột Ngày Yếu (身弱)",
                  "Các năng lượng hỗ trợ Thiên Can Ngày yếu."
                ]
              ]
            }
          },
          {
            "p": "Các con số trong bảng này không được sao chép từ văn bản mà được **đọc trực tiếp từ động cơ**. Nếu các quy tắc thay đổi, tài liệu này cũng sẽ thay đổi."
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
            "p": "Xác định 'năng lượng cần thiết' là yếu tố cân bằng, và nó tiếp tục trong [Yếu Tố Cân Bằng](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Cách mà tám ký tự được thiết lập là trong [biểu đồ sinh](/guide/natal-chart). Cách mà Cột Ngày hôm nay tương tác với sức mạnh này được đề cập trong [vận mệnh hôm nay](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Yếu Tố Cân Bằng",
    "title": "Yếu Tố Cân Bằng — Năng Lượng Cần Thiết Hiện Tại",
    "summary": "Nếu Thiên Can Ngày mạnh, chúng tôi xem xét năng lượng cần giảm; nếu yếu, chúng tôi xem xét năng lượng cần hỗ trợ là cần thiết. Điều này giải thích cách chọn năng lượng đó và cách xử lý khi cân bằng.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Năm yếu tố không đủ",
        "blocks": [
          {
            "p": "Có những cách để đo lường xem năm yếu tố có được phân bổ đều hay không. Tuy nhiên, điều thực sự cần thiết là **những gì đang thiếu và những gì đang thừa trong saju này**."
          },
          {
            "p": "Một saju được phân bổ đều không phải lúc nào cũng thoải mái, cũng như một saju bị lệch không phải lúc nào cũng khó khăn. Hướng lệch và liệu có một yếu tố nào đó để giảm nhẹ nó là ngã rẽ."
          }
        ]
      },
      {
        "title": "Yếu tố Cân bằng — Giảm nếu Thừa, Thêm nếu Thiếu",
        "blocks": [
          {
            "p": "Yếu tố cân bằng (用神) là **năng lượng hiện tại cần thiết cho người này**. Có nhiều phương pháp để xác định nó (kìm hãm và hỗ trợ, cân bằng theo mùa, tổn thương, trung gian), và phương pháp có thể được diễn đạt dưới dạng quy tắc — và được sử dụng rộng rãi nhất — là **kìm hãm và hỗ trợ (抑扶)**. Nếu trụ ngày mạnh, người ta tin rằng cần một năng lượng để giảm; nếu yếu, cần một năng lượng để thêm vào."
          },
          {
            "table": {
              "head": [
                "Phán quyết",
                "Những gì cần thiết",
                "Số loại"
              ],
              "rows": [
                [
                  "Trụ Ngày Mạnh (身强)",
                  "Năng lượng cần giảm — Xuất, Tài sản và Quan chức",
                  "Ba"
                ],
                [
                  "Trụ Ngày Yếu (身弱)",
                  "Năng lượng cần thêm — Tài nguyên, Bạn đồng hành",
                  "Hai"
                ],
                [
                  "Cân bằng (中和)",
                  "Không thể quyết định bằng kìm hãm và hỗ trợ, vì vậy là những năng lượng mỏng nhất",
                  "Hai"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ngưỡng cho Sức mạnh và Yếu",
        "blocks": [
          {
            "p": "Phía trụ ngày là **Tài nguyên và Bạn đồng hành** — năng lượng sinh ra tôi và năng lượng giống như tôi. Vì hai trong số năm yếu tố có liên quan, sự cân bằng hoàn chỉnh sẽ là {evenAllyRatio}. Độ rộng được đặt trên và dưới {evenAllyRatio} này."
          },
          {
            "table": {
              "caption": "Tỷ lệ Đồng minh (Tài nguyên + Bạn đồng hành) trong Lực lượng Tổng thể",
              "head": [
                "Tỷ lệ",
                "Phán quyết"
              ],
              "rows": [
                [
                  "{strongThreshold} hoặc nhiều hơn",
                  "Trụ Ngày Mạnh"
                ],
                [
                  "{weakThreshold} hoặc nhiều hơn và ít hơn {strongThreshold}",
                  "Cân bằng"
                ],
                [
                  "Ít hơn {weakThreshold}",
                  "Trụ Ngày Yếu"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cân bằng là 'Phán quyết ít chắc chắn hơn'",
        "blocks": [
          {
            "p": "Cân bằng có nghĩa là kìm hãm và hỗ trợ không thể quyết định được. Vào thời điểm này, hai năng lượng mỏng nhất được coi là cần thiết. Trong màn hình kết quả, nó được ghi chú là 'vị trí hiện tại mỏng' thay vì một tuyên bố xác định."
          }
        ]
      },
      {
        "title": "Sức mạnh không phải là Số lượng Ký tự",
        "blocks": [
          {
            "p": "Khi đếm sức mạnh của năm yếu tố, tám ký tự không được đếm như chúng xuất hiện. Các giá trị phản ánh các thiên can ẩn (地藏干) bên trong các nhánh đất và mùa của năng lượng của tháng (月令) mà một người được sinh ra."
          },
          {
            "p": "Chỉ đếm các ký tự bề mặt bỏ qua thực tế rằng ngay cả những ký tự 木 giống nhau cũng có thể có sức mạnh hoàn toàn khác nhau tùy thuộc vào mùa. 木 của mùa xuân và 木 của mùa thu, mặc dù là cùng một ký tự, có sức mạnh khác nhau."
          }
        ]
      },
      {
        "title": "Nơi Sử dụng Yếu tố Cân bằng",
        "blocks": [
          {
            "p": "Yếu tố cân bằng đã xác định được sử dụng ở hai nơi. Một là màn hình kết quả **'năng lượng hiện tại cần thiết'**, và cái còn lại là [vận mệnh hôm nay](/guide/today-fortune) — liệu năng lượng hôm nay có tương ứng với yếu tố cân bằng hay không là mục có ảnh hưởng nhiều nhất đến điểm số trong ngày đó."
          }
        ]
      },
      {
        "title": "Đây là một Phán quyết Đơn giản",
        "blocks": [
          {
            "p": "Phân tích vận mệnh thực tế xem xét cấu trúc và điều kiện theo mùa (nhiệt độ và độ ẩm của mùa) để xác định yếu tố cân bằng, và kết luận có thể khác nhau tùy thuộc vào phương pháp. Saju-Link chỉ sử dụng **giảm có thể đo lường bằng giá trị sức mạnh**. Điều này là do nguyên tắc chỉ sử dụng những gì có thể chuyển đổi thành quy tắc, vì vậy cùng một đầu vào sẽ luôn cho ra cùng một câu trả lời."
          },
          {
            "p": "Thay vào đó, màn hình kết quả cũng trình bày trụ ngày mạnh và yếu cùng với năng lượng hiện tại cần thiết như **tài liệu đọc**. Điều này nhằm tránh việc che giấu cơ sở của điểm số."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Thiên can",
    "title": "Giáp Mộc (甲) — Mộc, Dương",
    "summary": "Ngũ hành và âm dương của Thiên can 甲, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Giáp Mộc (甲) là Thiên can thứ nhất trong mười Thiên can",
        "blocks": [
          {
            "p": "甲 là Thiên can thứ nhất trong mười Thiên can. Ngũ hành của nó là Mộc và âm dương là Dương. Saju-Link gọi người có Can ngày là 甲 là \"Giáp Mộc (甲)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 甲, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 甲 đọc can kia, còn khi can kia đọc 甲 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Giáp Mộc (甲)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Thực Thần (食神)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Thương Quan (傷官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Chính Tài (正財)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Chính Quan (正官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Chính Ấn (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 甲, Chính Tài là 己 và Chính Quan là 辛. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 甲",
        "blocks": [
          {
            "p": "Đây là nơi 甲 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 甲 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 甲",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "寅",
                  "Hổ",
                  "bản khí (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Thỏ",
                  "dư khí (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Lợn",
                  "trung khí (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Thiên can",
    "title": "Ất Mộc (乙) — Mộc, Âm",
    "summary": "Ngũ hành và âm dương của Thiên can 乙, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Ất Mộc (乙) là Thiên can thứ hai trong mười Thiên can",
        "blocks": [
          {
            "p": "乙 là Thiên can thứ hai trong mười Thiên can. Ngũ hành của nó là Mộc và âm dương là Âm. Saju-Link gọi người có Can ngày là 乙 là \"Ất Mộc (乙)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 乙, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 乙 đọc can kia, còn khi can kia đọc 乙 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Ất Mộc (乙)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Thương Quan (傷官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Thực Thần (食神)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Chính Tài (正財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Chính Quan (正官)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Chính Ấn (正印)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 乙, Chính Tài là 戊 và Chính Quan là 庚. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 乙",
        "blocks": [
          {
            "p": "Đây là nơi 乙 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 乙 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 乙",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "卯",
                  "Thỏ",
                  "bản khí (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Rồng",
                  "dư khí (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Cừu",
                  "trung khí (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Thiên can",
    "title": "Bính Hỏa (丙) — Hỏa, Dương",
    "summary": "Ngũ hành và âm dương của Thiên can 丙, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Bính Hỏa (丙) là Thiên can thứ ba trong mười Thiên can",
        "blocks": [
          {
            "p": "丙 là Thiên can thứ ba trong mười Thiên can. Ngũ hành của nó là Hỏa và âm dương là Dương. Saju-Link gọi người có Can ngày là 丙 là \"Bính Hỏa (丙)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 丙, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 丙 đọc can kia, còn khi can kia đọc 丙 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Bính Hỏa (丙)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Chính Ấn (正印)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Thực Thần (食神)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Thương Quan (傷官)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Chính Tài (正財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Chính Quan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丙, Chính Tài là 辛 và Chính Quan là 癸. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 丙",
        "blocks": [
          {
            "p": "Đây là nơi 丙 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 丙 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 丙",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "寅",
                  "Hổ",
                  "trung khí (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Rắn",
                  "bản khí (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Ngựa",
                  "dư khí (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Thiên can",
    "title": "Đinh Hỏa (丁) — Hỏa, Âm",
    "summary": "Ngũ hành và âm dương của Thiên can 丁, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Đinh Hỏa (丁) là Thiên can thứ tư trong mười Thiên can",
        "blocks": [
          {
            "p": "丁 là Thiên can thứ tư trong mười Thiên can. Ngũ hành của nó là Hỏa và âm dương là Âm. Saju-Link gọi người có Can ngày là 丁 là \"Đinh Hỏa (丁)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 丁, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 丁 đọc can kia, còn khi can kia đọc 丁 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Đinh Hỏa (丁)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Chính Ấn (正印)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Thương Quan (傷官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Thực Thần (食神)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Chính Tài (正財)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Chính Quan (正官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丁, Chính Tài là 庚 và Chính Quan là 壬. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 丁",
        "blocks": [
          {
            "p": "Đây là nơi 丁 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 丁 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 丁",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "午",
                  "Ngựa",
                  "bản khí (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Cừu",
                  "dư khí (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Chó",
                  "trung khí (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Thiên can",
    "title": "Mậu Thổ (戊) — Thổ, Dương",
    "summary": "Ngũ hành và âm dương của Thiên can 戊, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Mậu Thổ (戊) là Thiên can thứ năm trong mười Thiên can",
        "blocks": [
          {
            "p": "戊 là Thiên can thứ năm trong mười Thiên can. Ngũ hành của nó là Thổ và âm dương là Dương. Saju-Link gọi người có Can ngày là 戊 là \"Mậu Thổ (戊)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 戊, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 戊 đọc can kia, còn khi can kia đọc 戊 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Mậu Thổ (戊)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Chính Quan (正官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Chính Ấn (正印)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Thực Thần (食神)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Thương Quan (傷官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Chính Tài (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 戊, Chính Tài là 癸 và Chính Quan là 乙. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 戊",
        "blocks": [
          {
            "p": "Đây là nơi 戊 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 戊 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 戊",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "寅",
                  "Hổ",
                  "dư khí (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Rồng",
                  "bản khí (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Rắn",
                  "dư khí (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Khỉ",
                  "dư khí (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Chó",
                  "bản khí (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Lợn",
                  "dư khí (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Thiên can",
    "title": "Kỷ Thổ (己) — Thổ, Âm",
    "summary": "Ngũ hành và âm dương của Thiên can 己, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Kỷ Thổ (己) là Thiên can thứ sáu trong mười Thiên can",
        "blocks": [
          {
            "p": "己 là Thiên can thứ sáu trong mười Thiên can. Ngũ hành của nó là Thổ và âm dương là Âm. Saju-Link gọi người có Can ngày là 己 là \"Kỷ Thổ (己)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 己, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 己 đọc can kia, còn khi can kia đọc 己 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Kỷ Thổ (己)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Chính Quan (正官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Chính Ấn (正印)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Thương Quan (傷官)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Thực Thần (食神)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Chính Tài (正財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 己, Chính Tài là 壬 và Chính Quan là 甲. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 己",
        "blocks": [
          {
            "p": "Đây là nơi 己 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 己 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 己",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "丑",
                  "Trâu",
                  "bản khí (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Ngựa",
                  "trung khí (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Cừu",
                  "bản khí (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Thiên can",
    "title": "Canh Kim (庚) — Kim, Dương",
    "summary": "Ngũ hành và âm dương của Thiên can 庚, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Canh Kim (庚) là Thiên can thứ bảy trong mười Thiên can",
        "blocks": [
          {
            "p": "庚 là Thiên can thứ bảy trong mười Thiên can. Ngũ hành của nó là Kim và âm dương là Dương. Saju-Link gọi người có Can ngày là 庚 là \"Canh Kim (庚)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 庚, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 庚 đọc can kia, còn khi can kia đọc 庚 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Canh Kim (庚)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Chính Tài (正財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Chính Quan (正官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Chính Ấn (正印)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Thực Thần (食神)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Thương Quan (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 庚, Chính Tài là 乙 và Chính Quan là 丁. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 庚",
        "blocks": [
          {
            "p": "Đây là nơi 庚 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 庚 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 庚",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "巳",
                  "Rắn",
                  "trung khí (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Khỉ",
                  "bản khí (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Gà trống",
                  "dư khí (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Thiên can",
    "title": "Tân Kim (辛) — Kim, Âm",
    "summary": "Ngũ hành và âm dương của Thiên can 辛, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Tân Kim (辛) là Thiên can thứ tám trong mười Thiên can",
        "blocks": [
          {
            "p": "辛 là Thiên can thứ tám trong mười Thiên can. Ngũ hành của nó là Kim và âm dương là Âm. Saju-Link gọi người có Can ngày là 辛 là \"Tân Kim (辛)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 辛, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 辛 đọc can kia, còn khi can kia đọc 辛 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Tân Kim (辛)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Chính Tài (正財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Chính Quan (正官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Chính Ấn (正印)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Thương Quan (傷官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 辛, Chính Tài là 甲 và Chính Quan là 丙. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 辛",
        "blocks": [
          {
            "p": "Đây là nơi 辛 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 辛 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 辛",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "丑",
                  "Trâu",
                  "trung khí (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Gà trống",
                  "bản khí (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Chó",
                  "dư khí (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Nhâm Thủy (壬)](/guide/stem-im) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Thiên can",
    "title": "Nhâm Thủy (壬) — Thủy, Dương",
    "summary": "Ngũ hành và âm dương của Thiên can 壬, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Nhâm Thủy (壬) là Thiên can thứ chín trong mười Thiên can",
        "blocks": [
          {
            "p": "壬 là Thiên can thứ chín trong mười Thiên can. Ngũ hành của nó là Thủy và âm dương là Dương. Saju-Link gọi người có Can ngày là 壬 là \"Nhâm Thủy (壬)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 壬, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 壬 đọc can kia, còn khi can kia đọc 壬 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Nhâm Thủy (壬)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Thực Thần (食神)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Thương Quan (傷官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Chính Tài (正財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Chính Quan (正官)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Chính Ấn (正印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Kiếp Tài (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 壬, Chính Tài là 丁 và Chính Quan là 己. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 壬",
        "blocks": [
          {
            "p": "Đây là nơi 壬 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 壬 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 壬",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "子",
                  "Chuột",
                  "dư khí (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Khỉ",
                  "trung khí (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Lợn",
                  "bản khí (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Quý Thủy (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Thiên can",
    "title": "Quý Thủy (癸) — Thủy, Âm",
    "summary": "Ngũ hành và âm dương của Thiên can 癸, cách nó đọc chín can còn lại (Thập thần) và những Địa chi chứa nó — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Quý Thủy (癸) là Thiên can thứ mười trong mười Thiên can",
        "blocks": [
          {
            "p": "癸 là Thiên can thứ mười trong mười Thiên can. Ngũ hành của nó là Thủy và âm dương là Âm. Saju-Link gọi người có Can ngày là 癸 là \"Quý Thủy (癸)\"."
          },
          {
            "p": "Dòng mà màn hình kết quả hiển thị cho Can ngày này là: \"Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói.\" Dòng này không liên quan đến bảng hay điểm số bên dưới."
          }
        ]
      },
      {
        "title": "Cách đọc các can khác (Thập thần)",
        "blocks": [
          {
            "p": "Khi Can ngày là 癸, mỗi can trong mười can được đọc như sau. Cách đọc có chiều: đây là cách 癸 đọc can kia, còn khi can kia đọc 癸 thì có thể ra một tên khác."
          },
          {
            "table": {
              "caption": "Thập thần khi Can ngày là Quý Thủy (癸)",
              "head": [
                "Can khác",
                "Ngũ hành và âm dương",
                "Thập thần"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "Thương Quan (傷官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "Thực Thần (食神)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "Chính Tài (正財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "Chính Quan (正官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "Chính Ấn (正印)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Các can được đọc là vị trí phối ngẫu",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 癸, Chính Tài là 丙 và Chính Quan là 戊. Nếu bạn không cho biết giới tính, vị trí này sẽ không được đọc."
          }
        ]
      },
      {
        "title": "Các Địa chi chứa 癸",
        "blocks": [
          {
            "p": "Đây là nơi 癸 ẩn trong các Địa chi (Tàng can). Tỷ lệ là phần trong ba mươi ngày của chi đó mà 癸 chiếm giữ."
          },
          {
            "table": {
              "caption": "Các Địa chi chứa 癸",
              "head": [
                "Địa chi",
                "Con giáp",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "子",
                  "Chuột",
                  "bản khí (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Trâu",
                  "dư khí (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Rồng",
                  "trung khí (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một can không quyết định một con người. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của nó.",
              "Thập thần là một phán đoán được đưa ra từ Can ngày. Cùng hai ký tự sẽ có tên khác nhau tùy ký tự nào là Can ngày."
            ]
          },
          {
            "p": "Toàn bộ Thập thần nằm trong [hướng dẫn về Thập thần](/guide/ten-gods), còn sức mạnh của các hành và Dấu Hiệu Tháng nằm trong [hướng dẫn về ngũ hành](/guide/five-elements). Các can khác: [Giáp Mộc (甲)](/guide/stem-gap) · [Ất Mộc (乙)](/guide/stem-eul) · [Bính Hỏa (丙)](/guide/stem-byeong) · [Đinh Hỏa (丁)](/guide/stem-jeong) · [Mậu Thổ (戊)](/guide/stem-mu) · [Kỷ Thổ (己)](/guide/stem-gi) · [Canh Kim (庚)](/guide/stem-gyeong) · [Tân Kim (辛)](/guide/stem-sin) · [Nhâm Thủy (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Địa chi",
    "title": "子 — Địa chi của Chuột",
    "summary": "Các can mà Địa chi 子 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "子 là Địa chi thứ nhất trong mười hai Địa chi",
        "blocks": [
          {
            "p": "子 là Địa chi thứ nhất trong mười hai Địa chi và thuộc con giáp Chuột. Khi Chi tháng sinh là 子, mùa là mùa đông và hành làm chủ mùa là Thủy."
          },
          {
            "p": "Khi Chi ngày sinh là 子, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 子",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "dư khí (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "bản khí (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 子",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 子, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 子 (mùa đông)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Hỏa",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Thổ",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Kim",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Thủy",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 子 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 子 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 子 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Nhâm Thủy (壬) — dư khí (餘氣)",
                "Quý Thủy (癸) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thiên Ấn (偏印)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Chính Ấn (正印)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Thiên Quan (偏官)",
                  "Chính Quan (正官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Chính Quan (正官)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thiên Tài (偏財)",
                  "Chính Tài (正財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Chính Tài (正財)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thực Thần (食神)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Tân Kim (辛)",
                  "Thương Quan (傷官)",
                  "Thực Thần (食神)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Tỷ Kiên (比肩)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Kiếp Tài (劫財)",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Địa chi",
    "title": "丑 — Địa chi của Trâu",
    "summary": "Các can mà Địa chi 丑 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丑 là Địa chi thứ hai trong mười hai Địa chi",
        "blocks": [
          {
            "p": "丑 là Địa chi thứ hai trong mười hai Địa chi và thuộc con giáp Trâu. Khi Chi tháng sinh là 丑, mùa là mùa đông và hành làm chủ mùa là Thủy. Đây là tháng chuyển mùa (辰未戌丑), nên Thổ cũng được tính ở trạng thái Vượng."
          },
          {
            "p": "Khi Chi ngày sinh là 丑, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 丑",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "dư khí (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "trung khí (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "bản khí (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 丑",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 丑, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 丑 (mùa đông (tháng chuyển mùa))",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Hỏa",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Thổ",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Kim",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Thủy",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 丑 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 丑 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 丑 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Quý Thủy (癸) — dư khí (餘氣)",
                "Tân Kim (辛) — trung khí (中氣)",
                "Kỷ Thổ (己) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Tân Kim (辛)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Địa chi",
    "title": "寅 — Địa chi của Hổ",
    "summary": "Các can mà Địa chi 寅 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "寅 là Địa chi thứ ba trong mười hai Địa chi",
        "blocks": [
          {
            "p": "寅 là Địa chi thứ ba trong mười hai Địa chi và thuộc con giáp Hổ. Khi Chi tháng sinh là 寅, mùa là mùa xuân và hành làm chủ mùa là Mộc."
          },
          {
            "p": "Khi Chi ngày sinh là 寅, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 寅",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "dư khí (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "trung khí (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "bản khí (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 寅",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 寅, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 寅 (mùa xuân)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Hỏa",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Thổ",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Kim",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Thủy",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 寅 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 寅 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 寅 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Mậu Thổ (戊) — dư khí (餘氣)",
                "Bính Hỏa (丙) — trung khí (中氣)",
                "Giáp Mộc (甲) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Tân Kim (辛)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Địa chi",
    "title": "卯 — Địa chi của Thỏ",
    "summary": "Các can mà Địa chi 卯 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "卯 là Địa chi thứ tư trong mười hai Địa chi",
        "blocks": [
          {
            "p": "卯 là Địa chi thứ tư trong mười hai Địa chi và thuộc con giáp Thỏ. Khi Chi tháng sinh là 卯, mùa là mùa xuân và hành làm chủ mùa là Mộc."
          },
          {
            "p": "Khi Chi ngày sinh là 卯, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 卯",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "dư khí (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "bản khí (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 卯",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 卯, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 卯 (mùa xuân)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Hỏa",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Thổ",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Kim",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Thủy",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 卯 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 卯 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 卯 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Giáp Mộc (甲) — dư khí (餘氣)",
                "Ất Mộc (乙) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Tỷ Kiên (比肩)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Kiếp Tài (劫財)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Thiên Ấn (偏印)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Chính Ấn (正印)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thiên Quan (偏官)",
                  "Chính Quan (正官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Chính Quan (正官)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thiên Tài (偏財)",
                  "Chính Tài (正財)"
                ],
                [
                  "Tân Kim (辛)",
                  "Chính Tài (正財)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thực Thần (食神)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thương Quan (傷官)",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Địa chi",
    "title": "辰 — Địa chi của Rồng",
    "summary": "Các can mà Địa chi 辰 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "辰 là Địa chi thứ năm trong mười hai Địa chi",
        "blocks": [
          {
            "p": "辰 là Địa chi thứ năm trong mười hai Địa chi và thuộc con giáp Rồng. Khi Chi tháng sinh là 辰, mùa là mùa xuân và hành làm chủ mùa là Mộc. Đây là tháng chuyển mùa (辰未戌丑), nên Thổ cũng được tính ở trạng thái Vượng."
          },
          {
            "p": "Khi Chi ngày sinh là 辰, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 辰",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "dư khí (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm",
                  "trung khí (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "bản khí (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 辰",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 辰, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 辰 (mùa xuân (tháng chuyển mùa))",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Hỏa",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Thổ",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Kim",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Thủy",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 辰 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 辰 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 辰 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Ất Mộc (乙) — dư khí (餘氣)",
                "Quý Thủy (癸) — trung khí (中氣)",
                "Mậu Thổ (戊) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)",
                  "Chính Tài (正財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)",
                  "Thực Thần (食神)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Canh Kim (庚)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Tân Kim (辛)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)",
                  "Chính Quan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Địa chi",
    "title": "巳 — Địa chi của Rắn",
    "summary": "Các can mà Địa chi 巳 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "巳 là Địa chi thứ sáu trong mười hai Địa chi",
        "blocks": [
          {
            "p": "巳 là Địa chi thứ sáu trong mười hai Địa chi và thuộc con giáp Rắn. Khi Chi tháng sinh là 巳, mùa là mùa hè và hành làm chủ mùa là Hỏa."
          },
          {
            "p": "Khi Chi ngày sinh là 巳, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 巳",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "dư khí (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "trung khí (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "bản khí (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 巳",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 巳, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 巳 (mùa hè)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Hỏa",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Thổ",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Kim",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Thủy",
                  "Tù (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 巳 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 巳 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 巳 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Mậu Thổ (戊) — dư khí (餘氣)",
                "Canh Kim (庚) — trung khí (中氣)",
                "Bính Hỏa (丙) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thiên Tài (偏財)",
                  "Thiên Quan (偏官)",
                  "Thực Thần (食神)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Chính Tài (正財)",
                  "Chính Quan (正官)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Thực Thần (食神)",
                  "Thiên Tài (偏財)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Thương Quan (傷官)",
                  "Chính Tài (正財)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Tỷ Kiên (比肩)",
                  "Thực Thần (食神)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Kiếp Tài (劫財)",
                  "Thương Quan (傷官)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thiên Ấn (偏印)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Tân Kim (辛)",
                  "Chính Ấn (正印)",
                  "Kiếp Tài (劫財)",
                  "Chính Quan (正官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thiên Quan (偏官)",
                  "Thiên Ấn (偏印)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Chính Quan (正官)",
                  "Chính Ấn (正印)",
                  "Chính Tài (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Địa chi",
    "title": "午 — Địa chi của Ngựa",
    "summary": "Các can mà Địa chi 午 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "午 là Địa chi thứ bảy trong mười hai Địa chi",
        "blocks": [
          {
            "p": "午 là Địa chi thứ bảy trong mười hai Địa chi và thuộc con giáp Ngựa. Khi Chi tháng sinh là 午, mùa là mùa hè và hành làm chủ mùa là Hỏa."
          },
          {
            "p": "Khi Chi ngày sinh là 午, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 午",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương",
                  "dư khí (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "trung khí (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "bản khí (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 午",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 午, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 午 (mùa hè)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Hỏa",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Thổ",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Kim",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Thủy",
                  "Tù (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 午 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 午 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 午 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Bính Hỏa (丙) — dư khí (餘氣)",
                "Kỷ Thổ (己) — trung khí (中氣)",
                "Đinh Hỏa (丁) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thực Thần (食神)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Thương Quan (傷官)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Tỷ Kiên (比肩)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Kiếp Tài (劫財)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thiên Ấn (偏印)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Chính Ấn (正印)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thiên Quan (偏官)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)"
                ],
                [
                  "Tân Kim (辛)",
                  "Chính Quan (正官)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thiên Tài (偏財)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Chính Tài (正財)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Địa chi",
    "title": "未 — Địa chi của Cừu",
    "summary": "Các can mà Địa chi 未 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "未 là Địa chi thứ tám trong mười hai Địa chi",
        "blocks": [
          {
            "p": "未 là Địa chi thứ tám trong mười hai Địa chi và thuộc con giáp Cừu. Khi Chi tháng sinh là 未, mùa là mùa hè và hành làm chủ mùa là Hỏa. Đây là tháng chuyển mùa (辰未戌丑), nên Thổ cũng được tính ở trạng thái Vượng."
          },
          {
            "p": "Khi Chi ngày sinh là 未, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 未",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "dư khí (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm",
                  "trung khí (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm",
                  "bản khí (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 未",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 未, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 未 (mùa hè (tháng chuyển mùa))",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Hỏa",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Thổ",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Kim",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Thủy",
                  "Tù (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 未 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 未 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 未 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Đinh Hỏa (丁) — dư khí (餘氣)",
                "Ất Mộc (乙) — trung khí (中氣)",
                "Kỷ Thổ (己) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)",
                  "Chính Tài (正財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)",
                  "Thực Thần (食神)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Canh Kim (庚)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Tân Kim (辛)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)",
                  "Chính Quan (正官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Địa chi",
    "title": "申 — Địa chi của Khỉ",
    "summary": "Các can mà Địa chi 申 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "申 là Địa chi thứ chín trong mười hai Địa chi",
        "blocks": [
          {
            "p": "申 là Địa chi thứ chín trong mười hai Địa chi và thuộc con giáp Khỉ. Khi Chi tháng sinh là 申, mùa là mùa thu và hành làm chủ mùa là Kim."
          },
          {
            "p": "Khi Chi ngày sinh là 申, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 申",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "dư khí (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "trung khí (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "bản khí (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 申",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 申, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 申 (mùa thu)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Hỏa",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Thổ",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Kim",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Thủy",
                  "Tướng (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 申 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 申 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 申 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Mậu Thổ (戊) — dư khí (餘氣)",
                "Nhâm Thủy (壬) — trung khí (中氣)",
                "Canh Kim (庚) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thiên Tài (偏財)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Chính Tài (正財)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Thực Thần (食神)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Thương Quan (傷官)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Kiếp Tài (劫財)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thiên Ấn (偏印)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Tân Kim (辛)",
                  "Chính Ấn (正印)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thiên Quan (偏官)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Chính Quan (正官)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Địa chi",
    "title": "酉 — Địa chi của Gà",
    "summary": "Các can mà Địa chi 酉 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "酉 là Địa chi thứ mười trong mười hai Địa chi",
        "blocks": [
          {
            "p": "酉 là Địa chi thứ mười trong mười hai Địa chi và thuộc con giáp Gà. Khi Chi tháng sinh là 酉, mùa là mùa thu và hành làm chủ mùa là Kim."
          },
          {
            "p": "Khi Chi ngày sinh là 酉, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 酉",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Canh Kim (庚)",
                  "Kim Dương",
                  "dư khí (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "bản khí (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 酉",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 酉, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 酉 (mùa thu)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Hỏa",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Thổ",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Kim",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Thủy",
                  "Tướng (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 酉 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 酉 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 酉 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Canh Kim (庚) — dư khí (餘氣)",
                "Tân Kim (辛) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thiên Quan (偏官)",
                  "Chính Quan (正官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Chính Quan (正官)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Thiên Tài (偏財)",
                  "Chính Tài (正財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Chính Tài (正財)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thực Thần (食神)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thương Quan (傷官)",
                  "Thực Thần (食神)"
                ],
                [
                  "Canh Kim (庚)",
                  "Tỷ Kiên (比肩)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Tân Kim (辛)",
                  "Kiếp Tài (劫財)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thiên Ấn (偏印)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Chính Ấn (正印)",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [戌 (Chó)](/guide/branch-sul) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Địa chi",
    "title": "戌 — Địa chi của Chó",
    "summary": "Các can mà Địa chi 戌 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "戌 là Địa chi thứ mười một trong mười hai Địa chi",
        "blocks": [
          {
            "p": "戌 là Địa chi thứ mười một trong mười hai Địa chi và thuộc con giáp Chó. Khi Chi tháng sinh là 戌, mùa là mùa thu và hành làm chủ mùa là Kim. Đây là tháng chuyển mùa (辰未戌丑), nên Thổ cũng được tính ở trạng thái Vượng."
          },
          {
            "p": "Khi Chi ngày sinh là 戌, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 戌",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Tân Kim (辛)",
                  "Kim Âm",
                  "dư khí (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm",
                  "trung khí (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "bản khí (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 戌",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 戌, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 戌 (mùa thu (tháng chuyển mùa))",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Hỏa",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Thổ",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Kim",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Thủy",
                  "Tướng (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 戌 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 戌 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 戌 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Tân Kim (辛) — dư khí (餘氣)",
                "Đinh Hỏa (丁) — trung khí (中氣)",
                "Mậu Thổ (戊) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Chính Quan (正官)",
                  "Thương Quan (傷官)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Thiên Quan (偏官)",
                  "Thực Thần (食神)",
                  "Chính Tài (正財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Chính Tài (正財)",
                  "Kiếp Tài (劫財)",
                  "Thực Thần (食神)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Thiên Tài (偏財)",
                  "Tỷ Kiên (比肩)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thương Quan (傷官)",
                  "Chính Ấn (正印)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thực Thần (食神)",
                  "Thiên Ấn (偏印)",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Canh Kim (庚)",
                  "Kiếp Tài (劫財)",
                  "Chính Quan (正官)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Tân Kim (辛)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Quan (偏官)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Chính Ấn (正印)",
                  "Chính Tài (正財)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thiên Ấn (偏印)",
                  "Thiên Tài (偏財)",
                  "Chính Quan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [亥 (Lợn)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Địa chi",
    "title": "亥 — Địa chi của Lợn",
    "summary": "Các can mà Địa chi 亥 chứa (Tàng can), sức mạnh của ngũ hành khi nó là Chi tháng, và Thập thần được đọc cho từng Can ngày — được trình bày đúng như quy tắc tính toán của Saju-Link.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "亥 là Địa chi thứ mười hai trong mười hai Địa chi",
        "blocks": [
          {
            "p": "亥 là Địa chi thứ mười hai trong mười hai Địa chi và thuộc con giáp Lợn. Khi Chi tháng sinh là 亥, mùa là mùa đông và hành làm chủ mùa là Thủy."
          },
          {
            "p": "Khi Chi ngày sinh là 亥, ký tự này là vị trí phối ngẫu. Bên dưới là các can mà chi này chứa và chúng là gì đối với Can ngày."
          }
        ]
      },
      {
        "title": "Các can mà chi này chứa (Tàng can)",
        "blocks": [
          {
            "p": "Một chi là một ký tự hiển thị nhưng bên trong chứa các can. Tỷ lệ là cách ba mươi ngày của chi được chia cho các can, và can bản khí là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của 亥",
              "head": [
                "Can",
                "Ngũ hành và âm dương",
                "Vị trí",
                "Tỷ lệ"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương",
                  "dư khí (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương",
                  "trung khí (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương",
                  "bản khí (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sức mạnh của ngũ hành khi Chi tháng là 亥",
        "blocks": [
          {
            "p": "Khi Chi tháng sinh là 亥, mỗi hành nhận một trạng thái (Vượng, Tướng, Hưu, Tù, Tử), và trạng thái đó trở thành hệ số nhân áp dụng cho sức mạnh của hành."
          },
          {
            "table": {
              "caption": "Trạng thái các hành khi Chi tháng là 亥 (mùa đông)",
              "head": [
                "Ngũ hành",
                "Trạng thái",
                "Hệ số nhân"
              ],
              "rows": [
                [
                  "Mộc",
                  "Tướng (相)",
                  "{vitalitySang}"
                ],
                [
                  "Hỏa",
                  "Tử (死)",
                  "{vitalitySa}"
                ],
                [
                  "Thổ",
                  "Tù (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Kim",
                  "Hưu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Thủy",
                  "Vượng (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Thập thần theo Can ngày",
        "blocks": [
          {
            "p": "Cùng các Tàng can của 亥 sẽ thành những Thập thần khác nhau tùy theo Can ngày. Khi 亥 là Chi ngày, bảng này là cách đọc vị trí phối ngẫu."
          },
          {
            "table": {
              "caption": "Tàng can của 亥 là gì đối với từng Can ngày",
              "head": [
                "Can ngày",
                "Mậu Thổ (戊) — dư khí (餘氣)",
                "Giáp Mộc (甲) — trung khí (中氣)",
                "Nhâm Thủy (壬) — bản khí (本氣)"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Thiên Tài (偏財)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Ất Mộc (乙)",
                  "Chính Tài (正財)",
                  "Kiếp Tài (劫財)",
                  "Chính Ấn (正印)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Thực Thần (食神)",
                  "Thiên Ấn (偏印)",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Thương Quan (傷官)",
                  "Chính Ấn (正印)",
                  "Chính Quan (正官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Tỷ Kiên (比肩)",
                  "Thiên Quan (偏官)",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Kiếp Tài (劫財)",
                  "Chính Quan (正官)",
                  "Chính Tài (正財)"
                ],
                [
                  "Canh Kim (庚)",
                  "Thiên Ấn (偏印)",
                  "Thiên Tài (偏財)",
                  "Thực Thần (食神)"
                ],
                [
                  "Tân Kim (辛)",
                  "Chính Ấn (正印)",
                  "Chính Tài (正財)",
                  "Thương Quan (傷官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thiên Quan (偏官)",
                  "Thực Thần (食神)",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Quý Thủy (癸)",
                  "Chính Quan (正官)",
                  "Thương Quan (傷官)",
                  "Kiếp Tài (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một chi không quyết định một con người. Cùng một chi được đọc khác nhau tùy theo Can ngày và Chi tháng.",
              "Các mối quan hệ giữa các chi như hợp, xung và hại không được đề cập ở đây."
            ]
          },
          {
            "p": "Mối quan hệ giữa các chi nằm trong [biểu đồ mười hai chi](/guide/branches), còn ý nghĩa của nó với tư cách con giáp nằm trong [vị trí của con giáp trong saju](/guide/zodiac). Các Địa chi khác: [子 (Chuột)](/guide/branch-ja) · [丑 (Trâu)](/guide/branch-chuk) · [寅 (Hổ)](/guide/branch-in) · [卯 (Thỏ)](/guide/branch-myo) · [辰 (Rồng)](/guide/branch-jin) · [巳 (Rắn)](/guide/branch-sa) · [午 (Ngựa)](/guide/branch-o) · [未 (Cừu)](/guide/branch-mi) · [申 (Khỉ)](/guide/branch-sin) · [酉 (Gà)](/guide/branch-yu) · [戌 (Chó)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 甲子",
    "summary": "Cách Saju-Link đọc Trụ ngày 甲子 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "甲子 là Trụ ngày số 1 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 甲子, Can ngày là 甲 (Mộc, Dương) và Chi ngày là 子 (Chuột). Trong chu kỳ sáu mươi, đây là tổ hợp số 1."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 甲 là \"Giáp Mộc (甲)\", và dòng mà màn hình kết quả hiển thị là: \"Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 子 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 甲, các can mà 子 chứa như sau. Can bản khí (癸) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 甲子",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 甲"
              ],
              "rows": [
                [
                  "Nhâm Thủy (壬)",
                  "dư khí (餘氣)",
                  "{hidJaYeo}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Quý Thủy (癸)",
                  "bản khí (本氣)",
                  "{hidJaBon}",
                  "Chính Ấn (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 甲, Chính Tài là 己 và Chính Quan là 辛."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 己. 己 không được chứa trong 子."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 辛. 辛 không được chứa trong 子."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [癸亥](/guide/pillar-gye-hae) và Trụ ngày sau là [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Nó gồm [Giáp Mộc (甲)](/guide/stem-gap) và [子 (Chuột)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 乙丑",
    "summary": "Cách Saju-Link đọc Trụ ngày 乙丑 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "乙丑 là Trụ ngày số 2 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 乙丑, Can ngày là 乙 (Mộc, Âm) và Chi ngày là 丑 (Trâu). Trong chu kỳ sáu mươi, đây là tổ hợp số 2."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 乙 là \"Ất Mộc (乙)\", và dòng mà màn hình kết quả hiển thị là: \"Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 丑 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 乙, các can mà 丑 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 乙丑",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 乙"
              ],
              "rows": [
                [
                  "Quý Thủy (癸)",
                  "dư khí (餘氣)",
                  "{hidChukYeo}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Tân Kim (辛)",
                  "trung khí (中氣)",
                  "{hidChukJung}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidChukBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 乙, Chính Tài là 戊 và Chính Quan là 庚."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 戊. 戊 không được chứa trong 丑."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 庚. 庚 không được chứa trong 丑."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [甲子](/guide/pillar-gap-ja) và Trụ ngày sau là [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Nó gồm [Ất Mộc (乙)](/guide/stem-eul) và [丑 (Trâu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丙寅",
    "summary": "Cách Saju-Link đọc Trụ ngày 丙寅 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丙寅 là Trụ ngày số 3 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丙寅, Can ngày là 丙 (Hỏa, Dương) và Chi ngày là 寅 (Hổ). Trong chu kỳ sáu mươi, đây là tổ hợp số 3."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丙 là \"Bính Hỏa (丙)\", và dòng mà màn hình kết quả hiển thị là: \"Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 寅 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丙, các can mà 寅 chứa như sau. Can bản khí (甲) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丙寅",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丙"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidInYeo}",
                  "Thực Thần (食神)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "trung khí (中氣)",
                  "{hidInJung}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "bản khí (本氣)",
                  "{hidInBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丙, Chính Tài là 辛 và Chính Quan là 癸."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 辛. 辛 không được chứa trong 寅."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 癸. 癸 không được chứa trong 寅."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [乙丑](/guide/pillar-eul-chuk) và Trụ ngày sau là [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Nó gồm [Bính Hỏa (丙)](/guide/stem-byeong) và [寅 (Hổ)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丁卯",
    "summary": "Cách Saju-Link đọc Trụ ngày 丁卯 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丁卯 là Trụ ngày số 4 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丁卯, Can ngày là 丁 (Hỏa, Âm) và Chi ngày là 卯 (Thỏ). Trong chu kỳ sáu mươi, đây là tổ hợp số 4."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丁 là \"Đinh Hỏa (丁)\", và dòng mà màn hình kết quả hiển thị là: \"Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 卯 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丁, các can mà 卯 chứa như sau. Can bản khí (乙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丁卯",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丁"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "dư khí (餘氣)",
                  "{hidMyoYeo}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Ất Mộc (乙)",
                  "bản khí (本氣)",
                  "{hidMyoBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丁, Chính Tài là 庚 và Chính Quan là 壬."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 庚. 庚 không được chứa trong 卯."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 壬. 壬 không được chứa trong 卯."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丙寅](/guide/pillar-byeong-in) và Trụ ngày sau là [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Nó gồm [Đinh Hỏa (丁)](/guide/stem-jeong) và [卯 (Thỏ)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 戊辰",
    "summary": "Cách Saju-Link đọc Trụ ngày 戊辰 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "戊辰 là Trụ ngày số 5 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 戊辰, Can ngày là 戊 (Thổ, Dương) và Chi ngày là 辰 (Rồng). Trong chu kỳ sáu mươi, đây là tổ hợp số 5."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 戊 là \"Mậu Thổ (戊)\", và dòng mà màn hình kết quả hiển thị là: \"Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 辰 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 戊, các can mà 辰 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 戊辰",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 戊"
              ],
              "rows": [
                [
                  "Ất Mộc (乙)",
                  "dư khí (餘氣)",
                  "{hidJinYeo}",
                  "Chính Quan (正官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "trung khí (中氣)",
                  "{hidJinJung}",
                  "Chính Tài (正財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidJinBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 戊, Chính Tài là 癸 và Chính Quan là 乙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 癸. 癸 được chứa trong 辰 (trung khí (中氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 乙. 乙 được chứa trong 辰 (dư khí (餘氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丁卯](/guide/pillar-jeong-myo) và Trụ ngày sau là [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Nó gồm [Mậu Thổ (戊)](/guide/stem-mu) và [辰 (Rồng)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 己巳",
    "summary": "Cách Saju-Link đọc Trụ ngày 己巳 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "己巳 là Trụ ngày số 6 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 己巳, Can ngày là 己 (Thổ, Âm) và Chi ngày là 巳 (Rắn). Trong chu kỳ sáu mươi, đây là tổ hợp số 6."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 己 là \"Kỷ Thổ (己)\", và dòng mà màn hình kết quả hiển thị là: \"Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 巳 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 己, các can mà 巳 chứa như sau. Can bản khí (丙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 己巳",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 己"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSaYeo}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Canh Kim (庚)",
                  "trung khí (中氣)",
                  "{hidSaJung}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "bản khí (本氣)",
                  "{hidSaBon}",
                  "Chính Ấn (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 己, Chính Tài là 壬 và Chính Quan là 甲."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 壬. 壬 không được chứa trong 巳."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 甲. 甲 không được chứa trong 巳."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [戊辰](/guide/pillar-mu-jin) và Trụ ngày sau là [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Nó gồm [Kỷ Thổ (己)](/guide/stem-gi) và [巳 (Rắn)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 庚午",
    "summary": "Cách Saju-Link đọc Trụ ngày 庚午 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "庚午 là Trụ ngày số 7 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 庚午, Can ngày là 庚 (Kim, Dương) và Chi ngày là 午 (Ngựa). Trong chu kỳ sáu mươi, đây là tổ hợp số 7."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 庚 là \"Canh Kim (庚)\", và dòng mà màn hình kết quả hiển thị là: \"Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 午 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 庚, các can mà 午 chứa như sau. Can bản khí (丁) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 庚午",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 庚"
              ],
              "rows": [
                [
                  "Bính Hỏa (丙)",
                  "dư khí (餘氣)",
                  "{hidOYeo}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "trung khí (中氣)",
                  "{hidOJung}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "bản khí (本氣)",
                  "{hidOBon}",
                  "Chính Quan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 庚, Chính Tài là 乙 và Chính Quan là 丁."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 乙. 乙 không được chứa trong 午."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丁. 丁 được chứa trong 午 (bản khí (本氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [己巳](/guide/pillar-gi-sa) và Trụ ngày sau là [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Nó gồm [Canh Kim (庚)](/guide/stem-gyeong) và [午 (Ngựa)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 辛未",
    "summary": "Cách Saju-Link đọc Trụ ngày 辛未 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "辛未 là Trụ ngày số 8 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 辛未, Can ngày là 辛 (Kim, Âm) và Chi ngày là 未 (Cừu). Trong chu kỳ sáu mươi, đây là tổ hợp số 8."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 辛 là \"Tân Kim (辛)\", và dòng mà màn hình kết quả hiển thị là: \"Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 未 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 辛, các can mà 未 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 辛未",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 辛"
              ],
              "rows": [
                [
                  "Đinh Hỏa (丁)",
                  "dư khí (餘氣)",
                  "{hidMiYeo}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "trung khí (中氣)",
                  "{hidMiJung}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidMiBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 辛, Chính Tài là 甲 và Chính Quan là 丙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 甲. 甲 không được chứa trong 未."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丙. 丙 không được chứa trong 未."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [庚午](/guide/pillar-gyeong-o) và Trụ ngày sau là [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Nó gồm [Tân Kim (辛)](/guide/stem-sin) và [未 (Cừu)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 壬申",
    "summary": "Cách Saju-Link đọc Trụ ngày 壬申 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "壬申 là Trụ ngày số 9 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 壬申, Can ngày là 壬 (Thủy, Dương) và Chi ngày là 申 (Khỉ). Trong chu kỳ sáu mươi, đây là tổ hợp số 9."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 壬 là \"Nhâm Thủy (壬)\", và dòng mà màn hình kết quả hiển thị là: \"Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 申 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 壬, các can mà 申 chứa như sau. Can bản khí (庚) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 壬申",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 壬"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSinYeo}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "trung khí (中氣)",
                  "{hidSinJung}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Canh Kim (庚)",
                  "bản khí (本氣)",
                  "{hidSinBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 壬, Chính Tài là 丁 và Chính Quan là 己."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丁. 丁 không được chứa trong 申."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 己. 己 không được chứa trong 申."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [辛未](/guide/pillar-sin-mi) và Trụ ngày sau là [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Nó gồm [Nhâm Thủy (壬)](/guide/stem-im) và [申 (Khỉ)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 癸酉",
    "summary": "Cách Saju-Link đọc Trụ ngày 癸酉 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "癸酉 là Trụ ngày số 10 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 癸酉, Can ngày là 癸 (Thủy, Âm) và Chi ngày là 酉 (Gà). Trong chu kỳ sáu mươi, đây là tổ hợp số 10."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 癸 là \"Quý Thủy (癸)\", và dòng mà màn hình kết quả hiển thị là: \"Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 酉 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 癸, các can mà 酉 chứa như sau. Can bản khí (辛) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 癸酉",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 癸"
              ],
              "rows": [
                [
                  "Canh Kim (庚)",
                  "dư khí (餘氣)",
                  "{hidYuYeo}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Tân Kim (辛)",
                  "bản khí (本氣)",
                  "{hidYuBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 癸, Chính Tài là 丙 và Chính Quan là 戊."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丙. 丙 không được chứa trong 酉."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 戊. 戊 không được chứa trong 酉."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [壬申](/guide/pillar-im-sin) và Trụ ngày sau là [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Nó gồm [Quý Thủy (癸)](/guide/stem-gye) và [酉 (Gà)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 甲戌",
    "summary": "Cách Saju-Link đọc Trụ ngày 甲戌 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "甲戌 là Trụ ngày số 11 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 甲戌, Can ngày là 甲 (Mộc, Dương) và Chi ngày là 戌 (Chó). Trong chu kỳ sáu mươi, đây là tổ hợp số 11."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 甲 là \"Giáp Mộc (甲)\", và dòng mà màn hình kết quả hiển thị là: \"Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 戌 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 甲, các can mà 戌 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 甲戌",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 甲"
              ],
              "rows": [
                [
                  "Tân Kim (辛)",
                  "dư khí (餘氣)",
                  "{hidSulYeo}",
                  "Chính Quan (正官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "trung khí (中氣)",
                  "{hidSulJung}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidSulBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 甲, Chính Tài là 己 và Chính Quan là 辛."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 己. 己 không được chứa trong 戌."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 辛. 辛 được chứa trong 戌 (dư khí (餘氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [癸酉](/guide/pillar-gye-yu) và Trụ ngày sau là [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Nó gồm [Giáp Mộc (甲)](/guide/stem-gap) và [戌 (Chó)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 乙亥",
    "summary": "Cách Saju-Link đọc Trụ ngày 乙亥 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "乙亥 là Trụ ngày số 12 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 乙亥, Can ngày là 乙 (Mộc, Âm) và Chi ngày là 亥 (Lợn). Trong chu kỳ sáu mươi, đây là tổ hợp số 12."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 乙 là \"Ất Mộc (乙)\", và dòng mà màn hình kết quả hiển thị là: \"Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 亥 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 乙, các can mà 亥 chứa như sau. Can bản khí (壬) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 乙亥",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 乙"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidHaeYeo}",
                  "Chính Tài (正財)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "trung khí (中氣)",
                  "{hidHaeJung}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "bản khí (本氣)",
                  "{hidHaeBon}",
                  "Chính Ấn (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 乙, Chính Tài là 戊 và Chính Quan là 庚."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 戊. 戊 được chứa trong 亥 (dư khí (餘氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 庚. 庚 không được chứa trong 亥."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [甲戌](/guide/pillar-gap-sul) và Trụ ngày sau là [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Nó gồm [Ất Mộc (乙)](/guide/stem-eul) và [亥 (Lợn)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丙子",
    "summary": "Cách Saju-Link đọc Trụ ngày 丙子 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丙子 là Trụ ngày số 13 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丙子, Can ngày là 丙 (Hỏa, Dương) và Chi ngày là 子 (Chuột). Trong chu kỳ sáu mươi, đây là tổ hợp số 13."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丙 là \"Bính Hỏa (丙)\", và dòng mà màn hình kết quả hiển thị là: \"Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 子 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丙, các can mà 子 chứa như sau. Can bản khí (癸) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丙子",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丙"
              ],
              "rows": [
                [
                  "Nhâm Thủy (壬)",
                  "dư khí (餘氣)",
                  "{hidJaYeo}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "bản khí (本氣)",
                  "{hidJaBon}",
                  "Chính Quan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丙, Chính Tài là 辛 và Chính Quan là 癸."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 辛. 辛 không được chứa trong 子."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 癸. 癸 được chứa trong 子 (bản khí (本氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [乙亥](/guide/pillar-eul-hae) và Trụ ngày sau là [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Nó gồm [Bính Hỏa (丙)](/guide/stem-byeong) và [子 (Chuột)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丁丑",
    "summary": "Cách Saju-Link đọc Trụ ngày 丁丑 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丁丑 là Trụ ngày số 14 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丁丑, Can ngày là 丁 (Hỏa, Âm) và Chi ngày là 丑 (Trâu). Trong chu kỳ sáu mươi, đây là tổ hợp số 14."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丁 là \"Đinh Hỏa (丁)\", và dòng mà màn hình kết quả hiển thị là: \"Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 丑 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丁, các can mà 丑 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丁丑",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丁"
              ],
              "rows": [
                [
                  "Quý Thủy (癸)",
                  "dư khí (餘氣)",
                  "{hidChukYeo}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Tân Kim (辛)",
                  "trung khí (中氣)",
                  "{hidChukJung}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidChukBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丁, Chính Tài là 庚 và Chính Quan là 壬."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 庚. 庚 không được chứa trong 丑."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 壬. 壬 không được chứa trong 丑."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丙子](/guide/pillar-byeong-ja) và Trụ ngày sau là [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Nó gồm [Đinh Hỏa (丁)](/guide/stem-jeong) và [丑 (Trâu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 戊寅",
    "summary": "Cách Saju-Link đọc Trụ ngày 戊寅 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "戊寅 là Trụ ngày số 15 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 戊寅, Can ngày là 戊 (Thổ, Dương) và Chi ngày là 寅 (Hổ). Trong chu kỳ sáu mươi, đây là tổ hợp số 15."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 戊 là \"Mậu Thổ (戊)\", và dòng mà màn hình kết quả hiển thị là: \"Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 寅 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 戊, các can mà 寅 chứa như sau. Can bản khí (甲) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 戊寅",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 戊"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidInYeo}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "trung khí (中氣)",
                  "{hidInJung}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "bản khí (本氣)",
                  "{hidInBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 戊, Chính Tài là 癸 và Chính Quan là 乙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 癸. 癸 không được chứa trong 寅."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 乙. 乙 không được chứa trong 寅."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丁丑](/guide/pillar-jeong-chuk) và Trụ ngày sau là [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Nó gồm [Mậu Thổ (戊)](/guide/stem-mu) và [寅 (Hổ)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 己卯",
    "summary": "Cách Saju-Link đọc Trụ ngày 己卯 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "己卯 là Trụ ngày số 16 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 己卯, Can ngày là 己 (Thổ, Âm) và Chi ngày là 卯 (Thỏ). Trong chu kỳ sáu mươi, đây là tổ hợp số 16."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 己 là \"Kỷ Thổ (己)\", và dòng mà màn hình kết quả hiển thị là: \"Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 卯 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 己, các can mà 卯 chứa như sau. Can bản khí (乙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 己卯",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 己"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "dư khí (餘氣)",
                  "{hidMyoYeo}",
                  "Chính Quan (正官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "bản khí (本氣)",
                  "{hidMyoBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 己, Chính Tài là 壬 và Chính Quan là 甲."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 壬. 壬 không được chứa trong 卯."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 甲. 甲 được chứa trong 卯 (dư khí (餘氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [戊寅](/guide/pillar-mu-in) và Trụ ngày sau là [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Nó gồm [Kỷ Thổ (己)](/guide/stem-gi) và [卯 (Thỏ)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 庚辰",
    "summary": "Cách Saju-Link đọc Trụ ngày 庚辰 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "庚辰 là Trụ ngày số 17 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 庚辰, Can ngày là 庚 (Kim, Dương) và Chi ngày là 辰 (Rồng). Trong chu kỳ sáu mươi, đây là tổ hợp số 17."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 庚 là \"Canh Kim (庚)\", và dòng mà màn hình kết quả hiển thị là: \"Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 辰 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 庚, các can mà 辰 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 庚辰",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 庚"
              ],
              "rows": [
                [
                  "Ất Mộc (乙)",
                  "dư khí (餘氣)",
                  "{hidJinYeo}",
                  "Chính Tài (正財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "trung khí (中氣)",
                  "{hidJinJung}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidJinBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 庚, Chính Tài là 乙 và Chính Quan là 丁."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 乙. 乙 được chứa trong 辰 (dư khí (餘氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丁. 丁 không được chứa trong 辰."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [己卯](/guide/pillar-gi-myo) và Trụ ngày sau là [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Nó gồm [Canh Kim (庚)](/guide/stem-gyeong) và [辰 (Rồng)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 辛巳",
    "summary": "Cách Saju-Link đọc Trụ ngày 辛巳 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "辛巳 là Trụ ngày số 18 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 辛巳, Can ngày là 辛 (Kim, Âm) và Chi ngày là 巳 (Rắn). Trong chu kỳ sáu mươi, đây là tổ hợp số 18."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 辛 là \"Tân Kim (辛)\", và dòng mà màn hình kết quả hiển thị là: \"Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 巳 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 辛, các can mà 巳 chứa như sau. Can bản khí (丙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 辛巳",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 辛"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSaYeo}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Canh Kim (庚)",
                  "trung khí (中氣)",
                  "{hidSaJung}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "bản khí (本氣)",
                  "{hidSaBon}",
                  "Chính Quan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 辛, Chính Tài là 甲 và Chính Quan là 丙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 甲. 甲 không được chứa trong 巳."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丙. 丙 được chứa trong 巳 (bản khí (本氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [庚辰](/guide/pillar-gyeong-jin) và Trụ ngày sau là [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Nó gồm [Tân Kim (辛)](/guide/stem-sin) và [巳 (Rắn)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 壬午",
    "summary": "Cách Saju-Link đọc Trụ ngày 壬午 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "壬午 là Trụ ngày số 19 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 壬午, Can ngày là 壬 (Thủy, Dương) và Chi ngày là 午 (Ngựa). Trong chu kỳ sáu mươi, đây là tổ hợp số 19."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 壬 là \"Nhâm Thủy (壬)\", và dòng mà màn hình kết quả hiển thị là: \"Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 午 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 壬, các can mà 午 chứa như sau. Can bản khí (丁) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 壬午",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 壬"
              ],
              "rows": [
                [
                  "Bính Hỏa (丙)",
                  "dư khí (餘氣)",
                  "{hidOYeo}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "trung khí (中氣)",
                  "{hidOJung}",
                  "Chính Quan (正官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "bản khí (本氣)",
                  "{hidOBon}",
                  "Chính Tài (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 壬, Chính Tài là 丁 và Chính Quan là 己."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丁. 丁 được chứa trong 午 (bản khí (本氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 己. 己 được chứa trong 午 (trung khí (中氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [辛巳](/guide/pillar-sin-sa) và Trụ ngày sau là [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Nó gồm [Nhâm Thủy (壬)](/guide/stem-im) và [午 (Ngựa)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 癸未",
    "summary": "Cách Saju-Link đọc Trụ ngày 癸未 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "癸未 là Trụ ngày số 20 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 癸未, Can ngày là 癸 (Thủy, Âm) và Chi ngày là 未 (Cừu). Trong chu kỳ sáu mươi, đây là tổ hợp số 20."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 癸 là \"Quý Thủy (癸)\", và dòng mà màn hình kết quả hiển thị là: \"Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 未 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 癸, các can mà 未 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 癸未",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 癸"
              ],
              "rows": [
                [
                  "Đinh Hỏa (丁)",
                  "dư khí (餘氣)",
                  "{hidMiYeo}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "trung khí (中氣)",
                  "{hidMiJung}",
                  "Thực Thần (食神)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidMiBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 癸, Chính Tài là 丙 và Chính Quan là 戊."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丙. 丙 không được chứa trong 未."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 戊. 戊 không được chứa trong 未."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [壬午](/guide/pillar-im-o) và Trụ ngày sau là [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Nó gồm [Quý Thủy (癸)](/guide/stem-gye) và [未 (Cừu)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 甲申",
    "summary": "Cách Saju-Link đọc Trụ ngày 甲申 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "甲申 là Trụ ngày số 21 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 甲申, Can ngày là 甲 (Mộc, Dương) và Chi ngày là 申 (Khỉ). Trong chu kỳ sáu mươi, đây là tổ hợp số 21."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 甲 là \"Giáp Mộc (甲)\", và dòng mà màn hình kết quả hiển thị là: \"Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 申 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 甲, các can mà 申 chứa như sau. Can bản khí (庚) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 甲申",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 甲"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSinYeo}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "trung khí (中氣)",
                  "{hidSinJung}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Canh Kim (庚)",
                  "bản khí (本氣)",
                  "{hidSinBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 甲, Chính Tài là 己 và Chính Quan là 辛."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 己. 己 không được chứa trong 申."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 辛. 辛 không được chứa trong 申."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [癸未](/guide/pillar-gye-mi) và Trụ ngày sau là [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Nó gồm [Giáp Mộc (甲)](/guide/stem-gap) và [申 (Khỉ)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 乙酉",
    "summary": "Cách Saju-Link đọc Trụ ngày 乙酉 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "乙酉 là Trụ ngày số 22 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 乙酉, Can ngày là 乙 (Mộc, Âm) và Chi ngày là 酉 (Gà). Trong chu kỳ sáu mươi, đây là tổ hợp số 22."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 乙 là \"Ất Mộc (乙)\", và dòng mà màn hình kết quả hiển thị là: \"Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 酉 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 乙, các can mà 酉 chứa như sau. Can bản khí (辛) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 乙酉",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 乙"
              ],
              "rows": [
                [
                  "Canh Kim (庚)",
                  "dư khí (餘氣)",
                  "{hidYuYeo}",
                  "Chính Quan (正官)"
                ],
                [
                  "Tân Kim (辛)",
                  "bản khí (本氣)",
                  "{hidYuBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 乙, Chính Tài là 戊 và Chính Quan là 庚."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 戊. 戊 không được chứa trong 酉."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 庚. 庚 được chứa trong 酉 (dư khí (餘氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [甲申](/guide/pillar-gap-sin) và Trụ ngày sau là [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Nó gồm [Ất Mộc (乙)](/guide/stem-eul) và [酉 (Gà)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丙戌",
    "summary": "Cách Saju-Link đọc Trụ ngày 丙戌 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丙戌 là Trụ ngày số 23 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丙戌, Can ngày là 丙 (Hỏa, Dương) và Chi ngày là 戌 (Chó). Trong chu kỳ sáu mươi, đây là tổ hợp số 23."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丙 là \"Bính Hỏa (丙)\", và dòng mà màn hình kết quả hiển thị là: \"Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 戌 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丙, các can mà 戌 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丙戌",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丙"
              ],
              "rows": [
                [
                  "Tân Kim (辛)",
                  "dư khí (餘氣)",
                  "{hidSulYeo}",
                  "Chính Tài (正財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "trung khí (中氣)",
                  "{hidSulJung}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidSulBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丙, Chính Tài là 辛 và Chính Quan là 癸."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 辛. 辛 được chứa trong 戌 (dư khí (餘氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 癸. 癸 không được chứa trong 戌."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [乙酉](/guide/pillar-eul-yu) và Trụ ngày sau là [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Nó gồm [Bính Hỏa (丙)](/guide/stem-byeong) và [戌 (Chó)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丁亥",
    "summary": "Cách Saju-Link đọc Trụ ngày 丁亥 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丁亥 là Trụ ngày số 24 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丁亥, Can ngày là 丁 (Hỏa, Âm) và Chi ngày là 亥 (Lợn). Trong chu kỳ sáu mươi, đây là tổ hợp số 24."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丁 là \"Đinh Hỏa (丁)\", và dòng mà màn hình kết quả hiển thị là: \"Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 亥 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丁, các can mà 亥 chứa như sau. Can bản khí (壬) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丁亥",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丁"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidHaeYeo}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "trung khí (中氣)",
                  "{hidHaeJung}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "bản khí (本氣)",
                  "{hidHaeBon}",
                  "Chính Quan (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丁, Chính Tài là 庚 và Chính Quan là 壬."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 庚. 庚 không được chứa trong 亥."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 壬. 壬 được chứa trong 亥 (bản khí (本氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丙戌](/guide/pillar-byeong-sul) và Trụ ngày sau là [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Nó gồm [Đinh Hỏa (丁)](/guide/stem-jeong) và [亥 (Lợn)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 戊子",
    "summary": "Cách Saju-Link đọc Trụ ngày 戊子 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "戊子 là Trụ ngày số 25 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 戊子, Can ngày là 戊 (Thổ, Dương) và Chi ngày là 子 (Chuột). Trong chu kỳ sáu mươi, đây là tổ hợp số 25."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 戊 là \"Mậu Thổ (戊)\", và dòng mà màn hình kết quả hiển thị là: \"Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 子 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 戊, các can mà 子 chứa như sau. Can bản khí (癸) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 戊子",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 戊"
              ],
              "rows": [
                [
                  "Nhâm Thủy (壬)",
                  "dư khí (餘氣)",
                  "{hidJaYeo}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "bản khí (本氣)",
                  "{hidJaBon}",
                  "Chính Tài (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 戊, Chính Tài là 癸 và Chính Quan là 乙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 癸. 癸 được chứa trong 子 (bản khí (本氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 乙. 乙 không được chứa trong 子."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丁亥](/guide/pillar-jeong-hae) và Trụ ngày sau là [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Nó gồm [Mậu Thổ (戊)](/guide/stem-mu) và [子 (Chuột)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 己丑",
    "summary": "Cách Saju-Link đọc Trụ ngày 己丑 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "己丑 là Trụ ngày số 26 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 己丑, Can ngày là 己 (Thổ, Âm) và Chi ngày là 丑 (Trâu). Trong chu kỳ sáu mươi, đây là tổ hợp số 26."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 己 là \"Kỷ Thổ (己)\", và dòng mà màn hình kết quả hiển thị là: \"Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 丑 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 己, các can mà 丑 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 己丑",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 己"
              ],
              "rows": [
                [
                  "Quý Thủy (癸)",
                  "dư khí (餘氣)",
                  "{hidChukYeo}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Tân Kim (辛)",
                  "trung khí (中氣)",
                  "{hidChukJung}",
                  "Thực Thần (食神)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidChukBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 己, Chính Tài là 壬 và Chính Quan là 甲."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 壬. 壬 không được chứa trong 丑."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 甲. 甲 không được chứa trong 丑."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [戊子](/guide/pillar-mu-ja) và Trụ ngày sau là [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Nó gồm [Kỷ Thổ (己)](/guide/stem-gi) và [丑 (Trâu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 庚寅",
    "summary": "Cách Saju-Link đọc Trụ ngày 庚寅 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "庚寅 là Trụ ngày số 27 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 庚寅, Can ngày là 庚 (Kim, Dương) và Chi ngày là 寅 (Hổ). Trong chu kỳ sáu mươi, đây là tổ hợp số 27."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 庚 là \"Canh Kim (庚)\", và dòng mà màn hình kết quả hiển thị là: \"Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 寅 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 庚, các can mà 寅 chứa như sau. Can bản khí (甲) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 庚寅",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 庚"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidInYeo}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "trung khí (中氣)",
                  "{hidInJung}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "bản khí (本氣)",
                  "{hidInBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 庚, Chính Tài là 乙 và Chính Quan là 丁."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 乙. 乙 không được chứa trong 寅."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丁. 丁 không được chứa trong 寅."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [己丑](/guide/pillar-gi-chuk) và Trụ ngày sau là [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Nó gồm [Canh Kim (庚)](/guide/stem-gyeong) và [寅 (Hổ)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 辛卯",
    "summary": "Cách Saju-Link đọc Trụ ngày 辛卯 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "辛卯 là Trụ ngày số 28 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 辛卯, Can ngày là 辛 (Kim, Âm) và Chi ngày là 卯 (Thỏ). Trong chu kỳ sáu mươi, đây là tổ hợp số 28."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 辛 là \"Tân Kim (辛)\", và dòng mà màn hình kết quả hiển thị là: \"Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 卯 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 辛, các can mà 卯 chứa như sau. Can bản khí (乙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 辛卯",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 辛"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "dư khí (餘氣)",
                  "{hidMyoYeo}",
                  "Chính Tài (正財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "bản khí (本氣)",
                  "{hidMyoBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 辛, Chính Tài là 甲 và Chính Quan là 丙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 甲. 甲 được chứa trong 卯 (dư khí (餘氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丙. 丙 không được chứa trong 卯."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [庚寅](/guide/pillar-gyeong-in) và Trụ ngày sau là [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Nó gồm [Tân Kim (辛)](/guide/stem-sin) và [卯 (Thỏ)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 壬辰",
    "summary": "Cách Saju-Link đọc Trụ ngày 壬辰 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "壬辰 là Trụ ngày số 29 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 壬辰, Can ngày là 壬 (Thủy, Dương) và Chi ngày là 辰 (Rồng). Trong chu kỳ sáu mươi, đây là tổ hợp số 29."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 壬 là \"Nhâm Thủy (壬)\", và dòng mà màn hình kết quả hiển thị là: \"Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 辰 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 壬, các can mà 辰 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 壬辰",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 壬"
              ],
              "rows": [
                [
                  "Ất Mộc (乙)",
                  "dư khí (餘氣)",
                  "{hidJinYeo}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Quý Thủy (癸)",
                  "trung khí (中氣)",
                  "{hidJinJung}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidJinBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 壬, Chính Tài là 丁 và Chính Quan là 己."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丁. 丁 không được chứa trong 辰."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 己. 己 không được chứa trong 辰."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [辛卯](/guide/pillar-sin-myo) và Trụ ngày sau là [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Nó gồm [Nhâm Thủy (壬)](/guide/stem-im) và [辰 (Rồng)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 癸巳",
    "summary": "Cách Saju-Link đọc Trụ ngày 癸巳 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "癸巳 là Trụ ngày số 30 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 癸巳, Can ngày là 癸 (Thủy, Âm) và Chi ngày là 巳 (Rắn). Trong chu kỳ sáu mươi, đây là tổ hợp số 30."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 癸 là \"Quý Thủy (癸)\", và dòng mà màn hình kết quả hiển thị là: \"Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 巳 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 癸, các can mà 巳 chứa như sau. Can bản khí (丙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 癸巳",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 癸"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSaYeo}",
                  "Chính Quan (正官)"
                ],
                [
                  "Canh Kim (庚)",
                  "trung khí (中氣)",
                  "{hidSaJung}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "bản khí (本氣)",
                  "{hidSaBon}",
                  "Chính Tài (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 癸, Chính Tài là 丙 và Chính Quan là 戊."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丙. 丙 được chứa trong 巳 (bản khí (本氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 戊. 戊 được chứa trong 巳 (dư khí (餘氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [壬辰](/guide/pillar-im-jin) và Trụ ngày sau là [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Nó gồm [Quý Thủy (癸)](/guide/stem-gye) và [巳 (Rắn)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 甲午",
    "summary": "Cách Saju-Link đọc Trụ ngày 甲午 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "甲午 là Trụ ngày số 31 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 甲午, Can ngày là 甲 (Mộc, Dương) và Chi ngày là 午 (Ngựa). Trong chu kỳ sáu mươi, đây là tổ hợp số 31."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 甲 là \"Giáp Mộc (甲)\", và dòng mà màn hình kết quả hiển thị là: \"Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 午 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 甲, các can mà 午 chứa như sau. Can bản khí (丁) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 甲午",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 甲"
              ],
              "rows": [
                [
                  "Bính Hỏa (丙)",
                  "dư khí (餘氣)",
                  "{hidOYeo}",
                  "Thực Thần (食神)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "trung khí (中氣)",
                  "{hidOJung}",
                  "Chính Tài (正財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "bản khí (本氣)",
                  "{hidOBon}",
                  "Thương Quan (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 甲, Chính Tài là 己 và Chính Quan là 辛."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 己. 己 được chứa trong 午 (trung khí (中氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 辛. 辛 không được chứa trong 午."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [癸巳](/guide/pillar-gye-sa) và Trụ ngày sau là [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Nó gồm [Giáp Mộc (甲)](/guide/stem-gap) và [午 (Ngựa)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 乙未",
    "summary": "Cách Saju-Link đọc Trụ ngày 乙未 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "乙未 là Trụ ngày số 32 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 乙未, Can ngày là 乙 (Mộc, Âm) và Chi ngày là 未 (Cừu). Trong chu kỳ sáu mươi, đây là tổ hợp số 32."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 乙 là \"Ất Mộc (乙)\", và dòng mà màn hình kết quả hiển thị là: \"Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 未 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 乙, các can mà 未 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 乙未",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 乙"
              ],
              "rows": [
                [
                  "Đinh Hỏa (丁)",
                  "dư khí (餘氣)",
                  "{hidMiYeo}",
                  "Thực Thần (食神)"
                ],
                [
                  "Ất Mộc (乙)",
                  "trung khí (中氣)",
                  "{hidMiJung}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidMiBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 乙, Chính Tài là 戊 và Chính Quan là 庚."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 戊. 戊 không được chứa trong 未."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 庚. 庚 không được chứa trong 未."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [甲午](/guide/pillar-gap-o) và Trụ ngày sau là [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Nó gồm [Ất Mộc (乙)](/guide/stem-eul) và [未 (Cừu)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丙申",
    "summary": "Cách Saju-Link đọc Trụ ngày 丙申 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丙申 là Trụ ngày số 33 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丙申, Can ngày là 丙 (Hỏa, Dương) và Chi ngày là 申 (Khỉ). Trong chu kỳ sáu mươi, đây là tổ hợp số 33."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丙 là \"Bính Hỏa (丙)\", và dòng mà màn hình kết quả hiển thị là: \"Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 申 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丙, các can mà 申 chứa như sau. Can bản khí (庚) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丙申",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丙"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSinYeo}",
                  "Thực Thần (食神)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "trung khí (中氣)",
                  "{hidSinJung}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Canh Kim (庚)",
                  "bản khí (本氣)",
                  "{hidSinBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丙, Chính Tài là 辛 và Chính Quan là 癸."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 辛. 辛 không được chứa trong 申."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 癸. 癸 không được chứa trong 申."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [乙未](/guide/pillar-eul-mi) và Trụ ngày sau là [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Nó gồm [Bính Hỏa (丙)](/guide/stem-byeong) và [申 (Khỉ)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丁酉",
    "summary": "Cách Saju-Link đọc Trụ ngày 丁酉 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丁酉 là Trụ ngày số 34 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丁酉, Can ngày là 丁 (Hỏa, Âm) và Chi ngày là 酉 (Gà). Trong chu kỳ sáu mươi, đây là tổ hợp số 34."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丁 là \"Đinh Hỏa (丁)\", và dòng mà màn hình kết quả hiển thị là: \"Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 酉 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丁, các can mà 酉 chứa như sau. Can bản khí (辛) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丁酉",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丁"
              ],
              "rows": [
                [
                  "Canh Kim (庚)",
                  "dư khí (餘氣)",
                  "{hidYuYeo}",
                  "Chính Tài (正財)"
                ],
                [
                  "Tân Kim (辛)",
                  "bản khí (本氣)",
                  "{hidYuBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丁, Chính Tài là 庚 và Chính Quan là 壬."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 庚. 庚 được chứa trong 酉 (dư khí (餘氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 壬. 壬 không được chứa trong 酉."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丙申](/guide/pillar-byeong-sin) và Trụ ngày sau là [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Nó gồm [Đinh Hỏa (丁)](/guide/stem-jeong) và [酉 (Gà)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 戊戌",
    "summary": "Cách Saju-Link đọc Trụ ngày 戊戌 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "戊戌 là Trụ ngày số 35 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 戊戌, Can ngày là 戊 (Thổ, Dương) và Chi ngày là 戌 (Chó). Trong chu kỳ sáu mươi, đây là tổ hợp số 35."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 戊 là \"Mậu Thổ (戊)\", và dòng mà màn hình kết quả hiển thị là: \"Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 戌 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 戊, các can mà 戌 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 戊戌",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 戊"
              ],
              "rows": [
                [
                  "Tân Kim (辛)",
                  "dư khí (餘氣)",
                  "{hidSulYeo}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "trung khí (中氣)",
                  "{hidSulJung}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidSulBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 戊, Chính Tài là 癸 và Chính Quan là 乙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 癸. 癸 không được chứa trong 戌."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 乙. 乙 không được chứa trong 戌."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丁酉](/guide/pillar-jeong-yu) và Trụ ngày sau là [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Nó gồm [Mậu Thổ (戊)](/guide/stem-mu) và [戌 (Chó)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 己亥",
    "summary": "Cách Saju-Link đọc Trụ ngày 己亥 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "己亥 là Trụ ngày số 36 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 己亥, Can ngày là 己 (Thổ, Âm) và Chi ngày là 亥 (Lợn). Trong chu kỳ sáu mươi, đây là tổ hợp số 36."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 己 là \"Kỷ Thổ (己)\", và dòng mà màn hình kết quả hiển thị là: \"Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 亥 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 己, các can mà 亥 chứa như sau. Can bản khí (壬) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 己亥",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 己"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidHaeYeo}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "trung khí (中氣)",
                  "{hidHaeJung}",
                  "Chính Quan (正官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "bản khí (本氣)",
                  "{hidHaeBon}",
                  "Chính Tài (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 己, Chính Tài là 壬 và Chính Quan là 甲."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 壬. 壬 được chứa trong 亥 (bản khí (本氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 甲. 甲 được chứa trong 亥 (trung khí (中氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [戊戌](/guide/pillar-mu-sul) và Trụ ngày sau là [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Nó gồm [Kỷ Thổ (己)](/guide/stem-gi) và [亥 (Lợn)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 庚子",
    "summary": "Cách Saju-Link đọc Trụ ngày 庚子 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "庚子 là Trụ ngày số 37 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 庚子, Can ngày là 庚 (Kim, Dương) và Chi ngày là 子 (Chuột). Trong chu kỳ sáu mươi, đây là tổ hợp số 37."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 庚 là \"Canh Kim (庚)\", và dòng mà màn hình kết quả hiển thị là: \"Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 子 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 庚, các can mà 子 chứa như sau. Can bản khí (癸) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 庚子",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 庚"
              ],
              "rows": [
                [
                  "Nhâm Thủy (壬)",
                  "dư khí (餘氣)",
                  "{hidJaYeo}",
                  "Thực Thần (食神)"
                ],
                [
                  "Quý Thủy (癸)",
                  "bản khí (本氣)",
                  "{hidJaBon}",
                  "Thương Quan (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 庚, Chính Tài là 乙 và Chính Quan là 丁."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 乙. 乙 không được chứa trong 子."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丁. 丁 không được chứa trong 子."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [己亥](/guide/pillar-gi-hae) và Trụ ngày sau là [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Nó gồm [Canh Kim (庚)](/guide/stem-gyeong) và [子 (Chuột)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 辛丑",
    "summary": "Cách Saju-Link đọc Trụ ngày 辛丑 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "辛丑 là Trụ ngày số 38 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 辛丑, Can ngày là 辛 (Kim, Âm) và Chi ngày là 丑 (Trâu). Trong chu kỳ sáu mươi, đây là tổ hợp số 38."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 辛 là \"Tân Kim (辛)\", và dòng mà màn hình kết quả hiển thị là: \"Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 丑 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 辛, các can mà 丑 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 辛丑",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 辛"
              ],
              "rows": [
                [
                  "Quý Thủy (癸)",
                  "dư khí (餘氣)",
                  "{hidChukYeo}",
                  "Thực Thần (食神)"
                ],
                [
                  "Tân Kim (辛)",
                  "trung khí (中氣)",
                  "{hidChukJung}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidChukBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 辛, Chính Tài là 甲 và Chính Quan là 丙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 甲. 甲 không được chứa trong 丑."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丙. 丙 không được chứa trong 丑."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [庚子](/guide/pillar-gyeong-ja) và Trụ ngày sau là [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Nó gồm [Tân Kim (辛)](/guide/stem-sin) và [丑 (Trâu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 壬寅",
    "summary": "Cách Saju-Link đọc Trụ ngày 壬寅 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "壬寅 là Trụ ngày số 39 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 壬寅, Can ngày là 壬 (Thủy, Dương) và Chi ngày là 寅 (Hổ). Trong chu kỳ sáu mươi, đây là tổ hợp số 39."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 壬 là \"Nhâm Thủy (壬)\", và dòng mà màn hình kết quả hiển thị là: \"Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 寅 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 壬, các can mà 寅 chứa như sau. Can bản khí (甲) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 壬寅",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 壬"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidInYeo}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "trung khí (中氣)",
                  "{hidInJung}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "bản khí (本氣)",
                  "{hidInBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 壬, Chính Tài là 丁 và Chính Quan là 己."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丁. 丁 không được chứa trong 寅."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 己. 己 không được chứa trong 寅."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [辛丑](/guide/pillar-sin-chuk) và Trụ ngày sau là [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Nó gồm [Nhâm Thủy (壬)](/guide/stem-im) và [寅 (Hổ)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 癸卯",
    "summary": "Cách Saju-Link đọc Trụ ngày 癸卯 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "癸卯 là Trụ ngày số 40 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 癸卯, Can ngày là 癸 (Thủy, Âm) và Chi ngày là 卯 (Thỏ). Trong chu kỳ sáu mươi, đây là tổ hợp số 40."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 癸 là \"Quý Thủy (癸)\", và dòng mà màn hình kết quả hiển thị là: \"Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 卯 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 癸, các can mà 卯 chứa như sau. Can bản khí (乙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 癸卯",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 癸"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "dư khí (餘氣)",
                  "{hidMyoYeo}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Ất Mộc (乙)",
                  "bản khí (本氣)",
                  "{hidMyoBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 癸, Chính Tài là 丙 và Chính Quan là 戊."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丙. 丙 không được chứa trong 卯."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 戊. 戊 không được chứa trong 卯."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [壬寅](/guide/pillar-im-in) và Trụ ngày sau là [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Nó gồm [Quý Thủy (癸)](/guide/stem-gye) và [卯 (Thỏ)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 甲辰",
    "summary": "Cách Saju-Link đọc Trụ ngày 甲辰 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "甲辰 là Trụ ngày số 41 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 甲辰, Can ngày là 甲 (Mộc, Dương) và Chi ngày là 辰 (Rồng). Trong chu kỳ sáu mươi, đây là tổ hợp số 41."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 甲 là \"Giáp Mộc (甲)\", và dòng mà màn hình kết quả hiển thị là: \"Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 辰 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 甲, các can mà 辰 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 甲辰",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 甲"
              ],
              "rows": [
                [
                  "Ất Mộc (乙)",
                  "dư khí (餘氣)",
                  "{hidJinYeo}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Quý Thủy (癸)",
                  "trung khí (中氣)",
                  "{hidJinJung}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidJinBon}",
                  "Thiên Tài (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 甲, Chính Tài là 己 và Chính Quan là 辛."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 己. 己 không được chứa trong 辰."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 辛. 辛 không được chứa trong 辰."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [癸卯](/guide/pillar-gye-myo) và Trụ ngày sau là [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Nó gồm [Giáp Mộc (甲)](/guide/stem-gap) và [辰 (Rồng)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 乙巳",
    "summary": "Cách Saju-Link đọc Trụ ngày 乙巳 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "乙巳 là Trụ ngày số 42 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 乙巳, Can ngày là 乙 (Mộc, Âm) và Chi ngày là 巳 (Rắn). Trong chu kỳ sáu mươi, đây là tổ hợp số 42."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 乙 là \"Ất Mộc (乙)\", và dòng mà màn hình kết quả hiển thị là: \"Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 巳 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 乙, các can mà 巳 chứa như sau. Can bản khí (丙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 乙巳",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 乙"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSaYeo}",
                  "Chính Tài (正財)"
                ],
                [
                  "Canh Kim (庚)",
                  "trung khí (中氣)",
                  "{hidSaJung}",
                  "Chính Quan (正官)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "bản khí (本氣)",
                  "{hidSaBon}",
                  "Thương Quan (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 乙, Chính Tài là 戊 và Chính Quan là 庚."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 戊. 戊 được chứa trong 巳 (dư khí (餘氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 庚. 庚 được chứa trong 巳 (trung khí (中氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [甲辰](/guide/pillar-gap-jin) và Trụ ngày sau là [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Nó gồm [Ất Mộc (乙)](/guide/stem-eul) và [巳 (Rắn)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丙午",
    "summary": "Cách Saju-Link đọc Trụ ngày 丙午 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丙午 là Trụ ngày số 43 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丙午, Can ngày là 丙 (Hỏa, Dương) và Chi ngày là 午 (Ngựa). Trong chu kỳ sáu mươi, đây là tổ hợp số 43."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丙 là \"Bính Hỏa (丙)\", và dòng mà màn hình kết quả hiển thị là: \"Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 午 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丙, các can mà 午 chứa như sau. Can bản khí (丁) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丙午",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丙"
              ],
              "rows": [
                [
                  "Bính Hỏa (丙)",
                  "dư khí (餘氣)",
                  "{hidOYeo}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "trung khí (中氣)",
                  "{hidOJung}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "bản khí (本氣)",
                  "{hidOBon}",
                  "Kiếp Tài (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丙, Chính Tài là 辛 và Chính Quan là 癸."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 辛. 辛 không được chứa trong 午."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 癸. 癸 không được chứa trong 午."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [乙巳](/guide/pillar-eul-sa) và Trụ ngày sau là [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Nó gồm [Bính Hỏa (丙)](/guide/stem-byeong) và [午 (Ngựa)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丁未",
    "summary": "Cách Saju-Link đọc Trụ ngày 丁未 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丁未 là Trụ ngày số 44 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丁未, Can ngày là 丁 (Hỏa, Âm) và Chi ngày là 未 (Cừu). Trong chu kỳ sáu mươi, đây là tổ hợp số 44."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丁 là \"Đinh Hỏa (丁)\", và dòng mà màn hình kết quả hiển thị là: \"Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 未 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丁, các can mà 未 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丁未",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丁"
              ],
              "rows": [
                [
                  "Đinh Hỏa (丁)",
                  "dư khí (餘氣)",
                  "{hidMiYeo}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Ất Mộc (乙)",
                  "trung khí (中氣)",
                  "{hidMiJung}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidMiBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丁, Chính Tài là 庚 và Chính Quan là 壬."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 庚. 庚 không được chứa trong 未."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 壬. 壬 không được chứa trong 未."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丙午](/guide/pillar-byeong-o) và Trụ ngày sau là [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Nó gồm [Đinh Hỏa (丁)](/guide/stem-jeong) và [未 (Cừu)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 戊申",
    "summary": "Cách Saju-Link đọc Trụ ngày 戊申 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "戊申 là Trụ ngày số 45 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 戊申, Can ngày là 戊 (Thổ, Dương) và Chi ngày là 申 (Khỉ). Trong chu kỳ sáu mươi, đây là tổ hợp số 45."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 戊 là \"Mậu Thổ (戊)\", và dòng mà màn hình kết quả hiển thị là: \"Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 申 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 戊, các can mà 申 chứa như sau. Can bản khí (庚) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 戊申",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 戊"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSinYeo}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "trung khí (中氣)",
                  "{hidSinJung}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Canh Kim (庚)",
                  "bản khí (本氣)",
                  "{hidSinBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 戊, Chính Tài là 癸 và Chính Quan là 乙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 癸. 癸 không được chứa trong 申."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 乙. 乙 không được chứa trong 申."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丁未](/guide/pillar-jeong-mi) và Trụ ngày sau là [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Nó gồm [Mậu Thổ (戊)](/guide/stem-mu) và [申 (Khỉ)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 己酉",
    "summary": "Cách Saju-Link đọc Trụ ngày 己酉 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "己酉 là Trụ ngày số 46 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 己酉, Can ngày là 己 (Thổ, Âm) và Chi ngày là 酉 (Gà). Trong chu kỳ sáu mươi, đây là tổ hợp số 46."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 己 là \"Kỷ Thổ (己)\", và dòng mà màn hình kết quả hiển thị là: \"Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 酉 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 己, các can mà 酉 chứa như sau. Can bản khí (辛) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 己酉",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 己"
              ],
              "rows": [
                [
                  "Canh Kim (庚)",
                  "dư khí (餘氣)",
                  "{hidYuYeo}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Tân Kim (辛)",
                  "bản khí (本氣)",
                  "{hidYuBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 己, Chính Tài là 壬 và Chính Quan là 甲."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 壬. 壬 không được chứa trong 酉."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 甲. 甲 không được chứa trong 酉."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [戊申](/guide/pillar-mu-sin) và Trụ ngày sau là [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Nó gồm [Kỷ Thổ (己)](/guide/stem-gi) và [酉 (Gà)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 庚戌",
    "summary": "Cách Saju-Link đọc Trụ ngày 庚戌 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "庚戌 là Trụ ngày số 47 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 庚戌, Can ngày là 庚 (Kim, Dương) và Chi ngày là 戌 (Chó). Trong chu kỳ sáu mươi, đây là tổ hợp số 47."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 庚 là \"Canh Kim (庚)\", và dòng mà màn hình kết quả hiển thị là: \"Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 戌 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 庚, các can mà 戌 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 庚戌",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 庚"
              ],
              "rows": [
                [
                  "Tân Kim (辛)",
                  "dư khí (餘氣)",
                  "{hidSulYeo}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "trung khí (中氣)",
                  "{hidSulJung}",
                  "Chính Quan (正官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidSulBon}",
                  "Thiên Ấn (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 庚, Chính Tài là 乙 và Chính Quan là 丁."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 乙. 乙 không được chứa trong 戌."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丁. 丁 được chứa trong 戌 (trung khí (中氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [己酉](/guide/pillar-gi-yu) và Trụ ngày sau là [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Nó gồm [Canh Kim (庚)](/guide/stem-gyeong) và [戌 (Chó)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 辛亥",
    "summary": "Cách Saju-Link đọc Trụ ngày 辛亥 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "辛亥 là Trụ ngày số 48 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 辛亥, Can ngày là 辛 (Kim, Âm) và Chi ngày là 亥 (Lợn). Trong chu kỳ sáu mươi, đây là tổ hợp số 48."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 辛 là \"Tân Kim (辛)\", và dòng mà màn hình kết quả hiển thị là: \"Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 亥 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 辛, các can mà 亥 chứa như sau. Can bản khí (壬) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 辛亥",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 辛"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidHaeYeo}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "trung khí (中氣)",
                  "{hidHaeJung}",
                  "Chính Tài (正財)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "bản khí (本氣)",
                  "{hidHaeBon}",
                  "Thương Quan (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 辛, Chính Tài là 甲 và Chính Quan là 丙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 甲. 甲 được chứa trong 亥 (trung khí (中氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丙. 丙 không được chứa trong 亥."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [庚戌](/guide/pillar-gyeong-sul) và Trụ ngày sau là [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Nó gồm [Tân Kim (辛)](/guide/stem-sin) và [亥 (Lợn)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 壬子",
    "summary": "Cách Saju-Link đọc Trụ ngày 壬子 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "壬子 là Trụ ngày số 49 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 壬子, Can ngày là 壬 (Thủy, Dương) và Chi ngày là 子 (Chuột). Trong chu kỳ sáu mươi, đây là tổ hợp số 49."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 壬 là \"Nhâm Thủy (壬)\", và dòng mà màn hình kết quả hiển thị là: \"Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 子 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 壬, các can mà 子 chứa như sau. Can bản khí (癸) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 壬子",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 壬"
              ],
              "rows": [
                [
                  "Nhâm Thủy (壬)",
                  "dư khí (餘氣)",
                  "{hidJaYeo}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Quý Thủy (癸)",
                  "bản khí (本氣)",
                  "{hidJaBon}",
                  "Kiếp Tài (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 壬, Chính Tài là 丁 và Chính Quan là 己."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丁. 丁 không được chứa trong 子."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 己. 己 không được chứa trong 子."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [辛亥](/guide/pillar-sin-hae) và Trụ ngày sau là [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Nó gồm [Nhâm Thủy (壬)](/guide/stem-im) và [子 (Chuột)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 癸丑",
    "summary": "Cách Saju-Link đọc Trụ ngày 癸丑 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "癸丑 là Trụ ngày số 50 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 癸丑, Can ngày là 癸 (Thủy, Âm) và Chi ngày là 丑 (Trâu). Trong chu kỳ sáu mươi, đây là tổ hợp số 50."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 癸 là \"Quý Thủy (癸)\", và dòng mà màn hình kết quả hiển thị là: \"Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 丑 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 癸, các can mà 丑 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 癸丑",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 癸"
              ],
              "rows": [
                [
                  "Quý Thủy (癸)",
                  "dư khí (餘氣)",
                  "{hidChukYeo}",
                  "Tỷ Kiên (比肩)"
                ],
                [
                  "Tân Kim (辛)",
                  "trung khí (中氣)",
                  "{hidChukJung}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidChukBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 癸, Chính Tài là 丙 và Chính Quan là 戊."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丙. 丙 không được chứa trong 丑."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 戊. 戊 không được chứa trong 丑."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [壬子](/guide/pillar-im-ja) và Trụ ngày sau là [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Nó gồm [Quý Thủy (癸)](/guide/stem-gye) và [丑 (Trâu)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 甲寅",
    "summary": "Cách Saju-Link đọc Trụ ngày 甲寅 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "甲寅 là Trụ ngày số 51 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 甲寅, Can ngày là 甲 (Mộc, Dương) và Chi ngày là 寅 (Hổ). Trong chu kỳ sáu mươi, đây là tổ hợp số 51."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 甲 là \"Giáp Mộc (甲)\", và dòng mà màn hình kết quả hiển thị là: \"Cây lớn mọc thẳng. Đã định hướng thì không lung lay, và thà chịu đựng chứ không chịu cong.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 寅 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 甲, các can mà 寅 chứa như sau. Can bản khí (甲) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 甲寅",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 甲"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidInYeo}",
                  "Thiên Tài (偏財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "trung khí (中氣)",
                  "{hidInJung}",
                  "Thực Thần (食神)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "bản khí (本氣)",
                  "{hidInBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 甲, Chính Tài là 己 và Chính Quan là 辛."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 己. 己 không được chứa trong 寅."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 辛. 辛 không được chứa trong 寅."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [癸丑](/guide/pillar-gye-chuk) và Trụ ngày sau là [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Nó gồm [Giáp Mộc (甲)](/guide/stem-gap) và [寅 (Hổ)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 乙卯",
    "summary": "Cách Saju-Link đọc Trụ ngày 乙卯 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "乙卯 là Trụ ngày số 52 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 乙卯, Can ngày là 乙 (Mộc, Âm) và Chi ngày là 卯 (Thỏ). Trong chu kỳ sáu mươi, đây là tổ hợp số 52."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 乙 là \"Ất Mộc (乙)\", và dòng mà màn hình kết quả hiển thị là: \"Dây leo — loài cỏ mềm dẻo. Uốn theo hoàn cảnh để tiếp tục đi tới, và không gãy.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 卯 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 乙, các can mà 卯 chứa như sau. Can bản khí (乙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 乙卯",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 乙"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "dư khí (餘氣)",
                  "{hidMyoYeo}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Ất Mộc (乙)",
                  "bản khí (本氣)",
                  "{hidMyoBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 乙, Chính Tài là 戊 và Chính Quan là 庚."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 戊. 戊 không được chứa trong 卯."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 庚. 庚 không được chứa trong 卯."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [甲寅](/guide/pillar-gap-in) và Trụ ngày sau là [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Nó gồm [Ất Mộc (乙)](/guide/stem-eul) và [卯 (Thỏ)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丙辰",
    "summary": "Cách Saju-Link đọc Trụ ngày 丙辰 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丙辰 là Trụ ngày số 53 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丙辰, Can ngày là 丙 (Hỏa, Dương) và Chi ngày là 辰 (Rồng). Trong chu kỳ sáu mươi, đây là tổ hợp số 53."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丙 là \"Bính Hỏa (丙)\", và dòng mà màn hình kết quả hiển thị là: \"Mặt trời giữa trưa. Cảm xúc lộ rõ, chỗ nào cũng sáng lên, và bước ra phía trước là chuyện tự nhiên.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 辰 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丙, các can mà 辰 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丙辰",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丙"
              ],
              "rows": [
                [
                  "Ất Mộc (乙)",
                  "dư khí (餘氣)",
                  "{hidJinYeo}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Quý Thủy (癸)",
                  "trung khí (中氣)",
                  "{hidJinJung}",
                  "Chính Quan (正官)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidJinBon}",
                  "Thực Thần (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丙, Chính Tài là 辛 và Chính Quan là 癸."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 辛. 辛 không được chứa trong 辰."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 癸. 癸 được chứa trong 辰 (trung khí (中氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [乙卯](/guide/pillar-eul-myo) và Trụ ngày sau là [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Nó gồm [Bính Hỏa (丙)](/guide/stem-byeong) và [辰 (Rồng)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 丁巳",
    "summary": "Cách Saju-Link đọc Trụ ngày 丁巳 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "丁巳 là Trụ ngày số 54 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 丁巳, Can ngày là 丁 (Hỏa, Âm) và Chi ngày là 巳 (Rắn). Trong chu kỳ sáu mươi, đây là tổ hợp số 54."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 丁 là \"Đinh Hỏa (丁)\", và dòng mà màn hình kết quả hiển thị là: \"Ánh nến. Cháy lặng lẽ và bền, sưởi ấm người gần nhất trước.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 巳 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 丁, các can mà 巳 chứa như sau. Can bản khí (丙) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 丁巳",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 丁"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSaYeo}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Canh Kim (庚)",
                  "trung khí (中氣)",
                  "{hidSaJung}",
                  "Chính Tài (正財)"
                ],
                [
                  "Bính Hỏa (丙)",
                  "bản khí (本氣)",
                  "{hidSaBon}",
                  "Kiếp Tài (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 丁, Chính Tài là 庚 và Chính Quan là 壬."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 庚. 庚 được chứa trong 巳 (trung khí (中氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 壬. 壬 không được chứa trong 巳."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丙辰](/guide/pillar-byeong-jin) và Trụ ngày sau là [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Nó gồm [Đinh Hỏa (丁)](/guide/stem-jeong) và [巳 (Rắn)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 戊午",
    "summary": "Cách Saju-Link đọc Trụ ngày 戊午 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "戊午 là Trụ ngày số 55 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 戊午, Can ngày là 戊 (Thổ, Dương) và Chi ngày là 午 (Ngựa). Trong chu kỳ sáu mươi, đây là tổ hợp số 55."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 戊 là \"Mậu Thổ (戊)\", và dòng mà màn hình kết quả hiển thị là: \"Đất rộng và núi. Khó lay và dễ tựa vào, dù đã quyết rồi thì rất chậm đổi.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 午 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 戊, các can mà 午 chứa như sau. Can bản khí (丁) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 戊午",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 戊"
              ],
              "rows": [
                [
                  "Bính Hỏa (丙)",
                  "dư khí (餘氣)",
                  "{hidOYeo}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "trung khí (中氣)",
                  "{hidOJung}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "bản khí (本氣)",
                  "{hidOBon}",
                  "Chính Ấn (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 戊, Chính Tài là 癸 và Chính Quan là 乙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 癸. 癸 không được chứa trong 午."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 乙. 乙 không được chứa trong 午."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [丁巳](/guide/pillar-jeong-sa) và Trụ ngày sau là [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Nó gồm [Mậu Thổ (戊)](/guide/stem-mu) và [午 (Ngựa)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 己未",
    "summary": "Cách Saju-Link đọc Trụ ngày 己未 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "己未 là Trụ ngày số 56 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 己未, Can ngày là 己 (Thổ, Âm) và Chi ngày là 未 (Cừu). Trong chu kỳ sáu mươi, đây là tổ hợp số 56."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 己 là \"Kỷ Thổ (己)\", và dòng mà màn hình kết quả hiển thị là: \"Đất ruộng. Nhận vào bất cứ thứ gì đến rồi nuôi lớn, thiên về chăm lo hơn là phô ra.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 未 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 己, các can mà 未 chứa như sau. Can bản khí (己) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 己未",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 己"
              ],
              "rows": [
                [
                  "Đinh Hỏa (丁)",
                  "dư khí (餘氣)",
                  "{hidMiYeo}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Ất Mộc (乙)",
                  "trung khí (中氣)",
                  "{hidMiJung}",
                  "Thiên Quan (偏官)"
                ],
                [
                  "Kỷ Thổ (己)",
                  "bản khí (本氣)",
                  "{hidMiBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 己, Chính Tài là 壬 và Chính Quan là 甲."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 壬. 壬 không được chứa trong 未."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 甲. 甲 không được chứa trong 未."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [戊午](/guide/pillar-mu-o) và Trụ ngày sau là [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Nó gồm [Kỷ Thổ (己)](/guide/stem-gi) và [未 (Cừu)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 庚申",
    "summary": "Cách Saju-Link đọc Trụ ngày 庚申 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "庚申 là Trụ ngày số 57 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 庚申, Can ngày là 庚 (Kim, Dương) và Chi ngày là 申 (Khỉ). Trong chu kỳ sáu mươi, đây là tổ hợp số 57."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 庚 là \"Canh Kim (庚)\", và dòng mà màn hình kết quả hiển thị là: \"Sắt chưa gia công. Quyết đoán và dứt khoát, ít kiên nhẫn với những việc bỏ lửng.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 申 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 庚, các can mà 申 chứa như sau. Can bản khí (庚) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 庚申",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 庚"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidSinYeo}",
                  "Thiên Ấn (偏印)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "trung khí (中氣)",
                  "{hidSinJung}",
                  "Thực Thần (食神)"
                ],
                [
                  "Canh Kim (庚)",
                  "bản khí (本氣)",
                  "{hidSinBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 庚, Chính Tài là 乙 và Chính Quan là 丁."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 乙. 乙 không được chứa trong 申."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丁. 丁 không được chứa trong 申."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [己未](/guide/pillar-gi-mi) và Trụ ngày sau là [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Nó gồm [Canh Kim (庚)](/guide/stem-gyeong) và [申 (Khỉ)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 辛酉",
    "summary": "Cách Saju-Link đọc Trụ ngày 辛酉 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "辛酉 là Trụ ngày số 58 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 辛酉, Can ngày là 辛 (Kim, Âm) và Chi ngày là 酉 (Gà). Trong chu kỳ sáu mươi, đây là tổ hợp số 58."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 辛 là \"Tân Kim (辛)\", và dòng mà màn hình kết quả hiển thị là: \"Viên ngọc đã mài. Thẩm mỹ tinh tế và tiêu chuẩn cao; khó bỏ qua sự cẩu thả.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 酉 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 辛, các can mà 酉 chứa như sau. Can bản khí (辛) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 辛酉",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 辛"
              ],
              "rows": [
                [
                  "Canh Kim (庚)",
                  "dư khí (餘氣)",
                  "{hidYuYeo}",
                  "Kiếp Tài (劫財)"
                ],
                [
                  "Tân Kim (辛)",
                  "bản khí (本氣)",
                  "{hidYuBon}",
                  "Tỷ Kiên (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 辛, Chính Tài là 甲 và Chính Quan là 丙."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 甲. 甲 không được chứa trong 酉."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 丙. 丙 không được chứa trong 酉."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [庚申](/guide/pillar-gyeong-sin) và Trụ ngày sau là [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Nó gồm [Tân Kim (辛)](/guide/stem-sin) và [酉 (Gà)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 壬戌",
    "summary": "Cách Saju-Link đọc Trụ ngày 壬戌 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "壬戌 là Trụ ngày số 59 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 壬戌, Can ngày là 壬 (Thủy, Dương) và Chi ngày là 戌 (Chó). Trong chu kỳ sáu mươi, đây là tổ hợp số 59."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 壬 là \"Nhâm Thủy (壬)\", và dòng mà màn hình kết quả hiển thị là: \"Sông và biển. Tầm nhìn rộng, có con mắt nhìn ra dòng chảy của sự việc.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 戌 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 壬, các can mà 戌 chứa như sau. Can bản khí (戊) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 壬戌",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 壬"
              ],
              "rows": [
                [
                  "Tân Kim (辛)",
                  "dư khí (餘氣)",
                  "{hidSulYeo}",
                  "Chính Ấn (正印)"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "trung khí (中氣)",
                  "{hidSulJung}",
                  "Chính Tài (正財)"
                ],
                [
                  "Mậu Thổ (戊)",
                  "bản khí (本氣)",
                  "{hidSulBon}",
                  "Thiên Quan (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 壬, Chính Tài là 丁 và Chính Quan là 己."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丁. 丁 được chứa trong 戌 (trung khí (中氣))."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 己. 己 không được chứa trong 戌."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [辛酉](/guide/pillar-sin-yu) và Trụ ngày sau là [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Nó gồm [Nhâm Thủy (壬)](/guide/stem-im) và [戌 (Chó)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Trụ ngày",
    "title": "Trụ ngày 癸亥",
    "summary": "Cách Saju-Link đọc Trụ ngày 癸亥 — các can mà Chi ngày chứa là gì đối với Can ngày — được trình bày đúng như quy tắc tính toán của nó.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "癸亥 là Trụ ngày số 60 trong chu kỳ sáu mươi",
        "blocks": [
          {
            "p": "Khi can chi của ngày sinh là 癸亥, Can ngày là 癸 (Thủy, Âm) và Chi ngày là 亥 (Lợn). Trong chu kỳ sáu mươi, đây là tổ hợp số 60."
          },
          {
            "p": "Saju-Link gọi người có Can ngày là 癸 là \"Quý Thủy (癸)\", và dòng mà màn hình kết quả hiển thị là: \"Sương và mưa. Thấm vào lặng lẽ và đọc được không khí trước cả lời nói.\" Dòng này không liên quan đến phần giải đọc bên dưới hay điểm số."
          }
        ]
      },
      {
        "title": "Các can mà Chi ngày 亥 chứa là gì đối với Can ngày",
        "blocks": [
          {
            "p": "Chi ngày là vị trí phối ngẫu. Đọc từ Can ngày 癸, các can mà 亥 chứa như sau. Can bản khí (壬) là năng lượng đại diện của chi."
          },
          {
            "table": {
              "caption": "Tàng can của Chi ngày 癸亥",
              "head": [
                "Tàng can",
                "Vị trí",
                "Tỷ lệ",
                "Đối với Can ngày 癸"
              ],
              "rows": [
                [
                  "Mậu Thổ (戊)",
                  "dư khí (餘氣)",
                  "{hidHaeYeo}",
                  "Chính Quan (正官)"
                ],
                [
                  "Giáp Mộc (甲)",
                  "trung khí (中氣)",
                  "{hidHaeJung}",
                  "Thương Quan (傷官)"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "bản khí (本氣)",
                  "{hidHaeBon}",
                  "Kiếp Tài (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Vị trí phối ngẫu và Trụ ngày này",
        "blocks": [
          {
            "p": "Myeongri truyền thống đọc vị trí phối ngẫu là Chính Tài (正財) đối với nam giới và Chính Quan (正官) đối với nữ giới. Khi Can ngày là 癸, Chính Tài là 丙 và Chính Quan là 戊."
          },
          {
            "p": "Đối với nam giới, vị trí phối ngẫu (Chính Tài) là 丙. 丙 không được chứa trong 亥."
          },
          {
            "p": "Đối với nữ giới, vị trí phối ngẫu (Chính Quan) là 戊. 戊 được chứa trong 亥 (dư khí (餘氣))."
          }
        ]
      },
      {
        "title": "Các Trụ ngày lân cận và các ký tự cấu thành",
        "blocks": [
          {
            "p": "Trong chu kỳ sáu mươi, Trụ ngày trước là [壬戌](/guide/pillar-im-sul) và Trụ ngày sau là [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Nó gồm [Quý Thủy (癸)](/guide/stem-gye) và [亥 (Lợn)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những điều hướng dẫn này không nói",
        "blocks": [
          {
            "ul": [
              "Một Trụ ngày không quyết định một con người hay một mối quan hệ. Một lá số saju được đọc từ mối quan hệ giữa tám ký tự của bốn trụ.",
              "Cách đọc vị trí phối ngẫu kế thừa một quy tắc của myeongri truyền thống, và nếu bạn không cho biết giới tính thì vị trí này sẽ không được đọc."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Dành cho người mới đọc",
    "title": "Thiên can, Địa chi và Trụ Ngày — Cách đọc các chữ trong Saju",
    "summary": "Tám chữ Hán trong Saju là gì, và Thiên can, Địa chi cùng Trụ Ngày mỗi thứ nghĩa là gì, được giải thích dễ hiểu bằng hai bảng.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Saju được viết bằng hai loại chữ",
        "blocks": [
          {
            "p": "Tám chữ của Saju được chia thành chữ trên và chữ dưới. Chữ trên là một trong mười **Thiên can (天干)**, còn chữ dưới là một trong mười hai **Địa chi (地支)**."
          },
          {
            "p": "Bạn có thể xem Thiên can là tên gọi cho một loại năng lượng, còn Địa chi là tên gọi cho một thời điểm và một vị trí. Không cần học thuộc lòng, cũng như bạn không cần thuộc tên các ngày trong tuần; chỉ cần tra trong các bảng bên dưới. Bốn trụ trở thành tám chữ như thế nào được giải thích trong [hướng dẫn về biểu đồ sinh](/guide/natal-chart)."
          }
        ]
      },
      {
        "title": "Mười Thiên can",
        "blocks": [
          {
            "p": "Có mười Thiên can. Ngũ hành (Mộc, Hỏa, Thổ, Kim, Thủy) mỗi hành có hai Thiên can, và trong mỗi cặp, chữ đầu là Dương (陽) còn chữ sau là Âm (陰)."
          },
          {
            "table": {
              "caption": "Mười Thiên can cùng ngũ hành và âm dương",
              "head": [
                "Thiên can",
                "Ngũ hành và âm dương"
              ],
              "rows": [
                [
                  "Giáp Mộc (甲)",
                  "Mộc Dương"
                ],
                [
                  "Ất Mộc (乙)",
                  "Mộc Âm"
                ],
                [
                  "Bính Hỏa (丙)",
                  "Hỏa Dương"
                ],
                [
                  "Đinh Hỏa (丁)",
                  "Hỏa Âm"
                ],
                [
                  "Mậu Thổ (戊)",
                  "Thổ Dương"
                ],
                [
                  "Kỷ Thổ (己)",
                  "Thổ Âm"
                ],
                [
                  "Canh Kim (庚)",
                  "Kim Dương"
                ],
                [
                  "Tân Kim (辛)",
                  "Kim Âm"
                ],
                [
                  "Nhâm Thủy (壬)",
                  "Thủy Dương"
                ],
                [
                  "Quý Thủy (癸)",
                  "Thủy Âm"
                ]
              ]
            }
          },
          {
            "p": "Thiên can của ngày bạn sinh ra được gọi là **Can ngày (日干)**, và đó là chữ chỉ về chính bạn."
          }
        ]
      },
      {
        "title": "Mười hai Địa chi",
        "blocks": [
          {
            "p": "Có mười hai Địa chi, và mỗi chữ gắn với một con giáp. Vì vậy, mười hai Địa chi chính là mười hai con giáp."
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
          },
          {
            "p": "Một Địa chi trông như một chữ duy nhất, nhưng bên trong nó chứa các thiên can. Những can này được gọi là **tàng can (支藏干)**. Địa chi chứa những can nào và mỗi can chiếm bao nhiêu đều được trình bày trong mục từ điển của từng Địa chi. Về cách xác định con giáp, xin xem [hướng dẫn về con giáp](/guide/zodiac)."
          }
        ]
      },
      {
        "title": "Trụ Ngày — một Thiên can và một Địa chi ghép thành cặp",
        "blocks": [
          {
            "p": "Mỗi trụ của Saju gồm hai chữ: một Thiên can ghép với một Địa chi. Trụ của ngày bạn sinh ra là **Trụ Ngày (日柱)**."
          },
          {
            "p": "Ghép lần lượt Thiên can với Địa chi, bạn sẽ có **sáu mươi** tổ hợp, từ 甲子, 乙丑, 丙寅 cho đến 癸亥. Chu kỳ này được gọi là Lục thập hoa giáp. Con số là sáu mươi chứ không phải 10 × 12 = 120 vì một Thiên can Dương chỉ ghép với Địa chi Dương, và một Thiên can Âm chỉ ghép với Địa chi Âm."
          },
          {
            "p": "Chữ trên của Trụ Ngày chính là Can ngày mà bạn đã gặp ở trên. Các mục giải thích từng trụ một nằm trong các từ điển Thiên can, Địa chi và Trụ Ngày ở cuối [danh sách hướng dẫn](/guide)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Mười vị thần",
    "title": "Mười vị thần — Mười vị trí trong Saju của tôi",
    "summary": "Dựa trên trụ ngày, các ký tự còn lại được chia thành mười tên. Nó thảo luận về lý do phân biệt giữa tài sản chính và tài sản phụ, ngay cả khi chúng là cùng một yếu tố tài sản.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Trụ Ngày là Chính Mình",
        "blocks": [
          {
            "p": "Trong tám ký tự của saju, **trụ ngày** (thiên can của ngày sinh) đề cập đến chính người đó. Bảy ký tự còn lại được đọc như môi trường mà trụ ngày đó tồn tại."
          },
          {
            "p": "**Mười vị thần** (十神) là mười phân chia cách mà trụ ngày nhận thức các ký tự khác. Năng lượng nuôi dưỡng tôi là Tài nguyên, năng lượng giống như tôi là Bạn đồng hành, năng lượng tôi sinh ra là Thực phẩm và Tài sản, năng lượng kìm hãm tôi là Chức vụ, và năng lượng tôi kìm hãm là Tài sản — năm loại này được chia thêm thành âm và dương, tạo thành mười."
          }
        ]
      },
      {
        "title": "Những gì Bảy Ký tự Còn lại có Nghĩa với Tôi",
        "blocks": [
          {
            "p": "Khi trụ ngày được xác định, các ký tự còn lại trong biểu đồ sinh nhận được mỗi một tên. Năng lượng sinh ra tôi, năng lượng giống như tôi, năng lượng tôi sinh ra, năng lượng kìm hãm tôi, và năng lượng tôi kìm hãm — năm nhánh này được chia thêm thành **mười** thông qua âm và dương. Đây là Mười vị thần."
          },
          {
            "p": "Do đó, Mười vị thần không đề cập đến mối quan hệ với người khác mà là **các vị trí bên trong chính mình**. Những vị trí nào dày hoặc mỏng chỉ ra xu hướng và cách sống của tôi."
          }
        ]
      },
      {
        "title": "Tại sao chúng ta đọc điều này thông qua Mười vị thần thay vì ba mối quan hệ yếu tố",
        "blocks": [
          {
            "p": "Có một phương pháp khác để xem mối quan hệ của ngày chi chỉ thông qua ba khía cạnh của **ngũ hành** (hỗ trợ, giống nhau và đối kháng). Nó đơn giản, nhưng **âm và dương biến mất.** 甲 (gỗ dương) và 乙 (gỗ âm) trở thành giống nhau như 甲, điều này đại diện cho 'sự giống nhau', và mối quan hệ đối kháng được gộp lại thành một điểm số duy nhất mà không có hướng đi hay âm dương."
          },
          {
            "p": "Vị trí của người phối ngẫu phải được đánh giá theo **Mười Thần** về âm và dương. Nếu các mục được xem qua **ngũ hành** được trộn lẫn với các mục được xem qua **Mười Thần** trong một hệ thống, sẽ có hai tiêu chuẩn cho cùng hai ký tự. Do đó, chúng tôi thống nhất nó dưới **Mười Thần**."
          }
        ]
      },
      {
        "title": "Vị trí của người phối ngẫu là Tài Chính Chính Thống và Quan Chính Thống",
        "blocks": [
          {
            "p": "Dự đoán vận mệnh truyền thống nhìn nhận vị trí của người phối ngẫu khác nhau dựa trên giới tính. Đối với nam giới, đó là **Tài Chính Chính Thống (正財)**, và đối với nữ giới, đó là **Quan Chính Thống (正官)**. Ngay cả khi chúng là cùng một yếu tố tài chính, chỉ có Tài Chính Chính Thống không phù hợp với âm và dương được coi là vị trí của người phối ngẫu, trong khi Tài Chính Gián Tiếp không được đọc như một người phối ngẫu mà theo hoạt động và tài sản."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nếu bạn không xác định giới tính, vị trí này sẽ bị bỏ qua",
        "blocks": [
          {
            "p": "Điều này là vì không thể xác định bên nào, Tài Chính Chính Thống hay Quan Chính Thống, để xem xét như là vị trí của người phối ngẫu. Thay vì đoán để lấp đầy một giá trị thiếu, chúng tôi đọc các mục còn lại mà không có mục đó."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Vận mệnh hôm nay",
    "title": "Vận mệnh hôm nay ra sao?",
    "summary": "Ngày hôm nay, **ngày chi** được so sánh với biểu đồ sinh để tính điểm. Mười ba mối quan hệ hỗ trợ và kìm hãm và bảy mối quan hệ **địa chi**, cùng với tất cả hai mươi mục và các phép cộng và trừ tương ứng của chúng, được công bố đầy đủ.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Hôm nay, chúng tôi cũng thiết lập nó theo cách giống như tám ký tự",
        "blocks": [
          {
            "p": "Mỗi ngày có **trụ ngày của ngày (日辰)** riêng của nó. Sử dụng cùng một phương pháp như thiết lập trụ ngày của biểu đồ sinh, hôm nay cũng có một **thiên can** và một **địa chi** gắn liền. Vận mệnh hôm nay là về việc so sánh hai ký tự đó với biểu đồ sinh."
          },
          {
            "p": "Điểm số cơ bản là **{baseScore} điểm**. Các mục bên dưới được cộng và trừ, và cuối cùng, nó được giới hạn giữa {clampLow} điểm và {clampHigh} điểm — chúng tôi không đề cập đến 0 điểm hoặc 100 điểm."
          }
        ]
      },
      {
        "title": "① Năng lượng hôm nay có phải là điều tôi cần không?",
        "blocks": [
          {
            "p": "Đây là vị trí quan trọng nhất. Chúng tôi kiểm tra xem năng lượng hôm nay có tương ứng với 'năng lượng cần thiết ngay bây giờ' được xác định bởi [yếu tố cân bằng](/guide/yongsin) hay không."
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
                  "Nó kìm hãm năng lượng cần thiết",
                  "{todayControlsYongsin}"
                ],
                [
                  "Nó đẩy mạnh hơn về phía đã tràn",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Không coi yếu tố bất lợi là 'mọi thứ ngoại trừ yếu tố cân bằng'",
        "blocks": [
          {
            "p": "Nếu bạn làm như vậy, cả năng lượng tạo ra yếu tố cân bằng và năng lượng kìm hãm yếu tố cân bằng đều trở thành xấu, và hai hàng cuối cùng trong bảng trên trở nên không thể phân biệt. Chỉ có năng lượng mà **đẩy mạnh hơn theo hướng ngược lại** theo nghĩa của hỗ trợ và kìm hãm được coi là yếu tố bất lợi."
          }
        ]
      },
      {
        "title": "② Mối quan hệ giữa thiên can hôm nay và ngày chi",
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
                  "Tôi kìm hãm hôm nay",
                  "{selfControls}"
                ],
                [
                  "Tôi chảy ra cùng hôm nay",
                  "{selfGenerates}"
                ],
                [
                  "Hôm nay kìm hãm tôi",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ **Địa chi** hôm nay gặp các **địa chi** của biểu đồ sinh",
        "blocks": [
          {
            "p": "Địa chi hôm nay được so sánh với các địa chi của biểu đồ sinh. Bảng mối quan hệ tự nó nằm trong [mối quan hệ địa chi](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Mối quan hệ",
                "Cộng/Trừ"
              ],
              "rows": [
                [
                  "tam hợp (三合)",
                  "{branchSamhap}"
                ],
                [
                  "lục hợp (六合)",
                  "{branchYukhap}"
                ],
                [
                  "nửa hợp (半合)",
                  "{branchBanhap}"
                ],
                [
                  "mâu thuẫn yên tĩnh (怨嗔)",
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
            "p": "Ngay cả khi có cùng một năng lượng, ý nghĩa khác nhau đối với một trụ ngày mạnh và một trụ ngày yếu. Do đó, chúng tôi thực hiện một điều chỉnh cuối cùng."
          },
          {
            "table": {
              "head": [
                "Tình huống",
                "Điều chỉnh"
              ],
              "rows": [
                [
                  "Trụ ngày yếu nhưng hôm nay hỗ trợ họ",
                  "{weakTodayHelps}"
                ],
                [
                  "Trụ ngày mạnh nhưng hôm nay giảm bớt gánh nặng một cách thích hợp",
                  "{strongTodayDrains}"
                ],
                [
                  "Trụ ngày mạnh nhưng hôm nay làm dày thêm sự hỗ trợ",
                  "{strongTodayHelps}"
                ],
                [
                  "Trụ ngày yếu nhưng hôm nay làm tăng gánh nặng",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Điểm số theo Hạng và Khu vực",
        "blocks": [
          {
            "p": "Tổng điểm được chia thành năm hạng."
          },
          {
            "table": {
              "head": [
                "Điểm số",
                "Hạng"
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
            "p": "Bốn lĩnh vực về tài sản, tình yêu, sự nghiệp và sức khỏe thừa hưởng {overallShare} của tổng điểm, trong khi phần còn lại được chia theo mối quan hệ của Mười Thần và các nhánh đất liên quan đến những lĩnh vực đó. Do đó, ngay cả khi tổng điểm giống nhau, các con số theo lĩnh vực khác nhau từ người này sang người khác."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các số trên đều được đọc từ cài đặt của động cơ. Nếu các quy tắc thay đổi, tài liệu này cũng sẽ thay đổi, và bất kỳ thay đổi nào về điểm số sẽ được thông báo trước trong [Thông báo](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Bảng Quan hệ",
    "title": "Mối Quan hệ Giữa Các Nhánh Đất — Kết Hợp, Va Chạm và Mâu Thuẫn",
    "summary": "Đây là một bảng quan hệ cho thấy cách trụ ngày hôm nay tương tác với biểu đồ sinh. Nó tiết lộ mỗi sự kết hợp, va chạm và mâu thuẫn là gì và chúng có bao nhiêu điểm.",
    "backLabel": "Cơ sở Tính toán",
    "sections": [
      {
        "title": "Các Nhánh Đất là Mười Hai Ký Tự",
        "blocks": [
          {
            "p": "Mười hai nhánh đất (十二支) là 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Các dấu hiệu hoàng đạo thường được biết đến — Chuột, Trâu, Hổ, Thỏ, Rồng, Rắn, Ngựa, Dê, Khỉ, Gà, Chó, Lợn — mỗi dấu hiệu gắn liền với một trong mười hai ký tự này."
          },
          {
            "figure": "branch-wheel",
            "caption": "Khi mười hai ký tự được sắp xếp thành một vòng tròn, các mối quan hệ trở nên rõ ràng. Va chạm (沖) luôn đối diện nhau, trong khi sáu hòa hợp và mâu thuẫn là những cặp gần nhau hơn. Những đường này không được viết trong văn bản mà được lấy trực tiếp từ các quy tắc tính toán.",
            "labels": {
              "alt": "Một sơ đồ cho thấy mười hai nhánh đất được sắp xếp thành một vòng tròn với các đường nối kết hợp sáu hòa hợp, va chạm và mâu thuẫn.",
              "yukhap": "sáu hòa hợp",
              "chung": "Va chạm",
              "wonjin": "Mâu thuẫn",
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
            "p": "Trong saju, mỗi cột trụ có một nhánh đất. **Đọc hôm nay** được xác định bằng cách kết hợp **nhánh của ngày** với bốn nhánh của biểu đồ sinh theo bảng quan hệ dưới đây."
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
                  "tam hợp (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Khi tất cả ba ký tự kết hợp lại, chúng tạo thành một hình thức nguyên tố hoàn chỉnh (局). Đây được coi là sự kết hợp mạnh nhất.",
                  "{scoreSamhap}"
                ],
                [
                  "lục hợp (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Các cặp thu hút nhau. Đây là sự kết hợp phổ biến nhất vì chỉ bao gồm hai ký tự.",
                  "{scoreYukhap}"
                ],
                [
                  "nửa hợp (半合)",
                  "Hai ký tự bao gồm một trong các ký tự hoàng gia (子·酉·午·卯) từ tam hợp",
                  "Một nửa hợp bao gồm một ký tự trung tâm trong hình thức. Nó không tạo thành một hình thức nguyên tố hoàn chỉnh chỉ với hai ký tự, làm cho nó thấp hơn tam hợp.",
                  "{scoreBanhap}"
                ],
                [
                  "Nhánh Giống Nhau",
                  "子子 · 丑丑 …",
                  "Các ký tự giống nhau. Điều này có nghĩa là chúng giống nhau nhưng không ngụ ý sự thu hút, vì vậy chúng được đặt ở giữa.",
                  "{scoreSame}"
                ],
                [
                  "Không Có Quan Hệ",
                  "Các cặp không thuộc bất kỳ đâu ở trên hoặc dưới",
                  "Các sự kết hợp không có mối quan hệ đặc biệt. Điều này phục vụ như một điểm tham chiếu.",
                  "{scoreNeutral}"
                ],
                [
                  "bất hòa yên tĩnh (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Các cặp không thể tách rời mặc dù không thích nhau. Chúng có vẻ yên tĩnh trên bề mặt nhưng được coi là kéo dài lâu.",
                  "{scoreWonjin}"
                ],
                [
                  "Xung Đột (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Các cặp xung đột trực diện. Đây là sáu cặp đối mặt với nhau.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "tam hợp và nửa hợp",
        "blocks": [
          {
            "p": "Một tam hợp yêu cầu tất cả ba ký tự phải có mặt. Vì có bốn nhánh đất trong biểu đồ sinh, nên có thể nhánh của ngày kết hợp với chúng, tạo thành một tam hợp — lúc đó, nó nhận được điểm số {scoreSamhap}. Nếu chỉ có hai ký tự tham gia, đó là một nửa hợp."
          }
        ]
      },
      {
        "kind": "note",
        "title": "nửa hợp yêu cầu các ký tự hoàng gia để được công nhận",
        "blocks": [
          {
            "p": "Cũng có một phương pháp được coi là nửa hợp nếu cả hai ký tự thuộc cùng một nhóm tam hợp. Điều này cho phép các sự kết hợp như 申辰, mà khó gọi là sự kết hợp, nhận được điểm số cao. Do đó, dịch vụ này chỉ công nhận một nửa hợp khi nó bao gồm các ký tự hoàng gia (子·酉·午·卯), và không coi các sự kết hợp như 申辰·巳丑·寅戌·亥未 là hợp lệ."
          }
        ]
      },
      {
        "title": "Lý do tách biệt bất hòa yên tĩnh",
        "blocks": [
          {
            "p": "Sáu cặp bất hòa yên tĩnh được xem là thường xuyên như các xung đột. Nếu chỉ tính các sự kết hợp và xung đột, sáu cặp này sẽ bị chôn vùi dưới điểm số không có quan hệ {scoreNeutral}, vì vậy chúng được đặt riêng."
          },
          {
            "p": "Nếu xung đột là các cặp va chạm trực diện và được hiển thị nổi bật, bất hòa yên tĩnh là sự lệch lạc tinh tế. Do đó, nó được đặt ở điểm số {scoreWonjin}, cao hơn xung đột ({scoreChung}) nhưng chắc chắn thấp hơn không có quan hệ ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Điểm số cũng được gán cho các xung đột",
        "blocks": [
          {
            "p": "Điểm va chạm thấp nhất là {scoreChung}. Điều này có chủ ý không đưa ra giá trị gần 0. Trong truyền thống myeongri, một va chạm không phải là một 'kết thúc' mà là một 'va chạm', và việc đưa ra một điểm số gần đáy sẽ có nghĩa là dịch vụ đang đưa ra một tuyên bố rõ ràng về mối quan hệ."
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
    "summary": "Cung hoàng đạo là nhánh đất của năm bạn sinh ra. Điều này giải thích tại sao nó được rút ra từ năm saju thay vì năm dương lịch, và tại sao những người sinh vào đầu tháng Giêng hoặc tháng Hai có cung hoàng đạo của năm trước.",
    "backLabel": "Cơ sở Tính Toán",
    "sections": [
      {
        "title": "Cung hoàng đạo là nhánh đất của năm bạn sinh ra.",
        "blocks": [
          {
            "p": "Saju bao gồm bốn trụ: năm, tháng, ngày và giờ, với mỗi trụ có một thiên can và một nhánh đất. Trong số đó, **nhánh đất của năm**, hay nhánh năm, là con vật mà chúng ta gọi là cung hoàng đạo."
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
        "title": "Chúng tôi sử dụng năm saju, không phải năm dương lịch.",
        "blocks": [
          {
            "p": "Thời điểm mà cung hoàng đạo thay đổi không phải là ngày 1 tháng Giêng của dương lịch cũng không phải là Tết Nguyên Đán. Tiêu chuẩn để thay đổi năm trong saju là **Ipchun**. Do đó, những người sinh vào đầu tháng Giêng hoặc tháng Hai có thể có cung hoàng đạo khác với những gì lịch chỉ ra."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lý do chúng tôi không hỏi trực tiếp về cung hoàng đạo.",
        "blocks": [
          {
            "p": "Đó là lý do tại sao chúng tôi chỉ hỏi về ngày sinh mà không chọn cung hoàng đạo trên màn hình nhập liệu. Khi động cơ saju tính toán năm, nó tự động căn chỉnh với ranh giới Ipchun. Nếu được chọn trực tiếp, một người sinh vào đầu tháng Hai sẽ chọn một cung hoàng đạo không khớp với cung hoàng đạo thực tế của họ."
          }
        ]
      },
      {
        "title": "Cung hoàng đạo là một ký tự trong saju.",
        "blocks": [
          {
            "p": "Trong số tám ký tự, ký tự tương ứng với cung hoàng đạo là **một nhánh năm**. Bảy ký tự còn lại — đặc biệt là thiên can ngày mà chỉ về bản thân — không có liên quan đến cung hoàng đạo."
          },
          {
            "p": "Những người sinh cùng năm đều có cùng một cung hoàng đạo. Do đó, những gì có thể biết từ cung hoàng đạo chỉ bằng với một trong tám ký tự. Đây là lý do tại sao dịch vụ này không **xem xét cung hoàng đạo một cách riêng biệt hoặc quan trọng** — nhánh năm được tính toán để xác định sức mạnh và hôm nay là trụ ngày của phán đoán ngày giống như bất kỳ nhánh đất nào khác."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tuy nhiên, lý do chúng tôi hiển thị cung hoàng đạo.",
        "blocks": [
          {
            "p": "Đây là vị trí duy nhất mà ý nghĩa được hiểu ngay cả khi bạn không biết thuật ngữ của myeongri. Nếu cung hoàng đạo được ghi chú cùng với nhánh năm trên màn hình bản đồ sinh, nó trở thành một manh mối để đọc bảy ký tự còn lại."
          }
        ]
      },
      {
        "title": "Nhánh năm vẫn giữ nguyên ngay cả khi bạn không biết thời gian sinh.",
        "blocks": [
          {
            "p": "Nếu bạn không nhập thời gian, trụ giờ sẽ bị bỏ qua và sức mạnh của các yếu tố năm (the five elements) sẽ thay đổi. Tuy nhiên, **nhánh năm vẫn giữ nguyên** — nó chỉ được xác định bởi năm bạn sinh."
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
    "title": "Chúng tôi chuyển đổi thời gian sinh sang thời gian mặt trời thực.",
    "summary": "Thời gian chuẩn và vị trí thực tế của mặt trời khác nhau. Điều này giải thích tại sao thời gian phải được điều chỉnh theo kinh độ của nơi sinh để đảm bảo trụ giờ là chính xác.",
    "backLabel": "Cơ sở tính toán",
    "sections": [
      {
        "title": "Thời gian trên đồng hồ và thời gian mặt trời là khác nhau",
        "blocks": [
          {
            "p": "Trụ giờ (時柱) trong saju được xác định bởi vị trí của mặt trời. Tuy nhiên, đồng hồ mà chúng ta thấy sử dụng một thời gian chuẩn duy nhất cho toàn quốc, điều này làm sai lệch với vị trí thực tế của mặt trời."
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
            "p": "Thời gian trong saju được chia thành các đơn vị hai giờ. Những người sinh gần ranh giới sẽ có trụ giờ hoàn toàn thay đổi do sự khác biệt 32 phút — các điều chỉnh là cần thiết chính xác vì những người rơi đúng vào ranh giới này."
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
            "p": "Ngay cả trong cùng một quốc gia, những nơi có kinh độ khác biệt đáng kể (chẳng hạn như Hoa Kỳ, Nga, Indonesia, v.v.) đã được chia thành các thành phố. **15° kinh độ tương đương với một trụ giờ**."
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
              "caption": "Thay đổi giờ chuẩn của Hàn Quốc — những người sinh trong thời kỳ này sẽ bị sai lệch với các phép tính đơn giản",
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
                  "Giờ mùa hè đã được thực hiện"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link không cố định kinh tuyến chuẩn như một giá trị cố định, mà tính toán giờ chuẩn thực tế được sử dụng tại thời điểm đó dựa trên thông tin **múi giờ IANA** của nơi sinh. Giờ mùa hè và các giờ chuẩn trong quá khứ được tự động phản ánh."
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
            "p": "Saju-Link cũng sẽ điều chỉnh ngày trong trường hợp này. Ký tự trên trụ ngày đề cập đến trụ ngày (日干), điều này chỉ ra bản thân tôi, vì vậy nếu điều này bị sai lệch, hầu hết các mục trong phần giải thích sẽ bị sai lệch."
          }
        ]
      },
      {
        "title": "Bạn không cần biết thời gian",
        "blocks": [
          {
            "p": "Thời gian sinh là tùy chọn. Nếu bạn không biết, các phép tính sẽ được thực hiện mà không có trụ giờ, và thực tế này sẽ được hiển thị trên màn hình kết quả. Vì điều này có nghĩa là hai trong số tám ký tự bị thiếu, nó sẽ ảnh hưởng đến đánh giá về sức mạnh và yếu của năm yếu tố, vì vậy nếu bạn biết, việc bao gồm nó sẽ chính xác hơn."
          },
          {
            "p": "Trụ năm (động vật hoàng đạo) luôn giống nhau bất kể thời gian — [bởi vì chúng ta chỉ nhìn vào trụ năm](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Thông tin cá nhân",
    "title": "Một phương pháp không lưu trữ thông tin đã nhập",
    "summary": "Nó làm rõ những gì có nghĩa về mặt kỹ thuật rằng ngày sinh không được ghi lại ở bất kỳ đâu và những gì có trong liên kết kết quả.",
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
            "p": "Nói cách khác, khi bạn mở liên kết kết quả, trình duyệt đọc giá trị đó để yêu cầu tính toán, và máy chủ của chúng tôi nhận các giá trị để sử dụng cho phép tính, trả về câu trả lời, và sau đó quên nó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Xin hãy cẩn thận khi gửi liên kết cho người khác",
        "blocks": [
          {
            "p": "Thực tế là nó không được lưu trữ trên máy chủ không có nghĩa là liên kết an toàn. Liên kết kết quả chứa ngày sinh của hai cá nhân, vì vậy người nhận liên kết đó có thể thấy cùng một kết quả."
          }
        ]
      },
      {
        "title": "Tại sao phép tính được thực hiện trên máy chủ nhưng không được lưu trữ?",
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
        "title": "Những điều không thể thực hiện vì thông tin không được lưu trữ",
        "blocks": [
          {
            "p": "Thành thật mà nói, có những điều đã bị từ bỏ vì chúng tôi không lưu trữ thông tin."
          },
          {
            "ul": [
              "**Bạn không thể lấy lại kết quả trước đó.** Bạn cần có liên kết để xem lại chúng.",
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
            "p": "Khi bạn mua một báo cáo, một bản ghi giao dịch sẽ được giữ lại. Thanh toán phải tuân theo các khoảng thời gian lưu giữ hợp pháp, và nếu không có lịch sử đơn hàng, việc hoàn tiền không thể được xử lý. Tuy nhiên, vào thời điểm này, **ngày sinh được sử dụng để tính toán saju sẽ không được đính kèm với đơn hàng** — nó sẽ được yêu cầu lại khi tạo PDF sau khi xác nhận thanh toán."
          },
          {
            "p": "Để biết thêm chi tiết, vui lòng tham khảo [Chính sách bảo mật](/privacy)."
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
            "p": "Tính toán saju và tra cứu kết quả là **miễn phí**. Bạn có thể thấy mọi thứ trên màn hình, bao gồm biểu đồ sinh, năm yếu tố, vận mệnh hôm nay và cơ sở của chúng, vì không có gì bị bỏ qua trong khi tạo báo cáo trả phí."
          },
          {
            "p": "Vai trò của báo cáo là **thêm các lớp không có trên màn hình**. Những lớp này không phải là giả mạo; chúng là các giá trị đã được tính toán trong quá trình chấm điểm nhưng không được sử dụng trên màn hình."
          }
        ]
      },
      {
        "title": "Báo cáo saju trọn đời và vận mệnh năm nay PDF — {priceDomestic}",
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
            "p": "Mục lục được đọc trực tiếp từ mô tả sản phẩm. **Số trang giống như tài liệu thực tế** — nó không bị thổi phồng vì đây là giá trị được nêu trong thông báo thông tin sản phẩm."
          }
        ]
      },
      {
        "title": "Những gì không có trên màn hình",
        "blocks": [
          {
            "p": "Màn hình miễn phí hiển thị biểu đồ sinh, năm yếu tố và vận mệnh hôm nay. Có ba giá trị được sản xuất trong quá trình tính toán nhưng không được hiển thị trên màn hình, và đây là các phần của báo cáo trả phí."
          },
          {
            "ul": [
              "**Tỷ lệ đồng minh của ngày chi** — Nó cho thấy một cách số học nơi mà sự phán xét của một cột ngày mạnh hoặc yếu đã được thực hiện. Tên phán xét một mình không chỉ ra liệu nó ở rìa hay phong phú.",
              "**Wang Sang Hyu Su Sa** — Mức độ mà tháng sinh đã thúc đẩy từng năng lượng. Nếu thanh sức mạnh chỉ ra 'có bao nhiêu', bảng này chỉ ra 'nó có đúng mùa không'.",
              "**Chi tiết điều chỉnh thời gian mặt trời thật** — Khái niệm này có trong tài liệu hướng dẫn, nhưng **'bao nhiêu phút đã bị dịch chuyển trong trường hợp của bạn'** là một giá trị khác nhau cho mỗi người, vì vậy nó chỉ được bao gồm trong báo cáo."
            ]
          }
        ]
      },
      {
        "title": "Những điều bạn nên biết trước khi mua",
        "blocks": [
          {
            "p": "**Máy chủ không lưu trữ tệp.** Khi thanh toán được phê duyệt, tài liệu được tạo ra và gửi ngay lập tức, không để lại gì trên máy chủ. Nguyên tắc của dịch vụ này về việc không lưu trữ các giá trị đầu vào được duy trì ngay cả trong quy trình trả phí."
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
            "p": "Chỉ vì số trang đã tăng lên không có nghĩa là các kết luận chắc chắn hơn. Những gì báo cáo thêm vào là **cơ sở của cùng một phép tính**, không phải một khẳng định mạnh mẽ hơn. Vận mệnh là một lĩnh vực mà các kết luận có thể khác nhau tùy thuộc vào người thực hành, và dịch vụ này chỉ tính toán những gì có thể được dịch thành quy tắc."
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
              "**Thanh toán và hoàn tiền** — Nếu tài liệu chưa được tạo ra hoặc số tiền thanh toán khác với đơn hàng, sẽ được hoàn tiền đầy đủ. Các điều kiện có trong [Chính sách hoàn tiền](/refund-policy).",
              "**Thông tin cá nhân** — Chúng tôi chấp nhận yêu cầu xem, chỉnh sửa và xóa. Chính sách xử lý có trong [Chính sách bảo mật](/privacy).",
              "**Báo cáo lỗi tính toán** — Nếu biểu đồ sinh saju hoặc điểm số có vẻ lạ, vui lòng cho chúng tôi biết. Nếu bạn bao gồm thời điểm bạn nhập ngày và giờ sinh, chúng tôi có thể tính toán lại với cùng một giá trị."
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
              "**Người đại diện** — {representative}",
              "**Số đăng ký doanh nghiệp** — {businessNumber}",
              "**Số đăng ký kinh doanh qua thư** — {mailOrderNumber}",
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
  "intro": "Các thay đổi ảnh hưởng đến điều kiện sử dụng, chẳng hạn như giá cả và điều khoản, sẽ được đăng ở đây trước khi thực hiện. Các cải tiến nội bộ như màn hình nhanh hơn sẽ không được đăng ở đây: những gì xuất hiện ở đây chỉ là những gì bạn cần biết.",
  "empty": {
    "title": "Chưa có thông báo nào được đăng.",
    "body": "Nếu có bất kỳ thay đổi nào cần thông báo cho bạn, chúng sẽ được đăng ở đây."
  },
  "effective": "Có hiệu lực từ {date}",
  "pager": {
    "label": "Trang thông báo",
    "newer": "← Mới nhất",
    "older": "Thông báo trước đó →"
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
      "title": "Trên các màn hình tiếng Ả Rập và Khmer, báo cáo sẽ được tạo bằng tiếng Anh.",
      "body": [
        "Nếu bạn đang xem màn hình bằng tiếng Ả Rập hoặc Khmer, báo cáo PDF bạn mua sẽ được tạo bằng tiếng Anh. Điều này là do công cụ chưa thể định dạng hai ngôn ngữ này thành các đoạn văn.",
        "Bạn vẫn có thể xem màn hình như nó, và tên được viết trong báo cáo sẽ chính xác như bạn đã nhập.",
        "Thông tin tương tự cũng được cung cấp trước trên màn hình thanh toán. Chúng tôi sẽ thông báo cho bạn ở đây khi công cụ hỗ trợ các ngôn ngữ này."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Tiêu chí tính toán sẽ được bao gồm cùng với kết quả.",
      "body": [
        "Dưới màn hình kết quả và báo cáo, tiêu chí tính toán (ví dụ: sajulink-natal-v1) được chỉ định. Nếu đầu vào giống nhau, cùng một giá trị sẽ luôn xuất hiện dưới cùng một tiêu chí.",
        "Nếu các quy tắc để diễn giải myeongri thay đổi và các điểm số có thể khác nhau, chúng tôi sẽ đầu tiên đăng sự thật đó và ngày có hiệu lực ở đây. Điều này là vì các số trong các liên kết kết quả mà bạn đã nhận trước đó có thể thay đổi.",
        "Tiêu chí hiện tại là v10, và việc thanh toán vẫn đang trong quá trình chuẩn bị."
      ]
    }
  }
} satisfies NoticeCopy;
