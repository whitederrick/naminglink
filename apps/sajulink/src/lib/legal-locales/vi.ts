import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Chính sách xử lý thông tin cá nhân",
  "intro": "Saju-Link không lưu trữ thông tin cần thiết cho việc giải đoán saju (사주). Chính sách này giải thích những gì dịch vụ nhận, những gì không để lại và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Ngày tháng năm sinh, giờ sinh, nơi sinh, giới tính, tên gọi được nhập vào saju (사주) không **được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không ghi vào cơ sở dữ liệu và cũng không lưu lại dưới dạng tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào."
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
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Hiện tại không bán sản phẩm trả phí, vì vậy không có thông tin nào liên quan đến thanh toán được lưu trữ.",
        "Khi bắt đầu bán hàng, các mục dưới đây sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật. **Ngay cả lúc đó, các giá trị nhập vào cho saju (사주) và PDF được tạo ra sẽ không được lưu trữ**, và không nhận thông tin nhận diện như tên, số điện thoại, địa chỉ."
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
        "Để vận hành dịch vụ, chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider}, và trong quá trình này, các ghi chép truy cập nêu trên sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Khi bắt đầu bán sản phẩm trả phí, thanh toán trong nước sẽ được ủy thác cho Toss Payments, và thanh toán quốc tế sẽ được ủy thác cho PortOne (PayPal). Thông tin về phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, và dịch vụ sẽ không nhận được thông tin này."
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
        "Nếu có thay đổi chính sách này, ngày có hiệu lực và nội dung thay đổi sẽ được đăng trên trang này. Nếu có thay đổi thực sự trong nội dung xử lý như việc bắt đầu hiển thị quảng cáo hoặc bán sản phẩm trả phí, chúng tôi sẽ thông báo trước về sự thay đổi đó."
      ]
    }
  ],
  "effectiveLabel": "Ngày có hiệu lực"
};

