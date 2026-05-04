package com.booking.booking.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Hệ thống đặt lịch khám bệnh")
                        .version("1.0")
                        .description("API cho hệ thống đặt lịch khám bệnh trực tuyến"));
    }
}

