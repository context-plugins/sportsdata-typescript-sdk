import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerRoundScoreSchema, type PlayerRoundScore } from "./player-round-score.js";

export type TournamentRound = {
  tournamentId?: number;
  playerTournamentId?: number;
  totalScore?: number | null;
  totalStrokes?: number | null;
  playerRoundScore?: PlayerRoundScore[];
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  weight?: number | null;
  swings?: string | null;
  pgaDebut?: number | null;
  country?: string | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  college?: string | null;
};

export const tournamentRoundSchema: Schema<TournamentRound> = s.object<TournamentRound>({
  tournamentId: s.optional(s.number()),
  playerTournamentId: s.optional(s.number()),
  totalScore: s.optionalNullable(s.number()),
  totalStrokes: s.optionalNullable(s.number()),
  playerRoundScore: s.optional(s.array(s.lazy(() => playerRoundScoreSchema))),
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  weight: s.optionalNullable(s.number()),
  swings: s.optionalNullable(s.string()),
  pgaDebut: s.optionalNullable(s.number()),
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
