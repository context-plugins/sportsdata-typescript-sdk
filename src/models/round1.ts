import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Round1 = {
  /** The unique ID of the tournament */
  tournamentId?: number;
  /** The unique ID of the round of this tournament */
  roundId?: number;
  /** The number of the round */
  number?: number | null;
  /** The date that this round is being played on */
  day?: string | null;
  /** Indicates whether a Round is over */
  isRoundOver?: boolean | null;
};

export const round1Schema: Schema<Round1> = s.object<Round1>({
  tournamentId: s.optional(s.int()),
  roundId: s.optional(s.int()),
  number: s.optionalNullable(s.int()),
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
