import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game14Schema, type Game14 } from "./game14.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";

export type TeamTrends3 = {
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The next scheduled game for the team */
  upcomingGame?: Game14;
  /** The collection of game trends for this team */
  teamGameTrends?: TeamGameTrends[];
};

export const teamTrends3Schema: Schema<TeamTrends3> = s.object<TeamTrends3>({
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  upcomingGame: s.optional(s.lazy(() => game14Schema)),
  teamGameTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  _keysMap: {
    team: "Team",
    teamId: "TeamID",
    upcomingGame: "UpcomingGame",
    teamGameTrends: "TeamGameTrends",
  },
});
