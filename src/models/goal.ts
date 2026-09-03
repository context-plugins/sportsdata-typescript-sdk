import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Goal = {
  goalId?: number;
  gameId?: number;
  teamId?: number;
  playerId?: number | null;
  name?: string | null;
  type?: string | null;
  assistedByPlayerId1?: number | null;
  assistedByPlayerName1?: string | null;
  assistedByPlayerId2?: number | null;
  assistedByPlayerName2?: string | null;
  gameMinute?: number | null;
  gameMinuteExtra?: number | null;
};

export const goalSchema: Schema<Goal> = s.object<Goal>({
  goalId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  assistedByPlayerId1: s.optionalNullable(s.number()),
  assistedByPlayerName1: s.optionalNullable(s.string()),
  assistedByPlayerId2: s.optionalNullable(s.number()),
  assistedByPlayerName2: s.optionalNullable(s.string()),
  gameMinute: s.optionalNullable(s.number()),
  gameMinuteExtra: s.optionalNullable(s.number()),
  _keysMap: {
    goalId: "GoalId",
    gameId: "GameId",
    teamId: "TeamId",
    playerId: "PlayerId",
    name: "Name",
    type: "Type",
    assistedByPlayerId1: "AssistedByPlayerId1",
    assistedByPlayerName1: "AssistedByPlayerName1",
    assistedByPlayerId2: "AssistedByPlayerId2",
    assistedByPlayerName2: "AssistedByPlayerName2",
    gameMinute: "GameMinute",
    gameMinuteExtra: "GameMinuteExtra",
  },
});
