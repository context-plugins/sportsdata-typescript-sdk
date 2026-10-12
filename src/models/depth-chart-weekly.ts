import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DepthChartWeekly = {
  /** Unique ID of Depth Chart Weekly Record */
  depthChartWeeklyId?: number;
  /** Unique ID of Team */
  teamId?: number;
  /** Unique ID of Player */
  playerId?: number | null;
  /** Player Name */
  name?: string | null;
  /** Player Position Category (OFF, DEF, ST) */
  positionCategory?: string | null;
  /** Player Position */
  position?: string | null;
  /** Depth Chart Order */
  depthOrder?: number | null;
  /** Date and Time Last Updated */
  updated?: string | null;
};

export const depthChartWeeklySchema: Schema<DepthChartWeekly> = s.object<DepthChartWeekly>({
  depthChartWeeklyId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.int()),
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
