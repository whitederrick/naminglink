// 계정 대시보드(내 저장 결과·주문 내역) 문구. ko가 원본이며 비한국어는 en으로 폴백한다.
// (23개 언어 전체 채우기는 다른 사전과 동일하게 이후 배치로 진행한다.)
export type AccountCopy = {
  dashboardTitle: string;
  loading: string;
  loadError: string;
  resultsTitle: string;
  resultsEmpty: string;
  ordersTitle: string;
  ordersEmpty: string;
  untitledResult: string;
  serviceNames: Record<string, string>;
  orderTypes: Record<string, string>;
  paymentStatus: Record<string, string>;
  fulfillmentStatus: Record<string, string>;
};

const ko: AccountCopy = {
  dashboardTitle: "내 계정 활동",
  loading: "계정 데이터를 불러오는 중입니다.",
  loadError: "계정 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
  resultsTitle: "내 저장 결과",
  resultsEmpty: "저장한 분석 결과가 없습니다.",
  ordersTitle: "내 주문 내역",
  ordersEmpty: "주문 내역이 없습니다.",
  untitledResult: "분석 결과",
  serviceNames: {
    HANJA_MEANING_MATCH: "한자 의미 매칭",
    KOREAN_TO_GLOBAL: "글로벌 이름 변환",
    GLOBAL_TO_KOREAN: "한국 이름·발음 변환",
  },
  orderTypes: {
    PREMIUM_PDF: "프리미엄 리포트",
    CALLIGRAPHY_IMAGE: "캘리그래피 이미지",
    STAMP_DELIVERY: "이름 도장",
  },
  paymentStatus: {
    UNPAID: "미결제",
    PAID: "결제 완료",
    REFUNDED: "환불",
    CANCELLED: "취소",
  },
  fulfillmentStatus: {
    PENDING: "대기 중",
    PROCESSING: "처리 중",
    SHIPPED: "발송됨",
    COMPLETED: "완료",
    CANCELLED: "취소",
  },
};

const en: AccountCopy = {
  dashboardTitle: "My account activity",
  loading: "Loading your account data.",
  loadError: "Couldn't load your account data. Please try again shortly.",
  resultsTitle: "Saved results",
  resultsEmpty: "You have no saved analysis results yet.",
  ordersTitle: "Order history",
  ordersEmpty: "You have no orders yet.",
  untitledResult: "Analysis result",
  serviceNames: {
    HANJA_MEANING_MATCH: "Hanja meaning matching",
    KOREAN_TO_GLOBAL: "Global name conversion",
    GLOBAL_TO_KOREAN: "Korean name / pronunciation",
  },
  orderTypes: {
    PREMIUM_PDF: "Premium report",
    CALLIGRAPHY_IMAGE: "Calligraphy image",
    STAMP_DELIVERY: "Name stamp",
  },
  paymentStatus: {
    UNPAID: "Unpaid",
    PAID: "Paid",
    REFUNDED: "Refunded",
    CANCELLED: "Cancelled",
  },
  fulfillmentStatus: {
    PENDING: "Pending",
    PROCESSING: "Processing",
    SHIPPED: "Shipped",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
  },
};

const vi: AccountCopy = {
  dashboardTitle: "Hoạt động tài khoản của tôi",
  loading: "Đang tải dữ liệu tài khoản của bạn.",
  loadError: "Không thể tải dữ liệu tài khoản. Vui lòng thử lại sau.",
  resultsTitle: "Kết quả đã lưu",
  resultsEmpty: "Bạn chưa có kết quả phân tích nào được lưu.",
  ordersTitle: "Lịch sử đơn hàng",
  ordersEmpty: "Bạn chưa có đơn hàng nào.",
  untitledResult: "Kết quả phân tích",
  serviceNames: {
    HANJA_MEANING_MATCH: "Ghép nghĩa Hanja",
    KOREAN_TO_GLOBAL: "Chuyển đổi tên toàn cầu",
    GLOBAL_TO_KOREAN: "Tên / phát âm tiếng Hàn",
  },
  orderTypes: {
    PREMIUM_PDF: "Báo cáo cao cấp",
    CALLIGRAPHY_IMAGE: "Hình thư pháp",
    STAMP_DELIVERY: "Con dấu tên",
  },
  paymentStatus: {
    UNPAID: "Chưa thanh toán",
    PAID: "Đã thanh toán",
    REFUNDED: "Đã hoàn tiền",
    CANCELLED: "Đã hủy",
  },
  fulfillmentStatus: {
    PENDING: "Đang chờ",
    PROCESSING: "Đang xử lý",
    SHIPPED: "Đã gửi",
    COMPLETED: "Hoàn tất",
    CANCELLED: "Đã hủy",
  },
};

const accountCopies: Record<string, AccountCopy> = { ko, en, vi };

export function getAccountCopy(locale?: string): AccountCopy {
  if (!locale || locale === "ko") return ko;
  return accountCopies[locale] ?? en;
}
