package com.example.subject_api.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter 
@Setter 
public class Enrollment{
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eId;

    // @ManyToOne
    // @JoinColumn(name = "student_id", nullable = false)
    // private Student student;

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    private Integer marks;
}