import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Ngày hiệu lực",
    referenceDate: "Ngày tham chiếu",
    login: "Đăng nhập",
    close: "Đóng",
  },
  documents: {
    terms: {
      title: "Điều khoản dịch vụ",
      description: `Điều khoản này quy định điều kiện sử dụng và phạm vi dịch vụ của ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Tính chất dịch vụ",
          paragraphs: [
            "Naming-Link là một studio đặt tên dựa trên AI cung cấp bốn dịch vụ sau: ① Phù hợp ý nghĩa Hán tự với tên Hàn Quốc ② Chuyển đổi tên Hàn Quốc thành tên toàn cầu ③ Chuyển đổi tên nước ngoài thành tên Hàn Quốc ④ Ghi tên toàn cầu theo cách phát âm bằng Hàn Quốc.",
            "Kết quả là tài liệu tham khảo hỗ trợ việc đặt tên và giải thích, không đảm bảo khả năng đăng ký chính thức như đăng ký hộ tịch, hộ chiếu, visa, nhãn hiệu, tài liệu pháp lý, v.v.",
          ],
        },
        {
          title: "2. Sử dụng của thành viên và không phải thành viên",
          paragraphs: [
            "Phân tích tên và xem xét ứng cử viên theo hình thức quảng cáo có thể được sử dụng bởi cả thành viên và không phải thành viên. Đăng ký thành viên hoặc đăng nhập chỉ được yêu cầu cho các chức năng cần tài khoản như đặt hàng hàng hóa và kiểm tra lịch sử đặt hàng.",
          ],
        },
        {
          title: "3. Trách nhiệm về kết quả AI và xem xét",
          paragraphs: [
            "Kết quả gợi ý từ AI bao gồm các tham khảo về ngôn ngữ, văn hóa và truyền thống. Người dùng phải xác nhận tính phù hợp thông qua các cơ quan liên quan, chuyên gia, người dùng địa phương, xem xét pháp lý và nhãn hiệu trước khi chọn tên cuối cùng.",
          ],
        },
        {
          title: "4. Dịch vụ trả phí",
          paragraphs: [
            "Chi tiết sản phẩm dịch vụ ghép nghĩa Hán tự như sau. ① Tối đa 5 ứng viên với mô tả chi tiết và tổng hợp Hán tự: ₩2,900 ② Tối đa 10 ứng viên với mô tả chi tiết mở rộng, tổng hợp Hán tự và PDF để lưu trữ: ₩4,900 ③ Tối đa 10 ứng viên với mô tả chi tiết, tổng hợp Hán tự, phân tích tứ trụ và ngũ hành, cùng PDF để lưu trữ: ₩9,900.",
            "Dịch vụ chuyển đổi tên toàn cầu, chuyển đổi tên Hàn Quốc, và dịch vụ ghi âm phát âm Hàn Quốc có thể cung cấp sản phẩm công khai toàn bộ ứng viên còn lại mà không có quảng cáo (thanh toán trong nước ₩990, thanh toán quốc tế US$1.99). Trước khi kích hoạt chức năng thanh toán, chỉ có thể cung cấp xem thưởng quảng cáo.",
            "Sản phẩm kỹ thuật số dành cho người dùng toàn cầu bao gồm ④ Báo cáo tổng hợp tên Hàn Quốc PDF (US$9.99): tên nghệ thuật phông chữ của toàn bộ ứng viên được đề xuất, giải thích ý nghĩa và tham khảo tứ trụ ngũ hành ⑤ Nghệ thuật chuyển đổi phát âm Hàn Quốc PDF (US$2.99): nghệ thuật tên phông chữ đã chọn và hướng dẫn phát âm ⑥ Gói nghệ thuật tên PDF (US$1.99): cung cấp một tên đã chọn dưới dạng nghệ thuật theo từng phông chữ. Giá của từng sản phẩm và số lượng phông chữ áp dụng sẽ theo giá đã thông báo trên màn hình.",
            "Báo cáo chi tiết trả phí và kết quả phân tích, tệp PDF có thể được xem lại và tải xuống trong vòng 24 giờ sau khi hoàn tất thanh toán, và sẽ tự động bị xóa sau khi hết thời gian lưu trữ.",
            "Giá thanh toán trong nước cho các sản phẩm vật lý như con dấu tên là ₩39,000 / ₩59,000 / ₩79,000 và sẽ được cung cấp cùng với điều kiện của từng sản phẩm.",
            "Giá thanh toán quốc tế cho cùng một sản phẩm vật lý là US$39.90 / US$59.90 / US$79.90 và đã bao gồm phí vận chuyển quốc tế.",
            "Tất cả các sản phẩm trả phí sẽ thông báo nội dung sản phẩm, giá cả, phương thức cung cấp, và điều kiện hoàn tiền trên màn hình trước khi thanh toán.",
          ],
        },
        {
          title: "5. Dịch vụ thưởng quảng cáo",
          paragraphs: [
            "Việc mở khóa ứng cử viên thông qua việc xem quảng cáo chỉ được áp dụng khi việc xác nhận thưởng bình thường của nhà cung cấp quảng cáo đã hoàn tất. Việc phát quảng cáo tự động, thao tác thưởng, và yêu cầu lặp lại không bình thường có thể bị hạn chế.",
          ],
        },
        {
          title: "6. Hành vi bị cấm",
          paragraphs: [
            "Cấm nhập thông tin cá nhân của người khác mà không có sự cho phép, tạo tên với mục đích phân biệt, thù hận, giả mạo, yêu cầu quá mức tự động, gây ra sự cố dịch vụ, và hiển thị chứng nhận chính thức giả mạo của sản phẩm.",
          ],
        },
        {
          title: "7. Giới hạn trách nhiệm",
          paragraphs: [
            "Công ty không chịu trách nhiệm về thiệt hại gián tiếp, mất lợi ích kỳ vọng, từ chối đăng ký chính thức, và tranh chấp với bên thứ ba phát sinh từ việc sử dụng kết quả gợi ý AI, trừ khi có hành vi cố ý hoặc sơ suất nghiêm trọng.",
          ],
        },
        {
          title: "8. Liên hệ",
          paragraphs: [
            `Liên hệ dịch vụ: ${companyInfo.email}`,
          ],
        },
      ],
    },
    privacy: {
      title: "Chính sách quyền riêng tư",
      description: `Chính sách này mô tả tiêu chuẩn xử lý thông tin cá nhân của ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Các mục thông tin cá nhân được xử lý",
          paragraphs: [
            "Khi sử dụng dịch vụ tên không phải thành viên, tên, ngày sinh, giờ sinh, quốc gia, ngôn ngữ, mục đích sử dụng và gợi ý phát âm sẽ được xử lý tạm thời trong quá trình tạo ra kết quả phân tích, nhưng nội dung nhập và kết quả tạo ra sẽ không được lưu trữ trong cơ sở dữ liệu dịch vụ.",
            "Khi đăng ký thành viên và đăng nhập, địa chỉ email và lịch sử đăng nhập (lịch sử xác thực) sẽ được xử lý.",
            "Khi thanh toán cho báo cáo chi tiết trả phí, thông tin nhận diện đơn hàng, trạng thái thanh toán và các đầu vào, kết quả phân tích cần thiết cho việc tạo báo cáo sẽ được xử lý trong thời gian lưu trữ (24 giờ sau khi thanh toán). Thông tin phương thức thanh toán như số thẻ sẽ được xử lý trực tiếp bởi đơn vị thanh toán và công ty sẽ không lưu trữ chúng.",
            "Chỉ khi sử dụng chức năng đặt hàng hàng hóa, tên người đặt hàng, email, số liên lạc, địa chỉ giao hàng, trạng thái thanh toán và thông tin xử lý đơn hàng có thể được xử lý thêm.",
            "Để đảm bảo tính ổn định của dịch vụ và ngăn chặn lạm dụng, các thông tin không xác định về khách truy cập, thời gian yêu cầu, loại dịch vụ, số lần sử dụng miễn phí, thời gian phản hồi AI, trạng thái xử lý và quảng cáo hiển thị, sự kiện thưởng có thể được xử lý như là nhật ký hoạt động tối thiểu.",
          ],
        },
        {
          title: "2. Mục đích xử lý thông tin cá nhân",
          paragraphs: [
            "Chúng tôi xử lý thông tin cá nhân để đề xuất tên dựa trên giá trị nhập, phân tích phát âm, phân tích ngôn ngữ và văn hóa theo quốc gia, giới hạn số lượng sử dụng miễn phí, xác nhận thưởng quảng cáo, phản hồi yêu cầu của khách hàng, xử lý thanh toán và giao hàng, và ngăn chặn việc sử dụng trái phép.",
          ],
        },
        {
          title: "3. Lưu trữ và tiêu hủy",
          paragraphs: [
            "Các đầu vào phân tích và kết quả chỉ được lưu trữ trong tài khoản của thành viên khi thành viên đó chọn lưu trữ một cách rõ ràng, và sẽ bị tiêu hủy khi thành viên xóa hoặc khi mục đích lưu trữ kết thúc. Các đầu vào và kết quả của thành viên không lưu trữ sẽ không được lưu trữ.",
            "Các đầu vào, kết quả phân tích và tệp PDF của báo cáo chi tiết trả phí sẽ tự động bị xóa sau 24 giờ kể từ khi hoàn tất thanh toán. Hồ sơ giao dịch thanh toán và đơn hàng sẽ được lưu trữ riêng theo thời gian lưu trữ theo quy định của pháp luật liên quan.",
            "Thông tin chi tiết về việc giao hàng của đơn hàng hàng hóa (tên người đặt, email, số điện thoại, địa chỉ giao hàng, yêu cầu, câu chữ khắc lên con dấu) sẽ bị tiêu hủy sau 90 ngày kể từ ngày giao hàng hoàn tất hoặc đơn hàng bị hủy. Thông tin nhập của đơn hàng bị ngừng lại mà chưa đến bước thanh toán sẽ bị tiêu hủy sau 24 giờ. Sau khi bị tiêu hủy, các ghi chép giao dịch thanh toán và đơn hàng sẽ được giữ lại theo thời gian lưu trữ theo quy định của pháp luật liên quan.",
          ],
        },
        {
          title: "4. Cung cấp cho bên thứ ba và ủy thác xử lý",
          paragraphs: [
            "Để vận hành dịch vụ, thông tin cần thiết có thể được xử lý hoặc ủy thác cho Supabase (cơ sở dữ liệu, xác thực), Vercel (lưu trữ), OpenAI API (phân tích AI), mạng quảng cáo, đơn vị thanh toán (PortOne), và các đối tác giao hàng, sản xuất.",
          ],
        },
        {
          title: "5. Cookies và Quảng cáo",
          paragraphs: [
            "Dịch vụ này không sử dụng cookie để xác định hoặc theo dõi người dùng. Thông tin nhập vào phân tích tên không được chuyển cho các nhà quảng cáo.",
            "Dịch vụ này hiển thị quảng cáo thông qua Google AdSense. Trong quá trình này, các nhà cung cấp bên thứ ba, bao gồm Google, có thể lưu trữ hoặc đọc cookie trên trình duyệt của người dùng, và Google sử dụng cookie để hiển thị quảng cáo dựa trên lịch sử truy cập của người dùng trên trang web này và nhiều trang web khác.",
            "Ngay cả khi sử dụng quảng cáo có thưởng và offerwall, cùng một cookie cũng được sử dụng. Dịch vụ chỉ xác nhận việc người dùng đã xem quảng cáo đến cuối hay không và việc thanh toán thưởng tương ứng, mà không nhận thông tin có thể xác định người dùng từ các nhà quảng cáo.",
            "Người dùng có thể tắt quảng cáo tùy chỉnh tại cài đặt quảng cáo của Google (google.com/settings/ads). Dù tắt thì quảng cáo vẫn sẽ tiếp tục hiển thị, chỉ là mức độ liên quan đến người dùng sẽ giảm. Quảng cáo tùy chỉnh từ tất cả các nhà cung cấp bên thứ ba có thể được tắt một lần tại aboutads.info/choices, và cũng có thể chặn cookie trong cài đặt trình duyệt.",
            "Đối với người dùng ở Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, trước khi sử dụng cookie quảng cáo, Google sẽ hỏi ý kiến đồng ý thông qua thông điệp đồng ý.",
          ],
        },
        {
          title: "6. Chuyển giao thông tin cá nhân ra nước ngoài",
          paragraphs: [
            "Công ty sẽ chuyển giao thông tin cá nhân ra nước ngoài như sau để cung cấp dịch vụ. Việc chuyển giao sẽ được thực hiện qua phương thức truyền tải qua mạng thông tin.",
            "① OpenAI, L.L.C. (Mỹ) — Các mục chuyển giao: tên, ngày sinh, giờ sinh, giới tính, quốc gia, ngôn ngữ và các giá trị đầu vào phân tích — Mục đích chuyển giao: phân tích tên, phát âm, ý nghĩa dựa trên AI — Thời gian lưu trữ và sử dụng: trong thời gian cung cấp dịch vụ (dữ liệu đầu vào sẽ không được sử dụng cho việc học mô hình theo chính sách của OpenAI và sẽ được lưu trữ tối đa 30 ngày để giám sát lạm dụng trước khi bị xóa).",
            "② Supabase, Inc. (Mỹ) — Các mục chuyển giao: thông tin trạng thái đơn hàng, thanh toán, email thành viên, đầu vào và kết quả báo cáo trả phí (24 giờ sau khi thanh toán), tên người đặt hàng, số liên lạc, địa chỉ giao hàng khi đặt hàng hàng hóa — Mục đích chuyển giao: cơ sở dữ liệu, xác thực, lưu trữ — Thời gian lưu trữ và sử dụng: trong thời gian cung cấp dịch vụ hoặc đến thời gian lưu trữ của từng mục.",
            "③ Vercel, Inc. (Mỹ) — Các mục chuyển giao: thông tin truy cập và yêu cầu được gửi trong quá trình sử dụng dịch vụ — Mục đích chuyển giao: lưu trữ ứng dụng — Thời gian lưu trữ và sử dụng: trong thời gian cung cấp dịch vụ.",
            "Người sử dụng có thể từ chối đồng ý với việc chuyển giao thông tin cá nhân ra nước ngoài, nhưng vì việc xử lý này là cần thiết cho việc cung cấp dịch vụ, việc từ chối có thể dẫn đến việc hạn chế sử dụng dịch vụ.",
          ],
        },
        {
          title: "7. Quyền của người sử dụng",
          paragraphs: [
            "Người sử dụng có quyền yêu cầu xem, chỉnh sửa, xóa, ngừng xử lý và rút lại sự đồng ý về thông tin cá nhân. Các yêu cầu sẽ được tiếp nhận qua email của trung tâm dịch vụ khách hàng và sẽ được xử lý sau khi xác minh danh tính.",
          ],
        },
        {
          title: "8. Người chịu trách nhiệm bảo vệ thông tin cá nhân",
          paragraphs: [
            `Người chịu trách nhiệm: ${romanize(companyInfo.privacyOfficer)}`,
            `Email: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Chính sách hoàn tiền và hủy",
      description:
        "Chính sách này quy định tiêu chuẩn hủy và hoàn tiền đối với sản phẩm kỹ thuật số và sản phẩm lưu niệm đặt làm theo yêu cầu.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Nguyên tắc chung",
          paragraphs: [
            "Khi chức năng thanh toán được kích hoạt, phạm vi hoàn tiền có thể khác nhau tùy thuộc vào cách cung cấp từng sản phẩm, thời điểm bắt đầu sản xuất và khả năng tải xuống. Điều kiện cụ thể sẽ được thông báo trên màn hình sản phẩm trước khi thanh toán.",
          ],
        },
        {
          title: "2. Báo cáo chi tiết Hanja",
          paragraphs: [
            "Giá thanh toán trong nước cho báo cáo chi tiết Hanja là ₩2,900 / ₩4,900 / ₩9,900.",
            "Trước khi bắt đầu tạo phân tích chi tiết AI sau khi thanh toán, có thể hủy. Sau khi việc tạo phân tích hoàn tất và có thể xem hoặc tải xuống, việc hoàn tiền do thay đổi ý kiến đơn giản có thể bị hạn chế.",
            "Trong trường hợp phát hiện lỗi nội dung, thất bại trong việc tạo do sự cố hệ thống, hoặc không khớp số tiền thanh toán, sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền. Trường hợp hết thời gian lưu trữ (24 giờ sau khi thanh toán) và việc tải xuống đã kết thúc không thuộc lý do hoàn tiền.",
          ],
        },
        {
          title: "3. Công khai toàn bộ ứng viên",
          paragraphs: [
            "Giá thanh toán trong nước cho công khai toàn bộ ứng viên là ₩990.",
            "Giá thanh toán quốc tế cho cùng một sản phẩm là US$1.99.",
            "Công khai ứng viên cho dịch vụ chuyển đổi tên toàn cầu, chuyển đổi tên Hàn Quốc, và ghi âm phát âm Hangul là nội dung kỹ thuật số được cung cấp ngay khi thanh toán. Trước khi bắt đầu xem ứng viên, có thể hủy bỏ, và sau khi xem, việc hoàn tiền do thay đổi ý kiến có thể bị hạn chế.",
            "Trong trường hợp ứng viên không được công khai bình thường do lỗi hệ thống, sẽ được xử lý bằng cách tái cung cấp hoặc hoàn tiền.",
          ],
        },
        {
          title: "4. Sản phẩm PDF kỹ thuật số toàn cầu",
          paragraphs: [
            "Báo cáo tên tiếng Hàn (US$9.99), Nghệ thuật chuyển đổi phát âm tiếng Hàn (US$2.99), Gói nghệ thuật tên (US$1.99) là nội dung kỹ thuật số được tạo ra sau khi thanh toán. Có thể hủy trước khi bắt đầu tạo PDF, và sau khi hoàn tất tạo và có thể tải xuống, việc hoàn tiền do thay đổi ý kiến đơn giản có thể bị hạn chế.",
            "Trong trường hợp xác nhận thất bại trong việc tạo, lỗi nội dung, hoặc không khớp số tiền thanh toán, sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền. Trường hợp hết thời gian lưu giữ (24 giờ sau khi thanh toán) và không thể tải xuống sẽ không được coi là lý do hoàn tiền.",
          ],
        },
        {
          title: "5. Sản phẩm tùy chỉnh (con dấu tên, v.v.)",
          paragraphs: [
            "Giá thanh toán trong nước cho sản phẩm tùy chỉnh cá nhân như con dấu tên là ₩39,000 / ₩59,000 / ₩79,000.",
            "Giá thanh toán quốc tế cho sản phẩm tương tự là US$39.90 / US$59.90 / US$79.90 và đã bao gồm phí vận chuyển quốc tế.",
            "Sản phẩm tùy chỉnh cá nhân có thể được hủy trước khi bắt đầu sản xuất. Sau khi bắt đầu sản xuất, văn bản khắc sẽ được xác nhận theo cách cá nhân hóa, do đó việc hoàn tiền do thay đổi ý kiến có thể bị hạn chế, và các vấn đề như lỗi chính tả, hư hỏng, sản xuất sai hoặc vấn đề giao hàng sẽ được xử lý theo cách thích hợp như đổi, sản xuất lại hoặc hoàn tiền sau khi xác nhận.",
          ],
        },
        {
          title: "6. Mở khóa quảng cáo",
          paragraphs: [
            "Lợi ích xem quảng cáo không phải là sản phẩm thanh toán. Trong trường hợp không nhận được bồi thường do lỗi mạng quảng cáo, sẽ được xử lý bằng cách thử lại trong dịch vụ hoặc liên hệ với trung tâm khách hàng.",
          ],
        },
        {
          title: "7. Liên hệ",
          paragraphs: [
            `Yêu cầu hoàn tiền: ${companyInfo.email}`,
          ],
        },
      ],
    },
    pricing: {
      title: "Bảng giá",
      description:
        "Bảng giá này giới thiệu phạm vi dịch vụ miễn phí và giá của các sản phẩm trả phí.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Phân tích cơ bản (Miễn phí)",
          paragraphs: [
            "Phân tích cơ bản của bốn dịch vụ bao gồm ghép nghĩa Hanja, chuyển đổi tên toàn cầu, chuyển đổi tên Hàn Quốc, và ghi âm Hangeul được cung cấp miễn phí cho người không phải thành viên và có thể áp dụng giới hạn sử dụng hàng ngày. Dưới đây chỉ hiển thị các sản phẩm có thể thanh toán ngay cùng với số tiền, và các sản phẩm chưa mở sẽ không được hiển thị.",
          ],
        },
        {
          title: "Sử dụng theo hình thức thưởng quảng cáo",
          paragraphs: [
            "Việc mở khóa ứng viên sau khi xem quảng cáo là một lợi ích quảng cáo được cung cấp mà không cần thanh toán riêng. Mỗi lần xem quảng cáo sẽ mở khóa một ứng viên tiếp theo. Tính khả dụng có thể thay đổi tùy thuộc vào tồn kho quảng cáo, quốc gia, thiết bị hoặc chính sách của nhà cung cấp quảng cáo. Trong thời gian không phát quảng cáo, ứng viên đó sẽ được công khai miễn phí mà không cần qua cổng này.",
          ],
        },
        {
          title: "Chi tiết sản phẩm khớp nghĩa Hán tự",
          paragraphs: [
            "Mô tả chi tiết tối đa 5 ứng viên và tổng hợp Hán tự: ₩2,900",
            "Mô tả chi tiết mở rộng tối đa 10 ứng viên, tổng hợp Hán tự và PDF lưu trữ: ₩4,900",
            "Mô tả tối đa 10 ứng viên, tổng hợp Hán tự, phân tích bát tự và ngũ hành, cùng PDF lưu trữ: ₩9,900",
            "Báo cáo trả phí và PDF có thể được xem lại và tải xuống trong vòng 24 giờ sau khi thanh toán, sau đó sẽ tự động bị xóa.",
          ],
        },
        {
          title: "Công khai toàn bộ ứng viên",
          paragraphs: [
            "Công khai toàn bộ ứng viên còn lại trong dịch vụ chuyển đổi tên toàn cầu, chuyển đổi tên Hàn Quốc, và ghi âm phát âm Hangul một lần mà không có quảng cáo (thanh toán trong nước): ₩990",
            "Giá thanh toán quốc tế cho cùng một sản phẩm: US$1.99",
          ],
        },
        {
          title: "Sản phẩm PDF kỹ thuật số toàn cầu",
          paragraphs: [
            "Báo cáo tổng hợp tên tiếng Hàn PDF (Giải thích nghệ thuật và ý nghĩa của tất cả các ứng viên được đề xuất, tham khảo ngũ hành và bát tự): US$9.99",
            "Nghệ thuật chuyển đổi phát âm tiếng Hàn PDF (Nghệ thuật tên phông chữ đã chọn và hướng dẫn phát âm): US$2.99",
            "Gói nghệ thuật tên PDF (Cung cấp nghệ thuật theo phông chữ đã chọn cho 1 tên đã chọn): US$1.99",
            "Giá cả và số lượng phông chữ áp dụng sẽ theo giá trị được thông báo trên màn hình, và PDF có thể được tải xuống lại trong vòng 24 giờ sau khi thanh toán, sau đó sẽ tự động bị xóa.",
          ],
        },
        {
          title: "Sản phẩm tên bằng Hangul",
          paragraphs: [
            "Con dấu tên (thanh toán trong nước): ₩39,000 / ₩59,000 / ₩79,000",
            "Con dấu tên (thanh toán quốc tế): US$39.90 / US$59.90 / US$79.90 (bao gồm phí vận chuyển quốc tế)",
            "Các sản phẩm thực tế khác sẽ được thông báo giá, phí vận chuyển và thời gian sản xuất riêng theo từng sản phẩm.",
          ],
        },
        {
          title: "Hướng dẫn về số tiền",
          paragraphs: [
            "Số tiền thanh toán, phí vận chuyển, thời gian sản xuất, điều kiện hoàn tiền sẽ được thông báo lại trên màn hình sản phẩm trước khi thanh toán, và nếu số tiền trong tài liệu này khác với số tiền trên màn hình sản phẩm, số tiền trên màn hình sản phẩm sẽ là tiêu chuẩn.",
          ],
        },
      ],
    },
  },
};

export default content;
