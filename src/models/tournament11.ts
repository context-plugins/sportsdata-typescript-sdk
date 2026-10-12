import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { round1Schema, type Round1 } from "./round1.js";

/** The details of the tournament for this leaderboard */
export type Tournament11 = {
  /** The unique ID of the tournament */
  tournamentId?: number;
  /** The name of the tournament */
  name?: string | null;
  /** The start date of this tournament */
  startDate?: string | null;
  /** The end date of this tournament */
  endDate?: string | null;
  /** Indicates whether this tournament is over */
  isOver?: boolean;
  /** Indicates whether this tournament is in progress */
  isInProgress?: boolean;
  /** The name of the venue where this tournament takes place */
  venue?: string | null;
  /** The location where this tournament is played */
  location?: string | null;
  /** The 18-hole par of this course */
  par?: number | null;
  /** The total course yardage */
  yards?: number | null;
  /** The total prize money of this tournament */
  purse?: number | null;
  /** The first tee time of the upcoming round of this tournament (in US Eastern Time) */
  startDateTime?: string | null;
  /** Indicates whether this tournament is canceled or not */
  canceled?: boolean | null;
  /**
   * Indicates whether this tournament is covered. Note: only stroke format tournaments are covered
   */
  covered?: boolean | null;
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
  /** The details of the rounds of this tournament */
  rounds?: Round1[];
  /** The unique ID of this tournament in the SportRadar API */
  sportRadarTournamentId?: string | null;
  /**
   * Shows the type of odds coverage for the tournament, with possible values being 'None';
   * 'Limited'; or 'Full'
   */
  oddsCoverage?: string | null;
};

export const tournament11Schema: Schema<Tournament11> = s.object<Tournament11>({
  tournamentId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  isOver: s.optional(s.boolean()),
  isInProgress: s.optional(s.boolean()),
  venue: s.optionalNullable(s.string()),
  location: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.int()),
  yards: s.optionalNullable(s.int()),
  purse: s.optionalNullable(s.float64()),
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
