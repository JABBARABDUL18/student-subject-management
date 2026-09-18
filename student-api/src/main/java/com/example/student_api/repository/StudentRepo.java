package com.example.student_api.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.student_api.model.entity.Student;


public interface StudentRepo extends JpaRepository<Student, Long> {
}