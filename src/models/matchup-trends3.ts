import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game32Schema, type Game32 } from "./game32.js";
import { game7Schema, type Game7 } from "./game7.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrends1Schema, type TeamTrends1 } from "./team-trends1.js";

export type MatchupTrends3 = {
  /** Upcoming game between the team and the opponent */
  upcomingGame?: Game32;
  /** The collection of team trends between each team */
  teamTrends?: TeamTrends1[];
  /** The collection of team game trends against opponent */
  teamMatchupTrends?: TeamGameTrends[];
  /** The collection of opponent game trends against a specific team */
  opponentMatchupTrends?: TeamGameTrends[];
  /** The collection of last 10 game scores between each team */
  previousGames?: Game7[];
};

export const matchupTrends3Schema: Schema<MatchupTrends3> = s.object<MatchupTrends3>({
  upcomingGame: s.optional(s.lazy(() => game32Schema)),
  teamTrends: s.optional(s.array(s.lazy(() => teamTrends1Schema))),
  teamMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  opponentMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  previousGames: s.optional(s.array(s.lazy(() => game7Schema))),
  _keysMap: {
    upcomingGame: "UpcomingGame",
    teamTrends: "TeamTrends",
    teamMatchupTrends: "TeamMatchupTrends",
    opponentMatchupTrends: "OpponentMatchupTrends",
    previousGames: "PreviousGames",
  },
});
