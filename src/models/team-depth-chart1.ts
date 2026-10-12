import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { depthChartSchema, type DepthChart } from "./depth-chart.js";

export type TeamDepthChart1 = {
  /** List of Depth Chart Records for Team */
  depthCharts?: DepthChart[];
  /** The unique ID of the team */
  teamId?: number;
};

export const teamDepthChart1Schema: Schema<TeamDepthChart1> = s.object<TeamDepthChart1>({
  depthCharts: s.optional(s.array(s.lazy(() => depthChartSchema))),
  teamId: s.optional(s.int()),
  _keysMap: {
    depthCharts: "DepthCharts",
    teamId: "TeamID",
  },
});
