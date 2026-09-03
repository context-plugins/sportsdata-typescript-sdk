import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyRace = {
  driverId?: number;
  season?: number;
  day?: string | null;
  dateTime?: string | null;
  name?: string | null;
  fantasyPoints?: number | null;
  fantasyPointsDraftKings?: number | null;
  updated?: string | null;
};

export const fantasyRaceSchema: Schema<FantasyRace> = s.object<FantasyRace>({
  driverId: s.optional(s.number()),
  season: s.optional(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  fantasyPoints: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
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
