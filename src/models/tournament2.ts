import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { round1Schema, type Round1 } from "./round1.js";

export type Tournament2 = {
  tournamentId?: number;
  name?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  isOver?: boolean;
  isInProgress?: boolean;
  venue?: string | null;
  location?: string | null;
  par?: number | null;
  yards?: number | null;
  purse?: number | null;
  startDateTime?: string | null;
  canceled?: boolean | null;
  covered?: boolean | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  country?: string | null;
  timeZone?: string | null;
  format?: string | null;
  rounds?: Round1[];
  sportRadarTournamentId?: string | null;
  oddsCoverage?: string | null;
};

export const tournament2Schema: Schema<Tournament2> = s.object<Tournament2>({
  tournamentId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  isOver: s.optional(s.boolean()),
  isInProgress: s.optional(s.boolean()),
  venue: s.optionalNullable(s.string()),
  location: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.number()),
  yards: s.optionalNullable(s.number()),
  purse: s.optionalNullable(s.number()),
  startDateTime: s.optionalNullable(s.string()),
  canceled: s.optionalNullable(s.boolean()),
  covered: s.optionalNullable(s.boolean()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zipCode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  timeZone: s.optionalNullable(s.string()),
  format: s.optionalNullable(s.string()),
  rounds: s.optional(s.array(s.lazy(() => round1Schema))),
  sportRadarTournamentId: s.optionalNullable(s.string()),
  oddsCoverage: s.optionalNullable(s.string()),
  _keysMap: {
    tournamentId: "TournamentID",
    name: "Name",
    startDate: "StartDate",
    endDate: "EndDate",
    isOver: "IsOver",
    isInProgress: "IsInProgress",
    venue: "Venue",
    location: "Location",
    par: "Par",
    yards: "Yards",
    purse: "Purse",
    startDateTime: "StartDateTime",
    canceled: "Canceled",
    covered: "Covered",
    city: "City",
    state: "State",
    zipCode: "ZipCode",
    country: "Country",
    timeZone: "TimeZone",
    format: "Format",
    rounds: "Rounds",
    sportRadarTournamentId: "SportRadarTournamentID",
    oddsCoverage: "OddsCoverage",
  },
});
