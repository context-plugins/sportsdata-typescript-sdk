import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Period2 = {
  periodId?: number;
  gameId?: number;
  number?: number;
  name?: string | null;
  type?: string | null;
  awayScore?: number | null;
  homeScore?: number | null;
};

export const period2Schema: Schema<Period2> = s.object<Period2>({
  periodId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  number: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.number()),
  homeScore: s.optionalNullable(s.number()),
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
