import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player3 = {
  playerId?: number;
  firstName?: string | null;
  lastName?: string | null;
  status?: string | null;
  teamId?: number | null;
  team?: string | null;
  position?: string | null;
  jersey?: number | null;
  catches?: string | null;
  shoots?: string | null;
  height?: number | null;
  weight?: number | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  photoUrl?: string | null;
  sportRadarPlayerId?: string | null;
  rotoworldPlayerId?: number | null;
  rotoWirePlayerId?: number | null;
  fantasyAlarmPlayerId?: number | null;
  statsPlayerId?: number | null;
  sportsDirectPlayerId?: number | null;
  xmlTeamPlayerId?: number | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryStartDate?: string | null;
  injuryNotes?: string | null;
  fanDuelPlayerId?: number | null;
  draftKingsPlayerId?: number | null;
  yahooPlayerId?: number | null;
  fanDuelName?: string | null;
  draftKingsName?: string | null;
  yahooName?: string | null;
  depthChartPosition?: string | null;
  depthChartOrder?: number | null;
  globalTeamId?: number | null;
  fantasyDraftName?: string | null;
  fantasyDraftPlayerId?: number | null;
  usaTodayPlayerId?: number | null;
  usaTodayHeadshotUrl?: string | null;
  usaTodayHeadshotNoBackgroundUrl?: string | null;
  usaTodayHeadshotUpdated?: string | null;
  usaTodayHeadshotNoBackgroundUpdated?: string | null;
};

export const player3Schema: Schema<Player3> = s.object<Player3>({
  playerId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  catches: s.optionalNullable(s.string()),
  shoots: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  rotoworldPlayerId: s.optionalNullable(s.number()),
  rotoWirePlayerId: s.optionalNullable(s.number()),
  fantasyAlarmPlayerId: s.optionalNullable(s.number()),
  statsPlayerId: s.optionalNullable(s.number()),
  sportsDirectPlayerId: s.optionalNullable(s.number()),
  xmlTeamPlayerId: s.optionalNullable(s.number()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  fanDuelPlayerId: s.optionalNullable(s.number()),
  draftKingsPlayerId: s.optionalNullable(s.number()),
  yahooPlayerId: s.optionalNullable(s.number()),
  fanDuelName: s.optionalNullable(s.string()),
  draftKingsName: s.optionalNullable(s.string()),
  yahooName: s.optionalNullable(s.string()),
  depthChartPosition: s.optionalNullable(s.string()),
  depthChartOrder: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.number()),
  usaTodayPlayerId: s.optionalNullable(s.number()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    position: "Position",
    jersey: "Jersey",
    catches: "Catches",
    shoots: "Shoots",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    photoUrl: "PhotoUrl",
    sportRadarPlayerId: "SportRadarPlayerID",
    rotoworldPlayerId: "RotoworldPlayerID",
    rotoWirePlayerId: "RotoWirePlayerID",
    fantasyAlarmPlayerId: "FantasyAlarmPlayerID",
    statsPlayerId: "StatsPlayerID",
    sportsDirectPlayerId: "SportsDirectPlayerID",
    xmlTeamPlayerId: "XmlTeamPlayerID",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    fanDuelPlayerId: "FanDuelPlayerID",
    draftKingsPlayerId: "DraftKingsPlayerID",
    yahooPlayerId: "YahooPlayerID",
    fanDuelName: "FanDuelName",
    draftKingsName: "DraftKingsName",
    yahooName: "YahooName",
    depthChartPosition: "DepthChartPosition",
    depthChartOrder: "DepthChartOrder",
    globalTeamId: "GlobalTeamID",
    fantasyDraftName: "FantasyDraftName",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
