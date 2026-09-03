import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TournamentBasic = {
  tournamentId?: number;
  name?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  isOver?: boolean;
};

export const tournamentBasicSchema: Schema<TournamentBasic> = s.object<TournamentBasic>({
  tournamentId: s.optional(s.number()),
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
