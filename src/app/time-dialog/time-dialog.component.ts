import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-time-dialog',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './time-dialog.component.html',
  styleUrl: './time-dialog.component.css'
})
export class TimeDialogComponent {}
