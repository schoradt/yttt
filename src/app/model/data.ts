import { TimeTrack } from './time-track';

export interface Data {
  timeTracks: TimeTrack[];
}

export function emptyData(): Data {
  return {
    timeTracks: []
  } as Data;
}
