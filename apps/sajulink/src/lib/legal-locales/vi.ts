import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Saju-Link không lưu trữ thông tin cần thiết cho việc giải đoán saju (사주). Chính sách này giải thích những gì dịch vụ nhận, những gì không để lại, và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Ngày tháng năm sinh, giờ sinh, nơi sinh, giới tính, và tên gọi được nhập vào để giải đoán saju (사주) **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không được ghi lại trong cơ sở dữ liệu và cũng không được lưu trong tệp riêng. Do không có việc đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được trình duyệt gửi đến máy chủ. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được lưu lại trong hồ sơ truy cập máy chủ.",
        "Nếu gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ hay không là do người sử dụng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin được thu thập tự động",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người sử dụng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ web được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ hiển thị và không được lưu trữ"
      ]
    },
    {
      "heading": "4. Cookie và quảng cáo",
      "paragraphs": [
        "Dịch vụ này không sử dụng cookie để theo dõi người sử dụng.",
        "Hiện tại, dịch vụ này không có quảng cáo. Nếu trong tương lai có quảng cáo, nhà cung cấp quảng cáo (ví dụ: Google) có thể sử dụng cookie để hiển thị quảng cáo. Khi đó, điều khoản này sẽ được sửa đổi trước để làm rõ những gì thay đổi."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Hiện tại không có thông tin nào được lưu trữ liên quan đến thanh toán vì không có sản phẩm trả phí nào được bán.",
        "Khi bắt đầu bán hàng, các mục dưới đây sẽ được lưu trữ để xử lý thanh toán và bảo tồn hồ sơ giao dịch theo quy định pháp luật. **Ngay cả lúc đó, các giá trị nhập vào cho việc giải đoán saju (사주) và PDF được tạo ra sẽ không được lưu trữ**, và cũng không nhận thông tin nhận diện người sử dụng như tên, thông tin liên lạc, địa chỉ."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ hiển thị tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu trữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu trữ trong 5 năm, và hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu trữ trong 3 năm trước khi bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba.",
        "Để vận hành dịch vụ, chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider}, và trong quá trình này, các ghi chép truy cập nêu trên sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Khi bắt đầu bán sản phẩm trả phí, thanh toán trong nước sẽ được ủy thác cho Toss Payments, và thanh toán quốc tế sẽ được ủy thác cho PortOne (PayPal). Thông tin về phương thức thanh toán như số thẻ, số tài khoản sẽ được các doanh nghiệp này xử lý trực tiếp, và dịch vụ sẽ không nhận được thông tin đó."
      ]
    },
    {
      "heading": "7. Quyền của người sử dụng",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa.",
        "Người sử dụng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
        "Nếu có bất kỳ câu hỏi nào liên quan đến việc sử dụng dịch vụ, vui lòng cho chúng tôi biết qua thông tin liên hệ dưới đây."
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

const d1 = {
  "title": "Điều khoản sử dụng",
  "intro": "Điều khoản này quy định các điều kiện sử dụng dịch vụ Saju-Link (sau đây gọi là “Dịch vụ”). Khi sử dụng dịch vụ, bạn được coi là đã đồng ý với điều khoản này.",
  "sections": [
    {
      "heading": "1. Tính chất của dịch vụ",
      "paragraphs": [
        "Dịch vụ cung cấp thông tin dựa trên ngày tháng năm sinh và giờ sinh đã nhập, áp dụng các quy tắc của phong thủy truyền thống (saju) để hiển thị bản đồ saju và sức mạnh của ngũ hành, độ mạnh yếu của ngày sinh, cũng như các thông tin tham khảo về ngày hôm đó và vị trí giao nhau của bản đồ saju.",
        "Các điểm số và giải thích được đưa ra là **tài liệu tham khảo từ góc nhìn phong thủy truyền thống và không phải là dự đoán khoa học hay khẳng định về tương lai, sức khỏe, tài sản của cá nhân.** Điểm số thấp không có nghĩa là ngày hôm đó xấu, và điểm số cao cũng không đảm bảo điều gì.",
        "**Các câu giải thích trong báo cáo trả phí được viết bởi AI tạo sinh.** Tuy nhiên, tất cả các số liệu như điểm số, can chi, sức mạnh ngũ hành đều được tính toán bởi engine quy tắc của dịch vụ, và AI không thay đổi hoặc tạo ra các giá trị đó. Trong trường hợp không thể tạo ra giải thích, mô tả được viết bằng giá trị đã được engine tính toán sẽ được đưa vào cùng vị trí, và số trang của tài liệu cùng các mục được ghi như ở điều 3 dưới đây."
      ],
      "bullets": []
    },
    {
      "heading": "2. Phí sử dụng",
      "paragraphs": [
        "Hiện tại, dịch vụ được cung cấp hoàn toàn miễn phí và không cần đăng ký thành viên.",
        "Khi bắt đầu bán sản phẩm trả phí (hai loại báo cáo PDF), các điều kiện ở điều 3 dưới đây sẽ được áp dụng. Điều khoản này sẽ được thông báo lại trước khi bắt đầu bán hàng."
      ],
      "bullets": []
    },
    {
      "heading": "3. Sản phẩm trả phí và hoàn tiền",
      "paragraphs": [
        "Sản phẩm trả phí được bán là **hai loại báo cáo PDF**. Cả hai đều tạo ra tài liệu từ kết quả trên màn hình và có thêm nội dung không có trên màn hình.",
        "**Báo cáo đọc saju PDF (A4 5 trang)** — Bao gồm tính cách bẩm sinh, điểm mạnh, những điều cần chú ý, tám ký tự của bản đồ saju, sức mạnh ngũ hành và độ mạnh yếu của ngày sinh, năng lượng cần thiết hiện tại, vận mệnh hôm nay và bốn lĩnh vực trong cuộc sống (tài chính, tình yêu, nghề nghiệp, sức khỏe). Thanh toán trong nước {priceDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceGlobal}.",
        "**Báo cáo cao cấp PDF (A4 7 trang)** — Thêm hai trang vào báo cáo tổng vận 5 trang. Bao gồm mười thần của bốn cột và cách mà các yếu tố mùa đặt vào từng vị trí, tổng vận của năm nay, điều chỉnh điểm số hôm nay theo từng mục, và thông tin điều chỉnh giờ sinh. Thanh toán trong nước {priceAffinityDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceAffinityGlobal}.",
        "Thanh toán trong nước có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán đơn giản (TossPay, KakaoPay, NaverPay, Payco, v.v.) thông qua Toss Payments, và thanh toán quốc tế thông qua PayPal qua PortOne. Số tiền cuối cùng sẽ theo số tiền hiển thị trên màn hình thanh toán.",
        "**Dịch vụ không lưu trữ thông tin đầu vào của người dùng cũng như tệp PDF đã tạo.** Khi thanh toán được phê duyệt, tài liệu sẽ được tạo và gửi ngay lập tức mà không để lại gì trên máy chủ. Do đó, tệp đã tải xuống phải được người dùng tự bảo quản.",
        "Trong trường hợp tải xuống bị ngừng hoặc tệp bị mất, bạn có thể tải xuống lại **tối đa 5 lần** với cùng một đơn hàng. Tuy nhiên, nếu thông tin đầu vào bị mất khi ra khỏi màn hình kết quả, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu sau khi thanh toán,** bạn có thể hủy bất cứ lúc nào và nhận lại toàn bộ tiền.",
        "**Sau khi tải xuống hoàn tất,** việc hủy đơn hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể phục hồi, và điều này thuộc lý do hạn chế hủy đơn hàng theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử.",
        "**Trong trường hợp tài liệu không được tạo do lỗi hệ thống, tệp không mở được, hoặc số tiền thanh toán khác với đơn hàng,** sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền toàn bộ.",
        "**Phàn nàn về nội dung kết quả** không thuộc lý do hoàn tiền. Giải thích saju là tài liệu tham khảo từ góc nhìn phong thủy truyền thống và đã được thông báo về tính chất của nó trước khi thanh toán (điều 1 trên).",
        "Yêu cầu cấp lại sau khi đã sử dụng hết 5 lần không thuộc lý do hoàn tiền.",
        "**Trong trường hợp người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp,** bản thân hoặc người đại diện hợp pháp có thể hủy thanh toán đó. Vui lòng thông báo cho chúng tôi qua thông tin liên lạc dưới đây để được hoàn tiền."
      ]
    },
    {
      "heading": "4. Về kết quả tính toán",
      "paragraphs": [
        "Tất cả các điểm số được tính toán theo quy tắc công khai, vì vậy nếu nhập cùng một giá trị, bạn sẽ luôn nhận được cùng một kết quả.",
        "Nếu không nhập giờ sinh, kết quả sẽ được tính toán mà không có giờ cột (時柱), vì vậy có thể có sự khác biệt. Việc chọn chính xác nơi sinh sẽ giúp tính toán giờ cột chính xác hơn.",
        "Việc tính toán lịch vạn niên sử dụng thư viện tính toán công khai và có thể có sự khác biệt trong kết quả do cách xử lý tiết khí và múi giờ."
      ]
    },
    {
      "heading": "5. Trách nhiệm của người sử dụng",
      "paragraphs": [
        "Người sử dụng có thể nhập ngày tháng năm sinh của người khác, nhưng không được sử dụng kết quả đó để gây bất lợi cho người khác.",
        "Không sử dụng kết quả dịch vụ làm cơ sở cho các quyết định ảnh hưởng đến quyền lợi của người khác như kết hôn, ly hôn, tuyển dụng, giao dịch, v.v. Dịch vụ không được tạo ra cho mục đích đó."
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
        "Dịch vụ chỉ cung cấp tài liệu tham khảo và không chịu trách nhiệm về các quyết định và kết quả mà người sử dụng đưa ra dựa trên kết quả đó.",
        "Trong trường hợp dịch vụ bị ngừng do các lý do không thể kiểm soát như thiên tai, sự cố của nhà cung cấp hạ tầng, chúng tôi không chịu trách nhiệm về thiệt hại phát sinh."
      ]
    },
    {
      "heading": "8. Quyền sở hữu trí tuệ",
      "paragraphs": [
        "Quyền đối với màn hình, văn bản và các sản phẩm thực hiện quy tắc tính toán của dịch vụ thuộc về nhà điều hành. Người sử dụng có thể lưu trữ hoặc chia sẻ kết quả cho mục đích cá nhân."
      ]
    },
    {
      "heading": "9. Thay đổi điều khoản và luật áp dụng",
      "paragraphs": [
        "Trong trường hợp thay đổi điều khoản, chúng tôi sẽ đăng tải trên trang này cùng với ngày có hiệu lực.",
        "Điều khoản này áp dụng theo luật pháp Hàn Quốc, và các tranh chấp liên quan đến việc sử dụng dịch vụ sẽ tuân theo quy trình quy định bởi các văn bản pháp luật liên quan."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d2 = {
  "title": "Chính sách hoàn tiền và hủy bỏ",
  "intro": "Tiêu chí hủy bỏ và hoàn tiền cho báo cáo cuộc sống saju (사주) PDF. Chúng tôi đã tập hợp các nội dung tương tự như điều khoản 3.",
  "sections": [
    {
      "heading": "1. Tính chất của sản phẩm",
      "paragraphs": [
        "Sản phẩm được bán là **báo cáo cuộc sống saju (사주) PDF (A4 5 trang)** và **báo cáo cao cấp saju (사주) PDF (A4 7 trang)**, cả hai đều là nội dung kỹ thuật số được tạo ra ngay lập tức và gửi ngay khi thanh toán được phê duyệt.",
        "**Dịch vụ không lưu trữ dữ liệu đầu vào của người dùng cũng như tệp PDF đã tạo.** Do đó, tệp đã tải xuống cần được người dùng tự bảo quản."
      ]
    },
    {
      "heading": "2. Hủy bỏ đơn hàng",
      "paragraphs": [
        "Tuân theo tiêu chí được quy định bởi Luật Thương mại điện tử."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu,** có thể hủy bỏ bất cứ lúc nào và nhận hoàn tiền toàn bộ.",
        "**Sau khi tải xuống hoàn tất,** việc hủy bỏ đơn hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể phục hồi, thuộc trường hợp hạn chế theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Thương mại điện tử. Thông tin này sẽ được thông báo trước trên màn hình thanh toán và sự đồng ý sẽ được thu thập."
      ]
    },
    {
      "heading": "3. Trường hợp hoàn tiền toàn bộ",
      "paragraphs": [
        "Trong các trường hợp sau, sẽ xác minh lý do và xử lý bằng cách cấp lại hoặc hoàn tiền toàn bộ."
      ],
      "bullets": [
        "Trường hợp tài liệu không được tạo ra do lỗi hệ thống",
        "Trường hợp tệp đã tải xuống không mở được",
        "Trường hợp số tiền thanh toán khác với đơn hàng",
        "**Trường hợp người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp** — Người đó hoặc người đại diện hợp pháp có thể yêu cầu hủy bỏ."
      ]
    },
    {
      "heading": "4. Trường hợp không phải lý do hoàn tiền",
      "paragraphs": [],
      "bullets": [
        "**Sự không hài lòng về nội dung kết quả.** Giải thích saju (사주) là tài liệu tham khảo từ góc độ lý thuyết cổ truyền và đã được thông báo trước khi thanh toán.",
        "Yêu cầu cấp lại sau khi đã sử dụng hết 5 lần."
      ]
    },
    {
      "heading": "5. Phương thức tiếp nhận",
      "paragraphs": [
        "Vui lòng gửi yêu cầu hoàn tiền hoặc thắc mắc đến trung tâm khách hàng ({customerCenter}) hoặc qua email ({email}). Nếu bạn cung cấp số đơn hàng, việc xác minh sẽ nhanh chóng hơn.",
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
        "**Việc giải đoán saju (사주) và xem vận mệnh hôm nay là miễn phí.** Không cần đăng ký thành viên.",
        "Bạn có thể xem tất cả tám ký tự của saju nguyên quốc, sức mạnh của năm yếu tố, độ mạnh yếu của ngày sinh và năng lượng cần thiết hiện tại, điểm số và cấp độ vận mệnh hôm nay, cũng như điểm số của bốn lĩnh vực trong cuộc sống trên màn hình."
      ]
    },
    {
      "heading": "2. Báo cáo đọc saju tổng vận mệnh PDF (trả phí)",
      "paragraphs": [
        "Thanh toán trong nước {priceDomestic} (bao gồm thuế giá trị gia tăng) · Thanh toán quốc tế {priceGlobal}",
        "Chúng tôi sẽ tạo một tài liệu PDF dài **5 trang A4** từ kết quả trên màn hình. Tài liệu sẽ bao gồm bìa và tóm tắt, xu hướng và điểm mạnh bẩm sinh, những điểm cần chú ý, sức mạnh và độ mạnh yếu của nguyên quốc và năm yếu tố, vận mệnh hôm nay, và bốn lĩnh vực trong cuộc sống được gộp vào một tài liệu.",
        "Bạn có thể tải lại cùng một đơn hàng **tối đa 5 lần**. Tuy nhiên, nếu bạn thoát khỏi màn hình kết quả và các giá trị đầu vào bị mất, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ]
    },
    {
      "heading": "3. Báo cáo đọc saju cao cấp tổng vận mệnh PDF (trả phí)",
      "paragraphs": [
        "Thanh toán trong nước {priceAffinityDomestic} (bao gồm thuế giá trị gia tăng) · Thanh toán quốc tế {priceAffinityGlobal}",
        "Tổng vận mệnh dài **7 trang A4**, bao gồm **hai trang bổ sung**. Các thông tin bổ sung bao gồm mười thần của bốn cột và các số liệu liên quan đến vận mệnh năm nay và điểm số hôm nay theo từng mục, cùng với các điều chỉnh theo giờ sinh. Đây là các số liệu không hiển thị trên màn hình.",
        "Điều kiện cấp lại giống như báo cáo tổng vận mệnh."
      ]
    },
    {
      "heading": "4. Phương thức thanh toán",
      "paragraphs": [
        "**Trong nước** — Bạn có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán đơn giản (Toss Payments, KakaoPay, NaverPay, Payco, v.v.) thông qua Toss Payments.",
        "**Quốc tế** — Bạn có thể thanh toán qua PayPal thông qua PortOne.",
        "Số tiền thanh toán cuối cùng sẽ dựa trên số tiền hiển thị trên màn hình thanh toán."
      ]
    },
    {
      "heading": "5. Thay đổi giá",
      "paragraphs": [
        "Nếu có sự thay đổi giá, chúng tôi sẽ công bố trên trang này trước tiên. Giá đã thanh toán cho các đơn hàng đã hoàn tất sẽ không bị ảnh hưởng bởi giá đã thay đổi."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d4 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Saju-Link không lưu trữ thông tin cần thiết cho việc giải đoán saju. Chính sách này giải thích những gì dịch vụ nhận, những gì không để lại, và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Ngày tháng năm sinh, giờ sinh, nơi sinh, giới tính, và tên gọi được nhập vào để giải đoán saju **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không ghi vào cơ sở dữ liệu và cũng không lưu lại dưới dạng tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được gửi đến máy chủ bởi trình duyệt. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được lưu lại trong hồ sơ truy cập máy chủ.",
        "Nếu gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ hay không là do người sử dụng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin được thu thập tự động",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người sử dụng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ sẽ được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ hiển thị và không được lưu trữ"
      ]
    },
    {
      "heading": "4. Cookie và quảng cáo",
      "paragraphs": [
        "Dịch vụ không sử dụng cookie để xác định hoặc theo dõi người sử dụng. Thông tin nhập vào trong việc giải đoán saju không được chuyển cho các nhà quảng cáo.",
        "Dịch vụ này hiển thị quảng cáo thông qua Google AdSense. Trong quá trình này, các sự kiện sau sẽ xảy ra."
      ],
      "bullets": [
        "Các nhà cung cấp bên thứ ba, bao gồm Google, có thể lưu trữ hoặc đọc cookie trên trình duyệt của người sử dụng.",
        "Google sử dụng cookie để hiển thị quảng cáo dựa trên lịch sử truy cập của nhiều trang web, bao gồm cả trang này.",
        "Người sử dụng có thể tắt quảng cáo tùy chỉnh trong cài đặt quảng cáo của Google (google.com/settings/ads). Ngay cả khi tắt, quảng cáo vẫn sẽ hiển thị, nhưng mức độ liên quan đến người sử dụng sẽ giảm.",
        "Quảng cáo tùy chỉnh từ các nhà cung cấp bên thứ ba có thể được tắt một lần tại aboutads.info/choices.",
        "Cũng có thể chặn cookie trong cài đặt trình duyệt.",
        "Đối với người sử dụng tại Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, trước tiên sẽ hỏi sự đồng ý về việc sử dụng cookie quảng cáo."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Hiện tại không bán sản phẩm trả phí, vì vậy không có thông tin nào được lưu trữ liên quan đến thanh toán.",
        "Khi bắt đầu bán hàng, các mục dưới đây sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật. **Ngay cả lúc đó, các giá trị nhập vào trong việc giải đoán saju và PDF được tạo ra sẽ không được lưu trữ**, và cũng không nhận thông tin nhận diện như tên, liên lạc, địa chỉ."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ hiển thị tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Thương mại Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, và hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm trước khi bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba.",
        "Để vận hành dịch vụ, chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider}, và trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Khi bắt đầu bán sản phẩm trả phí, thanh toán trong nước sẽ được ủy thác cho Toss Payments, và thanh toán quốc tế sẽ được ủy thác cho PortOne (PayPal). Thông tin về phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, và dịch vụ không nhận thông tin này."
      ]
    },
    {
      "heading": "7. Quyền của người sử dụng",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa.",
        "Người sử dụng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
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
  "intro": "Saju-Link không lưu trữ thông tin cần thiết cho việc giải đoán saju (사주). Chính sách này giải thích dịch vụ nhận được gì, không để lại gì và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không lưu trữ",
      "paragraphs": [
        "Ngày tháng năm sinh, giờ sinh, nơi sinh, giới tính, tên gọi được nhập vào saju (사주) không **được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không ghi vào cơ sở dữ liệu và cũng không lưu lại dưới dạng tệp riêng. Không có việc đăng ký thành viên, do đó các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được gửi đến máy chủ bởi trình duyệt. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được lưu lại trong hồ sơ truy cập máy chủ.",
        "Nếu gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ hay không là do người sử dụng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin tự động thu thập",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người sử dụng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ web được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ màn hình và không được lưu trữ"
      ]
    },
    {
      "heading": "4. Cookie và quảng cáo",
      "paragraphs": [
        "Dịch vụ không sử dụng cookie để theo dõi người sử dụng.",
        "Hiện tại, dịch vụ này không có quảng cáo. Nếu trong tương lai có quảng cáo, nhà cung cấp quảng cáo (ví dụ: Google) có thể sử dụng cookie để hiển thị quảng cáo. Khi đó, điều khoản này sẽ được sửa đổi trước để làm rõ những gì thay đổi."
      ]
    },
    {
      "heading": "5. Thông tin lưu trữ khi thanh toán",
      "paragraphs": [
        "Khi thanh toán cho sản phẩm trả phí (báo cáo PDF), thông tin đơn hàng sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật.",
        "**Các giá trị nhập vào trong saju (사주) và PDF được tạo ra sẽ không được lưu trữ ngay cả khi đã thanh toán.** Nguyên tắc ở mục 1 vẫn giữ nguyên bất kể có thanh toán hay không. Các mục lưu trữ bao gồm, nhưng không giới hạn, thông tin nhận diện người sử dụng như tên, thông tin liên lạc, địa chỉ sẽ không được bao gồm."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ màn hình tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm và sau đó sẽ bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không lưu trữ thông tin cá nhân nhận diện người sử dụng, do đó cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba. Việc xử lý thanh toán được ủy thác cho các nhà cung cấp dưới đây.",
        "Sử dụng hạ tầng lưu trữ của {hostingProvider} để vận hành dịch vụ, trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Thanh toán trong nước được xử lý bởi Toss Payments, thanh toán quốc tế được xử lý qua PayPal thông qua PortOne. Thông tin phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, dịch vụ không nhận và cũng không lưu trữ."
      ]
    },
    {
      "heading": "7. Quyền của người sử dụng",
      "paragraphs": [
        "Không lưu trữ giá trị nhập vào trong saju (사주), do đó không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa. Hồ sơ đơn hàng còn lại sau khi thanh toán có nghĩa vụ phải được lưu giữ trong thời gian quy định bởi pháp luật, vì vậy không thể xóa trong thời gian này, và sau khi hết thời gian sẽ bị tiêu hủy.",
        "Người sử dụng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
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

const d6 = {
  "title": "Điều khoản sử dụng",
  "intro": "Điều khoản này quy định các điều kiện sử dụng dịch vụ Saju-Link (sau đây gọi là “Dịch vụ”). Khi sử dụng dịch vụ, bạn được coi là đã đồng ý với điều khoản này.",
  "sections": [
    {
      "heading": "1. Tính chất của dịch vụ",
      "paragraphs": [
        "Dịch vụ cung cấp thông tin dựa trên ngày tháng năm sinh và giờ sinh đã nhập, áp dụng các quy tắc của phong thủy truyền thống (saju) để hiển thị bản đồ saju và sức mạnh của ngũ hành, độ mạnh yếu của ngày sinh, cũng như thông tin tham khảo về ngày hôm đó và vị trí giao nhau của bản đồ saju.",
        "Các điểm số và giải thích được đưa ra là **tài liệu tham khảo từ góc nhìn phong thủy truyền thống, không phải là dự đoán khoa học hay khẳng định về tương lai, sức khỏe, tài sản của cá nhân.** Điểm số thấp không có nghĩa là ngày hôm đó xấu, và điểm số cao cũng không đảm bảo điều gì.",
        "**Các câu giải thích trong báo cáo trả phí được viết bởi AI tạo sinh.** Tuy nhiên, tất cả các số liệu như điểm số, can chi, sức mạnh ngũ hành đều được tính toán bởi động cơ quy tắc của dịch vụ, và AI không thay đổi hay tạo ra các giá trị đó. Trong trường hợp không thể tạo ra giải thích, mô tả dựa trên giá trị đã được tính toán bởi động cơ sẽ được đưa vào cùng vị trí, và số trang của tài liệu cùng các mục được ghi như dưới đây tại điều 3."
      ]
    },
    {
      "heading": "2. Phí sử dụng",
      "paragraphs": [
        "Việc giải đoán saju và xem vận mệnh hôm nay là miễn phí và không cần đăng ký thành viên.",
        "Nhận kết quả dưới dạng báo cáo PDF là có phí. Giá cả và điều kiện sẽ được hiển thị dưới đây tại điều 3 và trên màn hình thanh toán."
      ]
    },
    {
      "heading": "3. Sản phẩm trả phí và hoàn tiền",
      "paragraphs": [
        "Các sản phẩm trả phí được bán là **hai loại báo cáo PDF.** Cả hai đều tạo ra tài liệu từ kết quả trên màn hình và bao gồm nội dung không có trên màn hình.",
        "**Báo cáo đọc saju PDF (A4 5 trang)** — Bao gồm thiên hướng bẩm sinh, điểm mạnh, điểm cần chú ý, tám ký tự của bản đồ saju, sức mạnh ngũ hành và độ mạnh yếu của ngày sinh, năng lượng cần thiết hiện tại, vận mệnh hôm nay và bốn lĩnh vực trong cuộc sống (tài chính, tình yêu, nghề nghiệp, sức khỏe). Thanh toán trong nước {priceDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceGlobal}.",
        "**Báo cáo cao cấp PDF (A4 7 trang)** — Thêm hai trang vào báo cáo tổng vận 5 trang. Bao gồm mười thần của bốn cột và cách mà các yếu tố mùa đặt vào từng vị trí, tổng vận của năm nay, điều chỉnh điểm số hôm nay theo từng mục, và thông tin điều chỉnh giờ sinh. Thanh toán trong nước {priceAffinityDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceAffinityGlobal}.",
        "Thanh toán trong nước có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán nhanh (Toss Pay, Kakao Pay, Naver Pay, Payco, v.v.) thông qua Toss Payments, trong khi thanh toán quốc tế sử dụng PayPal qua PortOne. Số tiền cuối cùng sẽ theo số tiền hiển thị trên màn hình thanh toán.",
        "**Dịch vụ không lưu trữ thông tin đầu vào của người dùng cũng như tệp PDF đã tạo.** Khi thanh toán được phê duyệt, tài liệu sẽ được tạo và gửi ngay lập tức mà không lưu lại bất kỳ thứ gì trên máy chủ. Do đó, tệp đã tải xuống cần được người dùng tự bảo quản.",
        "Trong trường hợp tải xuống bị ngừng hoặc tệp bị mất, bạn có thể tải xuống lại **tối đa 5 lần** với cùng một đơn hàng. Tuy nhiên, nếu thông tin đầu vào bị mất khi ra khỏi màn hình kết quả, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu sau khi thanh toán,** bạn có thể hủy bất cứ lúc nào và nhận hoàn tiền toàn bộ.",
        "**Sau khi tải xuống hoàn tất,** việc hủy đơn hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể phục hồi, và điều này thuộc lý do hạn chế hủy đơn hàng theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử.",
        "**Trong trường hợp tài liệu không được tạo do lỗi hệ thống, tệp không mở được, hoặc số tiền thanh toán khác với đơn hàng,** sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền toàn bộ.",
        "**Phàn nàn về nội dung kết quả** không thuộc lý do hoàn tiền. Việc giải đoán saju là tài liệu tham khảo từ góc nhìn phong thủy truyền thống và đã được thông báo về tính chất này trước khi thanh toán (xem điều 1 trên).",
        "Yêu cầu cấp lại sau khi đã sử dụng hết 5 lần không thuộc lý do hoàn tiền.",
        "**Trường hợp người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp,** cá nhân đó hoặc người đại diện hợp pháp có thể hủy thanh toán đó. Vui lòng thông báo cho chúng tôi qua thông tin liên lạc dưới đây để được hoàn tiền."
      ]
    },
    {
      "heading": "4. Về kết quả tính toán",
      "paragraphs": [
        "Tất cả các điểm số được tính toán theo quy tắc công khai, vì vậy nếu nhập cùng một giá trị, kết quả sẽ luôn giống nhau.",
        "Nếu không nhập giờ sinh, kết quả sẽ được tính toán mà không có cột giờ (時柱), do đó có thể có sự khác biệt. Việc chọn chính xác nơi sinh sẽ giúp tính toán cột giờ chính xác hơn.",
        "Việc tính toán vận mệnh sử dụng thư viện tính toán công khai, và có thể có sự khác biệt về vận mệnh và kết quả tùy thuộc vào cách xử lý tiết khí và múi giờ."
      ]
    },
    {
      "heading": "5. Trách nhiệm của người dùng",
      "paragraphs": [
        "Người dùng có thể nhập ngày tháng năm sinh của người khác, nhưng không được sử dụng kết quả đó để gây bất lợi cho người khác.",
        "Không sử dụng kết quả của dịch vụ làm cơ sở cho các quyết định ảnh hưởng đến quyền lợi của người khác như kết hôn, ly hôn, tuyển dụng, giao dịch, v.v. Dịch vụ không được tạo ra cho mục đích đó."
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
        "Sao chép hoặc chỉnh sửa dịch vụ để cung cấp dịch vụ tương tự"
      ]
    },
    {
      "heading": "7. Miễn trừ trách nhiệm",
      "paragraphs": [
        "Dịch vụ chỉ cung cấp tài liệu tham khảo và không chịu trách nhiệm về các quyết định và kết quả mà người dùng đưa ra dựa trên kết quả.",
        "Trong trường hợp dịch vụ bị gián đoạn do các lý do không thể kiểm soát như thiên tai, sự cố của nhà cung cấp hạ tầng, dịch vụ không chịu trách nhiệm về thiệt hại phát sinh."
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
        "Trong trường hợp thay đổi điều khoản, sẽ được đăng trên trang này cùng với ngày có hiệu lực.",
        "Điều khoản này áp dụng theo luật pháp Hàn Quốc, và các tranh chấp liên quan đến việc sử dụng dịch vụ sẽ tuân theo quy trình quy định bởi các luật liên quan."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d7 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Saju-Link không lưu trữ thông tin cần thiết cho việc giải đoán saju. Chính sách này giải thích dịch vụ nhận được gì, không để lại gì và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Ngày tháng năm sinh, giờ sinh, nơi sinh, giới tính, tên gọi được nhập vào để giải đoán saju **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không được ghi vào cơ sở dữ liệu và cũng không được lưu trong tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # sẽ không được trình duyệt gửi đến máy chủ. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được lưu lại trong hồ sơ truy cập máy chủ.",
        "Nếu gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ là do người dùng quyết định."
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
        "Dịch vụ không sử dụng cookie để xác định hoặc theo dõi người dùng. Thông tin nhập vào để giải đoán saju không được chuyển cho các nhà quảng cáo.",
        "Dịch vụ này hiển thị quảng cáo thông qua Google AdSense. Trong quá trình này, các sự kiện sau sẽ xảy ra."
      ],
      "bullets": [
        "Các nhà cung cấp bên thứ ba, bao gồm Google, có thể lưu trữ hoặc đọc cookie trên trình duyệt của người dùng.",
        "Google sử dụng cookie để hiển thị quảng cáo dựa trên lịch sử truy cập của người dùng trên trang web này và nhiều trang khác.",
        "Người dùng có thể tắt quảng cáo tùy chỉnh trong cài đặt quảng cáo của Google (google.com/settings/ads). Ngay cả khi tắt, quảng cáo vẫn sẽ được hiển thị, nhưng mức độ liên quan đến người dùng sẽ giảm.",
        "Quảng cáo tùy chỉnh từ các nhà cung cấp bên thứ ba có thể được tắt một lần tại aboutads.info/choices.",
        "Có thể chặn cookie trong cài đặt trình duyệt.",
        "Người dùng ở Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ sẽ được hỏi xin ý kiến trước khi sử dụng cookie quảng cáo."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Khi thanh toán cho sản phẩm trả phí (báo cáo PDF), thông tin đơn hàng sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật.",
        "**Các giá trị nhập vào để giải đoán saju và PDF được tạo ra sẽ không được lưu trữ ngay cả khi đã thanh toán.** Nguyên tắc ở mục 1 vẫn giữ nguyên bất kể có thanh toán hay không. Các mục được lưu trữ bao gồm, nhưng không giới hạn, thông tin nhận dạng người dùng như tên, thông tin liên lạc, địa chỉ."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, hủy bỏ)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ màn hình tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Thương mại Điện tử, hồ sơ về thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm và sau đó sẽ bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ để xác định người dùng, vì vậy cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba. Việc xử lý thanh toán được ủy thác cho các nhà cung cấp dưới đây.",
        "Chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider} để vận hành dịch vụ, và trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Thanh toán trong nước được xử lý bởi Toss Payments, trong khi thanh toán quốc tế được xử lý thông qua PayPal của PortOne. Thông tin phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, và dịch vụ không nhận hoặc lưu trữ thông tin đó."
      ]
    },
    {
      "heading": "7. Quyền của người dùng",
      "paragraphs": [
        "Do không lưu trữ các giá trị nhập vào để giải đoán saju, không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa. Hồ sơ đơn hàng còn lại sau khi thanh toán phải được lưu giữ theo thời gian quy định của pháp luật, vì vậy không thể xóa trong thời gian đó, và sẽ bị tiêu hủy sau khi hết thời gian.",
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
