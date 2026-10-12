import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Penalty = {
  /** The unique ID of this penalty */
  penaltyId?: number;
  /** The unique ID of the period during which this penalty occurred */
  periodId?: number;
  /** The sequence/order that this penalty happened */
  sequence?: number | null;
  /**
   * Number of minutes that have passed in the current period. NOTE: this field name might be
   * misleading as it actually represents the game clock minutes which are the number of minutes
   * that have already passed in the period.
   */
  timeRemainingMinutes?: number | null;
  /**
   * Number of seconds that have passed in the current period. NOTE: this field name might be
   * misleading as it actually represents the game clock seconds which are the number of minutes
   * that have already passed in the period.
   */
  timeRemainingSeconds?: number | null;
  /** The description of the penalty */
  description?: string | null;
  /** Total minutes the penalty lasts */
  penaltyMinutes?: number | null;
  /** The TeamID of the team who committed the penalty */
  penalizedTeamId?: number | null;
  /** The PlayerID of the player who committed the penalty */
  penalizedPlayerId?: number | null;
  /** The TeamID of the player/team that drew the penalty */
  drawnByTeamId?: number | null;
  /** The PlayerID of the player who drew the penalty */
  drawnByPlayerId?: number | null;
  /** Whether or not the penalty is a bench penalty */
  isBenchPenalty?: boolean | null;
  /** The PlayerID of the player who served the bench penalty */
  benchPenaltyServedByPlayerId?: number | null;
};

export const penaltySchema: Schema<Penalty> = s.object<Penalty>({
  penaltyId: s.optional(s.int()),
  periodId: s.optional(s.int()),
  sequence: s.optionalNullable(s.int()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  description: s.optionalNullable(s.string()),
  penaltyMinutes: s.optionalNullable(s.int()),
  penalizedTeamId: s.optionalNullable(s.int()),
  penalizedPlayerId: s.optionalNullable(s.int()),
  drawnByTeamId: s.optionalNullable(s.int()),
  drawnByPlayerId: s.optionalNullable(s.int()),
  isBenchPenalty: s.optionalNullable(s.boolean()),
  benchPenaltyServedByPlayerId: s.optionalNullable(s.int()),
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
