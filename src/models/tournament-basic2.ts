import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of the tournament for this event */
export type TournamentBasic2 = {
  /** The unique ID of the tournament */
  tournamentId?: number;
  /** The name of the tournament */
  name?: string | null;
  /** The start date of this tournament */
  startDate?: string | null;
  /** The end date of this tournament */
  endDate?: string | null;
  /** Indicates whether this tournament is over */
  isOver?: boolean;
};

export const tournamentBasic2Schema: Schema<TournamentBasic2> = s.object<TournamentBasic2>({
  tournamentId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  isOver: s.optional(s.boolean()),
  _keysMap: {
    tournamentId: "TournamentID",
    name: "Name",
    startDate: "StartDate",
    endDate: "EndDate",
    isOver: "IsOver",
  },
});
