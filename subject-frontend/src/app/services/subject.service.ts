import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiUrl = 'http://localhost:8080/subjects';

  constructor(private http: HttpClient) {}

  getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.apiUrl);
  }

  getSubjectById(subId: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.apiUrl}/${subId}`);
  }

  createSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, subject);
  }

  updateSubject(subId: number, subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(
      `${this.apiUrl}/${subId}`,
      subject
    );
  }

  deleteSubject(subId: number): Observable<string> {
    return this.http.delete(
      `${this.apiUrl}/${subId}`,
      { responseType: 'text' }
    );
  }
}