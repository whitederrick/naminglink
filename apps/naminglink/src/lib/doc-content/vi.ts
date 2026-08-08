import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu về Naming-Link",
    "summary": "Chúng tôi giúp bạn chọn và hiểu các tên tiếng Hàn. Đây là những gì chúng tôi dựa vào để đưa ra kết quả, và những gì chúng tôi cố ý không làm.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì",
        "blocks": [
          {
            "p": "Naming-Link giúp bạn **chọn và hiểu các tên tiếng Hàn** — hanja đứng sau tên của một đứa trẻ, một tên tiếng Hàn để sử dụng ở nước ngoài, cách viết Hangul của tên bạn, và những kỷ vật như con dấu hoặc báo cáo in."
          },
          {
            "p": "Việc xem kết quả của bạn là **miễn phí và không cần tài khoản.** Các mục trả phí không bao giờ bán lại những gì mà màn hình đã hiển thị: chúng mở thêm các ứng viên, thêm phân tích bằng văn bản, hoặc biến kết quả thành thứ bạn có thể giữ lại."
          }
        ]
      },
      {
        "title": "Câu trả lời của chúng tôi dựa trên điều gì",
        "blocks": [
          {
            "p": "Hanja đến từ **bảng hanja chính thức của Tòa án Tối cao Hàn Quốc.** Mỗi ký tự có một cách đọc cố định để sử dụng trong tên, và các ký tự ngoài bảng không thể được đăng ký. Chúng tôi không thêm vào danh sách đó hoặc chọn yêu thích."
          },
          {
            "p": "Saju và các hình năm yếu tố được tính toán từ **lịch âm dương Hàn Quốc**, với thời gian sinh được điều chỉnh theo thời gian mặt trời thực tế cho nơi sinh. Cách đọc là một tài liệu tham khảo truyền thống, không phải là một dự đoán."
          },
          {
            "p": "Các giải thích bằng văn bản được sản xuất bởi AI. Để tránh **sáng tạo ra những điều không có**, mô hình chỉ được cung cấp đầu vào của bạn và dữ liệu tham khảo của chúng tôi, và được yêu cầu ở lại trong đó. Các hướng dẫn giải thích điều này một cách chi tiết."
          }
        ]
      },
      {
        "title": "Chúng tôi không làm gì",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không nói về vận mệnh.** Không có gì ở đây hứa hẹn về vận may, sự giàu có hay sự bảo vệ.",
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
            "p": "Thông tin công ty và cách liên hệ với chúng tôi có trên [trang liên hệ](/contact), bao gồm các yêu cầu hoàn tiền, yêu cầu về quyền riêng tư và báo cáo lỗi."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Đọc",
    "title": "Cách đọc cố định — một cách phát âm cho mỗi ký tự",
    "summary": "Bảng chính thức không chỉ liệt kê các ký tự. Nó cũng xác định cách đọc của mỗi ký tự khi được sử dụng trong tên.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Một cách đọc cố định cho mỗi ký tự",
        "blocks": [
          {
            "p": "Bảng hanja tên không chỉ quyết định các ký tự có thể được sử dụng. **Nó cũng xác định cách đọc của mỗi ký tự khi nó xuất hiện trong một tên.** Cách đọc cố định đó là điều mà việc đăng ký dựa vào."
          },
          {
            "p": "Hầu hết hanja có nhiều cách đọc có thể. Tuy nhiên, một tên được viết trên tài liệu và được nói ra, vì vậy nó cần chính xác một cách đọc. Do đó, bảng chỉ định cách đọc cho mỗi ký tự để sử dụng trong tên, và không có cách đọc nào khác có thể được đăng ký."
          }
        ]
      },
      {
        "title": "Vì vậy, âm thanh được ưu tiên",
        "blocks": [
          {
            "p": "Đó là lý do tại sao Naming-Link cố định âm thanh trước khi tìm kiếm hanja. Nếu tên là \"지은\", ý nghĩa chỉ có thể được chọn từ các ký tự được chỉ định cách đọc **지** và các ký tự được chỉ định cách đọc **은**."
          },
          {
            "p": "Dù ý nghĩa có tốt đến đâu, một ký tự có cách đọc không khớp không thể được sử dụng cho tên đó. Chúng tôi cũng không bao giờ thay đổi âm thanh của một tên để phù hợp với một ký tự — một tên được nói trong suốt cuộc đời, và âm thanh được xác định trước, với hanja theo sau."
          }
        ]
      },
      {
        "title": "Tên họ không bị giới hạn bởi bảng này",
        "blocks": [
          {
            "p": "Điều này thường bị hiểu nhầm. **Bảng quy định tên gọi, không phải họ.** Một họ theo những gì đã có trong sổ hộ khẩu, vì vậy một số người thực sự sử dụng các ký tự không có trong bảng hanja tên."
          },
          {
            "p": "Đó là lý do tại sao Naming-Link xử lý hanja họ khác. Chúng tôi chỉ giúp bạn tìm một họ, và chúng tôi để một trường để nhập trực tiếp cho những người có ký tự ngoài bảng. Các họ hai âm tiết như Namgung và Seonwoo được nhập theo cách tương tự."
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
            "p": "Dịch vụ này viết **tên của bạn** bằng Hangul. Nó không cung cấp cho bạn một tên tiếng Hàn. Michael trở thành 마이클 — cùng một tên, được viết để người Hàn Quốc có thể đọc và nói. Chúng tôi không thay thế nó bằng một tên tiếng Hàn có nghĩa tương tự."
          },
          {
            "p": "Nếu bạn muốn một tên tiếng Hàn, **đó là một dịch vụ khác.** Một dịch vụ giữ nguyên tên của bạn và chỉ thay đổi chữ viết; dịch vụ khác đề xuất một tên mới."
          }
        ]
      },
      {
        "title": "Âm thanh không có trong tiếng Hàn",
        "blocks": [
          {
            "p": "Mỗi ngôn ngữ đều có âm thanh mà tiếng Hàn thiếu — f, v, z, th, và các phân biệt nguyên âm mà tiếng Hàn không thực hiện. Đối với những âm thanh đó, chúng tôi viết những gì **một người nói tiếng Hàn thực sự nói** khi họ đọc tên của bạn to, thay vì phiên âm từng ký hiệu một. Mục tiêu là cách viết sẽ được sử dụng, không phải cách viết trung thành nhất về mặt kỹ thuật."
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
            "p": "Không có một câu trả lời đúng duy nhất. Cách viết gần nhất với âm thanh gốc, cách viết phổ biến nhất ở Hàn Quốc, và cách viết dễ nhất thường là ba điều khác nhau. Vì vậy, chúng tôi hiển thị chúng cùng nhau và nói rõ điều gì tách biệt chúng."
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
            "p": "Chúng tôi không đính kèm hanja vào một phiên âm. Hanja mang ý nghĩa, và quy trình này chỉ về âm thanh. Việc khớp các ký tự với âm thanh một mình có thể khiến bạn có một ý nghĩa mà bạn không yêu cầu."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cách thức hoạt động",
    "title": "Cách chúng tôi xây dựng một tên tiếng Hàn",
    "summary": "Chúng tôi chọn từ các họ có sẵn, cân nhắc xem tên có dễ nói và viết hay không, và hỏi tên sẽ được sử dụng cho mục đích gì.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi bắt đầu với họ",
        "blocks": [
          {
            "p": "Ở Hàn Quốc, họ đứng trước, và không giống như tên gọi, nó không được tự do sáng tạo — bạn thừa hưởng nó. Vì vậy, chúng tôi chỉ đề xuất những họ mà người Hàn Quốc thực sự có. Nhóm mặc định của chúng tôi là **20 họ phổ biến nhất**, bao gồm khoảng 80% dân số."
          },
          {
            "p": "Nếu họ của bạn tình cờ trùng với một họ tiếng Hàn thực sự về âm thanh — Wang với 왕, Ye với 예 — chúng tôi sẽ đưa cái đó lên trước. Giữ một mối liên hệ với tên gốc của bạn có giá trị hơn một họ được chọn ngẫu nhiên."
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
            "p": "Đây là một tên mà mọi người ở Hàn Quốc thực sự sẽ gọi bạn, vì vậy điều đầu tiên chúng tôi kiểm tra là liệu một người Hàn Quốc có thể nghe nó một lần và viết nó xuống hay không. Một tên cần phải được đánh vần mỗi lần là một gánh nặng mà bạn phải mang, không phải chúng tôi."
          },
          {
            "p": "Ý nghĩa cũng quan trọng. Tên gọi tiếng Hàn thường mang một ý nghĩa, vì vậy chúng tôi cho bạn biết tên được đọc như thế nào và tại sao chúng tôi chọn nó — không chỉ là tên gọi đó."
          }
        ]
      },
      {
        "title": "Chúng tôi hỏi tên sẽ được sử dụng cho mục đích gì",
        "blocks": [
          {
            "p": "Một tên cho giấy tờ đại học không giống như một tên mà bạn bè sẽ gọi từ xa, hoặc một tên bạn sẽ sử dụng trực tuyến. Chúng tôi hỏi bạn dự định sử dụng nó như thế nào và xem xét điều đó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đây không phải là một phiên âm",
        "blocks": [
          {
            "p": "Ở đây chúng tôi đề xuất một **tên tiếng Hàn mới**. Nếu bạn muốn tên hiện tại của mình được viết bằng Hangul — Michael thành 마이클 — hãy xem [hướng dẫn viết Hangul](/guide/how-hangul-transliteration)."
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
            "p": "Viết đến **{email}**. Chúng tôi sẽ trả lời trong vòng hai ngày làm việc. Đối với bất kỳ điều gì liên quan đến đơn hàng — thanh toán, hoàn tiền, một tệp bạn không nhận được — vui lòng bao gồm **số đơn hàng hoặc email bạn đã thanh toán**."
          },
          {
            "p": "Các yêu cầu qua điện thoại: {customerCenter} (giờ làm việc Hàn Quốc)."
          }
        ]
      },
      {
        "title": "Những gì cần gửi ở đây",
        "blocks": [
          {
            "ul": [
              "**Thanh toán và hoàn tiền** — nếu một tài liệu chưa bao giờ được sản xuất, hoặc số tiền bị tính khác với đơn hàng của bạn, chúng tôi hoàn tiền toàn bộ. Xem [chính sách hoàn tiền](/refund-policy).",
              "**Quyền riêng tư** — yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu của bạn. Xem [chính sách quyền riêng tư](/privacy).",
              "**Báo cáo lỗi** — nếu một ý nghĩa hanja, cách đọc hoặc tính toán có vẻ sai, hãy cho chúng tôi biết. Việc đề cập đến màn hình nào và những gì bạn đã nhập sẽ giúp rất nhiều.",
              "**Bất kỳ điều gì khác** — các quan hệ đối tác và báo chí cũng gửi đến cùng một địa chỉ."
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
              "**Số đăng ký bán hàng qua thư** — {mailOrderNumber}",
              "**Địa chỉ** — {address}",
              "**Dịch vụ khách hàng** — {customerCenter}",
              "**Email** — {email}",
              "**Nhân viên bảo vệ quyền riêng tư** — {privacyOfficer}",
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
  }
} satisfies Record<DocKey, DocPage>;

export const VI_NOTICES = {
  "kindLabels": {
    "service": "Dịch vụ",
    "product": "Sản phẩm",
    "policy": "Chính sách",
    "support": "Hỗ trợ"
  },
  "intro": "Các thay đổi đối với điều khoản sử dụng của bạn — giá cả, chính sách — được đăng ở đây trước khi có hiệu lực. Các cải tiến nội bộ không được liệt kê: những gì xuất hiện ở đây là những gì bạn cần biết.",
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
      "title": "Trang liên hệ và giới thiệu hiện đã mở",
      "body": [
        "Các câu hỏi, hoàn tiền, yêu cầu quyền riêng tư và báo cáo lỗi hiện có một nơi để gửi. Trang liên hệ ở chân trang liệt kê email và thông tin công ty của chúng tôi.",
        "Những gì câu trả lời của chúng tôi dựa trên, và những gì chúng tôi cố ý không làm, được viết trên trang giới thiệu."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Các báo cáo PDF được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer",
      "body": [
        "Nếu bạn đang sử dụng dịch vụ bằng tiếng Ả Rập hoặc Khmer, PDF bạn mua được sản xuất bằng tiếng Anh. Công cụ bố trí tài liệu của chúng tôi chưa thể định dạng các đoạn văn trong hai ký tự đó.",
        "Màn hình vẫn ở ngôn ngữ của bạn, và tên của bạn được in bằng ký tự của bạn trong tài liệu.",
        "Ghi chú tương tự xuất hiện trước khi thanh toán. Khi công cụ hỗ trợ các ký tự này, chúng tôi sẽ thông báo ở đây."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Thanh toán chưa mở",
      "body": [
        "Việc tạo một tên và đọc kết quả là miễn phí hôm nay, và không cần tài khoản.",
        "Các mục trả phí chưa được bán. Các số tiền được hiển thị trên trang giá sẽ được áp dụng khi mở bán."
      ]
    }
  }
} satisfies NoticeCopy;
