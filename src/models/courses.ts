import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Courses = {
  /** The unique ID of the tournament */
  tournamentId?: number;
  /** The name of the tournament that is being played at this course */
  name?: string | null;
  /** The start date of this tournament */
  startDate?: string | null;
  /** The end date of this tournament */
  endDate?: string | null;
  /** The name of the venue where this tournament takes place */
  venue?: string | null;
  /** The location of this course */
  location?: string | null;
  /** The 18-hole par of this course */
  par?: number | null;
  /** The total course yardage */
  yards?: number | null;
  /** The total prize money of this tournament */
  purse?: number | null;
  /** The city where this course is located */
  city?: string | null;
  /** The state where this course is located */
  state?: string | null;
  /** The zip code where this course is located */
  zipCode?: string | null;
  /** The country where this course is located */
  country?: string | null;
  /** The description of the time zone in which the course is located */
  timeZone?: string | null;
  /** The format of the tournament (possible values: Stroke, Match, Team, Stableford) */
  format?: string | null;
};

export const coursesSchema: Schema<Courses> = s.object<Courses>({
  tournamentId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  venue: s.optionalNullable(s.string()),
  location: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.int()),
  yards: s.optionalNullable(s.int()),
  purse: s.optionalNullable(s.float64()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zipCode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  timeZone: s.optionalNullable(s.string()),
  format: s.optionalNullable(s.string()),
  _keysMap: {
    tournamentId: "TournamentID",
    name: "Name",
    startDate: "StartDate",
    endDate: "EndDate",
    venue: "Venue",
    location: "Location",
    par: "Par",
    yards: "Yards",
    purse: "Purse",
    city: "City",
    state: "State",
    zipCode: "ZipCode",
    country: "Country",
    timeZone: "TimeZone",
    format: "Format",
  },
});
