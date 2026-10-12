import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dfsSlateGame1Schema, type DfsSlateGame1 } from "./dfs-slate-game1.js";
import { dfsSlatePlayer1Schema, type DfsSlatePlayer1 } from "./dfs-slate-player1.js";

export type DfsSlate1 = {
  /** The unique ID of the slate as assigned by SportsDataIO */
  slateId?: number;
  /**
   * The name of the operator who is running contests for this slate. Possible values: FanDuel;
   * DraftKings; Yahoo; FantasyDraft; etc.
   */
  operator?: string | null;
  /** Unique ID of a slate (assigned by the operator). */
  operatorSlateId?: number | null;
  /**
   * The name of the slate (assigned by the operator). Possible values: Main, Express, Arcade, Late
   * Night, etc.
   */
  operatorName?: string | null;
  /** The day (in UTC) that the slate begins (assigned by the operator). */
  operatorDay?: string | null;
  /** The date/time (in UTC) that the slate begins (assigned by the operator). */
  operatorStartTime?: string | null;
  /** The number of actual games that this slate covers */
  numberOfGames?: number | null;
  /** Whether this slate uses games that take place on different days */
  isMultiDaySlate?: boolean | null;
  /** Indicates whether this slate was removed/deleted by the operator. */
  removedByOperator?: boolean | null;
  /** The game type of the slate. Will often be null as most operators only have one game type. */
  operatorGameType?: string | null;
  /** The games that are included in this slate */
  dfsSlateGames?: DfsSlateGame1[];
  /** The players that are included in this slate */
  dfsSlatePlayers?: DfsSlatePlayer1[];
  /** The positions that need to be filled for this particular slate */
  slateRosterSlots?: (string | null)[];
  /**
   * The salary cap for the current slate (is null for slates with no salary cap such a Tiers
   * gametypes)
   */
  salaryCap?: number | null;
  /** The Id of the competition related to this slate (Premier League, Champions League, etc.) */
  competitionId?: number | null;
};

export const dfsSlate1Schema: Schema<DfsSlate1> = s.object<DfsSlate1>({
  slateId: s.optional(s.int()),
  operator: s.optionalNullable(s.string()),
  operatorSlateId: s.optionalNullable(s.int()),
  operatorName: s.optionalNullable(s.string()),
  operatorDay: s.optionalNullable(s.string()),
  operatorStartTime: s.optionalNullable(s.string()),
  numberOfGames: s.optionalNullable(s.int()),
  isMultiDaySlate: s.optionalNullable(s.boolean()),
  removedByOperator: s.optionalNullable(s.boolean()),
  operatorGameType: s.optionalNullable(s.string()),
  dfsSlateGames: s.optional(s.array(s.lazy(() => dfsSlateGame1Schema))),
  dfsSlatePlayers: s.optional(s.array(s.lazy(() => dfsSlatePlayer1Schema))),
  slateRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  salaryCap: s.optionalNullable(s.int()),
  competitionId: s.optionalNullable(s.int()),
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
