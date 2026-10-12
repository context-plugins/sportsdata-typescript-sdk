import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringPlay2 = {
  /** The unique ID of the scoring play */
  scoringPlayId?: number;
  /** The unique ID associated of this period */
  periodId?: number;
  /** The sequence/order that this scoring play happened */
  sequence?: number | null;
  /**
   * Number of minutes that have passed in the current period. NOTE: this field name might be
   * misleading as it actually represents the game clock minutes which are the number of minutes
   * that have already passed in the period.
   */
  timeRemainingMinutes?: number | null;
  /**
   * Number of seconds that have passed in the current period. NOTE: this field name might be
   * misleading as it actually represents the game clock sconds which are the number of minutes that
   * have already passed in the period.
   */
  timeRemainingSeconds?: number | null;
  /** The TeamID of the team that scored the goal */
  scoredByTeamId?: number | null;
  /** The TeamID of the team that allowed the goal */
  allowedByTeamId?: number | null;
  /** The PlayerID of the player who scored the goal */
  scoredByPlayerId?: number | null;
  /** The PlayerID of the FIRST player who assisted on the goal */
  assistedByPlayerId1?: number | null;
  /** The PlayerID of the SECOND player who assisted on the goal */
  assistedByPlayerId2?: number | null;
  /** Whether or not the goal was scored on the power play */
  powerPlay?: boolean | null;
  /** Whether the goal was scored shorthanded */
  shortHanded?: boolean | null;
  /** Whether the goal was an empty net goal or not */
  emptyNet?: boolean | null;
  /** The score of the away team after the conclusion of the scoring play */
  awayTeamScore?: number | null;
  /** The score of the home team after the conclusion of the scoring play */
  homeTeamScore?: number | null;
};

export const scoringPlay2Schema: Schema<ScoringPlay2> = s.object<ScoringPlay2>({
  scoringPlayId: s.optional(s.int()),
  periodId: s.optional(s.int()),
  sequence: s.optionalNullable(s.int()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  scoredByTeamId: s.optionalNullable(s.int()),
  allowedByTeamId: s.optionalNullable(s.int()),
  scoredByPlayerId: s.optionalNullable(s.int()),
  assistedByPlayerId1: s.optionalNullable(s.int()),
  assistedByPlayerId2: s.optionalNullable(s.int()),
  powerPlay: s.optionalNullable(s.boolean()),
  shortHanded: s.optionalNullable(s.boolean()),
  emptyNet: s.optionalNullable(s.boolean()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  _keysMap: {
    scoringPlayId: "ScoringPlayID",
    periodId: "PeriodID",
    sequence: "Sequence",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    scoredByTeamId: "ScoredByTeamID",
    allowedByTeamId: "AllowedByTeamID",
    scoredByPlayerId: "ScoredByPlayerID",
    assistedByPlayerId1: "AssistedByPlayerID1",
    assistedByPlayerId2: "AssistedByPlayerID2",
    powerPlay: "PowerPlay",
    shortHanded: "ShortHanded",
    emptyNet: "EmptyNet",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
  },
});
