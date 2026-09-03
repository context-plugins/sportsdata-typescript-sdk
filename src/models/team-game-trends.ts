import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamGameTrends = {
  scope?: string | null;
  teamId?: number;
  team?: string | null;
  opponentId?: number | null;
  opponent?: string | null;
  wins?: number;
  losses?: number;
  ties?: number;
  winsAgainstTheSpread?: number | null;
  lossesAgainstTheSpread?: number | null;
  pushesAgainstTheSpread?: number | null;
  overs?: number | null;
  unders?: number | null;
  overUnderPushes?: number | null;
  averageScore?: number | null;
  averageOpponentScore?: number | null;
};

export const teamGameTrendsSchema: Schema<TeamGameTrends> = s.object<TeamGameTrends>({
  scope: s.optionalNullable(s.string()),
  teamId: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  opponentId: s.optionalNullable(s.number()),
  opponent: s.optionalNullable(s.string()),
  wins: s.optional(s.number()),
  losses: s.optional(s.number()),
  ties: s.optional(s.number()),
  winsAgainstTheSpread: s.optionalNullable(s.number()),
  lossesAgainstTheSpread: s.optionalNullable(s.number()),
  pushesAgainstTheSpread: s.optionalNullable(s.number()),
  overs: s.optionalNullable(s.number()),
  unders: s.optionalNullable(s.number()),
  overUnderPushes: s.optionalNullable(s.number()),
  averageScore: s.optionalNullable(s.number()),
  averageOpponentScore: s.optionalNullable(s.number()),
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
