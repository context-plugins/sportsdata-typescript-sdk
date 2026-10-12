import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player7 = {
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
   * The position of the player. Possible values include: A (Attacker); M (Midfielder); D
   * (Defender); GK (Goalkeeper).
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
  /** Indicates the player's injury status. Possible values: Questionable; Out. */
  injuryStatus?: string | null;
  /** The body part of the player that is injured (Knee; Groin; Calf; Hamstring; etc.) */
  injuryBodyPart?: string | null;
  /** Not yet supported; will be null */
  injuryNotes?: string | null;
  /** The date that the injury started or was first discovered */
  injuryStartDate?: string | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
  /**
   * This field is deprecated. Note: Photos are no longer available through this field. Headshots
   * are now delivered through IMAGN. Please see our Headshots products for further information.
   */
  photoUrl?: string | null;
  /** The player's cross reference PlayerID to the RotoWire news feed. */
  rotoWirePlayerId?: number | null;
  /** The position of the player according to DraftKings */
  draftKingsPosition?: string | null;
  /** The player's cross reference PlayerID to USA Today headshot data feeds */
  usaTodayPlayerId?: number | null;
  /** The player's headshot URL as provided by USA Today. License from USA Today is required. */
  usaTodayHeadshotUrl?: string | null;
  /**
   * The player's transparent background headshot URL as provided by USA Today. License from USA
   * Today is required.
   */
  usaTodayHeadshotNoBackgroundUrl?: string | null;
  /**
   * The last updated timestamp of the player's headshot as provided by USA Today. License from USA
   * Today is required.
   */
  usaTodayHeadshotUpdated?: string | null;
  /**
   * The last updated timestamp of the player's transparent background headshot as provided by USA
   * Today. License from USA Today is required.
   */
  usaTodayHeadshotNoBackgroundUpdated?: string | null;
};

export const player7Schema: Schema<Player7> = s.object<Player7>({
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
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  rotoWirePlayerId: s.optionalNullable(s.int()),
  draftKingsPosition: s.optionalNullable(s.string()),
  usaTodayPlayerId: s.optionalNullable(s.int()),
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
