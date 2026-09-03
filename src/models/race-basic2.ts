import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RaceBasic2 = {
  raceId?: number;
  day?: string | null;
  dateTime?: string | null;
  updated?: string | null;
  created?: string | null;
};

export const raceBasic2Schema: Schema<RaceBasic2> = s.object<RaceBasic2>({
  raceId: s.optional(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  _keysMap: {
    raceId: "RaceID",
    day: "Day",
    dateTime: "DateTime",
    updated: "Updated",
    created: "Created",
  },
});
