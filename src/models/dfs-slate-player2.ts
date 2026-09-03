import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayer2 = {
  slatePlayerId?: number;
  slateId?: number;
  slateTournamentId?: number | null;
  playerId?: number | null;
  playerTournamentProjectionId?: number | null;
  operatorPlayerId?: string | null;
  operatorSlatePlayerId?: string | null;
  operatorPlayerName?: string | null;
  operatorPosition?: string | null;
  operatorSalary?: number | null;
  operatorRosterSlots?: (string | null)[];
  removedByOperator?: boolean | null;
};

export const dfsSlatePlayer2Schema: Schema<DfsSlatePlayer2> = s.object<DfsSlatePlayer2>({
  slatePlayerId: s.optional(s.number()),
  slateId: s.optional(s.number()),
  slateTournamentId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  playerTournamentProjectionId: s.optionalNullable(s.number()),
  operatorPlayerId: s.optionalNullable(s.string()),
  operatorSlatePlayerId: s.optionalNullable(s.string()),
  operatorPlayerName: s.optionalNullable(s.string()),
  operatorPosition: s.optionalNullable(s.string()),
  operatorSalary: s.optionalNullable(s.number()),
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
