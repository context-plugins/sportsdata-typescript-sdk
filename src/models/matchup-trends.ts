import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoreSchema, type Score } from "./score.js";
import { score2Schema, type Score2 } from "./score2.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrendsSchema, type TeamTrends } from "./team-trends.js";

export type MatchupTrends = {
  /** Upcoming game between the team and the opponent */
  upcomingGame?: Score2;
  /** The collection of team trends between each team */
  teamTrends?: TeamTrends[];
  /** The collection of team game trends against opponent */
  teamMatchupTrends?: TeamGameTrends[];
  /** The collection of opponent game trends against team */
  opponentMatchupTrends?: TeamGameTrends[];
  /** The collection of last 10 game scores between each team */
  previousGames?: Score[];
};

export const matchupTrendsSchema: Schema<MatchupTrends> = s.object<MatchupTrends>({
  upcomingGame: s.optional(s.lazy(() => score2Schema)),
  teamTrends: s.optional(s.array(s.lazy(() => teamTrendsSchema))),
  teamMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  opponentMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  previousGames: s.optional(s.array(s.lazy(() => scoreSchema))),
  _keysMap: {
    upcomingGame: "UpcomingGame",
    teamTrends: "TeamTrends",
    teamMatchupTrends: "TeamMatchupTrends",
    opponentMatchupTrends: "OpponentMatchupTrends",
    previousGames: "PreviousGames",
  },
});
