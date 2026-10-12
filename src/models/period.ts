import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { penaltySchema, type Penalty } from "./penalty.js";
import { scoringPlay2Schema, type ScoringPlay2 } from "./scoring-play2.js";

export type Period = {
  /** The unique ID associated of this period */
  periodId?: number;
  /** The unique ID of this game tied to this period */
  gameId?: number;
  /** The name of the period (possible values: 1; 2; 3; SO; OT; OT2; OT3; OT4; etc) */
  name?: string | null;
  /** Total goals scored by the away team in a given period */
  awayScore?: number | null;
  /** Total goals scored by the home team in the period */
  homeScore?: number | null;
  /** The details of the scoring plays that occurred during this period */
  scoringPlays?: ScoringPlay2[];
  /** The details of the penalties that occurred during this period */
  penalties?: Penalty[];
};

export const periodSchema: Schema<Period> = s.object<Period>({
  periodId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.int()),
  homeScore: s.optionalNullable(s.int()),
  scoringPlays: s.optional(s.array(s.lazy(() => scoringPlay2Schema))),
  penalties: s.optional(s.array(s.lazy(() => penaltySchema))),
  _keysMap: {
    periodId: "PeriodID",
    gameId: "GameID",
    name: "Name",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
    scoringPlays: "ScoringPlays",
    penalties: "Penalties",
  },
});