const d1 = {
  "title": "Điều khoản sử dụng",
  "intro": "Điều khoản này quy định các điều kiện sử dụng dịch vụ Saju-Link (sau đây gọi là \"Dịch vụ\"). Việc sử dụng dịch vụ được coi là bạn đã đồng ý với điều khoản này.",
  "effectiveLabel": "Ngày có hiệu lực",
  "sections": [
    {
      "heading": "1. Tính chất của dịch vụ",
      "paragraphs": [
        "Dịch vụ sẽ áp dụng các quy tắc của phong thủy truyền thống (saju) dựa trên ngày tháng năm sinh và thời gian sinh mà bạn đã nhập, để hiển thị bản đồ saju (사주) và sức mạnh của năm yếu tố, độ mạnh yếu của ngày, cũng như các thông tin tham khảo về ngày hôm đó và vị trí giao nhau của bản đồ.",
        "Điểm số và giải thích được đưa ra là **tài liệu tham khảo từ quan điểm của phong thủy truyền thống, không phải là dự đoán khoa học hoặc khẳng định về tương lai, sức khỏe, tài sản của cá nhân.** Điểm số thấp không có nghĩa là ngày hôm đó xấu, và điểm số cao cũng không đảm bảo điều gì.",
        "**Câu giải thích của báo cáo trả phí được viết bởi AI sinh ra.** Tuy nhiên, tất cả các số liệu như điểm số, can chi, và sức mạnh của ngũ hành đều được tính toán bởi công cụ quy tắc của dịch vụ, và AI không thay đổi hoặc tạo ra giá trị đó. Trong trường hợp không thể tạo ra giải thích, mô tả được viết bằng giá trị đã được tính toán bởi công cụ sẽ được đưa vào cùng vị trí, và số trang của tài liệu cũng như các mục được đưa vào sẽ giống như đã nêu trong điều 3 dưới đây."
      ]
    },
    {
      "heading": "2. Phí dịch vụ",
      "paragraphs": [
        "Dịch vụ hiện tại được cung cấp hoàn toàn miễn phí và không cần đăng ký thành viên.",
        "Khi bắt đầu bán sản phẩm trả phí (hai loại báo cáo PDF), các điều kiện trong mục 3 dưới đây sẽ được áp dụng. Trước khi bắt đầu bán, các điều khoản này sẽ được thông báo lại."
      ]
    },
    {
      "heading": "3. Sản phẩm trả phí và hoàn tiền",
      "paragraphs": [
        "Sản phẩm trả phí được bán là **một PDF báo cáo về cuộc sống saju (사주) và vận mệnh của năm nay**. Chúng tôi sẽ tạo tài liệu từ kết quả trên màn hình, và sẽ bao gồm cả những nội dung không có trên màn hình.",
        "**A4 9 trang** — Bìa và tóm tắt, khuynh hướng và điểm mạnh bẩm sinh, những điểm cần chú ý, tám ký tự của bản đồ saju (사주) và sức mạnh của năm yếu tố, độ mạnh yếu của ngày sinh và năng lượng cần thiết hiện tại (dung thần), mười thần của bốn cột và vị trí nổi bật trong saju này, bốn lĩnh vực cuộc sống nhìn từ bản đồ (tài chính·tình yêu·nghề nghiệp·sức khỏe) và cơ sở của chúng, thông tin điều chỉnh giờ sinh, và vận mệnh của năm nay được bao gồm. Thanh toán trong nước {priceDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceGlobal}.",
        "**Dự đoán vận mệnh hôm nay không được bao gồm trong tài liệu này.** Đây là giá trị thay đổi hàng ngày và được cung cấp miễn phí trên màn hình, trong khi tài liệu này bao gồm phần giải thích nguyên cục (원국) không thay đổi suốt đời và vận mệnh của năm nay.",
        "Thanh toán trong nước có thể được thực hiện thông qua Toss Payments bằng thẻ tín dụng, thẻ ghi nợ và các hình thức thanh toán đơn giản (như Toss Pay, Kakao Pay, Naver Pay, Payco, v.v.), và thanh toán quốc tế được thực hiện qua PayPal thông qua PortOne. Số tiền cuối cùng sẽ dựa trên số tiền hiển thị trên màn hình thanh toán.",
        "**Dịch vụ không lưu trữ thông tin đầu vào của người sử dụng cũng như tệp PDF đã tạo.** Khi thanh toán được phê duyệt, tài liệu sẽ được tạo và tải xuống ngay lập tức mà không để lại bất kỳ thứ gì trên máy chủ. Do đó, tệp đã tải xuống cần được người sử dụng tự bảo quản.",
        "Trong trường hợp tải xuống bị ngừng hoặc mất tệp, bạn có thể tải lại tối đa **5 lần** với cùng một đơn hàng. Tuy nhiên, nếu bạn rời khỏi màn hình kết quả và các giá trị đầu vào bị mất, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ],
      "bullets": [
        "**Trước khi việc tải xuống bắt đầu sau khi thanh toán** bạn có thể hủy bất cứ lúc nào và nhận lại toàn bộ số tiền.",
        "**Sau khi tải xuống hoàn tất** thì việc hủy bỏ đơn đặt hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức sau khi thanh toán và không thể khôi phục lại trạng thái ban đầu, điều này thuộc vào lý do hạn chế hủy bỏ đơn đặt hàng theo quy định tại Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử.",
        "**Trong trường hợp tài liệu không được tạo ra do lỗi hệ thống, tệp không thể mở hoặc số tiền thanh toán khác với đơn hàng** sẽ được xử lý bằng cách phát hành lại hoặc hoàn tiền toàn bộ.",
        "**Phàn nàn về nội dung kết quả** không được coi là lý do để hoàn tiền. Giải thích saju (사주) là tài liệu tham khảo từ quan điểm của triết học cổ truyền và tính chất của nó đã được thông báo trước khi thanh toán (mục 1 ở trên).",
        "Yêu cầu tái phát hành sau khi đã sử dụng tất cả 5 lần sẽ không được coi là lý do hoàn tiền.",
        "**Trong trường hợp người chưa thành niên thực hiện thanh toán mà không có sự đồng ý của người đại diện hợp pháp** thì bản thân hoặc người đại diện hợp pháp có thể hủy bỏ giao dịch đó. Nếu thông báo cho chúng tôi qua thông tin liên lạc dưới đây, chúng tôi sẽ hoàn tiền."
      ]
    },
    {
      "heading": "4. Về kết quả tính toán",
      "paragraphs": [
        "Tất cả các điểm số được tính toán theo các quy tắc công khai, vì vậy nếu nhập cùng một giá trị, sẽ luôn cho ra cùng một kết quả.",
        "Nếu không nhập thời gian sinh, kết quả sẽ khác vì không tính đến giờ sinh (시주). Việc chọn chính xác nơi sinh sẽ giúp tính toán giờ sinh (시주) chính xác hơn.",
        "Việc tính toán lịch vạn niên sử dụng thư viện tính toán công khai, và kết quả có thể khác nhau tùy thuộc vào cách xử lý tiết khí và múi giờ."
      ]
    },
    {
      "heading": "5. Trách nhiệm của người sử dụng",
      "paragraphs": [
        "Người sử dụng có thể nhập ngày tháng năm sinh của người khác, nhưng không được sử dụng kết quả đó để gây bất lợi cho người khác.",
        "Xin đừng sử dụng kết quả dịch vụ như là cơ sở cho các quyết định ảnh hưởng đến quyền lợi của người khác, chẳng hạn như kết hôn, ly hôn, tuyển dụng, giao dịch, v.v. Dịch vụ không được thiết kế cho mục đích đó."
      ]
    },
    {
      "heading": "6. Hành vi bị cấm",
      "paragraphs": [
        "Các hành vi sau đây không được phép."
      ],
      "bullets": [
        "Hành vi gửi yêu cầu quá mức bằng công cụ tự động gây cản trở hoạt động của dịch vụ.",
        "Hành vi trình bày kết quả của dịch vụ như là sự thật hoặc kết quả đánh giá của chuyên gia.",
        "Hành vi sao chép và chỉnh sửa dịch vụ để cung cấp dịch vụ tương tự."
      ]
    },
    {
      "heading": "7. Miễn trừ trách nhiệm",
      "paragraphs": [
        "Dịch vụ chỉ cung cấp tài liệu tham khảo và không chịu trách nhiệm về các phán đoán mà người sử dụng đưa ra dựa trên kết quả và các hậu quả của nó.",
        "Chúng tôi không chịu trách nhiệm về thiệt hại phát sinh do việc ngừng dịch vụ vì các lý do không thể kiểm soát như thiên tai, sự cố của nhà cung cấp hạ tầng."
      ]
    },
    {
      "heading": "8. Quyền sở hữu trí tuệ",
      "paragraphs": [
        "Quyền đối với các sản phẩm của màn hình, văn bản và quy tắc tính toán của dịch vụ thuộc về nhà điều hành. Người sử dụng có thể lưu trữ hoặc chia sẻ kết quả cho mục đích cá nhân."
      ]
    },
    {
      "heading": "9. Thay đổi điều khoản và luật áp dụng",
      "paragraphs": [
        "Trong trường hợp thay đổi điều khoản, chúng tôi sẽ đăng tải trên trang này cùng với ngày có hiệu lực.",
        "Điều khoản này được điều chỉnh bởi pháp luật Hàn Quốc, và mọi tranh chấp liên quan đến việc sử dụng dịch vụ sẽ tuân theo quy trình được quy định bởi các văn bản pháp luật liên quan."
      ]
    }
  ]
};

const d2 = {
  "title": "Chính sách hoàn tiền và hủy bỏ",
  "intro": "Tiêu chuẩn hủy bỏ và hoàn tiền cho báo cáo cuộc sống saju (사주) PDF. Chúng tôi đã tập hợp các nội dung tương tự như điều khoản 3.",
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
        "Tuân theo tiêu chuẩn được quy định bởi Luật Thương mại điện tử."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu,** bạn có thể hủy bỏ bất cứ lúc nào và nhận hoàn tiền toàn bộ.",
        "**Sau khi tải xuống hoàn tất,** việc hủy bỏ đơn hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể khôi phục lại, điều này thuộc lý do hạn chế theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Thương mại điện tử. Chúng tôi thông báo trước về điều này trên màn hình thanh toán và nhận được sự đồng ý."
      ]
    },
    {
      "heading": "3. Trường hợp hoàn tiền toàn bộ",
      "paragraphs": [
        "Trong các trường hợp sau, chúng tôi sẽ xác nhận lý do và xử lý bằng cách cấp lại hoặc hoàn tiền toàn bộ."
      ],
      "bullets": [
        "Trường hợp hệ thống lỗi không tạo ra tài liệu",
        "Tệp đã tải xuống không mở được",
        "Số tiền thanh toán khác với đơn hàng",
        "**Trường hợp người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp** — Người thanh toán hoặc người đại diện hợp pháp có thể yêu cầu hủy bỏ."
      ]
    },
    {
      "heading": "4. Trường hợp không phải lý do hoàn tiền",
      "paragraphs": [],
      "bullets": [
        "**Sự không hài lòng về nội dung kết quả.** Giải thích saju (사주) là tài liệu tham khảo từ quan điểm lý thuyết cổ truyền và đã được thông báo trước khi thanh toán.",
        "Yêu cầu cấp lại sau khi đã sử dụng hết 5 lần."
      ]
    },
    {
      "heading": "5. Phương thức tiếp nhận",
      "paragraphs": [
        "Vui lòng gửi yêu cầu hoàn tiền hoặc thắc mắc đến trung tâm khách hàng ({customerCenter}) hoặc qua email ({email}). Nếu bạn cung cấp số đơn hàng, việc xác nhận sẽ nhanh chóng hơn.",
        "Hoàn tiền sẽ được trả lại qua phương thức thanh toán mà bạn đã sử dụng, và có thể mất từ 3 đến 7 ngày làm việc để phản ánh tùy thuộc vào tình hình của công ty thẻ hoặc công ty thanh toán."
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
        "Bạn có thể xem tất cả các thông tin như tám chữ của saju (사주), sức mạnh của năm yếu tố, độ mạnh yếu của ngày, năng lượng cần thiết hiện tại, điểm số và cấp độ vận mệnh hôm nay, cũng như điểm số của bốn lĩnh vực trong cuộc sống trên màn hình."
      ]
    },
    {
      "heading": "2. Báo cáo đọc saju (사주) và vận mệnh năm nay PDF (trả phí)",
      "paragraphs": [
        "Thanh toán trong nước {priceDomestic} (bao gồm thuế giá trị gia tăng) · Thanh toán quốc tế {priceGlobal}",
        "Chúng tôi sẽ tạo một tài liệu PDF dài **9 trang A4** từ kết quả trên màn hình. Những thông tin không hiển thị trên màn hình — độ mạnh yếu của ngày, năng lượng cần thiết hiện tại, mười thần của bốn cột và vị trí nổi bật trong saju (사주) này, Vương Tương Hưu Tử, bốn lĩnh vực trong cuộc sống nhìn từ nguyên cục và các số liệu cơ sở, chi tiết điều chỉnh giờ Thái Dương, vận mệnh năm nay — sẽ được bao gồm trong đó.",
        "Bạn có thể tải lại cùng một đơn hàng **tối đa 5 lần**. Tuy nhiên, nếu thông tin đầu vào bị mất khi ra khỏi màn hình kết quả, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ]
    },
    {
      "heading": "4. Phương thức thanh toán",
      "paragraphs": [
        "**Trong nước** — Bạn có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán nhanh (TossPay, KakaoPay, NaverPay, Payco, v.v.) thông qua Toss Payments.",
        "**Quốc tế** — Bạn có thể thanh toán qua PayPal thông qua PortOne.",
        "Số tiền thanh toán cuối cùng sẽ theo số tiền hiển thị trên màn hình thanh toán."
      ]
    },
    {
      "heading": "5. Thay đổi giá",
      "paragraphs": [
        "Nếu có sự thay đổi giá, chúng tôi sẽ đăng thông báo trên trang này trước. Giá đã thanh toán cho các đơn hàng đã hoàn tất sẽ không bị ảnh hưởng bởi giá đã thay đổi."
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
        "Không ghi vào cơ sở dữ liệu và cũng không lưu lại dưới dạng tệp riêng. Do không có đăng ký thành viên, nên các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được gửi đến máy chủ bởi trình duyệt. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được ghi lại trong hồ sơ truy cập máy chủ.",
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
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ hiển thị và không được lưu trữ"
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
        "Người dùng có thể tắt quảng cáo tùy chỉnh trong cài đặt quảng cáo của Google (google.com/settings/ads). Dù tắt, quảng cáo vẫn sẽ hiển thị, nhưng mức độ liên quan đến người dùng sẽ giảm.",
        "Quảng cáo tùy chỉnh từ tất cả các nhà cung cấp bên thứ ba có thể được tắt một lần tại aboutads.info/choices.",
        "Cũng có thể chặn cookie trong cài đặt trình duyệt.",
        "Đối với người dùng ở Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, sẽ hỏi ý kiến trước về việc sử dụng cookie quảng cáo."
      ]
    },
    {
      "heading": "5. Thông tin được lưu trữ khi thanh toán",
      "paragraphs": [
        "Hiện tại không bán sản phẩm trả phí, vì vậy không có thông tin nào được lưu trữ liên quan đến thanh toán.",
        "Khi bắt đầu bán hàng, các mục dưới đây sẽ được lưu trữ để xử lý thanh toán và lưu giữ hồ sơ giao dịch theo quy định pháp luật. **Ngay cả lúc đó, các giá trị nhập vào để giải đoán saju và PDF được tạo ra sẽ không được lưu trữ**, và cũng không nhận thông tin xác định người dùng như tên, thông tin liên lạc, địa chỉ."
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
      "heading": "7. Quyền của người dùng",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ, vì vậy không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa.",
        "Người dùng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
        "Nếu có bất kỳ câu hỏi nào liên quan đến việc sử dụng dịch vụ, xin vui lòng cho chúng tôi biết qua thông tin liên lạc dưới đây."
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
  "intro": "Saju-Link không lưu trữ thông tin cần thiết cho việc giải đoán saju (사주). Chính sách này giải thích những gì dịch vụ nhận, những gì không để lại, và những gì được ghi lại tự động.",
  "sections": [
    {
      "heading": "1. Thông tin không được lưu trữ",
      "paragraphs": [
        "Ngày tháng năm sinh, giờ sinh, nơi sinh, giới tính, và tên gọi được nhập vào để giải đoán saju (사주) **không được lưu trữ ở bất kỳ đâu.** Chúng chỉ được sử dụng trong bộ nhớ máy chủ trong quá trình xử lý yêu cầu và sẽ biến mất cùng với phản hồi.",
        "Không được ghi lại trong cơ sở dữ liệu và cũng không được lưu trong tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào không được liên kết với bất kỳ cá nhân nào."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả có chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # không được gửi đến máy chủ bởi trình duyệt. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ được lưu lại trong hồ sơ truy cập máy chủ.",
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
        "**Các giá trị nhập vào cho việc giải đoán saju (사주) và PDF được tạo ra sẽ không được lưu trữ ngay cả khi đã thanh toán.** Nguyên tắc ở mục 1 vẫn giữ nguyên bất kể có thanh toán hay không. Các mục lưu trữ bao gồm, nhưng không giới hạn, thông tin nhận diện người sử dụng như tên, thông tin liên lạc, địa chỉ sẽ không được bao gồm."
      ],
      "bullets": [
        "Số đơn hàng và mã nhận diện thanh toán",
        "Số tiền thanh toán, loại tiền tệ và trạng thái thanh toán (chưa thanh toán, đã thanh toán, đã hủy)",
        "Phân loại sản phẩm, trạng thái xử lý, số lần tải tài liệu, thời gian đặt hàng",
        "Ngôn ngữ màn hình tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử, hồ sơ về việc thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm và sau đó sẽ bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Không có thông tin cá nhân nào được lưu trữ để xác định người sử dụng, vì vậy cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba. Việc xử lý thanh toán được ủy thác cho các nhà cung cấp dưới đây.",
        "Dịch vụ sử dụng hạ tầng lưu trữ của {hostingProvider}, và trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Thanh toán trong nước được xử lý bởi Toss Payments, thanh toán quốc tế được xử lý qua PayPal thông qua PortOne. Thông tin về phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, dịch vụ không nhận và cũng không lưu trữ."
      ]
    },
    {
      "heading": "7. Quyền của người sử dụng",
      "paragraphs": [
        "Không có thông tin nào được lưu trữ cho các giá trị nhập vào cho việc giải đoán saju (사주), vì vậy không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa. Hồ sơ đơn hàng còn lại sau khi thanh toán có nghĩa vụ phải được lưu giữ trong thời gian quy định bởi pháp luật, do đó không thể xóa trong thời gian đó, và sau khi hết thời gian sẽ bị tiêu hủy.",
        "Người sử dụng có thể xóa tất cả dấu vết nhập vào chỉ bằng cách xóa liên kết kết quả trong thanh địa chỉ của trình duyệt.",
        "Nếu có bất kỳ câu hỏi nào liên quan đến việc sử dụng dịch vụ, vui lòng thông báo cho chúng tôi qua thông tin liên lạc dưới đây."
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
        "Nếu có thay đổi trong chính sách này, ngày có hiệu lực và nội dung thay đổi sẽ được đăng trên trang này. Nếu có sự thay đổi thực sự trong nội dung xử lý như bắt đầu hiển thị quảng cáo hoặc bán sản phẩm trả phí, chúng tôi sẽ thông báo trước về sự thay đổi đó."
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
        "Dịch vụ cung cấp thông tin dựa trên ngày tháng năm sinh và giờ sinh đã nhập, áp dụng các quy tắc của phong thủy truyền thống (saju) để hiển thị bản đồ saju và sức mạnh của ngũ hành, độ mạnh yếu của ngày sinh, cũng như tham khảo vị trí giao thoa giữa ngày và bản đồ saju.",
        "Các điểm số và giải thích được đưa ra là **tài liệu tham khảo từ góc nhìn phong thủy truyền thống, không phải là dự đoán khoa học hay khẳng định về tương lai, sức khỏe, tài sản của cá nhân.** Điểm số thấp không có nghĩa là ngày đó xấu, và điểm số cao không đảm bảo điều gì cả.",
        "**Các câu giải thích của báo cáo trả phí được viết bởi AI tạo sinh.** Tuy nhiên, tất cả các số liệu như điểm số, can chi, sức mạnh ngũ hành đều được tính toán bởi động cơ quy tắc của dịch vụ, và AI không thay đổi hay tạo ra các giá trị đó. Trong trường hợp không thể tạo ra giải thích, mô tả dựa trên giá trị đã được tính toán sẽ được đưa vào cùng một vị trí, và số trang của tài liệu cũng như các mục được đưa vào sẽ như đã nêu trong điều 3 dưới đây."
      ]
    },
    {
      "heading": "2. Phí sử dụng",
      "paragraphs": [
        "Việc giải đoán saju và xem vận mệnh hôm nay là miễn phí và không cần đăng ký thành viên.",
        "Nhận kết quả dưới dạng báo cáo PDF là có phí. Giá cả và điều kiện sẽ được hiển thị trong điều 3 dưới đây và trên màn hình thanh toán."
      ]
    },
    {
      "heading": "3. Sản phẩm trả phí và hoàn tiền",
      "paragraphs": [
        "Sản phẩm trả phí được bán là **một báo cáo PDF về saju trọn đời và vận mệnh của năm nay**. Đây là việc tạo tài liệu từ kết quả trên màn hình, bao gồm cả nội dung không có trên màn hình.",
        "**9 trang A4** — bìa và tóm tắt, xu hướng và điểm mạnh bẩm sinh, các điểm cần chú ý, tám ký tự của bản đồ saju và sức mạnh ngũ hành, độ mạnh yếu của ngày sinh và năng lượng cần thiết hiện tại (dung thần), mười thần của bốn cột và vị trí nổi bật trong saju này, bốn lĩnh vực cuộc sống từ bản đồ saju (tài sản, tình cảm, nghề nghiệp, sức khỏe) và cơ sở của chúng, thông tin điều chỉnh giờ sinh, và vận mệnh của năm nay sẽ được bao gồm. Thanh toán trong nước {priceDomestic} (bao gồm thuế giá trị gia tăng), thanh toán quốc tế {priceGlobal}.",
        "**Vận mệnh hôm nay sẽ không được bao gồm trong tài liệu này.** Giá trị thay đổi hàng ngày nên được cung cấp miễn phí trên màn hình, và tài liệu này bao gồm giải đoán bản đồ saju không thay đổi suốt đời và vận mệnh của năm nay.",
        "Thanh toán trong nước có thể sử dụng thẻ tín dụng, thẻ ghi nợ và thanh toán đơn giản (Toss Payments, KakaoPay, NaverPay, Payco, v.v.) thông qua Toss Payments, trong khi thanh toán quốc tế sử dụng PayPal qua PortOne. Số tiền cuối cùng sẽ dựa trên số tiền hiển thị trên màn hình thanh toán.",
        "**Dịch vụ không lưu trữ giá trị nhập vào của người dùng cũng như tệp PDF đã tạo.** Khi thanh toán được phê duyệt, tài liệu sẽ được tạo và gửi ngay lập tức mà không lưu lại bất kỳ thứ gì trên máy chủ. Do đó, tệp đã tải xuống phải được người dùng tự bảo quản.",
        "Trong trường hợp tải xuống bị ngừng hoặc tệp bị mất, bạn có thể tải xuống lại **tối đa 5 lần** với cùng một đơn hàng. Tuy nhiên, nếu giá trị nhập vào bị mất khi ra ngoài màn hình kết quả, bạn sẽ không thể tạo lại, vì vậy hãy lưu tệp ngay sau khi thanh toán."
      ],
      "bullets": [
        "**Trước khi tải xuống bắt đầu sau khi thanh toán,** bạn có thể hủy bất kỳ lúc nào và nhận lại toàn bộ số tiền.",
        "**Sau khi tải xuống hoàn tất,** việc hủy đơn hàng do thay đổi ý kiến sẽ bị hạn chế. Đây là nội dung kỹ thuật số được cung cấp ngay lập tức và không thể khôi phục lại, điều này thuộc về lý do hạn chế hủy đơn hàng theo Điều 17, Khoản 2 của Luật Bảo vệ Người tiêu dùng trong Giao dịch Điện tử.",
        "**Trong trường hợp tài liệu không được tạo do lỗi hệ thống, tệp không mở được, hoặc số tiền thanh toán khác với đơn hàng,** sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền toàn bộ.",
        "**Sự không hài lòng về nội dung kết quả** không thuộc lý do hoàn tiền. Việc giải đoán saju là tài liệu tham khảo từ góc nhìn phong thủy truyền thống và đã được thông báo về tính chất của nó trước khi thanh toán (như đã nêu trong điều 1).",
        "Yêu cầu cấp lại sau khi đã sử dụng hết 5 lần sẽ không thuộc lý do hoàn tiền.",
        "**Trong trường hợp người chưa thành niên thanh toán mà không có sự đồng ý của người đại diện hợp pháp,** bản thân hoặc người đại diện hợp pháp có thể hủy thanh toán đó. Vui lòng thông báo cho chúng tôi qua thông tin liên lạc dưới đây để được hoàn tiền."
      ]
    },
    {
      "heading": "4. Về kết quả tính toán",
      "paragraphs": [
        "Tất cả các điểm số được tính toán theo các quy tắc công khai, vì vậy nếu nhập cùng một giá trị, kết quả sẽ luôn giống nhau.",
        "Nếu không nhập giờ sinh, kết quả sẽ được tính toán mà không có chi (時柱), do đó có thể khác nhau. Việc chọn chính xác nơi sinh sẽ giúp tính toán chi chính xác hơn.",
        "Việc tính toán vạn niên lực sử dụng thư viện tính toán công khai, và kết quả có thể khác nhau tùy thuộc vào cách xử lý tiết khí và múi giờ."
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
        "Dịch vụ chỉ cung cấp tài liệu tham khảo và không chịu trách nhiệm về các quyết định và kết quả mà người dùng đưa ra dựa trên kết quả đó.",
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
        "Trong trường hợp thay đổi điều khoản, chúng tôi sẽ đăng tải trên trang này cùng với ngày có hiệu lực.",
        "Điều khoản này được điều chỉnh theo luật pháp Hàn Quốc, và các tranh chấp liên quan đến việc sử dụng dịch vụ sẽ tuân theo quy trình do các quy định pháp luật liên quan quy định."
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
        "Không được ghi vào cơ sở dữ liệu và cũng không được lưu lại dưới dạng tệp riêng. Do không có đăng ký thành viên, các giá trị nhập vào cũng không được liên kết với bất kỳ cá nhân nào."
      ]
    },
    {
      "heading": "2. Thông tin chứa trong liên kết kết quả",
      "paragraphs": [
        "Địa chỉ của màn hình kết quả có chứa các giá trị nhập vào được mã hóa. Tuy nhiên, giá trị này nằm sau dấu # trong địa chỉ, và theo tiêu chuẩn web, nội dung sau dấu # sẽ không được trình duyệt gửi đến máy chủ. Do đó, ngay cả khi mở liên kết kết quả, chỉ có đường dẫn của địa chỉ sẽ được ghi lại trong nhật ký truy cập máy chủ.",
        "Nếu gửi liên kết kết quả cho người khác, người đó cũng có thể xem cùng một kết quả. Liên kết tự nó chứa các giá trị nhập vào, vì vậy việc chia sẻ hay không là do người dùng quyết định."
      ]
    },
    {
      "heading": "3. Thông tin được thu thập tự động",
      "paragraphs": [
        "Không có thông tin nào được thu thập để xác định người dùng. Tuy nhiên, một số ghi chép tối thiểu cần thiết cho việc vận hành dịch vụ web sẽ được tự động lưu lại bởi nhà cung cấp hạ tầng."
      ],
      "bullets": [
        "Địa chỉ IP truy cập, thời gian truy cập, loại trình duyệt và các ghi chép truy cập máy chủ thông thường khác",
        "Thông tin quốc gia — chỉ được sử dụng để tự động xác định ngôn ngữ hiển thị và không được lưu trữ"
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
        "Google sử dụng cookie để hiển thị quảng cáo dựa trên lịch sử truy cập của người dùng trên trang web này và nhiều trang web khác.",
        "Người dùng có thể tắt quảng cáo tùy chỉnh trong cài đặt quảng cáo của Google (google.com/settings/ads). Dù tắt, quảng cáo vẫn sẽ hiển thị, nhưng mức độ liên quan đến người dùng sẽ giảm.",
        "Quảng cáo tùy chỉnh của các nhà cung cấp bên thứ ba có thể được tắt một lần tại aboutads.info/choices.",
        "Cũng có thể chặn cookie trong cài đặt trình duyệt.",
        "Đối với người dùng ở Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, trước tiên sẽ hỏi sự đồng ý về việc sử dụng cookie quảng cáo."
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
        "Ngôn ngữ hiển thị tại thời điểm đặt hàng và phân loại khu vực thanh toán (trong nước, quốc tế)",
        "Thời gian lưu giữ — Theo Điều 6 của Luật Bảo vệ Người tiêu dùng trong Thương mại Điện tử, hồ sơ về việc thanh toán và cung cấp hàng hóa sẽ được lưu giữ trong 5 năm, hồ sơ về khiếu nại hoặc tranh chấp của người tiêu dùng sẽ được lưu giữ trong 3 năm và sau đó sẽ bị tiêu hủy."
      ]
    },
    {
      "heading": "6. Cung cấp cho bên thứ ba và ủy thác xử lý",
      "paragraphs": [
        "Do không lưu trữ thông tin cá nhân xác định người dùng, nên cũng không có thông tin cá nhân nào được cung cấp cho bên thứ ba. Việc xử lý thanh toán được ủy thác cho các nhà cung cấp dưới đây.",
        "Để vận hành dịch vụ, chúng tôi sử dụng hạ tầng lưu trữ của {hostingProvider}, và trong quá trình này, các ghi chép truy cập ở mục 3 sẽ được xử lý theo chính sách của nhà cung cấp đó.",
        "Thanh toán trong nước được xử lý bởi Toss Payments, trong khi thanh toán quốc tế được xử lý qua PayPal thông qua PortOne. Thông tin phương thức thanh toán như số thẻ, số tài khoản sẽ được các nhà cung cấp này xử lý trực tiếp, và dịch vụ không nhận hoặc lưu trữ thông tin này."
      ]
    },
    {
      "heading": "7. Quyền của người dùng",
      "paragraphs": [
        "Do không lưu trữ các giá trị nhập vào để giải đoán saju, không có đối tượng nào để yêu cầu xem, chỉnh sửa hoặc xóa. Hồ sơ đơn hàng còn lại sau khi thanh toán có nghĩa vụ phải được lưu giữ trong thời gian quy định bởi pháp luật, vì vậy không thể xóa trong thời gian đó, và sau khi hết thời gian sẽ bị tiêu hủy.",
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
