package com.booking.booking.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class CreateAppointmentDto {
    private String address;

    private String type;

    private Long doctorId;

    private String patientName;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private Date bookingDate;

    private String note;

    private String cusName;

    private String phone;

    private String email;

    private String gender;

}
