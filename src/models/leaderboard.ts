import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerTournamentSchema, type PlayerTournament } from "./player-tournament.js";
import { tournament11Schema, type Tournament11 } from "./tournament11.js";

export type Leaderboard = {
  /** The details of the tournament for this leaderboard */
  tournament?: Tournament11;
  /** The details of the golfers who competed in this tournament */
  players?: PlayerTournament[];
};

export const leaderboardSchema: Schema<Leaderboard> = s.object<Leaderboard>({
  tournament: s.optional(s.lazy(() => tournament11Schema)),
  players: s.optional(s.array(s.lazy(() => playerTournamentSchema))),
  _keysMap: {
    tournament: "Tournament",
    players: "Players",
  },
});
