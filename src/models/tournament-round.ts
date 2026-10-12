import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerRoundScoreSchema, type PlayerRoundScore } from "./player-round-score.js";

export type TournamentRound = {
  /** The unique ID of the tournament */
  tournamentId?: number;
  /** The unique ID of this player/tournament combination */
  playerTournamentId?: number;
  /** The total score of the golfer for this tournament as compared to par */
  totalScore?: number | null;
  /** The total strokes this golfer has for this tournament */
  totalStrokes?: number | null;
  /** PlayerRoundScore object */
  playerRoundScore?: PlayerRoundScore[];
  /** The unique ID of the golfer */
  playerId?: number;
  /** The first name of the golfer */
  firstName?: string | null;
  /** The last name of this golfer */
  lastName?: string | null;
  /** The golfer's weight (in pounds) */
  weight?: number | null;
  /** Indicates whether this golfer swings right-handed (R) or left-handed (L) */
  swings?: string | null;
  /** The year that this golfer made his PGA debut */
  pgaDebut?: number | null;
  /** The country where this golfer is from */
  country?: string | null;
  /** The golfer's date of birth */
  birthDate?: string | null;
  /** The city where this golfer was born */
  birthCity?: string | null;
  /**
   * The state where this golfer was born. Note: This field is null for any golfer born outside the
   * US, Canada, and Australia
   */
  birthState?: string | null;
  /** The college that this golfer attended */
  college?: string | null;
};

export const tournamentRoundSchema: Schema<TournamentRound> = s.object<TournamentRound>({
  tournamentId: s.optional(s.int()),
  playerTournamentId: s.optional(s.int()),
  totalScore: s.optionalNullable(s.float64()),
  totalStrokes: s.optionalNullable(s.float64()),
  playerRoundScore: s.optional(s.array(s.lazy(() => playerRoundScoreSchema))),
  playerId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  weight: s.optionalNullable(s.int()),
  swings: s.optionalNullable(s.string()),
  pgaDebut: s.optionalNullable(s.int()),
  country: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  _keysMap: {
    tournamentId: "TournamentID",
    playerTournamentId: "PlayerTournamentID",
    totalScore: "TotalScore",
    totalStrokes: "TotalStrokes",
    playerRoundScore: "PlayerRoundScore",
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    weight: "Weight",
    swings: "Swings",
    pgaDebut: "PgaDebut",
    country: "Country",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    college: "College",
  },
});
