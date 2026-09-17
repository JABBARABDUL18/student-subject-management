package com.example.subject_api.services.interfacess;

import java.util.List;

import com.example.subject_api.models.entity.Subject;

public interface ISubjectService {
    List<Subject> getAllSubjects();

    Subject createSubject(Subject subject);

    Subject getSubjectById(Long subId);

    Subject updateSubject(Long subId,Subject subject);

    void deleteSubject(Long subId);
}
