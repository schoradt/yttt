import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Data, emptyData, TimeTrack } from './data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly dataStorageKey = 'ytttData';

  private readonly dataCache: Data;

  constructor(private readonly localStorageService: LocalStorageService) {
    const data = this.localStorageService.getData(this.dataStorageKey);

    if (data) {
      this.dataCache = JSON.parse(data);
    } else {
      this.dataCache = emptyData();
    }

    console.log(this.dataCache);

    this.cleanupData();
  }

  storeTimeTrack(ticket: TimeTrack): Observable<TimeTrack> {
    if (this.dataCache.timeTracks.length > 0) {
      const lastTicket =
        this.dataCache.timeTracks[this.dataCache.timeTracks.length - 1];

      if (!lastTicket.endTime) {
        lastTicket.endTime = ticket.startTime;
      }
    }

    this.dataCache.timeTracks.push(ticket);

    this.store();

    return of(ticket as TimeTrack);
  }

  private store() {
    console.log(this.dataCache);
    this.localStorageService.saveData(
      this.dataStorageKey,
      JSON.stringify(this.dataCache)
    );
  }

  private cleanupData() {
    let lastTrack: TimeTrack | null = null;

    this.dataCache.timeTracks.forEach((timeTrack) => {
      if (lastTrack != null && !lastTrack.endTime) {
        lastTrack.endTime = timeTrack.startTime;
      }

      lastTrack = timeTrack;
    });
  }
}
