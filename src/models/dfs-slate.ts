import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dfsSlateGameSchema, type DfsSlateGame } from "./dfs-slate-game.js";
import { dfsSlatePlayerSchema, type DfsSlatePlayer } from "./dfs-slate-player.js";

export type DfsSlate = {
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /**
   * The name of the operator who is running contests for this slate. Possible values: FanDuel,
   * DraftKings, Yahoo, FantasyDraft, etc.
   */
  operator?: string | null;
  /** Unique ID of a slate (assigned by the operator). */
  operatorSlateId?: number | null;
  /**
   * The name of the slate (assigned by the operator). Possible values: Main, Express, Arcade, Late
   * Night, etc.
   */
  operatorName?: string | null;
  /** The day (in EST/EDT) that the slate begins (assigned by the operator). */
  operatorDay?: string | null;
  /** The date and time that the slate begins; assigned by the operator (in US Eastern Time) */
  operatorStartTime?: string | null;
  /** The day that the slate begins; assigned by the operator (in US Eastern Time) */
  numberOfGames?: number | null;
  /** Whether this slate uses games that take place on different days. */
  isMultiDaySlate?: boolean | null;
  /** Indicates whether this slate was removed/deleted by the operator. */
  removedByOperator?: boolean | null;
  /** The game type of the slate. Will often be null as most operators only have one game type. */
  operatorGameType?: string | null;
  /** The games that are included in this slate */
  dfsSlateGames?: DfsSlateGame[];
  /** The players that are included in this slate */
  dfsSlatePlayers?: DfsSlatePlayer[];
  /** The positions that need to be filled for this particular slate */
  slateRosterSlots?: (string | null)[];
  /**
   * The salary cap for the current slate (is null for slates with no salary cap such a Tiers
   * gametypes)
   */
  salaryCap?: number | null;
};

export const dfsSlateSchema: Schema<DfsSlate> = s.object<DfsSlate>({
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
  dfsSlateGames: s.optional(s.array(s.lazy(() => dfsSlateGameSchema))),
  dfsSlatePlayers: s.optional(s.array(s.lazy(() => dfsSlatePlayerSchema))),
  slateRosterSlots: s.optional(s.array(s.nullable(s.string()))),
  salaryCap: s.optionalNullable(s.int()),
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
