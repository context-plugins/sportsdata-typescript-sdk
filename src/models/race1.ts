import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Race1 = {
  raceId?: number;
  seriesId?: number;
  seriesName?: string | null;
  season?: number;
  name?: string | null;
  day?: string | null;
  dateTime?: string | null;
  track?: string | null;
  broadcast?: string | null;
  winnerId?: number | null;
  poleWinnerId?: number | null;
  isInProgress?: boolean;
  isOver?: boolean;
  updated?: string | null;
  created?: string | null;
  rescheduledDay?: string | null;
  rescheduledDateTime?: string | null;
  canceled?: boolean;
  scheduledLaps?: number | null;
  actualLaps?: number | null;
};

export const race1Schema: Schema<Race1> = s.object<Race1>({
  raceId: s.optional(s.number()),
  seriesId: s.optional(s.number()),
  seriesName: s.optionalNullable(s.string()),
  season: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  track: s.optionalNullable(s.string()),
  broadcast: s.optionalNullable(s.string()),
  winnerId: s.optionalNullable(s.number()),
  poleWinnerId: s.optionalNullable(s.number()),
  isInProgress: s.optional(s.boolean()),
  isOver: s.optional(s.boolean()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  rescheduledDay: s.optionalNullable(s.string()),
  rescheduledDateTime: s.optionalNullable(s.string()),
  canceled: s.optional(s.boolean()),
  scheduledLaps: s.optionalNullable(s.number()),
  actualLaps: s.optionalNullable(s.number()),
  _keysMap: {
    raceId: "RaceID",
    seriesId: "SeriesID",
    seriesName: "SeriesName",
    season: "Season",
    name: "Name",
    day: "Day",
    dateTime: "DateTime",
    track: "Track",
    broadcast: "Broadcast",
    winnerId: "WinnerID",
    poleWinnerId: "PoleWinnerID",
    isInProgress: "IsInProgress",
    isOver: "IsOver",
    updated: "Updated",
    created: "Created",
    rescheduledDay: "RescheduledDay",
    rescheduledDateTime: "RescheduledDateTime",
    canceled: "Canceled",
    scheduledLaps: "ScheduledLaps",
    actualLaps: "ActualLaps",
  },
});
