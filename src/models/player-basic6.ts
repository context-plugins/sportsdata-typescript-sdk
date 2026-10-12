import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic6 = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career.
   */
  playerId?: number;
  /** The player's first name */
  firstName?: string | null;
  /** The last name of the player */
  lastName?: string | null;
  /** The player's common name */
  commonName?: string | null;
  /** The short name of the player */
  shortName?: string | null;
  /**
   * The position of the player. Possible values include: A (Attacker), M (Midfielder), D
   * (Defender), GK (Goalkeeper).
   */
  position?: string | null;
  /** The player's position category */
  positionCategory?: string | null;
  /** The player's jersey number */
  jersey?: number | null;
  /** The primary foot of the player. Possible values: left or right. */
  foot?: string | null;
  /** The height of the player in centimeters (cm) */
  height?: number | null;
  /** The player's weight in kilograms (kg) */
  weight?: number | null;
  /** The gender of this player on the team. Possible Values: Male; Female. */
  gender?: string | null;
  /** The player's date of birth */
  birthDate?: string | null;
  /** The city in which the player was born */
  birthCity?: string | null;
  /** The country in which the player was born */
  birthCountry?: string | null;
  /** The nationality of the player */
  nationality?: string | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
};

export const playerBasic6Schema: Schema<PlayerBasic6> = s.object<PlayerBasic6>({
  playerId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  commonName: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  foot: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
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
