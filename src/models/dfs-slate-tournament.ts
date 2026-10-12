import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tournament2Schema, type Tournament2 } from "./tournament2.js";

export type DfsSlateTournament = {
  /** The unique ID of a SlateTournament (assigned by SportsDataIO). */
  slateTournamentId?: number;
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /**
   * The unique ID that this SlateTournament refers to. Note: This points to data in the respective
   * sports' schedule/game/box score feeds.
   */
  tournamentId?: number | null;
  /** The details of the Tournament that this SlateTournament refers to. */
  tournament?: Tournament2;
  /** The unique ID of the SlateTournament as assigned by the operator */
  operatorTournamentId?: number | null;
  /** Indicates whether this tournament was removed/deleted by the operator */
  removedByOperator?: boolean | null;
};

export const dfsSlateTournamentSchema: Schema<DfsSlateTournament> = s.object<DfsSlateTournament>({
  slateTournamentId: s.optional(s.int()),
  slateId: s.optional(s.int()),
  tournamentId: s.optionalNullable(s.int()),
  tournament: s.optional(s.lazy(() => tournament2Schema)),
  operatorTournamentId: s.optionalNullable(s.int()),
  removedByOperator: s.optionalNullable(s.boolean()),
  _keysMap: {
    slateTournamentId: "SlateTournamentID",
    slateId: "SlateID",
    tournamentId: "TournamentID",
    tournament: "Tournament",
    operatorTournamentId: "OperatorTournamentID",
    removedByOperator: "RemovedByOperator",
  },
});
