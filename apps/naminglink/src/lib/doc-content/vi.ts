import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu về Naming-Link",
    "summary": "Chúng tôi giúp bạn chọn và hiểu tên Hàn Quốc. Đây là những gì chúng tôi dựa vào để đưa ra kết quả, và những gì chúng tôi cố ý không làm.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Những gì chúng tôi làm",
        "blocks": [
          {
            "p": "Naming-Link giúp bạn **chọn và hiểu tên Hàn Quốc** — hanja đứng sau tên của một đứa trẻ, một tên Hàn Quốc để sử dụng ở nước ngoài, cách viết tên của bạn bằng Hangul, và những kỷ vật như con dấu hoặc báo cáo in."
          },
          {
            "p": "Xem kết quả của bạn là **miễn phí và không cần tài khoản.** Các mục trả phí không bao giờ bán lại những gì mà màn hình đã hiển thị: chúng mở ra nhiều ứng viên hơn, thêm phân tích bằng văn bản, hoặc biến kết quả thành thứ bạn có thể giữ."
          }
        ]
      },
      {
        "title": "Căn cứ vào đâu để đưa ra câu trả lời",
        "blocks": [
          {
            "p": "Hanja đến từ **bảng hanja tên chính thức của Tòa án Tối cao Hàn Quốc.** Mỗi ký tự có một cách đọc cố định để sử dụng trong tên, và các ký tự ngoài bảng không thể được đăng ký. Chúng tôi không thêm vào danh sách đó hoặc chọn những ký tự yêu thích."
          },
          {
            "p": "Saju và các con số năm yếu tố được tính toán từ **lịch âm dương Hàn Quốc**, với thời gian sinh được điều chỉnh theo thời gian mặt trời thực tế cho nơi sinh. Cách đọc là một tham chiếu truyền thống, không phải là một dự đoán."
          },
          {
            "p": "Các giải thích bằng văn bản được sản xuất bởi AI. Để giữ cho nó không **sáng tạo ra những điều**, mô hình chỉ được cung cấp đầu vào của bạn và dữ liệu tham khảo của chúng tôi, và được yêu cầu ở lại trong đó. Các hướng dẫn giải thích điều này một cách chi tiết."
          }
        ]
      },
      {
        "title": "Những gì chúng tôi không làm",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không đoán vận mệnh.** Không có gì ở đây hứa hẹn may mắn, sự giàu có hoặc sự bảo vệ.",
              "**Chúng tôi không lưu trữ tên của bạn.** Kết quả miễn phí không bao giờ được ghi vào máy chủ của chúng tôi, và các tài liệu trả phí được giao mà không giữ bản sao của tệp.",
              "**Việc trả phí không mua được câu trả lời tốt hơn.** Mở khóa bằng quảng cáo và mở khóa bằng thanh toán cung cấp nội dung hoàn toàn giống nhau."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Dịch vụ có sẵn bằng 23 ngôn ngữ. Các PDF trả phí được phát hành bằng tiếng Anh cho tiếng Ả Rập và tiếng Khmer — trình tạo PDF không hỗ trợ các ký tự đó — và chúng tôi thông báo điều này trên màn hình trước khi bạn thanh toán."
          }
        ]
      },
      {
        "title": "Liên hệ",
        "blocks": [
          {
            "p": "Chi tiết công ty và cách liên hệ với chúng tôi có trên [trang liên hệ](/contact), bao gồm hoàn tiền, yêu cầu bảo mật và báo cáo lỗi."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Cách hoạt động của Naming-Link",
    "title": "Chúng tôi dựa vào đâu để đặt tên cho bạn",
    "summary": "Cách chúng tôi chọn một họ Hàn Quốc, những gì chúng tôi kiểm tra trước khi gợi ý một tên, và cách chúng tôi viết tên của bạn bằng Hangul — với những phần mà chúng tôi cố ý bỏ qua.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "ký tự hanja tên"
              },
              {
                "value": "{syllableCount}",
                "label": "âm tiết Hangul được bao gồm"
              },
              {
                "value": "{effectiveDate}",
                "label": "ngày hiệu lực của bảng"
              },
              {
                "value": "{avoidTotal}",
                "label": "ký tự truyền thống bị tránh"
              }
            ]
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Cách đọc",
    "title": "Cách đọc cố định — một cách phát âm cho mỗi ký tự",
    "summary": "Bảng chính thức không chỉ liệt kê các ký tự. Nó cũng cố định cách đọc của mỗi ký tự khi được sử dụng trong một tên.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Một cách đọc cố định cho mỗi ký tự",
        "blocks": [
          {
            "p": "Bảng hanja tên không chỉ quyết định các ký tự nào có thể được sử dụng. **Nó cũng cố định cách đọc của mỗi ký tự khi nó xuất hiện trong một tên.** Cách đọc cố định đó là điều mà việc đăng ký dựa vào."
          },
          {
            "p": "Hầu hết hanja có nhiều cách đọc có thể. Tuy nhiên, một tên được viết trên tài liệu và nói ra, vì vậy nó cần chính xác một cách đọc. Do đó, bảng chỉ định mỗi ký tự cách đọc của nó để sử dụng trong tên, và không có cách đọc nào khác có thể được đăng ký."
          }
        ]
      },
      {
        "title": "Vì vậy, âm thanh được ưu tiên",
        "blocks": [
          {
            "p": "Đó là lý do tại sao Naming-Link cố định âm thanh trước khi tìm kiếm hanja. Nếu tên là \"지은\", ý nghĩa chỉ có thể được chọn từ các ký tự được gán cách đọc **지** và các ký tự được gán cách đọc **은**."
          },
          {
            "p": "Dù ý nghĩa có tốt đến đâu, một ký tự có cách đọc không khớp không thể được sử dụng cho tên đó. Chúng tôi cũng không bao giờ thay đổi âm thanh của một tên để phù hợp với một ký tự — một tên được nói ra suốt đời, và âm thanh được xác định trước, với hanja theo sau."
          }
        ]
      },
      {
        "title": "Họ nằm ngoài bảng này",
        "blocks": [
          {
            "p": "Điều này thường bị hiểu sai. **Bảng điều chỉnh tên gọi, không phải họ.** Một họ tuân theo những gì đã có trong sổ đăng ký gia đình, vì vậy một số người sử dụng các ký tự không có trong bảng hanja tên."
          },
          {
            "p": "Đó là lý do tại sao Naming-Link xử lý hanja họ khác. Chúng tôi chỉ giúp bạn tìm một họ, và chúng tôi để lại một trường để nhập trực tiếp, cho những người có ký tự nằm ngoài bảng. Các họ hai âm tiết như Namgung và Seonwoo được nhập theo cách tương tự."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Cách thức hoạt động",
    "title": "Cách chúng tôi viết tên của bạn bằng Hangul",
    "summary": "Cách chúng tôi chọn âm thanh khi viết một tên nước ngoài bằng Hangul, và lý do tại sao chúng tôi không gắn hanja.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi mang âm thanh, không mang ý nghĩa",
        "blocks": [
          {
            "p": "Dịch vụ này viết **tên của bạn** bằng Hangul. Nó không cung cấp cho bạn một tên Hàn Quốc. Michael trở thành 마이클 — cùng một tên, được viết để người Hàn Quốc có thể đọc và nói. Chúng tôi không thay thế nó bằng một tên Hàn Quốc có nghĩa tương tự."
          },
          {
            "p": "Nếu bạn muốn một cái tên Hàn Quốc, **đó là một dịch vụ khác**. Một dịch vụ giữ nguyên tên của bạn và chỉ thay đổi chữ viết; dịch vụ kia đề xuất một cái tên mới."
          }
        ]
      },
      {
        "title": "Âm thanh Hàn Quốc không có",
        "blocks": [
          {
            "p": "Mỗi ngôn ngữ đều có âm thanh mà tiếng Hàn thiếu — f, v, z, th, và sự phân biệt nguyên âm mà tiếng Hàn không thực hiện. Đối với những âm thanh đó, chúng tôi viết những gì **một người nói tiếng Hàn thực sự nói** khi họ đọc tên của bạn to lên, thay vì phiên âm từng ký tự một cách nguyên bản. Mục tiêu là cách viết sẽ được sử dụng, không phải là cách viết chính xác nhất về mặt kỹ thuật."
          },
          {
            "p": "Cách viết giống nhau có thể khác nhau tùy thuộc vào nguồn gốc của tên, vì vậy chúng tôi hỏi về ngôn ngữ và quốc gia của bạn và làm việc từ cách phát âm đó."
          }
        ]
      },
      {
        "title": "Nhiều cách viết, bên cạnh nhau",
        "blocks": [
          {
            "p": "Không có câu trả lời đúng duy nhất. Cách viết gần nhất với âm thanh gốc, cách viết phổ biến nhất ở Hàn Quốc, và cách viết dễ nhất để viết thường là ba điều khác nhau. Vì vậy, chúng tôi hiển thị chúng cùng nhau và nói về những gì phân biệt chúng."
          },
          {
            "p": "Nếu không có cách nào trong số đó cảm thấy đúng, bạn có thể thêm một gợi ý về âm thanh bạn muốn và chạy lại — ví dụ, rằng một âm tiết cụ thể nên được viết khác."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Không có hanja ở đây",
        "blocks": [
          {
            "p": "Chúng tôi không gán hanja cho một phiên âm. Hanja mang ý nghĩa, và quy trình này liên quan đến âm thanh. Việc ghép các ký tự với âm thanh một mình có thể khiến bạn nhận được một ý nghĩa mà bạn không bao giờ yêu cầu."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cách thức hoạt động",
    "title": "Cách chúng tôi xây dựng một cái tên Hàn Quốc",
    "summary": "Chúng tôi chọn từ các họ có sẵn, cân nhắc cách dễ dàng tên được nói và viết, và hỏi tên đó dùng để làm gì.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi bắt đầu với họ",
        "blocks": [
          {
            "p": "Ở Hàn Quốc, họ đứng trước, và khác với tên gọi, nó không được tự do sáng tạo — bạn thừa hưởng nó. Vì vậy, chúng tôi chỉ đề xuất những họ mà người Hàn Quốc thực sự có. Nhóm mặc định của chúng tôi là **20 họ phổ biến nhất**, mà cùng nhau bao phủ khoảng 80% dân số."
          },
          {
            "p": "Nếu họ của bạn trùng hợp với một họ Hàn Quốc thực sự theo âm thanh — Wang với 왕, Ye với 예 — chúng tôi sẽ đặt cái đó lên trước. Giữ một mối liên hệ với tên gốc của bạn có giá trị hơn là một họ được chọn ngẫu nhiên."
          },
          {
            "p": "Bạn có thể tự chọn một họ hoặc để chúng tôi đề xuất một cái. Dù bằng cách nào, nó sẽ là **một họ có thật**."
          }
        ]
      },
      {
        "title": "Dễ nói, dễ viết",
        "blocks": [
          {
            "p": "Đây là một cái tên mà mọi người ở Hàn Quốc sẽ thực sự gọi bạn, vì vậy điều đầu tiên chúng tôi kiểm tra là liệu một người Hàn có thể nghe nó một lần và viết nó xuống không. Một cái tên cần phải được đánh vần mỗi lần là một gánh nặng bạn phải mang, không phải chúng tôi."
          },
          {
            "p": "Ý nghĩa cũng quan trọng. Tên gọi Hàn Quốc thường mang một ý nghĩa, vì vậy chúng tôi cho bạn biết tên đó đọc như thế nào và tại sao chúng tôi chọn nó — không chỉ là tên đó."
          }
        ]
      },
      {
        "title": "Chúng tôi hỏi tên đó dùng để làm gì",
        "blocks": [
          {
            "p": "Một cái tên cho giấy tờ đại học không giống như một cái tên mà bạn bè sẽ gọi to qua một căn phòng, hoặc một tên bạn sẽ sử dụng trực tuyến. Chúng tôi hỏi bạn dự định sử dụng nó như thế nào và xem xét điều đó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đây không phải là một phiên âm",
        "blocks": [
          {
            "p": "Ở đây chúng tôi đề xuất một **tên Hàn Quốc mới**. Nếu bạn muốn tên hiện tại của mình được viết bằng Hangul — Michael là 마이클 — hãy xem [hướng dẫn viết bằng Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Thông báo",
    "title": "Thông báo",
    "summary": "Nơi chúng tôi thông báo những thay đổi ảnh hưởng đến cách bạn sử dụng dịch vụ.",
    "backLabel": "Trang chủ",
    "sections": []
  },
  "contact": {
    "eyebrow": "Liên hệ",
    "title": "Liên hệ với chúng tôi",
    "summary": "Cách liên hệ với chúng tôi để hỏi, hoàn tiền, yêu cầu quyền riêng tư và báo cáo lỗi, cùng với thông tin công ty của chúng tôi.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Gửi email cho chúng tôi",
        "blocks": [
          {
            "p": "Viết đến **{email}**. Chúng tôi sẽ trả lời trong vòng hai ngày làm việc. Đối với bất kỳ điều gì liên quan đến đơn hàng — thanh toán, hoàn tiền, một tệp bạn không nhận được — vui lòng bao gồm **số đơn hàng hoặc email bạn đã thanh toán**."
          },
          {
            "p": "Yêu cầu qua điện thoại: {customerCenter} (giờ làm việc Hàn Quốc)."
          }
        ]
      },
      {
        "title": "Những gì cần gửi ở đây",
        "blocks": [
          {
            "ul": [
              "**Thanh toán và hoàn tiền** — nếu một tài liệu chưa bao giờ được sản xuất, hoặc số tiền bị tính khác với đơn hàng của bạn, chúng tôi hoàn tiền đầy đủ. Xem [chính sách hoàn tiền](/refund-policy).",
              "**Quyền riêng tư** — yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu của bạn. Xem [chính sách quyền riêng tư](/privacy).",
              "**Sửa chữa** — nếu một ý nghĩa, cách đọc hoặc tính toán của hanja trông sai, hãy cho chúng tôi biết. Việc đề cập đến màn hình nào và những gì bạn đã nhập sẽ giúp rất nhiều.",
              "**Bất kỳ điều gì khác** — các mối quan hệ đối tác và báo chí gửi đến cùng một địa chỉ."
            ]
          }
        ]
      },
      {
        "title": "Thông tin công ty",
        "blocks": [
          {
            "ul": [
              "**Thực thể pháp lý** — {companyName}",
              "**Đại diện** — {representative}",
              "**Số đăng ký kinh doanh** — {businessNumber}",
              "**Số bán hàng qua thư** — {mailOrderNumber}",
              "**Địa chỉ** — {address}",
              "**Dịch vụ khách hàng** — {customerCenter}",
              "**Email** — {email}",
              "**Nhân viên bảo mật** — {privacyOfficer}",
              "**Nhà cung cấp dịch vụ lưu trữ** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bạn không cần phải bao gồm tên hoặc ngày sinh trong tin nhắn của mình. Kết quả miễn phí không bao giờ được lưu trữ trên máy chủ của chúng tôi, vì vậy chúng tôi không thể tra cứu lại — một số đơn hàng là đủ."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Phong tục",
    "title": "Các ký tự thường bị tránh",
    "summary": "Điều này không bị cấm theo luật nhưng là một phong tục. Chúng tôi đã viết về những gì đã bị tránh và lý do tại sao, cũng như cách chúng tôi xử lý nó.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Các ký tự được chấp nhận theo luật",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} ký tự",
                "label": "Các ký tự đã được tổng hợp bị tránh"
              },
              {
                "value": "{avoidCommonlyUsed} ký tự",
                "label": "Trong số đó, các ký tự vẫn được sử dụng phổ biến"
              }
            ]
          },
          {
            "p": "Có những ký tự được đưa vào danh sách các ký tự cho tên cá nhân và **được chấp nhận theo luật**, nhưng lại được coi là không phù hợp cho tên."
          },
          {
            "p": "Suy nghĩ cơ bản là **\"ý nghĩa quá mức thực sự không mong muốn.\"** Điều này phản ánh một cảm giác kiềm chế cổ xưa, tin rằng một cái tên có thể làm lu mờ con người."
          },
          {
            "ul": [
              "珍·寶 — các ký tự được coi là quá quý giá",
              "王·帝 — các ký tự được coi là mang quá nhiều sức mạnh",
              "thiên đường và các vị thần — quá vĩ đại để một người có thể hiện thân"
            ]
          },
          {
            "p": "**Tuy nhiên, những ký tự này không phải là không thể sử dụng.** Đây không phải là một lệnh cấm hợp pháp mà là một phong tục, và phong tục thay đổi theo vùng miền, gia đình và thế hệ, và có thể thay đổi theo thời gian."
          },
          {
            "p": "Trên thực tế, trong số {avoidTotal} ký tự mà chúng tôi đã tổng hợp, {avoidCommonlyUsed} vẫn được sử dụng phổ biến trong các tên. Thực tế là chúng được biết đến là bị tránh nhưng vẫn được sử dụng rộng rãi cho thấy phong tục này không phải là tuyệt đối."
          }
        ]
      },
      {
        "title": "Có những loại nào?",
        "blocks": [
          {
            "p": "Các ký tự hiện tại được tổng hợp được chia thành bảy loại."
          },
          {
            "ul": [
              "**Kho báu và đồ vật** — Các ký tự trực tiếp đề cập đến sự giàu có hoặc đồ vật",
              "**Thiên đường và thiên nhiên** — Những thứ như mặt trời, mặt trăng và bầu trời được coi là quá vĩ đại để một người có thể hiện thân",
              "**Vua và quý tộc** — Các ký tự biểu thị địa vị, như vua hoặc hoàng đế",
              "**Thần thánh** — Các ký tự đề cập đến các lĩnh vực thiêng liêng, như các vị thần hoặc linh hồn",
              "**Mùa và khác** — Các ký tự gắn liền với thời gian hoặc trạng thái cụ thể",
              "**Động vật** — Các động vật được coi là có năng lượng mạnh mẽ, như rồng hoặc hổ",
              "**Sự thái quá** — Các ký tự được xem là có ý nghĩa quá lớn hoặc tràn đầy"
            ]
          }
        ]
      },
      {
        "title": "Bạn có thể thêm hoặc xóa ký tự tự mình",
        "blocks": [
          {
            "p": "Chúng tôi không xóa những ký tự này một cách tùy tiện. **Chúng tôi đã cung cấp hai tùy chọn trên màn hình nhập để người đặt tên chọn cách xử lý chúng.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Các tùy chọn có sẵn trên màn hình nhập",
        "blocks": [
          {
            "p": "**Loại bỏ các ký tự bị tránh khỏi ứng viên** — Nếu được kích hoạt, chúng sẽ hoàn toàn bị loại bỏ. Nếu không, chúng sẽ vẫn có trong kết quả với nhãn \"Thường bị tránh\" và lý do kèm theo."
          },
          {
            "p": "**Loại bỏ ngay cả các ký tự được sử dụng phổ biến** — Điều này loại bỏ các ký tự có trong danh sách tránh nhưng thực sự được sử dụng rộng rãi (圭·琳·玲·元·太·星·海, v.v.). Nếu được kích hoạt, số lượng ứng viên sẽ giảm đáng kể."
          },
          {
            "p": "Mặc định là **không loại bỏ mà chỉ hiển thị** chúng. Nếu chúng bị lặng lẽ loại bỏ khỏi danh sách, điều đó có thể khiến những người muốn sử dụng ký tự đó cảm thấy như nó không tồn tại."
          }
        ]
      },
      {
        "title": "Đảm bảo các tùy chọn không biến mất",
        "blocks": [
          {
            "p": "Nếu không còn ký tự nào có thể sử dụng cho âm tiết đó, chúng tôi sẽ gỡ bỏ sự loại trừ cho âm tiết đó và hiển thị các ứng viên. Chúng tôi tin rằng điều này tốt hơn là không có tùy chọn nào cả."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Cơ sở dịch vụ",
    "title": "Cơ sở nào cho việc chuyển đổi tên toàn cầu?",
    "summary": "Chúng tôi cung cấp các ứng viên từ năm góc độ, duy trì các hệ thống viết của mỗi ngôn ngữ và chỉ sử dụng các tên hiện có.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Các ứng viên được cung cấp từ năm góc độ",
        "blocks": [
          {
            "p": "Không chỉ có một cách để dịch một cái tên sang ngôn ngữ khác. Tùy thuộc vào việc bảo tồn âm thanh hay ý nghĩa, chọn một cái tên tự nhiên trong bối cảnh địa phương hoặc ưu tiên cá tính, các câu trả lời sẽ khác nhau. Do đó, thay vì trình bày một tùy chọn, chúng tôi cung cấp **một từ mỗi năm góc độ khác nhau**."
          },
          {
            "ul": [
              "**Tùy chọn bảo tồn âm thanh** — Bảo tồn âm thanh của tên gốc càng nhiều càng tốt",
              "**Tùy chọn dịch nghĩa** — Dịch nghĩa chứa trong tên sang tên của ngôn ngữ đó",
              "**Tùy chọn thỏa hiệp âm thanh và nghĩa** — Lấy một nửa từ mỗi bên",
              "**Tùy chọn chính thống địa phương** — Chọn những cái tên thực sự được sử dụng phổ biến trong bối cảnh văn hóa đó",
              "**Tùy chọn cá tính và thương hiệu** — Ưu tiên những cái tên dễ nhớ và đặc biệt"
            ]
          },
          {
            "p": "Năm tùy chọn sẽ được đảm bảo cung cấp. Vì sở thích khác nhau từ người này sang người khác, chúng tôi tin rằng tốt hơn là cho phép lựa chọn thay vì trình bày một cái như câu trả lời đúng."
          }
        ]
      },
      {
        "title": "Mỗi ngôn ngữ có quy tắc hệ thống viết khác nhau",
        "blocks": [
          {
            "p": "Khi dịch sang một ngôn ngữ không sử dụng chữ cái La Mã, nó phải được viết bằng chữ viết của ngôn ngữ đó. Đối với tiếng Nhật, nó sẽ là kana và kanji; đối với tiếng Nga, Mông Cổ và Kazakh, nó sẽ là chữ Cyrillic; đối với tiếng Ả Rập, nó sẽ là chữ Ả Rập; và đối với tiếng Thái, Khmer và Hindi, nó sẽ là các chữ viết tương ứng của chúng. Nếu bạn viết nó bằng chữ cái La Mã và gọi đó là \"tên tiếng Nhật,\" nó sẽ không thể được sử dụng ở quốc gia đó."
          },
          {
            "p": "Do đó, chúng tôi có các quy tắc riêng cho hệ thống viết của mỗi ngôn ngữ, và máy chủ kiểm tra một lần nữa để đảm bảo kết quả nằm trong hệ thống viết đó. Những sai sót như bỏ qua họ hoặc trộn lẫn vào Hangul sẽ bị lọc ra ở đây."
          }
        ]
      },
      {
        "title": "Chúng tôi sử dụng những cái tên thực sự được sử dụng",
        "blocks": [
          {
            "p": "Để tránh việc tạo ra những cái tên nghe có vẻ hợp lý nhưng không tồn tại ở quốc gia đó, chúng tôi dựa trên những cái tên đã có sẵn. Tên được sử dụng trong các tài liệu và giới thiệu, vì vậy nếu một người địa phương nghĩ rằng \"không có cái tên nào như vậy,\" thì nó không thể được sử dụng."
          }
        ]
      },
      {
        "title": "Chúng tôi Tách Biệt Lựa Chọn và Mô Tả",
        "blocks": [
          {
            "p": "Chúng tôi xử lý nhiệm vụ xác định năm ứng cử viên một cách riêng biệt với nhiệm vụ mô tả chi tiết từng ứng cử viên. Vì phần mô tả tốn nhiều thời gian, chúng tôi tách phần đó ra để tạo ra đồng thời."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tại Sao Điều Này Được Thay Đổi?",
        "blocks": [
          {
            "p": "Ban đầu, chúng tôi tạo ra năm góc nhìn một cách riêng biệt. Điều này nhanh hơn, nhưng **số lượng ứng cử viên thay đổi mỗi lần.** Khi mỗi người chọn ứng cử viên, có sự trùng lặp hoặc khác biệt, và nếu một ứng cử viên thất bại, ứng cử viên đó sẽ hoàn toàn biến mất, dẫn đến chỉ còn hai hoặc ba thay vì năm."
          },
          {
            "p": "Bây giờ, vì chúng tôi xác định bộ ứng cử viên và phân phối góc nhìn cùng một lúc, **số lượng là cố định.** Ngay cả khi một mô tả thất bại, các ứng cử viên vẫn giữ nguyên và được trình bày với thông tin ngắn gọn. Chúng tôi tin rằng tốt hơn là luôn có cùng một số lượng, ngay cả khi điều đó mất một chút thời gian hơn."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Cơ Sở Dịch Vụ",
    "title": "Cơ sở nào để khớp nghĩa hanja?",
    "summary": "Đầu tiên, âm thanh được cố định, và chỉ những hanja có thể được đăng ký với âm thanh đó được tập hợp, và ý nghĩa được xem như một sự kết hợp chứ không phải là một ký tự đơn.",
    "backLabel": "Hướng Dẫn Sử Dụng",
    "sections": [
      {
        "title": "Đầu tiên, cố định âm thanh",
        "blocks": [
          {
            "p": "Nếu bạn đã quyết định về \"지은\", thì **지** và **은** không thay đổi. Chúng tôi không thay đổi âm thanh của tên để phù hợp với hanja. Một cái tên là thứ được gọi trong suốt cuộc đời, và chúng tôi tin rằng thứ tự là âm thanh được cố định trước, sau đó là hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Cố định âm thanh",
              "soundNote": "Chúng tôi không bao giờ thay đổi nó để phù hợp với một ký tự",
              "tableStep": "② Lọc theo bảng chính thức",
              "tableBody": "chỉ các ký tự được chỉ định đọc theo âm đó",
              "tableNote": "từ tất cả {total} ký tự trong bảng",
              "tableNoteNoCount": "chỉ các ký tự có trong bảng",
              "combineStep": "③ Đọc hai ký tự cùng nhau",
              "combineNote": "ý nghĩa là cách mà cặp ký tự đọc, không phải mỗi ký tự riêng lẻ"
            },
            "caption": "Đây là thứ tự mà các ứng cử viên được thu hẹp lại. Nó không phải là việc chọn hanja trước và khớp âm thanh, mà là âm thanh đến trước, và chỉ những ký tự được chỉ định đọc với âm thanh đó mới trở thành ứng cử viên."
          }
        ]
      },
      {
        "title": "Chỉ tập hợp những hanja có thể được đăng ký với âm thanh đó",
        "blocks": [
          {
            "p": "Bảng hanja chính thức có một cách đọc được chỉ định cho mỗi ký tự khi được sử dụng trong tên. Chỉ những ký tự được chỉ định đọc là **지** và **은** mới trở thành ứng cử viên. Dù ý nghĩa có tốt đến đâu, nếu cách đọc không khớp, nó không thể là hanja cho cái tên đó."
          },
          {
            "p": "Phạm vi để chọn ứng cử viên là {characterTotal} ký tự từ bảng của Tòa án Tối cao. Các ký tự không có trong bảng này hoàn toàn không được trình bày — ngay cả khi được hiển thị, chúng không thể được đăng ký."
          },
          {
            "p": "Số lượng ký tự trong bảng được công bố bởi Tòa án Tối cao là hơi nhiều hơn con số này. Bảng cũng bao gồm **các ký tự không có mã ký tự tiêu chuẩn**, không thể hiển thị đúng trên màn hình và tài liệu, vì vậy những ký tự đó đã bị loại trừ khỏi các ứng cử viên. Bạn phải kiểm tra với cơ quan liên quan xem bạn có thể đăng ký với những ký tự đó hay không."
          }
        ]
      },
      {
        "title": "Ý nghĩa được xem như một sự kết hợp, không phải một ký tự đơn",
        "blocks": [
          {
            "p": "Ý nghĩa của mỗi ký tự riêng lẻ tốt và ý nghĩa khi hai ký tự được kết hợp lại tốt là khác nhau. Tên được đọc như những sự kết hợp, vì vậy chúng tôi xem xét các sự kết hợp cùng nhau. Nếu bạn có những ý nghĩa cụ thể mà bạn muốn bao gồm hoặc tránh, những điều đó sẽ được xem xét."
          },
          {
            "p": "Nếu bạn đang sử dụng một ký tự thế hệ, ký tự đó được cố định, và các sự kết hợp được tìm kiếm từ các vị trí còn lại. Tên gia đình (성) không bị hạn chế bởi bảng hanja chính thức, vì vậy nó được xử lý riêng."
          }
        ]
      },
      {
        "title": "Chúng tôi chỉ ra các phong tục tránh mà không loại bỏ chúng",
        "blocks": [
          {
            "p": "Nếu một ký tự được coi là truyền thống cần tránh được đưa vào các ứng cử viên, chúng tôi không loại bỏ nó mà chỉ ra lý do cùng với nó. Đây là vấn đề phong tục, không phải luật, và bạn có thể chọn loại bỏ hoàn toàn nó khỏi màn hình nhập. Để biết thêm chi tiết, xem [Hanja Truyền Thống Cần Tránh](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Chúng tôi cũng thông báo lý do loại trừ",
        "blocks": [
          {
            "p": "Chúng tôi cho biết lý do tại sao một số ký tự bị loại trừ khỏi các ứng cử viên. Nếu chúng tôi chỉ hiển thị những gì đã được chọn, bạn không thể biết \"tại sao cái này?\" Nếu không còn ký tự nào có thể sử dụng cho âm tiết đó, chúng tôi sẽ gỡ bỏ sự loại trừ cho âm tiết đó và hiển thị các ứng cử viên."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cách đọc kết quả",
        "blocks": [
          {
            "p": "Các ứng cử viên là **góc nhìn, không phải xếp hạng**. Cái đầu tiên không có nghĩa là nó là cái tên tốt nhất; chúng được chọn từ các góc nhìn khác nhau. Những cái ưu tiên sự kết hợp của các ý nghĩa, những cái chọn các ký tự không phổ biến, và những cái nhấn mạnh tính trung lập được trình bày cạnh nhau. Câu trả lời thay đổi tùy thuộc vào góc nhìn nào bạn coi trọng."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Tiêu Chuẩn Của Chúng Tôi",
    "title": "Những Gì Chúng Tôi Không Sử Dụng",
    "summary": "Chúng tôi không chỉ định tổng vận mệnh hoặc điểm số số học, cũng như không sử dụng số lượng nét. Các yếu tố năm hành chỉ được sử dụng như một trục bổ sung. Dưới đây là lý do.",
    "backLabel": "Hướng Dẫn Sử Dụng",
    "sections": [
      {
        "title": "Lý do không chỉ định tổng vận mệnh hoặc điểm số số học",
        "blocks": [
          {
            "p": "Có những phương pháp chỉ định tổng vận mệnh hoặc điểm số số học cho các tên để đánh giá chúng. Naming-Link không cung cấp những con số đó. Lý do là bốn."
          },
          {
            "p": "**Đầu tiên, không chỉ có một tiêu chuẩn.** Các phương pháp tính toán vận mệnh khác nhau tùy theo trường phái, và cùng một cái tên có thể được đánh giá tích cực theo một tiêu chuẩn và tiêu cực theo một tiêu chuẩn khác. Chúng tôi không có cơ sở để quyết định cái nào là đúng. Thật không trung thực khi trình bày một cái như thể nó là câu trả lời."
          },
          {
            "p": "**Thứ hai, những tính toán đó dựa vào số lượng nét.** Tuy nhiên, dữ liệu của Tòa án Tối cao hoàn toàn không bao gồm số lượng nét. Hơn nữa, số lượng nét có thể thay đổi tùy thuộc vào việc chúng được tính là ký tự thông thường hay ký tự giản lược và cách các bộ thủ được tính. Vì các con số cơ bản không được thiết lập một cách chắc chắn, các điểm số được xây dựng trên đó không thể là xác định."
          },
          {
            "p": "**Thứ ba, các con số có vẻ vững chắc hơn thực tế.** Khi nó nói \"87 điểm\", nó nghe như một giá trị đo lường hơn là một diễn giải thông thường. Những cái tên có thể cảm thấy bị áp lực bởi con số đó, đẩy lùi những gì thực sự quan trọng (Có dễ gọi không? Ý nghĩa có phù hợp không? Nó có chứa những mong muốn mong muốn không?)."
          },
          {
            "p": "**Thứ tư, không có cách nào để xác minh.** Mối quan hệ giữa một cái tên và cuộc sống của một người không thể được xác minh. Chuyển đổi một cái gì đó không thể nói là đúng hay sai thành một điểm số dẫn đến một con số không thể được xác nhận, mặc dù nó không thể sai."
          },
          {
            "p": "Chúng tôi chỉ sử dụng những gì có thể được **chứng minh.** Bảng hanja chính thức của Tòa án Tối cao, các cách đọc được chỉ định cho mỗi ký tự, và các ý nghĩa được liệt kê trong bảng. Thay vào đó, chúng tôi cung cấp lý do tại sao ứng cử viên này được chọn và tại sao một số ký tự bị loại trừ, cho thấy **lý do thay vì điểm số**."
          }
        ]
      },
      {
        "title": "Chúng tôi không sử dụng số lượng nét",
        "blocks": [
          {
            "p": "Dữ liệu hanja chính thức do Tòa án Tối cao cung cấp không bao gồm số lượng nét. Trong số {characterTotal} ký tự mà chúng tôi nhận được, **không có ký tự nào có số lượng nét.**"
          },
          {
            "p": "Để sử dụng số lượng nét, chúng tôi sẽ cần lấy số từ nơi khác, nhưng nếu chúng tôi không thể làm rõ nơi những con số đó đến từ đâu và tiêu chí nào được sử dụng để đếm chúng, điều đó có nghĩa là đánh giá tên dựa trên những con số không có cơ sở. Chúng tôi đã quyết định không đánh giá tên dựa trên những giá trị không thể được chứng minh."
          }
        ]
      },
      {
        "title": "Chúng tôi chỉ sử dụng năm hành như một tham chiếu",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Năm hành được đặt trong một vòng tròn: thế hệ chạy giữa các hàng xóm, kiểm soát bỏ qua một cái",
              "wood": "gỗ",
              "fire": "lửa",
              "earth": "đất",
              "metal": "kim loại",
              "water": "nước",
              "saeng": "Thế hệ — mỗi thế hệ sinh ra thế hệ bên cạnh",
              "geuk": "Kiểm soát — mỗi yếu tố kiềm chế yếu tố mà nó bỏ qua"
            },
            "caption": "Mối quan hệ giữa năm yếu tố. Di chuyển dọc theo vòng tròn đại diện cho sự sinh sản lẫn nhau (相生), trong khi bỏ qua một yếu tố và kiềm chế yếu tố tiếp theo đại diện cho sự kiềm chế lẫn nhau (相剋). Chúng tôi chỉ sử dụng mối quan hệ này như một trục bổ sung để so sánh các ứng viên."
          },
          {
            "p": "Nếu bạn đã nhập tháng sinh của mình, chúng tôi sử dụng một tham chiếu đơn giản về năm yếu tố dựa trên tháng đó như một trục bổ sung để so sánh các ứng viên. Tuy nhiên, đây không phải là một phân tích saju chính xác, và **chúng tôi không tuyên bố rằng tên gọi xác định số phận hoặc tính cách của một người.**"
          },
          {
            "p": "Trong lựa chọn cuối cùng, những gì chúng tôi ưu tiên là âm thanh, sự kết hợp của các ý nghĩa, giá trị mà gia đình muốn truyền đạt, và liệu nó có thể thực sự được đăng ký hay không. Nếu bạn chưa nhập tháng sinh của mình, chúng tôi hoàn toàn loại trừ tham chiếu năm yếu tố khỏi phân tích — chúng tôi không đưa ra giả định tùy tiện về thông tin không rõ."
          },
          {
            "p": "Nếu bạn muốn một phân tích chính xác dựa trên saju, chúng tôi cung cấp điều đó trong một báo cáo chi tiết riêng. Lý do chúng tôi không ưu tiên năm yếu tố trong việc khớp hanja miễn phí là vì chúng tôi không muốn đưa ra những phán đoán dựa trên năm yếu tố được rút ra từ một ngày và giờ sinh không đầy đủ như thể chúng là xác định."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Sản phẩm trả phí",
    "title": "Sản phẩm trả phí bao gồm những gì?",
    "summary": "Chúng tôi làm rõ những gì có thể thấy miễn phí và những tính năng bổ sung nào đi kèm với việc thanh toán cho mỗi sản phẩm. Giá cả được lấy từ cài đặt sản phẩm thực tế.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Những gì có thể thấy miễn phí?",
        "blocks": [
          {
            "p": "Tạo một cái tên và xem kết quả là **miễn phí**. Không cần đăng ký thành viên. Bạn có thể thấy các ý nghĩa khớp của hanja, tạo tên Hàn Quốc, chuyển đổi tên toàn cầu và ghi chú phát âm bằng Hangul, cùng với các kết quả được đề xuất và lý do của chúng trên màn hình."
          },
          {
            "p": "Các sản phẩm trả phí không **bán lại những gì đã được hiển thị trên màn hình.** Chúng mở rộng thêm nhiều ứng viên, thêm nhiều giải thích, hoặc tạo ra một định dạng có thể được lưu trữ hoặc truyền tải."
          }
        ]
      },
      {
        "title": "Công khai tất cả các ứng viên — {priceUnlock}",
        "blocks": [
          {
            "p": "Các kết quả được đề xuất được cấu trúc để mở ứng viên từng cái một. Khi xem quảng cáo, một cái được mở ra tại một thời điểm, trong khi sản phẩm này **mở tất cả các ứng viên còn lại cùng một lúc**."
          },
          {
            "p": "Nếu bạn không vội, bạn không cần phải mua. **Kết quả từ việc mở qua quảng cáo và những gì từ thanh toán hoàn toàn giống nhau** — chỉ là vấn đề chờ đợi, và việc thanh toán không mang lại ứng viên tốt hơn."
          }
        ]
      },
      {
        "title": "Chi tiết Hanja — Ba giai đoạn",
        "blocks": [
          {
            "p": "Có ba sản phẩm chi tiết trong quy trình chọn hanja để gắn vào một cái tên bằng Hangul."
          },
          {
            "ul": [
              "**Tối đa 5 ứng viên hanja chi tiết** — {priceFiveDetail}. Bạn có thể mở rộng giải thích cho tối đa năm ứng viên trên màn hình. Không có PDF.",
              "**Tối đa 10 ứng viên hanja chi tiết mở rộng PDF** — {priceTenDetail}. Số lượng ứng viên tăng lên mười, và một tài liệu PDF được bao gồm.",
              "**Tối đa 10 ứng viên hanja báo cáo toàn diện saju và năm yếu tố** — {priceTenSaju}. Ngoài những điều trên, nó bao gồm biểu đồ saju được rút ra từ ngày sinh và các lực của năm yếu tố, xem xét lý do tại sao một hanja cụ thể phù hợp với cái tên đó từ góc độ của năm yếu tố."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja tự nó là thông tin công khai",
        "blocks": [
          {
            "p": "Các hanja có thể sử dụng và ý nghĩa của chúng đến từ bảng hanja tên chính thức được thiết lập bởi Tòa án Tối cao Hàn Quốc, và tất cả đều có sẵn công khai trong tài liệu hướng dẫn của dịch vụ. Những gì các sản phẩm trả phí bán không phải là thông tin hanja mà là **hành động chọn và giải thích nó theo tên**."
          }
        ]
      },
      {
        "title": "PDF cho người dùng toàn cầu",
        "blocks": [
          {
            "p": "Tài liệu có sẵn để chuyển đổi tên nước ngoài thành tên Hàn Quốc hoặc viết tên bằng Hangul. Giá cả theo số tiền hiển thị trên màn hình thanh toán."
          },
          {
            "ul": [
              "**Báo cáo cao cấp tên Hàn Quốc** — 3 trang. Bao gồm một bìa thư pháp, ý nghĩa của tên và lý do chọn nó, cùng với giải thích saju và năm yếu tố.",
              "**Nghệ thuật tên bằng Hangul** — 2 trang. Bao gồm một bìa thư pháp và hướng dẫn phát âm. Nó chứa cách viết tên bằng Hangul và cách phát âm."
            ]
          }
        ]
      },
      {
        "title": "Con dấu tên",
        "blocks": [
          {
            "p": "Chúng tôi khắc tên được tạo trên màn hình vào một con dấu vật lý và gửi cho bạn. Giá cả thay đổi theo mẫu — con dấu tròn {priceStampRound}, con dấu vuông {priceStampSquare}, con dấu gỗ mun {priceStampEbony}. Giao hàng quốc tế cũng có sẵn."
          },
          {
            "p": "**Từ đây, các sản phẩm bao gồm cả phí vận chuyển.** Không giống như các mục trước, sản xuất và giao hàng mất thời gian, và cần có địa chỉ nhận. Thông tin giao hàng chỉ được sử dụng cho việc xử lý đơn hàng và lưu giữ hợp pháp, và khi quá trình xử lý hoàn tất, nó sẽ bị tiêu hủy sau thời gian quy định trong chính sách."
          }
        ]
      },
      {
        "title": "Những điều cần biết trước khi mua",
        "blocks": [
          {
            "p": "**Sản phẩm kỹ thuật số được cung cấp ngay lập tức sau khi thanh toán.** Bạn có thể hủy và nhận lại toàn bộ tiền bất cứ lúc nào trước khi tải xuống bắt đầu, nhưng một khi tải xuống hoàn tất, việc rút lui do thay đổi ý kiến đơn giản sẽ bị hạn chế (Điều 17, Khoản 2 của Luật Thương mại Điện tử). Điều kiện này được đồng ý riêng trên màn hình thanh toán."
          },
          {
            "p": "**Khiếu nại về nội dung của các kết quả không phải là lý do để hoàn tiền.** Tuy nhiên, nếu tài liệu không được tạo ra, tệp không thể mở, hoặc số tiền thanh toán khác với đơn hàng, nó sẽ được xử lý như một lần phát hành lại hoặc hoàn tiền toàn bộ."
          },
          {
            "p": "Các điều kiện chi tiết được nêu trong [Chính sách hoàn tiền](/refund-policy) và [Hướng dẫn giá cả](/pricing). Văn bản này phục vụ như một hướng dẫn về những gì được bao gồm, và các điều kiện pháp lý được ưu tiên trong hai tài liệu đó."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Hệ thống",
    "title": "Hanja tên chính thức là gì?",
    "summary": "Các hanja có thể được sử dụng cho tên trẻ em đã được Tòa án Tối cao thiết lập trong một bảng. Điều này tóm tắt bảng đó và lý do tại sao nó được thiết lập.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Hanja tên chính thức là gì?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} ký tự",
                "label": "Hanja tên chính thức"
              },
              {
                "value": "{syllableCount} âm tiết",
                "label": "Âm tiết Hangul bao gồm"
              },
              {
                "value": "{effectiveDate}",
                "label": "Ngày tham chiếu bảng"
              }
            ]
          },
          {
            "p": "Bạn không thể sử dụng bất kỳ ký tự nào cho tên của trẻ. **Hanja có thể được sử dụng cho việc đăng ký sinh đã được Tòa án Tối cao thiết lập trong một bảng, và chỉ những ký tự trong bảng đó mới có thể được đăng ký làm hanja cho tên.** Điều này được gọi là hanja tên chính thức."
          }
        ]
      },
      {
        "title": "Tại sao điều này được thiết lập?",
        "blocks": [
          {
            "p": "Có hàng chục nghìn hanja. Trong số đó, một số có ý nghĩa không tốt, một số không còn được sử dụng và không có cách đọc nào được biết đến, và một số không thể hiển thị trên máy tính. Nếu những ký tự như vậy được đưa vào tên, người cuối cùng phải gánh chịu hậu quả là người sẽ sử dụng tên đó suốt đời. Tên có thể bị sai hoặc đọc khác nhau ở nhiều nơi như đăng ký cư trú, hộ chiếu, ngân hàng và trường học, yêu cầu cá nhân phải giải thích tên của mình."
          },
          {
            "p": "Do đó, một phương pháp đã được chọn để xác định trước phạm vi hanja có thể được sử dụng trong tên. Thay vì là một quy định hạn chế, nó giống như một cơ chế để đảm bảo rằng tên có thể được sử dụng mà không gặp vấn đề trong suốt cuộc đời của một người."
          }
        ]
      },
      {
        "title": "Cơ sở nào cho các định nghĩa?",
        "blocks": [
          {
            "p": "Tòa án Tối cao thiết lập bảng hanja tên chính thức, bảng này được sửa đổi khi cần thiết, và các ký tự được thêm vào."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tài liệu được sử dụng trong màn hình này",
        "blocks": [
          {
            "p": "{publisher} dữ liệu hanja tên chính thức · Tính đến {effectiveDate}"
          },
          {
            "p": "{characterTotal} ký tự bao gồm {syllableCount} âm tiết Hangul. Giá trị băm của tệp gốc cũng được lưu trữ, vì vậy nếu bảng thay đổi, có thể kiểm tra khi nào và cái gì đã thay đổi."
          }
        ]
      },
      {
        "title": "Số lượng ký tự được công bố bởi Tòa án Tối cao khác với những gì chúng tôi trình bày",
        "blocks": [
          {
            "p": "**Hanja tên chính thức được công bố bởi Tòa án Tối cao là {announcedTotal} ký tự, trong khi những gì chúng tôi trình bày như các ứng cử viên là {characterTotal} ký tự.** Không có lý do gì để che giấu sự khác biệt này, vì vậy chúng tôi nêu rõ điều đó."
          },
          {
            "p": "Nếu bạn kiểm tra dữ liệu truy vấn của Tòa án Tối cao, nó chứa {listedTotal} ký tự. Trong số đó, **{excludedNoStandardCode} ký tự** là **các ký tự không có vị trí trong mã ký tự chung toàn cầu (Unicode).** Hệ thống của Tòa án Tối cao xử lý những ký tự như vậy bằng các số chỉ hoạt động trong hệ thống của chính nó, và chúng được hiển thị dưới dạng **hình ảnh** thay vì ký tự trên màn hình."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Thêm nhiều phông chữ sẽ không giải quyết được vấn đề",
        "blocks": [
          {
            "p": "Để một ký tự xuất hiện trên màn hình, nó phải có một **số được thế giới đồng ý**, và phông chữ chứa hình ảnh tương ứng với số đó. Các ký tự không có số không thể được bao gồm trong bất kỳ phông chữ nào. Dù chúng tôi thêm bao nhiêu phông chữ, những ký tự này sẽ xuất hiện dưới dạng các ô trống."
          }
        ]
      },
      {
        "title": "Do đó, chúng đã bị loại bỏ khỏi các ứng cử viên",
        "blocks": [
          {
            "p": "**Việc lấp đầy danh sách bằng các ký tự không thể hiển thị là không hữu ích.** Hầu hết các ý nghĩa của những ký tự này cũng là trống rỗng trong dữ liệu của chúng tôi, điều này không phù hợp với phương pháp của dịch vụ trong việc chọn tên dựa trên ý nghĩa."
          },
          {
            "p": "**Lý do quan trọng hơn nằm ở người sẽ sử dụng tên.** Một cái tên là một giá trị sẽ được nhập vào nhiều nơi trong suốt cuộc đời của một người. Các ký tự không có mã ký tự có thể không thể được nhập hoặc in trong các hệ thống của ngân hàng, trường học, bệnh viện hoặc hộ chiếu, ngay cả sau khi hoàn tất việc đăng ký sinh. Do đó, chúng tôi không thể khuyến nghị những ký tự như vậy."
          },
          {
            "p": "Tuy nhiên, **chúng tôi không xác định liệu những ký tự đó có thể được sử dụng hay không.** Vì chúng là các ký tự trong bảng của Tòa án Tối cao, việc đăng ký có thể khả thi. Nếu bạn thực sự muốn sử dụng ký tự đó, vui lòng kiểm tra trực tiếp trong hệ thống đăng ký quan hệ gia đình điện tử của Tòa án Tối cao, và **hỏi cơ quan liên quan về khả năng sử dụng thực tế.**"
          }
        ]
      },
      {
        "title": "Nếu bạn muốn sử dụng hanja không có trong bảng",
        "blocks": [
          {
            "p": "Bạn không thể sử dụng chúng. Để chính xác, những ký tự đó sẽ không được đăng ký làm hanja cho tên, và tên sẽ chỉ được ghi lại bằng Hangul. Nếu bạn muốn sử dụng hanja cùng với, bạn phải chọn từ bảng."
          },
          {
            "p": "Do đó, chúng tôi không trình bày các ký tự không có trong bảng như là các ứng cử viên. Tất cả hanja hiển thị trên màn hình là các ký tự có thể thực sự được sử dụng cho việc đăng ký sinh. Danh sách đầy đủ có sẵn trong [Danh sách đầy đủ các Hanja tên chính thức](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Danh sách",
    "title": "Danh sách đầy đủ các Hanja tên chính thức",
    "summary": "Chúng tôi đã tổ chức các hanja có thể được sử dụng cho việc đăng ký sinh theo phụ âm đầu. Bạn có thể xem cách đọc được chỉ định và ý nghĩa cho mỗi ký tự khi được sử dụng trong tên.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Tìm kiếm theo phụ âm đầu",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Điều này bao gồm tất cả {characterTotal} ký tự từ bảng hanja tên chính thức của Tòa án Tối cao. Mỗi ký tự bao gồm **cách đọc khi được sử dụng trong tên** và ý nghĩa của nó. Các ký tự không có trong bảng không thể được đăng ký làm hanja tên, vì vậy bạn nên chọn từ các ký tự được liệt kê ở đây."
          },
          {
            "p": "Hai số trên nút bên dưới đại diện cho **số lượng ký tự có phụ âm đầu đó** và **số lượng âm tiết được bao phủ**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nếu ký tự bạn đang tìm kiếm không có trong danh sách",
        "blocks": [
          {
            "p": "Số lượng ký tự được công bố bởi Tòa án Tối cao là {announcedTotal}, nhưng danh sách này chứa {characterTotal} ký tự. **Sự khác biệt {excludedNoStandardCode} ký tự là những ký tự không thể hiển thị trong bất kỳ phông chữ nào do thiếu vị trí trong mã ký tự toàn cầu.** Hệ thống của Tòa án Tối cao hiển thị những ký tự đó dưới dạng hình ảnh."
          },
          {
            "p": "Chúng tôi đã chi tiết lý do cho điều này và tại sao chúng tôi không khuyến nghị những ký tự đó trong [Hanja tên chính thức là gì?](/guide/hanja-basics). Bạn nên kiểm tra với cơ quan liên quan về khả năng sử dụng thực tế của những ký tự đó."
          }
        ]
      },
      {
        "title": "Phụ âm đầu với ít ký tự",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Các phụ âm đầu dưới đây có rất ít hanja tên chính thức, vì vậy chúng tôi đã hiển thị chúng ở đây mà không có trang riêng."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cách đọc danh sách này",
        "blocks": [
          {
            "p": "Đối với **伽 · 가 · 절**, khi sử dụng \"伽\" trong một tên, nó được đọc là **가** và có nghĩa là \"chùa\". Ngay cả đối với cùng một hanja, cách đọc khi được sử dụng trong tên được xác định bởi bảng, và nó không thể được sử dụng theo cách khác."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const VI_NOTICES = {
  "kindLabels": {
    "service": "Dịch vụ",
    "product": "Sản phẩm",
    "policy": "Chính sách",
    "support": "Hỗ trợ"
  },
  "intro": "Các thay đổi đối với điều khoản sử dụng của bạn — giá cả, chính sách — được đăng ở đây trước khi chúng có hiệu lực. Các cải tiến nội bộ không được liệt kê: những gì xuất hiện ở đây là những gì bạn cần biết.",
  "empty": {
    "title": "Chưa có thông báo nào",
    "body": "Khi có điều gì đó thay đổi, nó sẽ xuất hiện ở đây."
  },
  "effective": "Có hiệu lực từ {date}",
  "pager": {
    "label": "Trang thông báo",
    "newer": "← Mới hơn",
    "older": "Cũ hơn →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Trang Liên hệ và Giới thiệu hiện đã mở",
      "body": [
        "Các câu hỏi, hoàn tiền, yêu cầu bảo mật và báo cáo lỗi giờ đây có một nơi để đi. Trang liên hệ ở chân trang liệt kê email và thông tin công ty của chúng tôi.",
        "Những gì mà câu trả lời của chúng tôi dựa trên, và những gì chúng tôi cố ý không làm, được viết trên trang giới thiệu."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Báo cáo PDF được phát hành bằng tiếng Anh cho tiếng Ả Rập và tiếng Khmer",
      "body": [
        "Nếu bạn đang sử dụng dịch vụ bằng tiếng Ả Rập hoặc tiếng Khmer, PDF bạn mua được sản xuất bằng tiếng Anh. Công cụ bố trí tài liệu của chúng tôi hiện chưa thể đặt đoạn văn bằng hai hệ chữ đó.",
        "Màn hình vẫn ở ngôn ngữ của bạn, và tên của bạn được in bằng hệ chữ của bạn trong tài liệu.",
        "Ghi chú tương tự xuất hiện trước khi thanh toán. Khi công cụ hỗ trợ các hệ chữ này, chúng tôi sẽ thông báo ở đây."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Thanh toán chưa mở",
      "body": [
        "Tạo một cái tên và đọc kết quả là miễn phí hôm nay, và không cần tài khoản.",
        "Các mục trả phí chưa được bán. Số tiền được hiển thị trên trang giá sẽ áp dụng khi việc bán mở cửa."
      ]
    }
  }
} satisfies NoticeCopy;
