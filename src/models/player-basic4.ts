import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic4 = {
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  teamId?: number | null;
  team?: string | null;
  jersey?: number | null;
  position?: string | null;
  positionCategory?: string | null;
  class?: string | null;
  height?: number | null;
  weight?: number | null;
  birthCity?: string | null;
  birthState?: string | null;
  updated?: string | null;
  created?: string | null;
  globalTeamId?: number | null;
};

export const playerBasic4Schema: Schema<PlayerBasic4> = s.object<PlayerBasic4>({
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  class: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    position: "Position",
    positionCategory: "PositionCategory",
    class: "Class",
    height: "Height",
    weight: "Weight",
    birthCity: "BirthCity",
    birthState: "BirthState",
    updated: "Updated",
    created: "Created",
    globalTeamId: "GlobalTeamID",
  },
});
