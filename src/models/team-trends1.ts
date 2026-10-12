import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game2Schema, type Game2 } from "./game2.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";

export type TeamTrends1 = {
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** Next scheduled game for the team */
  upcomingGame?: Game2;
  /** The collection of Game Trends for this team */
  teamGameTrends?: TeamGameTrends[];
};

export const teamTrends1Schema: Schema<TeamTrends1> = s.object<TeamTrends1>({
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  upcomingGame: s.optional(s.lazy(() => game2Schema)),
  teamGameTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  _keysMap: {
    team: "Team",
    teamId: "TeamID",
    upcomingGame: "UpcomingGame",
    teamGameTrends: "TeamGameTrends",
  },
});
