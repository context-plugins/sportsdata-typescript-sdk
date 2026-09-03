import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { score1Schema, type Score1 } from "./score1.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";

export type TeamTrends = {
  team?: string | null;
  teamId?: number | null;
  upcomingGame?: Score1;
  teamGameTrends?: TeamGameTrends[];
};

export const teamTrendsSchema: Schema<TeamTrends> = s.object<TeamTrends>({
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  upcomingGame: s.optional(s.lazy(() => score1Schema)),
  teamGameTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  _keysMap: {
    team: "Team",
    teamId: "TeamID",
    upcomingGame: "UpcomingGame",
    teamGameTrends: "TeamGameTrends",
  },
});
