import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu về Inyeon-Link",
    "summary": "Chúng tôi so sánh hai biểu đồ sinh theo truyền thống Saju Hàn Quốc. Đây là những gì chúng tôi tính toán và những gì chúng tôi từ chối tuyên bố.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì",
        "blocks": [
          {
            "p": "Inyeon-Link xây dựng hai biểu đồ sinh từ ngày tháng và giờ sinh và cho thấy **cách hai bộ năng lượng gặp nhau.** Bạn cũng có thể đọc biểu đồ của riêng mình và xem những tính cách nào thường phù hợp với bạn."
          },
          {
            "p": "Đọc trên màn hình là **miễn phí và không cần tài khoản.** Các mục trả phí là báo cáo PDF chứa các số liệu mà màn hình không bao giờ hiển thị — sức mạnh của các yếu tố, cặp mười thần và các mối quan hệ giữa tất cả bốn trụ cột."
          }
        ]
      },
      {
        "title": "Chúng tôi tính toán gì",
        "blocks": [
          {
            "p": "Biểu đồ được xây dựng từ **lịch âm dương Hàn Quốc**, và thời gian sinh được điều chỉnh theo **thời gian mặt trời thực** cho nơi sinh — cùng một thời gian đồng hồ có nghĩa là vị trí mặt trời khác nhau tùy thuộc vào nơi bạn sinh ra."
          },
          {
            "p": "Điểm số đến từ các quy tắc cố định. Các khái niệm truyền thống — mười thần, quan hệ nhánh, yếu tố hỗ trợ — được thể hiện dưới dạng quy tắc, vì vậy **cùng một đầu vào luôn cho ra cùng một kết quả.** Khi một quy tắc thay đổi, chúng tôi chạy một hệ thống hồi quy để đảm bảo rằng các đọc cũ không bị thay đổi."
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
              "**Chúng tôi không đoán vận mệnh.** Không có gì ở đây bảo bạn theo đuổi hoặc tránh xa ai đó. Đây là một tài liệu tham khảo được rút ra từ một truyền thống.",
              "**Chúng tôi không lưu trữ những gì bạn nhập.** Chi tiết sinh được sử dụng trong khoảnh khắc tính toán và không bao giờ được ghi lại; các liên kết kết quả sống trong phần URL mà trình duyệt không gửi đến máy chủ.",
              "**Một điểm số không phải là phán quyết về một người.** Một số thấp không làm mất giá trị một mối quan hệ."
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
  }
} satisfies Record<DocKey, DocPage>;

export const VI_NOTICES = {
  "kindLabels": {
    "service": "Dịch vụ",
    "product": "Sản phẩm",
    "policy": "Chính sách",
    "support": "Hỗ trợ"
  },
  "intro": "Các thay đổi về điều khoản sử dụng của bạn — giá cả, chính sách — sẽ được đăng ở đây trước khi có hiệu lực. Các cải tiến nội bộ không được liệt kê: những gì xuất hiện ở đây là những gì bạn cần biết.",
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
  "items": {}
} satisfies NoticeCopy;
