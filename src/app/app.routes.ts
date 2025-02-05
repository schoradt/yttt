import { Routes } from '@angular/router';
import {TimeDialogComponent} from './time-dialog/time-dialog.component';

export const routes: Routes = [
  { path: 'time/add', component: TimeDialogComponent },
  { path: '',   redirectTo: '/time/add', pathMatch: 'full' }
];
