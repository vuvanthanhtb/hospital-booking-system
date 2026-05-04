# Booking System API

Dự án quản lý lịch hẹn (Booking System) được xây dựng bằng **Spring Boot 3**. Hệ thống cho phép quản lý thông tin bác sĩ và các cuộc hẹn khám bệnh của khách hàng.

## 🚀 Công nghệ sử dụng

*   **Java 17**
*   **Spring Boot 3.4.3**
*   **Spring Data JPA** (Hibernate)
*   **MySQL Database**
*   **Lombok**
*   **SpringDoc OpenAPI (Swagger)**

## 📋 Yêu cầu hệ thống

*   JDK 17 trở lên
*   Maven 3.6+
*   MySQL Server 8.0+

## 🛠️ Cài đặt và Chạy ứng dụng

1.  **Cấu hình Database:**
    *   Tạo database trong MySQL: `CREATE DATABASE booking_system;`
    *   Chỉnh sửa file `src/main/resources/application.properties` để khớp với username/password MySQL của bạn.

2.  **Chạy ứng dụng:**
    ```bash
    mvn spring-boot:run
    ```

3.  **Truy cập API Documentation:**
    *   Swagger UI: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)
    *   OpenAPI Spec: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)
    *   **Postman:** Import file `Booking_System.postman_collection.json` vào Postman để test các API nhanh chóng.

## 🗄️ Cấu trúc Cơ sở dữ liệu (SQL)

Dưới đây là các lệnh SQL để khởi tạo cấu trúc bảng và dữ liệu mẫu:

```sql
-- Tạo bảng bác sĩ
CREATE TABLE doctor (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    title VARCHAR(255),
    position VARCHAR(255)
);

-- Tạo bảng lịch hẹn
CREATE TABLE appointments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cus_name VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(100),
    gender VARCHAR(20),
    patient_name VARCHAR(255),
    doctor_id BIGINT,
    department VARCHAR(255),
    appointment_time DATETIME,
    type VARCHAR(255),
    notes VARCHAR(500),
    CONSTRAINT fk_doctor FOREIGN KEY (doctor_id) REFERENCES doctor(id) ON DELETE SET NULL
);

-- Thêm dữ liệu mẫu cho bác sĩ
INSERT INTO doctor (name, phone, title, position) VALUES
('Nguyễn Văn A', '0987654321', 'Tiến sĩ', 'Bác sĩ trưởng khoa'),
('Trần Thị B', '0912345678', 'Phó Giáo sư', 'Bác sĩ phẫu thuật chính'),
('Lê Văn C', '0909988776', 'Thạc sĩ', 'Bác sĩ nhi khoa');

-- Thêm dữ liệu mẫu cho lịch hẹn
INSERT INTO appointments (cus_name, phone, patient_name, doctor_id, department, appointment_time, type, notes) VALUES
('Nguyen Van A', '0912345678', 'Tran Thi B', 1, 'Nội khoa', '2026-04-30 09:00:00', 'Khám trong giờ', 'Khám tổng quát.'),
('Le Van D', '0987654321', 'Nguyen Van E', 2, 'Nhi khoa', '2026-04-30 14:30:00', 'Khám ngoài giờ', 'Tái khám sau điều trị.'),
('Tran Thi G', '0934567890', 'Hoang Minh H', 3, 'Tim mạch', '2026-04-30 10:15:00', 'Online', 'Tư vấn sức khỏe trực tuyến.'),
('Pham Quoc J', '0923456789', 'Le Thanh K', 1, 'Da liễu', '2026-04-30 16:45:00', 'Khám trong giờ', 'Kiểm tra dị ứng.'),
('Hoang Thi M', '0901234567', 'Pham Tuan N', 2, 'Nội tiết', '2026-04-30 08:30:00', 'Khám ngoài giờ', 'Định kỳ kiểm tra đường huyết.');

```

## 🔌 API Endpoints

### 🩺 Bác sĩ (Doctor)
*   `GET /api/doctor/get-all`: Lấy danh sách tất cả bác sĩ.

### 📅 Lịch hẹn (Appointment)
*   `GET /api/appointments`: Lấy danh sách tất cả lịch hẹn.
*   `GET /api/appointments/find-by-phone?phone={phone}`: Tìm lịch hẹn theo số điện thoại.
*   `POST /api/appointments/create`: Tạo lịch hẹn mới.
*   `DELETE /api/appointments/{id}`: Xóa lịch hẹn theo ID.

## 👥 Đội ngũ phát triển

1. **Vũ Văn Thanh** - K25DTCN313
2. **Đỗ Tiến Hà**  - K25DTCN285
3. **Vũ Ngọc Tú**   - K25DTCN309
4. **Đỗ Đức Huy**   - K25DTCN291
5. **Đỗ Hữu Tự**    - K25DTCN311