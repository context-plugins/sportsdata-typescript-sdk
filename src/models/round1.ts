import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Round1 = {
  tournamentId?: number;
  roundId?: number;
  number?: number | null;
  day?: string | null;
  isRoundOver?: boolean | null;
};

export const round1Schema: Schema<Round1> = s.object<Round1>({
  tournamentId: s.optional(s.number()),
  roundId: s.optional(s.number()),
  number: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  isRoundOver: s.optionalNullable(s.boolean()),
  _keysMap: {
    tournamentId: "TournamentID",
    roundId: "RoundID",
    number: "Number",
    day: "Day",
    isRoundOver: "IsRoundOver",
  },
});
