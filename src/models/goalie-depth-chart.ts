import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GoalieDepthChart = {
  teamId?: number;
  team?: string | null;
  playerId?: number | null;
  name?: string | null;
  depthType?: string | null;
  displayType?: string | null;
  depthOrder?: number | null;
  created?: string | null;
  updated?: string | null;
};

export const goalieDepthChartSchema: Schema<GoalieDepthChart> = s.object<GoalieDepthChart>({
  teamId: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  depthType: s.optionalNullable(s.string()),
  displayType: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.number()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamID",
    team: "Team",
    playerId: "PlayerID",
    name: "Name",
    depthType: "DepthType",
    displayType: "DisplayType",
    depthOrder: "DepthOrder",
    created: "Created",
    updated: "Updated",
  },
});
