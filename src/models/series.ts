import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Series = {
  homeTeamWins?: number;
  awayTeamWins?: number;
  gameNumber?: number;
  maxLength?: number;
};

export const seriesSchema: Schema<Series> = s.object<Series>({
  homeTeamWins: s.optional(s.number()),
  awayTeamWins: s.optional(s.number()),
  gameNumber: s.optional(s.number()),
  maxLength: s.optional(s.number()),
  _keysMap: {
    homeTeamWins: "HomeTeamWins",
    awayTeamWins: "AwayTeamWins",
    gameNumber: "GameNumber",
    maxLength: "MaxLength",
  },
});
