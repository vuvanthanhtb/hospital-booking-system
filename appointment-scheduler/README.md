# 🏥 Hệ Thống Đặt Lịch Hẹn Khám Bệnh (Appointment Scheduler)

Ứng dụng web hiện đại giúp bệnh nhân dễ dàng đăng ký lịch khám trực tuyến và tra cứu lịch hẹn tại bệnh viện.

## 🚀 Tính năng chính

- **Đăng ký khám bệnh:** Form đăng ký trực quan với các thông tin chi tiết (Họ tên, SĐT, Email, Chuyên khoa, Bác sĩ, Ngày giờ khám...).
- **Tra cứu lịch hẹn:** Tìm kiếm lịch hẹn đã đăng ký thông qua Số điện thoại hoặc Email.
- **Quản lý danh sách:** Hiển thị danh sách lịch hẹn dưới dạng thẻ (Card) sinh động, dễ theo dõi.
- **Thông báo thời gian thực:** Sử dụng Toast notifications để phản hồi kết quả đăng ký/tìm kiếm cho người dùng.
- **Giao diện đáp ứng (Responsive):** Hoạt động tốt trên cả máy tính và thiết bị di động.

## 🛠️ Công nghệ sử dụng

- **Frontend:**
  - [React 19](https://react.dev/) - Thư viện JavaScript phổ biến nhất hiện nay.
  - [React Router 7](https://reactrouter.com/) - Điều hướng và quản lý route.
  - [Ant Design (antd)](https://ant.design/) - Thư viện UI components mạnh mẽ cho Form đăng ký.
  - [React Bootstrap](https://react-bootstrap.github.io/) - Framework CSS cho bố cục và hiển thị danh sách.
  - [Dayjs](https://day.js.org/) - Xử lý ngày tháng và thời gian.
  - [React Toastify](https://fkhadra.github.io/react-toastify/) - Hiển thị thông báo popup.
- **Backend API:** 
  - Kết nối với hệ thống API tại: `http://localhost:8080/api`
- **Công cụ khác:** Formik (tùy chọn), Yup (tùy chọn), Bootstrap Icons.

## 📁 Cấu trúc thư mục

```text
src/
├── assets/      # Hình ảnh, SVG, Icons
├── components/  # Các component dùng chung (Header, ...)
├── pages/       # Các trang chính (Home, Booking, BookingList)
├── styles/      # File CSS định dạng cho từng trang/component
├── utils/       # Chứa constants, cấu hình API và helper functions
└── App.js       # Quản lý định tuyến (Routing) chính
```

## ⚙️ Cài đặt và Chạy ứng dụng

### 1. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### 2. Chạy chế độ Development
```bash
npm start
```
Ứng dụng sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

### 3. Build sản phẩm
```bash
npm run build
```

## 👥 Đội ngũ phát triển

1. **Vũ Văn Thanh** - K25DTCN313
2. **Đỗ Tiến Hà**  - K25DTCN285
3. **Vũ Ngọc Tú**   - K25DTCN309
4. **Đỗ Đức Huy**   - K25DTCN291
5. **Đỗ Hữu Tự**    - K25DTCN311

