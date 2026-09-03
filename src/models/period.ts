import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { penaltySchema, type Penalty } from "./penalty.js";
import { scoringPlay2Schema, type ScoringPlay2 } from "./scoring-play2.js";

export type Period = {
  periodId?: number;
  gameId?: number;
  name?: string | null;
  awayScore?: number | null;
  homeScore?: number | null;
  scoringPlays?: ScoringPlay2[];
  penalties?: Penalty[];
};

export const periodSchema: Schema<Period> = s.object<Period>({
  periodId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.number()),
  homeScore: s.optionalNullable(s.number()),
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
