package com.example.student_api.services.interfaces;

import java.util.List;

import com.example.student_api.model.entity.Student;

public interface IStudentService {
    List<Student> getAllStudents();

    Student addStudent(Student student);
    void deleteStudent(Long id);

    Student updateStudent(Long id, Student student);
}