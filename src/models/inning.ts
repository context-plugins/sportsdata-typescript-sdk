import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Inning = {
  inningId?: number;
  gameId?: number;
  inningNumber?: number;
  awayTeamRuns?: number | null;
  homeTeamRuns?: number | null;
};

export const inningSchema: Schema<Inning> = s.object<Inning>({
  inningId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  inningNumber: s.optional(s.number()),
  awayTeamRuns: s.optionalNullable(s.number()),
  homeTeamRuns: s.optionalNullable(s.number()),
  _keysMap: {
    inningId: "InningID",
    gameId: "GameID",
    inningNumber: "InningNumber",
    awayTeamRuns: "AwayTeamRuns",
    homeTeamRuns: "HomeTeamRuns",
  },
});
