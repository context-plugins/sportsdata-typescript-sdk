import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoringDetailSchema, type ScoringDetail } from "./scoring-detail.js";

export type PlayerSeason2 = {
  playerId?: number | null;
  seasonType?: number;
  season?: number;
  team?: string | null;
  number?: number;
  name?: string | null;
  position?: string | null;
  positionCategory?: string | null;
  activated?: number;
  played?: number;
  started?: number;
  passingAttempts?: number;
  passingCompletions?: number;
  passingYards?: number;
  passingCompletionPercentage?: number;
  passingYardsPerAttempt?: number;
  passingYardsPerCompletion?: number;
  passingTouchdowns?: number;
  passingInterceptions?: number;
  passingRating?: number;
  passingLong?: number;
  passingSacks?: number;
  passingSackYards?: number;
  rushingAttempts?: number;
  rushingYards?: number;
  rushingYardsPerAttempt?: number;
  rushingTouchdowns?: number;
  rushingLong?: number;
  receivingTargets?: number | null;
  receptions?: number;
  receivingYards?: number;
  receivingYardsPerReception?: number;
  receivingTouchdowns?: number;
  receivingLong?: number;
  fumbles?: number;
  fumblesLost?: number | null;
  puntReturns?: number;
  puntReturnYards?: number;
  puntReturnYardsPerAttempt?: number;
  puntReturnTouchdowns?: number;
  puntReturnLong?: number;
  kickReturns?: number;
  kickReturnYards?: number;
  kickReturnYardsPerAttempt?: number;
  kickReturnTouchdowns?: number;
  kickReturnLong?: number;
  soloTackles?: number;
  assistedTackles?: number;
  tacklesForLoss?: number | null;
  sacks?: number;
  sackYards?: number;
  quarterbackHits?: number | null;
  passesDefended?: number;
  fumblesForced?: number;
  fumblesRecovered?: number;
  fumbleReturnYards?: number;
  fumbleReturnTouchdowns?: number;
  interceptions?: number;
  interceptionReturnYards?: number;
  interceptionReturnTouchdowns?: number;
  blockedKicks?: number;
  specialTeamsSoloTackles?: number;
  specialTeamsAssistedTackles?: number;
  miscSoloTackles?: number;
  miscAssistedTackles?: number;
  punts?: number;
  puntYards?: number;
  puntAverage?: number;
  fieldGoalsAttempted?: number;
  fieldGoalsMade?: number;
  fieldGoalsLongestMade?: number;
  extraPointsMade?: number;
  twoPointConversionPasses?: number;
  twoPointConversionRuns?: number;
  twoPointConversionReceptions?: number;
  fantasyPoints?: number;
  fantasyPointsPpr?: number;
  receptionPercentage?: number;
  receivingYardsPerTarget?: number;
  tackles?: number;
  offensiveTouchdowns?: number;
  defensiveTouchdowns?: number;
  specialTeamsTouchdowns?: number;
  touchdowns?: number;
  fantasyPosition?: string | null;
  fieldGoalPercentage?: number;
  playerSeasonId?: number;
  fumblesOwnRecoveries?: number | null;
  fumblesOutOfBounds?: number | null;
  kickReturnFairCatches?: number | null;
  puntReturnFairCatches?: number | null;
  puntTouchbacks?: number | null;
  puntInside20?: number | null;
  puntNetAverage?: number | null;
  extraPointsAttempted?: number | null;
  blockedKickReturnTouchdowns?: number | null;
  fieldGoalReturnTouchdowns?: number | null;
  safeties?: number | null;
  fieldGoalsHadBlocked?: number | null;
  puntsHadBlocked?: number | null;
  extraPointsHadBlocked?: number | null;
  puntLong?: number | null;
  blockedKickReturnYards?: number | null;
  fieldGoalReturnYards?: number | null;
  puntNetYards?: number | null;
  specialTeamsFumblesForced?: number | null;
  specialTeamsFumblesRecovered?: number | null;
  miscFumblesForced?: number | null;
  miscFumblesRecovered?: number | null;
  shortName?: string | null;
  safetiesAllowed?: number | null;
  temperature?: number | null;
  humidity?: number | null;
  windSpeed?: number | null;
  offensiveSnapsPlayed?: number | null;
  defensiveSnapsPlayed?: number | null;
  specialTeamsSnapsPlayed?: number | null;
  offensiveTeamSnaps?: number | null;
  defensiveTeamSnaps?: number | null;
  specialTeamsTeamSnaps?: number | null;
  auctionValue?: number | null;
  auctionValuePpr?: number | null;
  twoPointConversionReturns?: number | null;
  fantasyPointsFanDuel?: number | null;
  fieldGoalsMade0To19?: number | null;
  fieldGoalsMade20To29?: number | null;
  fieldGoalsMade30To39?: number | null;
  fieldGoalsMade40To49?: number | null;
  fieldGoalsMade50Plus?: number | null;
  fantasyPointsDraftKings?: number | null;
  fantasyPointsYahoo?: number | null;
  averageDraftPosition?: number | null;
  averageDraftPositionPpr?: number | null;
  teamId?: number | null;
  globalTeamId?: number | null;
  fantasyPointsFantasyDraft?: number | null;
  scoringDetails?: ScoringDetail[];
  averageDraftPositionRookie?: number | null;
  averageDraftPositionDynasty?: number | null;
  averageDraftPosition2Qb?: number | null;
  offensiveFumbleRecoveryTouchdowns?: number | null;
};

