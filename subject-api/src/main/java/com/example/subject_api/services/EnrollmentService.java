package com.example.subject_api.services;

import com.example.subject_api.models.entity.Enrollment;
import com.example.subject_api.repository.EnrollmentRepository;
import com.example.subject_api.services.interfacess.IEnrollmentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService implements IEnrollmentService {

    private final EnrollmentRepository enrollmentRepository;

    public EnrollmentService(EnrollmentRepository enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }

    @Override
    public Enrollment createEnrollment(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    @Override
    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    @Override
    public Enrollment getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Enrollment not found with id: " + id));
    }

    @Override
    public Enrollment updateEnrollment(Long id, Enrollment enrollment) {

        Enrollment existingEnrollment = enrollmentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Enrollment not found with id: " + id));

      //  existingEnrollment.setStudent(enrollment.getStudent());
        existingEnrollment.setSubject(enrollment.getSubject());
        existingEnrollment.setMarks(enrollment.getMarks());

        return enrollmentRepository.save(existingEnrollment);
    }

    @Override
    public void deleteEnrollment(Long id) {

        Enrollment existingEnrollment = enrollmentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Enrollment not found with id: " + id));

        enrollmentRepository.delete(existingEnrollment);
    }
}
