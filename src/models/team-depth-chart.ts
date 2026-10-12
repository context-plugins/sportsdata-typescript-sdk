import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { depthChartSchema, type DepthChart } from "./depth-chart.js";

export type TeamDepthChart = {
  /** Unique ID of Team */
  teamId?: number;
  /** List of Offensive Depth Charts for Team */
  offense?: DepthChart[];
  /** List of Defensive Depth Charts for Team */
  defense?: DepthChart[];
  /** List of Special Teams Depth Charts for Team */
  specialTeams?: DepthChart[];
};

export const teamDepthChartSchema: Schema<TeamDepthChart> = s.object<TeamDepthChart>({
  teamId: s.optional(s.int()),
  offense: s.optional(s.array(s.lazy(() => depthChartSchema))),
  defense: s.optional(s.array(s.lazy(() => depthChartSchema))),
  specialTeams: s.optional(s.array(s.lazy(() => depthChartSchema))),
  _keysMap: {
    teamId: "TeamID",
    offense: "Offense",
    defense: "Defense",
    specialTeams: "SpecialTeams",
  },
});
