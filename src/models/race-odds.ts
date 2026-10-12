import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { driverRaceOddSchema, type DriverRaceOdd } from "./driver-race-odd.js";

export type RaceOdds = {
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
  /** Indicates whether this race is currently in progress */
  isInProgress?: boolean | null;
  /** Indicates whether this race is over */
  isOver?: boolean | null;
  /** List of the odds leading up to the start of the race */
  preGameOdds?: DriverRaceOdd[];
};

export const raceOddsSchema: Schema<RaceOdds> = s.object<RaceOdds>({
  raceId: s.optional(s.int()),
  seriesId: s.optional(s.int()),
  seriesName: s.optionalNullable(s.string()),
  season: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  track: s.optionalNullable(s.string()),
  isInProgress: s.optionalNullable(s.boolean()),
  isOver: s.optionalNullable(s.boolean()),
  preGameOdds: s.optional(s.array(s.lazy(() => driverRaceOddSchema))),
  _keysMap: {
    raceId: "RaceID",
    seriesId: "SeriesID",
    seriesName: "SeriesName",
    season: "Season",
    name: "Name",
    day: "Day",
    dateTime: "DateTime",
    track: "Track",
    isInProgress: "IsInProgress",
    isOver: "IsOver",
    preGameOdds: "PreGameOdds",
  },
});
