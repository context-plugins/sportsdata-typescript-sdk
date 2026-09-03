import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing4 = {
  standingId?: number;
  roundId?: number;
  teamId?: number;
  name?: string | null;
  shortName?: string | null;
  scope?: string | null;
  order?: number | null;
  games?: number | null;
  wins?: number | null;
  losses?: number | null;
  draws?: number | null;
  goalsScored?: number | null;
  goalsAgainst?: number | null;
  goalsDifferential?: number | null;
  points?: number | null;
  group?: string | null;
  globalTeamId?: number | null;
};

export const standing4Schema: Schema<Standing4> = s.object<Standing4>({
  standingId: s.optional(s.number()),
  roundId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  scope: s.optionalNullable(s.string()),
  order: s.optionalNullable(s.number()),
  games: s.optionalNullable(s.number()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  draws: s.optionalNullable(s.number()),
  goalsScored: s.optionalNullable(s.number()),
  goalsAgainst: s.optionalNullable(s.number()),
  goalsDifferential: s.optionalNullable(s.number()),
  points: s.optionalNullable(s.number()),
  group: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
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
