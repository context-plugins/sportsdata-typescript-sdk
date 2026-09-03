import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game24Schema, type Game24 } from "./game24.js";
import { game9Schema, type Game9 } from "./game9.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrends3Schema, type TeamTrends3 } from "./team-trends3.js";

export type MatchupTrends5 = {
  upcomingGame?: Game24;
  teamTrends?: TeamTrends3[];
  teamMatchupTrends?: TeamGameTrends[];
  opponentMatchupTrends?: TeamGameTrends[];
  previousGames?: Game9[];
};

export const matchupTrends5Schema: Schema<MatchupTrends5> = s.object<MatchupTrends5>({
  upcomingGame: s.optional(s.lazy(() => game24Schema)),
  teamTrends: s.optional(s.array(s.lazy(() => teamTrends3Schema))),
  teamMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  opponentMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  previousGames: s.optional(s.array(s.lazy(() => game9Schema))),
  _keysMap: {
    upcomingGame: "UpcomingGame",
    teamTrends: "TeamTrends",
    teamMatchupTrends: "TeamMatchupTrends",
    opponentMatchupTrends: "OpponentMatchupTrends",
    previousGames: "PreviousGames",
  },
});
