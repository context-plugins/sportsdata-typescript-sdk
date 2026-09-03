import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player6 = {
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  status?: string | null;
  updated?: string | null;
  available?: boolean | null;
  teamId?: number | null;
  team?: string | null;
  jersey?: number | null;
  position?: string | null;
  height?: number | null;
  weight?: number | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  birthCountry?: string | null;
  college?: string | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryNotes?: string | null;
  injuryStartDate?: string | null;
  globalTeamId?: number | null;
};

export const player6Schema: Schema<Player6> = s.object<Player6>({
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  available: s.optionalNullable(s.boolean()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  position: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    status: "Status",
    updated: "Updated",
    available: "Available",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    position: "Position",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    college: "College",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryNotes: "InjuryNotes",
    injuryStartDate: "InjuryStartDate",
    globalTeamId: "GlobalTeamID",
  },
});
