import { Component, Input } from '@angular/core';
import { TimeTrack } from '../../data';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'yttt-time-list',
  imports: [MatTableModule, MatCardModule],
  templateUrl: './time-list.component.html',
  styleUrl: './time-list.component.scss'
})
export class TimeListComponent {
  @Input()
  timeList: TimeTrack[] = [];

  displayedColumns: string[] = ['start', 'end', 'ticket'];
}
