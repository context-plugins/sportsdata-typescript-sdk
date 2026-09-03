import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player5 = {
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  teamId?: number | null;
  team?: string | null;
  jersey?: number | null;
  position?: string | null;
  class?: string | null;
  height?: number | null;
  weight?: number | null;
  birthCity?: string | null;
  birthState?: string | null;
  highSchool?: string | null;
  sportRadarPlayerId?: string | null;
  rotoworldPlayerId?: number | null;
  rotoWirePlayerId?: number | null;
  fantasyAlarmPlayerId?: number | null;
  globalTeamId?: number | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryNotes?: string | null;
  injuryStartDate?: string | null;
};

export const player5Schema: Schema<Player5> = s.object<Player5>({
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  position: s.optionalNullable(s.string()),
  class: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  highSchool: s.optionalNullable(s.string()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  rotoworldPlayerId: s.optionalNullable(s.number()),
  rotoWirePlayerId: s.optionalNullable(s.number()),
  fantasyAlarmPlayerId: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    position: "Position",
    class: "Class",
    height: "Height",
    weight: "Weight",
    birthCity: "BirthCity",
    birthState: "BirthState",
    highSchool: "HighSchool",
    sportRadarPlayerId: "SportRadarPlayerID",
    rotoworldPlayerId: "RotoworldPlayerID",
    rotoWirePlayerId: "RotoWirePlayerID",
    fantasyAlarmPlayerId: "FantasyAlarmPlayerID",
    globalTeamId: "GlobalTeamID",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryNotes: "InjuryNotes",
    injuryStartDate: "InjuryStartDate",
  },
});
