import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringPlay3 = {
  scoringPlayId?: number;
  gameId?: number;
  period?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  description?: string | null;
  driveSummary?: string | null;
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
  scoringTeamId?: number | null;
  scoringType?: string | null;
  sequence?: number;
};

export const scoringPlay3Schema: Schema<ScoringPlay3> = s.object<ScoringPlay3>({
  scoringPlayId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  description: s.optionalNullable(s.string()),
  driveSummary: s.optionalNullable(s.string()),
  homeTeamScore: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  scoringTeamId: s.optionalNullable(s.number()),
  scoringType: s.optionalNullable(s.string()),
  sequence: s.optional(s.number()),
  _keysMap: {
    scoringPlayId: "ScoringPlayID",
    gameId: "GameID",
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    description: "Description",
    driveSummary: "DriveSummary",
    homeTeamScore: "HomeTeamScore",
    awayTeamScore: "AwayTeamScore",
    scoringTeamId: "ScoringTeamID",
    scoringType: "ScoringType",
    sequence: "Sequence",
  },
});
