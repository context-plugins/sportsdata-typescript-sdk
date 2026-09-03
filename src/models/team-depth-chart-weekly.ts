import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { depthChartWeeklySchema, type DepthChartWeekly } from "./depth-chart-weekly.js";

export type TeamDepthChartWeekly = {
  teamId?: number;
  offense?: DepthChartWeekly[];
  defense?: DepthChartWeekly[];
  specialTeams?: DepthChartWeekly[];
};

export const teamDepthChartWeeklySchema: Schema<TeamDepthChartWeekly> = s.object<TeamDepthChartWeekly>({
  teamId: s.optional(s.number()),
  offense: s.optional(s.array(s.lazy(() => depthChartWeeklySchema))),
  defense: s.optional(s.array(s.lazy(() => depthChartWeeklySchema))),
  specialTeams: s.optional(s.array(s.lazy(() => depthChartWeeklySchema))),
  _keysMap: {
    teamId: "TeamID",
    offense: "Offense",
    defense: "Defense",
    specialTeams: "SpecialTeams",
  },
});
