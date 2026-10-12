import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game31Schema, type Game31 } from "./game31.js";
import { game6Schema, type Game6 } from "./game6.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrends1Schema, type TeamTrends1 } from "./team-trends1.js";

export type MatchupTrends2 = {
  /** Next scheduled game for the team with a specified opposing team */
  upcomingGame?: Game31;
  /** The collection of team trends between each team */
  teamTrends?: TeamTrends1[];
  /** The collection of team game trends against opponent */
  teamMatchupTrends?: TeamGameTrends[];
  /** The collection of opponent game trends against the team */
  opponentMatchupTrends?: TeamGameTrends[];
  /** The collection of last 10 game scores between each team */
  previousGames?: Game6[];
};

export const matchupTrends2Schema: Schema<MatchupTrends2> = s.object<MatchupTrends2>({
  upcomingGame: s.optional(s.lazy(() => game31Schema)),
  teamTrends: s.optional(s.array(s.lazy(() => teamTrends1Schema))),
  teamMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  opponentMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  previousGames: s.optional(s.array(s.lazy(() => game6Schema))),
  _keysMap: {
    upcomingGame: "UpcomingGame",
    teamTrends: "TeamTrends",
    teamMatchupTrends: "TeamMatchupTrends",
    opponentMatchupTrends: "OpponentMatchupTrends",
    previousGames: "PreviousGames",
  },
});
