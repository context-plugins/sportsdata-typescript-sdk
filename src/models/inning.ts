import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Inning = {
  /** The unique ID of this specific inning */
  inningId?: number;
  /** The unique ID of the game tied to this Inning */
  gameId?: number;
  /** The current inning number of the game */
  inningNumber?: number;
  /** Number of runs scored by the away team in the specific inning */
  awayTeamRuns?: number | null;
  /** Number of runs scored by the home team in the specific inning */
  homeTeamRuns?: number | null;
};

export const inningSchema: Schema<Inning> = s.object<Inning>({
  inningId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  inningNumber: s.optional(s.int()),
  awayTeamRuns: s.optionalNullable(s.int()),
  homeTeamRuns: s.optionalNullable(s.int()),
  _keysMap: {
    inningId: "InningID",
    gameId: "GameID",
    inningNumber: "InningNumber",
    awayTeamRuns: "AwayTeamRuns",
    homeTeamRuns: "HomeTeamRuns",
  },
});
