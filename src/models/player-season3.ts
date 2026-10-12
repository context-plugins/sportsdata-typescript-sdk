import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerSeason3 = {
  /** The unique ID of the stat */
  statId?: number;
  /** The team's unique TeamID as assigned by SportsDataIO */
  teamId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their MLB career
   */
  playerId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar)
   */
  seasonType?: number | null;
  /** The MLB season for which these totals apply */
  season?: number | null;
  /** Player's full name */
  name?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /**
   * The player's position associated with the given game or season. Possible values: 1B; 2B; 3B; C;
   * CF; DH; IF; LF; OF; P; PH; PR; RF; RP; SP; SS
   */
  position?: string | null;
  /** The player's position category. Possible values: DH; IF; OF; P; PH; PR */
  positionCategory?: string | null;
  /** Number of games started in the season */
  started?: number | null;
  /** This field is expected to be NULL */
  battingOrder?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /**
   * The auction value for this player as it pertains to auction-style drafts for season-long
   * fantasy baseball
   */
  averageDraftPosition?: number | null;
  /**
   * The auction value for this player as it pertains to auction-style drafts for season-long
   * fantasy baseball
   */
  auctionValue?: number | null;
  /** The timestamp of when the record was last updated (US Eastern Time). */
  updated?: string | null;
  /** The number of games played. */
  games?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
  /** At bats while hitting */
  atBats?: number | null;
  /** Total runs scored. */
  runs?: number | null;
  /** Total hits */
  hits?: number | null;
  /** Total singles */
  singles?: number | null;
  /** Total doubles */
  doubles?: number | null;
  /** Total triples */
  triples?: number | null;
  /** Total home runs */
  homeRuns?: number | null;
  /** Total runs batted in */
  runsBattedIn?: number | null;
  /** Total batting average */
  battingAverage?: number | null;
  /** Total outs */
  outs?: number | null;
  /** Total strikeouts */
  strikeouts?: number | null;
  /** Total walks */
  walks?: number | null;
  /** Total times hit by pitch */
  hitByPitch?: number | null;
  /** Total sacrifices */
  sacrifices?: number | null;
  /** Total sacrifice flies */
  sacrificeFlies?: number | null;
  /** Total times grounded into double play */
  groundIntoDoublePlay?: number | null;
  /** Total stolen bases */
  stolenBases?: number | null;
  /** Total caught stealing */
  caughtStealing?: number | null;
  /** Total pitches seen */
  pitchesSeen?: number | null;
  /** Total on base percentage */
  onBasePercentage?: number | null;
  /** Total slugging percentage */
  sluggingPercentage?: number | null;
  /** Total on base plus percentage */
  onBasePlusSlugging?: number | null;
  /** Total errors */
  errors?: number | null;
  /** Total wins by the team/player */
  wins?: number | null;
  /** Total losses by the team/player */
  losses?: number | null;
  /** Total saves by team/player */
  saves?: number | null;
  /** Decimal representation of total innings pitched (e.g. 1.33, 7.66, etc) */
  inningsPitchedDecimal?: number | null;
  /** Total outs pitched by team/player */
  totalOutsPitched?: number | null;
  /** Total full innings pitched (e.g. 6, 71, 89, etc) */
  inningsPitchedFull?: number | null;
  /** Outs pitched beyond InningsPitchedFull (possible values: 0, 1, 2) */
  inningsPitchedOuts?: number | null;
  /** Total earned run average by team/player */
  earnedRunAverage?: number | null;
  /** Hits allowed while pitching */
  pitchingHits?: number | null;
  /** Runs allowed while pitching */
  pitchingRuns?: number | null;
  /** Earned runs allowed while pitching */
  pitchingEarnedRuns?: number | null;
  /** Walks allowed while pitching */
  pitchingWalks?: number | null;
  /** Strikeouts allowed while pitching */
  pitchingStrikeouts?: number | null;
  /** Home runs allowed while pitching */
  pitchingHomeRuns?: number | null;
  /** Total pitches thrown while pitching */
  pitchesThrown?: number | null;
  /** Total pitches thrown for strikes while pitching */
  pitchesThrownStrikes?: number | null;
  /** Walks plus hits per innings pitched (WHIP) while pitching */
  walksHitsPerInningsPitched?: number | null;
  /** Total batting average against (BAA) while pitching */
  pitchingBattingAverageAgainst?: number | null;
  /** Total grand slams */
  grandSlams?: number | null;
  /** Total FanDuel fantasy points */
  fantasyPointsFanDuel?: number | null;
  /** Total DraftKings fantasy points */
  fantasyPointsDraftKings?: number | null;
  /** Total Yahoo fantasy points */
  fantasyPointsYahoo?: number | null;
  /** Total plate appearances */
  plateAppearances?: number | null;
  /** Number of total bases */
  totalBases?: number | null;
  /** Total fly outs */
  flyOuts?: number | null;
  /** Total ground outs */
  groundOuts?: number | null;
  /** Total line outs */
  lineOuts?: number | null;
  /** Total pop outs */
  popOuts?: number | null;
  /** Total intentional walks */
  intentionalWalks?: number | null;
  /** Total times reached on error */
  reachedOnError?: number | null;
  /** Total balls in play */
  ballsInPlay?: number | null;
  /** Total batting average on balls in play (BABIP) */
  battingAverageOnBallsInPlay?: number | null;
  /** Total weight on base percentage */
  weightedOnBasePercentage?: number | null;
  /** Total singles allowed while pitching */
  pitchingSingles?: number | null;
  /** Total doubles allowed while pitching */
  pitchingDoubles?: number | null;
  /** Total triples allowed while pitching */
  pitchingTriples?: number | null;
  /** Total grand slams allowed while pitching */
  pitchingGrandSlams?: number | null;
  /** Total batters hit by pitch while pitching */
  pitchingHitByPitch?: number | null;
  /** Total sacrifices while pitching */
  pitchingSacrifices?: number | null;
  /** Total sacrifice flies while pitching */
  pitchingSacrificeFlies?: number | null;
  /** Total grounded into double plays while pitching */
  pitchingGroundIntoDoublePlay?: number | null;
  /** Total complete games while pitching */
  pitchingCompleteGames?: number | null;
  /** Total shuouts while pitching */
  pitchingShutOuts?: number | null;
  /** Total no hitters while pitching */
  pitchingNoHitters?: number | null;
  /** Total perfect games while pitching */
  pitchingPerfectGames?: number | null;
  /** Total plate appearances while pitching */
  pitchingPlateAppearances?: number | null;
  /** Total bases while pitching */
  pitchingTotalBases?: number | null;
  /** Total fly outs while pitching */
  pitchingFlyOuts?: number | null;
  /** Total ground outs while pitching */
  pitchingGroundOuts?: number | null;
  /** Total line outs while pitching */
  pitchingLineOuts?: number | null;
  /** Total pop outs while pitching */
  pitchingPopOuts?: number | null;
  /** Total intentional walks while pitching */
  pitchingIntentionalWalks?: number | null;
  /** Total times reached on error while pitching */
  pitchingReachedOnError?: number | null;
  /** Total catchers interference while pitching */
  pitchingCatchersInterference?: number | null;
  /** Total balls in play while pitching */
  pitchingBallsInPlay?: number | null;
  /** Total on base percentage (OBP) while pitching */
  pitchingOnBasePercentage?: number | null;
  /** Total slugging percentage (SLG) while pitching */
  pitchingSluggingPercentage?: number | null;
  /** Total on base plus slugging (OPS) while pitching */
  pitchingOnBasePlusSlugging?: number | null;
  /** Total strikeouts per nine innings (K/9) while pitching */
  pitchingStrikeoutsPerNineInnings?: number | null;
  /** Total walks per nine innings (BB/9) while pitching */
  pitchingWalksPerNineInnings?: number | null;
  /** Total batting average on balls in play (BABIP) while pitching */
  pitchingBattingAverageOnBallsInPlay?: number | null;
  /** Total weighted on base percentage while pitching */
  pitchingWeightedOnBasePercentage?: number | null;
  /**
   * Total double plays, defined as one of: Bunted into Double Play, Fly into Double Play, Fouled
   * into Double Play, Ground into Double Pla,y Line into Double Play, Popped into Double Play
   */
  doublePlays?: number | null;
  /** Total double plays while pitching */
  pitchingDoublePlays?: number | null;
  /** Whether the batting order is confirmed (true/false) */
  battingOrderConfirmed?: boolean | null;
  /** Total isolated power (ISO) */
  isolatedPower?: number | null;
  /** Total fielding independent pitching (FIP) */
  fieldingIndependentPitching?: number | null;
  /** Total quality starts pitched */
  pitchingQualityStarts?: number | null;
  /** The inning that the pitcher entered the game (if any). */
  pitchingInningStarted?: number | null;
  /** Total left on base percentage */
  leftOnBase?: number | null;
  /** Total holds pitched */
  pitchingHolds?: number | null;
  /** Total blown saves pitched */
  pitchingBlownSaves?: number | null;
  /**
   * The position in the batting order where this player was substituted into the game (does not
   * include players in the starting lineup)
   */
  substituteBattingOrder?: number | null;
  /**
   * The sequence in which this player was substituted into the game, within the particular batting
   * order
   */
  substituteBattingOrderSequence?: number | null;
  /** Total FantasyDraft fantasy points */
  fantasyPointsFantasyDraft?: number | null;
  /** Total batting fantasy points */
  fantasyPointsBatting?: number | null;
  /** Total pitching fantasy points */
  fantasyPointsPitching?: number | null;
};

