package com.booking.booking.repository;

import com.booking.booking.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDoctorName(String doctorName);

    List<Appointment> findByPhone(String phone);
}
