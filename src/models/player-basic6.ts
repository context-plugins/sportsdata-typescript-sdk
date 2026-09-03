import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic6 = {
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
  updated?: string | null;
};

export const playerBasic6Schema: Schema<PlayerBasic6> = s.object<PlayerBasic6>({
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
  updated: s.optionalNullable(s.string()),
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
    updated: "Updated",
  },
});
