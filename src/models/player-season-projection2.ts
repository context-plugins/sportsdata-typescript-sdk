import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerSeasonProjection2 = {
  statId?: number;
  teamId?: number | null;
  playerId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  name?: string | null;
  team?: string | null;
  position?: string | null;
  positionCategory?: string | null;
  started?: number | null;
  battingOrder?: number | null;
  globalTeamId?: number | null;
  averageDraftPosition?: number | null;
  auctionValue?: number | null;
  updated?: string | null;
  games?: number | null;
  fantasyPoints?: number | null;
  atBats?: number | null;
  runs?: number | null;
  hits?: number | null;
  singles?: number | null;
  doubles?: number | null;
  triples?: number | null;
  homeRuns?: number | null;
  runsBattedIn?: number | null;
  battingAverage?: number | null;
  outs?: number | null;
  strikeouts?: number | null;
  walks?: number | null;
  hitByPitch?: number | null;
  sacrifices?: number | null;
  sacrificeFlies?: number | null;
  groundIntoDoublePlay?: number | null;
  stolenBases?: number | null;
  caughtStealing?: number | null;
  pitchesSeen?: number | null;
  onBasePercentage?: number | null;
  sluggingPercentage?: number | null;
  onBasePlusSlugging?: number | null;
  errors?: number | null;
  wins?: number | null;
  losses?: number | null;
  saves?: number | null;
  inningsPitchedDecimal?: number | null;
  totalOutsPitched?: number | null;
  inningsPitchedFull?: number | null;
  inningsPitchedOuts?: number | null;
  earnedRunAverage?: number | null;
  pitchingHits?: number | null;
  pitchingRuns?: number | null;
  pitchingEarnedRuns?: number | null;
  pitchingWalks?: number | null;
  pitchingStrikeouts?: number | null;
  pitchingHomeRuns?: number | null;
  pitchesThrown?: number | null;
  pitchesThrownStrikes?: number | null;
  walksHitsPerInningsPitched?: number | null;
  pitchingBattingAverageAgainst?: number | null;
  grandSlams?: number | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsDraftKings?: number | null;
  fantasyPointsYahoo?: number | null;
  plateAppearances?: number | null;
  totalBases?: number | null;
  flyOuts?: number | null;
  groundOuts?: number | null;
  lineOuts?: number | null;
  popOuts?: number | null;
  intentionalWalks?: number | null;
  reachedOnError?: number | null;
  ballsInPlay?: number | null;
  battingAverageOnBallsInPlay?: number | null;
  weightedOnBasePercentage?: number | null;
  pitchingSingles?: number | null;
  pitchingDoubles?: number | null;
  pitchingTriples?: number | null;
  pitchingGrandSlams?: number | null;
  pitchingHitByPitch?: number | null;
  pitchingSacrifices?: number | null;
  pitchingSacrificeFlies?: number | null;
  pitchingGroundIntoDoublePlay?: number | null;
  pitchingCompleteGames?: number | null;
  pitchingShutOuts?: number | null;
  pitchingNoHitters?: number | null;
  pitchingPerfectGames?: number | null;
  pitchingPlateAppearances?: number | null;
  pitchingTotalBases?: number | null;
  pitchingFlyOuts?: number | null;
  pitchingGroundOuts?: number | null;
  pitchingLineOuts?: number | null;
  pitchingPopOuts?: number | null;
  pitchingIntentionalWalks?: number | null;
  pitchingReachedOnError?: number | null;
  pitchingCatchersInterference?: number | null;
  pitchingBallsInPlay?: number | null;
  pitchingOnBasePercentage?: number | null;
  pitchingSluggingPercentage?: number | null;
  pitchingOnBasePlusSlugging?: number | null;
  pitchingStrikeoutsPerNineInnings?: number | null;
  pitchingWalksPerNineInnings?: number | null;
  pitchingBattingAverageOnBallsInPlay?: number | null;
  pitchingWeightedOnBasePercentage?: number | null;
  doublePlays?: number | null;
  pitchingDoublePlays?: number | null;
  battingOrderConfirmed?: boolean | null;
  isolatedPower?: number | null;
  fieldingIndependentPitching?: number | null;
  pitchingQualityStarts?: number | null;
  pitchingInningStarted?: number | null;
  leftOnBase?: number | null;
  pitchingHolds?: number | null;
  pitchingBlownSaves?: number | null;
  substituteBattingOrder?: number | null;
  substituteBattingOrderSequence?: number | null;
  fantasyPointsFantasyDraft?: number | null;
  fantasyPointsBatting?: number | null;
  fantasyPointsPitching?: number | null;
};

