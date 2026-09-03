import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dfsSlateGame1Schema, type DfsSlateGame1 } from "./dfs-slate-game1.js";
import { dfsSlatePlayer1Schema, type DfsSlatePlayer1 } from "./dfs-slate-player1.js";

export type DfsSlate1 = {
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
  dfsSlateGames?: DfsSlateGame1[];
  dfsSlatePlayers?: DfsSlatePlayer1[];
  slateRosterSlots?: (string | null)[];
  salaryCap?: number | null;
  competitionId?: number | null;
};

export const dfsSlate1Schema: Schema<DfsSlate1> = s.object<DfsSlate1>({
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
  dfsSlateGames: s.optional(s.array(s.lazy(() => dfsSlateGame1Schema))),
  dfsSlatePlayers: s.optional(s.array(s.lazy(() => dfsSlatePlayer1Schema))),
  slateRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  salaryCap: s.optionalNullable(s.number()),
  competitionId: s.optionalNullable(s.number()),
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
    competitionId: "CompetitionId",
  },
});
