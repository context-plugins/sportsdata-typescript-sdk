import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic1 = {
  playerId?: number;
  sportsDataId?: string | null;
  status?: string | null;
  teamId?: number | null;
  team?: string | null;
  jersey?: number | null;
  positionCategory?: string | null;
  position?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  birthCountry?: string | null;
  globalTeamId?: number | null;
  height?: number | null;
  weight?: number | null;
};

export const playerBasic1Schema: Schema<PlayerBasic1> = s.object<PlayerBasic1>({
  playerId: s.optional(s.number()),
  sportsDataId: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  _keysMap: {
    playerId: "PlayerID",
    sportsDataId: "SportsDataID",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    positionCategory: "PositionCategory",
    position: "Position",
    firstName: "FirstName",
    lastName: "LastName",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    globalTeamId: "GlobalTeamID",
    height: "Height",
    weight: "Weight",
  },
});
