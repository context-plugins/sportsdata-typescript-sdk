import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Courses = {
  tournamentId?: number;
  name?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  venue?: string | null;
  location?: string | null;
  par?: number | null;
  yards?: number | null;
  purse?: number | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  country?: string | null;
  timeZone?: string | null;
  format?: string | null;
};

export const coursesSchema: Schema<Courses> = s.object<Courses>({
  tournamentId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  venue: s.optionalNullable(s.string()),
  location: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.number()),
  yards: s.optionalNullable(s.number()),
  purse: s.optionalNullable(s.number()),
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
