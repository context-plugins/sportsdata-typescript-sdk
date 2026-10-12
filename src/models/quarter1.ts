import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quarter1 = {
  /** Unique identifier for each Quarter. */
  quarterId?: number;
  /** The unique ID of the game associated with this quarter */
  gameId?: number;
  /** The Number (Order) of the Quarter in the scope of the Game. */
  number?: number;
  /** The Name of the Quarter (possible values: 1, 2, 3, 4, OT, OT2, OT3, etc) */
  name?: string | null;
  /** The total points scored by the away team in the given period only */
  awayScore?: number | null;
  /** The total points scored by the home team in the given period only */
  homeScore?: number | null;
};

export const quarter1Schema: Schema<Quarter1> = s.object<Quarter1>({
  quarterId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  number: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.int()),
  homeScore: s.optionalNullable(s.int()),
  _keysMap: {
    quarterId: "QuarterID",
    gameId: "GameID",
    number: "Number",
    name: "Name",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
  },
});
