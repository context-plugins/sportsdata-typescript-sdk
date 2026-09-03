import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayer1 = {
  slatePlayerId?: number;
  slateId?: number;
  slateGameId?: number | null;
  playerId?: number | null;
  playerGameProjectionStatId?: number | null;
  operatorPlayerId?: string | null;
  operatorSlatePlayerId?: string | null;
  operatorPlayerName?: string | null;
  operatorPosition?: string | null;
  operatorSalary?: number | null;
  operatorRosterSlots?: (string | null)[];
  removedByOperator?: boolean | null;
  team?: string | null;
  teamId?: number | null;
};

export const dfsSlatePlayer1Schema: Schema<DfsSlatePlayer1> = s.object<DfsSlatePlayer1>({
  slatePlayerId: s.optional(s.number()),
  slateId: s.optional(s.number()),
  slateGameId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  playerGameProjectionStatId: s.optionalNullable(s.number()),
  operatorPlayerId: s.optionalNullable(s.string()),
  operatorSlatePlayerId: s.optionalNullable(s.string()),
  operatorPlayerName: s.optionalNullable(s.string()),
  operatorPosition: s.optionalNullable(s.string()),
  operatorSalary: s.optionalNullable(s.number()),
  operatorRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  removedByOperator: s.optionalNullable(s.boolean()),
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
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
