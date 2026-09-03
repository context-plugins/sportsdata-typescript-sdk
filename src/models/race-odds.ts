import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { driverRaceOddSchema, type DriverRaceOdd } from "./driver-race-odd.js";

export type RaceOdds = {
  raceId?: number;
  seriesId?: number;
  seriesName?: string | null;
  season?: number;
  name?: string | null;
  day?: string | null;
  dateTime?: string | null;
  track?: string | null;
  isInProgress?: boolean | null;
  isOver?: boolean | null;
  preGameOdds?: DriverRaceOdd[];
};

export const raceOddsSchema: Schema<RaceOdds> = s.object<RaceOdds>({
  raceId: s.optional(s.number()),
  seriesId: s.optional(s.number()),
  seriesName: s.optionalNullable(s.string()),
  season: s.optional(s.number()),
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
