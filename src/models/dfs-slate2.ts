import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dfsSlatePlayer2Schema, type DfsSlatePlayer2 } from "./dfs-slate-player2.js";
import { dfsSlateTournamentSchema, type DfsSlateTournament } from "./dfs-slate-tournament.js";

export type DfsSlate2 = {
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /**
   * The name of the operator who is running contests for this slate. Possible values: FanDuel,
   * DraftKings, Yahoo, FantasyDraft, etc.
   */
  operator?: string | null;
  /** The unique ID of a slate as assigned by the operator */
  operatorSlateId?: number | null;
  /**
   * The name of the slate as assigned by the operator. Possible values: Main; Express; Arcade; Late
   * Night; etc.
   */
  operatorName?: string | null;
  /** The day (in EST/EDT) that the slate begins, as assigned by the operator */
  operatorDay?: string | null;
  /** The date/time (in EST/EDT) that the slate begins as assigned by the operator) */
  operatorStartTime?: string | null;
  /** The total number of actual tournaments that this slate covers */
  numberOfTournaments?: number | null;
  /** Indicates if this slate uses tournaments that take place on different days */
  isMultiDaySlate?: boolean | null;
  /** Indicates whether this slate was removed/deleted by the operator */
  removedByOperator?: boolean | null;
  /**
   * The game type of the slate as assigned by the operator. Note: will often be null as most
   * operators only have one game type
   */
  operatorGameType?: string | null;
  /** The tournament(s) included in this slate */
  dfsSlateTournaments?: DfsSlateTournament[];
  /** The list of players that are included in this slate */
  dfsSlatePlayers?: DfsSlatePlayer2[];
  /** The positions that need to be filled for this particular slate */
  slateRosterSlots?: (string | null)[];
};

export const dfsSlate2Schema: Schema<DfsSlate2> = s.object<DfsSlate2>({
  slateId: s.optional(s.int()),
  operator: s.optionalNullable(s.string()),
  operatorSlateId: s.optionalNullable(s.int()),
  operatorName: s.optionalNullable(s.string()),
  operatorDay: s.optionalNullable(s.string()),
  operatorStartTime: s.optionalNullable(s.string()),
  numberOfTournaments: s.optionalNullable(s.int()),
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
