import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Tiếng Việt — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const VI_DOCS = {
  "about": {
    "eyebrow": "Giới thiệu",
    "title": "Giới thiệu về Dreams-Link",
    "summary": "Đây là một dịch vụ giải mã giấc mơ sử dụng từ điển biểu tượng giải mã giấc mơ truyền thống. Nó làm rõ những gì được sử dụng làm cơ sở và những gì không được đề cập.",
    "backLabel": "Quay lại Trang chủ",
    "sections": [
      {
        "title": "Chúng tôi làm gì?",
        "blocks": [
          {
            "p": "Dreams-Link tìm **các biểu tượng được sử dụng trong giải mã giấc mơ truyền thống** từ những giấc mơ bạn ghi lại và hiển thị ý nghĩa của chúng. Vì giấc mơ là điều chúng ta trải nghiệm hàng ngày, các giải thích hiển thị trên màn hình là **miễn phí và không yêu cầu thành viên.**"
          },
          {
            "p": "Những thứ duy nhất được bán với phí là **hai hình thức bảo tồn** — một hình ảnh (thẻ giấc mơ) chứa một giấc mơ tốt và một PDF ghi lại bối cảnh khi một biểu tượng được coi là một 태몽 xuất hiện."
          }
        ]
      },
      {
        "title": "Cơ sở cho việc giải thích là gì?",
        "blocks": [
          {
            "p": "Cơ sở cho việc giải thích là một **từ điển gồm {symbolTotal} biểu tượng**. Chúng tôi tìm các biểu tượng trong văn bản giấc mơ và chỉ hiển thị các ý nghĩa được ghi lại trong từ điển cho những biểu tượng đó. Nếu một biểu tượng có nhiều ý nghĩa, chúng tôi chọn dựa trên ngữ cảnh — ví dụ, việc cầm một con rắn và bị cắn được coi là đối lập trong truyền thống."
          },
          {
            "p": "Việc tìm kiếm được thực hiện **chỉ theo các quy tắc cố định**. Nếu đó là cùng một giấc mơ, cùng một biểu tượng sẽ luôn xuất hiện, và việc giải thích sẽ không thay đổi từ hôm qua đến hôm nay."
          }
        ]
      },
      {
        "title": "Chúng tôi không nói gì?",
        "blocks": [
          {
            "p": "**Chúng tôi không sáng tạo các ý nghĩa truyền thống không có trong từ điển.** Nếu không tìm thấy biểu tượng nào, chúng tôi chỉ đơn giản thông báo rằng không có biểu tượng nào được tìm thấy và kết thúc. Việc lấp đầy khoảng trống đó bằng những từ có thể là điều mà dịch vụ này rất cẩn trọng."
          },
          {
            "p": "**Một 태몽 chỉ là một dấu hiệu, không phải là một phán xét.** Chúng tôi chỉ thông báo cho bạn rằng một biểu tượng được coi là một 태몽 xuất hiện trong giấc mơ. Chúng tôi không dự đoán mang thai hay giới tính của đứa trẻ, và không có cơ sở cho những tuyên bố như vậy."
          },
          {
            "p": "Chúng tôi không **đưa ra những tuyên bố chắc chắn về sức khỏe, tài chính, hoặc sự nghiệp.** Đây là một tham chiếu từ góc độ giải mã giấc mơ truyền thống và không phải là lời khuyên y tế, tài chính, hoặc pháp lý."
          }
        ]
      },
      {
        "title": "Chúng tôi không lưu giữ những giấc mơ bạn ghi lại.",
        "blocks": [
          {
            "p": "Câu chuyện giấc mơ là phần riêng tư nhất của những gì dịch vụ này nhận được. Do đó, chúng tôi **không lưu trữ chúng.** Dữ liệu nhập vào chỉ được sử dụng cho các phép tính và không được ghi lại trên bất kỳ nhật ký máy chủ nào."
          },
          {
            "p": "Chúng tôi đã quyết định **không tạo ra một chức năng để thu thập giấc mơ như một nhật ký giấc mơ.** Đây là một tính năng quý giá, nhưng nó sẽ yêu cầu giữ những tác phẩm viết riêng tư nhất."
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
  "guide": {
    "eyebrow": "Cơ sở cho Tính toán",
    "title": "Cơ sở cho việc tính toán là gì?",
    "summary": "Chúng tôi công bố tất cả các quy tắc mà Dreams-Link sử dụng. Bạn có thể kiểm tra các biểu tượng nào được tìm thấy, những gì được viết trong từ điển — nơi mà các giải thích hiển thị trên màn hình đến từ.",
    "backLabel": "Quay lại Trang chủ",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Tất cả các số được viết ở đây đều được **đọc trực tiếp từ từ điển biểu tượng và các quy tắc tìm kiếm.** Vì chúng tôi không sao chép văn bản bằng tay, nếu từ điển được mở rộng hoặc các quy tắc được thay đổi, các số trong các tài liệu này cũng sẽ thay đổi."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Cơ sở cho Dịch vụ",
    "title": "Cơ sở của từ điển biểu tượng là gì?",
    "summary": "Nó làm rõ nguồn gốc của các giải thích. Tiêu chí để chia 215 biểu tượng thành chín danh mục, lý do chỉ 24 biểu tượng có thể được chứng minh, và tại sao chúng tôi không lấp đầy các khoảng trống.",
    "backLabel": "Cơ sở cho Giải thích",
    "sections": [
      {
        "title": "Chúng tôi chỉ hiển thị những gì được viết trong từ điển.",
        "blocks": [
          {
            "p": "Các giải thích từ Dreams-Link đến từ một **từ điển biểu tượng đã được viết trước.** Chúng tôi tìm các biểu tượng trong văn bản bạn cung cấp và hiển thị các ý nghĩa được ghi lại trong từ điển cho những biểu tượng đó. Chúng tôi không tạo ra các từ không có trong từ điển."
          },
          {
            "p": "Hiện tại, từ điển chứa **{symbolTotal} biểu tượng**, và những biểu tượng đó có tổng cộng **{meaningTotal} ý nghĩa**. Hầu hết các biểu tượng chỉ có một ý nghĩa, trong khi một số có nhiều ý nghĩa tùy thuộc vào ngữ cảnh."
          }
        ]
      },
      {
        "title": "Chia thành chín danh mục.",
        "blocks": [
          {
            "p": "Chúng tôi đã nhóm những gì xuất hiện trong giấc mơ thành chín danh mục dựa trên đặc điểm của chúng. Các số trong dấu ngoặc là số lượng hiện tại."
          },
          {
            "ul": [
              "**Đối tượng**({categoryThing}) · **Động vật**({categoryAnimal}) · **Thiên nhiên**({categoryNature}) — ba danh mục lớn nhất. Giải mã giấc mơ truyền thống chủ yếu thảo luận về các đối tượng nhìn thấy, động vật và các yếu tố của bầu trời và nước.",
              "**Hành động**({categoryAction}) · **Cơ thể**({categoryBody}) — những gì đã được thực hiện, như bị đuổi hoặc ngã, và nơi trên cơ thể, như mặt hoặc tóc.",
              "**Con người**({categoryPerson}) · **Địa điểm**({categoryPlace}) · **Màu sắc**({categoryColor}) · **Số**({categoryNumber})"
            ]
          },
          {
            "p": "Để xem chúng theo danh mục, bạn có thể xem danh sách đầy đủ trong [từ điển biểu tượng](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Chỉ {cultureNoteTotal} có thể được chứng minh.",
        "blocks": [
          {
            "p": "Trong số các biểu tượng, **{cultureNoteTotal}** có lý do cho việc giải thích được viết kèm theo. Ví dụ, lý do phân biệt giữa răng trên và răng dưới trong một giấc mơ mất răng. Các biểu tượng còn lại có khoảng trống."
          },
          {
            "p": "**Chúng tôi không lấp đầy các khoảng trống.** Việc thêm các nguồn gốc có thể là sẽ làm cho tài liệu dày hơn, nhưng vào lúc đó, từ điển này sẽ không truyền đạt truyền thống mà sẽ làm giả nó. Thật trung thực hơn khi phân biệt giữa những gì có thể và không thể được chứng minh."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Lý do không mở rộng từ điển một cách tùy tiện.",
        "blocks": [
          {
            "p": "Chúng tôi thực sự đã cố gắng mở rộng các biểu tượng lên hàng trăm nhưng đã từ bỏ. Các mục tự động tạo ra hoặc lặp lại cùng một cụm từ như 'tình yêu → mối quan hệ tốt' hoặc không cung cấp bất kỳ nguồn gốc nào có thể chứng minh. Chúng tôi kết luận rằng **tìm chính xác những gì tồn tại** thì tốt hơn là chỉ đơn giản là tăng số lượng."
          }
        ]
      },
      {
        "title": "Tốt và xấu được xác định bởi từ điển.",
        "blocks": [
          {
            "p": "Mỗi biểu tượng có cả ý nghĩa tốt và xấu. **Tốt {polarityPositive}**, **trung lập {polarityAmbivalent}**, **cảnh báo {polarityNegative}**, và **trung tính {polarityNeutral}**."
          },
          {
            "p": "Thực tế rằng các ý nghĩa tốt vượt quá một nửa không phải vì chúng tôi hào phóng, mà vì giải mã giấc mơ truyền thống luôn như vậy — các biểu tượng lớn và mạnh như lợn, rồng và lửa thường được coi là điềm tốt. Tuy nhiên, không phải tất cả các giấc mơ đều được giải thích tích cực. Giá trị này phản ánh bản chất của mỗi biểu tượng, và bầu không khí tổng thể của giấc mơ được đánh giá lại bằng cách tập hợp các biểu tượng đã tìm thấy."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Cơ sở cho Dịch vụ",
    "title": "Cách tìm các biểu tượng trong câu chuyện giấc mơ.",
    "summary": "Nó giải thích cách các biểu tượng được chọn từ các câu viết tự do và cách lọc ra các chữ cái vô tình nhập vào các từ như 'đặc biệt'.",
    "backLabel": "Cơ sở cho Giải thích",
    "sections": [
      {
        "title": "Chúng tôi tìm các biểu tượng trong văn bản bạn cung cấp.",
        "blocks": [
          {
            "p": "Khi bạn tự do viết câu chuyện giấc mơ của mình, chúng tôi tìm kiếm các biểu tượng trong văn bản đó từ từ điển. Bạn không cần phải chọn các mục hoặc viết theo định dạng cụ thể. Chỉ cần viết như bạn thường làm, như 'Tối qua, một con trăn khổng lồ quấn quanh tôi.'"
          },
          {
            "p": "Khi tìm kiếm, chúng tôi không chỉ xem xét tên của biểu tượng mà còn cả **{aliasTotal} tên gọi thay thế**. Đây là những từ chỉ cùng một thứ, như 구렁이 (gureongi) và 뱀 (baem), 떨어지다 (tteoreojida) và 빠지다 (ppajida). Các biến thể với đuôi, chẳng hạn như 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), cũng được bao gồm."
          }
        ]
      },
      {
        "title": "Các ký tự xuất hiện tình cờ trong một từ sẽ không được tính",
        "blocks": [
          {
            "p": "Đây là khía cạnh khó khăn nhất trong tiếng Hàn. Trong số các biểu tượng, có **{singleCharSymbolTotal} biểu tượng đơn** như **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), thường xuất hiện trong các từ khác."
          },
          {
            "ul": [
              "**ngôi sao** trong \"Đó là một ngày bình thường\"",
              "**thứ** trong \"Tôi bị ai đó đuổi\"",
              "**từ** trong \"Người đó đã nói\" và **bụng** trong \"Tôi đã đói\""
            ]
          },
          {
            "p": "Việc tính những điều này như là biểu tượng dẫn đến những diễn giải không liên quan. Do đó, chúng tôi xem xét các ký tự xung quanh — nếu **có một ký tự Hàn Quốc ở phía trước**, chúng tôi coi đó là một phần của một từ và không tính vào, và chúng tôi phân biệt xem ký tự đính kèm ở cuối có phải là một hạt hay đuôi hay không, cho phép 「소가」 (soga) đi qua trong khi lọc ra 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Đây là cách nó đã hoạt động",
        "blocks": [
          {
            "p": "Trước khi áp dụng quy tắc này, khi thử nghiệm với mười hai câu thực tế, **tất cả mười hai** đều chứa các biểu tượng không liên quan. Một câu không có nội dung quan trọng thậm chí còn được đánh dấu là một 태몽 (taemong)."
          },
          {
            "p": "Bây giờ, còn lại một — biểu tượng 배 (bae) trong 「배가 고팠다」 (bae ga gopatda). Vì nó nghe giống nhau nhưng có ý nghĩa khác, nó không thể bị lọc ra chỉ bằng các ký tự xung quanh."
          },
          {
            "p": "Không tìm thấy điều gì là một vấn đề trung thực. Tuy nhiên, việc tìm thấy điều gì đó không liên quan có nghĩa là thiết lập một truyền thống phía sau từ đó mà nó chưa từng có."
          }
        ]
      },
      {
        "title": "Các ký tự giống nhau luôn mang lại kết quả giống nhau",
        "blocks": [
          {
            "p": "Không có chỗ cho sự tình cờ trong các quy tắc tìm kiếm. Vì từ điển là cố định và các quy tắc đã được thiết lập, nếu bạn nhập cùng một câu một lần nữa, **biểu tượng giống nhau sẽ xuất hiện theo cùng một thứ tự**. Diễn giải bạn thấy hôm nay sẽ không khác với diễn giải bạn thấy vào ngày mai."
          },
          {
            "p": "Chất lượng này cũng là một lời hứa mà chúng tôi đã tự đặt ra. Các diễn giải thay đổi mỗi lần là thú vị nhưng thiếu nền tảng. Điều này liên quan đến câu chuyện về [tại sao chúng tôi không sử dụng mô hình](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Cơ sở dịch vụ",
    "title": "Lý do cùng một biểu tượng có nhiều ý nghĩa khác nhau",
    "summary": "Theo truyền thống, việc cầm một con rắn và bị một con rắn cắn là hai điều đối lập. Điều này thảo luận về cấu trúc mà 215 biểu tượng có 256 ý nghĩa và cách diễn giải các tình huống.",
    "backLabel": "Cơ sở diễn giải",
    "sections": [
      {
        "title": "Ngay cả khi các biểu tượng giống nhau, các tình huống khác nhau mang lại các ý nghĩa khác nhau",
        "blocks": [
          {
            "p": "Trong truyền thống 해몽 (dream interpretation), một biểu tượng đơn không phải lúc nào cũng có một ý nghĩa. Ngay cả đối với cùng một con rắn, **cầm nó và bị cắn đã được diễn giải là hoàn toàn đối lập.** Điều này cũng được ghi chú trong từ điển."
          },
          {
            "p": "Đây là lý do tại sao {symbolTotal} biểu tượng có tổng cộng {meaningTotal} ý nghĩa. Mỗi ý nghĩa bao gồm **bối cảnh mà nó áp dụng**, và nếu bối cảnh đó có thể nhìn thấy trong văn bản bạn cung cấp, chúng tôi sẽ chọn ý nghĩa đó."
          }
        ]
      },
      {
        "title": "Cách xác định tình huống",
        "blocks": [
          {
            "p": "Chúng tôi kiểm tra xem văn bản bạn cung cấp có chứa các từ chỉ ra tình huống đó hay không. Trong 「뱀이 나를 물었다」 (baemi nareul mul-eotda), tình huống bị cắn được mô tả, trong khi trong 「뱀을 품에 안았다」 (baemeul pume anatda), tình huống cầm nắm được mô tả. Nếu không có từ nào chỉ ra tình huống, chúng tôi sẽ diễn giải nó bằng **ý nghĩa cơ bản** của biểu tượng đó."
          },
          {
            "p": "Do đó, khi viết giấc mơ của bạn, nếu bạn bao gồm **không chỉ những gì xuất hiện mà còn cả những hành động đã thực hiện**, diễn giải sẽ chính xác hơn. 「돼지를 봤다」 (dwaeji-reul bwatda) truyền đạt ít hơn 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Càng viết nhiều, càng tốt, nhưng không cần viết dài",
        "blocks": [
          {
            "p": "Hai hoặc ba câu là đủ. Việc viết dài hơn không có nghĩa là tìm thấy nhiều biểu tượng hơn; ngược lại, nếu các từ không liên quan bị trộn lẫn, các biểu tượng không liên quan có thể được xác định."
          }
        ]
      },
      {
        "title": "Có {contextSplitSymbolTotal} biểu tượng với các ý nghĩa phân chia",
        "blocks": [
          {
            "p": "Trong số {symbolTotal} biểu tượng trong từ điển, **{contextSplitSymbolTotal}** có ý nghĩa thay đổi tùy thuộc vào tình huống. Phần còn lại đã được đọc theo một hướng bất kể tình huống."
          },
          {
            "p": "Những {contextSplitSymbolTotal} này là những khu vực cẩn thận nhất. Đọc sai tình huống có thể dẫn đến việc truyền đạt tin tốt như tin xấu, hoặc ngược lại. Do đó, nếu tình huống không rõ ràng, chúng tôi không **ép buộc chọn một bên mà thay vào đó đi với ý nghĩa cơ bản** của biểu tượng đó — chúng tôi không muốn tuyên bố điều gì đó không chắc chắn như thể nó là chắc chắn."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Cảm xúc khi tỉnh dậy cũng được xem xét",
        "blocks": [
          {
            "p": "Cảm xúc và sự lặp lại được hỏi dưới nội dung giấc mơ không được sử dụng để tìm biểu tượng. Chúng được tham khảo khi quyết định cách diễn giải trong các tình huống có ý nghĩa phân chia. Bạn không cần phải chọn; kết quả vẫn sẽ được cung cấp."
          }
        ]
      },
      {
        "title": "Bầu không khí tổng thể của giấc mơ được tính riêng",
        "blocks": [
          {
            "p": "Nếu nhiều biểu tượng được tìm thấy, chúng tôi thu thập xem mỗi biểu tượng đó là tích cực hay thận trọng để xác định tông màu tổng thể của giấc mơ. Một giấc mơ bao gồm một biểu tượng tốt và một biểu tượng thận trọng không đơn giản được gọi là 'giấc mơ tốt.'"
          },
          {
            "p": "Bạn có thể xem trước các biểu tượng khác nhau và ý nghĩa của chúng trong [từ điển biểu tượng](/dream/symbols). Cũng tốt khi lướt qua những gì được bao gồm trước khi viết giấc mơ của bạn."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Cơ sở dịch vụ",
    "title": "Tiêu chí để phân biệt 길몽 (giấc mơ tốt) và 흉몽 (giấc mơ xấu)",
    "summary": "Bốn giá trị được gán cho mỗi biểu tượng và sự phân phối của chúng, lý do tại sao các biểu tượng tích cực vượt quá một nửa, và tại sao chúng tôi truyền đạt giấc mơ hỗn hợp như là hỗn hợp.",
    "backLabel": "Cơ sở diễn giải",
    "sections": [
      {
        "title": "Mỗi biểu tượng được gán một trong bốn giá trị",
        "blocks": [
          {
            "p": "Trong số {symbolTotal} biểu tượng trong từ điển, mỗi biểu tượng được phân loại là một trong những loại sau."
          },
          {
            "ul": [
              "**{polarityPositive} biểu tượng tích cực** — những biểu tượng được diễn giải là sự kiện may mắn như tài sản, lễ kỷ niệm và ân nhân.",
              "**{polarityAmbivalent} biểu tượng thay đổi theo tình huống** — như rắn, nơi ý nghĩa có thể đảo ngược tùy thuộc vào những gì đã được thực hiện. Danh mục này là cẩn thận nhất.",
              "**{polarityNegative} biểu tượng thận trọng** — những biểu tượng được coi là tin đồn, tranh chấp hoặc mất mát.",
              "**{polarityNeutral} biểu tượng trung lập** — những biểu tượng không tốt cũng không xấu về bản chất, như màu sắc hoặc số."
            ]
          }
        ]
      },
      {
        "title": "Lý do các biểu tượng tích cực vượt quá một nửa",
        "blocks": [
          {
            "p": "Điều này không phải vì chúng tôi hào phóng trong các đánh giá của mình. **Truyền thống 해몽 (dream interpretation) luôn như vậy.** Các biểu tượng lớn và mạnh mẽ như lợn, rồng, lửa và nước thường được coi là điềm tốt, và từ điển phản ánh truyền thống đó."
          },
          {
            "p": "Do đó, thực tế rằng 'một biểu tượng tốt xuất hiện' không có nghĩa là 'những điều tốt sẽ xảy ra.' Những gì chúng tôi có thể truyền đạt là giới hạn trong cách mà biểu tượng đó đã được diễn giải trong truyền thống."
          }
        ]
      },
      {
        "title": "Tông màu của một giấc mơ được thu thập từ các biểu tượng của nó",
        "blocks": [
          {
            "p": "Nếu nhiều biểu tượng được tìm thấy, chúng tôi thu thập sự may mắn của chúng để xác định tông màu tổng thể của giấc mơ. Nếu chỉ có các biểu tượng tích cực xuất hiện, đó là một giấc mơ tốt; nếu chỉ có các biểu tượng thận trọng xuất hiện, đó là một giấc mơ thận trọng; nếu **hỗn hợp, chúng tôi truyền đạt nó như là hỗn hợp.**"
          },
          {
            "p": "Chúng tôi không ép buộc phân loại các biểu tượng hỗn hợp thành một bên. Trên thực tế, những giấc mơ mà mọi người có thường là hỗn hợp, và tóm tắt chúng như 'một giấc mơ tốt' là không chính xác và không hữu ích."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những Từ Không Nên Sử Dụng",
        "blocks": [
          {
            "p": "Đừng đưa ra những tuyên bố chắc chắn về những gì sẽ xảy ra, khi nào nó sẽ xảy ra, hoặc về sức khỏe và tài chính. Truyền đạt ý nghĩa của các biểu tượng được truyền lại qua truyền thống là khác với việc dự đoán tương lai."
          }
        ]
      },
      {
        "title": "Khi Một Giấc Mơ Cảnh Báo Xuất Hiện",
        "blocks": [
          {
            "p": "Ngay cả khi một biểu tượng được giải thích là cảnh báo xuất hiện, điều đó không nhất thiết là tin xấu. Trong **giải mã giấc mơ** truyền thống, một giấc mơ **không may** thường được sử dụng như **một tuyên bố chỉ ra tình huống hiện tại**. Nếu một biểu tượng gợi ý xung đột xuất hiện, nó có thể được hiểu là một lời nhắc nhở để kiềm chế lời nói."
          },
          {
            "p": "Vì lý do tương tự, dịch vụ này không bán bùa chú hay amulet. Những gì được bán chỉ là [hai cách để giữ giấc mơ của bạn](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Giấc Mơ Thụ Thai",
    "title": "Cách Giải Thích Giấc Mơ Thụ Thai",
    "summary": "Nó tiết lộ cách xác định 27 biểu tượng giấc mơ thụ thai, tại sao không phải tất cả giấc mơ về lợn đều được coi là giấc mơ thụ thai, và nguyên tắc không dự đoán thai kỳ hoặc giới tính.",
    "backLabel": "Cơ Sở Giải Thích",
    "sections": [
      {
        "title": "Trước tiên, Làm Rõ Điều Này",
        "blocks": [
          {
            "p": "**Dreams-Link không xác định tình trạng thai kỳ. Nó cũng không chỉ ra giới tính của đứa trẻ.** Đây là những vấn đề không thể biết qua giấc mơ, và đó không phải là điều chúng tôi có thể làm."
          },
          {
            "p": "Những gì chúng tôi có thể cho bạn biết chỉ giới hạn ở điều này — **thực tế là một biểu tượng được coi là giấc mơ thụ thai đã xuất hiện trong giấc mơ này.** Đó là tất cả những gì tổ tiên chúng tôi đã giải thích về biểu tượng đó."
          }
        ]
      },
      {
        "title": "Có {conceptionSymbolTotal} biểu tượng được coi là Giấc Mơ Thụ Thai",
        "blocks": [
          {
            "p": "Trong số {symbolTotal} biểu tượng trong từ điển, **{conceptionSymbolTotal}** được đánh dấu là giấc mơ thụ thai. Có nhiều động vật như rồng, lợn và rắn, cũng như các loại trái cây như đào và hạt dẻ, và mặt trời và mặt trăng cũng được bao gồm."
          },
          {
            "p": "Tuy nhiên, **sự xuất hiện của biểu tượng đó không ngay lập tức có nghĩa là đó là giấc mơ thụ thai.** Đây là nơi dịch vụ này đã nỗ lực."
          }
        ]
      },
      {
        "title": "Phán Quyết Dựa Trên Ý Nghĩa Thực Tế, Không Phải Biểu Tượng",
        "blocks": [
          {
            "p": "Lợn là một biểu tượng của giấc mơ thụ thai và đồng thời **đại diện cho giấc mơ về tài sản.** Nếu chỉ vì biểu tượng xuất hiện mà được coi là giấc mơ thụ thai, thì mọi người mơ thấy lợn đều sẽ có giấc mơ thụ thai. Trên thực tế, nó chủ yếu được giải thích là giấc mơ về tài sản."
          },
          {
            "p": "Do đó, chúng tôi xem xét **ý nghĩa thực tế được rút ra từ biểu tượng đó, không phải chính biểu tượng.** Chúng tôi chỉ đánh dấu nó là giấc mơ thụ thai khi ý nghĩa nghiêng về thụ thai được chọn trong tình huống bạn cung cấp. Ngay cả với cùng một giấc mơ về lợn, phán quyết thay đổi nếu ngữ cảnh khác nhau."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nếu Bạn Đề Cập Đến Thai Kỳ, Chúng Tôi Xem Xét Điều Đó Trước Tiên",
        "blocks": [
          {
            "p": "Nếu bài viết của bạn bao gồm các từ như thai kỳ, giấc mơ thụ thai, hoặc sinh nở, chúng tôi sẽ xem xét trước ý nghĩa của biểu tượng nghiêng về thụ thai. Ngay cả với cùng một giấc mơ về lợn, cách tổ tiên chúng tôi giải thích nó đã thay đổi tùy thuộc vào tình huống hiện tại."
          }
        ]
      },
      {
        "title": "Lý Do Tách Biệt Báo Cáo Giấc Mơ Thụ Thai",
        "blocks": [
          {
            "p": "Giấc mơ thụ thai phục vụ một mục đích khác với các giấc mơ khác. Chúng thường được nói đến ngay cả sau khi đứa trẻ ra đời và được chia sẻ giữa các thành viên trong gia đình. Do đó, thay vì chỉ xem trên màn hình, chúng tôi đã tạo ra một **tài liệu có thể được giữ lại.**"
          },
          {
            "p": "Những gì được bao gồm được ghi chú trong [hai cách để giữ giấc mơ của bạn](/guide/reports). Bạn có thể xem tất cả các giải thích mà không cần mua những gì bạn thấy trên màn hình."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Cách Sử Dụng",
    "title": "Cách Viết Giấc Mơ Của Bạn Một Cách Hiệu Quả",
    "summary": "Nếu bạn viết xuống những gì bạn đã thấy và đã làm, nó sẽ được giải thích tốt. Nó giải thích tại sao một động từ đơn có thể xác định ý nghĩa và tại sao chúng tôi hỏi về cảm xúc và sự lặp lại.",
    "backLabel": "Cơ Sở Giải Thích",
    "sections": [
      {
        "title": "Xin Vui Lòng Viết Những Gì Bạn Đã Thấy và Đã Làm",
        "blocks": [
          {
            "p": "Không có định dạng cụ thể. Một vài câu như bạn thường nói là đủ. Tuy nhiên, những gì hoạt động tốt được xác định — **những gì có thể nhìn thấy** và **những gì đã xảy ra.**"
          },
          {
            "ul": [
              "Hoạt động tốt — 「Một con rắn lớn quấn quanh tôi」, 「Tôi thấy nước trong chảy」, 「Tôi ngã từ một nơi cao」",
              "Không hoạt động — 「Tôi cảm thấy sợ」, 「Tôi cảm thấy lạ」, 「Tôi cảm thấy như ai đó ghét tôi」"
            ]
          },
          {
            "p": "Nếu bạn chỉ viết xuống cảm xúc, sẽ không có biểu tượng nào để tìm. Điều này là vì **giải mã giấc mơ** truyền thống nói về [đối tượng và hành động](/guide/categories), không phải cảm xúc."
          }
        ]
      },
      {
        "title": "Viết Những Gì Bạn Đã Làm Làm Cho Nó Chính Xác Hơn",
        "blocks": [
          {
            "p": "Ngay cả với cùng một biểu tượng, có {contextSplitSymbolTotal} trường hợp mà ý nghĩa khác nhau tùy thuộc vào tình huống. Truyền thống, việc cầm một con rắn và bị cắn đã được giải thích là những điều trái ngược."
          },
          {
            "p": "Do đó, 「Tôi thấy một con lợn」 kém chính xác hơn so với 「Một con lợn vào nhà」, và 「Có nước」 kém chính xác hơn so với 「Tôi đã uống nước trong chảy.」 **Một động từ đơn xác định ý nghĩa.**"
          }
        ]
      },
      {
        "title": "Tại Sao Chúng Tôi Hỏi Về Cảm Xúc và Sự Lặp Lại",
        "blocks": [
          {
            "p": "Dưới nội dung giấc mơ, có một nơi để chọn **cảm giác khi bạn tỉnh dậy** và **liệu bạn có lặp lại cùng một giấc mơ hay không.** Bạn không cần phải chọn cả hai để có kết quả."
          },
          {
            "p": "Những giá trị này không được sử dụng để tìm biểu tượng. Chúng được tham khảo khi xác định **ý nghĩa nào nên chọn** từ cùng một biểu tượng và cách truyền đạt kết quả."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Trong Trường Hợp Bạn Đề Cập Đến Thai Kỳ",
        "blocks": [
          {
            "p": "Nếu bài viết của bạn bao gồm các từ như thai kỳ, giấc mơ thụ thai, hoặc sinh nở, chúng tôi sẽ xem xét trước ý nghĩa của biểu tượng nghiêng về thụ thai. Ngay cả với cùng một giấc mơ về lợn, cách tổ tiên chúng tôi giải thích nó đã thay đổi tùy thuộc vào tình huống hiện tại — [cách giải thích giấc mơ thụ thai](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Không Cần Viết Các Văn Bản Dài Dòng",
        "blocks": [
          {
            "p": "Một văn bản dài không có nghĩa là nhiều biểu tượng sẽ được tìm thấy. Thay vào đó, nếu các từ không liên quan được trộn lẫn dài dòng, có khả năng cao hơn rằng các từ không liên quan sẽ được giải thích là biểu tượng. **Xin vui lòng chỉ viết những cảnh bạn nhớ.**"
          },
          {
            "p": "Văn bản bạn cung cấp không được lưu trữ ở đâu. Lý do bạn có thể viết tự do được ghi chú trong [phương pháp không lưu trữ](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Cơ Sở Dịch Vụ",
    "title": "Tiêu Chí Chia Thành Chín Danh Mục",
    "summary": "Từ các đối tượng, động vật và thiên nhiên đến màu sắc và số, có chín danh mục và lý do không bao gồm một danh mục cảm xúc.",
    "backLabel": "Cơ Sở Giải Thích",
    "sections": [
      {
        "title": "Các Biểu Tượng Trong Giấc Mơ Được Chia Thành Chín Danh Mục",
        "blocks": [
          {
            "p": "Các biểu tượng {symbolTotal} được nhóm thành chín danh mục dựa trên đặc điểm của chúng. Tiêu chí phân chia là **cách chúng xuất hiện trong giấc mơ** — liệu là động vật, đối tượng, hay hành động tôi đã thực hiện."
          },
          {
            "ul": [
              "**Đối Tượng {categoryThing}** — Các vật thể hữu hình như tiền, gương và dao. Đây là danh mục dày nhất.",
              "**Động vật {categoryAnimal}** — rồng·lợn·rắn·bò. Nhiều trong số này được coi là 태몽 (giấc mơ mang thai).",
              "**Thiên nhiên {categoryNature}** — những thứ lớn và cổ xưa như nước·lửa·mặt trời·mặt trăng·núi.",
              "**Hành động {categoryAction}** — những việc xảy ra trong giấc mơ như bị đuổi·rơi·bay.",
              "**Cơ thể {categoryBody}** — răng·tóc·máu. Ý nghĩa thay đổi tùy thuộc vào vị trí trên cơ thể.",
              "**Người {categoryPerson}** · **Nơi {categoryPlace}** · **Màu sắc {categoryColor}** · **Số {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Tại sao không có danh mục cảm xúc?",
        "blocks": [
          {
            "p": "Các danh mục như 「lo âu」·「khao khát」 không được bao gồm. **Điều này là vì truyền thống 해몽 (giải mộng) không đề cập đến cảm xúc.** Các diễn giải cổ xưa tập trung vào những gì có thể nhìn thấy và những gì đã xảy ra, thay vì cảm xúc của người mơ."
          },
          {
            "p": "Tôi đã cố gắng tạo ra một danh mục cảm xúc, nhưng kết quả là các thuật ngữ như 「mất đi tình cảm」·「ổn định cảm xúc」. Đây không phải là **biểu tượng** từ giấc mơ mà là từ vựng từ tâm lý học hiện đại. Đó là một loại dịch vụ khác và không phải là mục tiêu của từ điển này."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Vậy khi bạn viết",
        "blocks": [
          {
            "p": "Xin hãy viết xuống **những gì bạn đã thấy và đã làm** thay vì cảm xúc; điều này sẽ mang lại kết quả tốt hơn nhiều. Tuy nhiên, tôi sẽ hỏi về cảm xúc của bạn khi tỉnh dậy một cách riêng biệt — ngay cả cùng một biểu tượng cũng có thể có những ý nghĩa khác nhau tùy thuộc vào tình huống."
          }
        ]
      },
      {
        "title": "Màu sắc và số không đứng một mình",
        "blocks": [
          {
            "p": "Màu sắc {categoryColor} và số {categoryNumber} không có ý nghĩa tốt hay xấu vốn có. Cũng như một con rắn trắng và một con rắn đen là khác nhau, ý nghĩa của chúng thay đổi tùy thuộc vào **những gì chúng liên kết với**. Do đó, hai danh mục này được xem xét cùng với các biểu tượng khác."
          },
          {
            "p": "Danh sách đầy đủ theo danh mục có sẵn trong [Từ điển Biểu tượng](/dream/symbols). Mở một biểu tượng sẽ hiển thị ý nghĩa đã được truyền đạt, danh mục và các biểu tượng liên quan."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Cách sử dụng",
    "title": "Khi một biểu tượng không thể tìm thấy",
    "summary": "Nếu bạn không thể tìm thấy, tôi sẽ thông báo cho bạn rằng nó không có. Tôi sẽ thảo luận về lý do tại sao nó không thể tìm thấy, những gì tôi sẽ hiển thị thay thế trên màn hình đó, và cách mà từ điển được mở rộng.",
    "backLabel": "Cơ sở giải thích",
    "sections": [
      {
        "title": "Khi không tìm thấy, tôi sẽ thông báo cho bạn rằng nó không có",
        "blocks": [
          {
            "p": "Nếu tôi không thể tìm thấy bất kỳ biểu tượng nào trong văn bản bạn cung cấp, tôi sẽ **thông báo cho bạn rằng nó không có.** Tôi sẽ không ép buộc liên kết nó với một cái gì đó tương tự hoặc tạo ra những câu hợp lý để lấp đầy khoảng trống."
          },
          {
            "p": "Đây là điều mà dịch vụ này rất cẩn trọng. Ngay khi tôi lấp đầy một khoảng trống, nó mâu thuẫn với tuyên bố về việc truyền đạt các diễn giải."
          }
        ]
      },
      {
        "title": "Tại sao không thể tìm thấy?",
        "blocks": [
          {
            "p": "Thông thường, nó là một trong những điều sau."
          },
          {
            "ul": [
              "**Đó là một biểu tượng chưa có trong từ điển.** Hiện tại, có {symbolTotal} biểu tượng được liệt kê, nhưng còn nhiều biểu tượng khác có thể xuất hiện trong giấc mơ.",
              "**Bạn chỉ viết cảm xúc.** Nếu chỉ có những cảm xúc như 「Tôi đã sợ」·「Tôi cảm thấy lạ」, thì không có biểu tượng nào có thể được khớp. Truyền thống 해몽 nói về **những đối tượng và hành động có thể nhìn thấy** thay vì cảm xúc.",
              "**Nó quá ngắn.** Tốt hơn là viết thành câu thay vì một hoặc hai từ."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Khi bạn cố gắng viết lại",
        "blocks": [
          {
            "p": "Xin hãy bao gồm **những gì bạn đã thấy và những gì bạn đã làm** trong giấc mơ. Nói 「Tôi đã lo âu」 kém hiệu quả hơn so với nói 「Tôi đã rơi từ một nơi cao」, và nói 「Tôi thích nó」 kém hiệu quả hơn so với nói 「Tôi đã thấy nước trong chảy」."
          }
        ]
      },
      {
        "title": "Tôi không để màn hình trống",
        "blocks": [
          {
            "p": "Khi một cái gì đó không thể tìm thấy, tôi cũng sẽ hiển thị **{popularSymbolCount} biểu tượng được tìm kiếm nhiều** trên màn hình đó. Những biểu tượng này được chọn từ từ điển dựa trên tính đại diện của chúng, điều này có thể giúp bạn nhớ nếu một trong số chúng xuất hiện trong giấc mơ của bạn."
          },
          {
            "p": "Nếu bạn muốn duyệt toàn bộ danh sách, có {symbolTotal} biểu tượng được tổ chức theo danh mục trong [Từ điển Biểu tượng](/dream/symbols). Mỗi biểu tượng bao gồm ý nghĩa đã được truyền đạt và các biểu tượng liên quan."
          }
        ]
      },
      {
        "title": "Từ điển sẽ được mở rộng như thế nào trong tương lai?",
        "blocks": [
          {
            "p": "Thay vì tăng số lượng, tôi đang tập trung vào **xác định chính xác những gì đã có.** Tôi đã bao gồm {aliasTotal} tên gọi thay thế cho cùng một biểu tượng, và tôi đã làm cho nó có thể nhận ra các từ thay đổi hình thức với các hậu tố."
          },
          {
            "p": "Khi mở rộng các biểu tượng, tôi chỉ bao gồm những biểu tượng có thể **cung cấp bằng chứng đã được truyền đạt.** Chỉ đơn giản tăng số lượng mà không có bằng chứng trở thành sự sáng tạo thay vì một từ điển — tôi đã ghi lại các nỗ lực và kết quả trong [Tại sao tôi không sử dụng mô hình](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Cơ sở dịch vụ",
    "title": "Lý do không sử dụng trí tuệ nhân tạo trong 해몽",
    "summary": "Không có mã nào gọi một mô hình trong quá trình tạo ra diễn giải. Tôi đã từ bỏ nỗ lực mở rộng từ điển bằng cách sử dụng một mô hình dựa trên kết quả thực nghiệm, và do đó những gì đã đạt được và những gì đã từ bỏ.",
    "backLabel": "Cơ sở giải thích",
    "sections": [
      {
        "title": "Trí tuệ nhân tạo không được sử dụng trong 해몽",
        "blocks": [
          {
            "p": "Nhiều dịch vụ 해몽 hiện tại hiển thị các văn bản được tạo ra bằng cách chèn các câu chuyện giấc mơ vào các mô hình sinh. Dreams-Link không làm như vậy. **Không có mã nào gọi một mô hình trong quá trình tạo ra diễn giải.**"
          },
          {
            "p": "Những gì tôi làm là đơn giản. Tôi tìm các biểu tượng trong văn bản bạn cung cấp có trong từ điển và chọn và hiển thị các ý nghĩa mà từ điển đã viết cho những biểu tượng đó. Không có chỗ cho các câu không có trong từ điển."
          }
        ]
      },
      {
        "title": "Tại sao quyết định này được đưa ra?",
        "blocks": [
          {
            "p": "**Các mô hình không nói rằng chúng không biết những gì chúng không biết.** Khi được hỏi về các biểu tượng mà không có bằng chứng đã được truyền đạt, chúng tạo ra các nguồn gốc hợp lý. Và liệu nó có được tạo ra hay không là điều mà người đọc không thể phân biệt. Nếu một cái gì đó được đưa vào chỗ truyền đạt truyền thống, tiền đề của dịch vụ sẽ sụp đổ."
          },
          {
            "p": "Tôi thực sự đã cố gắng để một mô hình tạo ra các biểu tượng để mở rộng từ điển. Trong số sáu mươi sáu ví dụ đáng xem xét, **năm mươi lăm không thể cung cấp bất kỳ bằng chứng đã được truyền đạt nào**, và một số bao gồm những thứ không thể tồn tại trong truyền thống 해몽, như tàu điện ngầm và đường cao tốc. Do đó, **không có cái nào được bao gồm.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Điều tương tự cũng đúng với các mô hình lớn hơn",
        "blocks": [
          {
            "p": "Khi tôi thử nhiệm vụ tương tự với một mô hình tốt hơn, chỉ có một trong mười chín vượt qua, và cái đó chỉ là sự lặp lại của cùng một từ trong vị trí bằng chứng. Các mô hình lớn hơn chỉ nói **hợp lý hơn** về những gì chúng không biết."
          }
        ]
      },
      {
        "title": "Lợi ích của việc không sử dụng mô hình",
        "blocks": [
          {
            "ul": [
              "**Nếu đó là cùng một giấc mơ, cùng một diễn giải sẽ xuất hiện.** Cách diễn đạt không thay đổi mỗi lần.",
              "**Nó nhanh.** Không cần chờ phản hồi từ mô hình, vì vậy kết quả được cung cấp ngay lập tức.",
              "**Giấc mơ bạn cung cấp không ra ngoài.** Không cần gửi nó đến các máy chủ công ty bên ngoài — xin hãy đọc cùng với [phương pháp không lưu trữ](/guide/no-storage).",
              "**Nó có thể được cung cấp miễn phí.** Giấc mơ là điều mà chúng ta mơ mỗi ngày, vì vậy có nhiều yêu cầu. Nếu một mô hình được gọi cho mỗi yêu cầu, chi phí phải được trang trải ở đâu đó."
            ]
          }
        ]
      },
      {
        "title": "Những gì được từ bỏ thay vì",
        "blocks": [
          {
            "p": "Chúng tôi không thể giải thích những gì không có trong từ điển. Nếu một mô hình đã được sử dụng, bất cứ điều gì bạn viết sẽ tạo ra một câu trả lời hợp lý. Chúng tôi đã chọn phía **nói rằng nó không thể tìm thấy khi nó không thể tìm thấy**. Những gì chúng tôi hiển thị vào thời điểm đó được viết trong [khi một biểu tượng không thể được tìm thấy](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Sản phẩm trả phí",
    "title": "Hai cách để giữ lại những giấc mơ của bạn",
    "summary": "Việc giải thích bản thân không phát sinh phí. Chúng tôi giải thích hai điều mà chúng tôi bán là gì, chúng chứa những gì và tại sao chúng không phải là những giải thích tốt hơn.",
    "backLabel": "Cơ sở giải thích",
    "sections": [
      {
        "title": "Việc giải thích bản thân không phát sinh phí",
        "blocks": [
          {
            "p": "Việc ghi lại những giấc mơ của bạn và xem những biểu tượng nào có mặt **không tốn tiền và không yêu cầu thành viên.** Vì mọi người đều mơ mỗi ngày, chúng tôi quyết định rằng không gian này nên miễn phí."
          },
          {
            "p": "**Hai điều mà chúng tôi bán không phải là những giải thích tốt hơn.** Chúng là **hai cách để giữ lại cùng một giải thích.** Nội dung bạn thấy trên màn hình không thay đổi sau khi thanh toán."
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
            "p": "Điều này dành cho những ai cảm thấy tiếc nuối khi một giấc mơ tốt biến mất sau khi đóng màn hình. Vì chúng tôi không lưu giấc mơ, nếu bạn muốn giữ nó, đây là cách duy nhất để lấy nó."
          }
        ]
      },
      {
        "title": "Báo cáo 태몽 — Tài liệu {conceptionPages} Trang",
        "blocks": [
          {
            "p": "Đối với những giấc mơ cho thấy các biểu tượng được giải thích là 태몽 (giấc mơ mang thai), chúng tôi tạo ra một **tài liệu {conceptionPages} trang.** Nó bao gồm những biểu tượng nào đã xuất hiện, cách những biểu tượng đó đã được giải thích theo truyền thống, và một nơi để ghi lại điều đó."
          },
          {
            "p": "Vì 태몽 thường được thảo luận và chia sẻ giữa các thành viên trong gia đình ngay cả sau khi đứa trẻ được sinh ra, chúng tôi đã tạo ra một tài liệu riêng cho những giấc mơ quá quý giá để chỉ xem trên màn hình."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Những từ không được nói ở đây",
        "blocks": [
          {
            "p": "Chúng tôi không xác định tình trạng mang thai hoặc giới tính của đứa trẻ. Những tuyên bố như vậy không xuất hiện trong tài liệu. Để biết thêm chi tiết, xem [cách giải thích 태몽](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Tại sao không còn tài liệu nữa",
        "blocks": [
          {
            "p": "Các dịch vụ anh chị em cung cấp báo cáo chín trang. Công cụ saju trích xuất rất nhiều giá trị chỉ từ một ngày sinh. Giải thích giấc mơ không hoạt động theo cách đó."
          },
          {
            "p": "Các biểu tượng được liệt kê trong từ điển tổng cộng {symbolTotal}, và hầu hết trong số đó có **một ý nghĩa mỗi cái.** Để kéo dài điều đó thành chín trang, chúng tôi sẽ phải viết các ý nghĩa truyền thống không có trong bất kỳ tài liệu nào, và đó chính xác là điều mà dịch vụ này đã quyết định không làm. Do đó, tài liệu chỉ dài như các tài liệu cho phép một cách trung thực, và không dài hơn."
          }
        ]
      },
      {
        "title": "Giá cả và Tình trạng Bán hàng",
        "blocks": [
          {
            "p": "Giá cả được liệt kê trong [hướng dẫn giá](/pricing). Lý do tài liệu này không liệt kê số tiền là có chủ ý — để ngăn chặn tình huống mà tài liệu hướng dẫn vẫn giữ số tiền cũ khi giá thay đổi. Màn hình và các điều khoản đều đọc cùng một số tiền từ một nơi."
          },
          {
            "p": "Các tài liệu bạn mua có thể **được nhận lại với cùng một đơn hàng.** Tuy nhiên, vì chúng tôi không lưu tệp, một khi bạn rời khỏi màn hình kết quả, bạn không thể tái tạo chúng — vui lòng giữ các tệp bạn nhận được."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Thông tin cá nhân",
    "title": "Phương pháp không lưu giấc mơ bạn ghi lại",
    "summary": "Chúng tôi giải thích điều đó có nghĩa là gì về mặt kỹ thuật rằng các câu chuyện giấc mơ không được ghi lại ở đâu cả, và những gì có trong liên kết kết quả.",
    "backLabel": "Cơ sở giải thích",
    "sections": [
      {
        "title": "Không yêu cầu thành viên",
        "blocks": [
          {
            "p": "Dreams-Link không tạo tài khoản. Chúng tôi không thu thập tên, email hoặc số điện thoại. Những gì chúng tôi thu thập chỉ là những giấc mơ bạn ghi lại, cảm giác của bạn khi thức dậy, và liệu bạn có mơ cùng một giấc mơ nhiều lần hay không, và điều đó không còn lại sau khi việc giải thích hoàn tất."
          },
          {
            "p": "Các câu chuyện giấc mơ là những giá trị riêng tư nhất mà dịch vụ này nhận được. Đây là lý do tại sao các quy tắc nghiêm ngặt hơn mức cần thiết — chúng tôi thậm chí không thiết lập một không gian để ghi lại những gì bạn gửi."
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
            "p": "Nói cách khác, khi bạn mở liên kết kết quả, trình duyệt đọc giá trị đó để yêu cầu một phép tính, và máy chủ của chúng tôi nhận giá trị cho phép tính, trả lại câu trả lời, và sau đó quên nó."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Vui lòng cẩn thận khi gửi liên kết cho người khác",
        "blocks": [
          {
            "p": "Thực tế là nó không được lưu trên máy chủ không có nghĩa là liên kết là an toàn. Liên kết kết quả chứa giấc mơ bạn cung cấp, vì vậy người nhận liên kết đó có thể đọc nội dung đó."
          }
        ]
      },
      {
        "title": "Tại sao việc tính toán được thực hiện trên máy chủ nhưng không được lưu trữ?",
        "blocks": [
          {
            "p": "Việc tính toán bản thân được thực hiện trên máy chủ. Việc tìm kiếm các biểu tượng yêu cầu toàn bộ từ điển, và từ điển đó quá lớn để gửi xuống trình duyệt. Giữ từ điển trên máy chủ cũng có nghĩa là khi một lỗi được sửa, nó sẽ được phản ánh cho tất cả mọi người ngay lập tức. Tuy nhiên, **sau khi xử lý yêu cầu, giá trị đó không được sử dụng ở đâu cả.** Không có mã nào để chèn nó vào cơ sở dữ liệu."
          },
          {
            "p": "Một hồ sơ tối thiểu cần thiết cho hoạt động được giữ lại — một bộ đếm để ngăn chặn cùng một người gửi quá nhiều yêu cầu trong thời gian ngắn. Điều này không bao gồm nội dung giấc mơ, và địa chỉ IP truy cập cũng không được giữ lại. Chỉ một giá trị, được băm với ngày, được đếm, và giá trị đó thay đổi khi ngày thay đổi."
          }
        ]
      },
      {
        "title": "Những gì không thể làm được vì không được lưu trữ",
        "blocks": [
          {
            "p": "Thực sự mà nói, có những điều chúng tôi đã từ bỏ vì chúng tôi không lưu dữ liệu."
          },
          {
            "ul": [
              "**Không có nhật ký giấc mơ.** Bạn không thể lấy lại giải thích từ tuần trước, và bạn phải có liên kết để xem lại. Điều này được thực hiện có chủ ý — để tạo ra một nhật ký, những bài viết riêng tư nhất phải được lưu trữ liên tục.",
              "**Tìm lại cùng một giá trị.** Không có bộ nhớ cache. Thay vào đó, từ điển là cố định, và các quy tắc khớp là xác định, vì vậy cùng một văn bản sẽ luôn tạo ra cùng một biểu tượng — các quy tắc thay thế những gì mà bộ nhớ cache sẽ đảm bảo.",
              "**Làm mới sẽ đưa ra cổng quảng cáo một lần nữa.** Điều này là vì không có nơi nào để lưu lại hồ sơ xem."
            ]
          }
        ]
      },
      {
        "title": "Trong trường hợp mua hàng",
        "blocks": [
          {
            "p": "Nếu bạn mua một báo cáo, một hồ sơ giao dịch sẽ được giữ lại vào thời điểm đó. Việc thanh toán có thời gian lưu giữ theo quy định pháp lý, và không có lịch sử đơn hàng, việc hoàn tiền không thể được xử lý. Tuy nhiên, ngay cả như vậy, **nội dung giấc mơ được viết trong giải thích không gắn liền với đơn hàng** — nó được nhận lại và viết vào thời điểm đó khi tạo tài liệu sau khi xác nhận thanh toán."
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
            "p": "Yêu cầu qua điện thoại được nhận tại {customerCenter}."
          }
        ]
      },
      {
        "title": "Những gì có thể gửi đến kênh này?",
        "blocks": [
          {
            "ul": [
              "**Thanh toán và Hoàn tiền** — Nếu tài liệu chưa được tạo hoặc số tiền thanh toán khác với đơn hàng, sẽ được hoàn tiền đầy đủ. Điều kiện có trong [chính sách hoàn tiền](/refund-policy).",
              "**Thông tin cá nhân** — Chúng tôi chấp nhận yêu cầu truy cập, chỉnh sửa và xóa. Chính sách xử lý có trong [chính sách bảo mật](/privacy).",
              "**Báo cáo lỗi giải thích** — Nếu các biểu tượng được tìm thấy không chính xác hoặc giải thích có vẻ lạ, vui lòng cho chúng tôi biết. Nếu bạn bao gồm thời điểm bạn viết câu chuyện giấc mơ đó, chúng tôi có thể tra cứu lại với cùng một văn bản."
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
              "**Số Đăng Ký Kinh Doanh Qua Bưu Điện** — {mailOrderNumber}",
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
            "p": "Bạn không cần phải viết lại giấc mơ bạn đã cung cấp trong email yêu cầu. Chúng tôi không lưu trữ các đầu vào, vì vậy chúng tôi không thể tra cứu lại, và số đơn hàng là đủ để xác minh. Vui lòng chỉ ghi lại nếu thực sự cần thiết, chẳng hạn như để báo cáo lỗi giải thích."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Nguyên tắc Dịch vụ",
    "title": "Những gì Chúng tôi Không Thực hiện",
    "summary": "Chúng tôi không cung cấp số xổ số, nhật ký giấc mơ, xác định thai kỳ, hoặc bùa hộ mệnh. Chúng tôi giải thích lý do tại sao chúng tôi đã chọn không thực hiện từng điều này.",
    "backLabel": "Cơ sở Giải thích",
    "sections": [
      {
        "title": "Chúng tôi không cung cấp số xổ số",
        "blocks": [
          {
            "p": "Mặc dù điều này thường được đề cập trong các dịch vụ giải thích giấc mơ, nhưng chúng tôi không thực hiện điều này. **Không có cơ sở nào trong giải thích giấc mơ truyền thống để rút số từ giấc mơ.** Mặc dù có ghi chép về việc giải thích giấc mơ về lợn là tài sản, nhưng không có quy tắc nào trong bất kỳ tài liệu nào sản xuất ra sáu số từ điều đó."
          },
          {
            "p": "Để tạo ra chúng, chúng tôi sẽ phải bịa ra, và vào lúc đó, dịch vụ này sẽ không còn là nơi truyền đạt các giải thích được truyền lại bởi truyền thống. Điều này đặc biệt đáng lo ngại vì nó có thể dẫn đến tổn thất tài chính."
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
            "p": "Chúng tôi chỉ có thể nói rằng một biểu tượng được giải thích là một 태몽 (giấc mơ thụ thai) đã xuất hiện. Việc bạn có thai hay không hoặc đứa trẻ là gái hay trai **không phải là điều có thể biết qua giấc mơ.** Những tuyên bố như vậy không xuất hiện trên màn hình hoặc trong tài liệu trả phí."
          }
        ]
      },
      {
        "title": "Chúng tôi không bán bùa hộ mệnh hoặc bùa chú",
        "blocks": [
          {
            "p": "Chỉ vì một biểu tượng được giải thích là cảnh báo không có nghĩa là có lý do để mua thứ gì đó. Một 흉몽 (giấc mơ ominous) đã được sử dụng theo truyền thống để **chỉ ra một tình huống cần xem xét ngay bây giờ**, không phải để trả tiền để tránh điều gì đó."
          },
          {
            "p": "Chúng tôi không tạo ra sự lo lắng để bán thứ gì đó dựa trên điều đó. Những gì chúng tôi bán chỉ là hai điều đã đề cập ở trên, và không cái nào cung cấp thêm giải thích mà chỉ **cách để giữ cùng một nội dung.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Chúng tôi không đưa ra những tuyên bố chắc chắn về tương lai",
        "blocks": [
          {
            "p": "Chúng tôi không đưa ra những tuyên bố chắc chắn về việc liệu điều gì đó sẽ xảy ra, khi nào điều đó sẽ xảy ra, hoặc về sức khỏe, tài sản, hoặc tuổi thọ. Truyền đạt ý nghĩa của các biểu tượng truyền thống và dự đoán tương lai là hai vấn đề khác nhau."
          }
        ]
      },
      {
        "title": "Chúng tôi không bịa ra các giải thích không tồn tại",
        "blocks": [
          {
            "p": "Đối với các biểu tượng không tồn tại trong từ điển, chúng tôi sẽ **nói rằng chúng tôi không thể tìm thấy chúng.** Chúng tôi không ghép nối các biểu tượng tương tự hoặc lấp đầy khoảng trống bằng các câu có thể xảy ra. Do đó, dịch vụ này không [sử dụng trí tuệ nhân tạo cho giải thích giấc mơ](/guide/no-ai). Mô hình không nói rằng nó không biết những gì nó không biết."
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
  "intro": "Các thay đổi đối với điều khoản sử dụng của bạn — giá cả, chính sách — được đăng ở đây trước khi có hiệu lực. Các cải tiến nội bộ như màn hình nhanh hơn không được đăng ở đây: những gì xuất hiện ở đây là những gì bạn cần biết.",
  "empty": {
    "title": "Không có thông báo nào được đăng",
    "body": "Nếu có bất kỳ thay đổi nào cần thông báo, chúng sẽ được đăng ở đây."
  },
  "effective": "Có hiệu lực từ {date}",
  "pager": {
    "label": "Trang Thông Báo",
    "newer": "← Mới Nhất",
    "older": "Thông Báo Trước →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Giấc mơ bạn cung cấp không được lưu trữ.",
      "body": [
        "Câu chuyện giấc mơ là những giá trị riêng tư nhất mà dịch vụ này nhận được. Do đó, chúng không được ghi lại trong bất kỳ bảng nào. Dữ liệu chỉ được mang theo trong địa chỉ kết quả để tính toán, và khi cửa sổ được đóng lại, nó sẽ biến mất.",
        "Chúng tôi quyết định không tạo ra một tính năng thu thập giấc mơ và hiển thị dòng chảy (nhật ký giấc mơ). Đây là một tính năng hữu ích, nhưng để làm điều đó, các bài viết riêng tư nhất phải được lưu trữ liên tục.",
        "Khi bạn gửi liên kết kết quả cho người khác, nó chứa nội dung giấc mơ. Vui lòng cẩn thận khi chia sẻ."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Các kết quả bao gồm từ điển biểu tượng và tiêu chí tính toán.",
      "body": [
        "Cơ sở để giải thích là từ điển biểu tượng truyền thống về 해몽 (giải thích giấc mơ). Các kết quả và tài liệu sẽ bao gồm phiên bản của từ điển đó (ví dụ: 1.2.0) và tiêu chí để tìm quy tắc (ví dụ: dream-1.0.0). Cùng một giấc mơ sẽ luôn tạo ra cùng một biểu tượng dựa trên cùng một tiêu chí.",
        "Nếu việc thêm biểu tượng hoặc thay đổi ý nghĩa trước có thể làm thay đổi kết quả, sự thật này sẽ được trình bày ở đây. Điều này là do các kết quả bạn nhận được trước đó có thể thay đổi.",
        "Chúng tôi không tạo ra các ý nghĩa truyền thống không có trong từ điển. Nếu không tìm thấy biểu tượng nào, chúng tôi chỉ đơn giản thông báo rằng không có biểu tượng nào được tìm thấy và kết thúc."
      ]
    },
    "2026-08-06-conception": {
      "title": "Chúng tôi chỉ thông báo cho bạn về 태몽 và không đưa ra phán đoán.",
      "body": [
        "Nếu các biểu tượng được coi là 태몽 xuất hiện trong giấc mơ, chúng tôi sẽ thông báo cho bạn về thực tế đó. Tuy nhiên, chúng tôi không xác định tình trạng mang thai hoặc giới tính của đứa trẻ — những tuyên bố như vậy không có cơ sở, và các phán đoán y tế là trách nhiệm của các cơ sở y tế.",
        "Việc đề cập đến con trai và con gái trong các câu chuyện truyền thống là một phản ánh của các phong tục đã được truyền lại, và điều đó không có nghĩa là chúng tôi đang dự đoán chính xác."
      ]
    }
  }
} satisfies NoticeCopy;
