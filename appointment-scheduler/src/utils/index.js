export const hospitalDepartments = [
  { id: 1, name: "Khoa Nội" },
  { id: 2, name: "Khoa Ngoại" },
  { id: 3, name: "Khoa Sản" },
  { id: 4, name: "Khoa Nhi" },
  { id: 5, name: "Khoa Cấp cứu" },
  { id: 6, name: "Khoa Xét nghiệm" },
  { id: 7, name: "Khoa Chẩn đoán hình ảnh" },
  { id: 8, name: "Khoa Hồi sức tích cực" }
];

export const serviceTypes = [
  { id: 1, name: "Khám trong giờ" },
  { id: 2, name: "Khám ngoài giờ" },
  { id: 3, name: "Khám online" },
];

export const locations = [
  { id: 1, name: "BVĐK Hồ Chí Minh" },
  { id: 2, name: "BVĐK Hà Nội" },
];

export const genders = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Nữ" },
  { id: 3, name: "Chưa xác định" },
];

export const API_DOMAIN = "http://localhost:8080/api";

export const getUrlParams = () => Object.fromEntries(new URLSearchParams(window.location.search));
