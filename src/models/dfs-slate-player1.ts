import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayer1 = {
  /** Unique ID of a SlatePlayer (assigned by SportsDataIO). */
  slatePlayerId?: number;
  /** The SlateID that this SlatePlayer refers to. */
  slateId?: number;
  /** The SlateGameID that this SlatePlayer refers to. */
  slateGameId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /**
   * The SportsDataIO StatID that this SlatePlayer refers to. This points to data in the respective
   * sports' projected player game stats feeds.
   */
  playerGameProjectionStatId?: number | null;
  /** Unique ID of the Player (assigned by the operator). */
  operatorPlayerId?: string | null;
  /** Unique ID of the SlatePlayer (assigned by the operator). */
  operatorSlatePlayerId?: string | null;
  /** The player's name (assigned by the operator). */
  operatorPlayerName?: string | null;
  /** The player's eligible positions for the contest (assigned by the operator). */
  operatorPosition?: string | null;
  /** The player's salary for the contest (assigned by the operator). */
  operatorSalary?: number | null;
  /**
   * The player's eligible positions to be played in the contest (assigned by the operator). This
   * would include UTIL, etc plays for those that are eligible.
   */
  operatorRosterSlots?: (string | null)[];
  /** Indicates whether this player was removed/deleted by the operator. */
  removedByOperator?: boolean | null;
  /** The abbreviation [Key] of the player's team */
  team?: string | null;
  /** The unique ID of the player's team */
  teamId?: number | null;
};

export const dfsSlatePlayer1Schema: Schema<DfsSlatePlayer1> = s.object<DfsSlatePlayer1>({
  slatePlayerId: s.optional(s.int()),
  slateId: s.optional(s.int()),
  slateGameId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  playerGameProjectionStatId: s.optionalNullable(s.int()),
  operatorPlayerId: s.optionalNullable(s.string()),
  operatorSlatePlayerId: s.optionalNullable(s.string()),
  operatorPlayerName: s.optionalNullable(s.string()),
  operatorPosition: s.optionalNullable(s.string()),
  operatorSalary: s.optionalNullable(s.int()),
  operatorRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  removedByOperator: s.optionalNullable(s.boolean()),
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  _keysMap: {
    slatePlayerId: "SlatePlayerID",
    slateId: "SlateID",
    slateGameId: "SlateGameID",
    playerId: "PlayerID",
    playerGameProjectionStatId: "PlayerGameProjectionStatID",
    operatorPlayerId: "OperatorPlayerID",
    operatorSlatePlayerId: "OperatorSlatePlayerID",
    operatorPlayerName: "OperatorPlayerName",
    operatorPosition: "OperatorPosition",
    operatorSalary: "OperatorSalary",
    operatorRosterSlots: "OperatorRosterSlots",
    removedByOperator: "RemovedByOperator",
    team: "Team",
    teamId: "TeamID",
  },
});
