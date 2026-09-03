import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player7 = {
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  commonName?: string | null;
  shortName?: string | null;
  position?: string | null;
  positionCategory?: string | null;
  jersey?: number | null;
  foot?: string | null;
  height?: number | null;
  weight?: number | null;
  gender?: string | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthCountry?: string | null;
  nationality?: string | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryNotes?: string | null;
  injuryStartDate?: string | null;
  updated?: string | null;
  photoUrl?: string | null;
  rotoWirePlayerId?: number | null;
  draftKingsPosition?: string | null;
  usaTodayPlayerId?: number | null;
  usaTodayHeadshotUrl?: string | null;
  usaTodayHeadshotNoBackgroundUrl?: string | null;
  usaTodayHeadshotUpdated?: string | null;
  usaTodayHeadshotNoBackgroundUpdated?: string | null;
};

export const player7Schema: Schema<Player7> = s.object<Player7>({
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  commonName: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  foot: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  gender: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  nationality: s.optionalNullable(s.string()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  rotoWirePlayerId: s.optionalNullable(s.number()),
  draftKingsPosition: s.optionalNullable(s.string()),
  usaTodayPlayerId: s.optionalNullable(s.number()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerId",
    firstName: "FirstName",
    lastName: "LastName",
    commonName: "CommonName",
    shortName: "ShortName",
    position: "Position",
    positionCategory: "PositionCategory",
    jersey: "Jersey",
    foot: "Foot",
    height: "Height",
    weight: "Weight",
    gender: "Gender",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthCountry: "BirthCountry",
    nationality: "Nationality",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryNotes: "InjuryNotes",
    injuryStartDate: "InjuryStartDate",
    updated: "Updated",
    photoUrl: "PhotoUrl",
    rotoWirePlayerId: "RotoWirePlayerID",
    draftKingsPosition: "DraftKingsPosition",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
