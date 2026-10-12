import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GoalieDepthChart = {
  /** The unique ID of the team */
  teamId?: number;
  /** The abbreviation [Key] of the team this player is employed by */
  team?: string | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /** The full name of the goaltender */
  name?: string | null;
  /**
   * Indicates whether it is a goalie tandem or not for a goalie depth chart (returns Tandem;
   * Regular)
   */
  depthType?: string | null;
  /** If the goalie depth chart is displayed as a Tandem or as Regular */
  displayType?: string | null;
  /** The order of the goalie in the team's depth chart */
  depthOrder?: number | null;
  /** The timestamp of when this depth chart was last edited; based on US Eastern Time (EST/EDT) */
  created?: string | null;
  /** The timestamp of when the record was last updated (in US Eastern Time) */
  updated?: string | null;
};

export const goalieDepthChartSchema: Schema<GoalieDepthChart> = s.object<GoalieDepthChart>({
  teamId: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  depthType: s.optionalNullable(s.string()),
  displayType: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.int()),
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
