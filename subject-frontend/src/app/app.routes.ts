import { Routes } from '@angular/router';
import { SubjectComponent } from './components/subject/subject.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';

export const routes: Routes = [
  {
    path: 'subjects',
    component: SubjectComponent
  },
  {
    path: '',
    redirectTo: 'subjects',
    pathMatch: 'full'
  },
  {
  path: 'enrollments',
  component: EnrollmentComponent
}
];