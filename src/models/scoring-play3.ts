import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringPlay3 = {
  /** The unique id of the scoring play */
  scoringPlayId?: number;
  /** The unique ID of this game */
  gameId?: number;
  /** The period of the score */
  period?: string | null;
  /** Total number of minutes remaining in the quarter when the scoring play happened */
  timeRemainingMinutes?: number | null;
  /** Total number of seconds remaining in the quarter when the scoring play happened */
  timeRemainingSeconds?: number | null;
  /** The description of the play */
  description?: string | null;
  /** The summary of the drive in plays, yards and time elapsed */
  driveSummary?: string | null;
  /** The score of the home team after the play */
  homeTeamScore?: number | null;
  /** Total number of points of the away team after the play */
  awayTeamScore?: number | null;
  /** The ID of the team who scord on the play */
  scoringTeamId?: number | null;
  /**
   * The type of score on the play (ex. TD; FG; SF; D2P for Touchdown; Field Goal; Safety; Defensive
   * 2pt conversion respectively)
   */
  scoringType?: string | null;
  /** The order in which the scoring plays happened */
  sequence?: number;
};

export const scoringPlay3Schema: Schema<ScoringPlay3> = s.object<ScoringPlay3>({
  scoringPlayId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  description: s.optionalNullable(s.string()),
  driveSummary: s.optionalNullable(s.string()),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  scoringTeamId: s.optionalNullable(s.int()),
  scoringType: s.optionalNullable(s.string()),
  sequence: s.optional(s.int()),
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
