import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Student as StudentModel } from '../Models/Entity/Student.model';
import { StudentService } from '../Service/Student.service';

@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './Student.component.html',
  styleUrl: './Student.component.css'
})
export class Student implements OnInit {

  students: StudentModel[] = [];
  isEditMode: boolean = false;

  student: StudentModel = {
    name: '',
    email: '',
    course: '',
    phone: ''
  };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (error) => {
        console.error('Error loading students:', error);
      }
    });
  }

  addStudent(): void {

    if (this.isEditMode && this.student.id) {

      this.studentService.updateStudent(this.student.id, this.student).subscribe({
        next: (data) => {
          console.log('Student updated:', data);

          const index = this.students.findIndex(s => s.id === data.id);

          if (index !== -1) {
            this.students[index] = data;
          }

          this.student = {
            name: '',
            email: '',
            course: '',
            phone: ''
          };

          this.isEditMode = false;
        },
        error: (error) => {
          console.error('Error updating student:', error);
        }
      });

    } else {

      this.studentService.addStudent(this.student).subscribe({
        next: (data) => {
          console.log('Student added:', data);

          this.students.push(data);

          this.student = {
            name: '',
            email: '',
            course: '',
            phone: ''
          };
        },
        error: (error) => {
          console.error('Error adding student:', error);
        }
      });
    }
  }

  editStudent(student: StudentModel): void {
    this.student = { ...student };
    this.isEditMode = true;
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.students = this.students.filter(student => student.id !== id);
        console.log('Student deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting student:', error);
      }
    });
  }
}