import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  subjects: Subject[] = [];
  newSubject: Subject = {
  subName: '',
  code: '',
  description: ''
};

editingId: number | null = null;

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.loadSubjects();
  }

  loadSubjects(): void {
    this.subjectService.getAllSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
        console.log('Subjects:', data);
      },
      error: (error) => {
        console.error('Error loading subjects:', error);
      }
    });
  }

  createSubject(): void {

    if (!this.isFormValid()) {
    alert('Please fill in all fields.');
    return;
  }

  this.subjectService.createSubject(this.newSubject).subscribe({
    next: (data) => {
      console.log('Subject created:', data);

      this.subjects.push(data);

      this.newSubject = {
        subName: '',
        code: '',
        description: ''
      };
    },
    error: (error) => {
      console.error('Error creating subject:', error);
    }
  });
}

editSubject(subject: Subject): void {
  this.editingId = subject.subId ?? null;

  this.newSubject = {
    subName: subject.subName ?? '',
    code: subject.code,
    description: subject.description
  };
}

updateSubject(): void {

    if (!this.isFormValid()) {
    alert('Please fill in all fields.');
    return;
  }

  if (this.editingId === null) {
    return;
  }

  this.subjectService.updateSubject(this.editingId, this.newSubject).subscribe({
    next: (data) => {
      console.log('Subject updated:', data);

      const index = this.subjects.findIndex(
        subject => subject.subId === this.editingId
      );

      if (index !== -1) {
        this.subjects[index] = data;
      }

      this.editingId = null;

      this.newSubject = {
        subName: '',
        code: '',
        description: ''
      };
    },
    error: (error) => {
      console.error('Error updating subject:', error);
    }
  });
}

deleteSubject(subId: number): void {
  this.subjectService.deleteSubject(subId).subscribe({
    next: (message) => {
      console.log(message);

      this.subjects = this.subjects.filter(
        subject => subject.subId !== subId
      );
    },
    error: (error) => {
      console.error('Error deleting subject:', error);
    }
  });
}

isFormValid(): boolean {
  return (
    this.newSubject.subName.trim().length > 0 &&
    this.newSubject.code.trim().length > 0 &&
    this.newSubject.description.trim().length > 0
  );
}

}