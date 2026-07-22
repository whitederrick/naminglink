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
          title: "1. Bản chất của dịch vụ",
          paragraphs: [
            "Naming-Link là studio đặt tên ứng dụng AI, cung cấp bốn dịch vụ sau: (1) ghép ý nghĩa Hanja (chữ Hán) phù hợp với tên tiếng Hàn, (2) chuyển đổi tên tiếng Hàn thành tên quốc tế, (3) chuyển đổi tên nước ngoài thành tên Hàn Quốc, (4) phiên âm tên quốc tế sang chữ Hangul theo cách phát âm.",
            "Kết quả chỉ là tài liệu tham khảo hỗ trợ việc đặt tên và diễn giải, không bảo đảm khả năng đăng ký chính thức như đăng ký hộ tịch, hộ chiếu, thị thực, nhãn hiệu hay các giấy tờ pháp lý.",
          ],
        },
        {
          title: "2. Thành viên và khách không đăng ký",
          paragraphs: [
            "Phân tích tên và mở khóa ứng viên bằng cách xem quảng cáo có thể sử dụng mà không cần tài khoản. Việc đăng ký thành viên hoặc đăng nhập chỉ được yêu cầu đối với các tính năng cần tài khoản, như đặt mua sản phẩm lưu niệm và xem lịch sử đơn hàng.",
          ],
        },
        {
          title: "3. Kết quả AI và trách nhiệm kiểm tra",
          paragraphs: [
            "Kết quả gợi ý của AI bao gồm các tham chiếu về ngôn ngữ, văn hóa và truyền thống. Trước khi lựa chọn tên cuối cùng, người dùng cần xác nhận tính phù hợp thông qua cơ quan liên quan, chuyên gia, người bản ngữ, cũng như thẩm định pháp lý và nhãn hiệu.",
          ],
        },
        {
          title: "4. Dịch vụ trả phí",
          paragraphs: [
            "Dịch vụ ghép ý nghĩa Hanja cung cấp các gói chi tiết sau: (1) giải thích chi tiết tối đa 5 ứng viên kèm phân tích Hanja tổng hợp: ₩2,900 (KRW); (2) giải thích mở rộng tối đa 10 ứng viên, phân tích Hanja tổng hợp và file PDF lưu niệm: ₩4,900; (3) chi tiết tối đa 10 ứng viên, phân tích Hanja tổng hợp, phân tích Tứ Trụ (Saju) và Ngũ Hành cùng file PDF lưu niệm: ₩9,900.",
            "Trong các dịch vụ chuyển đổi tên quốc tế, chuyển đổi tên Hàn Quốc và phiên âm Hangul, có thể cung cấp gói mở khóa toàn bộ ứng viên còn lại cùng lúc mà không cần xem quảng cáo (₩990). Trước khi tính năng thanh toán được kích hoạt, ứng viên chỉ có thể được mở khóa thông qua xem quảng cáo.",
            "Báo cáo chi tiết trả phí, kết quả phân tích và file PDF có thể được xem lại và tải xuống trong vòng 24 giờ sau khi thanh toán; hết thời hạn lưu trữ, chúng sẽ tự động bị xóa.",
            "Các sản phẩm hữu hình như sản phẩm lưu niệm tên tiếng Hàn có thể được cung cấp với giá và điều kiện riêng. Với mọi sản phẩm trả phí, nội dung sản phẩm, giá, phương thức cung cấp và điều kiện hoàn tiền đều được thông báo trên màn hình trước khi thanh toán.",
          ],
        },
        {
          title: "5. Dịch vụ nhận thưởng qua quảng cáo",
          paragraphs: [
            "Việc mở khóa ứng viên bằng cách xem quảng cáo chỉ được áp dụng khi nhà cung cấp quảng cáo đã xác nhận phần thưởng hợp lệ. Việc phát quảng cáo tự động, thao túng phần thưởng hoặc gửi yêu cầu lặp lại bất thường có thể bị hạn chế.",
          ],
        },
        {
          title: "6. Hành vi bị cấm",
          paragraphs: [
            "Nghiêm cấm các hành vi sau: nhập thông tin cá nhân của người khác khi chưa được phép, tạo tên nhằm mục đích phân biệt đối xử, thù ghét hoặc mạo danh, gửi yêu cầu tự động quá mức, gây gián đoạn dịch vụ, và trình bày sai kết quả như thể đã được chứng nhận chính thức.",
          ],
        },
        {
          title: "7. Giới hạn trách nhiệm",
          paragraphs: [
            "Trừ trường hợp cố ý hoặc lỗi nghiêm trọng, công ty không chịu trách nhiệm đối với thiệt hại gián tiếp, mất lợi nhuận kỳ vọng, việc bị từ chối đăng ký chính thức hoặc tranh chấp với bên thứ ba phát sinh từ việc sử dụng kết quả gợi ý của AI.",
          ],
        },
        {
          title: "8. Liên hệ",
          paragraphs: [`Liên hệ về dịch vụ: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Chính sách quyền riêng tư",
      description: `Chính sách này mô tả tiêu chuẩn xử lý thông tin cá nhân của ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Các loại thông tin cá nhân được xử lý",
          paragraphs: [
            "Khi sử dụng dịch vụ đặt tên với tư cách khách không đăng ký, tên, ngày sinh, giờ sinh, quốc gia, ngôn ngữ, mục đích sử dụng và gợi ý phát âm được xử lý tạm thời trong quá trình tạo kết quả phân tích, nhưng nội dung nhập vào và kết quả tạo ra không được lưu vào cơ sở dữ liệu của dịch vụ.",
            "Khi thanh toán báo cáo chi tiết trả phí, thông tin định danh đơn hàng, trạng thái thanh toán cùng dữ liệu nhập vào và kết quả phân tích cần thiết để tạo báo cáo được xử lý trong thời hạn lưu trữ (24 giờ sau khi thanh toán). Thông tin phương thức thanh toán như số thẻ do đơn vị trung gian thanh toán trực tiếp xử lý; công ty không lưu trữ các thông tin này.",
            "Chỉ khi sử dụng tính năng đặt mua sản phẩm lưu niệm, tên người đặt hàng, email, số liên lạc, địa chỉ giao hàng, trạng thái thanh toán và thông tin xử lý đơn hàng mới có thể được xử lý thêm.",
            "Để bảo đảm sự ổn định của dịch vụ và ngăn ngừa lạm dụng, chúng tôi có thể xử lý nhật ký vận hành ở mức tối thiểu gồm: mã băm ẩn danh của khách truy cập thay đổi theo ngày, thời điểm yêu cầu, loại dịch vụ, số lần sử dụng miễn phí, số token AI, thời gian phản hồi, trạng thái xử lý cùng các sự kiện hiển thị quảng cáo và trao thưởng.",
          ],
        },
        {
          title: "2. Mục đích xử lý thông tin cá nhân",
          paragraphs: [
            "Thông tin cá nhân được xử lý nhằm: gợi ý tên dựa trên dữ liệu nhập vào, phân tích phát âm, phân tích ngôn ngữ và văn hóa theo từng quốc gia, giới hạn lượt sử dụng miễn phí, xác nhận phần thưởng quảng cáo, hỗ trợ khách hàng, xử lý thanh toán và giao hàng, và ngăn ngừa sử dụng gian lận.",
          ],
        },
        {
          title: "3. Lưu trữ và hủy dữ liệu",
          paragraphs: [
            "Dữ liệu nhập vào và kết quả phân tích chỉ được lưu vào tài khoản khi thành viên đã đăng nhập chủ động chọn lưu kết quả, và sẽ bị hủy khi thành viên xóa hoặc khi mục đích lưu trữ kết thúc. Dữ liệu nhập vào và kết quả của khách không đăng ký cũng như của thành viên không chọn lưu sẽ không được lưu trữ.",
            "Dữ liệu nhập vào, kết quả phân tích và file PDF của báo cáo chi tiết trả phí sẽ tự động bị xóa sau 24 giờ kể từ khi thanh toán hoàn tất. Hồ sơ giao dịch thanh toán và đơn hàng được lưu trữ riêng theo thời hạn luật định của pháp luật liên quan.",
            "Thông tin chi tiết về giao hàng sẽ bị hủy hoặc ẩn danh hóa khi hết thời gian cần thiết cho việc xử lý đơn hàng, đổi trả và giải quyết tranh chấp.",
          ],
        },
        {
          title: "4. Cung cấp cho bên thứ ba và ủy thác xử lý",
          paragraphs: [
            "Để vận hành dịch vụ, các thông tin cần thiết có thể được xử lý hoặc ủy thác cho Supabase (cơ sở dữ liệu và xác thực), Vercel (lưu trữ máy chủ), OpenAI API (phân tích AI), các mạng quảng cáo, đơn vị trung gian thanh toán (PortOne) và các đối tác giao hàng, sản xuất.",
          ],
        },
        {
          title: "5. Khả năng chuyển dữ liệu ra nước ngoài",
          paragraphs: [
            "Trong một số quá trình xử lý như lưu trữ đám mây, xác thực, gọi API AI, quảng cáo và gửi email, thông tin cá nhân có thể được xử lý trên máy chủ ở nước ngoài. Quốc gia tiếp nhận, bên nhận ủy thác, mục đích và thời hạn lưu trữ sẽ được thông báo chi tiết sau khi các nhà cung cấp dịch vụ được xác định.",
          ],
        },
        {
          title: "6. Quyền của người dùng",
          paragraphs: [
            "Người dùng có quyền yêu cầu truy cập, chỉnh sửa, xóa, tạm ngừng xử lý thông tin cá nhân và rút lại sự đồng ý. Yêu cầu được tiếp nhận qua email của trung tâm hỗ trợ khách hàng và được xử lý sau khi xác minh danh tính.",
          ],
        },
        {
          title: "7. Người phụ trách bảo vệ thông tin cá nhân",
          paragraphs: [
            `Người phụ trách: ${companyInfo.privacyOfficer}`,
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
            "Khi tính năng thanh toán được kích hoạt, phạm vi hoàn tiền có thể khác nhau tùy theo phương thức cung cấp, thời điểm bắt đầu sản xuất và tình trạng tải xuống của từng sản phẩm. Điều kiện cụ thể được thông báo trên màn hình sản phẩm trước khi thanh toán.",
          ],
        },
        {
          title: "2. Báo cáo chi tiết Hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Sau khi thanh toán, quý khách có thể hủy trước khi quá trình tạo phân tích chi tiết bằng AI bắt đầu. Khi phân tích đã được tạo xong và có thể xem hoặc tải xuống, việc hoàn tiền do đổi ý đơn thuần có thể bị hạn chế.",
            "Nếu xác nhận có lỗi nội dung, tạo báo cáo thất bại do sự cố hệ thống hoặc chênh lệch số tiền thanh toán, chúng tôi sẽ cấp lại báo cáo hoặc hoàn tiền. Việc hết thời hạn lưu trữ (24 giờ sau khi thanh toán) khiến không thể tải xuống nữa không phải là căn cứ hoàn tiền.",
          ],
        },
        {
          title: "3. Mở khóa toàn bộ ứng viên (₩990)",
          paragraphs: [
            "Việc mở khóa toàn bộ ứng viên trong các dịch vụ chuyển đổi tên quốc tế, chuyển đổi tên Hàn Quốc và phiên âm Hangul là nội dung kỹ thuật số được cung cấp ngay sau khi thanh toán. Quý khách có thể hủy trước khi bắt đầu xem ứng viên; sau khi đã xem, việc hoàn tiền do đổi ý đơn thuần có thể bị hạn chế.",
            "Nếu ứng viên không được mở khóa đúng cách do lỗi hệ thống, chúng tôi sẽ cung cấp lại hoặc hoàn tiền.",
          ],
        },
        {
          title: "4. Sản phẩm lưu niệm đặt làm theo yêu cầu",
          paragraphs: [
            "Sản phẩm cá nhân hóa có thể hủy cho đến khi bắt đầu sản xuất. Sau khi đã bắt đầu sản xuất, việc hoàn tiền do đổi ý đơn thuần có thể bị hạn chế; các trường hợp sai chính tả, hư hỏng, sản xuất sai hoặc vấn đề giao hàng sẽ được xử lý bằng hình thức phù hợp — đổi hàng, làm lại hoặc hoàn tiền — sau khi xác nhận.",
          ],
        },
        {
          title: "5. Mở khóa bằng quảng cáo",
          paragraphs: [
            "Ưu đãi nhận được qua việc xem quảng cáo không phải là sản phẩm trả phí. Nếu phần thưởng không được cấp do lỗi của mạng quảng cáo, vui lòng thử lại trong dịch vụ hoặc liên hệ trung tâm hỗ trợ khách hàng.",
          ],
        },
        {
          title: "6. Liên hệ",
          paragraphs: [`Liên hệ về hoàn tiền: ${companyInfo.email}`],
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
          title: "Phân tích cơ bản (miễn phí)",
          paragraphs: [
            "Phân tích cơ bản của bốn dịch vụ — ghép ý nghĩa Hanja (chữ Hán), chuyển đổi tên quốc tế, chuyển đổi tên Hàn Quốc và phiên âm Hangul — được cung cấp miễn phí cho khách không đăng ký và có thể áp dụng giới hạn số lần sử dụng mỗi ngày.",
          ],
        },
        {
          title: "Sử dụng qua phần thưởng quảng cáo",
          paragraphs: [
            "Mở khóa ứng viên sau khi xem quảng cáo là ưu đãi dạng quảng cáo, không cần thanh toán riêng. Mỗi lượt quảng cáo mở khóa một ứng viên tiếp theo. Khả năng sử dụng có thể thay đổi tùy theo kho quảng cáo, quốc gia, thiết bị hoặc chính sách của nhà cung cấp quảng cáo.",
          ],
        },
        {
          title: "Các gói chi tiết ghép ý nghĩa Hanja",
          paragraphs: [
            "Giải thích chi tiết tối đa 5 ứng viên kèm phân tích Hanja tổng hợp: ₩2,900",
            "Giải thích mở rộng tối đa 10 ứng viên, phân tích Hanja tổng hợp và file PDF lưu niệm: ₩4,900",
            "Chi tiết tối đa 10 ứng viên, phân tích Hanja tổng hợp, phân tích Tứ Trụ (Saju) và Ngũ Hành cùng file PDF lưu niệm: ₩9,900",
            "Báo cáo trả phí và file PDF có thể được xem lại và tải xuống trong vòng 24 giờ sau khi thanh toán, sau đó sẽ tự động bị xóa.",
          ],
        },
        {
          title: "Mở khóa toàn bộ ứng viên",
          paragraphs: [
            "Mở khóa toàn bộ ứng viên còn lại cùng lúc, không cần xem quảng cáo, trong các dịch vụ chuyển đổi tên quốc tế, chuyển đổi tên Hàn Quốc và phiên âm Hangul: ₩990 (tính năng thanh toán đang được chuẩn bị)",
          ],
        },
        {
          title: "Sản phẩm lưu niệm tên tiếng Hàn",
          paragraphs: [
            "Các sản phẩm hữu hình như con dấu khắc tên sẽ được thông báo riêng về giá theo từng sản phẩm, phí vận chuyển và thời gian sản xuất.",
          ],
        },
        {
          title: "Thông báo trước khi thanh toán chính thức",
          paragraphs: [
            "Khi việc thẩm định cổng thanh toán (PG), đăng ký kinh doanh bán hàng qua mạng và các điều kiện hợp tác sản xuất được xác định, số tiền thanh toán thực tế, phí vận chuyển, thời gian sản xuất và điều kiện hoàn tiền sẽ được thông báo lại trên màn hình từng sản phẩm.",
          ],
        },
      ],
    },
  },
};

export default content;
