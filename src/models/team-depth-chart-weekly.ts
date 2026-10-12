import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { depthChartWeeklySchema, type DepthChartWeekly } from "./depth-chart-weekly.js";

export type TeamDepthChartWeekly = {
  /** Unique ID of Team */
  teamId?: number;
  /** List of Offensive Depth Charts for Team */
  offense?: DepthChartWeekly[];
  /** List of Defensive Depth Charts for Team */
  defense?: DepthChartWeekly[];
  /** List of Special Teams Depth Charts for Team */
  specialTeams?: DepthChartWeekly[];
};

export const teamDepthChartWeeklySchema: Schema<TeamDepthChartWeekly> = s.object<TeamDepthChartWeekly>({
  teamId: s.optional(s.int()),
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
