import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player2 = {
  playerId?: number;
  sportsDataId?: string | null;
  status?: string | null;
  teamId?: number | null;
  team?: string | null;
  jersey?: number | null;
  positionCategory?: string | null;
  position?: string | null;
  mlbamid?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  batHand?: string | null;
  throwHand?: string | null;
  height?: number | null;
  weight?: number | null;
  birthDate?: string | null;
  birthCity?: string | null;
  birthState?: string | null;
  birthCountry?: string | null;
  highSchool?: string | null;
  college?: string | null;
  proDebut?: string | null;
  salary?: number | null;
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
  upcomingGameId?: number | null;
  fanDuelName?: string | null;
  draftKingsName?: string | null;
  yahooName?: string | null;
  globalTeamId?: number | null;
  fantasyDraftName?: string | null;
  fantasyDraftPlayerId?: number | null;
  experience?: string | null;
  usaTodayPlayerId?: number | null;
  usaTodayHeadshotUrl?: string | null;
  usaTodayHeadshotNoBackgroundUrl?: string | null;
  usaTodayHeadshotUpdated?: string | null;
  usaTodayHeadshotNoBackgroundUpdated?: string | null;
};

export const player2Schema: Schema<Player2> = s.object<Player2>({
  playerId: s.optional(s.number()),
  sportsDataId: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  mlbamid: s.optionalNullable(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  batHand: s.optionalNullable(s.string()),
  throwHand: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  highSchool: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  proDebut: s.optionalNullable(s.string()),
  salary: s.optionalNullable(s.number()),
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
  upcomingGameId: s.optionalNullable(s.number()),
  fanDuelName: s.optionalNullable(s.string()),
  draftKingsName: s.optionalNullable(s.string()),
  yahooName: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.number()),
  experience: s.optionalNullable(s.string()),
  usaTodayPlayerId: s.optionalNullable(s.number()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    sportsDataId: "SportsDataID",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    positionCategory: "PositionCategory",
    position: "Position",
    mlbamid: "MLBAMID",
    firstName: "FirstName",
    lastName: "LastName",
    batHand: "BatHand",
    throwHand: "ThrowHand",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    highSchool: "HighSchool",
    college: "College",
    proDebut: "ProDebut",
    salary: "Salary",
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
    upcomingGameId: "UpcomingGameID",
    fanDuelName: "FanDuelName",
    draftKingsName: "DraftKingsName",
    yahooName: "YahooName",
    globalTeamId: "GlobalTeamID",
    fantasyDraftName: "FantasyDraftName",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    experience: "Experience",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
