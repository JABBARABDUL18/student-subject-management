import { Component } from '@angular/core';
import { Student } from './Components/Student.component';

@Component({
  selector: 'app-root',
  imports: [Student],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}