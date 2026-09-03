import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DepthChart = {
  depthChartId?: number;
  teamId?: number;
  playerId?: number | null;
  name?: string | null;
  positionCategory?: string | null;
  position?: string | null;
  depthOrder?: number | null;
  updated?: string | null;
};

export const depthChartSchema: Schema<DepthChart> = s.object<DepthChart>({
  depthChartId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    depthChartId: "DepthChartID",
    teamId: "TeamID",
    playerId: "PlayerID",
    name: "Name",
    positionCategory: "PositionCategory",
    position: "Position",
    depthOrder: "DepthOrder",
    updated: "Updated",
  },
});
