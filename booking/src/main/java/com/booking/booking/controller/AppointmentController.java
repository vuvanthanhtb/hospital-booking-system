package com.booking.booking.controller;

import com.booking.booking.dto.AppointmentDto;
import com.booking.booking.dto.CreateAppointmentDto;
import com.booking.booking.entity.Appointment;
import com.booking.booking.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService service;

    @GetMapping
    public List<AppointmentDto> getAllAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("find-by-phone")
    public List<AppointmentDto> findByPhone(@RequestParam(name = "phone") String phone) {
        return service.findByPhone(phone);
    }

    @PostMapping("/create")
    public Appointment createAppointment(@RequestBody CreateAppointmentDto appointment) {
        return service.createAppointment(appointment);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        service.deleteAppointment(id);
    }
}
