import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game23Schema, type Game23 } from "./game23.js";
import { game8Schema, type Game8 } from "./game8.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";
import { teamTrends2Schema, type TeamTrends2 } from "./team-trends2.js";

export type MatchupTrends4 = {
  /** The most recent future game for the team and their opponent */
  upcomingGame?: Game23;
  /** The collection of team trends between each team */
  teamTrends?: TeamTrends2[];
  /** The collection of team game trends against the opponent */
  teamMatchupTrends?: TeamGameTrends[];
  /** The collection of opponent game trends against team */
  opponentMatchupTrends?: TeamGameTrends[];
  /** The collection of last 10 game scores between each team */
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
