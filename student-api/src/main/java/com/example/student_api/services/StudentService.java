package com.example.student_api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.student_api.model.entity.Student;
import com.example.student_api.repository.StudentRepo;
import com.example.student_api.services.interfaces.IStudentService;

@Service
public class StudentService implements IStudentService {

    private final StudentRepo StudentRepo;

    public StudentService(StudentRepo StudentRepo) {
        this.StudentRepo = StudentRepo;
    }

    @Override
    public List<Student> getAllStudents() {
        return StudentRepo.findAll();
    }

    @Override
    public Student addStudent(Student student) {
        return StudentRepo.save(student);
    }
}