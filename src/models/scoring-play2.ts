import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringPlay2 = {
  scoringPlayId?: number;
  periodId?: number;
  sequence?: number | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  scoredByTeamId?: number | null;
  allowedByTeamId?: number | null;
  scoredByPlayerId?: number | null;
  assistedByPlayerId1?: number | null;
  assistedByPlayerId2?: number | null;
  powerPlay?: boolean | null;
  shortHanded?: boolean | null;
  emptyNet?: boolean | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
};

export const scoringPlay2Schema: Schema<ScoringPlay2> = s.object<ScoringPlay2>({
  scoringPlayId: s.optional(s.number()),
  periodId: s.optional(s.number()),
  sequence: s.optionalNullable(s.number()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  scoredByTeamId: s.optionalNullable(s.number()),
  allowedByTeamId: s.optionalNullable(s.number()),
  scoredByPlayerId: s.optionalNullable(s.number()),
  assistedByPlayerId1: s.optionalNullable(s.number()),
  assistedByPlayerId2: s.optionalNullable(s.number()),
  powerPlay: s.optionalNullable(s.boolean()),
  shortHanded: s.optionalNullable(s.boolean()),
  emptyNet: s.optionalNullable(s.boolean()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
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
