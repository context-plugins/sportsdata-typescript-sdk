import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quarter1 = {
  quarterId?: number;
  gameId?: number;
  number?: number;
  name?: string | null;
  awayScore?: number | null;
  homeScore?: number | null;
};

export const quarter1Schema: Schema<Quarter1> = s.object<Quarter1>({
  quarterId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  number: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.number()),
  homeScore: s.optionalNullable(s.number()),
  _keysMap: {
    quarterId: "QuarterID",
    gameId: "GameID",
    number: "Number",
    name: "Name",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
  },
});
