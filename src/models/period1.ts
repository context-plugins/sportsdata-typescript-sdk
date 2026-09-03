import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Period1 = {
  periodId?: number;
  gameId?: number;
  number?: number;
  name?: string | null;
  awayScore?: number | null;
  homeScore?: number | null;
};

export const period1Schema: Schema<Period1> = s.object<Period1>({
  periodId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  number: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.number()),
  homeScore: s.optionalNullable(s.number()),
  _keysMap: {
    periodId: "PeriodID",
    gameId: "GameID",
    number: "Number",
    name: "Name",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
  },
});
