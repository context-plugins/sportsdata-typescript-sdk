import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Period1 = {
  /** Unique ID for each period */
  periodId?: number;
  /** The unique ID of this game */
  gameId?: number;
  /** The Number (Order) of the Period in the scope of the Game. */
  number?: number;
  /** The name of the period (possible values: 1; 2; 3; 4; OT; Final, F/OT) */
  name?: string | null;
  /** The total points scored by the away team in this period */
  awayScore?: number | null;
  /** The total points scored by the home team in this period */
  homeScore?: number | null;
};

export const period1Schema: Schema<Period1> = s.object<Period1>({
  periodId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  number: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.int()),
  homeScore: s.optionalNullable(s.int()),
  _keysMap: {
    periodId: "PeriodID",
    gameId: "GameID",
    number: "Number",
    name: "Name",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
  },
});