export const playerSeason3Schema: Schema<PlayerSeason3> = s.object<PlayerSeason3>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  started: s.optionalNullable(s.int()),
  battingOrder: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  averageDraftPosition: s.optionalNullable(s.float64()),
  auctionValue: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  atBats: s.optionalNullable(s.float64()),
  runs: s.optionalNullable(s.float64()),
  hits: s.optionalNullable(s.float64()),
  singles: s.optionalNullable(s.float64()),
  doubles: s.optionalNullable(s.float64()),
  triples: s.optionalNullable(s.float64()),
  homeRuns: s.optionalNullable(s.float64()),
  runsBattedIn: s.optionalNullable(s.float64()),
  battingAverage: s.optionalNullable(s.float64()),
  outs: s.optionalNullable(s.float64()),
  strikeouts: s.optionalNullable(s.float64()),
  walks: s.optionalNullable(s.float64()),
  hitByPitch: s.optionalNullable(s.float64()),
  sacrifices: s.optionalNullable(s.float64()),
  sacrificeFlies: s.optionalNullable(s.float64()),
  groundIntoDoublePlay: s.optionalNullable(s.float64()),
  stolenBases: s.optionalNullable(s.float64()),
  caughtStealing: s.optionalNullable(s.float64()),
  pitchesSeen: s.optionalNullable(s.float64()),
  onBasePercentage: s.optionalNullable(s.float64()),
  sluggingPercentage: s.optionalNullable(s.float64()),
  onBasePlusSlugging: s.optionalNullable(s.float64()),
  errors: s.optionalNullable(s.float64()),
  wins: s.optionalNullable(s.float64()),
  losses: s.optionalNullable(s.float64()),
  saves: s.optionalNullable(s.float64()),
  inningsPitchedDecimal: s.optionalNullable(s.float64()),
  totalOutsPitched: s.optionalNullable(s.float64()),
  inningsPitchedFull: s.optionalNullable(s.float64()),
  inningsPitchedOuts: s.optionalNullable(s.float64()),
  earnedRunAverage: s.optionalNullable(s.float64()),
  pitchingHits: s.optionalNullable(s.float64()),
  pitchingRuns: s.optionalNullable(s.float64()),
  pitchingEarnedRuns: s.optionalNullable(s.float64()),
  pitchingWalks: s.optionalNullable(s.float64()),
  pitchingStrikeouts: s.optionalNullable(s.float64()),
  pitchingHomeRuns: s.optionalNullable(s.float64()),
  pitchesThrown: s.optionalNullable(s.float64()),
  pitchesThrownStrikes: s.optionalNullable(s.float64()),
  walksHitsPerInningsPitched: s.optionalNullable(s.float64()),
  pitchingBattingAverageAgainst: s.optionalNullable(s.float64()),
  grandSlams: s.optionalNullable(s.float64()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  plateAppearances: s.optionalNullable(s.float64()),
  totalBases: s.optionalNullable(s.float64()),
  flyOuts: s.optionalNullable(s.float64()),
  groundOuts: s.optionalNullable(s.float64()),
  lineOuts: s.optionalNullable(s.float64()),
  popOuts: s.optionalNullable(s.float64()),
  intentionalWalks: s.optionalNullable(s.float64()),
  reachedOnError: s.optionalNullable(s.float64()),
  ballsInPlay: s.optionalNullable(s.float64()),
  battingAverageOnBallsInPlay: s.optionalNullable(s.float64()),
  weightedOnBasePercentage: s.optionalNullable(s.float64()),
  pitchingSingles: s.optionalNullable(s.float64()),
  pitchingDoubles: s.optionalNullable(s.float64()),
  pitchingTriples: s.optionalNullable(s.float64()),
  pitchingGrandSlams: s.optionalNullable(s.float64()),
  pitchingHitByPitch: s.optionalNullable(s.float64()),
  pitchingSacrifices: s.optionalNullable(s.float64()),
  pitchingSacrificeFlies: s.optionalNullable(s.float64()),
  pitchingGroundIntoDoublePlay: s.optionalNullable(s.float64()),
  pitchingCompleteGames: s.optionalNullable(s.float64()),
  pitchingShutOuts: s.optionalNullable(s.float64()),
  pitchingNoHitters: s.optionalNullable(s.float64()),
  pitchingPerfectGames: s.optionalNullable(s.float64()),
  pitchingPlateAppearances: s.optionalNullable(s.float64()),
  pitchingTotalBases: s.optionalNullable(s.float64()),
  pitchingFlyOuts: s.optionalNullable(s.float64()),
  pitchingGroundOuts: s.optionalNullable(s.float64()),
  pitchingLineOuts: s.optionalNullable(s.float64()),
  pitchingPopOuts: s.optionalNullable(s.float64()),
  pitchingIntentionalWalks: s.optionalNullable(s.float64()),
  pitchingReachedOnError: s.optionalNullable(s.float64()),
  pitchingCatchersInterference: s.optionalNullable(s.float64()),
  pitchingBallsInPlay: s.optionalNullable(s.float64()),
  pitchingOnBasePercentage: s.optionalNullable(s.float64()),
  pitchingSluggingPercentage: s.optionalNullable(s.float64()),
  pitchingOnBasePlusSlugging: s.optionalNullable(s.float64()),
  pitchingStrikeoutsPerNineInnings: s.optionalNullable(s.float64()),
  pitchingWalksPerNineInnings: s.optionalNullable(s.float64()),
  pitchingBattingAverageOnBallsInPlay: s.optionalNullable(s.float64()),
  pitchingWeightedOnBasePercentage: s.optionalNullable(s.float64()),
  doublePlays: s.optionalNullable(s.float64()),
  pitchingDoublePlays: s.optionalNullable(s.float64()),
  battingOrderConfirmed: s.optionalNullable(s.boolean()),
  isolatedPower: s.optionalNullable(s.float64()),
  fieldingIndependentPitching: s.optionalNullable(s.float64()),
  pitchingQualityStarts: s.optionalNullable(s.float64()),
  pitchingInningStarted: s.optionalNullable(s.int()),
  leftOnBase: s.optionalNullable(s.float64()),
  pitchingHolds: s.optionalNullable(s.float64()),
  pitchingBlownSaves: s.optionalNullable(s.float64()),
  substituteBattingOrder: s.optionalNullable(s.int()),
  substituteBattingOrderSequence: s.optionalNullable(s.int()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.float64()),
  fantasyPointsBatting: s.optionalNullable(s.float64()),
  fantasyPointsPitching: s.optionalNullable(s.float64()),
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
