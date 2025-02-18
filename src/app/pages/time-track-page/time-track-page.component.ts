import { Component, OnInit } from '@angular/core';
import { TimeDialogComponent } from '../../components/time-dialog/time-dialog.component';
import { TimeListComponent } from '../../components/time-list/time-list.component';
import { DataService } from '../../services/data/data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TimeTrack } from '../../model/time-track';

@Component({
  selector: 'yttt-time-track-page',
  imports: [TimeDialogComponent, TimeListComponent, CommonModule],
  templateUrl: './time-track-page.component.html',
  styleUrl: './time-track-page.component.scss'
})
export class TimeTrackPageComponent implements OnInit {
  today!: Observable<TimeTrack[]>;

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.today = this.dataService.getTimeTracksSameDay(new Date());
  }
}
