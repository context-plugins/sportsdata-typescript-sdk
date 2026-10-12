import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameSchema, type Game } from "./game.js";
import { game3Schema, type Game3 } from "./game3.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrends1Schema, type TeamTrends1 } from "./team-trends1.js";

export type MatchupTrends1 = {
  /** Next scheduled game for the team with a specified opposing team */
  upcomingGame?: Game3;
  /** The collection of team trends between each team */
  teamTrends?: TeamTrends1[];
  /** The collection of team game trends against opponent */
  teamMatchupTrends?: TeamGameTrends[];
  /** The collection of opponent game trends against team */
  opponentMatchupTrends?: TeamGameTrends[];
  /** The collection of last 10 game scores between each team */
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
