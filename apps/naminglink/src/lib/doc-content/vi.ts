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
            "p": "Naming-Link giúp bạn **chọn và hiểu các tên Hàn Quốc** — hanja đứng sau tên của trẻ, một tên Hàn Quốc để sử dụng ở nước ngoài, cách viết Hangul của tên bạn, và các vật lưu niệm như con dấu hoặc báo cáo in."
          },
          {
            "p": "Việc xem kết quả là **miễn phí và không cần tài khoản.** Các mục trả phí không bao giờ bán lại những gì mà màn hình đã hiển thị: chúng mở thêm các ứng viên, thêm phân tích bằng văn bản, hoặc biến kết quả thành thứ mà bạn có thể giữ lại."
          }
        ]
      },
      {
        "title": "Câu trả lời của chúng tôi dựa trên điều gì",
        "blocks": [
          {
            "p": "Hanja đến từ **bảng hanja chính thức của Tòa án Tối cao Hàn Quốc.** Mỗi ký tự có cách đọc cố định để sử dụng trong tên, và các ký tự ngoài bảng không thể được đăng ký. Chúng tôi không thêm vào danh sách đó hoặc chọn ra những ký tự yêu thích."
          },
          {
            "p": "Saju và các hình năm yếu tố được tính toán từ **lịch âm dương Hàn Quốc**, với thời gian sinh được điều chỉnh theo giờ mặt trời thực tế cho nơi sinh. Cách đọc là một tài liệu tham khảo truyền thống, không phải là một dự đoán."
          },
          {
            "p": "Các giải thích bằng văn bản được sản xuất bởi AI. Để tránh việc **bịa đặt**, mô hình chỉ được cung cấp đầu vào của bạn và dữ liệu tham khảo của chúng tôi, và được yêu cầu ở lại trong đó. Các hướng dẫn giải thích điều này một cách chi tiết."
          }
        ]
      },
      {
        "title": "Chúng tôi không làm gì",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không nói về vận mệnh.** Không có gì ở đây hứa hẹn may mắn, sự giàu có hay sự bảo vệ.",
              "**Chúng tôi không lưu trữ tên của bạn.** Kết quả miễn phí không bao giờ được ghi lại trên máy chủ của chúng tôi, và các tài liệu trả phí được giao mà không giữ bản sao của tệp.",
              "**Việc trả phí không mua được câu trả lời tốt hơn.** Mở khóa bằng quảng cáo và mở khóa bằng thanh toán cho cùng một nội dung."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Dịch vụ có sẵn bằng 23 ngôn ngữ. Các PDF trả phí được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer — công cụ tạo PDF không hỗ trợ các ký tự đó — và chúng tôi thông báo điều này trên màn hình trước khi bạn thanh toán."
          }
        ]
      },
      {
        "title": "Liên hệ",
        "blocks": [
          {
            "p": "Thông tin công ty và cách liên hệ với chúng tôi có trên [trang liên hệ](/contact), bao gồm hoàn tiền, yêu cầu quyền riêng tư và báo cáo lỗi."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Đọc",
    "title": "Cách đọc cố định — một cách phát âm cho mỗi ký tự",
    "summary": "Bảng chính thức không chỉ liệt kê các ký tự. Nó cũng xác định cách đọc của mỗi ký tự khi được sử dụng trong một tên.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Một cách đọc cố định cho mỗi ký tự",
        "blocks": [
          {
            "p": "Bảng hanja tên không chỉ quyết định các ký tự nào có thể được sử dụng. **Nó cũng xác định cách đọc của mỗi ký tự khi nó xuất hiện trong một tên.** Cách đọc cố định đó là điều mà việc đăng ký dựa vào."
          },
          {
            "p": "Hầu hết hanja có nhiều cách đọc khả thi. Tuy nhiên, một tên được viết trên tài liệu và nói ra, vì vậy nó cần chính xác một cách đọc. Do đó, bảng chỉ định cách đọc cho mỗi ký tự để sử dụng trong tên, và không có cách đọc nào khác có thể được đăng ký."
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
            "p": "Dù ý nghĩa có tốt đến đâu, một ký tự có cách đọc không khớp không thể được sử dụng cho tên đó. Chúng tôi cũng không bao giờ thay đổi âm thanh của một tên để phù hợp với một ký tự — một tên được nói ra suốt đời, và âm thanh được xác định trước, với hanja theo sau."
          }
        ]
      },
      {
        "title": "Tên họ không nằm trong bảng này",
        "blocks": [
          {
            "p": "Điều này thường bị hiểu sai. **Bảng quy định tên gọi, không phải họ.** Một họ tuân theo những gì đã có trong sổ đăng ký gia đình, vì vậy một số người thực sự sử dụng các ký tự không có trong bảng hanja tên."
          },
          {
            "p": "Đó là lý do tại sao Naming-Link xử lý hanja họ khác. Chúng tôi chỉ giúp bạn tìm một họ, và chúng tôi để một trường để nhập trực tiếp cho những người có ký tự nằm ngoài bảng. Các họ hai âm tiết như Namgung và Seonwoo được nhập theo cách tương tự."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Cách thức hoạt động",
    "title": "Cách chúng tôi viết tên bạn bằng Hangul",
    "summary": "Cách chúng tôi chọn âm thanh khi viết một tên nước ngoài bằng Hangul, và tại sao chúng tôi không đính kèm hanja.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi chuyển âm thanh, không phải ý nghĩa",
        "blocks": [
          {
            "p": "Dịch vụ này viết **tên của bạn** bằng Hangul. Nó không cung cấp cho bạn một tên Hàn Quốc. Michael trở thành 마이클 — cùng một tên, được viết để người Hàn Quốc có thể đọc và nói. Chúng tôi không thay thế nó bằng một tên Hàn Quốc có nghĩa tương tự."
          },
          {
            "p": "Nếu bạn muốn một tên Hàn Quốc, **đó là một dịch vụ khác.** Một dịch vụ giữ nguyên tên của bạn và chỉ thay đổi chữ viết; dịch vụ khác đề xuất một tên mới."
          }
        ]
      },
      {
        "title": "Âm thanh không có trong tiếng Hàn",
        "blocks": [
          {
            "p": "Mỗi ngôn ngữ đều có âm thanh mà tiếng Hàn thiếu — f, v, z, th, và các phân biệt nguyên âm mà tiếng Hàn không thực hiện. Đối với những âm thanh đó, chúng tôi viết những gì **một người nói tiếng Hàn thực sự nói** khi họ đọc tên của bạn, thay vì phiên âm từng ký hiệu một. Mục tiêu là cách viết sẽ được sử dụng, không phải cách viết trung thành nhất về mặt kỹ thuật."
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
            "p": "Không có một câu trả lời đúng duy nhất. Cách viết gần nhất với âm thanh gốc, cách viết phổ biến nhất ở Hàn Quốc, và cách viết dễ nhất thường là ba điều khác nhau. Vì vậy, chúng tôi hiển thị chúng cùng nhau và nói rõ điều gì phân tách chúng."
          },
          {
            "p": "Nếu không có cách viết nào cảm thấy đúng, bạn có thể thêm một gợi ý về âm thanh bạn muốn và chạy lại — ví dụ, rằng một âm tiết cụ thể nên được viết khác đi."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Không có hanja ở đây",
        "blocks": [
          {
            "p": "Chúng tôi không đính kèm hanja vào một phiên âm. Hanja mang ý nghĩa, và quy trình này là về âm thanh. Việc khớp các ký tự với âm thanh một mình có thể khiến bạn có một ý nghĩa mà bạn không yêu cầu."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cách thức hoạt động",
    "title": "Cách chúng tôi xây dựng một tên Hàn Quốc",
    "summary": "Chúng tôi chọn từ các họ có sẵn, cân nhắc xem tên có dễ nói và viết hay không, và hỏi tên sẽ được sử dụng cho mục đích gì.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi bắt đầu với họ",
        "blocks": [
          {
            "p": "Ở Hàn Quốc, họ đứng trước, và khác với tên gọi, nó không được tự do sáng tạo — bạn thừa hưởng nó. Vì vậy, chúng tôi chỉ đề xuất những họ mà người Hàn Quốc thực sự có. Hồ bơi mặc định của chúng tôi là **20 họ phổ biến nhất**, bao gồm khoảng 80% dân số."
          },
          {
            "p": "Nếu họ của bạn tình cờ trùng với một họ Hàn Quốc thực sự về âm thanh — Wang với 왕, Ye với 예 — chúng tôi sẽ đưa ra họ đó trước. Giữ một mối liên hệ với tên gốc của bạn có giá trị hơn một họ được chọn ngẫu nhiên."
          },
          {
            "p": "Bạn có thể tự chọn một họ hoặc để chúng tôi đề xuất một cái. Dù bằng cách nào, nó sẽ là **một họ có thật.**"
          }
        ]
      },
      {
        "title": "Dễ nói, dễ viết",
        "blocks": [
          {
            "p": "Đây là tên mà mọi người ở Hàn Quốc sẽ thực sự gọi bạn, vì vậy điều đầu tiên chúng tôi kiểm tra là liệu một người Hàn Quốc có thể nghe nó một lần và viết nó xuống hay không. Một tên cần phải được đánh vần mỗi lần là một gánh nặng mà bạn phải mang, không phải chúng tôi."
          },
          {
            "p": "Ý nghĩa cũng quan trọng. Tên gọi Hàn Quốc thường mang một ý nghĩa, vì vậy chúng tôi cho bạn biết tên đọc như thế nào và tại sao chúng tôi chọn nó — không chỉ là tên gọi."
          }
        ]
      },
      {
        "title": "Chúng tôi hỏi tên sẽ được sử dụng cho mục đích gì",
        "blocks": [
          {
            "p": "Một tên cho giấy tờ đại học không giống như một tên mà bạn bè sẽ gọi từ xa, hoặc một tên mà bạn sẽ sử dụng trực tuyến. Chúng tôi hỏi bạn dự định sử dụng nó như thế nào và xem xét điều đó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đây không phải là một phiên âm",
        "blocks": [
          {
            "p": "Ở đây chúng tôi đề xuất một **tên Hàn Quốc mới.** Nếu bạn muốn tên hiện tại của mình được viết bằng Hangul — Michael thành 마이클 — hãy xem [hướng dẫn viết Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Thông báo",
    "title": "Thông báo",
    "summary": "Nơi chúng tôi thông báo các thay đổi ảnh hưởng đến cách bạn sử dụng dịch vụ.",
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
            "p": "Viết đến **{email}**. Chúng tôi sẽ trả lời trong vòng hai ngày làm việc. Đối với bất kỳ điều gì liên quan đến đơn hàng — thanh toán, hoàn tiền, một tệp bạn không nhận được — vui lòng bao gồm **số đơn hàng hoặc email bạn đã thanh toán.**"
          },
          {
            "p": "Các câu hỏi qua điện thoại: {customerCenter} (giờ làm việc Hàn Quốc)."
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
              "**Sửa chữa** — nếu một nghĩa hanja, cách đọc hoặc tính toán có vẻ sai, hãy cho chúng tôi biết. Đề cập đến màn hình nào và những gì bạn đã nhập sẽ giúp rất nhiều.",
              "**Bất kỳ điều gì khác** — các đối tác và báo chí gửi đến cùng một địa chỉ."
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
              "**Người đại diện** — {representative}",
              "**Số đăng ký kinh doanh** — {businessNumber}",
              "**Số đăng ký bán hàng qua mạng** — {mailOrderNumber}",
              "**Địa chỉ** — {address}",
              "**Dịch vụ khách hàng** — {customerCenter}",
              "**Email** — {email}",
              "**Người phụ trách quyền riêng tư** — {privacyOfficer}",
              "**Nhà cung cấp dịch vụ lưu trữ** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bạn không cần phải bao gồm tên hoặc ngày sinh trong tin nhắn của mình. Kết quả miễn phí không bao giờ được lưu trữ trên máy chủ của chúng tôi, vì vậy chúng tôi không thể tìm lại chúng — một số đơn hàng là đủ."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Phong tục",
    "title": "Các ký tự thường bị tránh",
    "summary": "Điều này không bị cấm theo luật nhưng là một phong tục. Chúng tôi đã viết về những gì đã bị tránh và tại sao, và cách chúng tôi xử lý nó.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Các ký tự hợp pháp",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} ký tự",
                "label": "Các ký tự đã được tổng hợp"
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
            "p": "Suy nghĩ cơ bản là **\"ý nghĩa quá mức thực sự không mong muốn.\"** Điều này bao gồm các ký tự được coi là quá quý giá (珍·寶), các ký tự được xem là có sự hiện diện quá mạnh (王·帝), và những ký tự được coi là quá vĩ đại để một người có thể thể hiện, như thiên đường hoặc các vị thần. Điều này phản ánh một cảm giác kiềm chế cổ xưa, tin rằng một cái tên có thể lấn át con người."
          },
          {
            "p": "**Tuy nhiên, những ký tự này không phải là không thể sử dụng.** Đây không phải là một lệnh cấm pháp lý mà là một phong tục, và phong tục thay đổi theo khu vực, gia đình và thế hệ, và có thể thay đổi theo thời gian."
          },
          {
            "p": "Trên thực tế, trong số {avoidTotal} ký tự mà chúng tôi đã tổng hợp, {avoidCommonlyUsed} ký tự vẫn thường được sử dụng trong tên. Việc chúng được biết đến là bị tránh nhưng vẫn được sử dụng rộng rãi cho thấy rằng phong tục này không phải là tuyệt đối."
          }
        ]
      },
      {
        "title": "Có những loại nào?",
        "blocks": [
          {
            "p": "Các ký tự hiện được tổng hợp được chia thành bảy loại."
          },
          {
            "ul": [
              "**Bảo vật và Đồ vật** — Các ký tự trực tiếp đề cập đến sự giàu có hoặc đồ vật",
              "**Thiên đường và Thiên nhiên** — Những thứ như mặt trời, mặt trăng và bầu trời được coi là quá vĩ đại để một người có thể thể hiện",
              "**Vua và Quý tộc** — Các ký tự có nghĩa là địa vị, như vua hoặc hoàng đế",
              "**Thần thánh** — Các ký tự đề cập đến các lĩnh vực thiêng liêng, như các vị thần hoặc linh hồn",
              "**Mùa và Khác** — Các ký tự gắn liền với thời gian hoặc trạng thái cụ thể",
              "**Động vật** — Các động vật được coi là có năng lượng mạnh, như rồng hoặc hổ",
              "**Sự thái quá** — Các ký tự được coi là có ý nghĩa quá lớn hoặc tràn đầy"
            ]
          }
        ]
      },
      {
        "title": "Bạn có thể tự thêm hoặc xóa ký tự",
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
            "p": "**Loại bỏ các ký tự bị tránh khỏi các ứng viên** — Nếu được bật, chúng sẽ bị loại bỏ hoàn toàn. Nếu tắt, chúng sẽ vẫn có trong kết quả với nhãn \"Truyền thống bị tránh\" và lý do kèm theo."
          },
          {
            "p": "**Loại bỏ ngay cả các ký tự thường được sử dụng** — Điều này loại bỏ các ký tự nằm trong danh sách tránh nhưng thực sự được sử dụng rộng rãi (圭·琳·玲·元·太·星·海, v.v.). Nếu được bật, các ứng viên sẽ bị giảm đáng kể."
          },
          {
            "p": "Giá trị mặc định là **không loại bỏ mà chỉ hiển thị** chúng. Nếu chúng bị loại bỏ một cách yên lặng khỏi danh sách, có thể đối với những người muốn sử dụng ký tự đó, nó sẽ xuất hiện như thể nó không tồn tại."
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
    "eyebrow": "Cơ sở dịch vụ",
    "title": "Cơ sở nào cho việc chuyển đổi tên toàn cầu?",
    "summary": "Chúng tôi cung cấp các ứng viên từ năm góc độ, duy trì các hệ thống viết của mỗi ngôn ngữ và chỉ sử dụng các tên hiện có.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Các ứng viên được cung cấp từ năm góc độ",
        "blocks": [
          {
            "p": "Không chỉ có một cách để dịch một tên sang ngôn ngữ khác. Tùy thuộc vào việc bảo tồn âm thanh hay ý nghĩa, chọn một tên tự nhiên trong bối cảnh địa phương hoặc ưu tiên cá tính, các câu trả lời sẽ khác nhau. Do đó, thay vì trình bày một tùy chọn, chúng tôi cung cấp **một từ mỗi năm góc độ khác nhau**."
          },
          {
            "ul": [
              "**Tùy chọn bảo tồn âm thanh** — Giữ nguyên âm thanh của tên gốc càng nhiều càng tốt",
              "**Tùy chọn dịch nghĩa** — Dịch ý nghĩa chứa trong tên thành tên của ngôn ngữ đó",
              "**Tùy chọn thỏa hiệp âm thanh và ý nghĩa** — Lấy một nửa từ mỗi bên",
              "**Tùy chọn chính thống địa phương** — Chọn những tên thực sự được sử dụng phổ biến trong bối cảnh văn hóa đó",
              "**Tùy chọn cá tính và thương hiệu** — Ưu tiên những tên dễ nhớ và nổi bật"
            ]
          },
          {
            "p": "Năm tùy chọn được đảm bảo sẽ được cung cấp. Vì sở thích khác nhau từ người này sang người khác, chúng tôi tin rằng tốt hơn là cho phép lựa chọn hơn là trình bày một cái như là câu trả lời đúng."
          }
        ]
      },
      {
        "title": "Mỗi ngôn ngữ có quy tắc hệ thống viết khác nhau",
        "blocks": [
          {
            "p": "Khi dịch sang một ngôn ngữ không sử dụng chữ cái La Mã, nó phải được viết bằng chữ viết của ngôn ngữ đó. Đối với tiếng Nhật, đó sẽ là kana và kanji; đối với tiếng Nga, Mông Cổ và Kazakh, đó sẽ là chữ Cyrillic; đối với tiếng Ả Rập, đó sẽ là chữ Ả Rập; và đối với tiếng Thái, Khmer và Hindi, đó sẽ là các chữ viết tương ứng của chúng. Nếu bạn viết nó bằng chữ cái La Mã và gọi đó là \"tên Nhật,\" nó không thể được sử dụng ở quốc gia đó."
          },
          {
            "p": "Do đó, chúng tôi có các quy tắc riêng cho hệ thống viết của mỗi ngôn ngữ, và máy chủ kiểm tra một lần nữa để đảm bảo rằng kết quả nằm trong hệ thống viết đó. Những sai sót như bỏ qua họ hoặc trộn lẫn Hangul sẽ bị lọc ra ở đây."
          }
        ]
      },
      {
        "title": "",
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
          }
        ]
      },
      {
        "kind": "note",
        "title": "",
        "blocks": [
          {
            "p": "Ban đầu, chúng tôi đã tạo ra năm góc nhìn một cách riêng biệt. Điều này nhanh hơn, nhưng **số lượng ứng viên thay đổi mỗi lần.** Khi mỗi người chọn ứng viên, có sự trùng lặp hoặc khác biệt, và nếu một ứng viên thất bại, ứng viên đó sẽ hoàn toàn biến mất, dẫn đến chỉ còn hai hoặc ba thay vì năm."
          },
          {
            "p": "Bây giờ, vì chúng tôi xác định bộ ứng viên và phân phối góc nhìn cùng một lúc, **số lượng được cố định.** Ngay cả khi một mô tả thất bại, các ứng viên vẫn giữ nguyên và được trình bày với thông tin ngắn gọn. Chúng tôi tin rằng tốt hơn là luôn có cùng một số lượng, ngay cả khi điều đó mất một chút thời gian hơn."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const VI_NOTICES = {
  "kindLabels": {
    "service": "",
    "product": "",
    "policy": "",
    "support": ""
  },
  "intro": "",
  "empty": {
    "title": "",
    "body": ""
  },
  "effective": "Có hiệu lực từ {date}",
  "pager": {
    "label": "",
    "newer": "",
    "older": ""
  },
  "items": {
    "2026-08-02-contact": {
      "title": "",
      "body": [
        "",
        ""
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "",
      "body": [
        "",
        "",
        ""
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "",
      "body": [
        "",
        ""
      ]
    }
  }
} satisfies NoticeCopy;
