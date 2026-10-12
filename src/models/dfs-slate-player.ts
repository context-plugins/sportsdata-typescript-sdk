import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayer = {
  /** Unique ID of a SlatePlayer (assigned by SportsDataIO) */
  slatePlayerId?: number;
  /** Unique ID of a Slate (assigned by SportsDataIO) */
  slateId?: number;
  /** Unique ID of a SlateGame (assigned by SportsDataIO) */
  slateGameId?: number | null;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO tied to this SlatePlayer. This
   * points to data in the respective sports' player feeds Note: this ID will stay with the player
   * throughout their entire career
   */
  playerId?: number | null;
  /**
   * The SportsDataIO StatID that this SlatePlayer refers to. This points to data in the respective
   * sports' projected player game stats feeds. This field is only filled for Players. For the NFL
   * feeds; this is the PlayerGameProjection.PlayerGameID
   */
  playerGameProjectionStatId?: number | null;
  /**
   * The SportsDataIO StatID that this SlatePlayer refers to. This field is only filled for
   * Defense/Special Teams. For the NFL feeds, this is the
   * FantasyDefenseGameProjection.FantasyDefenseID.
   */
  fantasyDefenseProjectionStatId?: number | null;
  /** Unique ID of the Player (assigned by the operator) */
  operatorPlayerId?: string | null;
  /** Unique ID of the SlatePlayer (assigned by the operator) */
  operatorSlatePlayerId?: string | null;
  /** The player's name (assigned by the operator) */
  operatorPlayerName?: string | null;
  /** The player's eligible positions (assigned by the operator) */
  operatorPosition?: string | null;
  /**
   * The player's eligible positions to be played in the contest (assigned by the operator). Note:
   * This would include FLEX; etc plays for those that are eligible
   */
  operatorRosterSlots?: (string | null)[];
  /** The player's salary for the contest (assigned by the operator). */
  operatorSalary?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /**
   * The unique ID of the team that the player is on. Note: If the player is a free agent; this
   * field is NULL
   */
  teamId?: number | null;
  /** Indicates whether this player was removed/deleted by the operator. */
  removedByOperator?: boolean | null;
};

export const dfsSlatePlayerSchema: Schema<DfsSlatePlayer> = s.object<DfsSlatePlayer>({
  slatePlayerId: s.optional(s.int()),
  slateId: s.optional(s.int()),
  slateGameId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  playerGameProjectionStatId: s.optionalNullable(s.int()),
  fantasyDefenseProjectionStatId: s.optionalNullable(s.int()),
  operatorPlayerId: s.optionalNullable(s.string()),
  operatorSlatePlayerId: s.optionalNullable(s.string()),
  operatorPlayerName: s.optionalNullable(s.string()),
  operatorPosition: s.optionalNullable(s.string()),
  operatorRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  operatorSalary: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  removedByOperator: s.optionalNullable(s.boolean()),
  _keysMap: {
    slatePlayerId: "SlatePlayerID",
    slateId: "SlateID",
    slateGameId: "SlateGameID",
    playerId: "PlayerID",
    playerGameProjectionStatId: "PlayerGameProjectionStatID",
    fantasyDefenseProjectionStatId: "FantasyDefenseProjectionStatID",
    operatorPlayerId: "OperatorPlayerID",
    operatorSlatePlayerId: "OperatorSlatePlayerID",
    operatorPlayerName: "OperatorPlayerName",
    operatorPosition: "OperatorPosition",
    operatorRosterSlots: "OperatorRosterSlots",
    operatorSalary: "OperatorSalary",
    team: "Team",
    teamId: "TeamID",
    removedByOperator: "RemovedByOperator",
  },
});
