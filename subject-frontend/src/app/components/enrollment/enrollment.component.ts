import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Enrollment } from '../../models/enrollment';
import { EnrollmentService } from '../../services/enrollment.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent implements OnInit {

  enrollments: Enrollment[] = [];
  subjects: any[] = [];

  selectedSubjectId: number = 0;
  marks: number = 0;

  isEditing: boolean = false;
  editingId: number | null = null;

  constructor(
    private enrollmentService: EnrollmentService,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.loadEnrollments();
    this.loadSubjects();
  }

  loadEnrollments(): void {
    this.enrollmentService.getAllEnrollments().subscribe({
      next: (data) => {
        this.enrollments = data;
        console.log('Enrollments:', this.enrollments);
      },
      error: (error) => {
        console.error('Error loading enrollments:', error);
      }
    });
  }

  loadSubjects(): void {
    this.subjectService.getAllSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
        console.log('Subjects:', this.subjects);
      },
      error: (error) => {
        console.error('Error loading subjects:', error);
      }
    });
  }

  saveEnrollment(): void {

    if (this.selectedSubjectId === 0) {
      alert('Please select a subject');
      return;
    }

    if (this.marks < 0 || this.marks > 100) {
      alert('Marks must be between 0 and 100');
      return;
    }

    const enrollmentData = {
      subject: {
        subId: this.selectedSubjectId
      },
      marks: this.marks
    };

    if (this.isEditing && this.editingId !== null) {

      this.enrollmentService
        .updateEnrollment(this.editingId, enrollmentData)
        .subscribe({
          next: () => {
            console.log('Enrollment updated');
            this.loadEnrollments();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error updating enrollment:', error);
          }
        });

    } else {

      this.enrollmentService
        .createEnrollment(enrollmentData)
        .subscribe({
          next: () => {
            console.log('Enrollment created');
            this.loadEnrollments();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error creating enrollment:', error);
          }
        });
    }
  }

  editEnrollment(enrollment: Enrollment): void {

    this.selectedSubjectId = enrollment.subject.subId;
    this.marks = enrollment.marks;

    this.editingId = enrollment.eId ?? null;
    this.isEditing = true;
  }

  deleteEnrollment(id: number): void {

    if (confirm('Are you sure you want to delete this enrollment?')) {

      this.enrollmentService.deleteEnrollment(id).subscribe({
        next: () => {
          console.log('Enrollment deleted');
          this.loadEnrollments();
        },
        error: (error) => {
          console.error('Error deleting enrollment:', error);
        }
      });
    }
  }

  resetForm(): void {

    this.selectedSubjectId = 0;
    this.marks = 0;

    this.isEditing = false;
    this.editingId = null;
  }
}