package com.booking.booking.service;

import com.booking.booking.entity.Doctor;
import com.booking.booking.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository repository;

    public List<Doctor> getAllDoctor() {
        return repository.findAll();
    }
}
