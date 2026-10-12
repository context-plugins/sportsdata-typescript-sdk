import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamGameTrends = {
  /** The type of Trend (e.g. Last 5 games, Last 10 games, Last 5 home games, etc.) */
  scope?: string | null;
  /** The unique ID of the team */
  teamId?: number;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The unique ID of the opponent team */
  opponentId?: number | null;
  /** The abbreviation [Key] of the opponent team */
  opponent?: string | null;
  /**
   * Total number of wins relating to the scope. Examples of scopes include: Last 3 Games, Last 5
   * Home Games, Last 10 Games as Favorite, etc.
   */
  wins?: number;
  /**
   * Losses relating to the scope. Examples of scopes include: Last 3 Games, Last 5 Home Games, Last
   * 10 Games as Favorite, etc.
   */
  losses?: number;
  /**
   * Total ties by the team relating to the scope. Examples of scopes include: Last 3 Games, Last 5
   * Home Games, Last 10 Games as Favorite, etc.
   */
  ties?: number;
  /**
   * Total number of wins against the spread relating to the scope. Examples of scopes include: Last
   * 3 Games, Last 5 Home Games, Last 10 Games as Favorite, etc.
   */
  winsAgainstTheSpread?: number | null;
  /**
   * Losses against the spread relating to the scope. Examples of scopes include: Last 3 Games, Last
   * 5 Home Games, Last 10 Games as Favorite, etc.
   */
  lossesAgainstTheSpread?: number | null;
  /**
   * Pushes against the spread relating to the scope. Examples of scopes include: Last 3 Games, Last
   * 5 Home Games, Last 10 Games as Favorite, etc.
   */
  pushesAgainstTheSpread?: number | null;
  /** Amount of times the total score goes over the total points line (over/under) */
  overs?: number | null;
  /** Amount of times the total score goes under the total points line (over/under) */
  unders?: number | null;
  /** Amount of times the total score pushes the total point line (over/under) */
  overUnderPushes?: number | null;
  /** Average score of team */
  averageScore?: number | null;
  /** Average score of opponent */
  averageOpponentScore?: number | null;
};

export const teamGameTrendsSchema: Schema<TeamGameTrends> = s.object<TeamGameTrends>({
  scope: s.optionalNullable(s.string()),
  teamId: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  opponentId: s.optionalNullable(s.int()),
  opponent: s.optionalNullable(s.string()),
  wins: s.optional(s.int()),
  losses: s.optional(s.int()),
  ties: s.optional(s.int()),
  winsAgainstTheSpread: s.optionalNullable(s.int()),
  lossesAgainstTheSpread: s.optionalNullable(s.int()),
  pushesAgainstTheSpread: s.optionalNullable(s.int()),
  overs: s.optionalNullable(s.int()),
  unders: s.optionalNullable(s.int()),
  overUnderPushes: s.optionalNullable(s.int()),
  averageScore: s.optionalNullable(s.float64()),
  averageOpponentScore: s.optionalNullable(s.float64()),
  _keysMap: {
    scope: "Scope",
    teamId: "TeamID",
    team: "Team",
    opponentId: "OpponentID",
    opponent: "Opponent",
    wins: "Wins",
    losses: "Losses",
    ties: "Ties",
    winsAgainstTheSpread: "WinsAgainstTheSpread",
    lossesAgainstTheSpread: "LossesAgainstTheSpread",
    pushesAgainstTheSpread: "PushesAgainstTheSpread",
    overs: "Overs",
    unders: "Unders",
    overUnderPushes: "OverUnderPushes",
    averageScore: "AverageScore",
    averageOpponentScore: "AverageOpponentScore",
  },
});
