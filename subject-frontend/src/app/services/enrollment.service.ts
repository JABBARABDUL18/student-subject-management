import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private apiUrl = 'http://localhost:8080/enrollments';

  constructor(private http: HttpClient) {}

  getAllEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }

  createEnrollment(enrollment: any): Observable<Enrollment> {
    return this.http.post<Enrollment>(
      this.apiUrl,
      enrollment
    );
  }

  updateEnrollment(
    id: number,
    enrollment: any
  ): Observable<Enrollment> {
    return this.http.put<Enrollment>(
      `${this.apiUrl}/${id}`,
      enrollment
    );
  }

  deleteEnrollment(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}