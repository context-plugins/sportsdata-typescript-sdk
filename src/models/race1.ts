import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The details of the race including general information about the race itself (Ex: Name; DateTime;
 * Track; WinnerID; IsInProgress; Scheduled Laps; etc.)
 */
export type Race1 = {
  /** The unique ID of this race */
  raceId?: number;
  /** The unique ID of the series that this race is associated with */
  seriesId?: number;
  /** The name of the series that this race is associated with */
  seriesName?: string | null;
  /** The season that this race is associated with */
  season?: number;
  /** The name of this race */
  name?: string | null;
  /** The day of this race */
  day?: string | null;
  /** The date/time of this race */
  dateTime?: string | null;
  /** The name of the track for this race */
  track?: string | null;
  /** The broadcast airing this race */
  broadcast?: string | null;
  /** The unique ID of the driver who won this race */
  winnerId?: number | null;
  /** The unique ID of the driver who won the qualifying pole */
  poleWinnerId?: number | null;
  /** Indicates whether this race is currently in progress */
  isInProgress?: boolean;
  /** Indicates whether this race is over */
  isOver?: boolean;
  /** The date/time when this race was last updated */
  updated?: string | null;
  /** The date/time when this race was created (in US Eastern Time) */
  created?: string | null;
  /** The day that this is race is rescheduled for (if race was postponed) */
  rescheduledDay?: string | null;
  /** The date/time that this is race is rescheduled for (if race was postponed) */
  rescheduledDateTime?: string | null;
  /** Indicates whether this race has been canceled */
  canceled?: boolean;
  /** Number of laps scheduled for this race */
  scheduledLaps?: number | null;
  /** Total number of laps ran for this race */
  actualLaps?: number | null;
};

export const race1Schema: Schema<Race1> = s.object<Race1>({
  raceId: s.optional(s.int()),
  seriesId: s.optional(s.int()),
  seriesName: s.optionalNullable(s.string()),
  season: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  track: s.optionalNullable(s.string()),
  broadcast: s.optionalNullable(s.string()),
  winnerId: s.optionalNullable(s.int()),
  poleWinnerId: s.optionalNullable(s.int()),
  isInProgress: s.optional(s.boolean()),
  isOver: s.optional(s.boolean()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  rescheduledDay: s.optionalNullable(s.string()),
  rescheduledDateTime: s.optionalNullable(s.string()),
  canceled: s.optional(s.boolean()),
  scheduledLaps: s.optionalNullable(s.int()),
  actualLaps: s.optionalNullable(s.int()),
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
