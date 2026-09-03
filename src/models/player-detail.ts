import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { newsSchema, type News } from "./news.js";
import { playerSeason2Schema, type PlayerSeason2 } from "./player-season2.js";

export type PlayerDetail = {
  playerSeason?: PlayerSeason2;
  latestNews?: News[];
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
  experienceString?: string | null;
  birthDateString?: string | null;
  photoUrl?: string | null;
  byeWeek?: number | null;
  upcomingGameOpponent?: string | null;
  upcomingGameWeek?: number;
  shortName?: string | null;
  averageDraftPosition?: number | null;
  depthPositionCategory?: string | null;
  depthPosition?: string | null;
  depthOrder?: number | null;
  depthDisplayOrder?: number | null;
  currentTeam?: string | null;
  collegeDraftTeam?: string | null;
  collegeDraftYear?: number | null;
  collegeDraftRound?: number | null;
  collegeDraftPick?: number | null;
  isUndraftedFreeAgent?: boolean;
  heightFeet?: number | null;
  heightInches?: number | null;
  upcomingOpponentRank?: number | null;
  upcomingOpponentPositionRank?: number | null;
  currentStatus?: string | null;
  upcomingSalary?: number | null;
  fantasyAlarmPlayerId?: number | null;
  sportRadarPlayerId?: string | null;
  rotoworldPlayerId?: number | null;
  rotoWirePlayerId?: number | null;
  statsPlayerId?: number | null;
  sportsDirectPlayerId?: number | null;
  xmlTeamPlayerId?: number | null;
  fanDuelPlayerId?: number | null;
  draftKingsPlayerId?: number | null;
  yahooPlayerId?: number | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryStartDate?: string | null;
  injuryNotes?: string | null;
  fanDuelName?: string | null;
  draftKingsName?: string | null;
  yahooName?: string | null;
  fantasyPositionDepthOrder?: number | null;
  injuryPractice?: string | null;
  injuryPracticeDescription?: string | null;
  declaredInactive?: boolean;
  upcomingFanDuelSalary?: number | null;
  upcomingDraftKingsSalary?: number | null;
  upcomingYahooSalary?: number | null;
  teamId?: number | null;
  globalTeamId?: number | null;
  fantasyDraftPlayerId?: number | null;
  fantasyDraftName?: string | null;
  usaTodayPlayerId?: number | null;
  usaTodayHeadshotUrl?: string | null;
  usaTodayHeadshotNoBackgroundUrl?: string | null;
  usaTodayHeadshotUpdated?: string | null;
  usaTodayHeadshotNoBackgroundUpdated?: string | null;
};

