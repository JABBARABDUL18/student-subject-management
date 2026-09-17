package com.example.subject_api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity 
@Getter 
@Table (name="subject")
@Setter 
public class Subject {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sub_id")
    private Long subId;
    @Column(name = "sub_name")
    private String subName;
    @Column(name = "code")
    private String code;
    @Column(name = "description")
    private String description;


}
