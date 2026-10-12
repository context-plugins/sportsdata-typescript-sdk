import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing4 = {
  /** The unique ID of the standing */
  standingId?: number;
  /** The unique ID of the round that this team is associated with */
  roundId?: number;
  /** The unique ID of the team */
  teamId?: number;
  /** The team's full name */
  name?: string | null;
  /** The short name of the team */
  shortName?: string | null;
  /** The scope of the standing (possible values: Total, Away, Home) */
  scope?: string | null;
  /** The order of the teams in the standing (e.g 1; 2; 3; 4; etc.) */
  order?: number | null;
  /** Total number of games played by the team in the season */
  games?: number | null;
  /** Number of wins by the team in the season */
  wins?: number | null;
  /** The number of losses for the team */
  losses?: number | null;
  /** Number of draws by the team in the season */
  draws?: number | null;
  /** Total number of goals scored by the team in the season */
  goalsScored?: number | null;
  /** Total number of goals against by the team in the season */
  goalsAgainst?: number | null;
  /**
   * The goal differential of the team in the season. Note: GoalDifferential = GoalsScored -
   * GoalsAgainst
   */
  goalsDifferential?: number | null;
  /** Total points accumulated by the team */
  points?: number | null;
  /** The name of the group (when applicable) */
  group?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
};

export const standing4Schema: Schema<Standing4> = s.object<Standing4>({
  standingId: s.optional(s.int()),
  roundId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  scope: s.optionalNullable(s.string()),
  order: s.optionalNullable(s.int()),
  games: s.optionalNullable(s.int()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  draws: s.optionalNullable(s.int()),
  goalsScored: s.optionalNullable(s.int()),
  goalsAgainst: s.optionalNullable(s.int()),
  goalsDifferential: s.optionalNullable(s.int()),
  points: s.optionalNullable(s.int()),
  group: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  _keysMap: {
    standingId: "StandingId",
    roundId: "RoundId",
    teamId: "TeamId",
    name: "Name",
    shortName: "ShortName",
    scope: "Scope",
    order: "Order",
    games: "Games",
    wins: "Wins",
    losses: "Losses",
    draws: "Draws",
    goalsScored: "GoalsScored",
    goalsAgainst: "GoalsAgainst",
    goalsDifferential: "GoalsDifferential",
    points: "Points",
    group: "Group",
    globalTeamId: "GlobalTeamID",
  },
});
