import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayoffAggregateScore = {
  /**
   * The TeamID of Team A. Note: Team A is determined by the home team in the first leg, and remains
   * set through the life of the record
   */
  teamAId?: number;
  /**
   * The score, on aggregate, of Team A in the matchup. Note: Team A is determined by the home team
   * in the first leg, and remains set through the life of the record
   */
  teamAAggregateScore?: number;
  /**
   * The TeamID of Team B. Note: Team B is determined by the away team in the first leg, and remains
   * set through the life of the record
   */
  teamBId?: number;
  /**
   * The score, on aggregate, of Team B in the matchup. Note: Team B is determined by the away team
   * in the first leg, and remains set through the life of the record
   */
  teamBAggregateScore?: number;
  /** The ID of the team that wins the home-and-home matchup */
  winningTeamId?: number;
  /** Date and time the record was created (in US Eastern Time) */
  created?: string | null;
  /** The timestamp of when the record was last updated (in US Eastern Time) */
  updated?: string | null;
};

export const playoffAggregateScoreSchema: Schema<PlayoffAggregateScore> = s.object<PlayoffAggregateScore>({
  teamAId: s.optional(s.int()),
  teamAAggregateScore: s.optional(s.int()),
  teamBId: s.optional(s.int()),
  teamBAggregateScore: s.optional(s.int()),
  winningTeamId: s.optional(s.int()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    teamAId: "TeamA_Id",
    teamAAggregateScore: "TeamA_AggregateScore",
    teamBId: "TeamB_Id",
    teamBAggregateScore: "TeamB_AggregateScore",
    winningTeamId: "WinningTeamId",
    created: "Created",
    updated: "Updated",
  },
});
