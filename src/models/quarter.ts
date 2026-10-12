import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quarter = {
  /** The unique ID of the quarter */
  quarterId?: number;
  /** The unique ID of the score this quarter belongs to */
  scoreId?: number;
  /** The Number (Order) of the Quarter in the scope of the Game. */
  number?: number;
  /** The Name of the Quarter (possible values: 1, 2, 3, 4, OT, OT2, OT3, etc) */
  name?: string | null;
  /** The long description of the quarter */
  description?: string | null;
  /** The total points scored by the away team in this Quarter. */
  awayTeamScore?: number | null;
  /** The total points scored by the home team in this Quarter. */
  homeTeamScore?: number | null;
  /** The database generated timestamp of when this Quarter was last updated (in US Eastern time) */
  updated?: string | null;
  /**
   * The database generated timestamp of when this Quarter was first created (in US Eastern Time)
   */
  created?: string | null;
};

export const quarterSchema: Schema<Quarter> = s.object<Quarter>({
  quarterId: s.optional(s.int()),
  scoreId: s.optional(s.int()),
  number: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  _keysMap: {
    quarterId: "QuarterID",
    scoreId: "ScoreID",
    number: "Number",
    name: "Name",
    description: "Description",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    created: "Created",
  },
});
