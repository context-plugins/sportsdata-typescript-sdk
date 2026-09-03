import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game13Schema, type Game13 } from "./game13.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";

export type TeamTrends2 = {
  team?: string | null;
  teamId?: number | null;
  upcomingGame?: Game13;
  teamGameTrends?: TeamGameTrends[];
};

export const teamTrends2Schema: Schema<TeamTrends2> = s.object<TeamTrends2>({
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  upcomingGame: s.optional(s.lazy(() => game13Schema)),
  teamGameTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  _keysMap: {
    team: "Team",
    teamId: "TeamID",
    upcomingGame: "UpcomingGame",
    teamGameTrends: "TeamGameTrends",
  },
});
