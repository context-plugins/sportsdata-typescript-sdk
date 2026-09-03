import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayoffAggregateScore = {
  teamAId?: number;
  teamAAggregateScore?: number;
  teamBId?: number;
  teamBAggregateScore?: number;
  winningTeamId?: number;
  created?: string | null;
  updated?: string | null;
};

export const playoffAggregateScoreSchema: Schema<PlayoffAggregateScore> = s.object<PlayoffAggregateScore>({
  teamAId: s.optional(s.number()),
  teamAAggregateScore: s.optional(s.number()),
  teamBId: s.optional(s.number()),
  teamBAggregateScore: s.optional(s.number()),
  winningTeamId: s.optional(s.number()),
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
