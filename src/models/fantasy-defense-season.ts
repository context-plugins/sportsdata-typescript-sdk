import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoringDetailSchema, type ScoringDetail } from "./scoring-detail.js";

export type FantasyDefenseSeason = {
  /**
   * The type of season that this team corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /** The NFL regular season for which these totals apply */
  season?: number;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** Total points allowed by the team during the season */
  pointsAllowed?: number;
  /** Total defensive and special teams touchdowns scored by the team in the season */
  touchdownsScored?: number;
  /** Total defensive solo (unassisted) tackles by the team in the season */
  soloTackles?: number;
  /** Total defensive assisted tackles by the team in the season */
  assistedTackles?: number;
  /** Total defensive sacks by the team in the season */
  sacks?: number;
  /** Total defensive sack yards by the team in the season */
  sackYards?: number;
  /** Total passes defended by the team in the season */
  passesDefended?: number;
  /** Total fumbles forced on defense by the team in the season */
  fumblesForced?: number;
  /** Total defensive fumble recoveries by the team in the season */
  fumblesRecovered?: number;
  /** Total fumble return yards by the team in the season */
  fumbleReturnYards?: number;
  /** Total fumble return touchdowns by the team in the season */
  fumbleReturnTouchdowns?: number;
  /** Total defensive interceptions by the team in the season */
  interceptions?: number;
  /** Total defensive interception return yards by the team in the season */
  interceptionReturnYards?: number;
  /** Total defensive interception return touchdowns by the team in the season */
  interceptionReturnTouchdowns?: number;
  /**
   * Total blocked kicks by the team in the season. Note: BlockedKicks include Field Goals and Punts
   * but NOT Extra Points
   */
  blockedKicks?: number;
  /** Total defensive safeties scored by the team in the season */
  safeties?: number;
  /** Total punt returns by the team in the season */
  puntReturns?: number;
  /** Total punt return yards by the team in the season */
  puntReturnYards?: number;
  /** Total punt return touchdowns by the team in the season */
  puntReturnTouchdowns?: number;
  /** The longest punt return by the team in the season */
  puntReturnLong?: number;
  /** Total kickoff returns by the team in the season */
  kickReturns?: number;
  /** Total kickoff return yards by the team in the season */
  kickReturnYards?: number;
  /** Total kickoff return touchdowns by the team in the season */
  kickReturnTouchdowns?: number;
  /** Longest kick return by the team in the season */
  kickReturnLong?: number;
  /** Total blocked kick recovery return touchdowns for the team in the season */
  blockedKickReturnTouchdowns?: number | null;
  /**
   * Total field goal return touchdowns by the team in the season. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnTouchdowns?: number | null;
  /**
   * Fantasy points allowed to opposing offensive players in the season. Note: positions include:
   * QB; RB; WR; TE
   */
  fantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opposing quarterbacks by the team in the season */
  quarterbackFantasyPointsAllowed?: number | null;
  /** Total fantasy points allowed to opposing running backs by the team in the season */
  runningbackFantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opposing wide receivers */
  wideReceiverFantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opposing tight ends by the team in the season */
  tightEndFantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opponent kickers by the team in the season */
  kickerFantasyPointsAllowed?: number | null;
  /** The total number of games played by the team in the season */
  games?: number | null;
  /** Total blocked kick recovery return yards for the team in the season */
  blockedKickReturnYards?: number | null;
  /**
   * Total field goal return yards by the team in the season. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnYards?: number | null;
  /**
   * Total quarterback hits by the team in the season. Note: This is a defensive stat that includes
   * sacks
   */
  quarterbackHits?: number | null;
  /**
   * Total tackles for loss by the team in the season. Note: these are tackles behind the line of
   * scrimmage for loss of yards (including sacks)
   */
  tacklesForLoss?: number | null;
  /** Total defensive touchdowns scored by the team in the season */
  defensiveTouchdowns?: number | null;
  /** Total special teams touchdowns scored by the team in the season */
  specialTeamsTouchdowns?: number | null;
  /** Fantasy points scored based on basic fantasy scoring system by the team in the season */
  fantasyPoints?: number | null;
  /** Temperature at game start (Fahrenheit) */
  temperature?: number | null;
  /** The humidity percentage at the start of the game */
  humidity?: number | null;
  /** The wind speed at the start of the game (in MPH) */
  windSpeed?: number | null;
  /** Total third down attempts against the team in the season */
  thirdDownAttempts?: number | null;
  /** Total third down conversions against the team in the season */
  thirdDownConversions?: number | null;
  /** Opponent's fourth down attempts against the team in the season */
  fourthDownAttempts?: number | null;
  /** Opponent's fourth down conversions against the team in the season */
  fourthDownConversions?: number | null;
  /**
   * Total number of points allowed by the team in the season to the opposing offense and special
   * teams. Note: This field excludes points scored by the opponent's defense
   */
  pointsAllowedByDefenseSpecialTeams?: number | null;
  /** Player's dollar value in a $200 salary cap auction draft. */
  auctionValue?: number | null;
  /** Player's dollar value in a $200 salary cap PPR auction draft. */
  auctionValuePpr?: number | null;
  /** Total successful two point conversion returns by the team in the season */
  twoPointConversionReturns?: number | null;
  /** Fantasy points based on FanDuel's scoring system by the team in the season */
  fantasyPointsFanDuel?: number | null;
  /** Fantasy points based on DraftKings' scoring system by the team in the season */
  fantasyPointsDraftKings?: number | null;
  /** Offensive yards allowed by the team's defense in the season */
  offensiveYardsAllowed?: number | null;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO for use when combining with
   * player feeds. Note: this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /** Fantasy points based on Yahoo's daily fantasy scoring system by the team in the season */
  fantasyPointsYahoo?: number | null;
  /** The average draft position of the team's fantasy defense (DST) in re-draft leagues */
  averageDraftPosition?: number | null;
  /** The average draft position of the team (DST) in Points Per Reception (PPR) leagues */
  averageDraftPositionPpr?: number | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /**
   * FanDuel fantasy points allowed to opposing offensive players in the season. Note: positions
   * include: QB; RB; WR; TE
   */
  fanDuelFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing quarterbacks in the season */
  fanDuelQuarterbackFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing running backs in the season */
  fanDuelRunningbackFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing wide receivers in the season */
  fanDuelWideReceiverFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing tight ends in the season */
  fanDuelTightEndFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing kickers in the season */
  fanDuelKickerFantasyPointsAllowed?: number | null;
  /**
   * DraftKings fantasy points allowed to opposing offensive players in the season. Note: positions
   * include: QB; RB; WR; TE
   */
  draftKingsFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent quarterbacks in the season */
  draftKingsQuarterbackFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent running backs in the season */
  draftKingsRunningbackFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent wide receivers in the season */
  draftKingsWideReceiverFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent tight ends in the season */
  draftKingsTightEndFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent kickers in the season */
  draftKingsKickerFantasyPointsAllowed?: number | null;
  /**
   * Total Yahoo fantasy points allowed to opposing offensive players by the team in the season.
   * Note: Offensive players include: QB, RB, WR, & TE
   */
  yahooFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing quarterbacks by the team in the season */
  yahooQuarterbackFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing running backs by the team in the season */
  yahooRunningbackFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing wide receivers by the team in the season */
  yahooWideReceiverFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing tight ends by the team in the season */
  yahooTightEndFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing kickers by the team in the season */
  yahooKickerFantasyPointsAllowed?: number | null;
  /** Fantasy points based on FanDraft's scoring system by the team in the season */
  fantasyPointsFantasyDraft?: number | null;
  /**
   * FantasyDraft fantasy points allowed to opposing offensive players in the season. Note:
   * positions include: QB; RB; WR; TE
   */
  fantasyDraftFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing quarterbacks in the season */
  fantasyDraftQuarterbackFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing running backs in the season */
  fantasyDraftRunningbackFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing wide receivers in the season */
  fantasyDraftWideReceiverFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing tight ends in the season */
  fantasyDraftTightEndFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing kickers in the season */
  fantasyDraftKickerFantasyPointsAllowed?: number | null;
  /** The details of the scoring plays this team DST recorded in the season */
  scoringDetails?: ScoringDetail[];
  /** The average draft position of this team (DST) in dynasty drafts leagues */
  averageDraftPositionDynasty?: number | null;
  /** The average draft position of the team (DST) in 2 Quarterback leagues */
  averageDraftPosition2Qb?: number | null;
};