export const playerSeasonProjection2Schema: Schema<PlayerSeasonProjection2> =
  s.object<PlayerSeasonProjection2>({
    statId: s.optional(s.number()),
    teamId: s.optionalNullable(s.number()),
    playerId: s.optionalNullable(s.number()),
    seasonType: s.optionalNullable(s.number()),
    season: s.optionalNullable(s.number()),
    name: s.optionalNullable(s.string()),
    team: s.optionalNullable(s.string()),
    position: s.optionalNullable(s.string()),
    positionCategory: s.optionalNullable(s.string()),
    started: s.optionalNullable(s.number()),
    battingOrder: s.optionalNullable(s.number()),
    globalTeamId: s.optionalNullable(s.number()),
    averageDraftPosition: s.optionalNullable(s.number()),
    auctionValue: s.optionalNullable(s.number()),
    updated: s.optionalNullable(s.string()),
    games: s.optionalNullable(s.number()),
    fantasyPoints: s.optionalNullable(s.number()),
    atBats: s.optionalNullable(s.number()),
    runs: s.optionalNullable(s.number()),
    hits: s.optionalNullable(s.number()),
    singles: s.optionalNullable(s.number()),
    doubles: s.optionalNullable(s.number()),
    triples: s.optionalNullable(s.number()),
    homeRuns: s.optionalNullable(s.number()),
    runsBattedIn: s.optionalNullable(s.number()),
    battingAverage: s.optionalNullable(s.number()),
    outs: s.optionalNullable(s.number()),
    strikeouts: s.optionalNullable(s.number()),
    walks: s.optionalNullable(s.number()),
    hitByPitch: s.optionalNullable(s.number()),
    sacrifices: s.optionalNullable(s.number()),
    sacrificeFlies: s.optionalNullable(s.number()),
    groundIntoDoublePlay: s.optionalNullable(s.number()),
    stolenBases: s.optionalNullable(s.number()),
    caughtStealing: s.optionalNullable(s.number()),
    pitchesSeen: s.optionalNullable(s.number()),
    onBasePercentage: s.optionalNullable(s.number()),
    sluggingPercentage: s.optionalNullable(s.number()),
    onBasePlusSlugging: s.optionalNullable(s.number()),
    errors: s.optionalNullable(s.number()),
    wins: s.optionalNullable(s.number()),
    losses: s.optionalNullable(s.number()),
    saves: s.optionalNullable(s.number()),
    inningsPitchedDecimal: s.optionalNullable(s.number()),
    totalOutsPitched: s.optionalNullable(s.number()),
    inningsPitchedFull: s.optionalNullable(s.number()),
    inningsPitchedOuts: s.optionalNullable(s.number()),
    earnedRunAverage: s.optionalNullable(s.number()),
    pitchingHits: s.optionalNullable(s.number()),
    pitchingRuns: s.optionalNullable(s.number()),
    pitchingEarnedRuns: s.optionalNullable(s.number()),
    pitchingWalks: s.optionalNullable(s.number()),
    pitchingStrikeouts: s.optionalNullable(s.number()),
    pitchingHomeRuns: s.optionalNullable(s.number()),
    pitchesThrown: s.optionalNullable(s.number()),
    pitchesThrownStrikes: s.optionalNullable(s.number()),
    walksHitsPerInningsPitched: s.optionalNullable(s.number()),
    pitchingBattingAverageAgainst: s.optionalNullable(s.number()),
    grandSlams: s.optionalNullable(s.number()),
    fantasyPointsFanDuel: s.optionalNullable(s.number()),
    fantasyPointsDraftKings: s.optionalNullable(s.number()),
    fantasyPointsYahoo: s.optionalNullable(s.number()),
    plateAppearances: s.optionalNullable(s.number()),
    totalBases: s.optionalNullable(s.number()),
    flyOuts: s.optionalNullable(s.number()),
    groundOuts: s.optionalNullable(s.number()),
    lineOuts: s.optionalNullable(s.number()),
    popOuts: s.optionalNullable(s.number()),
    intentionalWalks: s.optionalNullable(s.number()),
    reachedOnError: s.optionalNullable(s.number()),
    ballsInPlay: s.optionalNullable(s.number()),
    battingAverageOnBallsInPlay: s.optionalNullable(s.number()),
    weightedOnBasePercentage: s.optionalNullable(s.number()),
    pitchingSingles: s.optionalNullable(s.number()),
    pitchingDoubles: s.optionalNullable(s.number()),
    pitchingTriples: s.optionalNullable(s.number()),
    pitchingGrandSlams: s.optionalNullable(s.number()),
    pitchingHitByPitch: s.optionalNullable(s.number()),
    pitchingSacrifices: s.optionalNullable(s.number()),
    pitchingSacrificeFlies: s.optionalNullable(s.number()),
    pitchingGroundIntoDoublePlay: s.optionalNullable(s.number()),
    pitchingCompleteGames: s.optionalNullable(s.number()),
    pitchingShutOuts: s.optionalNullable(s.number()),
    pitchingNoHitters: s.optionalNullable(s.number()),
    pitchingPerfectGames: s.optionalNullable(s.number()),
    pitchingPlateAppearances: s.optionalNullable(s.number()),
    pitchingTotalBases: s.optionalNullable(s.number()),
    pitchingFlyOuts: s.optionalNullable(s.number()),
    pitchingGroundOuts: s.optionalNullable(s.number()),
    pitchingLineOuts: s.optionalNullable(s.number()),
    pitchingPopOuts: s.optionalNullable(s.number()),
    pitchingIntentionalWalks: s.optionalNullable(s.number()),
    pitchingReachedOnError: s.optionalNullable(s.number()),
    pitchingCatchersInterference: s.optionalNullable(s.number()),
    pitchingBallsInPlay: s.optionalNullable(s.number()),
    pitchingOnBasePercentage: s.optionalNullable(s.number()),
    pitchingSluggingPercentage: s.optionalNullable(s.number()),
    pitchingOnBasePlusSlugging: s.optionalNullable(s.number()),
    pitchingStrikeoutsPerNineInnings: s.optionalNullable(s.number()),
    pitchingWalksPerNineInnings: s.optionalNullable(s.number()),
    pitchingBattingAverageOnBallsInPlay: s.optionalNullable(s.number()),
    pitchingWeightedOnBasePercentage: s.optionalNullable(s.number()),
    doublePlays: s.optionalNullable(s.number()),
    pitchingDoublePlays: s.optionalNullable(s.number()),
    battingOrderConfirmed: s.optionalNullable(s.boolean()),
    isolatedPower: s.optionalNullable(s.number()),
    fieldingIndependentPitching: s.optionalNullable(s.number()),
    pitchingQualityStarts: s.optionalNullable(s.number()),
    pitchingInningStarted: s.optionalNullable(s.number()),
    leftOnBase: s.optionalNullable(s.number()),
    pitchingHolds: s.optionalNullable(s.number()),
    pitchingBlownSaves: s.optionalNullable(s.number()),
    substituteBattingOrder: s.optionalNullable(s.number()),
    substituteBattingOrderSequence: s.optionalNullable(s.number()),
    fantasyPointsFantasyDraft: s.optionalNullable(s.number()),
    fantasyPointsBatting: s.optionalNullable(s.number()),
    fantasyPointsPitching: s.optionalNullable(s.number()),
    _keysMap: {
      statId: "StatID",
      teamId: "TeamID",
      playerId: "PlayerID",
      seasonType: "SeasonType",
      season: "Season",
      name: "Name",
      team: "Team",
      position: "Position",
      positionCategory: "PositionCategory",
      started: "Started",
      battingOrder: "BattingOrder",
      globalTeamId: "GlobalTeamID",
      averageDraftPosition: "AverageDraftPosition",
      auctionValue: "AuctionValue",
      updated: "Updated",
      games: "Games",
      fantasyPoints: "FantasyPoints",
      atBats: "AtBats",
      runs: "Runs",
      hits: "Hits",
      singles: "Singles",
      doubles: "Doubles",
      triples: "Triples",
      homeRuns: "HomeRuns",
      runsBattedIn: "RunsBattedIn",
      battingAverage: "BattingAverage",
      outs: "Outs",
      strikeouts: "Strikeouts",
      walks: "Walks",
      hitByPitch: "HitByPitch",
      sacrifices: "Sacrifices",
      sacrificeFlies: "SacrificeFlies",
      groundIntoDoublePlay: "GroundIntoDoublePlay",
      stolenBases: "StolenBases",
      caughtStealing: "CaughtStealing",
      pitchesSeen: "PitchesSeen",
      onBasePercentage: "OnBasePercentage",
      sluggingPercentage: "SluggingPercentage",
      onBasePlusSlugging: "OnBasePlusSlugging",
      errors: "Errors",
      wins: "Wins",
      losses: "Losses",
      saves: "Saves",
      inningsPitchedDecimal: "InningsPitchedDecimal",
      totalOutsPitched: "TotalOutsPitched",
      inningsPitchedFull: "InningsPitchedFull",
      inningsPitchedOuts: "InningsPitchedOuts",
      earnedRunAverage: "EarnedRunAverage",
      pitchingHits: "PitchingHits",
      pitchingRuns: "PitchingRuns",
      pitchingEarnedRuns: "PitchingEarnedRuns",
      pitchingWalks: "PitchingWalks",
      pitchingStrikeouts: "PitchingStrikeouts",
      pitchingHomeRuns: "PitchingHomeRuns",
      pitchesThrown: "PitchesThrown",
      pitchesThrownStrikes: "PitchesThrownStrikes",
      walksHitsPerInningsPitched: "WalksHitsPerInningsPitched",
      pitchingBattingAverageAgainst: "PitchingBattingAverageAgainst",
      grandSlams: "GrandSlams",
      fantasyPointsFanDuel: "FantasyPointsFanDuel",
      fantasyPointsDraftKings: "FantasyPointsDraftKings",
      fantasyPointsYahoo: "FantasyPointsYahoo",
      plateAppearances: "PlateAppearances",
      totalBases: "TotalBases",
      flyOuts: "FlyOuts",
      groundOuts: "GroundOuts",
      lineOuts: "LineOuts",
      popOuts: "PopOuts",
      intentionalWalks: "IntentionalWalks",
      reachedOnError: "ReachedOnError",
      ballsInPlay: "BallsInPlay",
      battingAverageOnBallsInPlay: "BattingAverageOnBallsInPlay",
      weightedOnBasePercentage: "WeightedOnBasePercentage",
      pitchingSingles: "PitchingSingles",
      pitchingDoubles: "PitchingDoubles",
      pitchingTriples: "PitchingTriples",
      pitchingGrandSlams: "PitchingGrandSlams",
      pitchingHitByPitch: "PitchingHitByPitch",
      pitchingSacrifices: "PitchingSacrifices",
      pitchingSacrificeFlies: "PitchingSacrificeFlies",
      pitchingGroundIntoDoublePlay: "PitchingGroundIntoDoublePlay",
      pitchingCompleteGames: "PitchingCompleteGames",
      pitchingShutOuts: "PitchingShutOuts",
      pitchingNoHitters: "PitchingNoHitters",
      pitchingPerfectGames: "PitchingPerfectGames",
      pitchingPlateAppearances: "PitchingPlateAppearances",
      pitchingTotalBases: "PitchingTotalBases",
      pitchingFlyOuts: "PitchingFlyOuts",
      pitchingGroundOuts: "PitchingGroundOuts",
      pitchingLineOuts: "PitchingLineOuts",
      pitchingPopOuts: "PitchingPopOuts",
      pitchingIntentionalWalks: "PitchingIntentionalWalks",
      pitchingReachedOnError: "PitchingReachedOnError",
      pitchingCatchersInterference: "PitchingCatchersInterference",
      pitchingBallsInPlay: "PitchingBallsInPlay",
      pitchingOnBasePercentage: "PitchingOnBasePercentage",
      pitchingSluggingPercentage: "PitchingSluggingPercentage",
      pitchingOnBasePlusSlugging: "PitchingOnBasePlusSlugging",
      pitchingStrikeoutsPerNineInnings: "PitchingStrikeoutsPerNineInnings",
      pitchingWalksPerNineInnings: "PitchingWalksPerNineInnings",
      pitchingBattingAverageOnBallsInPlay: "PitchingBattingAverageOnBallsInPlay",
      pitchingWeightedOnBasePercentage: "PitchingWeightedOnBasePercentage",
      doublePlays: "DoublePlays",
      pitchingDoublePlays: "PitchingDoublePlays",
      battingOrderConfirmed: "BattingOrderConfirmed",
      isolatedPower: "IsolatedPower",
      fieldingIndependentPitching: "FieldingIndependentPitching",
      pitchingQualityStarts: "PitchingQualityStarts",
      pitchingInningStarted: "PitchingInningStarted",
      leftOnBase: "LeftOnBase",
      pitchingHolds: "PitchingHolds",
      pitchingBlownSaves: "PitchingBlownSaves",
      substituteBattingOrder: "SubstituteBattingOrder",
      substituteBattingOrderSequence: "SubstituteBattingOrderSequence",
      fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
      fantasyPointsBatting: "FantasyPointsBatting",
      fantasyPointsPitching: "FantasyPointsPitching",
    },
  });
