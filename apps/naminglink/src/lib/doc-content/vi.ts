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
            "p": "Naming-Link giúp bạn **chọn và hiểu các tên Hàn Quốc** — các chữ Hanja đứng sau tên của trẻ, một tên Hàn Quốc để sử dụng ở nước ngoài, cách viết tên của bạn bằng chữ Hangul, và các vật lưu niệm như con dấu hoặc báo cáo in."
          },
          {
            "p": "Việc xem kết quả của bạn là **miễn phí và không cần tài khoản.** Các mục trả phí không bao giờ bán lại những gì đã hiển thị trên màn hình: chúng mở thêm các ứng viên, thêm phân tích bằng văn bản, hoặc biến kết quả thành thứ bạn có thể giữ lại."
          }
        ]
      },
      {
        "title": "Căn cứ của các câu trả lời của chúng tôi",
        "blocks": [
          {
            "p": "Chữ Hanja đến từ **bảng chữ Hanja chính thức của Tòa án Tối cao Hàn Quốc.** Mỗi ký tự có một cách đọc cố định để sử dụng trong tên, và các ký tự không có trong bảng không thể được đăng ký. Chúng tôi không thêm vào danh sách đó hoặc chọn ra những ký tự yêu thích."
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
        "title": "Những gì chúng tôi không làm",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không nói về vận mệnh.** Không có gì ở đây hứa hẹn vận may, sự giàu có hay sự bảo vệ.",
              "**Chúng tôi không lưu trữ tên của bạn.** Kết quả miễn phí không bao giờ được ghi lại trên máy chủ của chúng tôi, và các tài liệu trả phí được gửi mà không giữ bản sao của tệp.",
              "**Việc trả phí không mua được câu trả lời tốt hơn.** Mở khóa bằng quảng cáo và mở khóa bằng thanh toán cung cấp nội dung hoàn toàn giống nhau."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Dịch vụ có sẵn bằng 23 ngôn ngữ. Các PDF trả phí được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer — công cụ tạo PDF không hỗ trợ các chữ viết đó — và chúng tôi thông báo điều này trên màn hình trước khi bạn thanh toán."
          }
        ]
      },
      {
        "title": "Liên hệ",
        "blocks": [
          {
            "p": "Thông tin công ty và cách liên hệ với chúng tôi có trên [trang liên hệ](/contact), bao gồm hoàn tiền, yêu cầu về quyền riêng tư và báo cáo lỗi."
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
    "summary": "Cách liên hệ với chúng tôi để hỏi đáp, hoàn tiền, yêu cầu quyền riêng tư và báo cáo lỗi, cùng với thông tin công ty của chúng tôi.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Gửi email cho chúng tôi",
        "blocks": [
          {
            "p": "Gửi đến **{email}**. Chúng tôi sẽ trả lời trong vòng hai ngày làm việc. Đối với bất kỳ điều gì liên quan đến đơn hàng — thanh toán, hoàn tiền, một tệp bạn không nhận được — vui lòng bao gồm **số đơn hàng hoặc email bạn đã thanh toán**."
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
              "**Thanh toán và hoàn tiền** — nếu một tài liệu chưa bao giờ được sản xuất, hoặc số tiền bị tính khác với đơn hàng của bạn, chúng tôi hoàn tiền đầy đủ. Xem [chính sách hoàn tiền](/refund-policy).",
              "**Quyền riêng tư** — yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu của bạn. Xem [chính sách quyền riêng tư](/privacy).",
              "**Báo cáo lỗi** — nếu ý nghĩa, cách đọc hoặc tính toán của một chữ Hanja trông sai, hãy cho chúng tôi biết. Đề cập đến màn hình nào và bạn đã nhập gì sẽ giúp rất nhiều.",
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
      "title": "Trang liên hệ và giới thiệu đã mở",
      "body": [
        "Các yêu cầu, hoàn tiền, yêu cầu quyền riêng tư và báo cáo lỗi giờ đây có một nơi để gửi. Trang liên hệ ở chân trang liệt kê email và thông tin công ty của chúng tôi.",
        "Những gì chúng tôi dựa vào để đưa ra câu trả lời, và những gì chúng tôi cố ý không làm, được viết trên trang giới thiệu."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Báo cáo PDF được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer",
      "body": [
        "Nếu bạn đang sử dụng dịch vụ bằng tiếng Ả Rập hoặc Khmer, PDF bạn mua sẽ được sản xuất bằng tiếng Anh. Công cụ định dạng tài liệu của chúng tôi vẫn chưa hỗ trợ định dạng đoạn văn trong hai chữ viết đó.",
        "Màn hình vẫn ở ngôn ngữ của bạn, và tên của bạn được in bằng chữ viết của bạn trong tài liệu.",
        "Ghi chú tương tự xuất hiện trước khi thanh toán. Khi công cụ hỗ trợ các chữ viết này, chúng tôi sẽ thông báo ở đây."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Thanh toán chưa mở",
      "body": [
        "Việc tạo tên và xem kết quả hiện tại là miễn phí, và không cần tài khoản.",
        "Các mục trả phí chưa được bán. Các số tiền hiển thị trên trang giá sẽ được áp dụng khi mở bán."
      ]
    }
  }
} satisfies NoticeCopy;
