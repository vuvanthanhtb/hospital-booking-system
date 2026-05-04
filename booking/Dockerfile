# Sử dụng OpenJDK 21
FROM eclipse-temurin:21-jdk-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép file Maven
COPY . /app

# Build ứng dụng
RUN ./mvnw package -DskipTests

# Chạy ứng dụng
CMD ["java", "-jar", "target/<tên-file-jar-của-bạn>.jar"]