export const playerDetailSchema: Schema<PlayerDetail> = s.object<PlayerDetail>({
  playerSeason: s.optional(s.lazy(() => playerSeason2Schema)),
  latestNews: s.optional(s.array(s.lazy(() => newsSchema))),
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
  experienceString: s.optionalNullable(s.string()),
  birthDateString: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  byeWeek: s.optionalNullable(s.number()),
  upcomingGameOpponent: s.optionalNullable(s.string()),
  upcomingGameWeek: s.optional(s.number()),
  shortName: s.optionalNullable(s.string()),
  averageDraftPosition: s.optionalNullable(s.number()),
  depthPositionCategory: s.optionalNullable(s.string()),
  depthPosition: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.number()),
  depthDisplayOrder: s.optionalNullable(s.number()),
  currentTeam: s.optionalNullable(s.string()),
  collegeDraftTeam: s.optionalNullable(s.string()),
  collegeDraftYear: s.optionalNullable(s.number()),
  collegeDraftRound: s.optionalNullable(s.number()),
  collegeDraftPick: s.optionalNullable(s.number()),
  isUndraftedFreeAgent: s.optional(s.boolean()),
  heightFeet: s.optionalNullable(s.number()),
  heightInches: s.optionalNullable(s.number()),
  upcomingOpponentRank: s.optionalNullable(s.number()),
  upcomingOpponentPositionRank: s.optionalNullable(s.number()),
  currentStatus: s.optionalNullable(s.string()),
  upcomingSalary: s.optionalNullable(s.number()),
  fantasyAlarmPlayerId: s.optionalNullable(s.number()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  rotoworldPlayerId: s.optionalNullable(s.number()),
  rotoWirePlayerId: s.optionalNullable(s.number()),
  statsPlayerId: s.optionalNullable(s.number()),
  sportsDirectPlayerId: s.optionalNullable(s.number()),
  xmlTeamPlayerId: s.optionalNullable(s.number()),
  fanDuelPlayerId: s.optionalNullable(s.number()),
  draftKingsPlayerId: s.optionalNullable(s.number()),
  yahooPlayerId: s.optionalNullable(s.number()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  fanDuelName: s.optionalNullable(s.string()),
  draftKingsName: s.optionalNullable(s.string()),
  yahooName: s.optionalNullable(s.string()),
  fantasyPositionDepthOrder: s.optionalNullable(s.number()),
  injuryPractice: s.optionalNullable(s.string()),
  injuryPracticeDescription: s.optionalNullable(s.string()),
  declaredInactive: s.optional(s.boolean()),
  upcomingFanDuelSalary: s.optionalNullable(s.number()),
  upcomingDraftKingsSalary: s.optionalNullable(s.number()),
  upcomingYahooSalary: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  fantasyDraftPlayerId: s.optionalNullable(s.number()),
  fantasyDraftName: s.optionalNullable(s.string()),
  usaTodayPlayerId: s.optionalNullable(s.number()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerSeason: "PlayerSeason",
    latestNews: "LatestNews",
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
    experienceString: "ExperienceString",
    birthDateString: "BirthDateString",
    photoUrl: "PhotoUrl",
    byeWeek: "ByeWeek",
    upcomingGameOpponent: "UpcomingGameOpponent",
    upcomingGameWeek: "UpcomingGameWeek",
    shortName: "ShortName",
    averageDraftPosition: "AverageDraftPosition",
    depthPositionCategory: "DepthPositionCategory",
    depthPosition: "DepthPosition",
    depthOrder: "DepthOrder",
    depthDisplayOrder: "DepthDisplayOrder",
    currentTeam: "CurrentTeam",
    collegeDraftTeam: "CollegeDraftTeam",
    collegeDraftYear: "CollegeDraftYear",
    collegeDraftRound: "CollegeDraftRound",
    collegeDraftPick: "CollegeDraftPick",
    isUndraftedFreeAgent: "IsUndraftedFreeAgent",
    heightFeet: "HeightFeet",
    heightInches: "HeightInches",
    upcomingOpponentRank: "UpcomingOpponentRank",
    upcomingOpponentPositionRank: "UpcomingOpponentPositionRank",
    currentStatus: "CurrentStatus",
    upcomingSalary: "UpcomingSalary",
    fantasyAlarmPlayerId: "FantasyAlarmPlayerID",
    sportRadarPlayerId: "SportRadarPlayerID",
    rotoworldPlayerId: "RotoworldPlayerID",
    rotoWirePlayerId: "RotoWirePlayerID",
    statsPlayerId: "StatsPlayerID",
    sportsDirectPlayerId: "SportsDirectPlayerID",
    xmlTeamPlayerId: "XmlTeamPlayerID",
    fanDuelPlayerId: "FanDuelPlayerID",
    draftKingsPlayerId: "DraftKingsPlayerID",
    yahooPlayerId: "YahooPlayerID",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    fanDuelName: "FanDuelName",
    draftKingsName: "DraftKingsName",
    yahooName: "YahooName",
    fantasyPositionDepthOrder: "FantasyPositionDepthOrder",
    injuryPractice: "InjuryPractice",
    injuryPracticeDescription: "InjuryPracticeDescription",
    declaredInactive: "DeclaredInactive",
    upcomingFanDuelSalary: "UpcomingFanDuelSalary",
    upcomingDraftKingsSalary: "UpcomingDraftKingsSalary",
    upcomingYahooSalary: "UpcomingYahooSalary",
    teamId: "TeamID",
    globalTeamId: "GlobalTeamID",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    fantasyDraftName: "FantasyDraftName",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
