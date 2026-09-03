import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoreSchema, type Score } from "./score.js";
import { score2Schema, type Score2 } from "./score2.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrendsSchema, type TeamTrends } from "./team-trends.js";

export type MatchupTrends = {
  upcomingGame?: Score2;
  teamTrends?: TeamTrends[];
  teamMatchupTrends?: TeamGameTrends[];
  opponentMatchupTrends?: TeamGameTrends[];
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
