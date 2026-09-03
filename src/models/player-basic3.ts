import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic3 = {
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  status?: string | null;
  teamId?: number | null;
  team?: string | null;
  position?: string | null;
  jersey?: number | null;
  height?: number | null;
  weight?: number | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  globalTeamId?: number | null;
};

export const playerBasic3Schema: Schema<PlayerBasic3> = s.object<PlayerBasic3>({
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    position: "Position",
    jersey: "Jersey",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    globalTeamId: "GlobalTeamID",
  },
});
