import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoringDetailSchema, type ScoringDetail } from "./scoring-detail.js";

export type FantasyDefenseGame = {
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameID is
   * composed of Season; SeasonType; Week and HomeTeam. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
  /**
   * The type of season that this player corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /** The NFL season of the game */
  season?: number;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number | null;
  /** The date and time of the game (in US Eastern Time) */
  date?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The abbreviation [Key] of the opponent team */
  opponent?: string | null;
  /** Total points allowed by the team during the game */
  pointsAllowed?: number;
  /** Total defensive and special teams touchdowns scored by the team in the game */
  touchdownsScored?: number;
  /** Total defensive solo (unassisted) tackles by the team in the game */
  soloTackles?: number;
  /** Total defensive assisted tackles by the team in the game */
  assistedTackles?: number;
  /** Total defensive sacks by the team in the game */
  sacks?: number;
  /** Total defensive sack yards by the team in the game */
  sackYards?: number;
  /** Total passes defended by the team in the game */
  passesDefended?: number;
  /** Total fumbles forced on defense by the team in the game */
  fumblesForced?: number;
  /** Total defensive fumble recoveries by the team in the game */
  fumblesRecovered?: number;
  /** Total fumble return yards by the team in the game */
  fumbleReturnYards?: number;
  /** Total fumble return touchdowns by the team in the game */
  fumbleReturnTouchdowns?: number;
  /** Total defensive interceptions by the team in the game */
  interceptions?: number;
  /** Total defensive interception return yards by the team in the game */
  interceptionReturnYards?: number;
  /** Total defensive interception return touchdowns by the team in the game */
  interceptionReturnTouchdowns?: number;
  /**
   * Total blocked kicks by team in the game. Note: BlockedKicks include Field Goals and Punts but
   * NOT Extra Points
   */
  blockedKicks?: number;
  /** Total defensive safeties scored by the team in the game */
  safeties?: number;
  /** Total punt returns by the team in the game */
  puntReturns?: number;
  /** Total punt return yards by the team in the game */
  puntReturnYards?: number;
  /** Total punt return touchdowns by the team in the game */
  puntReturnTouchdowns?: number;
  /** The longest punt return by the team in the game */
  puntReturnLong?: number;
  /** Total kickoff returns by the team in the game */
  kickReturns?: number;
  /** Total kickoff return yards by the team in the game */
  kickReturnYards?: number;
  /** Total kickoff return touchdowns by the team in the game */
  kickReturnTouchdowns?: number;
  /** Longest kick return by the team in the game */
  kickReturnLong?: number;
  /** Total blocked kick recovery return touchdowns for the team in the game */
  blockedKickReturnTouchdowns?: number | null;
  /**
   * Total field goal return touchdowns by the team in the game. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnTouchdowns?: number | null;
  /**
   * Fantasy points allowed to opposing offensive players in the season. Note: positions include:
   * QB; RB; WR; TE
   */
  fantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opposing quarterbacks by the team in the game */
  quarterbackFantasyPointsAllowed?: number | null;
  /** Total fantasy points allowed to opposing running backs by the team in the game */
  runningbackFantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opposing wide receivers */
  wideReceiverFantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opposing tight ends by the team in the game */
  tightEndFantasyPointsAllowed?: number | null;
  /** Fantasy points allowed to opponent kickers by the team in the game */
  kickerFantasyPointsAllowed?: number | null;
  /** Total blocked kick recovery return yards for the team in the game */
  blockedKickReturnYards?: number | null;
  /**
   * Total field goal return yards by the team in the game. Note: This field excludes blocked field
   * goals
   */
  fieldGoalReturnYards?: number | null;
  /**
   * Total quarterback hits by the team in the game. Note: This is a defensive stat that includes
   * sacks
   */
  quarterbackHits?: number | null;
  /**
   * Total tackles for loss by the team in the game. Note: These are tackles behind the line of
   * scrimmage for loss of yards (including sacks)
   */
  tacklesForLoss?: number | null;
  /** Total touchdowns scored by the defense */
  defensiveTouchdowns?: number | null;
  /** Total special teams touchdowns scored by the team in the game */
  specialTeamsTouchdowns?: number | null;
  /** Whether the game is over (true/false) */
  isGameOver?: boolean | null;
  /** Fantasy points scored based on basic fantasy scoring system by the team's D/ST in the game */
  fantasyPoints?: number | null;
  /** Stadium of the event */
  stadium?: string | null;
  /** Temperature at game start (Fahrenheit) */
  temperature?: number | null;
  /** The humidity percentage at the start of the game */
  humidity?: number | null;
  /** The wind speed at the start of the game (in MPH) */
  windSpeed?: number | null;
  /** Total third down attempts against the team in the game */
  thirdDownAttempts?: number | null;
  /** Total third down conversions against the team in the game */
  thirdDownConversions?: number | null;
  /** Opponent's fourth down attempts against the team in the game */
  fourthDownAttempts?: number | null;
  /** Opponent's fourth down conversions against the team in the game */
  fourthDownConversions?: number | null;
  /**
   * Total number of points allowed by the team in the game to the opposing offense and special
   * teams. Note: This field excludes points scored by the opponent's defense
   */
  pointsAllowedByDefenseSpecialTeams?: number | null;
  /** The team's D/ST salary for FanDuel daily fantasy contests */
  fanDuelSalary?: number | null;
  /** The team's D/ST salary for DraftKings daily fantasy contests. */
  draftKingsSalary?: number | null;
  /**
   * The team's D/ST salary as calculated by SportsDataIO (formerly known as FantasyData). Based on
   * the same salary cap as DraftKings contests ($50,000)
   */
  fantasyDataSalary?: number | null;
  /** The player's salary for Victiv daily fantasy contests. */
  victivSalary?: number | null;
  /** Total successful two point conversion returns by the team in the game */
  twoPointConversionReturns?: number | null;
  /** Fantasy points based on FanDuel's scoring system by the team in the game */
  fantasyPointsFanDuel?: number | null;
  /** Fantasy points based on DraftKings' scoring system by the team in the game */
  fantasyPointsDraftKings?: number | null;
  /** Offensive yards allowed by the team's defense in the game */
  offensiveYardsAllowed?: number | null;
  /** The player's salary for Yahoo daily fantasy contests */
  yahooSalary?: number | null;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO for use when combining with
   * player feeds. Note: this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /** Fantasy points based on Yahoo's daily fantasy scoring system by the team in the game */
  fantasyPointsYahoo?: number | null;
  /** Whether the team is home or away */
  homeOrAway?: string | null;
  /**
   * The ranking of the opposing team's offense with regards to fantasy points allowed to fantasy
   * DST
   */
  opponentRank?: number | null;
  /**
   * The ranking of the opposing team's offense with regards to fantasy points allowed to fantasy
   * DST
   */
  opponentPositionRank?: number | null;
  /** The team's D/ST salary for FantasyDraft daily fantasy contests. */
  fantasyDraftSalary?: number | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The unique ID of this opponent team */
  opponentId?: number | null;
  /** The date of the game (in US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /**
   * A globally unique ID for this team's opponent. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalOpponentId?: number | null;
  /** The position of this team's D/ST; as listed by DraftKings. */
  draftKingsPosition?: string | null;
  /** The position of this team's D/ST; as listed by FanDuel. */
  fanDuelPosition?: string | null;
  /** The position of this team's D/ST; as listed by FantasyDraft */
  fantasyDraftPosition?: string | null;
  /**
   * The position of the team's defense/special teams unit, as listed on Yahoo's daily fantasy
   * sports platform
   */
  yahooPosition?: string | null;
  /**
   * "Unique ID of FantasyDefense record (subject to change; although it very rarely does). Note:
   * For a guaranteed static ID; use a combination of GameKey and Team"
   */
  fantasyDefenseId?: number | null;
  /** Unique ID of the score/game */
  scoreId?: number;
  /**
   * FanDuel fantasy points allowed to opposing offensive players in the game. Note: positions
   * include: QB; RB; WR; TE
   */
  fanDuelFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing quarterbacks in the game */
  fanDuelQuarterbackFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing running backs in the game */
  fanDuelRunningbackFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing wide receivers in the game */
  fanDuelWideReceiverFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing tight ends in the game */
  fanDuelTightEndFantasyPointsAllowed?: number | null;
  /** FanDuel fantasy points allowed by the team to opposing kickers in the game */
  fanDuelKickerFantasyPointsAllowed?: number | null;
  /**
   * DraftKings fantasy points allowed to opposing offensive players in the game. Note: positions
   * include: QB; RB; WR; TE
   */
  draftKingsFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent quarterbacks in the game */
  draftKingsQuarterbackFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent running backs in the game */
  draftKingsRunningbackFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent wide receivers in the game */
  draftKingsWideReceiverFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed by the team to opponent tight ends in the game */
  draftKingsTightEndFantasyPointsAllowed?: number | null;
  /** DraftKings fantasy points allowed to opposing kickers */
  draftKingsKickerFantasyPointsAllowed?: number | null;
  /**
   * Total Yahoo fantasy points allowed to opposing offensive players by the team in the game. Note:
   * Offensive players include: QB, RB, WR, & TE
   */
  yahooFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing quarterbacks by the team in the game */
  yahooQuarterbackFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing running backs by the team in the game */
  yahooRunningbackFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing wide receivers by the team in the game */
  yahooWideReceiverFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing tight ends by the team in the game */
  yahooTightEndFantasyPointsAllowed?: number | null;
  /** Total Yahoo fantasy points allowed to opposing kickers by the team in the game */
  yahooKickerFantasyPointsAllowed?: number | null;
  /** Fantasy points based on FantasyDraft's scoring system by the team in the game */
  fantasyPointsFantasyDraft?: number | null;
  /**
   * FantasyDraft fantasy points allowed to opposing offensive players in the game. Note: positions
   * include: QB; RB; WR; TE
   */
  fantasyDraftFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing quarterbacks in the game */
  fantasyDraftQuarterbackFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing running backs in the game */
  fantasyDraftRunningbackFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing wide receivers in the game */
  fantasyDraftWideReceiverFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing tight ends in the game */
  fantasyDraftTightEndFantasyPointsAllowed?: number | null;
  /** FantasyDraft fantasy points allowed by the team to opposing kickers in the game */
  fantasyDraftKickerFantasyPointsAllowed?: number | null;
  /** The details of the scoring plays this team DST recorded in the game */
  scoringDetails?: ScoringDetail[];
};

