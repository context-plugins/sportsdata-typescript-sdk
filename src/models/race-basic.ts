import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RaceBasic = {
  /** The unique ID of this race */
  raceId?: number;
  /** The day of this race */
  day?: string | null;
  /** The date/time of this race */
  dateTime?: string | null;
  /** The date/time when this race was last updated */
  updated?: string | null;
  /** The date/time when this race was created (in US Eastern Time) */
  created?: string | null;
};

export const raceBasicSchema: Schema<RaceBasic> = s.object<RaceBasic>({
  raceId: s.optional(s.int()),
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
