import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayer = {
  slatePlayerId?: number;
  slateId?: number;
  slateGameId?: number | null;
  playerId?: number | null;
  playerGameProjectionStatId?: number | null;
  fantasyDefenseProjectionStatId?: number | null;
  operatorPlayerId?: string | null;
  operatorSlatePlayerId?: string | null;
  operatorPlayerName?: string | null;
  operatorPosition?: string | null;
  operatorRosterSlots?: (string | null)[];
  operatorSalary?: number | null;
  team?: string | null;
  teamId?: number | null;
  removedByOperator?: boolean | null;
};

export const dfsSlatePlayerSchema: Schema<DfsSlatePlayer> = s.object<DfsSlatePlayer>({
  slatePlayerId: s.optional(s.number()),
  slateId: s.optional(s.number()),
  slateGameId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  playerGameProjectionStatId: s.optionalNullable(s.number()),
  fantasyDefenseProjectionStatId: s.optionalNullable(s.number()),
  operatorPlayerId: s.optionalNullable(s.string()),
  operatorSlatePlayerId: s.optionalNullable(s.string()),
  operatorPlayerName: s.optionalNullable(s.string()),
  operatorPosition: s.optionalNullable(s.string()),
  operatorRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  operatorSalary: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
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
