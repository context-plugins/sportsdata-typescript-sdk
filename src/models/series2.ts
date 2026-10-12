import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Contains relevant series data for playoff series only - HomeTeamWins, AwayTeamWins, GameNumber,
 * and MaxLength
 */
export type Series2 = {
  /** Total number of wins by the home team in the series */
  homeTeamWins?: number;
  /** Total wins in the series by the away team */
  awayTeamWins?: number;
  /** The game number in the series */
  gameNumber?: number;
  /** The maximum number of games that can be played in a series */
  maxLength?: number;
};

export const series2Schema: Schema<Series2> = s.object<Series2>({
  homeTeamWins: s.optional(s.int()),
  awayTeamWins: s.optional(s.int()),
  gameNumber: s.optional(s.int()),
  maxLength: s.optional(s.int()),
  _keysMap: {
    homeTeamWins: "HomeTeamWins",
    awayTeamWins: "AwayTeamWins",
    gameNumber: "GameNumber",
    maxLength: "MaxLength",
  },
});
