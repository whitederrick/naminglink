import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu về Naming-Link",
    "summary": "Chúng tôi giúp bạn chọn và hiểu các tên Hàn Quốc. Đây là những gì chúng tôi dựa vào để đưa ra kết quả, và những gì chúng tôi cố ý không làm.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì",
        "blocks": [
          {
            "p": "Naming-Link giúp bạn **chọn và hiểu các tên Hàn Quốc** — hanja đứng sau tên của một đứa trẻ, một tên Hàn Quốc để sử dụng ở nước ngoài, cách viết bằng Hangul cho tên của bạn, và những kỷ vật như con dấu hoặc báo cáo in."
          },
          {
            "p": "Xem kết quả của bạn là **miễn phí và không cần tài khoản.** Các mục trả phí không bao giờ bán lại những gì mà màn hình đã hiển thị: chúng mở ra nhiều ứng viên hơn, thêm phân tích bằng văn bản, hoặc biến kết quả thành thứ bạn có thể giữ."
          }
        ]
      },
      {
        "title": "Căn cứ vào đâu để đưa ra câu trả lời của chúng tôi",
        "blocks": [
          {
            "p": "Hanja đến từ **bảng hanja tên chính thức của Tòa án Tối cao Hàn Quốc.** Mỗi ký tự có một cách đọc cố định để sử dụng trong tên, và các ký tự ngoài bảng không thể được đăng ký. Chúng tôi không thêm vào danh sách đó hoặc chọn yêu thích."
          },
          {
            "p": "Saju và các số liệu năm yếu tố được tính toán từ **lịch âm dương Hàn Quốc**, với thời gian sinh được điều chỉnh theo thời gian mặt trời thực tế cho nơi sinh. Cách đọc là một tham chiếu truyền thống, không phải là một dự đoán."
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
              "**Chúng tôi không đoán vận mệnh.** Không có gì ở đây hứa hẹn vận may, sự giàu có hoặc sự bảo vệ.",
              "**Chúng tôi không lưu trữ tên của bạn.** Kết quả miễn phí không bao giờ được ghi lại trên máy chủ của chúng tôi, và các tài liệu trả phí được giao mà không giữ bản sao của tệp.",
              "**Việc trả tiền không mua được câu trả lời tốt hơn.** Mở khóa bằng quảng cáo và mở khóa bằng thanh toán cung cấp nội dung hoàn toàn giống nhau."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Dịch vụ có sẵn bằng 23 ngôn ngữ. Các tài liệu PDF trả phí được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer — trình tạo PDF không hỗ trợ các ký tự đó — và chúng tôi thông báo điều đó trên màn hình trước khi bạn thanh toán."
          }
        ]
      },
      {
        "title": "Liên hệ",
        "blocks": [
          {
            "p": "Thông tin công ty và cách liên hệ với chúng tôi có trên [trang liên hệ](/contact), bao gồm hoàn tiền, yêu cầu bảo mật và báo cáo lỗi."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Đọc",
    "title": "Cách đọc cố định — một cách phát âm cho mỗi ký tự",
    "summary": "Bảng chính thức không chỉ liệt kê các ký tự. Nó cũng cố định cách đọc của mỗi ký tự khi được sử dụng trong một tên.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Một cách đọc cố định cho mỗi ký tự",
        "blocks": [
          {
            "p": "Bảng hanja tên không chỉ quyết định những ký tự nào có thể được sử dụng. **Nó cũng cố định cách đọc của mỗi ký tự khi nó xuất hiện trong một tên.** Cách đọc cố định đó là điều mà việc đăng ký dựa vào."
          },
          {
            "p": "Hầu hết hanja có nhiều cách đọc khác nhau. Tuy nhiên, một tên được viết trên tài liệu và nói ra, vì vậy nó cần chính xác một cách đọc. Do đó, bảng chỉ định mỗi ký tự cách đọc của nó để sử dụng trong tên, và không có cách đọc nào khác có thể được đăng ký."
          }
        ]
      },
      {
        "title": "Vì vậy, âm thanh được ưu tiên trước",
        "blocks": [
          {
            "p": "Đó là lý do tại sao Naming-Link cố định âm thanh trước khi tìm kiếm hanja. Nếu tên là \"지은\", ý nghĩa chỉ có thể được chọn từ các ký tự được chỉ định cách đọc là **지** và các ký tự được chỉ định cách đọc là **은**."
          },
          {
            "p": "Dù ý nghĩa có tốt đến đâu, một ký tự có cách đọc không khớp không thể được sử dụng cho tên đó. Chúng tôi cũng không bao giờ thay đổi âm thanh của một tên để phù hợp với một ký tự — một tên được nói trong suốt cuộc đời, và âm thanh được quyết định trước, với hanja theo sau."
          }
        ]
      },
      {
        "title": "Tên họ nằm ngoài bảng này",
        "blocks": [
          {
            "p": "Điều này thường bị hiểu sai. **Bảng quy định tên gọi, không phải họ.** Một họ theo những gì đã có trong sổ hộ khẩu, vì vậy một số người thực sự sử dụng các ký tự không có trong bảng hanja tên."
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
    "summary": "Cách chúng tôi chọn âm thanh khi viết một tên nước ngoài bằng Hangul, và lý do chúng tôi không đính kèm hanja.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi mang âm thanh, không phải ý nghĩa",
        "blocks": [
          {
            "p": "Dịch vụ này viết **tên của bạn** bằng Hangul. Nó không cho bạn một tên Hàn Quốc. Michael trở thành 마이클 — cùng một tên, được viết để người Hàn Quốc có thể đọc và nói. Chúng tôi không thay thế nó bằng một tên Hàn Quốc có ý nghĩa tương tự."
          },
          {
            "p": "Nếu một tên Hàn Quốc là điều bạn muốn, **đó là một dịch vụ khác.** Một dịch vụ giữ tên của bạn và chỉ thay đổi chữ viết; dịch vụ khác đề xuất một tên mới."
          }
        ]
      },
      {
        "title": "Âm thanh mà tiếng Hàn không có",
        "blocks": [
          {
            "p": "Mỗi ngôn ngữ có âm thanh mà tiếng Hàn thiếu — f, v, z, th, và các phân biệt nguyên âm mà tiếng Hàn không thực hiện. Đối với những âm thanh đó, chúng tôi viết những gì **một người nói tiếng Hàn thực sự nói** khi họ đọc tên của bạn to, thay vì phiên âm từng ký tự một. Mục tiêu là cách viết sẽ được sử dụng, không phải cách viết chính xác nhất."
          },
          {
            "p": "Cách viết giống nhau có thể khác nhau tùy thuộc vào nguồn gốc của tên, vì vậy chúng tôi hỏi ngôn ngữ và quốc gia của bạn và làm việc từ cách phát âm đó."
          }
        ]
      },
      {
        "title": "Nhiều cách viết, bên cạnh nhau",
        "blocks": [
          {
            "p": "Không có một câu trả lời đúng duy nhất. Cách viết gần nhất với âm thanh gốc, cách viết phổ biến nhất ở Hàn Quốc, và cách viết dễ nhất để viết thường là ba điều khác nhau. Vì vậy, chúng tôi hiển thị chúng cùng nhau và nói rõ điều gì phân tách chúng."
          },
          {
            "p": "Nếu không có cách viết nào cảm thấy đúng, bạn có thể thêm một gợi ý về âm thanh bạn muốn và chạy lại — ví dụ, rằng một âm tiết cụ thể nên được viết khác."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Không có hanja ở đây",
        "blocks": [
          {
            "p": "Chúng tôi không đính kèm hanja vào một phiên âm. Hanja mang ý nghĩa, và quy trình này chỉ về âm thanh. Việc khớp các ký tự với âm thanh đơn thuần có thể dẫn đến một ý nghĩa mà bạn không bao giờ yêu cầu."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cách thức hoạt động",
    "title": "Cách chúng tôi xây dựng một tên Hàn Quốc",
    "summary": "Chúng tôi chọn từ các họ tồn tại, cân nhắc cách dễ dàng để tên được nói và viết, và hỏi tên đó để làm gì.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi bắt đầu với họ",
        "blocks": [
          {
            "p": "Ở Hàn Quốc, họ đứng trước, và khác với tên gọi, nó không được tự do sáng tạo — bạn thừa hưởng nó. Vì vậy, chúng tôi chỉ đề xuất những họ mà người Hàn Quốc thực sự có. Nhóm mặc định của chúng tôi là **20 họ phổ biến nhất**, mà cùng nhau bao phủ khoảng 80% dân số."
          },
          {
            "p": "Nếu họ của bạn trùng khớp với một họ Hàn Quốc thực sự về âm thanh — Wang với 왕, Ye với 예 — chúng tôi đặt họ đó lên trước. Giữ một sợi dây liên kết trở lại tên gốc của bạn có giá trị hơn một họ được chọn ngẫu nhiên."
          },
          {
            "p": "Bạn có thể tự chọn một họ hoặc để chúng tôi đề xuất một cái. Dù bằng cách nào, nó sẽ là **một họ tồn tại.**"
          }
        ]
      },
      {
        "title": "Dễ nói, dễ viết",
        "blocks": [
          {
            "p": "Đây là một tên mà mọi người ở Hàn Quốc sẽ thực sự gọi bạn, vì vậy điều đầu tiên chúng tôi kiểm tra là liệu một người Hàn Quốc có thể nghe nó một lần và viết nó xuống không. Một tên cần phải được đánh vần mỗi lần là một gánh nặng mà bạn phải mang, không phải chúng tôi."
          },
          {
            "p": "Ý nghĩa cũng quan trọng. Tên gọi Hàn Quốc thường mang một ý nghĩa, vì vậy chúng tôi cho bạn biết tên đó đọc như thế nào và tại sao chúng tôi chọn nó — không chỉ là tên gọi."
          }
        ]
      },
      {
        "title": "Chúng tôi hỏi tên đó để làm gì",
        "blocks": [
          {
            "p": "Một tên cho giấy tờ đại học không giống như một tên mà bạn bè sẽ gọi to qua một căn phòng, hoặc một tên mà bạn sẽ sử dụng trực tuyến. Chúng tôi hỏi bạn dự định sử dụng nó như thế nào và xem xét điều đó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đây không phải là một phiên âm",
        "blocks": [
          {
            "p": "Ở đây chúng tôi đề xuất một **tên Hàn Quốc mới.** Nếu bạn muốn tên hiện tại của mình được viết bằng Hangul — Michael thành 마이클 — hãy xem [hướng dẫn viết bằng Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Cách liên hệ với chúng tôi để hỏi, hoàn tiền, yêu cầu bảo mật và báo cáo lỗi, cùng với thông tin công ty của chúng tôi.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Gửi email cho chúng tôi",
        "blocks": [
          {
            "p": "Viết đến **{email}**. Chúng tôi sẽ trả lời trong vòng hai ngày làm việc. Đối với bất kỳ điều gì liên quan đến đơn hàng — thanh toán, hoàn tiền, một tệp bạn không nhận được — vui lòng bao gồm **số đơn hàng hoặc email bạn đã thanh toán.**"
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
              "**Bảo mật** — yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu của bạn. Xem [chính sách bảo mật](/privacy).",
              "**Sửa chữa** — nếu một ý nghĩa hanja, cách đọc hoặc tính toán trông sai, hãy cho chúng tôi biết. Đề cập đến màn hình nào và những gì bạn đã nhập sẽ giúp rất nhiều.",
              "**Bất kỳ điều gì khác** — các đối tác và báo chí cũng đến cùng một địa chỉ."
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
    "summary": "Điều này không bị cấm bởi pháp luật nhưng là một phong tục. Chúng tôi đã viết về những gì đã bị tránh và lý do, và cách chúng tôi xử lý nó.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Các ký tự hợp pháp",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} ký tự",
                "label": "Các ký tự đã được tổng hợp bị tránh"
              },
              {
                "value": "{avoidCommonlyUsed} ký tự",
                "label": "Trong số đó, các ký tự vẫn thường được sử dụng"
              }
            ]
          },
          {
            "p": "Có những ký tự được đưa vào danh sách các ký tự cho tên cá nhân và **là hợp pháp**, nhưng lại được coi là không phù hợp cho tên."
          },
          {
            "p": "Suy nghĩ cơ bản là **\"ý nghĩa quá mức thực sự không mong muốn.\"** Điều này bao gồm các ký tự được coi là quá quý giá (珍·寶), các ký tự được xem là có sự hiện diện quá mạnh (王·帝), và những ký tự được coi là quá vĩ đại để một người có thể thể hiện, như thiên đường hoặc các vị thần. Điều này phản ánh một cảm giác kiềm chế cũ, tin rằng một cái tên có thể làm lu mờ con người."
          },
          {
            "p": "**Tuy nhiên, những ký tự này không phải là không thể sử dụng.** Đây không phải là một lệnh cấm pháp lý mà là một phong tục, và phong tục khác nhau tùy theo vùng miền, gia đình và thế hệ, và có thể thay đổi theo thời gian."
          },
          {
            "p": "Trên thực tế, trong số {avoidTotal} ký tự mà chúng tôi đã tổng hợp, {avoidCommonlyUsed} vẫn thường được sử dụng trong tên. Thực tế rằng chúng được biết đến là bị tránh nhưng vẫn được sử dụng rộng rãi cho thấy rằng phong tục này không phải là tuyệt đối."
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
              "**Thiên đường và thiên nhiên** — Những thứ như mặt trời, mặt trăng và bầu trời được coi là quá vĩ đại để một người có thể thể hiện",
              "**Vua và quý tộc** — Các ký tự có nghĩa là địa vị, như vua hoặc hoàng đế",
              "**Thần thánh** — Các ký tự đề cập đến các lĩnh vực thiêng liêng, như các vị thần hoặc linh hồn",
              "**Mùa và khác** — Các ký tự gắn liền với thời gian hoặc trạng thái cụ thể",
              "**Động vật** — Các động vật được coi là có năng lượng mạnh, như rồng hoặc hổ",
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
            "p": "**Loại bỏ các ký tự bị tránh khỏi ứng viên** — Nếu được bật, chúng sẽ bị loại bỏ hoàn toàn. Nếu tắt, chúng vẫn nằm trong kết quả với nhãn \"Thường bị tránh\" và lý do kèm theo."
          },
          {
            "p": "**Loại bỏ ngay cả các ký tự thường được sử dụng** — Điều này loại bỏ các ký tự có trong danh sách tránh nhưng thực sự được sử dụng rộng rãi (圭·琳·玲·元·太·星·海, v.v.). Nếu được bật, số ứng viên sẽ giảm đáng kể."
          },
          {
            "p": "Mặc định là **không loại bỏ mà chỉ hiển thị** chúng. Nếu chúng bị loại bỏ một cách lặng lẽ khỏi danh sách, có thể xuất hiện với những người muốn sử dụng ký tự đó như thể nó không tồn tại."
          }
        ]
      },
      {
        "title": "Đảm bảo các tùy chọn không biến mất",
        "blocks": [
          {
            "p": "Nếu không còn ký tự nào có thể sử dụng cho âm tiết đó, chúng tôi sẽ gỡ bỏ việc loại bỏ cho âm tiết đó và hiển thị các ứng viên. Chúng tôi tin rằng điều này tốt hơn là không có tùy chọn nào cả."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Căn cứ dịch vụ",
    "title": "Căn cứ nào cho việc chuyển đổi tên toàn cầu?",
    "summary": "Chúng tôi cung cấp các ứng viên từ năm góc độ, duy trì các hệ thống viết của mỗi ngôn ngữ và chỉ sử dụng các tên hiện có.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Các ứng viên được cung cấp từ năm góc độ",
        "blocks": [
          {
            "p": "Không chỉ có một cách để dịch một tên sang ngôn ngữ khác. Tùy thuộc vào việc bảo tồn âm thanh hay ý nghĩa, chọn một tên tự nhiên trong bối cảnh địa phương hoặc ưu tiên cá tính, các câu trả lời sẽ khác nhau. Do đó, thay vì trình bày một tùy chọn, chúng tôi cung cấp **một từ mỗi năm góc độ khác nhau.**"
          },
          {
            "ul": [
              "**Tùy chọn bảo tồn âm thanh** — Bảo tồn âm thanh gốc của tên càng nhiều càng tốt",
              "**Tùy chọn dịch nghĩa** — Dịch ý nghĩa chứa trong tên sang tên của ngôn ngữ đó",
              "**Tùy chọn thỏa hiệp giữa âm thanh và ý nghĩa** — Lấy một nửa từ mỗi bên",
              "**Tùy chọn xác thực địa phương** — Chọn những tên thực sự được sử dụng phổ biến trong bối cảnh văn hóa đó",
              "**Tùy chọn cá tính và thương hiệu** — Ưu tiên những tên dễ nhớ và đặc biệt"
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
            "p": "Khi dịch sang một ngôn ngữ không sử dụng chữ cái La-tinh, nó phải được viết bằng chữ viết của ngôn ngữ đó. Đối với tiếng Nhật, nó sẽ là kana và kanji; đối với tiếng Nga, Mông Cổ và Kazakh, nó sẽ là chữ Cyrillic; đối với tiếng Ả Rập, nó sẽ là chữ Ả Rập; và đối với tiếng Thái, Khmer và Hindi, nó sẽ là các chữ viết tương ứng của chúng. Nếu bạn viết nó bằng chữ cái La-tinh và gọi nó là \"tên Nhật\", nó không thể được sử dụng ở quốc gia đó."
          },
          {
            "p": "Do đó, chúng tôi có các quy tắc riêng cho hệ thống viết của mỗi ngôn ngữ, và máy chủ kiểm tra một lần nữa để đảm bảo rằng kết quả nằm trong hệ thống viết đó. Những sai sót như bỏ qua họ hoặc trộn lẫn với Hangul được lọc ra ở đây."
          }
        ]
      },
      {
        "title": "Chúng tôi sử dụng các tên thực sự được sử dụng",
        "blocks": [
          {
            "p": "Để tránh tạo ra những tên nghe có vẻ hợp lý nhưng không tồn tại ở quốc gia đó, chúng tôi dựa vào các tùy chọn trên các tên hiện có. Tên được sử dụng trong tài liệu và giới thiệu, vì vậy nếu một người địa phương nghĩ \"không có tên như vậy\", nó không thể được sử dụng."
          }
        ]
      },
      {
        "title": "Chúng tôi tách biệt việc chọn và mô tả",
        "blocks": [
          {
            "p": "Chúng tôi xử lý nhiệm vụ xác định năm ứng viên tách biệt với nhiệm vụ mô tả chi tiết từng ứng viên. Vì phần mô tả mất nhiều thời gian, chúng tôi tách phần đó để tạo ra nó đồng thời."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tại sao điều này được thay đổi?",
        "blocks": [
          {
            "p": "Ban đầu, chúng tôi tạo ra năm góc độ riêng biệt. Nó nhanh hơn, nhưng **số lượng ứng viên thay đổi mỗi lần.** Khi mỗi người chọn ứng viên, có sự trùng lặp hoặc khác biệt, và nếu một ứng viên thất bại, ứng viên đó sẽ biến mất hoàn toàn, dẫn đến chỉ còn hai hoặc ba thay vì năm."
          },
          {
            "p": "Bây giờ, vì chúng tôi xác định tập hợp ứng viên và phân phối góc độ cùng một lúc, **số lượng là cố định.** Ngay cả khi một mô tả thất bại, các ứng viên vẫn giữ nguyên và được trình bày với thông tin ngắn gọn. Chúng tôi tin rằng tốt hơn là luôn có cùng một số lượng, ngay cả khi điều đó mất một chút thời gian hơn."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Căn cứ dịch vụ",
    "title": "Căn cứ nào cho việc khớp ý nghĩa hanja?",
    "summary": "Đầu tiên, các âm thanh được cố định, và chỉ những hanja có thể được đăng ký với âm thanh đó được tập hợp, và ý nghĩa được xem như một sự kết hợp chứ không phải là một ký tự đơn.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Đầu tiên, cố định âm thanh",
        "blocks": [
          {
            "p": "Nếu bạn đã quyết định về \"지은\", thì **지** và **은** không thay đổi. Chúng tôi không thay đổi âm thanh của tên để phù hợp với hanja. Một tên là thứ được gọi trong suốt cuộc đời, và chúng tôi tin rằng thứ tự là âm thanh được cố định trước, sau đó là hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Đây là thứ tự mà các ứng viên được thu hẹp lại. Nó không phải là việc chọn hanja trước và khớp âm thanh, mà là âm thanh đến trước, và chỉ những ký tự được chỉ định để đọc với âm thanh đó trở thành ứng viên."
          }
        ]
      },
      {
        "title": "Chỉ tập hợp những hanja có thể được đăng ký với âm thanh đó",
        "blocks": [
          {
            "p": "Bảng hanja tên chính thức có một cách đọc được chỉ định cho mỗi ký tự khi được sử dụng trong tên. Chỉ những ký tự được chỉ định để đọc là **지** và **은** trở thành ứng viên. Dù ý nghĩa có tốt đến đâu, nếu cách đọc không khớp, nó không thể là hanja cho tên đó."
          },
          {
            "p": "Phạm vi để chọn ứng viên là {characterTotal} ký tự từ bảng Tòa án Tối cao. Các ký tự không có trong bảng này không được trình bày — ngay cả khi được hiển thị, chúng không thể được đăng ký."
          },
          {
            "p": "Số lượng ký tự trong bảng được công bố bởi Tòa án Tối cao nhiều hơn một chút so với điều này. Bảng cũng bao gồm **các ký tự không có mã ký tự tiêu chuẩn**, không thể hiển thị đúng trên màn hình và tài liệu, vì vậy những ký tự đó đã bị loại trừ khỏi các ứng viên. Bạn phải kiểm tra với cơ quan liên quan xem bạn có thể đăng ký với những ký tự đó hay không."
          }
        ]
      },
      {
        "title": "Ý nghĩa được xem như một sự kết hợp, không phải một ký tự đơn",
        "blocks": [
          {
            "p": "Ý nghĩa của mỗi ký tự riêng lẻ tốt và ý nghĩa đọc khi hai ký tự được kết hợp tốt là khác nhau. Tên được đọc như một sự kết hợp, vì vậy chúng tôi xem xét các sự kết hợp cùng nhau. Nếu bạn có những ý nghĩa cụ thể mà bạn muốn bao gồm hoặc tránh, những điều đó sẽ được xem xét."
          },
          {
            "p": "Nếu bạn đang sử dụng một ký tự thế hệ, ký tự đó được cố định, và các sự kết hợp được tìm kiếm từ các vị trí còn lại. Tên họ (성) không bị hạn chế bởi bảng hanja tên chính thức, vì vậy nó được xử lý riêng."
          }
        ]
      },
      {
        "title": "Chúng tôi chỉ ra phong tục tránh mà không xóa bỏ chúng",
        "blocks": [
          {
            "p": "Nếu một ký tự được coi là truyền thống bị tránh được đưa vào các ứng viên, chúng tôi không xóa bỏ nó mà chỉ ra lý do kèm theo. Đây là một vấn đề phong tục, không phải pháp luật, và bạn có thể chọn loại bỏ hoàn toàn nó khỏi màn hình nhập. Để biết thêm chi tiết, xem [Hanja thường bị tránh](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Chúng tôi cũng thông báo lý do loại bỏ",
        "blocks": [
          {
            "p": "Chúng tôi cho biết lý do tại sao một số ký tự bị loại bỏ khỏi các ứng viên. Nếu chúng tôi chỉ hiển thị những gì đã được chọn, bạn không thể biết \"tại sao lại là cái này?\" Nếu không còn ký tự nào có thể sử dụng cho âm tiết đó, chúng tôi sẽ gỡ bỏ việc loại bỏ cho âm tiết đó và hiển thị các ứng viên."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cách đọc kết quả",
        "blocks": [
          {
            "p": "Các ứng viên là **các góc nhìn, không phải thứ hạng**. Cái đầu tiên không có nghĩa là nó là tên tốt nhất; chúng được chọn từ các góc nhìn khác nhau. Những cái ưu tiên sự kết hợp của các ý nghĩa, những cái chọn các ký tự không phổ biến, và những cái nhấn mạnh sự trung lập được trình bày cạnh nhau. Câu trả lời thay đổi tùy thuộc vào góc nhìn nào bạn coi trọng."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Tiêu chuẩn của chúng tôi",
    "title": "Những gì chúng tôi không sử dụng",
    "summary": "Chúng tôi không chỉ định vận mệnh tổng thể hoặc điểm số số, cũng như không sử dụng số nét. Năm yếu tố chỉ được sử dụng như một trục bổ sung. Đây là lý do.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Lý do không chỉ định vận mệnh tổng thể hoặc điểm số số",
        "blocks": [
          {
            "p": "Có những phương pháp chỉ định vận mệnh tổng thể hoặc điểm số số cho các tên để đánh giá chúng. Naming-Link không cung cấp những con số đó. Lý do là bốn."
          },
          {
            "p": "**Đầu tiên, không chỉ có một tiêu chuẩn.** Các phương pháp tính toán vận mệnh khác nhau tùy theo trường phái, và cùng một tên có thể được đánh giá tích cực theo một tiêu chuẩn và tiêu cực theo một tiêu chuẩn khác. Chúng tôi không có cơ sở để quyết định cái nào là đúng. Thật không trung thực khi trình bày một cái như thể nó là câu trả lời."
          },
          {
            "p": "**Thứ hai, những tính toán đó dựa vào số nét.** Tuy nhiên, dữ liệu của Tòa án Tối cao không bao gồm số nét. Hơn nữa, số nét có thể khác nhau tùy thuộc vào việc chúng được tính là ký tự thông thường hay ký tự đơn giản và cách các bộ thủ được tính. Vì các số cơ bản không được xác định một cách chắc chắn, các điểm số được xây dựng dựa trên chúng không thể là chắc chắn."
          },
          {
            "p": "**Thứ ba, số có vẻ vững chắc hơn thực tế.** Khi nó nói \"87 điểm\", nó nghe như một giá trị đo lường hơn là một diễn giải thông thường. Những cái tên đó có thể cảm thấy bị áp lực bởi con số đó, đẩy lùi những gì thực sự quan trọng (Có dễ gọi không? Ý nghĩa có phù hợp không? Nó có chứa những mong muốn mà bạn muốn không?)."
          },
          {
            "p": "**Thứ tư, không có cách nào để xác minh.** Mối quan hệ giữa một cái tên và cuộc sống của một người không thể được xác minh. Chuyển đổi một cái gì đó không thể nói là đúng hay sai thành một điểm số dẫn đến một con số không thể được xác nhận, mặc dù nó không thể sai."
          },
          {
            "p": "Chúng tôi chỉ sử dụng những gì có thể được **chứng minh.** Bảng hanja tên chính thức của Tòa án Tối cao, các cách đọc được chỉ định cho mỗi ký tự, và các ý nghĩa được liệt kê trong bảng. Thay vào đó, chúng tôi cung cấp lý do tại sao ứng viên này được chọn và tại sao một số ký tự bị loại bỏ, cho thấy **lý do thay vì điểm số.**"
          }
        ]
      },
      {
        "title": "Chúng tôi không sử dụng số nét",
        "blocks": [
          {
            "p": "Dữ liệu hanja tên chính thức do Tòa án Tối cao cung cấp không bao gồm số nét. Trong số {characterTotal} ký tự mà chúng tôi nhận được, **không có ký tự nào có số nét.**"
          },
          {
            "p": "Để sử dụng số nét, chúng tôi sẽ cần lấy số từ nơi khác, nhưng nếu chúng tôi không thể làm rõ nơi những con số đó đến từ đâu và tiêu chí nào được sử dụng để đếm chúng, điều đó có nghĩa là đánh giá tên dựa trên những con số không có cơ sở. Chúng tôi đã quyết định không đánh giá tên dựa trên các giá trị không thể được chứng minh."
          }
        ]
      },
      {
        "title": "Chúng tôi chỉ sử dụng năm yếu tố như một tham chiếu",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Mối quan hệ giữa năm yếu tố. Di chuyển dọc theo vòng tròn đại diện cho sự sinh sản lẫn nhau (相生), trong khi bỏ qua một yếu tố và nhấn xuống đại diện cho sự kiềm chế lẫn nhau (相剋). Chúng tôi sử dụng mối quan hệ này chỉ như một trục bổ sung để so sánh các ứng viên."
          },
          {
            "p": "Nếu bạn đã nhập tháng sinh của mình, chúng tôi sử dụng một tham chiếu đơn giản hóa của năm yếu tố dựa trên tháng đó như một trục bổ sung để so sánh các ứng viên. Tuy nhiên, đây không phải là một phân tích saju chính xác, và **chúng tôi không tuyên bố rằng các tên xác định vận mệnh hoặc tính cách của một người.**"
          },
          {
            "p": "Trong lựa chọn cuối cùng, những gì chúng tôi ưu tiên là âm thanh, sự kết hợp của các ý nghĩa, các giá trị mà gia đình muốn truyền đạt, và liệu nó có thể thực sự được đăng ký hay không. Nếu bạn không nhập tháng sinh của mình, chúng tôi hoàn toàn loại bỏ tham chiếu năm yếu tố khỏi phân tích — chúng tôi không đưa ra những giả định tùy tiện về thông tin không rõ ràng."
          },
          {
            "p": "Nếu bạn muốn một phân tích chính xác dựa trên saju, chúng tôi có điều đó trong một báo cáo chi tiết riêng. Lý do chúng tôi không ưu tiên năm yếu tố trong việc khớp hanja miễn phí là vì chúng tôi không muốn trình bày những đánh giá dựa trên năm yếu tố được rút ra từ một ngày và giờ sinh không hoàn chỉnh như thể chúng là xác định."
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
  "intro": "Các thay đổi về điều khoản sử dụng của bạn — giá cả, chính sách — được đăng ở đây trước khi chúng có hiệu lực. Các cải tiến nội bộ không được liệt kê: những gì xuất hiện ở đây là những gì bạn cần biết.",
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
      "title": "Trang Liên hệ và Giới thiệu hiện đã mở",
      "body": [
        "Các câu hỏi, hoàn tiền, yêu cầu bảo mật và báo cáo lỗi hiện có một nơi để đến. Trang liên hệ ở chân trang liệt kê email và thông tin công ty của chúng tôi.",
        "Những gì câu trả lời của chúng tôi dựa vào, và những gì chúng tôi cố ý không làm, được viết trên trang giới thiệu."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Các báo cáo PDF được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer",
      "body": [
        "Nếu bạn đang sử dụng dịch vụ bằng tiếng Ả Rập hoặc Khmer, PDF bạn mua được sản xuất bằng tiếng Anh. Công cụ bố trí tài liệu của chúng tôi hiện chưa thể đặt đoạn văn trong hai ký tự đó.",
        "Màn hình vẫn ở ngôn ngữ của bạn, và tên của bạn được in bằng ký tự của bạn bên trong tài liệu.",
        "Ghi chú tương tự xuất hiện trước khi thanh toán. Khi công cụ hỗ trợ các ký tự này, chúng tôi sẽ thông báo ở đây."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Thanh toán hiện chưa mở",
      "body": [
        "Tạo một tên và đọc kết quả là miễn phí hôm nay, và không cần tài khoản.",
        "Các mục trả phí hiện chưa được bán. Các số tiền được hiển thị trên trang giá sẽ áp dụng khi mở bán."
      ]
    }
  }
} satisfies NoticeCopy;
