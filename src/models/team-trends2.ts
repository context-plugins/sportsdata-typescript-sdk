import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game13Schema, type Game13 } from "./game13.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";

export type TeamTrends2 = {
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The most recent future game for the team */
  upcomingGame?: Game13;
  /** The collection of Game Trends for this team */
  teamGameTrends?: TeamGameTrends[];
};

export const teamTrends2Schema: Schema<TeamTrends2> = s.object<TeamTrends2>({
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  upcomingGame: s.optional(s.lazy(() => game13Schema)),
  teamGameTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  _keysMap: {
    team: "Team",
    teamId: "TeamID",
    upcomingGame: "UpcomingGame",
    teamGameTrends: "TeamGameTrends",
  },
});
