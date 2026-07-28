import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Tiếng Việt. Bản dịch từ nguyên bản tiếng Hàn trong ko.ts — bản có hiệu lực pháp lý là bản tiếng Hàn.
// **Không sửa điều kiện, thời hạn hay ngoại lệ ở đây** — sửa ko.ts trước, rồi đối chiếu tất cả các ngôn ngữ.

export const vi: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Thông tin sản phẩm",
    info: [
      ["Nhà cung cấp", "Naming-Link"],
      ["Hình thức", "Nội dung số (kết quả hiển thị trên màn hình hoặc tệp PDF). Được cung cấp ngay sau khi thanh toán."],
      ["Điều kiện sử dụng", "Trình duyệt internet hoặc thiết bị mở được tệp PDF. Không cần cài đặt thêm."],
      ["Thời hạn sử dụng", "Không giới hạn. Tệp đã tải về do người dùng tự lưu giữ."],
      ["Rút lại đơn hàng", "Hoàn tiền toàn bộ trước khi bắt đầu cung cấp. Sau khi đã bắt đầu, việc rút lại đơn hàng vì đơn thuần thay đổi ý định bị hạn chế (Điều 17 khoản 2 Luật Thương mại điện tử Hàn Quốc)."],
      ["Chi phí đổi, trả", "Không có. Vì là nội dung số nên không có khâu giao hàng."],
    ],
    consent:
      "Tôi xác nhận đây là nội dung số được cung cấp ngay sau khi thanh toán, và **một khi việc cung cấp đã bắt đầu thì quyền rút lại đơn hàng vì đơn thuần thay đổi ý định bị hạn chế**.",
    required: "Bạn phải đồng ý với các hạn chế về quyền rút lại đơn hàng thì mới có thể thanh toán.",
    refund:
      "Yêu cầu hoàn tiền hoặc thắc mắc xin gửi tới trung tâm hỗ trợ khách hàng hoặc email ở phía dưới. Nếu lỗi hệ thống khiến sản phẩm không được cung cấp, hoặc số tiền đã thanh toán khác với đơn hàng, chúng tôi sẽ hoàn lại toàn bộ.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Thông tin sản phẩm",
    info: [
      ["Nhà cung cấp", "Naming-Link"],
      ["Hình thức", "Con dấu thật, được chế tác riêng từng chiếc bằng cách khắc nội dung bạn đặt"],
      ["Cách chế tác", "Sau khi nhận đơn, chúng tôi xác nhận nội dung và kiểu chữ rồi bắt đầu chế tác."],
      ["Giao hàng", "Gửi đi sau khi chế tác xong. Trong nước gửi bằng chuyển phát, ra nước ngoài gửi bằng vận chuyển quốc tế."],
      ["Rút lại đơn hàng", "**Trước khi bắt đầu chế tác**, hoàn tiền toàn bộ. Sau khi đã bắt đầu, quyền rút lại đơn hàng bị hạn chế — đây là hàng hóa được sản xuất riêng theo đơn đặt nên không thể bán lại (Điều 17 khoản 2 Luật Thương mại điện tử Hàn Quốc)."],
      ["Đổi, trả hàng", "Trường hợp hàng bị hỏng, khắc sai hoặc không đúng với đơn đặt, chúng tôi sẽ chế tác lại miễn phí hoặc hoàn tiền toàn bộ."],
      ["Chi phí trả hàng", "Miễn phí nếu thuộc các trường hợp trên. Riêng việc đơn thuần thay đổi ý định thì chỉ hủy được trước khi bắt đầu chế tác."],
    ],
    consent:
      "Tôi xác nhận con dấu này là **sản phẩm chế tác theo đơn đặt, khắc theo nội dung tôi đã cung cấp, và một khi việc chế tác đã bắt đầu thì quyền rút lại đơn hàng vì đơn thuần thay đổi ý định bị hạn chế**.",
    required: "Bạn phải đồng ý với các hạn chế về quyền rút lại đơn hàng thì mới có thể thanh toán.",
    refund:
      "Yêu cầu hoàn tiền hoặc thắc mắc xin gửi tới trung tâm hỗ trợ khách hàng hoặc email ở phía dưới. Trường hợp hàng bị hỏng, khắc sai hoặc không đúng với đơn đặt, chúng tôi xử lý bằng cách chế tác lại miễn phí hoặc hoàn tiền toàn bộ.",
  },
};
