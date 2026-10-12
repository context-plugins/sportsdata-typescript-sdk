import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayer2 = {
  /** Unique ID of a SlatePlayer (assigned by SportsDataIO). */
  slatePlayerId?: number;
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /** The unique ID of a SlateTournament (assigned by SportsDataIO). */
  slateTournamentId?: number | null;
  /** The unique SportsDataIO ID of the golfer that this slate refers to */
  playerId?: number | null;
  /**
   * The unique ID for the player tournament projection that this SlatePlayer refers to. Note: This
   * points to data in the respective sports' projected player game stats feeds.
   */
  playerTournamentProjectionId?: number | null;
  /** The unique ID of the golfer as assigned by the operator */
  operatorPlayerId?: string | null;
  /** The unique ID of the SlatePlayer as assigned by the operator */
  operatorSlatePlayerId?: string | null;
  /** The golfer's name as assigned by the operator */
  operatorPlayerName?: string | null;
  /** The golfer's eligible positions for the contest as assigned by the operator */
  operatorPosition?: string | null;
  /** The golfer's salary for the contest as assigned by the operator */
  operatorSalary?: number | null;
  /**
   * The golfer's eligible positions for the contest as assigned by the operator; This would include
   * UTIL, etc. plays for those that are eligible
   */
  operatorRosterSlots?: (string | null)[];
  /** Indicates whether this player was removed/deleted by the operator */
  removedByOperator?: boolean | null;
};

export const dfsSlatePlayer2Schema: Schema<DfsSlatePlayer2> = s.object<DfsSlatePlayer2>({
  slatePlayerId: s.optional(s.int()),
  slateId: s.optional(s.int()),
  slateTournamentId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  playerTournamentProjectionId: s.optionalNullable(s.int()),
  operatorPlayerId: s.optionalNullable(s.string()),
  operatorSlatePlayerId: s.optionalNullable(s.string()),
  operatorPlayerName: s.optionalNullable(s.string()),
  operatorPosition: s.optionalNullable(s.string()),
  operatorSalary: s.optionalNullable(s.int()),
  operatorRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  removedByOperator: s.optionalNullable(s.boolean()),
  _keysMap: {
    slatePlayerId: "SlatePlayerID",
    slateId: "SlateID",
    slateTournamentId: "SlateTournamentID",
    playerId: "PlayerID",
    playerTournamentProjectionId: "PlayerTournamentProjectionID",
    operatorPlayerId: "OperatorPlayerID",
    operatorSlatePlayerId: "OperatorSlatePlayerID",
    operatorPlayerName: "OperatorPlayerName",
    operatorPosition: "OperatorPosition",
    operatorSalary: "OperatorSalary",
    operatorRosterSlots: "OperatorRosterSlots",
    removedByOperator: "RemovedByOperator",
  },
});
