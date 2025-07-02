import { Component, OnInit, signal } from '@angular/core';
import { TimeDialogComponent } from '../../components/time-dialog/time-dialog.component';
import { TimeListComponent } from '../../components/time-list/time-list.component';
import { DataService } from '../../services/data/data.service';
import { CommonModule } from '@angular/common';
import { TimeTrack } from '../../model/time-track';

@Component({
  selector: 'yttt-time-track-page',
  imports: [TimeDialogComponent, TimeListComponent, CommonModule],
  templateUrl: './time-track-page.component.html',
  styleUrl: './time-track-page.component.scss'
})
export class TimeTrackPageComponent implements OnInit {
  today = signal<TimeTrack[]>([]);

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh(): void {
    console.log('refresh ...');
    this.dataService.getTimeTracksSameDay(new Date()).subscribe((data) => {
      this.today.set(data);
      console.log(data);
    });
  }

  newTrackAdded($event: TimeTrack) {
    console.log('newTrackAdded', $event);
    this.refresh();
  }
}
