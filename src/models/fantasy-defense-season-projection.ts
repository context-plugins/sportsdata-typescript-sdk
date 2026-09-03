import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoringDetailSchema, type ScoringDetail } from "./scoring-detail.js";

export type FantasyDefenseSeasonProjection = {
  seasonType?: number;
  season?: number;
  team?: string | null;
  pointsAllowed?: number;
  touchdownsScored?: number;
  soloTackles?: number;
  assistedTackles?: number;
  sacks?: number;
  sackYards?: number;
  passesDefended?: number;
  fumblesForced?: number;
  fumblesRecovered?: number;
  fumbleReturnYards?: number;
  fumbleReturnTouchdowns?: number;
  interceptions?: number;
  interceptionReturnYards?: number;
  interceptionReturnTouchdowns?: number;
  blockedKicks?: number;
  safeties?: number;
  puntReturns?: number;
  puntReturnYards?: number;
  puntReturnTouchdowns?: number;
  puntReturnLong?: number;
  kickReturns?: number;
  kickReturnYards?: number;
  kickReturnTouchdowns?: number;
  kickReturnLong?: number;
  blockedKickReturnTouchdowns?: number | null;
  fieldGoalReturnTouchdowns?: number | null;
  fantasyPointsAllowed?: number | null;
  quarterbackFantasyPointsAllowed?: number | null;
  runningbackFantasyPointsAllowed?: number | null;
  wideReceiverFantasyPointsAllowed?: number | null;
  tightEndFantasyPointsAllowed?: number | null;
  kickerFantasyPointsAllowed?: number | null;
  games?: number | null;
  blockedKickReturnYards?: number | null;
  fieldGoalReturnYards?: number | null;
  quarterbackHits?: number | null;
  tacklesForLoss?: number | null;
  defensiveTouchdowns?: number | null;
  specialTeamsTouchdowns?: number | null;
  fantasyPoints?: number | null;
  temperature?: number | null;
  humidity?: number | null;
  windSpeed?: number | null;
  thirdDownAttempts?: number | null;
  thirdDownConversions?: number | null;
  fourthDownAttempts?: number | null;
  fourthDownConversions?: number | null;
  pointsAllowedByDefenseSpecialTeams?: number | null;
  auctionValue?: number | null;
  auctionValuePpr?: number | null;
  twoPointConversionReturns?: number | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsDraftKings?: number | null;
  offensiveYardsAllowed?: number | null;
  playerId?: number | null;
  fantasyPointsYahoo?: number | null;
  averageDraftPosition?: number | null;
  averageDraftPositionPpr?: number | null;
  teamId?: number | null;
  globalTeamId?: number | null;
  fanDuelFantasyPointsAllowed?: number | null;
  fanDuelQuarterbackFantasyPointsAllowed?: number | null;
  fanDuelRunningbackFantasyPointsAllowed?: number | null;
  fanDuelWideReceiverFantasyPointsAllowed?: number | null;
  fanDuelTightEndFantasyPointsAllowed?: number | null;
  fanDuelKickerFantasyPointsAllowed?: number | null;
  draftKingsFantasyPointsAllowed?: number | null;
  draftKingsQuarterbackFantasyPointsAllowed?: number | null;
  draftKingsRunningbackFantasyPointsAllowed?: number | null;
  draftKingsWideReceiverFantasyPointsAllowed?: number | null;
  draftKingsTightEndFantasyPointsAllowed?: number | null;
  draftKingsKickerFantasyPointsAllowed?: number | null;
  yahooFantasyPointsAllowed?: number | null;
  yahooQuarterbackFantasyPointsAllowed?: number | null;
  yahooRunningbackFantasyPointsAllowed?: number | null;
  yahooWideReceiverFantasyPointsAllowed?: number | null;
  yahooTightEndFantasyPointsAllowed?: number | null;
  yahooKickerFantasyPointsAllowed?: number | null;
  fantasyPointsFantasyDraft?: number | null;
  fantasyDraftFantasyPointsAllowed?: number | null;
  fantasyDraftQuarterbackFantasyPointsAllowed?: number | null;
  fantasyDraftRunningbackFantasyPointsAllowed?: number | null;
  fantasyDraftWideReceiverFantasyPointsAllowed?: number | null;
  fantasyDraftTightEndFantasyPointsAllowed?: number | null;
  fantasyDraftKickerFantasyPointsAllowed?: number | null;
  scoringDetails?: ScoringDetail[];
  averageDraftPositionDynasty?: number | null;
  averageDraftPosition2Qb?: number | null;
};

