package com.example.student_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.student_api.model.entity.Student;
import com.example.student_api.services.interfaces.IStudentService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
@RequestMapping("/api/students")
public class StudentController {

    private final IStudentService StudentService;

    @Autowired
    public StudentController(IStudentService StudentService) {
        this.StudentService = StudentService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return StudentService.getAllStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student Student) {
        return StudentService.addStudent(Student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        StudentService.deleteStudent(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student) {
        return StudentService.updateStudent(id, student);
    }
}