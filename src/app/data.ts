export interface TimeTrack {
  id?: string;
  startTime: Date;
  endTime?: Date;
  ticket: string;
  description: string | null;
}

export interface Data {
  timeTracks: TimeTrack[];
}

export function emptyData(): Data {
  return {
    timeTracks: []
  } as Data;
}
