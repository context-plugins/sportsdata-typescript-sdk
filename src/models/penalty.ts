import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Penalty = {
  penaltyId?: number;
  periodId?: number;
  sequence?: number | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  description?: string | null;
  penaltyMinutes?: number | null;
  penalizedTeamId?: number | null;
  penalizedPlayerId?: number | null;
  drawnByTeamId?: number | null;
  drawnByPlayerId?: number | null;
  isBenchPenalty?: boolean | null;
  benchPenaltyServedByPlayerId?: number | null;
};

export const penaltySchema: Schema<Penalty> = s.object<Penalty>({
  penaltyId: s.optional(s.number()),
  periodId: s.optional(s.number()),
  sequence: s.optionalNullable(s.number()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  description: s.optionalNullable(s.string()),
  penaltyMinutes: s.optionalNullable(s.number()),
  penalizedTeamId: s.optionalNullable(s.number()),
  penalizedPlayerId: s.optionalNullable(s.number()),
  drawnByTeamId: s.optionalNullable(s.number()),
  drawnByPlayerId: s.optionalNullable(s.number()),
  isBenchPenalty: s.optionalNullable(s.boolean()),
  benchPenaltyServedByPlayerId: s.optionalNullable(s.number()),
  _keysMap: {
    penaltyId: "PenaltyID",
    periodId: "PeriodID",
    sequence: "Sequence",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    description: "Description",
    penaltyMinutes: "PenaltyMinutes",
    penalizedTeamId: "PenalizedTeamID",
    penalizedPlayerId: "PenalizedPlayerID",
    drawnByTeamId: "DrawnByTeamID",
    drawnByPlayerId: "DrawnByPlayerID",
    isBenchPenalty: "IsBenchPenalty",
    benchPenaltyServedByPlayerId: "BenchPenaltyServedByPlayerID",
  },
});
