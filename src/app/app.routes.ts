import { Routes } from '@angular/router';
import { TimeTrackPageComponent } from './pages/time-track-page/time-track-page.component';

export const routes: Routes = [
  { path: 'track-time', component: TimeTrackPageComponent },
  { path: '', redirectTo: '/track-time', pathMatch: 'full' }
];
