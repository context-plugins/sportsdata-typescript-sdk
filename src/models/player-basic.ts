import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic = {
  playerId?: number;
  team?: string | null;
  number?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  position?: string | null;
  status?: string | null;
  height?: string | null;
  weight?: number | null;
  birthDate?: string | null;
  college?: string | null;
  experience?: number | null;
  fantasyPosition?: string | null;
  active?: boolean | null;
  positionCategory?: string | null;
  name?: string | null;
  age?: number | null;
  shortName?: string | null;
  heightFeet?: number | null;
  heightInches?: number | null;
  teamId?: number | null;
  globalTeamId?: number | null;
  usaTodayPlayerId?: number | null;
  usaTodayHeadshotUrl?: string | null;
  usaTodayHeadshotNoBackgroundUrl?: string | null;
  usaTodayHeadshotUpdated?: string | null;
  usaTodayHeadshotNoBackgroundUpdated?: string | null;
};

export const playerBasicSchema: Schema<PlayerBasic> = s.object<PlayerBasic>({
  playerId: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.string()),
  weight: s.optionalNullable(s.number()),
  birthDate: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  experience: s.optionalNullable(s.number()),
  fantasyPosition: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  positionCategory: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  age: s.optionalNullable(s.number()),
  shortName: s.optionalNullable(s.string()),
  heightFeet: s.optionalNullable(s.number()),
  heightInches: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  usaTodayPlayerId: s.optionalNullable(s.number()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    team: "Team",
    number: "Number",
    firstName: "FirstName",
    lastName: "LastName",
    position: "Position",
    status: "Status",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    college: "College",
    experience: "Experience",
    fantasyPosition: "FantasyPosition",
    active: "Active",
    positionCategory: "PositionCategory",
    name: "Name",
    age: "Age",
    shortName: "ShortName",
    heightFeet: "HeightFeet",
    heightInches: "HeightInches",
    teamId: "TeamID",
    globalTeamId: "GlobalTeamID",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
