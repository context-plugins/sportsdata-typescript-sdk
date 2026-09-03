import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tournament2Schema, type Tournament2 } from "./tournament2.js";

export type DfsSlateTournament = {
  slateTournamentId?: number;
  slateId?: number;
  tournamentId?: number | null;
  tournament?: Tournament2;
  operatorTournamentId?: number | null;
  removedByOperator?: boolean | null;
};

export const dfsSlateTournamentSchema: Schema<DfsSlateTournament> = s.object<DfsSlateTournament>({
  slateTournamentId: s.optional(s.number()),
  slateId: s.optional(s.number()),
  tournamentId: s.optionalNullable(s.number()),
  tournament: s.optional(s.lazy(() => tournament2Schema)),
  operatorTournamentId: s.optionalNullable(s.number()),
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
