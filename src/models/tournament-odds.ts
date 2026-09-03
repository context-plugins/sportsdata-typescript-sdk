import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerTournamentOddSchema, type PlayerTournamentOdd } from "./player-tournament-odd.js";
import { tournament3Schema, type Tournament3 } from "./tournament3.js";

export type TournamentOdds = {
  tournament?: Tournament3;
  playerTournamentOdds?: PlayerTournamentOdd[];
};

export const tournamentOddsSchema: Schema<TournamentOdds> = s.object<TournamentOdds>({
  tournament: s.optional(s.lazy(() => tournament3Schema)),
  playerTournamentOdds: s.optional(s.array(s.lazy(() => playerTournamentOddSchema))),
  _keysMap: {
    tournament: "Tournament",
    playerTournamentOdds: "PlayerTournamentOdds",
  },
});