export const fantasyDefenseSeasonProjectionSchema: Schema<FantasyDefenseSeasonProjection> =
  s.object<FantasyDefenseSeasonProjection>({
    seasonType: s.optional(s.number()),
    season: s.optional(s.number()),
    team: s.optionalNullable(s.string()),
    pointsAllowed: s.optional(s.number()),
    touchdownsScored: s.optional(s.number()),
    soloTackles: s.optional(s.number()),
    assistedTackles: s.optional(s.number()),
    sacks: s.optional(s.number()),
    sackYards: s.optional(s.number()),
    passesDefended: s.optional(s.number()),
    fumblesForced: s.optional(s.number()),
    fumblesRecovered: s.optional(s.number()),
    fumbleReturnYards: s.optional(s.number()),
    fumbleReturnTouchdowns: s.optional(s.number()),
    interceptions: s.optional(s.number()),
    interceptionReturnYards: s.optional(s.number()),
    interceptionReturnTouchdowns: s.optional(s.number()),
    blockedKicks: s.optional(s.number()),
    safeties: s.optional(s.number()),
    puntReturns: s.optional(s.number()),
    puntReturnYards: s.optional(s.number()),
    puntReturnTouchdowns: s.optional(s.number()),
    puntReturnLong: s.optional(s.number()),
    kickReturns: s.optional(s.number()),
    kickReturnYards: s.optional(s.number()),
    kickReturnTouchdowns: s.optional(s.number()),
    kickReturnLong: s.optional(s.number()),
    blockedKickReturnTouchdowns: s.optionalNullable(s.number()),
    fieldGoalReturnTouchdowns: s.optionalNullable(s.number()),
    fantasyPointsAllowed: s.optionalNullable(s.number()),
    quarterbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    runningbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    wideReceiverFantasyPointsAllowed: s.optionalNullable(s.number()),
    tightEndFantasyPointsAllowed: s.optionalNullable(s.number()),
    kickerFantasyPointsAllowed: s.optionalNullable(s.number()),
    games: s.optionalNullable(s.number()),
    blockedKickReturnYards: s.optionalNullable(s.number()),
    fieldGoalReturnYards: s.optionalNullable(s.number()),
    quarterbackHits: s.optionalNullable(s.number()),
    tacklesForLoss: s.optionalNullable(s.number()),
    defensiveTouchdowns: s.optionalNullable(s.number()),
    specialTeamsTouchdowns: s.optionalNullable(s.number()),
    fantasyPoints: s.optionalNullable(s.number()),
    temperature: s.optionalNullable(s.number()),
    humidity: s.optionalNullable(s.number()),
    windSpeed: s.optionalNullable(s.number()),
    thirdDownAttempts: s.optionalNullable(s.number()),
    thirdDownConversions: s.optionalNullable(s.number()),
    fourthDownAttempts: s.optionalNullable(s.number()),
    fourthDownConversions: s.optionalNullable(s.number()),
    pointsAllowedByDefenseSpecialTeams: s.optionalNullable(s.number()),
    auctionValue: s.optionalNullable(s.number()),
    auctionValuePpr: s.optionalNullable(s.number()),
    twoPointConversionReturns: s.optionalNullable(s.number()),
    fantasyPointsFanDuel: s.optionalNullable(s.number()),
    fantasyPointsDraftKings: s.optionalNullable(s.number()),
    offensiveYardsAllowed: s.optionalNullable(s.number()),
    playerId: s.optionalNullable(s.number()),
    fantasyPointsYahoo: s.optionalNullable(s.number()),
    averageDraftPosition: s.optionalNullable(s.number()),
    averageDraftPositionPpr: s.optionalNullable(s.number()),
    teamId: s.optionalNullable(s.number()),
    globalTeamId: s.optionalNullable(s.number()),
    fanDuelFantasyPointsAllowed: s.optionalNullable(s.number()),
    fanDuelQuarterbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    fanDuelRunningbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    fanDuelWideReceiverFantasyPointsAllowed: s.optionalNullable(s.number()),
    fanDuelTightEndFantasyPointsAllowed: s.optionalNullable(s.number()),
    fanDuelKickerFantasyPointsAllowed: s.optionalNullable(s.number()),
    draftKingsFantasyPointsAllowed: s.optionalNullable(s.number()),
    draftKingsQuarterbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    draftKingsRunningbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    draftKingsWideReceiverFantasyPointsAllowed: s.optionalNullable(s.number()),
    draftKingsTightEndFantasyPointsAllowed: s.optionalNullable(s.number()),
    draftKingsKickerFantasyPointsAllowed: s.optionalNullable(s.number()),
    yahooFantasyPointsAllowed: s.optionalNullable(s.number()),
    yahooQuarterbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    yahooRunningbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    yahooWideReceiverFantasyPointsAllowed: s.optionalNullable(s.number()),
    yahooTightEndFantasyPointsAllowed: s.optionalNullable(s.number()),
    yahooKickerFantasyPointsAllowed: s.optionalNullable(s.number()),
    fantasyPointsFantasyDraft: s.optionalNullable(s.number()),
    fantasyDraftFantasyPointsAllowed: s.optionalNullable(s.number()),
    fantasyDraftQuarterbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    fantasyDraftRunningbackFantasyPointsAllowed: s.optionalNullable(s.number()),
    fantasyDraftWideReceiverFantasyPointsAllowed: s.optionalNullable(s.number()),
    fantasyDraftTightEndFantasyPointsAllowed: s.optionalNullable(s.number()),
    fantasyDraftKickerFantasyPointsAllowed: s.optionalNullable(s.number()),
    scoringDetails: s.optional(s.array(s.lazy(() => scoringDetailSchema))),
    averageDraftPositionDynasty: s.optionalNullable(s.number()),
    averageDraftPosition2Qb: s.optionalNullable(s.number()),
    _keysMap: {
      seasonType: "SeasonType",
      season: "Season",
      team: "Team",
      pointsAllowed: "PointsAllowed",
      touchdownsScored: "TouchdownsScored",
      soloTackles: "SoloTackles",
      assistedTackles: "AssistedTackles",
      sacks: "Sacks",
      sackYards: "SackYards",
      passesDefended: "PassesDefended",
      fumblesForced: "FumblesForced",
      fumblesRecovered: "FumblesRecovered",
      fumbleReturnYards: "FumbleReturnYards",
      fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
      interceptions: "Interceptions",
      interceptionReturnYards: "InterceptionReturnYards",
      interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
      blockedKicks: "BlockedKicks",
      safeties: "Safeties",
      puntReturns: "PuntReturns",
      puntReturnYards: "PuntReturnYards",
      puntReturnTouchdowns: "PuntReturnTouchdowns",
      puntReturnLong: "PuntReturnLong",
      kickReturns: "KickReturns",
      kickReturnYards: "KickReturnYards",
      kickReturnTouchdowns: "KickReturnTouchdowns",
      kickReturnLong: "KickReturnLong",
      blockedKickReturnTouchdowns: "BlockedKickReturnTouchdowns",
      fieldGoalReturnTouchdowns: "FieldGoalReturnTouchdowns",
      fantasyPointsAllowed: "FantasyPointsAllowed",
      quarterbackFantasyPointsAllowed: "QuarterbackFantasyPointsAllowed",
      runningbackFantasyPointsAllowed: "RunningbackFantasyPointsAllowed",
      wideReceiverFantasyPointsAllowed: "WideReceiverFantasyPointsAllowed",
      tightEndFantasyPointsAllowed: "TightEndFantasyPointsAllowed",
      kickerFantasyPointsAllowed: "KickerFantasyPointsAllowed",
      games: "Games",
      blockedKickReturnYards: "BlockedKickReturnYards",
      fieldGoalReturnYards: "FieldGoalReturnYards",
      quarterbackHits: "QuarterbackHits",
      tacklesForLoss: "TacklesForLoss",
      defensiveTouchdowns: "DefensiveTouchdowns",
      specialTeamsTouchdowns: "SpecialTeamsTouchdowns",
      fantasyPoints: "FantasyPoints",
      temperature: "Temperature",
      humidity: "Humidity",
      windSpeed: "WindSpeed",
      thirdDownAttempts: "ThirdDownAttempts",
      thirdDownConversions: "ThirdDownConversions",
      fourthDownAttempts: "FourthDownAttempts",
      fourthDownConversions: "FourthDownConversions",
      pointsAllowedByDefenseSpecialTeams: "PointsAllowedByDefenseSpecialTeams",
      auctionValue: "AuctionValue",
      auctionValuePpr: "AuctionValuePPR",
      twoPointConversionReturns: "TwoPointConversionReturns",
      fantasyPointsFanDuel: "FantasyPointsFanDuel",
      fantasyPointsDraftKings: "FantasyPointsDraftKings",
      offensiveYardsAllowed: "OffensiveYardsAllowed",
      playerId: "PlayerID",
      fantasyPointsYahoo: "FantasyPointsYahoo",
      averageDraftPosition: "AverageDraftPosition",
      averageDraftPositionPpr: "AverageDraftPositionPPR",
      teamId: "TeamID",
      globalTeamId: "GlobalTeamID",
      fanDuelFantasyPointsAllowed: "FanDuelFantasyPointsAllowed",
      fanDuelQuarterbackFantasyPointsAllowed: "FanDuelQuarterbackFantasyPointsAllowed",
      fanDuelRunningbackFantasyPointsAllowed: "FanDuelRunningbackFantasyPointsAllowed",
      fanDuelWideReceiverFantasyPointsAllowed: "FanDuelWideReceiverFantasyPointsAllowed",
      fanDuelTightEndFantasyPointsAllowed: "FanDuelTightEndFantasyPointsAllowed",
      fanDuelKickerFantasyPointsAllowed: "FanDuelKickerFantasyPointsAllowed",
      draftKingsFantasyPointsAllowed: "DraftKingsFantasyPointsAllowed",
      draftKingsQuarterbackFantasyPointsAllowed: "DraftKingsQuarterbackFantasyPointsAllowed",
      draftKingsRunningbackFantasyPointsAllowed: "DraftKingsRunningbackFantasyPointsAllowed",
      draftKingsWideReceiverFantasyPointsAllowed: "DraftKingsWideReceiverFantasyPointsAllowed",
      draftKingsTightEndFantasyPointsAllowed: "DraftKingsTightEndFantasyPointsAllowed",
      draftKingsKickerFantasyPointsAllowed: "DraftKingsKickerFantasyPointsAllowed",
      yahooFantasyPointsAllowed: "YahooFantasyPointsAllowed",
      yahooQuarterbackFantasyPointsAllowed: "YahooQuarterbackFantasyPointsAllowed",
      yahooRunningbackFantasyPointsAllowed: "YahooRunningbackFantasyPointsAllowed",
      yahooWideReceiverFantasyPointsAllowed: "YahooWideReceiverFantasyPointsAllowed",
      yahooTightEndFantasyPointsAllowed: "YahooTightEndFantasyPointsAllowed",
      yahooKickerFantasyPointsAllowed: "YahooKickerFantasyPointsAllowed",
      fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
      fantasyDraftFantasyPointsAllowed: "FantasyDraftFantasyPointsAllowed",
      fantasyDraftQuarterbackFantasyPointsAllowed: "FantasyDraftQuarterbackFantasyPointsAllowed",
      fantasyDraftRunningbackFantasyPointsAllowed: "FantasyDraftRunningbackFantasyPointsAllowed",
      fantasyDraftWideReceiverFantasyPointsAllowed: "FantasyDraftWideReceiverFantasyPointsAllowed",
      fantasyDraftTightEndFantasyPointsAllowed: "FantasyDraftTightEndFantasyPointsAllowed",
      fantasyDraftKickerFantasyPointsAllowed: "FantasyDraftKickerFantasyPointsAllowed",
      scoringDetails: "ScoringDetails",
      averageDraftPositionDynasty: "AverageDraftPositionDynasty",
      averageDraftPosition2Qb: "AverageDraftPosition2QB",
    },
  });
