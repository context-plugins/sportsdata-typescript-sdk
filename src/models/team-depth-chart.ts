import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { depthChartSchema, type DepthChart } from "./depth-chart.js";

export type TeamDepthChart = {
  teamId?: number;
  offense?: DepthChart[];
  defense?: DepthChart[];
  specialTeams?: DepthChart[];
};

export const teamDepthChartSchema: Schema<TeamDepthChart> = s.object<TeamDepthChart>({
  teamId: s.optional(s.number()),
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
