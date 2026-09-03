import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dfsSlatePlayer2Schema, type DfsSlatePlayer2 } from "./dfs-slate-player2.js";
import { dfsSlateTournamentSchema, type DfsSlateTournament } from "./dfs-slate-tournament.js";

export type DfsSlate2 = {
  slateId?: number;
  operator?: string | null;
  operatorSlateId?: number | null;
  operatorName?: string | null;
  operatorDay?: string | null;
  operatorStartTime?: string | null;
  numberOfTournaments?: number | null;
  isMultiDaySlate?: boolean | null;
  removedByOperator?: boolean | null;
  operatorGameType?: string | null;
  dfsSlateTournaments?: DfsSlateTournament[];
  dfsSlatePlayers?: DfsSlatePlayer2[];
  slateRosterSlots?: (string | null)[];
};

export const dfsSlate2Schema: Schema<DfsSlate2> = s.object<DfsSlate2>({
  slateId: s.optional(s.number()),
  operator: s.optionalNullable(s.string()),
  operatorSlateId: s.optionalNullable(s.number()),
  operatorName: s.optionalNullable(s.string()),
  operatorDay: s.optionalNullable(s.string()),
  operatorStartTime: s.optionalNullable(s.string()),
  numberOfTournaments: s.optionalNullable(s.number()),
  isMultiDaySlate: s.optionalNullable(s.boolean()),
  removedByOperator: s.optionalNullable(s.boolean()),
  operatorGameType: s.optionalNullable(s.string()),
  dfsSlateTournaments: s.optional(s.array(s.lazy(() => dfsSlateTournamentSchema))),
  dfsSlatePlayers: s.optional(s.array(s.lazy(() => dfsSlatePlayer2Schema))),
  slateRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  _keysMap: {
    slateId: "SlateID",
    operator: "Operator",
    operatorSlateId: "OperatorSlateID",
    operatorName: "OperatorName",
    operatorDay: "OperatorDay",
    operatorStartTime: "OperatorStartTime",
    numberOfTournaments: "NumberOfTournaments",
    isMultiDaySlate: "IsMultiDaySlate",
    removedByOperator: "RemovedByOperator",
    operatorGameType: "OperatorGameType",
    dfsSlateTournaments: "DfsSlateTournaments",
    dfsSlatePlayers: "DfsSlatePlayers",
    slateRosterSlots: "SlateRosterSlots",
  },
});
