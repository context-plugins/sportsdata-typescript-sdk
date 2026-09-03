import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player8 = {
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  weight?: number | null;
  swings?: string | null;
  pgaDebut?: number | null;
  country?: string | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  college?: string | null;
  photoUrl?: string | null;
  sportRadarPlayerId?: string | null;
  pgaTourPlayerId?: number | null;
  rotoworldPlayerId?: number | null;
  rotoWirePlayerId?: number | null;
  fantasyAlarmPlayerId?: number | null;
  draftKingsName?: string | null;
  fantasyDraftName?: string | null;
  fanDuelName?: string | null;
  fantasyDraftPlayerId?: number | null;
  draftKingsPlayerId?: number | null;
  fanDuelPlayerId?: number | null;
  yahooPlayerId?: number | null;
};

export const player8Schema: Schema<Player8> = s.object<Player8>({
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  weight: s.optionalNullable(s.number()),
  swings: s.optionalNullable(s.string()),
  pgaDebut: s.optionalNullable(s.number()),
  country: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  pgaTourPlayerId: s.optionalNullable(s.number()),
  rotoworldPlayerId: s.optionalNullable(s.number()),
  rotoWirePlayerId: s.optionalNullable(s.number()),
  fantasyAlarmPlayerId: s.optionalNullable(s.number()),
  draftKingsName: s.optionalNullable(s.string()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fanDuelName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.number()),
  draftKingsPlayerId: s.optionalNullable(s.number()),
  fanDuelPlayerId: s.optionalNullable(s.number()),
  yahooPlayerId: s.optionalNullable(s.number()),
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
