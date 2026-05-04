package com.booking.booking.dto;

import com.booking.booking.entity.Doctor;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Setter
@Getter
public class AppointmentDto implements Serializable {

    private Long id;

    private String cusName;

    private String phone;

    private String patientName;

    private Doctor doctor;

    private String department;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm")
    private Date appointmentTime;

    private String type; // Khám trong giờ, ngoài giờ, online

    private String notes;

}
