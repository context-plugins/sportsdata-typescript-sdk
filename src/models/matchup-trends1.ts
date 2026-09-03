import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameSchema, type Game } from "./game.js";
import { game3Schema, type Game3 } from "./game3.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrends1Schema, type TeamTrends1 } from "./team-trends1.js";

export type MatchupTrends1 = {
  upcomingGame?: Game3;
  teamTrends?: TeamTrends1[];
  teamMatchupTrends?: TeamGameTrends[];
  opponentMatchupTrends?: TeamGameTrends[];
  previousGames?: Game[];
};

export const matchupTrends1Schema: Schema<MatchupTrends1> = s.object<MatchupTrends1>({
  upcomingGame: s.optional(s.lazy(() => game3Schema)),
  teamTrends: s.optional(s.array(s.lazy(() => teamTrends1Schema))),
  teamMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  opponentMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  previousGames: s.optional(s.array(s.lazy(() => gameSchema))),
  _keysMap: {
    upcomingGame: "UpcomingGame",
    teamTrends: "TeamTrends",
    teamMatchupTrends: "TeamMatchupTrends",
    opponentMatchupTrends: "OpponentMatchupTrends",
    previousGames: "PreviousGames",
  },
});
