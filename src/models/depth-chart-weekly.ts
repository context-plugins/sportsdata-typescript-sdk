import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DepthChartWeekly = {
  depthChartWeeklyId?: number;
  teamId?: number;
  playerId?: number | null;
  name?: string | null;
  positionCategory?: string | null;
  position?: string | null;
  depthOrder?: number | null;
  updated?: string | null;
};

export const depthChartWeeklySchema: Schema<DepthChartWeekly> = s.object<DepthChartWeekly>({
  depthChartWeeklyId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    depthChartWeeklyId: "DepthChartWeeklyID",
    teamId: "TeamID",
    playerId: "PlayerID",
    name: "Name",
    positionCategory: "PositionCategory",
    position: "Position",
    depthOrder: "DepthOrder",
    updated: "Updated",
  },
});
