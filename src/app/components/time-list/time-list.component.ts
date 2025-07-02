import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TimeTrack } from '../../model/time-track';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'yttt-time-list',
  imports: [MatTableModule, MatCardModule, DatePipe],
  templateUrl: './time-list.component.html',
  styleUrl: './time-list.component.scss'
})
export class TimeListComponent {
  @Input()
  timeList: TimeTrack[] = [];

  displayedColumns: string[] = ['start', 'end', 'ticket'];
}
