package com.booking.booking.service;

import com.booking.booking.dto.AppointmentDto;
import com.booking.booking.dto.CreateAppointmentDto;
import com.booking.booking.entity.Appointment;
import com.booking.booking.entity.Doctor;
import com.booking.booking.repository.AppointmentRepository;
import com.booking.booking.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository repository;

    @Autowired
    private DoctorRepository doctorRepository;

    public List<AppointmentDto> getAllAppointments() {
        List<Appointment> res = repository.findAll();
        return convertData(res);
    }

    public Appointment createAppointment(CreateAppointmentDto dto) {
        Doctor doctor = doctorRepository.findById(dto.getDoctorId()).orElse(null);
        Appointment appointment = new Appointment();
        appointment.setDepartment(dto.getAddress());
        appointment.setAppointmentTime(dto.getBookingDate());
        appointment.setDoctor(doctor);
        appointment.setPatientName(dto.getPatientName());
        appointment.setNotes(dto.getNote());
        appointment.setCusName(dto.getCusName());
        appointment.setPhone(dto.getPhone());
        appointment.setEmail(dto.getEmail());
        appointment.setGender(dto.getGender());

        return repository.save(appointment);
    }

    public void deleteAppointment(Long id) {
        repository.deleteById(id);
    }

    public List<AppointmentDto> findByPhone(String phone) {
        List<Appointment> res = repository.findByPhone(phone);

        return convertData(res);
    }

    private List<AppointmentDto> convertData(List<Appointment> res) {
        List<AppointmentDto> lstResponse = new ArrayList<>();
        res.forEach(app -> {
            AppointmentDto dto = new AppointmentDto();
            dto.setCusName(app.getCusName());
            dto.setPhone(app.getPhone());
            dto.setPatientName(app.getPatientName());
            dto.setDoctor(app.getDoctor());
            dto.setDepartment(app.getDepartment());
            dto.setAppointmentTime(app.getAppointmentTime());
            dto.setType(app.getType());
            dto.setNotes(app.getNotes());
            lstResponse.add(dto);
        });
        return lstResponse;
    }
}
