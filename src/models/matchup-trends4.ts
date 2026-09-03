import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game23Schema, type Game23 } from "./game23.js";
import { game8Schema, type Game8 } from "./game8.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrends2Schema, type TeamTrends2 } from "./team-trends2.js";

export type MatchupTrends4 = {
  upcomingGame?: Game23;
  teamTrends?: TeamTrends2[];
  teamMatchupTrends?: TeamGameTrends[];
  opponentMatchupTrends?: TeamGameTrends[];
  previousGames?: Game8[];
};

export const matchupTrends4Schema: Schema<MatchupTrends4> = s.object<MatchupTrends4>({
  upcomingGame: s.optional(s.lazy(() => game23Schema)),
  teamTrends: s.optional(s.array(s.lazy(() => teamTrends2Schema))),
  teamMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  opponentMatchupTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  previousGames: s.optional(s.array(s.lazy(() => game8Schema))),
  _keysMap: {
    upcomingGame: "UpcomingGame",
    teamTrends: "TeamTrends",
    teamMatchupTrends: "TeamMatchupTrends",
    opponentMatchupTrends: "OpponentMatchupTrends",
    previousGames: "PreviousGames",
  },
});