export const playerSeason2Schema: Schema<PlayerSeason2> = s.object<PlayerSeason2>({
  playerId: s.optionalNullable(s.number()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  number: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  activated: s.optional(s.number()),
  played: s.optional(s.number()),
  started: s.optional(s.number()),
  passingAttempts: s.optional(s.number()),
  passingCompletions: s.optional(s.number()),
  passingYards: s.optional(s.number()),
  passingCompletionPercentage: s.optional(s.number()),
  passingYardsPerAttempt: s.optional(s.number()),
  passingYardsPerCompletion: s.optional(s.number()),
  passingTouchdowns: s.optional(s.number()),
  passingInterceptions: s.optional(s.number()),
  passingRating: s.optional(s.number()),
  passingLong: s.optional(s.number()),
  passingSacks: s.optional(s.number()),
  passingSackYards: s.optional(s.number()),
  rushingAttempts: s.optional(s.number()),
  rushingYards: s.optional(s.number()),
  rushingYardsPerAttempt: s.optional(s.number()),
  rushingTouchdowns: s.optional(s.number()),
  rushingLong: s.optional(s.number()),
  receivingTargets: s.optionalNullable(s.number()),
  receptions: s.optional(s.number()),
  receivingYards: s.optional(s.number()),
  receivingYardsPerReception: s.optional(s.number()),
  receivingTouchdowns: s.optional(s.number()),
  receivingLong: s.optional(s.number()),
  fumbles: s.optional(s.number()),
  fumblesLost: s.optionalNullable(s.number()),
  puntReturns: s.optional(s.number()),
  puntReturnYards: s.optional(s.number()),
  puntReturnYardsPerAttempt: s.optional(s.number()),
  puntReturnTouchdowns: s.optional(s.number()),
  puntReturnLong: s.optional(s.number()),
  kickReturns: s.optional(s.number()),
  kickReturnYards: s.optional(s.number()),
  kickReturnYardsPerAttempt: s.optional(s.number()),
  kickReturnTouchdowns: s.optional(s.number()),
  kickReturnLong: s.optional(s.number()),
  soloTackles: s.optional(s.number()),
  assistedTackles: s.optional(s.number()),
  tacklesForLoss: s.optionalNullable(s.number()),
  sacks: s.optional(s.number()),
  sackYards: s.optional(s.number()),
  quarterbackHits: s.optionalNullable(s.number()),
  passesDefended: s.optional(s.number()),
  fumblesForced: s.optional(s.number()),
  fumblesRecovered: s.optional(s.number()),
  fumbleReturnYards: s.optional(s.number()),
  fumbleReturnTouchdowns: s.optional(s.number()),
  interceptions: s.optional(s.number()),
  interceptionReturnYards: s.optional(s.number()),
  interceptionReturnTouchdowns: s.optional(s.number()),
  blockedKicks: s.optional(s.number()),
  specialTeamsSoloTackles: s.optional(s.number()),
  specialTeamsAssistedTackles: s.optional(s.number()),
  miscSoloTackles: s.optional(s.number()),
  miscAssistedTackles: s.optional(s.number()),
  punts: s.optional(s.number()),
  puntYards: s.optional(s.number()),
  puntAverage: s.optional(s.number()),
  fieldGoalsAttempted: s.optional(s.number()),
  fieldGoalsMade: s.optional(s.number()),
  fieldGoalsLongestMade: s.optional(s.number()),
  extraPointsMade: s.optional(s.number()),
  twoPointConversionPasses: s.optional(s.number()),
  twoPointConversionRuns: s.optional(s.number()),
  twoPointConversionReceptions: s.optional(s.number()),
  fantasyPoints: s.optional(s.number()),
  fantasyPointsPpr: s.optional(s.number()),
  receptionPercentage: s.optional(s.number()),
  receivingYardsPerTarget: s.optional(s.number()),
  tackles: s.optional(s.number()),
  offensiveTouchdowns: s.optional(s.number()),
  defensiveTouchdowns: s.optional(s.number()),
  specialTeamsTouchdowns: s.optional(s.number()),
  touchdowns: s.optional(s.number()),
  fantasyPosition: s.optionalNullable(s.string()),
  fieldGoalPercentage: s.optional(s.number()),
  playerSeasonId: s.optional(s.number()),
  fumblesOwnRecoveries: s.optionalNullable(s.number()),
  fumblesOutOfBounds: s.optionalNullable(s.number()),
  kickReturnFairCatches: s.optionalNullable(s.number()),
  puntReturnFairCatches: s.optionalNullable(s.number()),
  puntTouchbacks: s.optionalNullable(s.number()),
  puntInside20: s.optionalNullable(s.number()),
  puntNetAverage: s.optionalNullable(s.number()),
  extraPointsAttempted: s.optionalNullable(s.number()),
  blockedKickReturnTouchdowns: s.optionalNullable(s.number()),
  fieldGoalReturnTouchdowns: s.optionalNullable(s.number()),
  safeties: s.optionalNullable(s.number()),
  fieldGoalsHadBlocked: s.optionalNullable(s.number()),
  puntsHadBlocked: s.optionalNullable(s.number()),
  extraPointsHadBlocked: s.optionalNullable(s.number()),
  puntLong: s.optionalNullable(s.number()),
  blockedKickReturnYards: s.optionalNullable(s.number()),
  fieldGoalReturnYards: s.optionalNullable(s.number()),
  puntNetYards: s.optionalNullable(s.number()),
  specialTeamsFumblesForced: s.optionalNullable(s.number()),
  specialTeamsFumblesRecovered: s.optionalNullable(s.number()),
  miscFumblesForced: s.optionalNullable(s.number()),
  miscFumblesRecovered: s.optionalNullable(s.number()),
  shortName: s.optionalNullable(s.string()),
  safetiesAllowed: s.optionalNullable(s.number()),
  temperature: s.optionalNullable(s.number()),
  humidity: s.optionalNullable(s.number()),
  windSpeed: s.optionalNullable(s.number()),
  offensiveSnapsPlayed: s.optionalNullable(s.number()),
  defensiveSnapsPlayed: s.optionalNullable(s.number()),
  specialTeamsSnapsPlayed: s.optionalNullable(s.number()),
  offensiveTeamSnaps: s.optionalNullable(s.number()),
  defensiveTeamSnaps: s.optionalNullable(s.number()),
  specialTeamsTeamSnaps: s.optionalNullable(s.number()),
  auctionValue: s.optionalNullable(s.number()),
  auctionValuePpr: s.optionalNullable(s.number()),
  twoPointConversionReturns: s.optionalNullable(s.number()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fieldGoalsMade0To19: s.optionalNullable(s.number()),
  fieldGoalsMade20To29: s.optionalNullable(s.number()),
  fieldGoalsMade30To39: s.optionalNullable(s.number()),
  fieldGoalsMade40To49: s.optionalNullable(s.number()),
  fieldGoalsMade50Plus: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  averageDraftPosition: s.optionalNullable(s.number()),
  averageDraftPositionPpr: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.number()),
  scoringDetails: s.optional(s.array(s.lazy(() => scoringDetailSchema))),
  averageDraftPositionRookie: s.optionalNullable(s.number()),
  averageDraftPositionDynasty: s.optionalNullable(s.number()),
  averageDraftPosition2Qb: s.optionalNullable(s.number()),
  offensiveFumbleRecoveryTouchdowns: s.optionalNullable(s.number()),
  _keysMap: {
    playerId: "PlayerID",
    seasonType: "SeasonType",
    season: "Season",
    team: "Team",
    number: "Number",
    name: "Name",
    position: "Position",
    positionCategory: "PositionCategory",
    activated: "Activated",
    played: "Played",
    started: "Started",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingCompletionPercentage: "PassingCompletionPercentage",
    passingYardsPerAttempt: "PassingYardsPerAttempt",
    passingYardsPerCompletion: "PassingYardsPerCompletion",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingRating: "PassingRating",
    passingLong: "PassingLong",
    passingSacks: "PassingSacks",
    passingSackYards: "PassingSackYards",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingYardsPerAttempt: "RushingYardsPerAttempt",
    rushingTouchdowns: "RushingTouchdowns",
    rushingLong: "RushingLong",
    receivingTargets: "ReceivingTargets",
    receptions: "Receptions",
    receivingYards: "ReceivingYards",
    receivingYardsPerReception: "ReceivingYardsPerReception",
    receivingTouchdowns: "ReceivingTouchdowns",
    receivingLong: "ReceivingLong",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
    puntReturns: "PuntReturns",
    puntReturnYards: "PuntReturnYards",
    puntReturnYardsPerAttempt: "PuntReturnYardsPerAttempt",
    puntReturnTouchdowns: "PuntReturnTouchdowns",
    puntReturnLong: "PuntReturnLong",
    kickReturns: "KickReturns",
    kickReturnYards: "KickReturnYards",
    kickReturnYardsPerAttempt: "KickReturnYardsPerAttempt",
    kickReturnTouchdowns: "KickReturnTouchdowns",
    kickReturnLong: "KickReturnLong",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    tacklesForLoss: "TacklesForLoss",
    sacks: "Sacks",
    sackYards: "SackYards",
    quarterbackHits: "QuarterbackHits",
    passesDefended: "PassesDefended",
    fumblesForced: "FumblesForced",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnYards: "FumbleReturnYards",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    interceptions: "Interceptions",
    interceptionReturnYards: "InterceptionReturnYards",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    blockedKicks: "BlockedKicks",
    specialTeamsSoloTackles: "SpecialTeamsSoloTackles",
    specialTeamsAssistedTackles: "SpecialTeamsAssistedTackles",
    miscSoloTackles: "MiscSoloTackles",
    miscAssistedTackles: "MiscAssistedTackles",
    punts: "Punts",
    puntYards: "PuntYards",
    puntAverage: "PuntAverage",
    fieldGoalsAttempted: "FieldGoalsAttempted",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalsLongestMade: "FieldGoalsLongestMade",
    extraPointsMade: "ExtraPointsMade",
    twoPointConversionPasses: "TwoPointConversionPasses",
    twoPointConversionRuns: "TwoPointConversionRuns",
    twoPointConversionReceptions: "TwoPointConversionReceptions",
    fantasyPoints: "FantasyPoints",
    fantasyPointsPpr: "FantasyPointsPPR",
    receptionPercentage: "ReceptionPercentage",
    receivingYardsPerTarget: "ReceivingYardsPerTarget",
    tackles: "Tackles",
    offensiveTouchdowns: "OffensiveTouchdowns",
    defensiveTouchdowns: "DefensiveTouchdowns",
    specialTeamsTouchdowns: "SpecialTeamsTouchdowns",
    touchdowns: "Touchdowns",
    fantasyPosition: "FantasyPosition",
    fieldGoalPercentage: "FieldGoalPercentage",
    playerSeasonId: "PlayerSeasonID",
    fumblesOwnRecoveries: "FumblesOwnRecoveries",
    fumblesOutOfBounds: "FumblesOutOfBounds",
    kickReturnFairCatches: "KickReturnFairCatches",
    puntReturnFairCatches: "PuntReturnFairCatches",
    puntTouchbacks: "PuntTouchbacks",
    puntInside20: "PuntInside20",
    puntNetAverage: "PuntNetAverage",
    extraPointsAttempted: "ExtraPointsAttempted",
    blockedKickReturnTouchdowns: "BlockedKickReturnTouchdowns",
    fieldGoalReturnTouchdowns: "FieldGoalReturnTouchdowns",
    safeties: "Safeties",
    fieldGoalsHadBlocked: "FieldGoalsHadBlocked",
    puntsHadBlocked: "PuntsHadBlocked",
    extraPointsHadBlocked: "ExtraPointsHadBlocked",
    puntLong: "PuntLong",
    blockedKickReturnYards: "BlockedKickReturnYards",
    fieldGoalReturnYards: "FieldGoalReturnYards",
    puntNetYards: "PuntNetYards",
    specialTeamsFumblesForced: "SpecialTeamsFumblesForced",
    specialTeamsFumblesRecovered: "SpecialTeamsFumblesRecovered",
    miscFumblesForced: "MiscFumblesForced",
    miscFumblesRecovered: "MiscFumblesRecovered",
    shortName: "ShortName",
    safetiesAllowed: "SafetiesAllowed",
    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "WindSpeed",
    offensiveSnapsPlayed: "OffensiveSnapsPlayed",
    defensiveSnapsPlayed: "DefensiveSnapsPlayed",
    specialTeamsSnapsPlayed: "SpecialTeamsSnapsPlayed",
    offensiveTeamSnaps: "OffensiveTeamSnaps",
    defensiveTeamSnaps: "DefensiveTeamSnaps",
    specialTeamsTeamSnaps: "SpecialTeamsTeamSnaps",
    auctionValue: "AuctionValue",
    auctionValuePpr: "AuctionValuePPR",
    twoPointConversionReturns: "TwoPointConversionReturns",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fieldGoalsMade0To19: "FieldGoalsMade0to19",
    fieldGoalsMade20To29: "FieldGoalsMade20to29",
    fieldGoalsMade30To39: "FieldGoalsMade30to39",
    fieldGoalsMade40To49: "FieldGoalsMade40to49",
    fieldGoalsMade50Plus: "FieldGoalsMade50Plus",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    averageDraftPosition: "AverageDraftPosition",
    averageDraftPositionPpr: "AverageDraftPositionPPR",
    teamId: "TeamID",
    globalTeamId: "GlobalTeamID",
    fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
    scoringDetails: "ScoringDetails",
    averageDraftPositionRookie: "AverageDraftPositionRookie",
    averageDraftPositionDynasty: "AverageDraftPositionDynasty",
    averageDraftPosition2Qb: "AverageDraftPosition2QB",
    offensiveFumbleRecoveryTouchdowns: "OffensiveFumbleRecoveryTouchdowns",
  },
});