export const fantasyDefenseGameSchema: Schema<FantasyDefenseGame> = s.object<FantasyDefenseGame>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optionalNullable(s.int()),
  date: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
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
  blockedKickReturnYards: s.optionalNullable(s.float64()),
  fieldGoalReturnYards: s.optionalNullable(s.float64()),
  quarterbackHits: s.optionalNullable(s.float64()),
  tacklesForLoss: s.optionalNullable(s.float64()),
  defensiveTouchdowns: s.optionalNullable(s.float64()),
  specialTeamsTouchdowns: s.optionalNullable(s.float64()),
  isGameOver: s.optionalNullable(s.boolean()),
  fantasyPoints: s.optionalNullable(s.float64()),
  stadium: s.optionalNullable(s.string()),
  temperature: s.optionalNullable(s.int()),
  humidity: s.optionalNullable(s.int()),
  windSpeed: s.optionalNullable(s.int()),
  thirdDownAttempts: s.optionalNullable(s.float64()),
  thirdDownConversions: s.optionalNullable(s.float64()),
  fourthDownAttempts: s.optionalNullable(s.float64()),
  fourthDownConversions: s.optionalNullable(s.float64()),
  pointsAllowedByDefenseSpecialTeams: s.optionalNullable(s.float64()),
  fanDuelSalary: s.optionalNullable(s.int()),
  draftKingsSalary: s.optionalNullable(s.int()),
  fantasyDataSalary: s.optionalNullable(s.int()),
  victivSalary: s.optionalNullable(s.int()),
  twoPointConversionReturns: s.optionalNullable(s.float64()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  offensiveYardsAllowed: s.optionalNullable(s.float64()),
  yahooSalary: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  homeOrAway: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.int()),
  opponentPositionRank: s.optionalNullable(s.int()),
  fantasyDraftSalary: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
  opponentId: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  globalGameId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  globalOpponentId: s.optionalNullable(s.int()),
  draftKingsPosition: s.optionalNullable(s.string()),
  fanDuelPosition: s.optionalNullable(s.string()),
  fantasyDraftPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  fantasyDefenseId: s.optionalNullable(s.int()),
  scoreId: s.optional(s.int()),
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
  _keysMap: {
    gameKey: "GameKey",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    date: "Date",
    team: "Team",
    opponent: "Opponent",
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
    blockedKickReturnYards: "BlockedKickReturnYards",
    fieldGoalReturnYards: "FieldGoalReturnYards",
    quarterbackHits: "QuarterbackHits",
    tacklesForLoss: "TacklesForLoss",
    defensiveTouchdowns: "DefensiveTouchdowns",
    specialTeamsTouchdowns: "SpecialTeamsTouchdowns",
    isGameOver: "IsGameOver",
    fantasyPoints: "FantasyPoints",
    stadium: "Stadium",
    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "WindSpeed",
    thirdDownAttempts: "ThirdDownAttempts",
    thirdDownConversions: "ThirdDownConversions",
    fourthDownAttempts: "FourthDownAttempts",
    fourthDownConversions: "FourthDownConversions",
    pointsAllowedByDefenseSpecialTeams: "PointsAllowedByDefenseSpecialTeams",
    fanDuelSalary: "FanDuelSalary",
    draftKingsSalary: "DraftKingsSalary",
    fantasyDataSalary: "FantasyDataSalary",
    victivSalary: "VictivSalary",
    twoPointConversionReturns: "TwoPointConversionReturns",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    offensiveYardsAllowed: "OffensiveYardsAllowed",
    yahooSalary: "YahooSalary",
    playerId: "PlayerID",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    homeOrAway: "HomeOrAway",
    opponentRank: "OpponentRank",
    opponentPositionRank: "OpponentPositionRank",
    fantasyDraftSalary: "FantasyDraftSalary",
    teamId: "TeamID",
    opponentId: "OpponentID",
    day: "Day",
    dateTime: "DateTime",
    globalGameId: "GlobalGameID",
    globalTeamId: "GlobalTeamID",
    globalOpponentId: "GlobalOpponentID",
    draftKingsPosition: "DraftKingsPosition",
    fanDuelPosition: "FanDuelPosition",
    fantasyDraftPosition: "FantasyDraftPosition",
    yahooPosition: "YahooPosition",
    fantasyDefenseId: "FantasyDefenseID",
    scoreId: "ScoreID",
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
  },
});
