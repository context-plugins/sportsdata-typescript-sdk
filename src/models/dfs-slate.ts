import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dfsSlateGameSchema, type DfsSlateGame } from "./dfs-slate-game.js";
import { dfsSlatePlayerSchema, type DfsSlatePlayer } from "./dfs-slate-player.js";

export type DfsSlate = {
  slateId?: number;
  operator?: string | null;
  operatorSlateId?: number | null;
  operatorName?: string | null;
  operatorDay?: string | null;
  operatorStartTime?: string | null;
  numberOfGames?: number | null;
  isMultiDaySlate?: boolean | null;
  removedByOperator?: boolean | null;
  operatorGameType?: string | null;
  dfsSlateGames?: DfsSlateGame[];
  dfsSlatePlayers?: DfsSlatePlayer[];
  slateRosterSlots?: (string | null)[];
  salaryCap?: number | null;
};

export const dfsSlateSchema: Schema<DfsSlate> = s.object<DfsSlate>({
  slateId: s.optional(s.number()),
  operator: s.optionalNullable(s.string()),
  operatorSlateId: s.optionalNullable(s.number()),
  operatorName: s.optionalNullable(s.string()),
  operatorDay: s.optionalNullable(s.string()),
  operatorStartTime: s.optionalNullable(s.string()),
  numberOfGames: s.optionalNullable(s.number()),
  isMultiDaySlate: s.optionalNullable(s.boolean()),
  removedByOperator: s.optionalNullable(s.boolean()),
  operatorGameType: s.optionalNullable(s.string()),
  dfsSlateGames: s.optional(s.array(s.lazy(() => dfsSlateGameSchema))),
  dfsSlatePlayers: s.optional(s.array(s.lazy(() => dfsSlatePlayerSchema))),
  slateRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  salaryCap: s.optionalNullable(s.number()),
  _keysMap: {
    slateId: "SlateID",
    operator: "Operator",
    operatorSlateId: "OperatorSlateID",
    operatorName: "OperatorName",
    operatorDay: "OperatorDay",
    operatorStartTime: "OperatorStartTime",
    numberOfGames: "NumberOfGames",
    isMultiDaySlate: "IsMultiDaySlate",
    removedByOperator: "RemovedByOperator",
    operatorGameType: "OperatorGameType",
    dfsSlateGames: "DfsSlateGames",
    dfsSlatePlayers: "DfsSlatePlayers",
    slateRosterSlots: "SlateRosterSlots",
    salaryCap: "SalaryCap",
  },
});