export const fantasyDefenseSeasonSchema: Schema<FantasyDefenseSeason> = s.object<FantasyDefenseSeason>({
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  pointsAllowed: s.optional(s.float64()),
  touchdownsScored: s.optional(s.float64()),
  soloTackles: s.optional(s.float64()),
  assistedTackles: s.optional(s.float64()),
  sacks: s.optional(s.float64()),
  sackYards: s.optional(s.float64()),
  passesDefended: s.optional(s.float64()),
  fumblesForced: s.optional(s.float64()),
  fumblesRecovered: s.optional(s.float64()),
  fumbleReturnYards: s.optional(s.float64()),
  fumbleReturnTouchdowns: s.optional(s.float64()),
  interceptions: s.optional(s.float64()),
  interceptionReturnYards: s.optional(s.float64()),
  interceptionReturnTouchdowns: s.optional(s.float64()),
  blockedKicks: s.optional(s.float64()),
  safeties: s.optional(s.float64()),
  puntReturns: s.optional(s.float64()),
  puntReturnYards: s.optional(s.float64()),
  puntReturnTouchdowns: s.optional(s.float64()),
  puntReturnLong: s.optional(s.float64()),
  kickReturns: s.optional(s.float64()),
  kickReturnYards: s.optional(s.float64()),
  kickReturnTouchdowns: s.optional(s.float64()),
  kickReturnLong: s.optional(s.float64()),
  blockedKickReturnTouchdowns: s.optionalNullable(s.float64()),
  fieldGoalReturnTouchdowns: s.optionalNullable(s.float64()),
  fantasyPointsAllowed: s.optionalNullable(s.float64()),
  quarterbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  runningbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  wideReceiverFantasyPointsAllowed: s.optionalNullable(s.float64()),
  tightEndFantasyPointsAllowed: s.optionalNullable(s.float64()),
  kickerFantasyPointsAllowed: s.optionalNullable(s.float64()),
  games: s.optionalNullable(s.int()),
  blockedKickReturnYards: s.optionalNullable(s.float64()),
  fieldGoalReturnYards: s.optionalNullable(s.float64()),
  quarterbackHits: s.optionalNullable(s.float64()),
  tacklesForLoss: s.optionalNullable(s.float64()),
  defensiveTouchdowns: s.optionalNullable(s.float64()),
  specialTeamsTouchdowns: s.optionalNullable(s.float64()),
  fantasyPoints: s.optionalNullable(s.float64()),
  temperature: s.optionalNullable(s.int()),
  humidity: s.optionalNullable(s.int()),
  windSpeed: s.optionalNullable(s.int()),
  thirdDownAttempts: s.optionalNullable(s.float64()),
  thirdDownConversions: s.optionalNullable(s.float64()),
  fourthDownAttempts: s.optionalNullable(s.float64()),
  fourthDownConversions: s.optionalNullable(s.float64()),
  pointsAllowedByDefenseSpecialTeams: s.optionalNullable(s.float64()),
  auctionValue: s.optionalNullable(s.float64()),
  auctionValuePpr: s.optionalNullable(s.float64()),
  twoPointConversionReturns: s.optionalNullable(s.float64()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  offensiveYardsAllowed: s.optionalNullable(s.float64()),
  playerId: s.optionalNullable(s.int()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  averageDraftPosition: s.optionalNullable(s.float64()),
  averageDraftPositionPpr: s.optionalNullable(s.float64()),
  teamId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  fanDuelFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fanDuelQuarterbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fanDuelRunningbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fanDuelWideReceiverFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fanDuelTightEndFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fanDuelKickerFantasyPointsAllowed: s.optionalNullable(s.float64()),
  draftKingsFantasyPointsAllowed: s.optionalNullable(s.float64()),
  draftKingsQuarterbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  draftKingsRunningbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  draftKingsWideReceiverFantasyPointsAllowed: s.optionalNullable(s.float64()),
  draftKingsTightEndFantasyPointsAllowed: s.optionalNullable(s.float64()),
  draftKingsKickerFantasyPointsAllowed: s.optionalNullable(s.float64()),
  yahooFantasyPointsAllowed: s.optionalNullable(s.float64()),
  yahooQuarterbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  yahooRunningbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  yahooWideReceiverFantasyPointsAllowed: s.optionalNullable(s.float64()),
  yahooTightEndFantasyPointsAllowed: s.optionalNullable(s.float64()),
  yahooKickerFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.float64()),
  fantasyDraftFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fantasyDraftQuarterbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fantasyDraftRunningbackFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fantasyDraftWideReceiverFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fantasyDraftTightEndFantasyPointsAllowed: s.optionalNullable(s.float64()),
  fantasyDraftKickerFantasyPointsAllowed: s.optionalNullable(s.float64()),
  scoringDetails: s.optional(s.array(s.lazy(() => scoringDetailSchema))),
  averageDraftPositionDynasty: s.optionalNullable(s.float64()),
  averageDraftPosition2Qb: s.optionalNullable(s.float64()),
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
