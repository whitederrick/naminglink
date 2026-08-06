import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Dreams-Link không lưu trữ thông tin cần thiết cho việc giải mộng. Chính sách này mô tả những gì dịch vụ nhận, những gì không để lại và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Câu chuyện giấc mơ mà bạn viết ra để giải mộng, cảm giác khi tỉnh dậy, và việc có lặp lại giấc mơ đó hay không **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không ghi vào cơ sở dữ liệu và cũng không lưu lại dưới dạng tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào.",
        "Câu chuyện giấc mơ là giá trị riêng tư nhất mà dịch vụ này nhận. Vì vậy, chúng tôi không có chức năng xem lại kết quả trước đó (nhật ký giấc mơ) — chức năng đó chỉ có thể tồn tại nếu chúng tôi giữ lại các bài viết mà bạn đã nhập."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được trình duyệt gửi đến máy chủ. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được lưu lại trong hồ sơ truy cập máy chủ.",
        "Nếu bạn gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ là do người dùng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin được thu thập tự động",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người dùng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ web được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ màn hình và không được lưu trữ"
      ]
    },
    {
      "heading": "4. Cookie và quảng cáo",
      "paragraphs": [
        "Dịch vụ không sử dụng cookie để theo dõi người dùng.",
        "Hiện tại, dịch vụ này không có quảng cáo. Nếu trong tương lai có quảng cáo, nhà cung cấp quảng cáo (ví dụ: Google) có thể sử dụng cookie để hiển thị quảng cáo. Khi đó, chúng tôi sẽ sửa đổi điều khoản này trước và làm rõ những gì thay đổi."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Hiện tại không có sản phẩm trả phí nào được bán, vì vậy không có thông tin nào liên quan đến thanh toán được lưu trữ.",
        "Khi bắt đầu bán hàng, các mục dưới đây sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật. **Ngay cả lúc đó, giấc mơ mà bạn đã viết và tệp được tạo sẽ không được lưu trữ**, và chúng tôi cũng không nhận thông tin nhận diện như tên, số liên lạc, địa chỉ."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ màn hình tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, và hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm trước khi bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba.",
        "Chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider} để vận hành dịch vụ, và trong quá trình này, các ghi chép truy cập nêu trên sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Khi bắt đầu bán sản phẩm trả phí, thanh toán trong nước sẽ được ủy thác cho Toss Payments, và thanh toán quốc tế sẽ được ủy thác cho PortOne (PayPal). Thông tin phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, và dịch vụ không nhận thông tin này."
      ]
    },
    {
      "heading": "7. Quyền của người dùng",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa.",
        "Người dùng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
        "Nếu có bất kỳ câu hỏi nào liên quan đến việc sử dụng dịch vụ, vui lòng cho chúng tôi biết qua thông tin liên lạc dưới đây."
      ]
    },
    {
      "heading": "8. Thông tin cá nhân của trẻ em",
      "paragraphs": [
        "Dịch vụ này không nhằm vào trẻ em dưới 14 tuổi và không thu thập thông tin cá nhân từ trẻ em."
      ]
    },
    {
      "heading": "9. Người chịu trách nhiệm bảo vệ thông tin cá nhân",
      "paragraphs": [
        "Người chịu trách nhiệm bảo vệ: {privacyOfficer}",
        "Liên hệ: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Thay đổi chính sách",
      "paragraphs": [
        "Khi thay đổi chính sách này, ngày có hiệu lực và nội dung thay đổi sẽ được đăng trên trang này. Nếu có thay đổi thực sự trong nội dung xử lý như việc bắt đầu hiển thị quảng cáo hoặc bán sản phẩm trả phí, chúng tôi sẽ thông báo trước về sự thay đổi đó."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d1 = {
  "title": "Điều khoản sử dụng",
  "intro": "Điều khoản này quy định các điều kiện sử dụng dịch vụ Dreams-Link (sau đây gọi là “dịch vụ”). Khi sử dụng dịch vụ, bạn được coi là đã đồng ý với điều khoản này.",
  "sections": [
    {
      "heading": "1. Tính chất của dịch vụ",
      "paragraphs": [
        "Dịch vụ tìm kiếm các biểu tượng trong giấc mơ mà người dùng đã viết và hiển thị ý nghĩa của các biểu tượng đó như tài liệu tham khảo. Dịch vụ sẽ nói rằng không tìm thấy các biểu tượng không có trong từ điển và sẽ không tạo ra ý nghĩa không có.",
        "Các biểu tượng và giải thích được đưa ra là **tài liệu tham khảo từ góc nhìn truyền thống** và không phải là dự đoán về tương lai hay tư vấn y tế, tài chính, pháp lý.** Một giấc mơ tốt không đảm bảo điều gì sẽ xảy ra, và một giấc mơ xấu không có nghĩa là điều gì đó đã được định sẵn.",
        "**Kết quả liên quan đến giấc mơ mang thai không xác định tình trạng mang thai hay giới tính của thai nhi.** Chúng tôi chỉ thông báo về việc các biểu tượng đã được coi là giấc mơ mang thai theo truyền thống đã xuất hiện trong giấc mơ và bối cảnh của chúng."
      ]
    },
    {
      "heading": "2. Phí sử dụng",
      "paragraphs": [
        "Hiện tại, dịch vụ được cung cấp hoàn toàn miễn phí và không yêu cầu đăng ký thành viên.",
        "Khi bắt đầu bán sản phẩm trả phí (hình ảnh thẻ giấc mơ, báo cáo giấc mơ mang thai dưới dạng PDF), các điều kiện trong mục 3 dưới đây sẽ được áp dụng. Chúng tôi sẽ thông báo lại điều khoản này trước khi bắt đầu bán."
      ]
    },
    {
      "heading": "3. Sản phẩm trả phí và hoàn tiền",
      "paragraphs": [
        "Có **hai loại** sản phẩm trả phí được bán. Giải mã miễn phí có thể được sử dụng mà không cần thanh toán, trong khi hai sản phẩm dưới đây sẽ được tạo ra dưới dạng có thể lưu giữ kết quả.",
        "**Thẻ giấc mơ** — là một tệp hình ảnh duy nhất. Nó sẽ lưu giữ và chia sẻ các biểu tượng và ý nghĩa truyền thống từ giấc mơ mà bạn đã có trong ngày. **Không phải là tài liệu (PDF).** Thanh toán trong nước {priceCardDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceCardGlobal}.",
        "**Báo cáo giấc mơ mang thai dưới dạng PDF** — 4 trang. Nó chứa ý nghĩa truyền thống của các biểu tượng và bối cảnh của chúng trong tài liệu. **Không xác định tình trạng mang thai** — chỉ thông báo rằng các biểu tượng đã được coi là giấc mơ mang thai theo truyền thống đã xuất hiện trong giấc mơ. Thanh toán trong nước {priceConceptionDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceConceptionGlobal}.",
        "Thanh toán trong nước có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán đơn giản (Toss Payments, KakaoPay, NaverPay, Payco, v.v.) thông qua Toss Payments, trong khi thanh toán quốc tế thông qua PayPal của PortOne. Số tiền cuối cùng sẽ theo số tiền hiển thị trên màn hình thanh toán.",
        "**Dịch vụ không lưu trữ dữ liệu đầu vào của người dùng cũng như tệp PDF đã tạo.** Khi thanh toán được phê duyệt, tài liệu sẽ được tạo và gửi ngay lập tức mà không để lại gì trên máy chủ. Do đó, tệp đã tải xuống cần được người dùng tự lưu giữ.",
        "Trong trường hợp tải xuống bị ngừng hoặc tệp bị mất, bạn có thể tải xuống lại **tối đa 5 lần** với cùng một đơn hàng. Tuy nhiên, nếu dữ liệu đầu vào bị mất khi ra khỏi màn hình kết quả, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu sau khi thanh toán, bạn có thể hủy bất kỳ lúc nào và nhận hoàn tiền đầy đủ.**",
        "**Sau khi tải xuống hoàn tất, việc hủy đơn hàng do thay đổi ý kiến sẽ bị hạn chế.** Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể phục hồi, điều này thuộc về lý do hạn chế hủy đơn hàng theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử.",
        "**Trong trường hợp tài liệu không được tạo do lỗi hệ thống, tệp không mở được, hoặc số tiền thanh toán khác với đơn hàng,** sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền đầy đủ.",
        "**Phàn nàn về nội dung kết quả** không thuộc lý do hoàn tiền. Kết quả giải mã là tài liệu tham khảo từ góc nhìn truyền thống và đã được thông báo về tính chất của nó trước khi thanh toán (mục 1 trên).",
        "Yêu cầu hoàn tiền sau khi đã sử dụng hết 5 lần cấp lại sẽ không thuộc lý do hoàn tiền.",
        "**Nếu người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp,** bản thân hoặc người đại diện hợp pháp có thể hủy thanh toán đó. Vui lòng thông báo cho chúng tôi qua thông tin liên lạc dưới đây để được hoàn tiền."
      ]
    },
    {
      "heading": "4. Về kết quả giải mã",
      "paragraphs": [
        "Các quy tắc tìm kiếm biểu tượng tuân theo từ điển công khai và quy trình đã được xác định, vì vậy nếu viết cùng một nội dung, sẽ luôn cho ra cùng một biểu tượng.",
        "Việc viết ngắn gọn sẽ làm giảm số lượng biểu tượng được tìm thấy. Các biểu tượng không có trong từ điển sẽ không được tìm thấy và trong trường hợp đó, kết quả sẽ để trống.",
        "Từ điển biểu tượng là sự tổng hợp các tài liệu giải mã truyền thống và truyền miệng, và có thể có các cách giải thích khác nhau tùy theo vùng miền và thời đại."
      ]
    },
    {
      "heading": "5. Trách nhiệm của người dùng",
      "paragraphs": [
        "Người dùng có thể viết về giấc mơ của người khác, nhưng không được sử dụng kết quả đó để gây bất lợi cho người khác.",
        "Không sử dụng kết quả của dịch vụ làm cơ sở cho các quyết định ảnh hưởng đến quyền lợi hoặc lợi ích của con người như mang thai, sức khỏe, đầu tư, tuyển dụng, v.v. Dịch vụ không được tạo ra cho mục đích đó."
      ]
    },
    {
      "heading": "6. Hành vi bị cấm",
      "paragraphs": [
        "Các hành vi sau đây không được phép."
      ],
      "bullets": [
        "Gửi yêu cầu quá mức bằng công cụ tự động gây cản trở hoạt động của dịch vụ",
        "Trình bày kết quả của dịch vụ như là sự thật hoặc kết quả đánh giá của chuyên gia",
        "Sao chép hoặc sửa đổi dịch vụ để cung cấp dịch vụ tương tự"
      ]
    },
    {
      "heading": "7. Miễn trừ trách nhiệm",
      "paragraphs": [
        "Dịch vụ chỉ cung cấp tài liệu tham khảo và không chịu trách nhiệm về các quyết định và kết quả mà người dùng đưa ra dựa trên kết quả đó.",
        "Trong trường hợp dịch vụ bị ngừng do các lý do không thể kiểm soát như thiên tai, sự cố của nhà cung cấp hạ tầng, chúng tôi không chịu trách nhiệm về thiệt hại phát sinh."
      ]
    },
    {
      "heading": "8. Quyền sở hữu trí tuệ",
      "paragraphs": [
        "Quyền đối với màn hình, văn bản và các sản phẩm thực hiện quy tắc tính toán của dịch vụ thuộc về nhà điều hành. Người dùng có thể lưu hoặc chia sẻ kết quả cho mục đích cá nhân."
      ]
    },
    {
      "heading": "9. Thay đổi điều khoản và luật áp dụng",
      "paragraphs": [
        "Trong trường hợp thay đổi điều khoản, chúng tôi sẽ đăng tải trên trang này cùng với ngày có hiệu lực.",
        "Điều khoản này áp dụng theo luật pháp Hàn Quốc và các tranh chấp liên quan đến việc sử dụng dịch vụ sẽ tuân theo quy trình do các quy định pháp luật liên quan quy định."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d2 = {
  "title": "Chính sách hoàn tiền và hủy bỏ",
  "intro": "Tiêu chí hủy bỏ và hoàn tiền cho sản phẩm trả phí. Chúng tôi đã tập hợp các nội dung như trong điều khoản 3.",
  "sections": [
    {
      "heading": "1. Tính chất của sản phẩm",
      "paragraphs": [
        "Sản phẩm được bán là **thẻ giấc mơ (hình ảnh 1 tấm)** và **báo cáo giấc mơ mang thai (PDF)**, cả hai đều là nội dung kỹ thuật số được tạo ra ngay lập tức và gửi đi khi thanh toán được phê duyệt.",
        "**Dịch vụ không lưu giữ giấc mơ bạn đã viết hoặc tệp đã tạo.** Do đó, tệp đã tải xuống cần được người dùng tự bảo quản."
      ]
    },
    {
      "heading": "2. Hủy bỏ đơn hàng",
      "paragraphs": [
        "Tuân theo tiêu chí được quy định bởi Luật Thương mại điện tử."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu,** bạn có thể hủy bỏ bất cứ lúc nào và nhận hoàn tiền đầy đủ.",
        "**Sau khi tải xuống hoàn tất,** việc hủy bỏ đơn hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể khôi phục lại, điều này thuộc lý do hạn chế theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Thương mại điện tử. Chúng tôi thông báo trước về điều này trên màn hình thanh toán và nhận được sự đồng ý."
      ]
    },
    {
      "heading": "3. Trường hợp hoàn tiền đầy đủ",
      "paragraphs": [
        "Trong các trường hợp sau, chúng tôi sẽ xác nhận lý do và xử lý bằng cách cấp lại hoặc hoàn tiền đầy đủ."
      ],
      "bullets": [
        "Trường hợp hệ thống lỗi không tạo ra tệp.",
        "Trường hợp tệp đã tải xuống không mở được.",
        "Trường hợp số tiền thanh toán khác với đơn hàng.",
        "**Trường hợp người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp** — Người đó hoặc người đại diện hợp pháp có thể yêu cầu hủy bỏ."
      ]
    },
    {
      "heading": "4. Trường hợp không phải lý do hoàn tiền",
      "paragraphs": [],
      "bullets": [
        "**Sự không hài lòng với nội dung kết quả.** Kết quả giải mộng là tài liệu tham khảo từ góc độ giải thích truyền thống và chúng tôi đã thông báo về tính chất này trước khi thanh toán. Trường hợp không tìm thấy biểu tượng có sẵn trong giấc mơ dẫn đến kết quả ngắn gọn cũng thuộc trường hợp này — vì chúng tôi không tạo ra ý nghĩa không có thực.",
        "Yêu cầu cấp lại sau khi đã sử dụng hết 5 lần."
      ]
    },
    {
      "heading": "5. Phương thức tiếp nhận",
      "paragraphs": [
        "Vui lòng gửi yêu cầu hoàn tiền hoặc thắc mắc đến trung tâm khách hàng ({customerCenter}) hoặc qua email ({email}). Nếu bạn cung cấp số đơn hàng, việc xác nhận sẽ nhanh chóng hơn.",
        "Hoàn tiền sẽ được trả lại qua phương thức thanh toán mà bạn đã sử dụng, và tùy thuộc vào công ty thẻ hoặc công ty thanh toán, có thể mất từ 3 đến 7 ngày làm việc để phản ánh."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d3 = {
  "title": "Hướng dẫn giá cả",
  "intro": "Hướng dẫn về phạm vi dịch vụ miễn phí và giá của sản phẩm trả phí.",
  "sections": [
    {
      "heading": "1. Miễn phí",
      "paragraphs": [
        "**Tra cứu giấc mơ và xem kết quả là miễn phí.** Không cần đăng ký thành viên.",
        "Bạn có thể xem tất cả các biểu tượng tìm thấy trong giấc mơ, ý nghĩa của chúng và những gì các biểu tượng đó chỉ ra trên màn hình. Giấc mơ là điều xảy ra hàng ngày, vì vậy dịch vụ này không giới hạn số lần tra cứu."
      ]
    },
    {
      "heading": "2. Thẻ giấc mơ (trả phí)",
      "paragraphs": [
        "Thanh toán trong nước {priceCardDomestic} (bao gồm thuế giá trị gia tăng) · Thanh toán quốc tế {priceCardGlobal}",
        "Chúng tôi sẽ cung cấp kết quả trên màn hình dưới dạng **một hình ảnh duy nhất**. Đây là định dạng dễ dàng để giữ lại hoặc gửi đi, và **không phải là tài liệu PDF.**",
        "Bạn có thể tải lại tối đa **5 lần** với cùng một đơn hàng. Tuy nhiên, nếu bạn rời khỏi màn hình kết quả và các giá trị nhập vào bị mất, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ]
    },
    {
      "heading": "3. Báo cáo giấc mơ thai nhi PDF (trả phí)",
      "paragraphs": [
        "Thanh toán trong nước {priceConceptionDomestic} (bao gồm thuế giá trị gia tăng) · Thanh toán quốc tế {priceConceptionGlobal}",
        "Khi có các biểu tượng được coi là giấc mơ thai nhi theo truyền thống, chúng tôi sẽ tổng hợp ý nghĩa và bối cảnh của các biểu tượng đó trong một tài liệu PDF 4 trang. **Chúng tôi không xác định tình trạng mang thai hoặc giới tính của thai nhi.**",
        "Điều kiện cấp lại giống như thẻ giấc mơ."
      ]
    },
    {
      "heading": "4. Phương thức thanh toán",
      "paragraphs": [
        "**Trong nước** — Bạn có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán đơn giản (TossPay, KakaoPay, NaverPay, Payco, v.v.) thông qua Toss Payments.",
        "**Quốc tế** — Bạn có thể thanh toán qua PayPal thông qua PortOne.",
        "Số tiền thanh toán cuối cùng sẽ dựa trên số tiền hiển thị trên màn hình thanh toán."
      ]
    },
    {
      "heading": "5. Thay đổi giá",
      "paragraphs": [
        "Nếu có sự thay đổi giá, chúng tôi sẽ thông báo trên trang này trước. Giá đã thanh toán cho các đơn hàng đã hoàn tất sẽ không bị ảnh hưởng bởi giá đã thay đổi."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d4 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Dreams-Link không lưu trữ thông tin cần thiết cho việc giải mộng. Chính sách này mô tả những gì dịch vụ nhận, những gì không để lại và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Câu chuyện giấc mơ mà bạn viết ra để giải mộng, cảm giác khi tỉnh dậy, và việc có lặp lại giấc mơ đó hay không **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không được ghi lại trong cơ sở dữ liệu và cũng không được lưu trong tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào.",
        "Câu chuyện giấc mơ là giá trị riêng tư nhất mà dịch vụ này nhận. Vì vậy, chúng tôi không có chức năng xem lại kết quả trước đó (nhật ký giấc mơ) — chức năng đó chỉ có thể tồn tại nếu chúng tôi lưu giữ các bài viết mà bạn đã viết."
      ]
    },
    {
      "heading": "2. Thông tin trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được gửi đến máy chủ bởi trình duyệt. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được ghi lại trong hồ sơ truy cập máy chủ.",
        "Nếu bạn gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ là do người dùng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin được thu thập tự động",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người dùng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ sẽ được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường khác",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ màn hình và không được lưu trữ"
      ]
    },
    {
      "heading": "4. Cookie và quảng cáo",
      "paragraphs": [
        "Dịch vụ không sử dụng cookie để xác định hoặc theo dõi người dùng. Câu chuyện giấc mơ mà bạn đã viết không được chuyển cho các nhà quảng cáo.",
        "Dịch vụ này hiển thị quảng cáo thông qua Google AdSense. Trong quá trình này, các sự kiện sau sẽ xảy ra."
      ],
      "bullets": [
        "Các nhà cung cấp bên thứ ba, bao gồm Google, có thể lưu hoặc đọc cookie trong trình duyệt của người dùng.",
        "Google sử dụng cookie để hiển thị quảng cáo dựa trên lịch sử truy cập của nhiều trang web, bao gồm cả trang này.",
        "Người dùng có thể tắt quảng cáo tùy chỉnh trong cài đặt quảng cáo của Google (google.com/settings/ads). Ngay cả khi tắt, quảng cáo vẫn sẽ hiển thị, chỉ là mức độ liên quan đến người dùng sẽ giảm.",
        "Quảng cáo tùy chỉnh từ các nhà cung cấp bên thứ ba có thể được tắt một lần tại aboutads.info/choices.",
        "Có thể chặn cookie trong cài đặt trình duyệt.",
        "Đối với người dùng ở Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, trước tiên sẽ hỏi sự đồng ý về việc sử dụng cookie quảng cáo."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Hiện tại không có sản phẩm trả phí nào được bán, vì vậy cũng không có thông tin nào được lưu trữ liên quan đến thanh toán.",
        "Khi bắt đầu bán hàng, các mục dưới đây sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật. **Ngay cả lúc đó, giấc mơ mà bạn đã viết và tệp được tạo ra sẽ không được lưu trữ**, và chúng tôi cũng không nhận thông tin xác định người dùng như tên, thông tin liên lạc, địa chỉ."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ màn hình tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Thương mại Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, và hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm trước khi bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba.",
        "Chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider} để vận hành dịch vụ, và trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Khi bắt đầu bán sản phẩm trả phí, thanh toán trong nước sẽ được ủy thác cho Toss Payments, và thanh toán quốc tế sẽ được ủy thác cho PortOne (PayPal). Thông tin về phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, và dịch vụ không nhận thông tin này."
      ]
    },
    {
      "heading": "7. Quyền của người dùng",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa.",
        "Người dùng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
        "Nếu có bất kỳ câu hỏi nào liên quan đến việc sử dụng dịch vụ, vui lòng cho chúng tôi biết qua thông tin liên lạc dưới đây."
      ]
    },
    {
      "heading": "8. Thông tin cá nhân của trẻ em",
      "paragraphs": [
        "Dịch vụ này không nhắm đến trẻ em dưới 14 tuổi và không thu thập thông tin cá nhân từ trẻ em."
      ]
    },
    {
      "heading": "9. Người chịu trách nhiệm bảo vệ thông tin cá nhân",
      "paragraphs": [
        "Người chịu trách nhiệm bảo vệ: {privacyOfficer}",
        "Liên hệ: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Thay đổi chính sách",
      "paragraphs": [
        "Nếu có thay đổi trong chính sách này, ngày có hiệu lực và nội dung thay đổi sẽ được đăng trên trang này. Nếu có thay đổi thực sự trong nội dung xử lý như bắt đầu hiển thị quảng cáo hoặc bán sản phẩm trả phí, chúng tôi sẽ thông báo trước về sự thay đổi đó."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d5 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Dreams-Link không lưu trữ thông tin cần thiết cho việc giải mộng. Chính sách này giải thích những gì dịch vụ nhận, những gì không để lại và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Câu chuyện giấc mơ mà bạn viết ra để giải mộng, cảm giác khi tỉnh dậy, và việc có lặp lại giấc mơ đó hay không **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không được ghi vào cơ sở dữ liệu và cũng không được lưu trữ dưới dạng tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào.",
        "Câu chuyện giấc mơ là giá trị riêng tư nhất mà dịch vụ này nhận. Do đó, chúng tôi không có chức năng xem lại kết quả trước đó (nhật ký giấc mơ) — chức năng đó chỉ có thể tồn tại nếu chúng tôi lưu giữ các bài viết bạn đã viết."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được trình duyệt gửi đến máy chủ. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được ghi lại trong hồ sơ truy cập máy chủ.",
        "Nếu bạn gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ là do người dùng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin được thu thập tự động",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người dùng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ web được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ hiển thị và không được lưu trữ"
      ]
    },
    {
      "heading": "4. Cookie và quảng cáo",
      "paragraphs": [
        "Dịch vụ này không sử dụng cookie để theo dõi người dùng.",
        "Hiện tại, dịch vụ này không có quảng cáo. Nếu trong tương lai có quảng cáo, nhà cung cấp quảng cáo (ví dụ: Google) có thể sử dụng cookie để hiển thị quảng cáo. Khi đó, chúng tôi sẽ sửa đổi điều khoản này trước và làm rõ những gì thay đổi."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Khi thanh toán cho sản phẩm trả phí (thẻ giấc mơ, báo cáo giấc mơ mang thai), thông tin đơn hàng sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật.",
        "**Giấc mơ bạn đã viết và tệp được tạo ra sẽ không được lưu trữ ngay cả khi đã thanh toán.** Nguyên tắc ở mục 1 vẫn giữ nguyên bất kể có thanh toán hay không. Các mục được lưu trữ bao gồm như sau, không bao gồm thông tin nhận diện người dùng như tên, thông tin liên lạc, địa chỉ."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ hiển thị tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, và hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm trước khi bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ để xác định người dùng, vì vậy cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba. Việc xử lý thanh toán được ủy thác cho các nhà cung cấp dưới đây.",
        "Chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider} để vận hành dịch vụ, và trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Thanh toán trong nước được xử lý bởi Toss Payments, trong khi thanh toán quốc tế được xử lý qua PayPal thông qua PortOne. Thông tin về phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, và dịch vụ không nhận hoặc lưu trữ thông tin đó."
      ]
    },
    {
      "heading": "7. Quyền lợi của người dùng",
      "paragraphs": [
        "Vì giấc mơ bạn đã viết không được lưu trữ, không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa. Hồ sơ đơn hàng còn lại sau khi thanh toán phải được lưu giữ trong thời gian quy định bởi pháp luật, vì vậy trong thời gian đó không thể xóa, và sau khi hết thời gian sẽ bị tiêu hủy.",
        "Người dùng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
        "Nếu có bất kỳ câu hỏi nào liên quan đến việc sử dụng dịch vụ, vui lòng cho chúng tôi biết qua thông tin liên lạc dưới đây."
      ]
    },
    {
      "heading": "8. Thông tin cá nhân của trẻ em",
      "paragraphs": [
        "Dịch vụ này không nhắm đến trẻ em dưới 14 tuổi và không thu thập thông tin cá nhân từ trẻ em."
      ]
    },
    {
      "heading": "9. Người chịu trách nhiệm bảo vệ thông tin cá nhân",
      "paragraphs": [
        "Người chịu trách nhiệm bảo vệ: {privacyOfficer}",
        "Liên hệ: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Thay đổi chính sách",
      "paragraphs": [
        "Nếu có thay đổi trong chính sách này, ngày có hiệu lực và nội dung thay đổi sẽ được đăng trên trang này. Nếu có thay đổi thực sự trong nội dung xử lý như việc bắt đầu hiển thị quảng cáo hoặc bán sản phẩm trả phí, chúng tôi sẽ thông báo trước về sự thay đổi đó."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d6 = {
  "title": "Điều khoản sử dụng",
  "intro": "Điều khoản này quy định điều kiện sử dụng dịch vụ Dreams-Link (sau đây gọi là “dịch vụ”). Khi sử dụng dịch vụ, bạn được coi là đã đồng ý với điều khoản này.",
  "sections": [
    {
      "heading": "1. Tính chất của dịch vụ",
      "paragraphs": [
        "Dịch vụ tìm kiếm các biểu tượng trong giấc mơ mà người dùng đã viết và hiển thị ý nghĩa của các biểu tượng đó như tài liệu tham khảo. Chúng tôi sẽ nói rằng không thể tìm thấy các biểu tượng không có trong từ điển và không tạo ra ý nghĩa không có.",
        "Các biểu tượng và giải thích được cung cấp là **tài liệu tham khảo từ góc nhìn giải thích truyền thống, không phải là dự đoán về tương lai hay tư vấn y tế, tài chính, pháp lý.** Một giấc mơ tốt không đảm bảo điều gì sẽ xảy ra, và một giấc mơ xấu không có nghĩa là điều gì đó đã được định sẵn.",
        "**Kết quả liên quan đến giấc mơ mang thai không xác định tình trạng mang thai hay giới tính của thai nhi.** Chúng tôi chỉ thông báo về việc có biểu tượng được coi là giấc mơ mang thai theo truyền thống và bối cảnh của nó."
      ]
    },
    {
      "heading": "2. Phí sử dụng",
      "paragraphs": [
        "Việc tra cứu giấc mơ và xem kết quả là miễn phí và không cần đăng ký thành viên.",
        "Nhận kết quả dưới dạng thẻ giấc mơ (hình ảnh) hoặc báo cáo giấc mơ mang thai (PDF) là có phí. Giá cả và điều kiện sẽ được hiển thị ở mục 3 dưới đây và trên màn hình thanh toán."
      ]
    },
    {
      "heading": "3. Sản phẩm có phí và hoàn tiền",
      "paragraphs": [
        "Có **hai loại** sản phẩm có phí được bán. Bạn có thể sử dụng dịch vụ giải mộng miễn phí mà không cần thanh toán, và hai sản phẩm dưới đây sẽ được tạo ra dưới dạng có thể lưu giữ kết quả.",
        "**Thẻ giấc mơ** — Một tệp hình ảnh. Nó sẽ được tạo thành một tấm để bạn có thể giữ lại và chia sẻ biểu tượng và ý nghĩa truyền thống từ giấc mơ mà bạn đã có trong ngày. **Không phải là tài liệu (PDF).** Thanh toán trong nước {priceCardDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceCardGlobal}.",
        "**Báo cáo giấc mơ mang thai PDF** — 4 trang. Nó chứa ý nghĩa truyền thống của các biểu tượng và bối cảnh của chúng trong tài liệu. **Không xác định tình trạng mang thai** — chỉ thông báo rằng có biểu tượng được coi là giấc mơ mang thai theo truyền thống xuất hiện trong giấc mơ. Thanh toán trong nước {priceConceptionDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceConceptionGlobal}.",
        "Thanh toán trong nước có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán tiện lợi (Toss Payments, KakaoPay, NaverPay, Payco, v.v.) thông qua Toss Payments, và thanh toán quốc tế thông qua PayPal qua PortOne. Số tiền cuối cùng sẽ theo số tiền hiển thị trên màn hình thanh toán.",
        "**Dịch vụ không lưu trữ dữ liệu đầu vào của người dùng cũng như tệp PDF đã tạo.** Khi thanh toán được phê duyệt, tài liệu sẽ được tạo và gửi ngay lập tức mà không để lại gì trên máy chủ. Do đó, tệp đã tải xuống cần được người dùng tự lưu giữ.",
        "Trong trường hợp tải xuống bị ngừng hoặc tệp bị mất, bạn có thể tải xuống lại **tối đa 5 lần** với cùng một đơn hàng. Tuy nhiên, nếu dữ liệu đầu vào bị mất khi ra khỏi màn hình kết quả, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu sau khi thanh toán, bạn có thể hủy bất kỳ lúc nào và nhận lại toàn bộ tiền.**",
        "**Sau khi tải xuống hoàn tất, việc hủy đơn hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể khôi phục lại, điều này thuộc về lý do hạn chế hủy đơn hàng theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử.",
        "**Trong trường hợp tài liệu không được tạo do lỗi hệ thống, tệp không mở được hoặc số tiền thanh toán khác với đơn hàng,** sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền toàn bộ.",
        "**Phàn nàn về nội dung kết quả** không thuộc lý do hoàn tiền. Kết quả giải mộng là tài liệu tham khảo từ góc nhìn giải thích truyền thống và đã được thông báo về tính chất của nó trước khi thanh toán (mục 1 trên).",
        "Yêu cầu hoàn tiền sau khi đã sử dụng hết 5 lần cấp lại sẽ không thuộc lý do hoàn tiền.",
        "**Trong trường hợp người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp,** cá nhân đó hoặc người đại diện hợp pháp có thể hủy thanh toán. Vui lòng thông báo cho chúng tôi qua thông tin liên lạc dưới đây để được hoàn tiền."
      ]
    },
    {
      "heading": "4. Về kết quả giải mộng",
      "paragraphs": [
        "Các quy tắc tìm kiếm biểu tượng tuân theo từ điển công khai và quy trình đã được xác định, vì vậy nếu viết cùng một nội dung, sẽ luôn ra cùng một biểu tượng.",
        "Việc viết ngắn gọn sẽ làm giảm số lượng biểu tượng được tìm thấy. Không thể tìm thấy các biểu tượng không có trong từ điển, và trong trường hợp đó, kết quả sẽ để trống.",
        "Từ điển biểu tượng được tổ chức từ các tài liệu giải mộng truyền thống và truyền thuyết, và có thể có các cách giải thích khác nhau tùy theo khu vực và thời kỳ."
      ]
    },
    {
      "heading": "5. Trách nhiệm của người dùng",
      "paragraphs": [
        "Người dùng có thể viết giấc mơ của người khác, nhưng không được sử dụng kết quả đó để gây bất lợi cho người khác.",
        "Không sử dụng kết quả của dịch vụ làm cơ sở cho các quyết định ảnh hưởng đến quyền lợi hoặc lợi ích của con người như mang thai, sức khỏe, đầu tư, tuyển dụng, v.v. Dịch vụ không được tạo ra cho mục đích đó."
      ]
    },
    {
      "heading": "6. Hành vi bị cấm",
      "paragraphs": [
        "Các hành vi sau đây không được phép."
      ],
      "bullets": [
        "Hành vi gửi yêu cầu quá mức bằng công cụ tự động gây cản trở hoạt động của dịch vụ",
        "Hành vi trình bày kết quả của dịch vụ như là sự thật hoặc kết quả đánh giá của chuyên gia",
        "Hành vi sao chép hoặc chỉnh sửa dịch vụ để cung cấp dịch vụ tương tự"
      ]
    },
    {
      "heading": "7. Miễn trừ trách nhiệm",
      "paragraphs": [
        "Dịch vụ chỉ cung cấp tài liệu tham khảo và không chịu trách nhiệm về các quyết định và kết quả mà người dùng đưa ra dựa trên kết quả.",
        "Trong trường hợp dịch vụ bị ngừng do các lý do không thể kiểm soát như thiên tai, sự cố của nhà cung cấp hạ tầng, chúng tôi không chịu trách nhiệm về thiệt hại phát sinh."
      ]
    },
    {
      "heading": "8. Quyền sở hữu trí tuệ",
      "paragraphs": [
        "Quyền đối với màn hình, văn bản và các sản phẩm thực hiện quy tắc tính toán của dịch vụ thuộc về nhà điều hành. Người dùng có thể lưu trữ hoặc chia sẻ kết quả cho mục đích cá nhân."
      ]
    },
    {
      "heading": "9. Thay đổi điều khoản và luật áp dụng",
      "paragraphs": [
        "Trong trường hợp thay đổi điều khoản, chúng tôi sẽ đăng trên trang này cùng với ngày có hiệu lực.",
        "Điều khoản này áp dụng theo luật pháp Hàn Quốc, và các tranh chấp liên quan đến việc sử dụng dịch vụ sẽ tuân theo quy trình được quy định bởi các luật liên quan."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d7 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Dreams-Link không lưu trữ thông tin cần thiết cho việc giải mộng. Chính sách này giải thích những gì dịch vụ nhận, những gì không để lại và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Câu chuyện giấc mơ mà bạn viết ra để giải mộng, cảm giác khi tỉnh dậy, và việc có lặp lại giấc mơ đó hay không **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không được ghi vào cơ sở dữ liệu và cũng không được lưu trong tệp riêng. Vì không có việc đăng ký thành viên, nên các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào.",
        "Câu chuyện giấc mơ là giá trị riêng tư nhất mà dịch vụ này nhận. Do đó, chúng tôi không có chức năng xem lại kết quả trước đó (nhật ký giấc mơ) — chức năng đó chỉ có thể tồn tại nếu chúng tôi lưu giữ các bài viết bạn đã viết."
      ]
    },
    {
      "heading": "2. Thông tin trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được trình duyệt gửi đến máy chủ. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được ghi lại trong hồ sơ truy cập máy chủ.",
        "Nếu bạn gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ là do người dùng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin được thu thập tự động",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người dùng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ web được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường khác",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ màn hình và không được lưu trữ"
      ]
    },
    {
      "heading": "4. Cookie và quảng cáo",
      "paragraphs": [
        "Dịch vụ này không sử dụng cookie để xác định hoặc theo dõi người dùng. Câu chuyện giấc mơ mà bạn đã viết không được chuyển cho các nhà quảng cáo.",
        "Dịch vụ này hiển thị quảng cáo thông qua Google AdSense. Trong quá trình này, các sự kiện sau sẽ xảy ra."
      ],
      "bullets": [
        "Các nhà cung cấp bên thứ ba, bao gồm Google, có thể lưu trữ hoặc đọc cookie trên trình duyệt của người dùng.",
        "Google sử dụng cookie để hiển thị quảng cáo dựa trên lịch sử truy cập của nhiều trang web, bao gồm cả trang này.",
        "Người dùng có thể tắt quảng cáo tùy chỉnh trong cài đặt quảng cáo của Google (google.com/settings/ads). Ngay cả khi tắt, quảng cáo vẫn sẽ được hiển thị, chỉ là mức độ liên quan đến người dùng sẽ giảm.",
        "Quảng cáo tùy chỉnh từ các nhà cung cấp bên thứ ba có thể được tắt một lần tại aboutads.info/choices.",
        "Cũng có thể chặn cookie trong cài đặt trình duyệt.",
        "Đối với người dùng ở Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, chúng tôi sẽ hỏi ý kiến trước khi sử dụng cookie quảng cáo."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Khi thanh toán cho sản phẩm trả phí (thẻ giấc mơ, báo cáo giấc mơ thai kỳ), thông tin đơn hàng sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật.",
        "**Câu chuyện giấc mơ mà bạn đã viết và tệp được tạo ra sẽ không được lưu trữ ngay cả khi đã thanh toán.** Nguyên tắc ở mục 1 vẫn giữ nguyên bất kể có thanh toán hay không. Các mục được lưu trữ bao gồm các thông tin sau, không bao gồm thông tin nhận diện người dùng như tên, thông tin liên lạc, địa chỉ."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ màn hình tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Thương mại Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, và hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm trước khi bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Vì không lưu trữ thông tin cá nhân xác định người dùng, nên cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba. Việc xử lý thanh toán được ủy thác cho các nhà cung cấp dưới đây.",
        "Chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider} để vận hành dịch vụ, và trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Thanh toán trong nước được xử lý bởi Toss Payments, trong khi thanh toán quốc tế được xử lý qua PayPal thông qua PortOne. Thông tin phương thức thanh toán như số thẻ, số tài khoản được các nhà cung cấp này xử lý trực tiếp, và dịch vụ không nhận hoặc lưu trữ thông tin đó."
      ]
    },
    {
      "heading": "7. Quyền của người dùng",
      "paragraphs": [
        "Vì câu chuyện giấc mơ mà bạn đã viết không được lưu trữ, nên không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa. Hồ sơ đơn hàng còn lại từ việc thanh toán có nghĩa vụ phải được lưu giữ trong thời gian quy định bởi pháp luật, vì vậy không thể xóa trong thời gian đó, và sau khi hết thời gian, sẽ bị tiêu hủy.",
        "Người dùng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
        "Nếu có bất kỳ câu hỏi nào liên quan đến việc sử dụng dịch vụ, vui lòng cho chúng tôi biết qua thông tin liên lạc dưới đây."
      ]
    },
    {
      "heading": "8. Thông tin cá nhân của trẻ em",
      "paragraphs": [
        "Dịch vụ này không nhắm đến trẻ em dưới 14 tuổi và không thu thập thông tin cá nhân từ trẻ em."
      ]
    },
    {
      "heading": "9. Người chịu trách nhiệm bảo vệ thông tin cá nhân",
      "paragraphs": [
        "Người chịu trách nhiệm bảo vệ: {privacyOfficer}",
        "Liên hệ: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Thay đổi chính sách",
      "paragraphs": [
        "Nếu có thay đổi trong chính sách này, ngày có hiệu lực và nội dung thay đổi sẽ được đăng trên trang này. Nếu có thay đổi thực sự trong nội dung xử lý như bắt đầu hiển thị quảng cáo hoặc bán sản phẩm trả phí, chúng tôi sẽ thông báo trước về sự thay đổi đó."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

export const vi: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
