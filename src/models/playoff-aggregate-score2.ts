import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayoffAggregateScore2 = {
  teamAId?: number;
  teamAAggregateScore?: number;
  teamBId?: number;
  teamBAggregateScore?: number;
  winningTeamId?: number;
  created?: string | null;
  updated?: string | null;
};

export const playoffAggregateScore2Schema: Schema<PlayoffAggregateScore2> = s.object<PlayoffAggregateScore2>({
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
