import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { depthChartSchema, type DepthChart } from "./depth-chart.js";

export type TeamDepthChart1 = {
  depthCharts?: DepthChart[];
  teamId?: number;
};

export const teamDepthChart1Schema: Schema<TeamDepthChart1> = s.object<TeamDepthChart1>({
  depthCharts: s.optional(s.array(s.lazy(() => depthChartSchema))),
  teamId: s.optional(s.number()),
  _keysMap: {
    depthCharts: "DepthCharts",
    teamId: "TeamID",
  },
});
