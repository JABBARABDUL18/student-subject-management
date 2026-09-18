package com.example.subject_api.services.interfacess;

import java.util.List;

import com.example.subject_api.models.entity.Enrollment;


public interface IEnrollmentService {
    
    Enrollment createEnrollment(Enrollment enrollment);

    List<Enrollment> getAllEnrollments();

    Enrollment getEnrollmentById(Long id);

    Enrollment updateEnrollment(Long id, Enrollment enrollment);

    void deleteEnrollment(Long id);
}
