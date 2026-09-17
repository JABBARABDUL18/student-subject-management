package com.example.subject_api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.subject_api.models.entity.Subject;
import com.example.subject_api.repository.SubjectRepository;
import com.example.subject_api.services.interfacess.ISubjectService;

@Service 
public class SubjectService implements ISubjectService{

    private final SubjectRepository subjectRepository;

    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository=subjectRepository;
    }

    @Override
    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    @Override
    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    @Override
    public Subject getSubjectById(Long subId) {
        return subjectRepository.findById(subId).orElseThrow(() -> new RuntimeException("Subject not found with id: "+subId));
    }

    @Override
    public Subject updateSubject(Long subId, Subject subject) {

    Subject existingSubject = subjectRepository.findById(subId).orElseThrow(() ->new RuntimeException("Subject not found with id: " + subId));

    existingSubject.setSubName(subject.getSubName());
    existingSubject.setCode(subject.getCode());
    existingSubject.setDescription(subject.getDescription());

    return subjectRepository.save(existingSubject);
    }

    @Override
    public void deleteSubject(Long subId) {

    Subject existingSubject = subjectRepository.findById(subId).orElseThrow(() ->new RuntimeException("Subject not found with id: " + subId));

    subjectRepository.delete(existingSubject);
    }
    
    
}
