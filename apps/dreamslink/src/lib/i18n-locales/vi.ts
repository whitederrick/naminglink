// 드림링크 화면 사전의 Vietnamese (Tiếng Việt)(vi) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const vi: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Giấc mơ hôm nay, được đọc qua các biểu tượng giấc mơ truyền thống của Hàn Quốc",
  "currentLanguage": "Ngôn ngữ hiện tại",
  "moreLanguages": "Thêm",
  "closeLanguages": "Đóng",
  "dream": {
    "title": "Giải mã giấc mơ",
    "subtitle": "Hãy viết lại giấc mơ bạn đã có và chúng tôi sẽ tìm kiếm trong từ điển các biểu tượng giấc mơ truyền thống của Hàn Quốc.",
    "textLabel": "Bạn đã mơ về điều gì?",
    "textPlaceholder": "Viết lại như bạn nhớ. Ví dụ: một con cá chép nhảy ra khỏi nước trong vắt",
    "moodLabel": "Cảm giác của bạn khi tỉnh dậy",
    "moods": {
      "good": "Tốt",
      "scary": "Đáng sợ",
      "strange": "Lạ lùng",
      "sad": "Buồn",
      "unsure": "Không chắc"
    },
    "recurringLabel": "Tôi có giấc mơ này nhiều lần",
    "submit": "Đọc giấc mơ của tôi",
    "submitting": "Đang tìm kiếm…",
    "errorEmpty": "Vui lòng viết thêm một chút về giấc mơ.",
    "errorGeneric": "Chúng tôi không thể tải lên phần giải mã. Vui lòng thử lại sau một chút.",
    "resultTitle": "Giải mã giấc mơ",
    "symbolsHeading": "Các biểu tượng tìm thấy trong giấc mơ của bạn",
    "noSymbols": "Không có biểu tượng truyền thống nào từ từ điển của chúng tôi xuất hiện trong giấc mơ này. Chúng tôi để trống điều này thay vì bịa ra một ý nghĩa.",
    "themesHeading": "Những gì chúng chỉ đến cùng nhau",
    "conceptionNotice": "Các biểu tượng được xem là điềm báo về việc thụ thai xuất hiện ở đây. Điều này không xác định việc mang thai.",
    "browseSymbols": "Xem từ điển biểu tượng truyền thống",
    "popularSymbols": "Các biểu tượng thường được tìm kiếm",
    "disclaimer": "Đây là tài liệu tham khảo từ góc độ giải mã giấc mơ truyền thống, không phải là lời khuyên y tế, tài chính hoặc pháp lý. Chúng tôi không lưu trữ giấc mơ bạn đã viết.",
    "again": "Đọc giấc mơ khác"
  },
  "landing": {
    "title": "Giải mã giấc mơ của bạn\ntheo cách truyền thống",
    "subtitle": "Chúng tôi tìm kiếm các biểu tượng trong giấc mơ của bạn trong từ điển về truyền thuyết giấc mơ Hàn Quốc.\nKhông cần ngày sinh, không cần đăng ký.",
    "howTitle": "Cách thức hoạt động",
    "steps": [
      "Viết lại giấc mơ như bạn nhớ. Một hoặc hai câu là đủ.",
      "Chúng tôi tìm kiếm trong từ điển các biểu tượng giấc mơ truyền thống Hàn Quốc cho những gì đã xuất hiện trong đó. Nếu một biểu tượng không có trong đó, chúng tôi sẽ nói như vậy.",
      "Bạn sẽ thấy mỗi biểu tượng đã được hiểu như thế nào từ lâu, và chúng chỉ ra điều gì khi kết hợp lại với nhau."
    ],
    "privacyTitle": "Giấc mơ bạn viết không được lưu trữ",
    "privacyBody": "Những gì bạn viết chỉ được sử dụng trong quá trình giải mã, và không bao giờ được ghi lại.\nKhông cần tài khoản, và không có gì được lưu lại trên máy chủ sau khi giải mã xong.",
    "disclaimer": "Đây là tài liệu tham khảo từ góc độ giải mã giấc mơ truyền thống. Nó không phải là dự đoán về những gì sẽ đến, cũng không phải là lời khuyên y tế hay tài chính."
  },
  "ads": {
    "label": "Quảng cáo"
  },
  "selfAds": {
    "label": "Dịch vụ liên quan",
    "comingSoon": "Sắp ra mắt",
    "purposes": {
      "naminglink": "Tên Hàn Quốc và Hán tự được chọn theo ý nghĩa và số nét",
      "inyeonlink": "Cách hai người phù hợp, đọc từ bốn trụ và cung hoàng đạo của họ",
      "sajulink": "Bốn trụ của riêng bạn, và cách hôm nay gặp gỡ chúng",
      "dreamslink": "Giải mã giấc mơ từ từ điển biểu tượng",
      "placelink": "Những địa điểm hẹn hò ở Hàn Quốc, được chia sẻ và giới thiệu"
    }
  },
  "analyzing": {
    "title": "Tìm kiếm các biểu tượng trong giấc mơ của bạn",
    "quotes": [
      "Một giấc mơ thường phản ánh những ngày vừa qua nhiều hơn là những ngày sắp tới.",
      "Cùng một biểu tượng đã được đọc khác nhau tùy thuộc vào người mơ.",
      "Truyền thống 해몽 không phải là một bảng đáp án. Nó là một tập hợp các câu chuyện được thu thập lâu dài.",
      "Một giấc mơ đáng sợ không giống như một giấc mơ xấu. Nó có thể là dấu ấn mà một tâm trí hoảng hốt để lại.",
      "Nếu bạn chỉ nhớ một mảnh nhỏ cũng không sao. Một biểu tượng là đủ để bắt đầu.",
      "Một giấc mơ thường quay lại thường đi kèm với điều gì đó chưa hoàn thành.",
      "Nước trong đến mức nào và màu sắc của nó là điều mà những người đọc cũ thường chú ý nhất.",
      "Cảm giác của bạn khi tỉnh dậy kéo dài cũng lâu như những gì bạn thực sự thấy.",
      "Dù giấc mơ có tốt hay không, tốt hơn là không để nó quyết định ngày của bạn.",
      "Một 해몽 không phải là một lời về những gì sẽ xảy ra. Nó là một cái nhìn thứ hai về những gì đã tồn tại."
    ],
    "watching": "Đang xem quảng cáo",
    "remaining": "Kết quả mở sau {seconds} giây"
  },
  "dreamCard": {
    "title": "Giữ giấc mơ này như một thẻ",
    "body": "Chúng tôi đã đưa giấc mơ bạn viết và các biểu tượng chúng tôi tìm thấy vào một hình ảnh duy nhất. Nó là **một tệp hình ảnh, không phải PDF**, vì vậy bạn có thể lưu hoặc gửi nó như vậy.",
    "buyButton": "Nhận nó với giá {price}",
    "preparing": "Đang chuẩn bị",
    "ordering": "Đang tạo đơn hàng…",
    "paying": "Đang xử lý thanh toán…",
    "issuing": "Đang làm thẻ…",
    "done": "Hoàn tất. Sử dụng nút bên dưới để tải lại.",
    "failed": "Thanh toán hoặc tải xuống không thành công. Vui lòng thử lại sau một lúc.",
    "retry": "Tải lại",
    "contents": [
      "Các biểu tượng tìm thấy trong giấc mơ của bạn và ý nghĩa truyền thống của chúng",
      "Những biểu tượng đó chỉ đến điều gì khi kết hợp lại",
      "Ngày của giấc mơ và phiên bản từ điển"
    ],
    "consentLabel": "Đây là nội dung kỹ thuật số được cung cấp ngay lập tức sau khi thanh toán. Tôi hiểu rằng **khi tải xuống hoàn tất, quyền rút lại do thay đổi ý kiến là hạn chế**.",
    "consentRequired": "Bạn cần đồng ý với các điều khoản rút lại trước khi thanh toán.",
    "productInfoTitle": "Thông tin sản phẩm",
    "productInfo": [
      [
        "Nhà cung cấp",
        "{brand}"
      ],
      [
        "Định dạng",
        "1 tệp hình ảnh (PNG), tải xuống trên màn hình này ngay sau khi thanh toán. Đây không phải là tài liệu PDF."
      ],
      [
        "Yêu cầu",
        "Bất kỳ thiết bị nào có thể mở hình ảnh. Không cần cài đặt và không cần tài khoản."
      ],
      [
        "Tính khả dụng",
        "Không giới hạn thời gian. Tệp đã tải xuống là của bạn để giữ."
      ],
      [
        "Tải lại",
        "Tối đa 5 lần cho cùng một đơn hàng. Chúng tôi không giữ file, vì vậy không thể tạo lại sau khi bạn rời khỏi màn hình kết quả."
      ],
      [
        "Rút lại",
        "Hoàn tiền đầy đủ trước khi tải xuống hoàn tất. Sau đó, việc rút lại do thay đổi ý kiến bị hạn chế (Điều 17(2) Luật Thương mại điện tử Hàn Quốc)."
      ],
      [
        "Chi phí trả lại",
        "Không có. Nội dung kỹ thuật số không được vận chuyển."
      ]
    ],
    "refundContact": "Để hoàn tiền hoặc có câu hỏi, vui lòng liên hệ với bộ phận hỗ trợ hoặc địa chỉ email dưới đây. Nếu file chưa bao giờ được sản xuất, hoặc số tiền bị tính khác với đơn hàng, chúng tôi sẽ hoàn tiền đầy đủ.",
    "pdfLanguageNotice": "Văn bản trên thẻ sẽ xuất hiện bằng cùng một ngôn ngữ như màn hình này."
  },
  "conceptionReport": {
    "title": "Giữ lại báo cáo giấc mơ thai nghén dưới dạng PDF",
    "body": "Khi các biểu tượng truyền thống được đọc là điềm báo về việc thụ thai xuất hiện, một tài liệu PDF 4 trang sẽ trình bày những gì đã xuất hiện, ý nghĩa truyền thống của nó và nguồn gốc của cách đọc đó. Nó không xác định việc mang thai hay giới tính của một đứa trẻ.",
    "buyButton": "Nhận nó với giá {price}",
    "preparing": "Đang chuẩn bị",
    "ordering": "Đang tạo đơn hàng…",
    "paying": "Đang xử lý thanh toán…",
    "issuing": "Đang tạo báo cáo…",
    "done": "Hoàn tất. Sử dụng nút bên dưới để tải xuống lại.",
    "failed": "Thanh toán hoặc tải xuống không thành công. Vui lòng thử lại sau một lúc.",
    "retry": "Tải xuống lại",
    "contents": [
      "Trang 1 — giấc mơ bạn đã viết và những gì được tìm thấy trong đó",
      "Trang 2 — mỗi biểu tượng và ý nghĩa truyền thống của nó",
      "Trang 3 — lý do những điều này được xem là điềm báo thai nghén",
      "Trang 4 — một trang để giữ (ngày và các thông báo)"
    ],
    "consentLabel": "Nội dung kỹ thuật số này được cung cấp ngay sau khi thanh toán. Tôi hiểu rằng **một khi tải xuống hoàn tất, quyền rút lại vì thay đổi ý kiến là hạn chế**.",
    "consentRequired": "Bạn cần đồng ý với các điều khoản rút lại trước khi thanh toán.",
    "productInfoTitle": "Thông tin sản phẩm",
    "productInfo": [
      [
        "Nhà cung cấp",
        "{brand}"
      ],
      [
        "Định dạng",
        "1 tài liệu PDF (4 trang), tải xuống trên màn hình này ngay sau khi thanh toán."
      ],
      [
        "Yêu cầu",
        "Bất kỳ thiết bị nào có thể mở PDF. Không cần cài đặt và không cần tài khoản."
      ],
      [
        "Thời gian sử dụng",
        "Không giới hạn thời gian. Tệp đã tải xuống là của bạn để giữ."
      ],
      [
        "Tải lại",
        "Tối đa 5 lần cho cùng một đơn hàng. Chúng tôi không giữ tệp, vì vậy không thể tạo lại sau khi bạn rời khỏi màn hình kết quả."
      ],
      [
        "Rút lại",
        "Hoàn tiền đầy đủ trước khi tải xuống hoàn tất. Sau đó, việc rút lại do thay đổi ý kiến bị hạn chế (Điều 17(2) Luật Thương mại điện tử Hàn Quốc)."
      ],
      [
        "Chi phí trả hàng",
        "Không có. Nội dung kỹ thuật số không được vận chuyển."
      ]
    ],
    "refundContact": "Để yêu cầu hoàn tiền hoặc có câu hỏi, vui lòng liên hệ với trung tâm hỗ trợ hoặc địa chỉ email dưới đây. Nếu tài liệu chưa bao giờ được sản xuất, hoặc số tiền bị tính khác với đơn hàng, chúng tôi sẽ hoàn tiền đầy đủ.",
    "pdfLanguageNotice": "Tài liệu PDF sẽ được xuất ra bằng ngôn ngữ giống như màn hình này."
  },
  "footer": {
    "privacy": "Quyền riêng tư",
    "terms": "Điều khoản",
    "refund": "Hoàn tiền",
    "pricing": "Bảng giá",
    "legalEntity": "Tên công ty",
    "representative": "Đại diện",
    "businessNumber": "Đăng ký KD",
    "mailOrderNumber": "Bán hàng online",
    "address": "Địa chỉ",
    "customerCenter": "Hỗ trợ khách hàng",
    "email": "Email",
    "privacyOfficer": "Phụ trách dữ liệu",
    "hostingProvider": "Hosting",
    "providedBy": "Cung cấp bởi",
    "effective": "Ngày hiệu lực",
    "backHome": "Về trang chủ"
  }
};
