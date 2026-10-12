import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Goal = {
  /** The unique ID of the goal */
  goalId?: number;
  /** The unique ID of the game tied to this goal */
  gameId?: number;
  /** The unique ID of the team associated with this goal */
  teamId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career.
   */
  playerId?: number | null;
  /** The full name of the player who scored the goal */
  name?: string | null;
  /** The type of goal scored */
  type?: string | null;
  /** The unique ID of the first assisted player */
  assistedByPlayerId1?: number | null;
  /** The player's name of the first assisted player */
  assistedByPlayerName1?: string | null;
  /** The unique ID of the second assisted player */
  assistedByPlayerId2?: number | null;
  /** The player's name of the second assisted player */
  assistedByPlayerName2?: string | null;
  /** The minute in the game in which the goal was scored */
  gameMinute?: number | null;
  /** The extra minute in the game in which the goal was scored */
  gameMinuteExtra?: number | null;
};

export const goalSchema: Schema<Goal> = s.object<Goal>({
  goalId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  assistedByPlayerId1: s.optionalNullable(s.int()),
  assistedByPlayerName1: s.optionalNullable(s.string()),
  assistedByPlayerId2: s.optionalNullable(s.int()),
  assistedByPlayerName2: s.optionalNullable(s.string()),
  gameMinute: s.optionalNullable(s.int()),
  gameMinuteExtra: s.optionalNullable(s.int()),
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
