import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { localStorageServiceMock } from '../__mocks__/local-storage.mock';
import { lastValueFrom } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceMock }
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be count tracks', async () => {
    expect(service).toBeTruthy();

    expect(service.count()).toBe(0);

    service.storeTimeTrack({
      ticket: 'T1',
      startTime: new Date('2025-01-12T10:00:00Z')
    });

    expect(service.count()).toBe(1);

    for (let i = 1; i <= 10; i++) {
      service.storeTimeTrack({
        ticket: 'T1',
        startTime: new Date('2025-01-12T10:00:00Z')
      });

      expect(service.count()).toBe(i + 1);
    }
  });

  it('should be store time tracks', async () => {
    expect(service).toBeTruthy();

    const track1 = {
      ticket: 'T1',
      startTime: new Date('2025-01-12T10:00:00Z')
    };

    const track2 = {
      ticket: 'T1',
      startTime: new Date('2025-01-12T10:20:00Z')
    };

    await expect(
      lastValueFrom(service.storeTimeTrack(track1))
    ).resolves.toEqual(track1);

    expect(service.count()).toBe(1);

    await expect(
      lastValueFrom(service.storeTimeTrack(track2))
    ).resolves.toEqual(track2);

    expect(service.count()).toBe(2);
  });

  it('should be store give tracks of given date', async () => {
    expect(service).toBeTruthy();

    await expect(
      lastValueFrom(
        service.getTimeTracksSameDay(new Date('2025-01-12T10:00:00Z'))
      )
    ).resolves.toEqual([]);

    service.storeTimeTrack({
      ticket: 'T1',
      startTime: new Date('2025-01-12T10:00:00Z')
    });

    await expect(
      lastValueFrom(
        service.getTimeTracksSameDay(new Date('2025-01-12T10:00:00Z'))
      )
    ).resolves.toEqual([
      {
        ticket: 'T1',
        startTime: new Date('2025-01-12T10:00:00Z')
      }
    ]);

    service.storeTimeTrack({
      ticket: 'T1',
      startTime: new Date('2025-01-12T10:10:00Z'),
      endTime: new Date('2025-01-12T10:20:00Z')
    });

    await expect(
      lastValueFrom(
        service.getTimeTracksSameDay(new Date('2025-01-12T10:00:00Z'))
      )
    ).resolves.toEqual([
      {
        ticket: 'T1',
        startTime: new Date('2025-01-12T10:00:00Z'),
        endTime: new Date('2025-01-12T10:10:00Z')
      },
      {
        ticket: 'T1',
        startTime: new Date('2025-01-12T10:10:00Z'),
        endTime: new Date('2025-01-12T10:20:00Z')
      }
    ]);

    service.storeTimeTrack({
      ticket: 'T1',
      startTime: new Date('2025-01-13T10:10:00Z'),
      endTime: new Date('2025-01-13T10:20:00Z')
    });

    await expect(
      lastValueFrom(
        service.getTimeTracksSameDay(new Date('2025-01-12T10:00:00Z'))
      )
    ).resolves.toEqual([
      {
        ticket: 'T1',
        startTime: new Date('2025-01-12T10:00:00Z'),
        endTime: new Date('2025-01-12T10:10:00Z')
      },
      {
        ticket: 'T1',
        startTime: new Date('2025-01-12T10:10:00Z'),
        endTime: new Date('2025-01-12T10:20:00Z')
      }
    ]);

    await expect(
      lastValueFrom(
        service.getTimeTracksSameDay(new Date('2025-01-13T11:00:00Z'))
      )
    ).resolves.toEqual([
      {
        ticket: 'T1',
        startTime: new Date('2025-01-13T10:10:00Z'),
        endTime: new Date('2025-01-13T10:20:00Z')
      }
    ]);
  });
});
