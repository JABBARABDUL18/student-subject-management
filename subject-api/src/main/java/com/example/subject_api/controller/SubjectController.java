package com.example.subject_api.controller;

import com.example.subject_api.services.SubjectService;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.subject_api.models.entity.Subject;
import com.example.subject_api.services.interfacess.ISubjectService;



@RestController 
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/subjects")
public class SubjectController {
    private final SubjectService subjectService;
    private final ISubjectService iSubjectService;

    public SubjectController(ISubjectService iSubjectService, SubjectService subjectService) {
        this.iSubjectService=iSubjectService;
        this.subjectService = subjectService;
    }

    @GetMapping 
    public List<Subject> getAllSubjects(){
        return iSubjectService.getAllSubjects();
    }

    @PostMapping 
    public Subject createSubject(@RequestBody Subject subject){
        return subjectService.createSubject(subject);
    }

    @GetMapping("/{subId}")
    public Subject getSubjectById(@PathVariable Long subId){
        return subjectService.getSubjectById(subId);
    }

    @PutMapping("/{subId}")
    public Subject updateSubject(@PathVariable Long subId,@RequestBody Subject subject){
        return subjectService.updateSubject(subId, subject);
    }

    @DeleteMapping("/{subId}")
    public String deleteSubject(@PathVariable Long subId) {

        subjectService.deleteSubject(subId);

     return "Subject deleted successfully";
    }
    
}
