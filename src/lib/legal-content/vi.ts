import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
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
            "Chi tiết sản phẩm của dịch vụ phù hợp ý nghĩa Hán tự như sau: ① Tối đa 5 ứng cử viên với mô tả chi tiết và tổng hợp Hán tự: 2,900 won ② Tối đa 10 ứng cử viên với mô tả chi tiết mở rộng, tổng hợp Hán tự và PDF lưu trữ: 4,900 won ③ Tối đa 10 ứng cử viên với chi tiết, tổng hợp Hán tự, phân tích bát tự và ngũ hành, cùng PDF lưu trữ: 9,900 won.",
            "Dịch vụ chuyển đổi tên toàn cầu, chuyển đổi tên Hàn Quốc, và ghi âm tên bằng Hàn Quốc có thể cung cấp sản phẩm công khai toàn bộ ứng cử viên còn lại mà không có quảng cáo (thanh toán trong nước 990 won, thanh toán quốc tế US$1.99). Trước khi kích hoạt chức năng thanh toán, chỉ có thể cung cấp hình thức xem xét theo quảng cáo.",
            "Sản phẩm kỹ thuật số cho người dùng toàn cầu bao gồm ④ Báo cáo tổng hợp tên Hàn Quốc PDF (US$9.99): nghệ thuật tên phông chữ được đề xuất, giải thích ý nghĩa, tham khảo bát tự và ngũ hành ⑤ Nghệ thuật chuyển đổi âm Hàn Quốc PDF (US$2.99): nghệ thuật tên phông chữ đã chọn và hướng dẫn phát âm ⑥ Gói nghệ thuật tên PDF (US$1.99): cung cấp một tên đã chọn dưới dạng nghệ thuật theo từng phông chữ. Giá cả và số lượng phông chữ áp dụng cho từng sản phẩm sẽ theo giá trị được thông báo trên màn hình.",
            "Báo cáo chi tiết trả phí và kết quả phân tích, tệp PDF có thể được xem lại và tải xuống trong vòng 24 giờ sau khi hoàn tất thanh toán, và sẽ tự động bị xóa sau thời gian lưu trữ.",
            "Hàng hóa vật lý như con dấu tên được cung cấp với giá 39,000 won trong nước, US$34.99 (bao gồm phí vận chuyển quốc tế) tùy theo từng sản phẩm. Tất cả các sản phẩm trả phí sẽ được thông báo về nội dung sản phẩm, giá cả, phương thức cung cấp và điều kiện hoàn tiền trên màn hình trước khi thanh toán.",
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
            "Liên hệ dịch vụ: platforest.inc@gmail.com",
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
          title: "5. Chuyển giao thông tin cá nhân ra nước ngoài",
          paragraphs: [
            "Công ty sẽ chuyển giao thông tin cá nhân ra nước ngoài như sau để cung cấp dịch vụ. Việc chuyển giao sẽ được thực hiện qua phương thức truyền tải qua mạng thông tin.",
            "① OpenAI, L.L.C. (Mỹ) — Các mục chuyển giao: tên, ngày sinh, giờ sinh, giới tính, quốc gia, ngôn ngữ và các giá trị đầu vào phân tích — Mục đích chuyển giao: phân tích tên, phát âm, ý nghĩa dựa trên AI — Thời gian lưu trữ và sử dụng: trong thời gian cung cấp dịch vụ (dữ liệu đầu vào sẽ không được sử dụng cho việc học mô hình theo chính sách của OpenAI và sẽ được lưu trữ tối đa 30 ngày để giám sát lạm dụng trước khi bị xóa).",
            "② Supabase, Inc. (Mỹ) — Các mục chuyển giao: thông tin trạng thái đơn hàng, thanh toán, email thành viên, đầu vào và kết quả báo cáo trả phí (24 giờ sau khi thanh toán), tên người đặt hàng, số liên lạc, địa chỉ giao hàng khi đặt hàng hàng hóa — Mục đích chuyển giao: cơ sở dữ liệu, xác thực, lưu trữ — Thời gian lưu trữ và sử dụng: trong thời gian cung cấp dịch vụ hoặc đến thời gian lưu trữ của từng mục.",
            "③ Vercel, Inc. (Mỹ) — Các mục chuyển giao: thông tin truy cập và yêu cầu được gửi trong quá trình sử dụng dịch vụ — Mục đích chuyển giao: lưu trữ ứng dụng — Thời gian lưu trữ và sử dụng: trong thời gian cung cấp dịch vụ.",
            "Người sử dụng có thể từ chối đồng ý với việc chuyển giao thông tin cá nhân ra nước ngoài, nhưng vì việc xử lý này là cần thiết cho việc cung cấp dịch vụ, việc từ chối có thể dẫn đến việc hạn chế sử dụng dịch vụ.",
          ],
        },
        {
          title: "6. Quyền của người sử dụng",
          paragraphs: [
            "Người sử dụng có quyền yêu cầu xem, chỉnh sửa, xóa, ngừng xử lý và rút lại sự đồng ý về thông tin cá nhân. Các yêu cầu sẽ được tiếp nhận qua email của trung tâm dịch vụ khách hàng và sẽ được xử lý sau khi xác minh danh tính.",
          ],
        },
        {
          title: "7. Người chịu trách nhiệm bảo vệ thông tin cá nhân",
          paragraphs: [
            "Người chịu trách nhiệm: 곽은하",
            "Email: platforest.inc@gmail.com",
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
          title: "2. Báo cáo chi tiết Hán tự (2,900₩·4,900₩·9,900₩)",
          paragraphs: [
            "Trước khi bắt đầu tạo phân tích chi tiết AI sau khi thanh toán, có thể hủy bỏ. Sau khi quá trình tạo phân tích hoàn tất và có thể xem hoặc tải xuống, việc hoàn tiền do thay đổi ý kiến đơn giản có thể bị hạn chế.",
            "Trong trường hợp phát hiện lỗi nội dung, thất bại trong việc tạo do sự cố hệ thống, hoặc không khớp số tiền thanh toán, sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền. Trường hợp hết thời gian lưu giữ (24 giờ sau khi thanh toán) và việc tải xuống đã kết thúc sẽ không được coi là lý do hoàn tiền.",
          ],
        },
        {
          title: "3. Công khai toàn bộ ứng viên (990₩ trong nước · US$1.99 quốc tế)",
          paragraphs: [
            "Việc công khai toàn bộ ứng viên cho dịch vụ chuyển đổi tên toàn cầu, chuyển đổi tên Hàn Quốc và dịch vụ ghi âm bằng Hangul là nội dung kỹ thuật số được cung cấp ngay lập tức sau khi thanh toán. Trước khi bắt đầu xem ứng viên, có thể hủy bỏ, và sau khi xem, việc hoàn tiền do thay đổi ý kiến đơn giản có thể bị hạn chế.",
            "Trong trường hợp hệ thống gặp lỗi và ứng viên không được công khai bình thường, sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền.",
          ],
        },
        {
          title: "4. Sản phẩm PDF kỹ thuật số toàn cầu (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Báo cáo tổng hợp tên Hàn Quốc (US$9.99), nghệ thuật chuyển đổi âm Hàn (US$2.99), gói nghệ thuật tên (US$1.99) là nội dung kỹ thuật số được tạo ra sau khi thanh toán. Trước khi bắt đầu tạo PDF, có thể hủy bỏ, và sau khi quá trình tạo hoàn tất và có thể tải xuống, việc hoàn tiền do thay đổi ý kiến đơn giản có thể bị hạn chế.",
            "Trong trường hợp thất bại trong việc tạo, phát hiện lỗi nội dung, hoặc không khớp số tiền thanh toán, sẽ được xử lý bằng cách cấp lại hoặc hoàn tiền. Trường hợp hết thời gian lưu giữ (24 giờ sau khi thanh toán) và việc tải xuống đã kết thúc sẽ không được coi là lý do hoàn tiền.",
          ],
        },
        {
          title: "5. Hàng hóa tùy chỉnh (như con dấu tên)",
          paragraphs: [
            "Các sản phẩm tùy chỉnh cá nhân như con dấu tên (39,000₩ trong nước · US$34.99 quốc tế, bao gồm phí vận chuyển quốc tế) có thể hủy bỏ trước khi bắt đầu sản xuất. Sau khi bắt đầu sản xuất, văn bản khắc sẽ được xác nhận theo cách cá nhân hóa, do đó việc hoàn tiền do thay đổi ý kiến đơn giản có thể bị hạn chế, và các vấn đề như lỗi chính tả, hư hỏng, sản xuất sai hoặc vấn đề giao hàng sẽ được xử lý bằng cách đổi, sản xuất lại hoặc hoàn tiền theo cách phù hợp sau khi xác nhận.",
          ],
        },
        {
          title: "5. Mở khóa quảng cáo",
          paragraphs: [
            "Lợi ích xem quảng cáo không phải là sản phẩm thanh toán. Trong trường hợp không nhận được bồi thường do lỗi mạng quảng cáo, sẽ được xử lý bằng cách thử lại trong dịch vụ hoặc liên hệ với trung tâm khách hàng.",
          ],
        },
        {
          title: "6. Liên hệ",
          paragraphs: [
            "Yêu cầu hoàn tiền: platforest.inc@gmail.com",
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
            "Phân tích cơ bản của bốn dịch vụ bao gồm: Khớp nghĩa Hán tự, Chuyển đổi tên toàn cầu, Chuyển đổi tên Hàn Quốc, và Ghi âm phát âm Hàn Quốc được cung cấp miễn phí cho người không phải thành viên, có thể áp dụng giới hạn sử dụng hàng ngày.",
          ],
        },
        {
          title: "Sử dụng theo hình thức thưởng quảng cáo",
          paragraphs: [
            "Việc mở khóa ứng viên sau khi xem quảng cáo là lợi ích quảng cáo được cung cấp mà không cần thanh toán riêng. Mỗi lần quảng cáo sẽ mở ra một ứng viên tiếp theo. Tình trạng khả dụng có thể thay đổi tùy thuộc vào tồn kho quảng cáo, quốc gia, thiết bị hoặc chính sách của nhà cung cấp quảng cáo.",
          ],
        },
        {
          title: "Chi tiết sản phẩm khớp nghĩa Hán tự",
          paragraphs: [
            "Mô tả chi tiết tối đa 5 ứng viên và tổng hợp Hán tự: 2,900 won",
            "Mô tả chi tiết mở rộng tối đa 10 ứng viên, tổng hợp Hán tự và PDF lưu trữ: 4,900 won",
            "Mô tả tối đa 10 ứng viên, tổng hợp Hán tự, phân tích bát tự và ngũ hành, cùng PDF lưu trữ: 9,900 won",
            "Báo cáo trả phí và PDF có thể được xem lại và tải xuống trong vòng 24 giờ sau khi thanh toán, sau đó sẽ tự động bị xóa.",
          ],
        },
        {
          title: "Công khai toàn bộ ứng viên một lần",
          paragraphs: [
            "Công khai toàn bộ ứng viên còn lại từ dịch vụ chuyển đổi tên toàn cầu, chuyển đổi tên Hàn Quốc và ghi âm phát âm Hàn Quốc mà không có quảng cáo: Thanh toán trong nước 990 won, thanh toán quốc tế US$1.99 (chức năng thanh toán đang được chuẩn bị).",
          ],
        },
        {
          title: "Sản phẩm PDF kỹ thuật số toàn cầu",
          paragraphs: [
            "Báo cáo PDF tổng hợp tên Hàn Quốc (bao gồm nghệ thuật tên, giải thích ý nghĩa và tham khảo bát tự ngũ hành của toàn bộ ứng viên được đề xuất): US$9.99",
            "PDF nghệ thuật chuyển đổi phát âm Hàn Quốc (nghệ thuật tên với phông chữ lựa chọn và hướng dẫn phát âm): US$2.99",
            "Gói PDF nghệ thuật tên (cung cấp nghệ thuật cho một tên đã chọn theo từng phông chữ): US$1.99",
            "Giá cả và số lượng phông chữ áp dụng sẽ theo giá trị được thông báo trên màn hình, và PDF có thể được tải xuống lại trong vòng 24 giờ sau khi thanh toán, sau đó sẽ tự động bị xóa. (Chức năng thanh toán đang được chuẩn bị).",
          ],
        },
        {
          title: "Hàng hóa tên Hàn Quốc",
          paragraphs: [
            "Con dấu tên: Trong nước 39,000 won · Quốc tế US$34.99 (bao gồm phí vận chuyển quốc tế). Các hàng hóa vật lý khác sẽ có giá cả, phí vận chuyển và thời gian sản xuất được thông báo riêng.",
          ],
        },
        {
          title: "Hướng dẫn trước khi thanh toán chính thức",
          paragraphs: [
            "Khi điều kiện hợp tác sản xuất, đăng ký kinh doanh thương mại điện tử và thẩm định PG được xác nhận, số tiền thanh toán thực tế, phí vận chuyển, thời gian sản xuất và điều kiện hoàn tiền sẽ được thông báo lại trên màn hình sản phẩm.",
          ],
        },
      ],
    },
  },
};

export default content;
