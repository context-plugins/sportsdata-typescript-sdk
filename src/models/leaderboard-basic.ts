import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerTournamentBasicSchema, type PlayerTournamentBasic } from "./player-tournament-basic.js";
import { tournamentBasic2Schema, type TournamentBasic2 } from "./tournament-basic2.js";

export type LeaderboardBasic = {
  tournament?: TournamentBasic2;
  players?: PlayerTournamentBasic[];
};

export const leaderboardBasicSchema: Schema<LeaderboardBasic> = s.object<LeaderboardBasic>({
  tournament: s.optional(s.lazy(() => tournamentBasic2Schema)),
  players: s.optional(s.array(s.lazy(() => playerTournamentBasicSchema))),
  _keysMap: {
    tournament: "Tournament",
    players: "Players",
  },
});
