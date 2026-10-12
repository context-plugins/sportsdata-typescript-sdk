import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { goalieDepthChartSchema, type GoalieDepthChart } from "./goalie-depth-chart.js";

export type TeamGoalieDepthChart = {
  /** List of players that make up the goalie depth chart for each team */
  goalieDepthCharts?: GoalieDepthChart[];
  /** The unique ID of the team */
  teamId?: number;
};

export const teamGoalieDepthChartSchema: Schema<TeamGoalieDepthChart> = s.object<TeamGoalieDepthChart>({
  goalieDepthCharts: s.optional(s.array(s.lazy(() => goalieDepthChartSchema))),
  teamId: s.optional(s.int()),
  _keysMap: {
    goalieDepthCharts: "GoalieDepthCharts",
    teamId: "TeamID",
  },
});
