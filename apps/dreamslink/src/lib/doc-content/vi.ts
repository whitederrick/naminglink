import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "guide": {
    "eyebrow": "Cơ sở để Tính Toán",
    "title": "Cơ sở nào để tính toán?",
    "summary": "Chúng tôi công bố tất cả các quy tắc mà Dreams-Link sử dụng. Bạn có thể kiểm tra các biểu tượng nào được tìm thấy, những gì được viết trong từ điển — nơi mà các giải thích hiển thị trên màn hình đến từ.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tất cả các số được viết ở đây đều **được đọc trực tiếp từ từ điển biểu tượng và các quy tắc khớp.** Vì chúng tôi không sao chép văn bản một cách thủ công, nếu từ điển được mở rộng hoặc các quy tắc được thay đổi, các số trong các tài liệu này cũng sẽ thay đổi."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Cơ sở cho Dịch Vụ",
    "title": "Cách tìm biểu tượng trong các câu chuyện giấc mơ.",
    "summary": "Nó giải thích cách các biểu tượng được chọn từ các câu viết tự do và cách chúng tôi lọc ra một biểu tượng chỉ tình cờ nằm trong một từ dài hơn — 별 (\"ngôi sao\") bên trong 특별할 (\"không có gì đặc biệt\").",
    "backLabel": "Cơ sở cho Giải Thích",
    "sections": [
      {
        "title": "Chúng tôi tìm các biểu tượng trong văn bản bạn cung cấp.",
        "blocks": [
          {
            "p": "Khi bạn tự do viết câu chuyện giấc mơ của mình, chúng tôi tìm kiếm các biểu tượng trong văn bản đó từ từ điển. Bạn không cần phải chọn mục hoặc viết theo định dạng cụ thể. Chỉ cần viết như bạn thường làm, như 'Tối qua, một con trăn khổng lồ quấn quanh tôi.'"
          },
          {
            "p": "Khi tìm kiếm, chúng tôi không chỉ xem tên của biểu tượng mà còn **{aliasTotal} tên thay thế**. Đây là những từ chỉ cùng một thứ, như 구렁이 (gureongi) và 뱀 (baem), 떨어지다 (tteoreojida) và 빠지다 (ppajida). Các biến thể với các đuôi, chẳng hạn như 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), cũng được bao gồm."
          }
        ]
      },
      {
        "title": "Các ký tự tình cờ xuất hiện trong một từ không được tính",
        "blocks": [
          {
            "p": "Đây là khía cạnh khó khăn nhất trong tiếng Hàn. Trong số các biểu tượng, có **{singleCharSymbolTotal} biểu tượng đơn ký tự** như **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), thường xuất hiện trong các từ khác."
          },
          {
            "ul": [
              "별 (\"ngôi sao\") ẩn bên trong 특**별**할 (\"không có gì đặc biệt\")",
              "게 (\"cua\") ẩn bên trong 누군가에**게** (\"bởi ai đó\")",
              "말 (\"ngựa\") bên trong **말**했다 (\"nói\"), và 배 (\"thuyền, lê\") bên trong **배**가 고팠다 (\"Chúng tôi đói\")"
            ]
          },
          {
            "p": "Việc tính toán những điều này như là biểu tượng dẫn đến các giải thích không liên quan. Do đó, chúng tôi xem xét các ký tự xung quanh — nếu **có một ký tự Hàn Quốc ở phía trước**, chúng tôi coi nó như một phần của một từ dài hơn và không tính nó, và chúng tôi xem **cái gì theo sau có phải là một hạt hoặc một đuôi động từ**, cho phép 「소가」 (soga) đi qua trong khi lọc ra 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đây là cách nó đã hoạt động",
        "blocks": [
          {
            "p": "Trước khi thực hiện quy tắc này, khi thử nghiệm với mười hai câu thực tế, **tất cả mười hai** đều chứa các biểu tượng không liên quan. Một câu không có nội dung quan trọng thậm chí còn được đánh dấu là một giấc mơ thai nghén."
          },
          {
            "p": "Bây giờ, còn lại một — biểu tượng 배 (bae) trong 「배가 고팠다」 (bae ga gopatda). Vì nó nghe giống nhau nhưng có nghĩa khác, nó không thể bị lọc ra chỉ bằng các ký tự xung quanh."
          },
          {
            "p": "Không tìm thấy điều gì là một vấn đề trung thực. Tuy nhiên, tìm thấy điều gì không liên quan có nghĩa là thiết lập một truyền thống đằng sau từ đó mà nó chưa từng có."
          }
        ]
      },
      {
        "title": "Các ký tự giống nhau luôn mang lại kết quả giống nhau",
        "blocks": [
          {
            "p": "Không có chỗ cho sự ngẫu nhiên trong các quy tắc khớp. Vì từ điển là cố định và các quy tắc được thiết lập, nếu bạn nhập cùng một câu một lần nữa, **cùng một biểu tượng sẽ xuất hiện theo cùng một thứ tự**. Giải thích bạn thấy hôm nay sẽ không khác gì so với giải thích bạn thấy ngày mai."
          },
          {
            "p": "Chất lượng này cũng là một lời hứa mà chúng tôi đã tự đặt ra. Các giải thích thay đổi mỗi lần là thú vị nhưng thiếu nền tảng. Điều này liên quan đến câu chuyện về [tại sao chúng tôi không sử dụng mô hình](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Thông Tin Cá Nhân",
    "title": "Phương Pháp Không Lưu Trữ Giấc Mơ Bạn Viết Xuống",
    "summary": "Chúng tôi giải thích ý nghĩa kỹ thuật rằng các câu chuyện giấc mơ không được ghi lại ở đâu, và những gì có trong liên kết kết quả.",
    "backLabel": "Cơ sở Giải Thích",
    "sections": [
      {
        "title": "Không Cần Thành Viên",
        "blocks": [
          {
            "p": "Dreams-Link không tạo tài khoản. Chúng tôi không thu thập tên, email, hoặc số điện thoại. Những gì chúng tôi thu thập chỉ là những giấc mơ bạn viết xuống, cảm giác của bạn khi thức dậy, và liệu bạn có mơ cùng một giấc mơ nhiều lần hay không, và điều đó không còn lại sau khi giải thích hoàn tất."
          },
          {
            "p": "Các câu chuyện giấc mơ là giá trị riêng tư nhất mà dịch vụ này nhận được. Đó là lý do tại sao các quy tắc nghiêm ngặt hơn mức cần thiết — chúng tôi thậm chí không tạo ra một bảng để ghi lại những gì bạn gửi."
          }
        ]
      },
      {
        "title": "Những gì có trong liên kết kết quả",
        "blocks": [
          {
            "p": "Khi việc tính toán hoàn tất, địa chỉ sẽ trông như thế này."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Những gì theo sau **#** là giá trị đầu vào. Phần này được gọi là **mảnh**, là một **phần mà trình duyệt không gửi đến máy chủ**. Đây là hành vi web tiêu chuẩn và không phải là quy tắc mà chúng tôi tạo ra — nó được thiết kế ban đầu để chỉ ra một vị trí trong một tài liệu, vì vậy máy chủ không cần phải thấy nó."
          },
          {
            "p": "Ở đây, thuộc tính này đặc biệt quan trọng — giấc mơ bạn cung cấp **không còn lại trong hồ sơ truy cập.**"
          },
          {
            "p": "Nói cách khác, khi bạn mở liên kết kết quả, trình duyệt đọc giá trị đó để yêu cầu một phép tính, và máy chủ của chúng tôi nhận giá trị cho phép tính, trả về câu trả lời, và sau đó quên nó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Xin hãy cẩn thận khi gửi liên kết cho người khác",
        "blocks": [
          {
            "p": "Thực tế là nó không được lưu trữ trên máy chủ không có nghĩa là liên kết đó an toàn. Liên kết kết quả chứa giấc mơ bạn cung cấp, vì vậy người nhận liên kết đó có thể đọc nội dung đó."
          }
        ]
      },
      {
        "title": "Tại sao phép tính được thực hiện trên máy chủ nhưng không được lưu trữ?",
        "blocks": [
          {
            "p": "Việc tính toán tự nó được thực hiện trên máy chủ. Tìm các biểu tượng yêu cầu toàn bộ từ điển, và từ điển đó quá lớn để gửi xuống trình duyệt. Giữ từ điển trên máy chủ cũng có nghĩa là khi một lỗi được sửa, nó sẽ được phản ánh cho tất cả mọi người ngay lập tức. Tuy nhiên, **sau khi xử lý yêu cầu, giá trị đó không được sử dụng ở đâu cả.** Không có mã nào để chèn nó vào cơ sở dữ liệu."
          },
          {
            "p": "Một hồ sơ tối thiểu cần thiết cho hoạt động được giữ lại — một bộ đếm để ngăn cùng một người gửi quá nhiều yêu cầu trong thời gian ngắn. Điều này không bao gồm nội dung giấc mơ, và địa chỉ IP truy cập cũng không được giữ lại. Chỉ một giá trị, được băm với ngày, được đếm, và giá trị đó thay đổi khi ngày thay đổi."
          }
        ]
      },
      {
        "title": "Những gì không thể làm được vì không được lưu trữ",
        "blocks": [
          {
            "p": "Thành thật mà nói, có những điều chúng tôi đã từ bỏ vì chúng tôi không lưu trữ dữ liệu."
          },
          {
            "ul": [
              "**Không có nhật ký giấc mơ.** Bạn không thể lấy lại giải thích từ tuần trước, và bạn phải có liên kết để xem lại. Điều này được thực hiện một cách có chủ ý — để tạo ra một nhật ký, các bài viết riêng tư nhất phải được lưu trữ liên tục.",
              "**Chúng tôi tính toán cùng một giá trị mỗi lần.** Không có bộ nhớ cache. Thay vào đó, từ điển là cố định, và các quy tắc khớp là xác định, vì vậy cùng một văn bản sẽ luôn mang lại cùng một biểu tượng — các quy tắc thay thế những gì mà bộ nhớ cache sẽ đảm bảo.",
              "**Làm mới sẽ đưa ra cổng quảng cáo một lần nữa.** Điều này là vì không có nơi nào để lưu lại hồ sơ xem."
            ]
          }
        ]
      },
      {
        "title": "Trong trường hợp mua hàng",
        "blocks": [
          {
            "p": "Nếu bạn mua một báo cáo, một hồ sơ giao dịch sẽ được giữ lại vào thời điểm đó. Thanh toán có thời gian lưu giữ hợp pháp được xác định, và không có lịch sử đơn hàng, việc hoàn tiền không thể được xử lý. Tuy nhiên, ngay cả như vậy, **văn bản giấc mơ được sử dụng cho việc đọc không được đính kèm vào đơn hàng** — nó được nhận lại và viết vào thời điểm đó khi tạo tài liệu sau khi xác nhận thanh toán."
          },
          {
            "p": "Để biết thêm chi tiết, vui lòng tham khảo [chính sách bảo mật](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Thông báo",
    "title": "Thông báo",
    "summary": "Đây là nơi để thông báo cho bạn về những thay đổi có thể ảnh hưởng đến việc sử dụng của bạn.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": []
  },
  "contact": {
    "eyebrow": "Liên hệ",
    "title": "Yêu cầu",
    "summary": "Đây là kênh để gửi yêu cầu về việc sử dụng, hoàn tiền, yêu cầu thông tin cá nhân và báo cáo lỗi, cùng với thông tin doanh nghiệp.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": [
      {
        "title": "Liên hệ qua Email",
        "blocks": [
          {
            "p": "Vui lòng gửi yêu cầu đến **{email}**. Chúng tôi sẽ phản hồi trong vòng 2 ngày làm việc. Đối với yêu cầu về thanh toán và hoàn tiền, việc bao gồm **số đơn hàng hoặc email thanh toán** sẽ nhanh hơn."
          },
          {
            "p": "Yêu cầu qua điện thoại được tiếp nhận tại {customerCenter}."
          }
        ]
      },
      {
        "title": "Những gì có thể gửi đến kênh này?",
        "blocks": [
          {
            "ul": [
              "**Thanh toán và Hoàn tiền** — Nếu tài liệu chưa được tạo hoặc số tiền thanh toán khác với đơn hàng, sẽ được hoàn tiền đầy đủ. Điều kiện có trong [chính sách hoàn tiền](/refund-policy).",
              "**Thông tin Cá nhân** — Chúng tôi chấp nhận yêu cầu truy cập, sửa đổi và xóa. Chính sách xử lý có trong [chính sách bảo mật](/privacy).",
              "**Báo cáo Lỗi Giải thích** — Nếu các biểu tượng được tìm thấy không chính xác hoặc giải thích có vẻ lạ, vui lòng cho chúng tôi biết. Nếu bạn bao gồm thời gian bạn đã viết câu chuyện giấc mơ đó, chúng tôi có thể tra cứu lại với cùng một văn bản."
            ]
          }
        ]
      },
      {
        "title": "Thông tin Doanh nghiệp",
        "blocks": [
          {
            "ul": [
              "**Tên Doanh Nghiệp** — {companyName}",
              "**Người đại diện** — {representative}",
              "**Số Đăng Ký Doanh Nghiệp** — {businessNumber}",
              "**Số Đăng Ký Kinh Doanh Bán Hàng Qua Thư** — {mailOrderNumber}",
              "**Địa chỉ** — {address}",
              "**Trung Tâm Khách Hàng** — {customerCenter}",
              "**Email** — {email}",
              "**Nhân viên Bảo vệ Thông tin Cá nhân** — {privacyOfficer}",
              "**Nhà cung cấp Hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Bạn không cần phải viết lại giấc mơ bạn đã cung cấp trong email yêu cầu. Chúng tôi không lưu trữ thông tin đầu vào, vì vậy chúng tôi không thể tra cứu lại, và số đơn hàng là đủ để xác minh. Vui lòng chỉ ghi lại nếu thực sự cần thiết, chẳng hạn như để báo cáo lỗi giải thích."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Nguyên tắc Dịch vụ",
    "title": "Những gì Chúng tôi Không Làm",
    "summary": "Chúng tôi không cung cấp số xổ số, nhật ký giấc mơ, xác định thai kỳ, hoặc bùa hộ mệnh. Chúng tôi giải thích lý do tại sao chúng tôi đã chọn không làm từng điều này.",
    "backLabel": "Cơ sở Giải thích",
    "sections": [
      {
        "title": "Chúng tôi không cung cấp số xổ số",
        "blocks": [
          {
            "p": "Mặc dù điều này thường được đề cập trong các dịch vụ giải thích giấc mơ, nhưng chúng tôi không làm điều này. **Không có cơ sở nào trong giải thích giấc mơ truyền thống để rút ra số từ giấc mơ.** Mặc dù có ghi chép về việc giải thích giấc mơ về lợn như là sự giàu có, nhưng không có quy tắc nào trong bất kỳ tài liệu nào sản xuất ra sáu số từ điều đó."
          },
          {
            "p": "Để tạo ra chúng, chúng tôi sẽ phải bịa ra, và vào lúc đó, dịch vụ này sẽ không còn là nơi để truyền đạt các giải thích được truyền lại bởi truyền thống. Điều này đặc biệt đáng lo ngại vì nó có thể dẫn đến tổn thất tài chính."
          }
        ]
      },
      {
        "title": "Chúng tôi không tạo nhật ký giấc mơ",
        "blocks": [
          {
            "p": "Mặc dù sẽ thuận tiện nếu có một tính năng để thu thập những giấc mơ trong quá khứ, nhưng điều đó sẽ yêu cầu chúng tôi **liên tục lưu trữ những giấc mơ bạn cung cấp.** Các câu chuyện giấc mơ là khía cạnh riêng tư nhất của những gì dịch vụ này nhận được, và chúng tôi đã quyết định không trao đổi điều đó."
          },
          {
            "p": "Thay vào đó, những giấc mơ bạn muốn giữ có thể được **lưu dưới dạng hình ảnh hoặc tài liệu.** Trách nhiệm lưu trữ thuộc về người dùng, không phải chúng tôi — [Hai Cách để Giữ Giấc Mơ của Bạn](/guide/reports)"
          }
        ]
      },
      {
        "title": "Chúng tôi không xác định thai kỳ hoặc giới tính",
        "blocks": [
          {
            "p": "Chúng tôi chỉ sẽ nêu rằng một biểu tượng được giải thích là một giấc mơ mang thai (a conception dream) đã xuất hiện. Việc bạn có mang thai hay không, hoặc đứa trẻ là con gái hay con trai **không phải là điều có thể biết được qua giấc mơ.** Những tuyên bố như vậy không xuất hiện trên màn hình hoặc trong các tài liệu trả phí."
          }
        ]
      },
      {
        "title": "Chúng tôi không bán bùa hộ mệnh hoặc bùa chú",
        "blocks": [
          {
            "p": "Một biểu tượng được đọc là không may không phải là lý do để mua bất cứ thứ gì. Một giấc mơ không may đã được sử dụng theo truyền thống để **chỉ ra một tình huống cần xem xét ngay bây giờ**, không phải để trả tiền để tránh điều gì đó."
          },
          {
            "p": "Chúng tôi không tạo ra sự lo lắng để bán một cái gì đó dựa trên nó. Những thứ duy nhất chúng tôi bán là hai thứ đã đề cập ở trên, và không cái nào cung cấp thêm giải thích mà chỉ **các cách để giữ cùng một nội dung.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Chúng tôi không đưa ra những tuyên bố chắc chắn về tương lai",
        "blocks": [
          {
            "p": "Chúng tôi không đưa ra những tuyên bố chắc chắn về việc liệu một điều gì đó sẽ xảy ra, khi nào nó sẽ xảy ra, hoặc về sức khỏe, tài sản, hoặc tuổi thọ. Truyền đạt ý nghĩa của các biểu tượng truyền thống và dự đoán tương lai là hai vấn đề khác nhau."
          }
        ]
      },
      {
        "title": "Chúng tôi không bịa ra các giải thích không tồn tại",
        "blocks": [
          {
            "p": "Đối với các biểu tượng không tồn tại trong từ điển, chúng tôi sẽ **nêu rằng chúng tôi không thể tìm thấy chúng.** Chúng tôi không ghép nối các biểu tượng tương tự hoặc lấp đầy khoảng trống bằng các câu có vẻ hợp lý. Do đó, dịch vụ này không [sử dụng trí tuệ nhân tạo cho giải thích giấc mơ](/guide/no-ai). Mô hình không nói rằng nó không biết những gì nó không biết."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu về Dreams-Link",
    "summary": "Đây là một dịch vụ giải thích giấc mơ sử dụng từ điển biểu tượng giải thích giấc mơ truyền thống. Nó làm rõ những gì được dựa trên và những gì không được nêu rõ.",
    "backLabel": "Quay lại Trang Chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì?",
        "blocks": [
          {
            "p": "Dreams-Link tìm **các biểu tượng được sử dụng trong giải thích giấc mơ truyền thống** từ những giấc mơ bạn viết và hiển thị ý nghĩa của chúng. Vì giấc mơ là điều mà chúng ta có mỗi ngày, các giải thích bạn thấy trên màn hình là **miễn phí và không yêu cầu thành viên.**"
          },
          {
            "p": "Những thứ duy nhất được bán với phí là **hai hình thức bảo tồn** — một hình ảnh chứa giấc mơ tốt (thẻ giấc mơ) và một PDF chứa bối cảnh khi một biểu tượng được coi là giấc mơ thai nghén xuất hiện."
          }
        ]
      },
      {
        "title": "Cơ sở nào?",
        "blocks": [
          {
            "p": "Cơ sở cho việc giải thích là một **từ điển gồm {symbolTotal} biểu tượng**. Chúng tôi tìm các biểu tượng trong văn bản giấc mơ và chỉ hiển thị ý nghĩa được ghi lại trong từ điển cho những biểu tượng đó. Nếu một biểu tượng có nhiều ý nghĩa, chúng tôi chọn dựa trên tình huống — như mặt trời mọc và mặt trời lặn được giải thích truyền thống là đối lập."
          },
          {
            "p": "Tất cả các ý nghĩa trong từ điển đều được **dịch từ các văn bản gốc của những cuốn sách giải thích giấc mơ cổ xưa**, và mỗi ý nghĩa đi kèm với văn bản gốc đã làm cơ sở cho nó. Các văn bản gốc được sử dụng làm cơ sở là hai — **Giải Thích Giấc Mơ của Chu Công**, đã được đọc từ lâu ở Đông Á, và **Sách Giấc Mơ của Miller** từ phương Tây xuất bản năm 1901."
          },
          {
            "p": "Việc tìm kiếm được thực hiện **chỉ theo các quy tắc cố định**. Giấc mơ giống nhau sẽ luôn cho ra cùng một biểu tượng, và các giải thích không thay đổi từ hôm qua đến hôm nay."
          }
        ]
      },
      {
        "title": "Chúng tôi không nói gì?",
        "blocks": [
          {
            "p": "**Chúng tôi không tạo ra các ý nghĩa truyền thống không có trong từ điển.** Nếu không tìm thấy biểu tượng nào, chúng tôi chỉ đơn giản thông báo rằng không có biểu tượng nào được tìm thấy và kết thúc. Việc lấp đầy khoảng trống đó bằng những từ có thể là điều mà dịch vụ này rất cẩn trọng."
          },
          {
            "p": "**Giấc mơ thai nghén chỉ là những chỉ dẫn, không phải là những quyết định.** Chúng tôi chỉ thông báo cho bạn rằng một biểu tượng được coi là giấc mơ thai nghén đã xuất hiện trong giấc mơ. Chúng tôi không dự đoán thai kỳ hay giới tính của đứa trẻ, và không có cơ sở cho những tuyên bố như vậy."
          },
          {
            "p": "Chúng tôi không **đưa ra những tuyên bố chắc chắn về sức khỏe, tài chính, hoặc sự nghiệp.** Đây là một tham chiếu từ góc độ giải thích giấc mơ truyền thống và không phải là lời khuyên y tế, tài chính, hoặc pháp lý."
          }
        ]
      },
      {
        "title": "Chúng tôi không lưu giữ những giấc mơ bạn viết.",
        "blocks": [
          {
            "p": "Những câu chuyện giấc mơ là phần riêng tư nhất của những gì dịch vụ này nhận được. Do đó, chúng tôi **không lưu trữ chúng.** Các đầu vào chỉ được sử dụng cho các phép tính và không được ghi lại dưới bất kỳ hình thức nào trên máy chủ."
          },
          {
            "p": "Chúng tôi đã quyết định **không tạo ra chức năng thu thập giấc mơ như một nhật ký giấc mơ.** Đây là một tính năng quý giá, nhưng nó sẽ yêu cầu giữ lại những bài viết riêng tư nhất."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Phương pháp được mô tả chi tiết hơn trong [tài liệu hướng dẫn](/guide). Thông tin doanh nghiệp và chi tiết liên hệ có thể được tìm thấy trong [liên hệ với chúng tôi](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Cơ sở của dịch vụ",
    "title": "Cơ sở của từ điển biểu tượng là gì?",
    "summary": "Nó làm rõ nguồn gốc của các giải thích. Tiêu chí để chia {symbolTotal} biểu tượng thành tám danh mục, lý do gắn các đoạn văn bản gốc vào mỗi ý nghĩa, và nguyên tắc không lấp đầy các khoảng trống.",
    "backLabel": "Cơ sở giải thích",
    "sections": [
      {
        "title": "Chúng tôi chỉ hiển thị những gì được viết trong từ điển.",
        "blocks": [
          {
            "p": "Các giải thích của Dreams-Link đến từ một **từ điển biểu tượng đã được viết trước**. Chúng tôi tìm các biểu tượng trong văn bản bạn cung cấp và hiển thị các ý nghĩa được ghi lại trong từ điển cho những biểu tượng đó như chúng vốn có. Chúng tôi không tạo ra các từ không có trong từ điển."
          },
          {
            "p": "Hiện tại, từ điển chứa **{symbolTotal} biểu tượng**, và tất cả các biểu tượng đó có tổng cộng **{meaningTotal} ý nghĩa**. Một số biểu tượng chỉ có một ý nghĩa, nhưng hầu hết có nhiều ý nghĩa, và cho mỗi ý nghĩa, **tình huống mà ý nghĩa đó áp dụng** cũng được ghi chú."
          }
        ]
      },
      {
        "title": "Chia thành tám danh mục.",
        "blocks": [
          {
            "p": "Chúng tôi đã nhóm những gì xuất hiện trong giấc mơ thành tám danh mục dựa trên đặc điểm của chúng. Số lượng hiện tại được liệt kê trong dấu ngoặc."
          },
          {
            "ul": [
              "**Đối tượng**({categoryThing}) · **Hành động**({categoryAction}) · **Động vật**({categoryAnimal}) — ba danh mục lớn nhất. Đây chủ yếu là những gì các cuốn sách giải thích giấc mơ cổ xưa thảo luận: các đối tượng hữu hình, thú vật, và các hành động thực hiện trong giấc mơ.",
              "**Thiên nhiên**({categoryNature}) · **Con người**({categoryPerson}) — những thứ lớn và cổ xưa như nước, lửa, mặt trời, và mặt trăng, và những người xuất hiện trong giấc mơ như vua, kẻ trộm, và người đã khuất.",
              "**Địa điểm**({categoryPlace}) · **Cơ thể**({categoryBody}) · **Màu sắc**({categoryColor}) — các địa điểm như nhà và mồ mả, các bộ phận cơ thể như răng, tóc, và máu, và các màu sắc."
            ]
          },
          {
            "p": "Để xem chúng theo danh mục, bạn có thể xem danh sách đầy đủ trong [từ điển biểu tượng](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Mỗi ý nghĩa đi kèm với một đoạn văn bản gốc.",
        "blocks": [
          {
            "p": "Mỗi trong số **{meaningTotal} ý nghĩa** trong từ điển đều đi kèm với **đoạn văn bản gốc** đã làm cơ sở cho ý nghĩa đó. Tất cả {symbolTotal} biểu tượng đều có điều này — nếu không có đoạn văn bản gốc, mục đó không thể được tạo ra."
          },
          {
            "p": "Các văn bản gốc được sử dụng làm cơ sở là hai. **Giải Thích Giấc Mơ của Chu Công** là một cuốn sách giải thích giấc mơ đã được đọc từ lâu ở Đông Á, và **Sách Giấc Mơ của Miller** là một cuốn sách phương Tây xuất bản năm 1901. Khi bạn mở một biểu tượng, bạn có thể thấy ý nghĩa đến từ văn bản gốc nào, cùng với đoạn văn và ý nghĩa của nó."
          },
          {
            "p": "**Chúng tôi không lấp đầy các khoảng trống.** Việc thêm các nguồn gốc có thể là hợp lý sẽ làm cho tài liệu dày hơn, nhưng vào thời điểm đó, từ điển này sẽ không còn là một bản dịch của những gì đã được truyền lại mà là một sản phẩm giả mạo. Chúng tôi không viết những gì không có trong văn bản gốc, và đối với những gì chúng tôi viết, chúng tôi phải đính kèm văn bản gốc."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Khi mở rộng, chúng tôi chỉ mở rộng từ văn bản gốc.",
        "blocks": [
          {
            "p": "Chúng tôi đã cố gắng tạo ra các mục dựa trên các mô hình biểu tượng, nhưng các mục kết quả hoặc lặp lại cùng một từ như 「tình yêu → mối quan hệ tốt」 hoặc không cung cấp bất kỳ cơ sở nào từ truyền thống. Do đó, **chúng tôi không bao gồm bất kỳ mục nào.** Kích thước hiện tại của từ điển là do việc dịch các văn bản gốc, không phải do việc tạo ra các mục — lý do không sử dụng các mô hình được chi tiết trong [tại sao chúng tôi không sử dụng mô hình](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Tốt và xấu được xác định bởi từ điển.",
        "blocks": [
          {
            "p": "Mỗi biểu tượng đi kèm với các chỉ dẫn về sự tốt lành và xấu xa. **Tốt {polarityPositive}**, **trung lập tùy thuộc vào tình huống {polarityAmbivalent}**, **cảnh báo {polarityNegative}**, và **trung tính {polarityNeutral}**."
          },
          {
            "p": "Trong bốn danh mục, **nhiều nhất là những cái thay đổi tùy thuộc vào tình huống.** Đây không phải là điều chúng tôi cân bằng; đó là cách nó được viết trong các văn bản gốc — ngay cả đối với cùng một biểu tượng, có nhiều nơi mà nó đã được giải thích ngược lại tùy thuộc vào những gì đã được thực hiện. Giá trị này phản ánh bản chất của từng biểu tượng, và bầu không khí tổng thể của giấc mơ được tính toán lại bằng cách tập hợp các biểu tượng đã tìm thấy."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Cơ sở dịch vụ",
    "title": "Tại sao cùng một biểu tượng lại có nhiều ý nghĩa khác nhau.",
    "summary": "Mặt trời mọc và mặt trời lặn được giải thích truyền thống là đối lập. Điều này thảo luận về cấu trúc mà {symbolTotal} biểu tượng có {meaningTotal} ý nghĩa và cách phân biệt tình huống.",
    "backLabel": "Cơ sở giải thích",
    "sections": [
      {
        "title": "Ngay cả khi các biểu tượng giống nhau, các tình huống khác nhau sẽ cho ra các ý nghĩa khác nhau.",
        "blocks": [
          {
            "p": "Trong các cuốn sách giải thích giấc mơ cổ xưa, một biểu tượng không phải lúc nào cũng có một ý nghĩa. Ngay cả đối với cùng một mặt trời, **mặt trời mọc và mặt trời lặn đã được giải thích ngược lại** — cái trước chỉ ra sự thịnh vượng trong gia đình, trong khi cái sau chỉ ra lo lắng về việc mất cha mẹ. Từ điển được viết theo cách đó."
          },
          {
            "p": "Lý do mà {symbolTotal} biểu tượng có tổng cộng {meaningTotal} ý nghĩa là vì cho mỗi ý nghĩa, **tình huống mà ý nghĩa đó áp dụng** cũng được ghi chú, vì vậy nếu tình huống đó có thể thấy trong văn bản bạn cung cấp, chúng tôi chọn ý nghĩa đó."
          }
        ]
      },
      {
        "title": "Chúng tôi phân biệt tình huống như thế nào?",
        "blocks": [
          {
            "p": "Chúng tôi xem có từ nào chỉ ra tình huống trong văn bản bạn cung cấp hay không. Trong cụm từ 「Tôi thấy mặt trời lặn」, tình huống lặn được chỉ ra, trong khi trong 「Tôi thấy mặt trời vừa mọc」, tình huống mọc được chỉ ra. Nếu không có từ nào chỉ ra tình huống, chúng tôi giải thích dựa trên **ý nghĩa cơ bản** của biểu tượng đó."
          },
          {
            "p": "Vì vậy, khi bạn viết giấc mơ của mình, xin vui lòng bao gồm **không chỉ những gì xuất hiện mà còn những hành động đã được thực hiện**; điều này sẽ làm cho việc giải thích chính xác hơn. Nói \"Tôi thấy một con lợn\" truyền đạt ít hơn so với \"con lợn đã vào nhà.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Càng viết nhiều, càng tốt, nhưng không cần phải viết dài dòng.",
        "blocks": [
          {
            "p": "Một vài câu là đủ. Việc viết nhiều hơn không nhất thiết có nghĩa là tìm thấy nhiều biểu tượng hơn; ngược lại, nếu các tuyên bố không liên quan được trộn lẫn, nó có thể dẫn đến các biểu tượng không chính xác."
          }
        ]
      },
      {
        "title": "Có {contextSplitSymbolTotal} biểu tượng với các ý nghĩa khác nhau.",
        "blocks": [
          {
            "p": "Trong số {symbolTotal} biểu tượng trong từ điển, **{contextSplitSymbolTotal}** có ý nghĩa thay đổi tùy thuộc vào tình huống. Phần còn lại có thể được giải thích theo một hướng bất kể tình huống."
          },
          {
            "p": "Những **{contextSplitSymbolTotal}** biểu tượng này là những biểu tượng nhạy cảm nhất. Đọc sai tình huống có thể dẫn đến việc truyền đạt tin tốt thành tin xấu, hoặc ngược lại. Do đó, nếu tình huống không rõ ràng, chúng ta sẽ dựa vào **ý nghĩa cơ bản của biểu tượng** mà không ép buộc một lựa chọn — chúng ta không muốn nói về điều không chắc chắn như thể nó là chắc chắn."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cảm giác khi tỉnh dậy cũng được xem xét.",
        "blocks": [
          {
            "p": "Cảm xúc và sự lặp lại được hỏi dưới nội dung giấc mơ không được sử dụng để tìm biểu tượng. Chúng được tham khảo khi xác định cách nào để giải thích trong các trường hợp có ý nghĩa khác nhau. Bạn không cần phải chọn; kết quả vẫn sẽ được cung cấp."
          }
        ]
      },
      {
        "title": "Bầu không khí tổng thể của giấc mơ được tính riêng.",
        "blocks": [
          {
            "p": "Nếu có nhiều biểu tượng được tìm thấy, chúng ta sẽ thu thập xem mỗi biểu tượng là tích cực hay cảnh báo để xác định tông màu tổng thể của giấc mơ. Một giấc mơ có một biểu tượng tốt và một biểu tượng cảnh báo không đơn giản được gọi là \"giấc mơ tốt.\""
          },
          {
            "p": "Bạn có thể xem trước các biểu tượng khác nhau và ý nghĩa của chúng trong [từ điển biểu tượng](/dream/symbols). Cũng tốt khi lướt qua những gì được bao gồm trước khi ghi lại giấc mơ của bạn."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Cơ sở của dịch vụ",
    "title": "Tiêu chí để phân biệt giữa giấc mơ tốt và giấc mơ xấu",
    "summary": "Bốn giá trị được gán cho mỗi biểu tượng và sự phân bố của chúng, lý do cho các ý nghĩa khác nhau nhất, và tại sao chúng tôi thảo luận về giấc mơ hỗn hợp như là hỗn hợp.",
    "backLabel": "Cơ sở của giải thích",
    "sections": [
      {
        "title": "Mỗi biểu tượng được gán một trong bốn loại.",
        "blocks": [
          {
            "p": "Các {symbolTotal} biểu tượng trong từ điển được phân loại thành một trong các loại sau."
          },
          {
            "ul": [
              "**Tích cực {polarityPositive}** — được giải thích là những sự kiện dễ chịu như sự giàu có, lễ kỷ niệm, hoặc ân nhân.",
              "**Lưỡng tính {polarityAmbivalent}** — các biểu tượng như mặt trời hoặc lợn có thể có ý nghĩa bị đảo ngược tùy thuộc vào hành động được thực hiện. **Đây là loại phổ biến nhất và cẩn thận nhất.**",
              "**Cảnh báo {polarityNegative}** — được giải thích là tranh chấp, tổn thất, hoặc sự kiện tiêu cực.",
              "**Trung lập {polarityNeutral}** — các biểu tượng không phải là tốt hay xấu tự thân, như màu sắc."
            ]
          }
        ]
      },
      {
        "title": "Lý do cho các ý nghĩa khác nhau nhất",
        "blocks": [
          {
            "p": "Đây không phải là một sự cân bằng mà chúng tôi đã đạt được. **Đó là cách mà các văn bản gốc được viết.** Các văn bản giải thích giấc mơ cổ xưa đã ghi lại các ý nghĩa khác nhau cho cùng một biểu tượng tùy thuộc vào tình huống, và nhiều tình huống đó là đối lập — bắt một con lợn là tốt, nhưng một con lợn chết tự nhiên là xấu, và điều tương tự cũng áp dụng cho mặt trời mọc và lặn."
          },
          {
            "p": "Do đó, thực tế rằng \"một biểu tượng tốt xuất hiện\" không có nghĩa là \"những điều tốt sẽ xảy ra.\" Những gì chúng tôi có thể truyền đạt bị giới hạn ở cách mà biểu tượng đó đã được giải thích trong truyền thống."
          }
        ]
      },
      {
        "title": "Tông màu của một giấc mơ được thu thập từ các biểu tượng của nó.",
        "blocks": [
          {
            "p": "Nếu có nhiều biểu tượng được tìm thấy, chúng tôi thu thập các ý nghĩa tốt và cảnh báo của chúng để xác định tông màu tổng thể của giấc mơ. Nếu chỉ có các biểu tượng tích cực xuất hiện, đó là một giấc mơ tốt; nếu chỉ có các biểu tượng cảnh báo xuất hiện, đó là một giấc mơ cảnh báo; nếu **hỗn hợp, chúng tôi sẽ thảo luận về nó như là hỗn hợp.**"
          },
          {
            "p": "Chúng tôi không ép buộc một giải thích hỗn hợp vào một bên. Trên thực tế, những giấc mơ mà mọi người có chủ yếu là hỗn hợp, và tóm tắt chúng là \"một giấc mơ tốt\" không chính xác và không hữu ích."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những lời chưa nói",
        "blocks": [
          {
            "p": "Chúng tôi không đưa ra những tuyên bố chắc chắn về những gì sẽ xảy ra, khi nào sẽ xảy ra, hoặc về sức khỏe và sự giàu có. Dịch nghĩa của các biểu tượng truyền thống khác với việc dự đoán tương lai."
          }
        ]
      },
      {
        "title": "Khi những giấc mơ cảnh báo xuất hiện",
        "blocks": [
          {
            "p": "Ngay cả khi một biểu tượng được giải thích là cảnh báo xuất hiện, điều đó không nhất thiết có nghĩa là tin xấu. Trong giải thích giấc mơ truyền thống, những giấc mơ xấu thường được sử dụng để chỉ **tình huống cần được xem xét ngay bây giờ.** Nếu một biểu tượng được giải thích là tranh chấp xuất hiện, nó có thể được đọc như một gợi ý để giữ im lặng."
          },
          {
            "p": "Vì lý do tương tự, dịch vụ này không bán bùa chú hoặc bùa hộ mệnh. Những thứ duy nhất được bán là [hai phương pháp để giữ giấc mơ của bạn](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Giấc mơ thụ thai",
    "title": "Cách phân biệt giấc mơ thụ thai",
    "summary": "Cách chúng tôi xác định {conceptionSymbolTotal} biểu tượng giấc mơ thụ thai, tại sao không phải tất cả giấc mơ về lợn đều là giấc mơ thụ thai, và nguyên tắc rằng chúng tôi không xác định thai kỳ hoặc giới tính.",
    "backLabel": "Cơ sở của giải thích",
    "sections": [
      {
        "title": "Đầu tiên, hãy làm rõ.",
        "blocks": [
          {
            "p": "**Dreams-Link không xác định tình trạng thai kỳ. Chúng tôi cũng không tuyên bố giới tính của đứa trẻ.** Đây không phải là điều có thể biết qua giấc mơ, cũng không phải là điều chúng tôi có thể làm."
          },
          {
            "p": "Những gì chúng tôi có thể truyền đạt bị giới hạn ở điều này — **thực tế là một biểu tượng được giải thích truyền thống là giấc mơ thụ thai xuất hiện trong giấc mơ này.** Cách mà biểu tượng đó đã được các bậc tiền bối giải thích là tất cả những gì chúng tôi có thể cung cấp."
          }
        ]
      },
      {
        "title": "Có {conceptionSymbolTotal} biểu tượng được giải thích là giấc mơ thụ thai.",
        "blocks": [
          {
            "p": "Trong số {symbolTotal} biểu tượng trong từ điển, **{conceptionSymbolTotal}** được đánh dấu là giấc mơ thụ thai. Nhiều biểu tượng là động vật như rồng, lợn và hổ, cũng như các loại trái cây như đào, hồng và táo tàu, và cũng bao gồm mặt trời và mặt trăng."
          },
          {
            "p": "Tuy nhiên, **chỉ vì biểu tượng đó xuất hiện không có nghĩa là ngay lập tức nó là giấc mơ thụ thai.** Đây là nơi dịch vụ này đã nỗ lực rất nhiều."
          }
        ]
      },
      {
        "title": "Chúng tôi xác định dựa trên ý nghĩa đã chọn, không phải biểu tượng.",
        "blocks": [
          {
            "p": "Lợn là một biểu tượng của giấc mơ thụ thai, nhưng nó cũng là **đại diện cho giấc mơ về sự giàu có.** Nếu chúng tôi tuyên bố đó là giấc mơ thụ thai chỉ vì biểu tượng xuất hiện, thì mọi người mơ thấy lợn sẽ có giấc mơ thụ thai. Trên thực tế, hầu hết đã được giải thích là giấc mơ về sự giàu có."
          },
          {
            "p": "Do đó, chúng tôi xem xét **ý nghĩa thực tế đã chọn từ biểu tượng đó, không chỉ là biểu tượng đó.** Chúng tôi chỉ đánh dấu nó là giấc mơ thụ thai khi ý nghĩa nghiêng về thụ thai được chọn dựa trên tình huống bạn cung cấp. Ngay cả với cùng một con lợn, cách giải thích có thể khác nhau dựa trên câu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nếu bạn đề cập đến thai kỳ, chúng tôi sẽ xem xét điều đó trước.",
        "blocks": [
          {
            "p": "Nếu bài viết của bạn bao gồm các thuật ngữ như thai kỳ, giấc mơ thụ thai, hoặc sinh nở, chúng tôi sẽ ưu tiên ý nghĩa thụ thai trong số các ý nghĩa mà biểu tượng đó nắm giữ. Ngay cả cùng một giấc mơ cũng có thể được giải thích khác nhau dựa trên tình huống hiện tại."
          }
        ]
      },
      {
        "title": "Lý do có báo cáo giấc mơ thụ thai riêng.",
        "blocks": [
          {
            "p": "Giấc mơ thụ thai phục vụ một mục đích khác với các giấc mơ khác. Chúng thường được thảo luận lâu sau khi đứa trẻ ra đời và được chia sẻ giữa các thành viên trong gia đình. Do đó, thay vì chỉ xem trên màn hình, chúng tôi đã tạo ra một **tài liệu có thể được giữ lại.**"
          },
          {
            "p": "Những gì được bao gồm được phác thảo trong [hai phương pháp để giữ giấc mơ của bạn](/guide/reports). Bạn có thể xem tất cả các giải thích mà không cần mua chúng."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cách Sử Dụng",
    "title": "Cách Viết Một Giấc Mơ",
    "summary": "Nếu bạn ghi lại những gì bạn đã thấy và đã làm, nó sẽ được giải thích tốt. Chúng tôi giải thích tại sao một động từ đơn quyết định ý nghĩa, và tại sao chúng tôi cũng hỏi bạn cảm thấy thế nào và liệu giấc mơ có lặp lại hay không.",
    "backLabel": "Cơ sở giải thích",
    "sections": [
      {
        "title": "Xin hãy viết lại những gì bạn đã thấy và đã làm",
        "blocks": [
          {
            "p": "Không có định dạng cụ thể nào. Hai hoặc ba câu, như bạn thường nói, là đủ. Tuy nhiên, điều được diễn giải tốt là — **những gì bạn đã thấy** và **những gì đã xảy ra**."
          },
          {
            "ul": [
              "Diễn giải tốt — 「Một con rắn lớn quấn quanh tôi」, 「Tôi thấy nước trong chảy」, 「Răng của tôi tự nhiên rụng」",
              "Không được diễn giải — 「Tôi cảm thấy sợ」, 「Tôi cảm thấy lạ」, 「Có vẻ như ai đó ghét tôi」"
            ]
          },
          {
            "p": "Nếu bạn chỉ viết cảm xúc của mình, sẽ không có biểu tượng nào để tìm. Giấc mơ truyền thống nói về [đối tượng và hành động](/guide/categories), không phải cảm xúc."
          }
        ]
      },
      {
        "title": "Việc viết lại những gì bạn đã làm làm cho nó chính xác hơn",
        "blocks": [
          {
            "p": "Ngay cả cùng một biểu tượng cũng có thể có những ý nghĩa khác nhau tùy thuộc vào tình huống, với {contextSplitSymbolTotal} trường hợp. Mặt trời mọc và mặt trời lặn đã được diễn giải theo cách đối lập trong truyền thống."
          },
          {
            "p": "Do đó, 「Tôi thấy một con lợn」 kém chính xác hơn so với 「Con lợn vào trong nhà」, và 「Có nước」 kém chính xác hơn so với 「Tôi đã uống nước trong」. **Một động từ duy nhất xác định ý nghĩa.**"
          }
        ]
      },
      {
        "title": "Lý do hỏi về cảm xúc và sự lặp lại",
        "blocks": [
          {
            "p": "Dưới nội dung giấc mơ, có một nơi để chọn **cảm giác của bạn khi bạn tỉnh dậy** và **liệu bạn có những giấc mơ lặp lại hay không**. Bạn không cần phải chọn cả hai để có kết quả."
          },
          {
            "p": "Những giá trị này không được sử dụng để tìm biểu tượng. Chúng được tham khảo khi quyết định **ý nghĩa nào để chọn** từ cùng một biểu tượng và cách truyền đạt kết quả. Giấc mơ lặp lại đã được nhìn nhận khác với một giấc mơ chỉ xảy ra một lần."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Trong trường hợp đề cập đến thai kỳ",
        "blocks": [
          {
            "p": "Nếu văn bản bao gồm các từ như thai kỳ, giấc mơ thụ thai, hoặc sinh nở, chúng tôi sẽ xem xét trước ý nghĩa giấc mơ thụ thai của biểu tượng đó. Ngay cả giấc mơ về lợn cũng đã được các bậc tiền bối diễn giải khác nhau tùy thuộc vào tình huống — [cách phân biệt 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Không cần viết dài",
        "blocks": [
          {
            "p": "Độ dài dài hơn không có nghĩa là sẽ tìm thấy nhiều biểu tượng hơn. Thực tế, nếu các từ không liên quan được trộn lẫn một cách dài dòng, có khả năng cao rằng các từ không liên quan sẽ được diễn giải như biểu tượng. Xin hãy chỉ viết lại **những cảnh đáng nhớ**."
          },
          {
            "p": "Văn bản bạn viết sẽ không được lưu ở đâu. Lý do bạn có thể viết tự do được giải thích trong [phương pháp không lưu](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Cơ sở Dịch vụ",
    "title": "Tiêu chí được chia thành Tám Danh mục",
    "summary": "Tám danh mục — từ đối tượng, hành động và động vật đến cơ thể và màu sắc — với số lượng biểu tượng mà mỗi danh mục nắm giữ, và lý do không có danh mục cho cảm xúc.",
    "backLabel": "Cơ sở Diễn giải",
    "sections": [
      {
        "title": "Chia thành tám danh mục những gì xuất hiện trong giấc mơ",
        "blocks": [
          {
            "p": "Chúng tôi đã nhóm {symbolTotal} biểu tượng thành tám danh mục theo đặc điểm của chúng. Câu hỏi phân chia là **nó xuất hiện như thế nào trong giấc mơ** — một con thú, một đối tượng, hay một điều gì đó bạn đã làm."
          },
          {
            "ul": [
              "**Đối tượng {categoryThing}** — những vật thể hữu hình như tiền, gương, và dao. Đây là danh mục dày nhất.",
              "**Hành động {categoryAction}** — những việc đã làm hoặc trải nghiệm trong giấc mơ, như tắm, tiệc tùng, hoặc bị đánh.",
              "**Động vật {categoryAnimal}** — rồng, lợn, rắn, và bò. Nhiều trong số này đã được xem như là 태몽.",
              "**Thiên nhiên {categoryNature}** — những thứ lớn và cổ xưa như nước, lửa, mặt trời, và mặt trăng.",
              "**Con người {categoryPerson}** — những người xuất hiện trong giấc mơ, như vua, kẻ trộm, và những người đã khuất.",
              "**Địa điểm {categoryPlace}** — những nơi mà giấc mơ xảy ra, như nhà, giếng, và mồ mả.",
              "**Cơ thể {categoryBody}** — răng, tóc, máu. Ý nghĩa thay đổi tùy thuộc vào vị trí trên cơ thể.",
              "**Màu sắc {categoryColor}** — chúng không có tốt hay xấu vốn có và được diễn giải dựa trên những gì chúng liên kết với."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lý do không có danh mục số",
        "blocks": [
          {
            "p": "Chúng tôi không tạo ra một danh mục cho các số như 「ba」 hoặc 「bảy」. **Không có văn bản gốc nào ghi lại một số như một mục.** Để mở danh mục đó và điền vào, chúng tôi sẽ phải viết điều gì đó không xuất hiện trong cả hai văn bản."
          }
        ]
      },
      {
        "title": "Tại sao không có danh mục cảm xúc",
        "blocks": [
          {
            "p": "Chúng tôi không tạo ra một danh mục cho cảm xúc như 「lo âu」 hoặc 「khao khát」. **Điều này là vì các văn bản diễn giải giấc mơ cổ đại không đề cập đến cảm xúc.** Cả hai văn bản gốc đều nói về những gì được nhìn thấy và những gì xảy ra, không phải cảm xúc của người mơ như một chủ đề để diễn giải."
          },
          {
            "p": "Chúng tôi đã từng cố gắng xây dựng một danh mục cho cảm xúc, và những gì xuất hiện là các thuật ngữ như 「mất tình cảm」 và 「ổn định cảm xúc」. Đây không phải là **hình thức** xuất hiện trong giấc mơ mà là từ vựng từ tâm lý học hiện đại. Đó là một loại dịch vụ khác và không phải là mục tiêu của từ điển này."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Vì vậy khi bạn viết",
        "blocks": [
          {
            "p": "Xin hãy viết lại **những gì bạn đã thấy và đã làm** thay vì cảm xúc, vì điều đó sẽ được diễn giải tốt hơn. Tuy nhiên, chúng tôi hỏi riêng về cảm giác của bạn khi bạn tỉnh dậy — điều này được tham khảo trong những tình huống mà ý nghĩa có thể thay đổi ngay cả với cùng một biểu tượng."
          }
        ]
      },
      {
        "title": "Màu sắc không được sử dụng một mình",
        "blocks": [
          {
            "p": "Màu sắc {categoryColor} không có tốt hay xấu vốn có. Cũng như rắn xanh và rắn đỏ đã được diễn giải khác nhau, ý nghĩa của chúng thay đổi dựa trên **những gì chúng liên kết với**. Do đó, danh mục này được coi là các giá trị được đọc khi xuất hiện với các biểu tượng khác."
          },
          {
            "p": "Danh sách đầy đủ theo danh mục có sẵn trong [Từ điển Biểu tượng](/dream/symbols). Khi bạn mở một biểu tượng, ý nghĩa được truyền đạt, danh mục, và các biểu tượng liên quan sẽ được cung cấp."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cách Sử Dụng",
    "title": "Khi Một Biểu Tượng Không Được Tìm Thấy",
    "summary": "Nếu không tìm thấy gì, chúng tôi sẽ nói như vậy. Chúng tôi đề cập đến lý do điều đó xảy ra, những gì chúng tôi hiển thị trên màn hình đó thay thế, và cách từ điển được mở rộng.",
    "backLabel": "Cơ sở Diễn giải",
    "sections": [
      {
        "title": "Khi chúng tôi không tìm thấy gì, chúng tôi nói rằng chúng tôi không tìm thấy gì",
        "blocks": [
          {
            "p": "Nếu chúng tôi không thể tìm thấy một biểu tượng nào trong văn bản bạn đã viết, chúng tôi **nói rằng chúng tôi không tìm thấy gì.** Chúng tôi không ép một biểu tượng tương tự lên đó, hoặc viết một câu hợp lý để lấp đầy khoảng trống."
          },
          {
            "p": "Đây là vấn đề đáng lo ngại nhất đối với dịch vụ này. Ngay khi bạn lấp đầy khoảng trống, diễn giải đến và những gì thực sự được thực hiện sẽ khác nhau."
          }
        ]
      },
      {
        "title": "Tại sao không thể tìm thấy?",
        "blocks": [
          {
            "p": "Thông thường, đó là một trong những điều sau."
          },
          {
            "ul": [
              "**Đó là một biểu tượng chưa có trong từ điển.** Hiện tại, có {symbolTotal} biểu tượng được liệt kê, nhưng còn nhiều biểu tượng khác có thể xuất hiện trong giấc mơ.",
              "**Bạn chỉ viết cảm xúc của mình.** Nếu bạn chỉ có những cảm xúc như \"Tôi cảm thấy sợ\" hoặc \"Tôi cảm thấy lạ,\" thì không có biểu tượng nào có thể được xác định. Giải thích giấc mơ truyền thống đề cập đến **các đối tượng và hành động có thể nhìn thấy**, không phải cảm xúc.",
              "**Nó quá ngắn.** Tốt hơn là viết thành câu thay vì chỉ một hoặc hai từ."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Khi bạn cố gắng viết lại",
        "blocks": [
          {
            "p": "Vui lòng bao gồm **những gì bạn đã thấy và những gì bạn đã làm** trong giấc mơ. Nói \"Tôi cảm thấy lo lắng\" kém hiệu quả hơn so với việc nói \"răng của tôi tự nhiên rụng,\" và \"Tôi thích điều đó\" kém hiệu quả hơn so với việc nói \"Tôi thấy nước trong chảy.\""
          }
        ]
      },
      {
        "title": "Chúng tôi không để màn hình trống",
        "blocks": [
          {
            "p": "Khi một cái gì đó không thể được tìm thấy, chúng tôi cũng hiển thị **{popularSymbolCount} biểu tượng được tìm kiếm nhiều nhất** trên màn hình đó. Những biểu tượng này được chọn từ những biểu tượng đại diện nhất trong từ điển, điều này có thể giúp bạn nhớ nếu một trong số chúng có trong giấc mơ của bạn."
          },
          {
            "p": "Nếu bạn muốn duyệt qua mọi thứ, bạn có thể tìm {symbolTotal} biểu tượng được tổ chức theo danh mục trong [từ điển biểu tượng](/dream/symbols). Mỗi biểu tượng bao gồm ý nghĩa mà nó truyền đạt và các biểu tượng liên quan."
          }
        ]
      },
      {
        "title": "Từ điển sẽ mở rộng như thế nào trong tương lai?",
        "blocks": [
          {
            "p": "Thay vì tăng số lượng, chúng tôi trước tiên tập trung vào **xác định chính xác những gì đã có.** Chúng tôi đã bao gồm {aliasTotal} tên gọi thay thế cho cùng một biểu tượng, và chúng tôi đã đảm bảo rằng các từ có hậu tố thay đổi hình thức của chúng cũng có thể được xác định."
          },
          {
            "p": "Khi mở rộng các biểu tượng, chúng tôi chỉ bao gồm **những gì được viết trong văn bản gốc.** Nếu một ý nghĩa không có cụm từ gốc tương ứng, một mục sẽ không được tạo ra — chỉ đơn giản là tăng số lượng mà không có cơ sở biến nó thành sáng tạo, không phải từ điển. Những lý do cho nỗ lực này và kết quả của nó được ghi chép trong [tại sao chúng tôi không sử dụng mô hình](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Cơ sở Dịch vụ",
    "title": "Lý do không sử dụng trí tuệ nhân tạo trong giải thích giấc mơ",
    "summary": "Không có mã nào gọi một mô hình để tạo ra các giải thích. Đây là kết quả của việc cố gắng mở rộng từ điển bằng cách sử dụng một mô hình và những gì đã đạt được và những gì đã hy sinh như một kết quả.",
    "backLabel": "Cơ sở Giải thích",
    "sections": [
      {
        "title": "Trí tuệ nhân tạo không được sử dụng trong giải thích giấc mơ",
        "blocks": [
          {
            "p": "Nhiều dịch vụ giải thích giấc mơ hiện tại cho thấy các văn bản được tạo ra bằng cách chèn các câu chuyện giấc mơ vào các mô hình sinh. Dreams-Link không làm điều này. **Không có mã nào gọi một mô hình để tạo ra các giải thích.**"
          },
          {
            "p": "Những gì chúng tôi làm là đơn giản. Chúng tôi tìm các biểu tượng trong văn bản bạn cung cấp và chọn các ý nghĩa mà từ điển đã viết về những biểu tượng đó. Không có chỗ cho các câu không có trong từ điển."
          },
          {
            "p": "Từ điển tự nó không được tạo ra bởi một mô hình. Mỗi ý nghĩa đi kèm với **đoạn văn nào từ văn bản giải thích giấc mơ gốc mà nó đến từ**, và đoạn văn đó được so sánh từng từ với tệp gốc."
          }
        ]
      },
      {
        "title": "Tại sao quyết định này được đưa ra?",
        "blocks": [
          {
            "p": "**Các mô hình không nói rằng họ không biết những gì họ không biết.** Khi được hỏi về các biểu tượng không có cơ sở truyền đạt, họ bịa ra các nguồn gốc hợp lý. Và liệu nó có được bịa ra hay không là điều mà người đọc không thể phân biệt. Nếu sự sáng tạo được chèn vào nơi truyền đạt truyền thống, tiền đề của dịch vụ sẽ sụp đổ."
          },
          {
            "p": "Chúng tôi đã thử để một mô hình tạo ra các biểu tượng để mở rộng từ điển. Trong số sáu mươi sáu ví dụ được chọn là xứng đáng để áp dụng, **năm mươi lăm không thể cung cấp bất kỳ cơ sở truyền đạt nào**, và cũng có những ví dụ như tàu điện ngầm và đường cao tốc không thể tồn tại trong giải thích giấc mơ truyền thống. Do đó, **không có cái nào được bao gồm.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Điều tương tự cũng đúng với một mô hình lớn hơn",
        "blocks": [
          {
            "p": "Khi chúng tôi chạy điều tương tự trên một mô hình tốt hơn, một trong mười chín đã vượt qua, và cái đó chỉ là sự lặp lại của cùng một từ với cùng một cơ sở. Một mô hình lớn hơn chỉ nói **hợp lý hơn** về những gì nó không biết."
          }
        ]
      },
      {
        "title": "Lợi ích của việc không sử dụng mô hình",
        "blocks": [
          {
            "ul": [
              "**Nếu đó là cùng một giấc mơ, cùng một giải thích sẽ xuất hiện.** Những từ không thay đổi mỗi lần bạn nhìn vào nó.",
              "**Nó nhanh.** Không cần chờ phản hồi của mô hình, vì vậy kết quả có sẵn ngay lập tức.",
              "**Giấc mơ bạn viết không ra ngoài.** Không cần gửi nó đến máy chủ của công ty bên ngoài — vui lòng đọc điều này cùng với [phương pháp không lưu](/guide/no-storage).",
              "**Nó có thể được cung cấp miễn phí.** Giấc mơ là điều chúng ta có mỗi ngày, vì vậy có nhiều yêu cầu. Nếu một mô hình được gọi cho mỗi yêu cầu, chi phí phải được trang trải từ đâu đó."
            ]
          }
        ]
      },
      {
        "title": "Thay vào đó, những gì đã bị hy sinh",
        "blocks": [
          {
            "p": "Chúng tôi không thể giải thích những gì không có trong từ điển. Nếu chúng tôi đã sử dụng một mô hình, sẽ có một câu trả lời hợp lý cho bất kỳ điều gì bạn viết. Chúng tôi đã chọn **nói rằng chúng tôi không thể tìm thấy khi chúng tôi không thể tìm thấy.** Những gì chúng tôi hiển thị vào thời điểm đó được ghi chép trong [khi một biểu tượng không thể được tìm thấy](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Sản phẩm Trả phí",
    "title": "Hai cách để giữ giấc mơ của bạn",
    "summary": "Giải thích bản thân không phát sinh phí. Nó giải thích hai tùy chọn trả phí là gì, chúng chứa gì, và tại sao chúng không phải là những giải thích tốt hơn.",
    "backLabel": "Cơ sở Giải thích",
    "sections": [
      {
        "title": "Giải thích bản thân không phát sinh phí",
        "blocks": [
          {
            "p": "Việc ghi lại giấc mơ của bạn và xem những biểu tượng nào được bao gồm **không tốn tiền và không yêu cầu thành viên.** Vì mọi người đều mơ mỗi ngày, chúng tôi đã đánh giá rằng không gian này nên được cung cấp miễn phí."
          },
          {
            "p": "**Hai tùy chọn trả phí không phải là những giải thích tốt hơn.** Chúng là **hai cách để giữ cùng một giải thích.** Nội dung bạn thấy trên màn hình không thay đổi sau khi thanh toán."
          }
        ]
      },
      {
        "title": "Thẻ Giấc Mơ — Một Hình Ảnh",
        "blocks": [
          {
            "p": "Chúng tôi cung cấp các biểu tượng được tìm thấy trong giấc mơ của bạn và ý nghĩa của chúng trong **một hình ảnh.** Đây là một tệp hình ảnh, không phải PDF, vì vậy bạn có thể lưu nó như vậy hoặc gửi cho người khác."
          },
          {
            "p": "Điều này dành cho những ai cảm thấy tiếc nuối khi một giấc mơ tốt biến mất sau khi đóng màn hình. Vì chúng tôi không lưu giấc mơ, đây là cách duy nhất để giữ chúng nếu bạn muốn bảo tồn chúng."
          }
        ]
      },
      {
        "title": "Báo cáo Giấc Mơ Thai Nghén — Tài liệu {conceptionPages} trang",
        "blocks": [
          {
            "p": "Chúng tôi tạo ra một **tài liệu {conceptionPages} trang** về những giấc mơ cho thấy các biểu tượng chỉ ra một giấc mơ thai nghén. Nó bao gồm các biểu tượng nào đã xuất hiện, cách những biểu tượng đó đã được giải thích trong truyền thống, và một không gian để ghi lại thông tin đó."
          },
          {
            "p": "Giấc mơ thai nghén thường được thảo luận và chia sẻ giữa các thành viên trong gia đình ngay cả sau khi đứa trẻ được sinh ra, vì vậy chúng tôi đã tạo ra một tài liệu riêng cho những giấc mơ quá quý giá để chỉ xem trên màn hình."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những từ không được sử dụng ở đây",
        "blocks": [
          {
            "p": "Chúng tôi không đưa ra phán đoán về tình trạng thai kỳ hoặc giới tính của đứa trẻ. Những tuyên bố như vậy không được bao gồm trong tài liệu. Để biết thêm chi tiết, vui lòng tham khảo [cách giấc mơ thai nghén được lọc](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Tại sao không còn tài liệu nữa?",
        "blocks": [
          {
            "p": "Dịch vụ anh chị em sản xuất một báo cáo chín trang. Điều này là do động cơ saju trích xuất nhiều giá trị từ một ngày sinh duy nhất. Giải thích giấc mơ trong truyền thống Hàn Quốc không hoạt động theo cách đó."
          },
          {
            "p": "Từ điển chứa {symbolTotal} biểu tượng và {meaningTotal} ý nghĩa, nhưng **chỉ một vài biểu tượng thực sự áp dụng cho một giấc mơ duy nhất.** Để mở rộng điều đó thành chín trang, người ta sẽ phải viết những điều không có trong bất kỳ văn bản gốc nào, và đó chính xác là điều mà dịch vụ này đã chọn không làm. Do đó, tài liệu dài bằng những gì mà các tài liệu cho phép một cách trung thực, và không dài hơn."
          }
        ]
      },
      {
        "title": "Giá trị và Tính khả dụng",
        "blocks": [
          {
            "p": "Giá cả có sẵn trong [hướng dẫn giá](/pricing). Lý do tài liệu này không liệt kê số tiền là có chủ ý — để ngăn chặn tình huống mà tài liệu hướng dẫn vẫn giữ số tiền lỗi thời khi giá trị thay đổi. Màn hình và các điều khoản đều đọc số tiền từ cùng một nơi."
          },
          {
            "p": "Tài liệu bạn đã thanh toán có thể **được nhận lại với cùng một đơn hàng.** Tuy nhiên, vì chúng tôi không lưu trữ tệp, nó không thể được tái tạo một khi bạn rời khỏi màn hình kết quả — vui lòng giữ tệp bạn đã nhận."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const VI_NOTICES = {
  "kindLabels": {
    "service": "Dịch vụ",
    "product": "Báo cáo",
    "engine": "Tính toán",
    "support": "Hỗ trợ"
  },
  "intro": "Các thay đổi về điều khoản sử dụng của bạn — giá cả, chính sách — được đăng ở đây trước khi có hiệu lực. Các cải tiến nội bộ như màn hình nhanh hơn không được đăng ở đây: những gì xuất hiện ở đây là những gì bạn cần biết.",
  "empty": {
    "title": "Không có thông báo nào được đăng",
    "body": "Nếu có bất kỳ thay đổi nào cần thông báo cho bạn, chúng sẽ được đăng ở đây."
  },
  "effective": "Có hiệu lực từ {date}",
  "pager": {
    "label": "Trang thông báo",
    "newer": "← Mới nhất",
    "older": "Thông báo trước đó →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Giấc mơ bạn cung cấp không được lưu trữ.",
      "body": [
        "Câu chuyện giấc mơ là những giá trị riêng tư nhất mà dịch vụ này nhận được. Do đó, chúng không được ghi lại trong bất kỳ bảng nào. Dữ liệu chỉ được mang theo trong địa chỉ kết quả để tính toán, và một khi cửa sổ bị đóng, nó sẽ biến mất.",
        "Chúng tôi quyết định không tạo ra một tính năng thu thập giấc mơ và hiển thị dòng chảy (nhật ký giấc mơ). Đây là một tính năng hữu ích, nhưng để làm như vậy, những viết lách riêng tư nhất phải được lưu trữ liên tục.",
        "Khi bạn gửi liên kết kết quả cho người khác, nó chứa nội dung giấc mơ. Vui lòng cẩn thận khi chia sẻ."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Các kết quả bao gồm từ điển biểu tượng và tiêu chí tính toán.",
      "body": [
        "Cơ sở để giải thích là từ điển biểu tượng giấc mơ truyền thống. Các kết quả và tài liệu sẽ bao gồm phiên bản của từ điển đó (ví dụ: 1.2.0) và phiên bản của các quy tắc khớp (ví dụ như dream-1.0.0). Cùng một giấc mơ sẽ luôn cho ra cùng một biểu tượng dựa trên cùng một tiêu chí.",
        "Nếu chúng tôi thêm biểu tượng vào từ điển hoặc thay đổi ý nghĩa theo cách có thể thay đổi kết quả, sự thật này sẽ được trình bày ở đây. Điều này là vì các kết quả bạn nhận được trước đó có thể thay đổi.",
        "Chúng tôi không tạo ra các ý nghĩa truyền thống không có trong từ điển. Nếu không tìm thấy biểu tượng nào, chúng tôi chỉ đơn giản thông báo rằng không có biểu tượng nào được tìm thấy và kết thúc."
      ]
    },
    "2026-08-06-conception": {
      "title": "Chúng tôi chỉ thông báo cho bạn về một giấc mơ thai nghén và không đưa ra phán đoán.",
      "body": [
        "Nếu các biểu tượng được coi là giấc mơ thai nghén xuất hiện trong giấc mơ, chúng tôi sẽ thông báo cho bạn về thực tế đó. Tuy nhiên, chúng tôi không xác định tình trạng mang thai hoặc giới tính của đứa trẻ — những tuyên bố như vậy không có cơ sở, và các phán đoán y tế là trách nhiệm của các cơ sở y tế.",
        "Việc đề cập đến con trai và con gái trong các câu chuyện truyền thống là một phản ánh của phong tục đã được truyền lại, và điều đó không có nghĩa là chúng tôi đang dự đoán chính xác."
      ]
    }
  }
} satisfies NoticeCopy;
