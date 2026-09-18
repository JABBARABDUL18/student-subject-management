package com.example.subject_api.repository;

import com.example.subject_api.models.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.subject_api.models.entity.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment,Long> {
    
}
