import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * RaceBasic object (Includes basic information such as RaceID, Day, DateTime, Updated, and Created)
 */
export type RaceBasic2 = {
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

export const raceBasic2Schema: Schema<RaceBasic2> = s.object<RaceBasic2>({
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
