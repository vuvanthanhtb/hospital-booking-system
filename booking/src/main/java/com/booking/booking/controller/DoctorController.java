package com.booking.booking.controller;

import com.booking.booking.entity.Doctor;
import com.booking.booking.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class DoctorController {
    private final DoctorService service;

    @GetMapping("/get-all")
    public List<Doctor> getAllAppointments() {
        return service.getAllDoctor();
    }
}
