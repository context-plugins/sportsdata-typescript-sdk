import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyRace = {
  /** The unique ID of this driver (assigned by SportsDataIO) */
  driverId?: number;
  /** The season that this race is associated with */
  season?: number;
  /** The day of this race */
  day?: string | null;
  /** The date/time of this race */
  dateTime?: string | null;
  /** The name of this race */
  name?: string | null;
  /** The fantasy points scored by this driver */
  fantasyPoints?: number | null;
  /** The fantasy points scored by this driver, according to the DraftKings scoring system */
  fantasyPointsDraftKings?: number | null;
  /** The date/time when this race was last updated */
  updated?: string | null;
};

export const fantasyRaceSchema: Schema<FantasyRace> = s.object<FantasyRace>({
  driverId: s.optional(s.int()),
  season: s.optional(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    driverId: "DriverID",
    season: "Season",
    day: "Day",
    dateTime: "DateTime",
    name: "Name",
    fantasyPoints: "FantasyPoints",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    updated: "Updated",
  },
});
