import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player1 = {
  playerId?: number;
  sportsDataId?: string | null;
  status?: string | null;
  teamId?: number | null;
  team?: string | null;
  jersey?: number | null;
  positionCategory?: string | null;
  position?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  height?: number | null;
  weight?: number | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  birthCountry?: string | null;
  highSchool?: string | null;
  college?: string | null;
  salary?: number | null;
  photoUrl?: string | null;
  experience?: number | null;
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
  nbaDotComPlayerId?: number | null;
};

export const player1Schema: Schema<Player1> = s.object<Player1>({
  playerId: s.optional(s.number()),
  sportsDataId: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  highSchool: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  salary: s.optionalNullable(s.number()),
  photoUrl: s.optionalNullable(s.string()),
  experience: s.optionalNullable(s.number()),
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
  nbaDotComPlayerId: s.optionalNullable(s.number()),
  _keysMap: {
    playerId: "PlayerID",
    sportsDataId: "SportsDataID",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    positionCategory: "PositionCategory",
    position: "Position",
    firstName: "FirstName",
    lastName: "LastName",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    highSchool: "HighSchool",
    college: "College",
    salary: "Salary",
    photoUrl: "PhotoUrl",
    experience: "Experience",
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
    nbaDotComPlayerId: "NbaDotComPlayerID",
  },
});
