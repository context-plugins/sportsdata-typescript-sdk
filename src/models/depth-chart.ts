import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DepthChart = {
  /** Unique ID of Depth Chart Record */
  depthChartId?: number;
  /** Unique ID of Team */
  teamId?: number;
  /** Unique ID of Player */
  playerId?: number | null;
  /** Player's full name */
  name?: string | null;
  /** The category of the player's depth chart position (OFF; DEF; ST) */
  positionCategory?: string | null;
  /** The player's depth chart position */
  position?: string | null;
  /**
   * The order this player is at his position (1 = Starter; 2 = Backup; 3 = 3rd String; 4 = 4th
   * String; 5 = 5th String)
   */
  depthOrder?: number | null;
  /** Date and time last updated (in US Eastern Time) */
  updated?: string | null;
};

export const depthChartSchema: Schema<DepthChart> = s.object<DepthChart>({
  depthChartId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.int()),
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
