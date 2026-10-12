import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Period2 = {
  /** The unique ID for the period */
  periodId?: number;
  /** The unique ID of this game */
  gameId?: number;
  /** The Number (Order) of the Period in the scope of the Game. */
  number?: number;
  /** The name of the period in the game (e.g. 1, 2, OT, OT2, etc.) */
  name?: string | null;
  /**
   * Indicates whether this period is the first/second half or overtime (possible values: Half,
   * Overtime)
   */
  type?: string | null;
  /** The total points scored by the away team in this period only */
  awayScore?: number | null;
  /** The total points scored by the home team in this period only */
  homeScore?: number | null;
};

export const period2Schema: Schema<Period2> = s.object<Period2>({
  periodId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  number: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.int()),
  homeScore: s.optionalNullable(s.int()),
  _keysMap: {
    periodId: "PeriodID",
    gameId: "GameID",
    number: "Number",
    name: "Name",
    type: "Type",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
  },
});
