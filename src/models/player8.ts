import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player8 = {
  /** The unique ID of the golfer */
  playerId?: number;
  /** The first name of the golfer */
  firstName?: string | null;
  /** The last name of the golfer */
  lastName?: string | null;
  /** The golfer's weight (in pounds) */
  weight?: number | null;
  /** Indicates whether this golfer swings right-handed (R) or left-handed (L) */
  swings?: string | null;
  /** The year that this golfer made his PGA debut */
  pgaDebut?: number | null;
  /** The country where this golfer is from */
  country?: string | null;
  /** The golfer's date of birth */
  birthDate?: string | null;
  /** The city where this golfer was born */
  birthCity?: string | null;
  /**
   * The state where this golfer was born. Note: This field is null for any golfer born outside the
   * US, Canada, and Australia
   */
  birthState?: string | null;
  /** The college that this golfer attended (if applicable) */
  college?: string | null;
  /** This field is deprecated */
  photoUrl?: string | null;
  /** The unique ID of this golfer in the SportRadar API */
  sportRadarPlayerId?: string | null;
  /** The unique ID of the golfer from PGATour(dot)Com */
  pgaTourPlayerId?: number | null;
  /** The unique ID of this golfer on Rotoworld */
  rotoworldPlayerId?: number | null;
  /** The unique ID of this golfer on RotoWire */
  rotoWirePlayerId?: number | null;
  /** The golfer's cross reference Player ID to FantasyAlarm */
  fantasyAlarmPlayerId?: number | null;
  /** The golfer's full name in DraftKings' daily fantasy sports platform */
  draftKingsName?: string | null;
  /** The golfer's full name in FantasyDraft's daily fantasy sports platform */
  fantasyDraftName?: string | null;
  /** The golfer's full name in Fanduel's daily fantasy sports platform */
  fanDuelName?: string | null;
  /** The golfer's cross reference PlayerID to FantasyDraft */
  fantasyDraftPlayerId?: number | null;
  /** The golfer's cross reference PlayerID to DraftKings */
  draftKingsPlayerId?: number | null;
  /** The golfer's cross reference PlayerID to FanDuel */
  fanDuelPlayerId?: number | null;
  /** The unique ID of this golfer on Yahoo */
  yahooPlayerId?: number | null;
};

export const player8Schema: Schema<Player8> = s.object<Player8>({
  playerId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  weight: s.optionalNullable(s.int()),
  swings: s.optionalNullable(s.string()),
  pgaDebut: s.optionalNullable(s.int()),
  country: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  pgaTourPlayerId: s.optionalNullable(s.int()),
  rotoworldPlayerId: s.optionalNullable(s.int()),
  rotoWirePlayerId: s.optionalNullable(s.int()),
  fantasyAlarmPlayerId: s.optionalNullable(s.int()),
  draftKingsName: s.optionalNullable(s.string()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fanDuelName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.int()),
  draftKingsPlayerId: s.optionalNullable(s.int()),
  fanDuelPlayerId: s.optionalNullable(s.int()),
  yahooPlayerId: s.optionalNullable(s.int()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    weight: "Weight",
    swings: "Swings",
    pgaDebut: "PgaDebut",
    country: "Country",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    college: "College",
    photoUrl: "PhotoUrl",
    sportRadarPlayerId: "SportRadarPlayerID",
    pgaTourPlayerId: "PgaTourPlayerID",
    rotoworldPlayerId: "RotoworldPlayerID",
    rotoWirePlayerId: "RotoWirePlayerID",
    fantasyAlarmPlayerId: "FantasyAlarmPlayerID",
    draftKingsName: "DraftKingsName",
    fantasyDraftName: "FantasyDraftName",
    fanDuelName: "FanDuelName",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    draftKingsPlayerId: "DraftKingsPlayerID",
    fanDuelPlayerId: "FanDuelPlayerID",
    yahooPlayerId: "YahooPlayerID",
  },
});
