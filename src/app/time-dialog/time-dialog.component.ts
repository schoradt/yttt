import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-time-dialog',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './time-dialog.component.html',
  styleUrl: './time-dialog.component.scss'
})
export class TimeDialogComponent {}
