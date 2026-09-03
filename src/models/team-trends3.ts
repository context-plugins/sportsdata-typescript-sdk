import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game14Schema, type Game14 } from "./game14.js";
import { teamGameTrendsSchema, type TeamGameTrends } from "./team-game-trends.js";

export type TeamTrends3 = {
  team?: string | null;
  teamId?: number | null;
  upcomingGame?: Game14;
  teamGameTrends?: TeamGameTrends[];
};

export const teamTrends3Schema: Schema<TeamTrends3> = s.object<TeamTrends3>({
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  upcomingGame: s.optional(s.lazy(() => game14Schema)),
  teamGameTrends: s.optional(s.array(s.lazy(() => teamGameTrendsSchema))),
  _keysMap: {
    team: "Team",
    teamId: "TeamID",
    upcomingGame: "UpcomingGame",
    teamGameTrends: "TeamGameTrends",
  },
});
