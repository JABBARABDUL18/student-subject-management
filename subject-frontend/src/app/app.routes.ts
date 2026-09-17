import { Routes } from '@angular/router';
import { SubjectComponent } from './components/subject/subject.component';

export const routes: Routes = [
  {
    path: 'subjects',
    component: SubjectComponent
  },
  {
    path: '',
    redirectTo: 'subjects',
    pathMatch: 'full'
  }
];