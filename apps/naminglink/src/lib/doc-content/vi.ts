import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

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
            "p": "Naming-Link giúp bạn **chọn và hiểu các tên Hàn Quốc** — hanja đứng sau tên của một đứa trẻ, một tên Hàn Quốc để sử dụng ở nước ngoài, cách viết tên của bạn bằng Hangul, và các kỷ vật như con dấu hoặc báo cáo in."
          },
          {
            "p": "Xem kết quả của bạn là **miễn phí và không cần tài khoản.** Các mục trả phí không bao giờ bán lại những gì mà màn hình đã hiển thị: chúng mở ra nhiều ứng viên hơn, thêm phân tích bằng văn bản, hoặc biến kết quả thành thứ bạn có thể giữ."
          }
        ]
      },
      {
        "title": "Dịch vụ này dành cho ai",
        "blocks": [
          {
            "p": "Có hai loại dịch vụ ở đây: một cho những người **đã có một tên Hàn Quốc**, và một cho những người **cần một cái.** Chúng yêu cầu những điều khác nhau từ bạn, vì vậy chúng được cung cấp bằng các ngôn ngữ khác nhau."
          },
          {
            "ul": [
              "**Cung cấp bằng ngôn ngữ của bạn** — viết tên của bạn bằng Hangul, và xây dựng một tên Hàn Quốc. Đây là dành cho những người không có tên Hàn Quốc, vì vậy chúng theo ngôn ngữ bạn đến.",
              "**Chỉ cung cấp bằng tiếng Hàn** — tìm hanja cho một đứa trẻ, và biến một tên Hàn Quốc thành một tên để sử dụng ở nước ngoài. Cả hai đều cần một **tên bằng Hangul hiện có** để làm việc, vì vậy các màn hình và hướng dẫn của chúng vẫn ở tiếng Hàn."
            ]
          }
        ]
      },
      {
        "title": "Kết quả của chúng tôi dựa trên điều gì",
        "blocks": [
          {
            "p": "Hanja đến từ **bảng hanja tên chính thức của Tòa án Tối cao Hàn Quốc.** Mỗi ký tự có một cách đọc cố định để sử dụng trong tên, và các ký tự ngoài bảng không thể được đăng ký. Chúng tôi không thêm vào danh sách đó hoặc chọn yêu thích."
          },
          {
            "p": "Saju và các số liệu năm yếu tố được tính toán từ **lịch âm dương Hàn Quốc**, với thời gian sinh được điều chỉnh theo thời gian mặt trời thực tế cho nơi sinh. Cách đọc là một tham chiếu truyền thống, không phải là một dự đoán."
          },
          {
            "p": "Các giải thích bằng văn bản được sản xuất bởi AI. Để giữ cho nó không **sáng tạo ra những điều**, mô hình chỉ được cung cấp đầu vào của bạn và dữ liệu tham khảo của chúng tôi, và được yêu cầu ở lại trong đó. Các hướng dẫn giải thích điều này một cách chi tiết."
          }
        ]
      },
      {
        "title": "Những gì chúng tôi không làm",
        "blocks": [
          {
            "ul": [
              "**Chúng tôi không đoán vận mệnh.** Không có gì ở đây hứa hẹn may mắn, tài sản hoặc sự bảo vệ.",
              "**Chúng tôi không lưu trữ tên của bạn.** Kết quả miễn phí không bao giờ được ghi vào máy chủ của chúng tôi, và các tài liệu trả phí được giao mà không giữ bản sao của tệp.",
              "**Trả phí không mua được câu trả lời tốt hơn.** Mở khóa bằng quảng cáo và mở khóa bằng thanh toán cung cấp chính xác cùng một nội dung."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Dịch vụ có sẵn bằng 23 ngôn ngữ. Các PDF trả phí được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer — trình tạo PDF không hỗ trợ các ký tự đó — và chúng tôi nói rõ điều này trên màn hình trước khi bạn thanh toán."
          }
        ]
      },
      {
        "title": "Liên hệ",
        "blocks": [
          {
            "p": "Thông tin công ty và cách liên hệ với chúng tôi có trên [trang liên hệ](/contact), bao gồm hoàn tiền, yêu cầu bảo mật và báo cáo lỗi."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Cách hoạt động của Naming-Link",
    "title": "Chúng tôi dựa vào điều gì để đặt tên cho bạn",
    "summary": "Cách chúng tôi chọn một họ Hàn Quốc, những gì chúng tôi kiểm tra trước khi gợi ý một tên, và cách chúng tôi viết tên của bạn bằng Hangul — với những phần mà chúng tôi cố ý bỏ qua.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "ký tự hanja tên"
              },
              {
                "value": "{syllableCount}",
                "label": "âm tiết Hangul được bao phủ"
              },
              {
                "value": "{effectiveDate}",
                "label": "ngày có hiệu lực của bảng"
              },
              {
                "value": "{avoidTotal}",
                "label": "các ký tự truyền thống bị tránh"
              }
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Các hướng dẫn dưới đây bao gồm các dịch vụ được cung cấp bằng ngôn ngữ của bạn. Naming-Link cũng có hai dịch vụ cho những người **đã có một tên Hàn Quốc** — tìm hanja cho một đứa trẻ, và biến một tên Hàn Quốc thành một tên để sử dụng ở nước ngoài. Những dịch vụ đó cần một tên bằng Hangul hiện có, vì vậy cả dịch vụ và hướng dẫn của chúng đều bằng tiếng Hàn."
          },
          {
            "p": "[Giới thiệu](/about) giải thích dịch vụ nào dành cho ai."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Cách nó hoạt động",
    "title": "Cách chúng tôi viết tên của bạn bằng Hangul",
    "summary": "Cách chúng tôi chọn âm thanh khi viết một tên nước ngoài bằng Hangul, và lý do chúng tôi không đính kèm hanja.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi mang âm thanh, không phải ý nghĩa",
        "blocks": [
          {
            "p": "Dịch vụ này viết **tên của bạn** bằng Hangul. Nó không cung cấp cho bạn một tên Hàn Quốc. Michael trở thành 마이클 — cùng một tên, được viết để người Hàn có thể đọc và nói. Chúng tôi không thay thế nó bằng một tên Hàn Quốc có nghĩa tương tự."
          },
          {
            "p": "Nếu một tên Hàn Quốc là điều bạn muốn, **đó là một dịch vụ khác.** Một dịch vụ giữ tên của bạn và chỉ thay đổi chữ viết; dịch vụ kia đề xuất một tên mới."
          }
        ]
      },
      {
        "title": "Âm thanh mà tiếng Hàn không có",
        "blocks": [
          {
            "p": "Mỗi ngôn ngữ đều có âm thanh mà tiếng Hàn thiếu — f, v, z, th, và các phân biệt nguyên âm mà tiếng Hàn không tạo ra. Đối với những âm thanh đó, chúng tôi viết những gì **một người nói tiếng Hàn thực sự nói** khi họ đọc tên của bạn lớn, thay vì phiên âm nguyên tắc từng ký hiệu một. Mục tiêu là cách viết sẽ được sử dụng, không phải là cách viết trung thực nhất về mặt kỹ thuật."
          },
          {
            "p": "Cách viết giống nhau có thể khác nhau tùy thuộc vào nguồn gốc của tên, vì vậy chúng tôi hỏi về ngôn ngữ và quốc gia của bạn và làm việc từ cách phát âm đó."
          }
        ]
      },
      {
        "title": "Nhiều cách viết, bên cạnh nhau",
        "blocks": [
          {
            "p": "Không có một câu trả lời đúng duy nhất. Cách viết gần nhất với âm thanh gốc, cách viết phổ biến nhất ở Hàn Quốc, và cách viết dễ nhất để viết thường là ba điều khác nhau. Vì vậy, chúng tôi hiển thị chúng cùng nhau và nói rõ điều gì tách biệt chúng."
          },
          {
            "p": "Nếu không có cách viết nào cảm thấy đúng, bạn có thể thêm một gợi ý về âm thanh bạn muốn và chạy lại — ví dụ, rằng một âm tiết cụ thể nên được viết khác."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Không có hanja ở đây",
        "blocks": [
          {
            "p": "Chúng tôi không gán hanja cho một phiên âm. Hanja mang ý nghĩa, và quy trình này chỉ liên quan đến âm thanh. Việc ghép các ký tự với âm thanh một cách đơn thuần có thể khiến bạn nhận được một ý nghĩa mà bạn không hề yêu cầu."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Cách thức hoạt động",
    "title": "Cách chúng tôi xây dựng một cái tên Hàn Quốc",
    "summary": "Chúng tôi chọn từ những họ có sẵn, cân nhắc xem cái tên có dễ nói và viết hay không, và hỏi cái tên đó dùng để làm gì.",
    "backLabel": "Hướng dẫn",
    "sections": [
      {
        "title": "Chúng tôi bắt đầu với họ",
        "blocks": [
          {
            "p": "Tại Hàn Quốc, họ đứng trước, và khác với tên gọi, nó không được tự do sáng tạo — bạn thừa hưởng nó. Vì vậy, chúng tôi chỉ gợi ý những họ mà người Hàn Quốc thực sự có. Hồ bơi mặc định của chúng tôi là **20 họ phổ biến nhất**, mà tổng cộng chiếm khoảng 80% dân số."
          },
          {
            "p": "Nếu họ của bạn trùng khớp với một họ Hàn Quốc thực sự về âm thanh — Wang với 왕, Ye với 예 — chúng tôi sẽ đặt cái đó lên trước. Giữ một mối liên hệ với tên gốc của bạn có giá trị hơn một họ được chọn ngẫu nhiên."
          },
          {
            "p": "Bạn có thể tự chọn một họ hoặc để chúng tôi gợi ý một cái. Dù bằng cách nào, nó sẽ là **một họ có thật**."
          }
        ]
      },
      {
        "title": "Dễ nói, dễ viết",
        "blocks": [
          {
            "p": "Đây là một cái tên mà mọi người ở Hàn Quốc sẽ thực sự gọi bạn, vì vậy điều đầu tiên chúng tôi kiểm tra là liệu một người Hàn Quốc có thể nghe nó một lần và viết lại không. Một cái tên cần phải được đánh vần mỗi lần là một gánh nặng mà bạn phải mang, không phải chúng tôi."
          },
          {
            "p": "Ý nghĩa cũng quan trọng. Tên gọi của người Hàn Quốc thường mang một ý nghĩa, vì vậy chúng tôi cho bạn biết cái tên đọc như thế nào và tại sao chúng tôi chọn nó — không chỉ là cái tên đó."
          }
        ]
      },
      {
        "title": "Chúng tôi hỏi cái tên dùng để làm gì",
        "blocks": [
          {
            "p": "Một cái tên cho giấy tờ đại học không giống như một cái tên mà bạn bè sẽ gọi qua một căn phòng, hoặc một tên mà bạn sẽ sử dụng trực tuyến. Chúng tôi hỏi bạn dự định sử dụng nó như thế nào và xem xét điều đó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đây không phải là một phiên âm",
        "blocks": [
          {
            "p": "Tại đây, chúng tôi đề xuất một **cái tên Hàn Quốc mới**. Nếu bạn muốn tên hiện tại của mình được viết bằng Hangul — Michael là 마이클 — hãy xem [hướng dẫn viết bằng Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Cách liên hệ với chúng tôi để hỏi, hoàn tiền, yêu cầu quyền riêng tư và báo cáo lỗi, cùng với thông tin công ty của chúng tôi.",
    "backLabel": "Trang chủ",
    "sections": [
      {
        "title": "Gửi email cho chúng tôi",
        "blocks": [
          {
            "p": "Gửi email đến **{email}**. Chúng tôi sẽ trả lời trong vòng hai ngày làm việc. Đối với bất kỳ điều gì liên quan đến đơn hàng — thanh toán, hoàn tiền, một tệp bạn không nhận được — vui lòng bao gồm **số đơn hàng hoặc email bạn đã thanh toán**."
          },
          {
            "p": "Gọi điện: {customerCenter} (giờ làm việc Hàn Quốc)."
          }
        ]
      },
      {
        "title": "Những gì cần gửi ở đây",
        "blocks": [
          {
            "ul": [
              "**Thanh toán và hoàn tiền** — nếu một tài liệu chưa bao giờ được sản xuất, hoặc số tiền bị tính khác với đơn hàng của bạn, chúng tôi hoàn tiền toàn bộ. Xem [chính sách hoàn tiền](/refund-policy).",
              "**Quyền riêng tư** — yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu của bạn. Xem [chính sách quyền riêng tư](/privacy).",
              "**Chỉnh sửa** — nếu một ý nghĩa, cách đọc hoặc tính toán của hanja trông sai, hãy cho chúng tôi biết. Đề cập đến màn hình nào và những gì bạn đã nhập sẽ giúp rất nhiều.",
              "**Bất kỳ điều gì khác** — hợp tác và báo chí gửi đến cùng một địa chỉ."
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
              "**Đại diện** — {representative}",
              "**Số đăng ký kinh doanh** — {businessNumber}",
              "**Số bán hàng qua thư** — {mailOrderNumber}",
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
            "p": "Bạn không cần phải bao gồm tên hoặc ngày sinh trong tin nhắn của bạn. Kết quả miễn phí không bao giờ được lưu trên máy chủ của chúng tôi, vì vậy chúng tôi không thể tra cứu lại — một số đơn hàng là đủ."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Tiêu chuẩn của chúng tôi",
    "title": "Những gì chúng tôi không sử dụng",
    "summary": "Chúng tôi không gán tổng tài vận hoặc điểm số số, cũng như không sử dụng số nét. Ngũ hành chỉ được sử dụng như một trục bổ sung. Dưới đây là lý do.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Lý do không gán tổng tài vận hoặc điểm số số",
        "blocks": [
          {
            "p": "Có những phương pháp gán tổng tài vận hoặc điểm số số cho các tên để đánh giá chúng. Naming-Link không cung cấp những con số đó. Lý do là bốn."
          },
          {
            "p": "**Đầu tiên, không chỉ có một tiêu chuẩn.** Các phương pháp tính toán vận mệnh khác nhau tùy theo trường phái, và cùng một cái tên có thể được đánh giá tích cực theo một tiêu chuẩn và tiêu cực theo một tiêu chuẩn khác. Chúng tôi không có cơ sở để quyết định cái nào là đúng."
          },
          {
            "p": "**Thứ hai, các phép tính đó dựa vào số nét.** Tuy nhiên, dữ liệu của Tòa án Tối cao không bao gồm số nét. Hơn nữa, số nét có thể khác nhau tùy thuộc vào việc chúng được tính là ký tự thông thường hay ký tự giản thể và cách các bộ thủ được tính. Vì các con số cơ bản không được xác định một cách chắc chắn, nên các điểm số được xây dựng dựa trên chúng không thể là chắc chắn."
          },
          {
            "p": "**Thứ ba, các con số có vẻ chắc chắn hơn thực tế.** Khi nó nói \"87 điểm\", nó nghe như một giá trị đo lường hơn là một cách diễn giải thông thường. Những cái tên đó có thể cảm thấy bị áp lực bởi con số đó, đẩy lùi những gì thực sự quan trọng (Có dễ gọi không? Ý nghĩa có phù hợp không? Có chứa đựng những điều mong muốn không?)."
          },
          {
            "p": "**Thứ tư, không có cách nào để xác minh.** Mối quan hệ giữa một cái tên và cuộc sống của một người không thể được xác minh. Chuyển đổi một điều không thể nói là đúng hay sai thành một điểm số dẫn đến một con số không thể được xác nhận, mặc dù nó không thể sai."
          },
          {
            "p": "Chúng tôi chỉ sử dụng những gì có thể được **chứng minh.** Bảng hanja tên chính thức của Tòa án Tối cao, các đọc được chỉ định cho mỗi ký tự và các ý nghĩa được liệt kê trong bảng. Thay vào đó, chúng tôi cung cấp lý do tại sao ứng viên này được chọn và tại sao một số ký tự bị loại trừ, cho thấy **lý do thay vì điểm số**."
          }
        ]
      },
      {
        "title": "Chúng tôi không sử dụng số nét",
        "blocks": [
          {
            "p": "Dữ liệu hanja tên chính thức do Tòa án Tối cao cung cấp không bao gồm số nét. Trong số {characterTotal} ký tự mà chúng tôi nhận được, **không có ký tự nào có số nét.**"
          },
          {
            "p": "Để sử dụng số nét, chúng tôi sẽ cần phải lấy số từ nơi khác, nhưng nếu chúng tôi không thể làm rõ nơi những con số đó đến từ đâu và tiêu chí nào được sử dụng để đếm chúng, điều đó có nghĩa là đánh giá tên dựa trên những con số không có cơ sở. Chúng tôi đã quyết định không đánh giá tên dựa trên các giá trị không thể được chứng minh."
          }
        ]
      },
      {
        "title": "Chúng tôi chỉ sử dụng năm yếu tố như một tham chiếu",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Năm yếu tố được đặt trong một vòng tròn: sinh ra giữa các hàng xóm, kiểm soát bỏ qua một",
              "wood": "gỗ",
              "fire": "lửa",
              "earth": "đất",
              "metal": "kim loại",
              "water": "nước",
              "saeng": "Sinh ra — mỗi yếu tố sinh ra cho hàng xóm của nó",
              "geuk": "Kiểm soát — mỗi yếu tố kiềm chế yếu tố mà nó bỏ qua"
            },
            "caption": "Mối quan hệ giữa năm yếu tố. Di chuyển dọc theo vòng tròn đại diện cho sự sinh ra lẫn nhau (相生), trong khi bỏ qua một và đè nén đại diện cho sự kiềm chế lẫn nhau (相剋). Chúng tôi chỉ sử dụng mối quan hệ này như một trục bổ sung để so sánh các ứng viên."
          },
          {
            "p": "Nếu bạn đã nhập tháng sinh của mình, chúng tôi sử dụng một tham chiếu đơn giản về năm yếu tố dựa trên tháng đó như một trục bổ sung để so sánh các ứng viên. Tuy nhiên, đây không phải là một phân tích saju chính xác, và **chúng tôi không tuyên bố rằng các tên quyết định vận mệnh hoặc tính cách của một người.**"
          },
          {
            "p": "Trong lựa chọn cuối cùng, những gì chúng tôi ưu tiên là âm thanh, sự kết hợp của các ý nghĩa, các giá trị mà gia đình muốn truyền đạt, và liệu nó có thể thực sự được đăng ký hay không. Nếu bạn chưa nhập tháng sinh của mình, chúng tôi hoàn toàn loại trừ tham chiếu năm yếu tố khỏi phân tích — chúng tôi không đưa ra giả định tùy tiện về thông tin không rõ."
          },
          {
            "p": "Nếu bạn muốn một phân tích chính xác dựa trên saju, chúng tôi sẽ cung cấp điều đó trong một báo cáo chi tiết riêng. Lý do chúng tôi không ưu tiên năm yếu tố trong việc ghép hanja miễn phí là vì chúng tôi không muốn đưa ra các phán đoán dựa trên năm yếu tố được suy ra từ ngày và giờ sinh không đầy đủ như thể chúng là chắc chắn."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Sản phẩm trả phí",
    "title": "Những gì được bao gồm trong sản phẩm trả phí?",
    "summary": "Chúng tôi làm rõ những gì có thể nhìn thấy miễn phí và những tính năng bổ sung nào đi kèm với việc thanh toán cho mỗi sản phẩm. Giá cả được lấy từ cài đặt sản phẩm thực tế.",
    "backLabel": "Hướng dẫn sử dụng",
    "sections": [
      {
        "title": "Những gì có thể nhìn thấy miễn phí?",
        "blocks": [
          {
            "p": "Tạo một cái tên và xem kết quả là **miễn phí**. Không cần đăng ký thành viên. Bạn có thể xem các ý nghĩa phù hợp của hanja, tạo tên Hàn Quốc, chuyển đổi tên toàn cầu và ghi chú phát âm bằng Hangul, cùng với các kết quả được đề xuất và lý do của chúng trên màn hình."
          },
          {
            "p": "Sản phẩm trả phí không **bán lại những gì đã được hiển thị trên màn hình.** Chúng mở rộng thêm nhiều ứng viên, thêm nhiều giải thích, hoặc tạo một định dạng có thể được lưu trữ hoặc truyền tải."
          }
        ]
      },
      {
        "title": "Công khai tất cả các ứng viên — {priceUnlock}",
        "blocks": [
          {
            "p": "Các kết quả được đề xuất được cấu trúc để mở từng ứng viên một. Khi xem quảng cáo, một ứng viên được mở ra một lần, trong khi sản phẩm này **mở tất cả các ứng viên còn lại cùng một lúc**."
          },
          {
            "p": "Nếu bạn không vội, bạn không cần phải mua. **Kết quả từ việc mở qua quảng cáo và kết quả từ việc thanh toán hoàn toàn giống nhau** — chỉ là vấn đề chờ đợi, và việc thanh toán không mang lại các ứng viên tốt hơn."
          }
        ]
      },
      {
        "title": "Chi tiết Hanja — Ba giai đoạn",
        "blocks": [
          {
            "p": "Có ba sản phẩm chi tiết trong quy trình chọn hanja để gắn vào một tên bằng Hangul."
          },
          {
            "ul": [
              "**Tối đa 5 ứng viên hanja chi tiết** — {priceFiveDetail}. Bạn có thể mở rộng giải thích cho tối đa năm ứng viên trên màn hình. Không có PDF.",
              "**Tối đa 10 ứng viên hanja chi tiết mở rộng PDF** — {priceTenDetail}. Số lượng ứng viên tăng lên mười, và một tài liệu PDF được bao gồm.",
              "**Tối đa 10 ứng viên hanja saju và báo cáo tổng hợp năm yếu tố** — {priceTenSaju}. Ngoài những điều trên, nó bao gồm biểu đồ saju được suy ra từ ngày sinh và các lực của năm yếu tố, xem xét lý do tại sao một hanja cụ thể phù hợp với cái tên đó từ góc độ của năm yếu tố."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja tự nó là thông tin công khai",
        "blocks": [
          {
            "p": "Các hanja có thể sử dụng và ý nghĩa của chúng đến từ bảng hanja tên chính thức do Tòa án Tối cao Hàn Quốc thiết lập, và tất cả đều có sẵn công khai trong các tài liệu hướng dẫn của dịch vụ. Những gì mà các sản phẩm trả phí bán không phải là thông tin hanja mà là **hành động chọn và giải thích nó theo tên.**"
          }
        ]
      },
      {
        "title": "PDF cho người dùng toàn cầu",
        "blocks": [
          {
            "p": "Tài liệu có sẵn để chuyển đổi tên nước ngoài thành tên Hàn Quốc hoặc viết tên bằng Hangul. Giá cả theo số tiền hiển thị trên màn hình thanh toán."
          },
          {
            "ul": [
              "**Báo cáo tên Hàn Quốc cao cấp** — 3 trang. Bao gồm bìa thư pháp, ý nghĩa của tên và lý do chọn nó, cùng với phân tích saju và năm yếu tố.",
              "**Nghệ thuật tên bằng Hangul** — 2 trang. Bao gồm bìa thư pháp và hướng dẫn phát âm. Nó chứa cách viết tên bằng Hangul và cách phát âm nó."
            ]
          }
        ]
      },
      {
        "title": "Con dấu tên",
        "blocks": [
          {
            "p": "Chúng tôi khắc tên được tạo trên màn hình thành một con dấu vật lý và gửi đến bạn. Giá cả thay đổi theo mẫu — con dấu tròn {priceStampRound}, con dấu vuông {priceStampSquare}, con dấu gỗ mun {priceStampEbony}. Giao hàng quốc tế cũng có sẵn."
          },
          {
            "p": "**Từ đây, các sản phẩm bao gồm cả phí vận chuyển.** Khác với các mặt hàng trước đó, sản xuất và giao hàng mất thời gian, và cần có địa chỉ nhận. Thông tin giao hàng chỉ được sử dụng cho việc xử lý đơn hàng và lưu giữ hợp pháp, và một khi quá trình xử lý hoàn tất, nó sẽ bị tiêu hủy sau khoảng thời gian được quy định trong chính sách."
          }
        ]
      },
      {
        "title": "Những điều cần biết trước khi mua",
        "blocks": [
          {
            "p": "**Sản phẩm kỹ thuật số được cung cấp ngay lập tức sau khi thanh toán.** Bạn có thể hủy và nhận lại toàn bộ tiền bất cứ lúc nào trước khi tải xuống bắt đầu, nhưng một khi tải xuống hoàn tất, việc rút lui do thay đổi ý kiến đơn giản sẽ bị hạn chế (Điều 17, Khoản 2 của Luật Thương mại Điện tử). Điều kiện này được đồng ý riêng trên màn hình thanh toán."
          },
          {
            "p": "**Khiếu nại về nội dung của kết quả không phải là lý do để hoàn tiền.** Tuy nhiên, nếu tài liệu không được tạo ra, tệp không thể mở, hoặc số tiền thanh toán khác với đơn hàng, nó sẽ được xử lý như một lần phát hành lại hoặc hoàn tiền toàn bộ."
          },
          {
            "p": "Các điều kiện chi tiết được nêu trong [Chính sách hoàn tiền](/refund-policy) và [Hướng dẫn giá cả](/pricing). Văn bản này phục vụ như một hướng dẫn về những gì được bao gồm, và các điều kiện pháp lý được ưu tiên trong hai tài liệu đó."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

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
      "title": "Trang Liên hệ và Giới thiệu đã mở",
      "body": [
        "Câu hỏi, hoàn tiền, yêu cầu về quyền riêng tư và báo cáo lỗi giờ đây có một nơi để gửi. Trang liên hệ ở chân trang liệt kê email và thông tin công ty của chúng tôi.",
        "Những gì mà câu trả lời của chúng tôi dựa trên, và những gì chúng tôi cố ý không làm, được viết trên trang giới thiệu."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Báo cáo PDF được phát hành bằng tiếng Anh cho tiếng Ả Rập và Khmer",
      "body": [
        "Nếu bạn đang sử dụng dịch vụ bằng tiếng Ả Rập hoặc Khmer, PDF bạn mua được sản xuất bằng tiếng Anh. Công cụ định dạng tài liệu của chúng tôi hiện chưa thể thiết lập đoạn văn bằng hai ngôn ngữ đó.",
        "Màn hình vẫn ở ngôn ngữ của bạn, và tên của bạn được in bằng chữ viết của bạn trong tài liệu.",
        "Ghi chú tương tự xuất hiện trước khi thanh toán. Khi công cụ hỗ trợ các ngôn ngữ này, chúng tôi sẽ thông báo ở đây."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Thanh toán chưa mở",
      "body": [
        "Tạo tên và đọc kết quả là miễn phí hôm nay, và không cần tài khoản.",
        "Các mục trả phí chưa được bán. Các khoản tiền được hiển thị trên trang giá sẽ áp dụng khi việc bán mở."
      ]
    }
  }
} satisfies NoticeCopy;
