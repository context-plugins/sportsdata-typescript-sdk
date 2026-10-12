import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoringDetailSchema, type ScoringDetail } from "./scoring-detail.js";

export type PlayerSeason = {
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /**
   * The type of season that this player corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /** The NFL season for which these totals apply */
  season?: number;
  /**
   * The abbreviation [Key] of the team that the player is on. Note: If this player is a free agent;
   * this field is NULL
   */
  team?: string | null;
  /** Player's jersey number */
  number?: number;
  /** Player's full name */
  name?: string | null;
  /**
   * The primary position of the player. Possible Values: C; CB; DB; DE; DL; DT; FB; FS; G; ILB; K;
   * KR; LB; LS; NT; OL; OLB; OT; P; QB; RB; S; SS; T; TE; WR
   */
  position?: string | null;
  /** The category of the player's position (OFF; DEF; ST) */
  positionCategory?: string | null;
  /** The total number of games that the player was active for in the season */
  activated?: number;
  /** The total number of games played by the the player in the season */
  played?: number;
  /** Total games started (on offense or defense) by the player in the season */
  started?: number;
  /** Total passes thrown by the player in the season */
  passingAttempts?: number;
  /** Total passes completed by the player in the season */
  passingCompletions?: number;
  /** Total passing yards by the player in the season */
  passingYards?: number;
  /** The percentage of passes completed by the player in the season */
  passingCompletionPercentage?: number;
  /** Total average passing yards per attempt by the player in the season */
  passingYardsPerAttempt?: number;
  /** Total average passing yards per completion by the player in the season */
  passingYardsPerCompletion?: number;
  /** Total passing touchdowns by the player in the season */
  passingTouchdowns?: number;
  /** Total interceptions thrown by the player in the season */
  passingInterceptions?: number;
  /** The passer rating of the player in the season */
  passingRating?: number;
  /** Total yards of longest completion by the player in the season */
  passingLong?: number;
  /** The total number of times the player was sacked in the season */
  passingSacks?: number;
  /** Total yards lost by the player in the season as a result of being sacked */
  passingSackYards?: number;
  /** Total rushing attempts by the player in the season */
  rushingAttempts?: number;
  /** Total rushing yards by the player in the season */
  rushingYards?: number;
  /** Total rushing yards per attempt by the player in the season */
  rushingYardsPerAttempt?: number;
  /** Total rushing touchdowns by the player in the season */
  rushingTouchdowns?: number;
  /** The longest rush by the player in the season */
  rushingLong?: number;
  /** Total receiving targets by the player in the season */
  receivingTargets?: number | null;
  /** Total receptions by the player in the season */
  receptions?: number;
  /** Total receiving yards by the player in the season */
  receivingYards?: number;
  /** Average receiving yards per reception by the player in the season */
  receivingYardsPerReception?: number;
  /** Total receiving touchdowns by the player in the season */
  receivingTouchdowns?: number;
  /** The longest reception by the player in the season */
  receivingLong?: number;
  /** Total fumbles by the player in the season */
  fumbles?: number;
  /** Total fumbles lost by the player in the season */
  fumblesLost?: number | null;
  /** Total punt returns by the player in the season */
  puntReturns?: number;
  /** Total punt return yards by the player in the season */
  puntReturnYards?: number;
  /** Total average yards gained per punt return by the player in the season */
  puntReturnYardsPerAttempt?: number;
  /** Total punt return touchdowns by the player in the season */
  puntReturnTouchdowns?: number;
  /** The longest punt return by the player in the season */
  puntReturnLong?: number;
  /** Total kickoff returns by the player in the season */
  kickReturns?: number;
  /** Total kickoff return yards by the player in the season */
  kickReturnYards?: number;
  /** Average yards gained per kick return by the player in the season */
  kickReturnYardsPerAttempt?: number;
  /** Total kickoff return touchdowns by the player in the season */
  kickReturnTouchdowns?: number;
  /** Longest kick return by the player in the season */
  kickReturnLong?: number;
  /** Total defensive solo (unassisted) tackles by the player in the season */
  soloTackles?: number;
  /** Total defensive assisted tackles by the player in the season */
  assistedTackles?: number;
  /**
   * Total tackles for loss by the player in the season. Note: these are tackles behind the line of
   * scrimmage for loss of yards (including sacks)
   */
  tacklesForLoss?: number | null;
  /** Total defensive sacks by the player in the season */
  sacks?: number;
  /** Total defensive safeties scored by the player in the season */
  sackYards?: number;
  /**
   * Total quarterback hits by the player in the season. Note: This is a defensive stat that
   * includes sacks
   */
  quarterbackHits?: number | null;
  /** Total passes defended by the player in the season */
  passesDefended?: number;
  /** Total fumbles forced on defense by the player in the season */
  fumblesForced?: number;
  /** Total defensive fumble recoveries by the player in the season */
  fumblesRecovered?: number;
  /** Total fumble return yards by the player in the season */
  fumbleReturnYards?: number;
  /** Total fumble return touchdowns by the player in the season */
  fumbleReturnTouchdowns?: number;
  /** Total defensive interceptions by the player in the season */
  interceptions?: number;
  /** Total defensive interception return yards by the player in the season */
  interceptionReturnYards?: number;
  /** Total defensive interception return touchdowns by the player in the season */
  interceptionReturnTouchdowns?: number;
  /**
   * Total blocked kicks by the player in the season. Note: BlockedKicks include Field Goals and
   * Punts but NOT Extra Points
   */
  blockedKicks?: number;
  /** This field is deprecated */
  specialTeamsSoloTackles?: number;
  /** This field is deprecated */
  specialTeamsAssistedTackles?: number;
  /** This field is deprecated */
  miscSoloTackles?: number;
  /** This field is deprecated */
  miscAssistedTackles?: number;
  /** Total number of punts by the player in the season */
  punts?: number;
  /** Total punt yards by the player in the season */
  puntYards?: number;
  /** The average number of yards per punt by the player in the season */
  puntAverage?: number;
  /** Total field goals attempted by the player in the season */
  fieldGoalsAttempted?: number;
  /** Total field goals made by the player in season */
  fieldGoalsMade?: number;
  /** Longest field goal made by the player in the season */
  fieldGoalsLongestMade?: number;
  /** Total extra points made by the player in the season */
  extraPointsMade?: number;
  /** Total successful two point conversion passes by the player in the season */
  twoPointConversionPasses?: number;
  /** Total successful two point conversion rushes by the player in the season */
  twoPointConversionRuns?: number;
  /** Total successful two point conversion receptions by the player in the season */
  twoPointConversionReceptions?: number;
  /** Fantasy points scored based on basic fantasy scoring system by the player in the season */
  fantasyPoints?: number;
  /** Fantasy points scored based on basic PPR fantasy scoring system by the player in the season */
  fantasyPointsPpr?: number;
  /** Total percentage of receiving targets that were receptions by the player in the season */
  receptionPercentage?: number;
  /** Average receiving yards per target by the player in the season */
  receivingYardsPerTarget?: number;
  /** Total tackles (solo & assisted) by the player in the season */
  tackles?: number;
  /** Total offensive touchdowns scored by the player in the season */
  offensiveTouchdowns?: number;
  /** Total defensive touchdowns scored by the player in the season */
  defensiveTouchdowns?: number;
  /** Total special teams touchdowns scored by the player in the season */
  specialTeamsTouchdowns?: number;
  /** Total touchdowns scored by the player in the season */
  touchdowns?: number;
  /**
   * The player's fantasy football position. Possible values: QB, RB, WR, TE, DL, LB, DB, K, P, OL
   */
  fantasyPosition?: string | null;
  /** Total field goal attempts made by the player in the season */
  fieldGoalPercentage?: number;
  /**
   * Unique ID of PlayerSeason record (subject to change, although it very rarely does). For a
   * static ID, use a combination of SeasonType, Season and PlayerID.
   */
  playerSeasonId?: number;
  /**
   * Total own fumble recoveries by the player in the season. Note: this fumble doesn't result in a
   * turnover - the fumbling team recovers the fumble
   */
  fumblesOwnRecoveries?: number | null;
  /** This field is deprecated */
  fumblesOutOfBounds?: number | null;
  /** This field is deprecated */
  kickReturnFairCatches?: number | null;
  /** This field is deprecated. */
  puntReturnFairCatches?: number | null;
  /** Total punts that resulted in touchbacks by the player in the season */
  puntTouchbacks?: number | null;
  /** Total punts downed inside the 20 yard line by the player in the season */
  puntInside20?: number | null;
  /** The average net yards per punt by the player in the season */
  puntNetAverage?: number | null;
  /** Total extra point kicks attempted by the player in the season */
  extraPointsAttempted?: number | null;
  /** Total blocked kick recovery return touchdowns for the player in the season */
  blockedKickReturnTouchdowns?: number | null;
  /**
   * Total field goal return touchdowns by the player in the season. Note: This field excludes
   * blocked field goals
   */
  fieldGoalReturnTouchdowns?: number | null;
  /**
   * Defensive safeties (sacks in end zone, solo tackles in end zone, blocked kicks that went out of
   * bounds in the end zone)
   */
  safeties?: number | null;
  /** Total field goals by the player that were blocked in the season */
  fieldGoalsHadBlocked?: number | null;
  /** Total punts by the player that were blocked in the season */
  puntsHadBlocked?: number | null;
  /** Total extra point kick attempts by the player that were blocked in the season */
  extraPointsHadBlocked?: number | null;
  /** The longest punt by the player in the season */
  puntLong?: number | null;
  /** Total blocked kick recovery return yards for the player in the season */
  blockedKickReturnYards?: number | null;
  /**
   * Total field goal return yards by the player in the season. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnYards?: number | null;
  /** The net yards of the punts by the player in the season */
  puntNetYards?: number | null;
  /** This field is deprecated */
  specialTeamsFumblesForced?: number | null;
  /** This field is deprecated */
  specialTeamsFumblesRecovered?: number | null;
  /** This field is deprecated */
  miscFumblesForced?: number | null;
  /** This field is deprecated */
  miscFumblesRecovered?: number | null;
  /** The first initial and last name of the player (J. Doe) */
  shortName?: string | null;
  /** This field is deprecated */
  safetiesAllowed?: number | null;
  /** Temperature at game start (Fahrenheit) */
  temperature?: number | null;
  /** The humidity percentage at the start of the game */
  humidity?: number | null;
  /** The wind speed at the start of the game (in MPH) */
  windSpeed?: number | null;
  /**
   * Total snaps this player played on offensive in the season. Note: Snap counts are available the
   * morning after the game.
   */
  offensiveSnapsPlayed?: number | null;
  /**
   * Total snaps this player played on defense in the season. Note: Snap counts are available the
   * morning after the game.
   */
  defensiveSnapsPlayed?: number | null;
  /**
   * Total snaps this player played on special teams in the season. Note: Snap counts are available
   * the morning after the game.
   */
  specialTeamsSnapsPlayed?: number | null;
  /**
   * Total offensive snaps this player's team played in the season. Note: Snap counts are available
   * the morning after the game.
   */
  offensiveTeamSnaps?: number | null;
  /**
   * Total defensive snaps this player's team played in the season. Note: Snap counts are available
   * the morning after the game.
   */
  defensiveTeamSnaps?: number | null;
  /**
   * Total special teams snaps this player's team played in the season. Note: Snap counts are
   * available the morning after the game.
   */
  specialTeamsTeamSnaps?: number | null;
  /** Player's dollar value in a $200 salary cap auction draft. */
  auctionValue?: number | null;
  /** Player's dollar value in a $200 salary cap PPR auction draft. */
  auctionValuePpr?: number | null;
  /** Total successful two point conversion returns by the player in the season */
  twoPointConversionReturns?: number | null;
  /** Fantasy points based on FanDuel's scoring system by the player in the season */
  fantasyPointsFanDuel?: number | null;
  /** Total field goals of 0 to 19 yards made by the player in season */
  fieldGoalsMade0To19?: number | null;
  /** Total field goals of 20 to 29 yards made by the player in season */
  fieldGoalsMade20To29?: number | null;
  /** Total field goals of 30 to 39 yards made by the player in season */
  fieldGoalsMade30To39?: number | null;
  /** Total field goals of 40 to 49 yards made by the player in season */
  fieldGoalsMade40To49?: number | null;
  /** Total field goals of 50+ yards made by the player in season */
  fieldGoalsMade50Plus?: number | null;
  /** Fantasy points based on DraftKings' scoring system by the player in the season */
  fantasyPointsDraftKings?: number | null;
  /** Fantasy points based on Yahoo's daily fantasy scoring system by the player in the season */
  fantasyPointsYahoo?: number | null;
  /** The average draft position of the player in re-draft leagues */
  averageDraftPosition?: number | null;
  /** The average draft position of this player in Points Per Reception (PPR) leagues. */
  averageDraftPositionPpr?: number | null;
  /**
   * The unique ID of the team that the player is on. Note: If the player is a free agent; this
   * field is NULL
   */
  teamId?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** Fantasy points based on FantasyDraft's scoring system by the player in the season */
  fantasyPointsFantasyDraft?: number | null;
  /** The details of the scoring plays this player recorded in the season */
  scoringDetails?: ScoringDetail[];
  /** The average draft position of this rookie in Points Per Reception (PPR) leagues. */
  averageDraftPositionRookie?: number | null;
  /** The average draft position of this player in dynasty drafts leagues */
  averageDraftPositionDynasty?: number | null;
  /** The average draft position of this player in 2 Quarterback leagues */
  averageDraftPosition2Qb?: number | null;
  /** This field is deprecated */
  offensiveFumbleRecoveryTouchdowns?: number | null;
};

export const playerSeasonSchema: Schema<PlayerSeason> = s.object<PlayerSeason>({
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  number: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  activated: s.optional(s.int()),
  played: s.optional(s.int()),
  started: s.optional(s.int()),
  passingAttempts: s.optional(s.float64()),
  passingCompletions: s.optional(s.float64()),
  passingYards: s.optional(s.float64()),
  passingCompletionPercentage: s.optional(s.float64()),
  passingYardsPerAttempt: s.optional(s.float64()),
  passingYardsPerCompletion: s.optional(s.float64()),
  passingTouchdowns: s.optional(s.float64()),
  passingInterceptions: s.optional(s.float64()),
  passingRating: s.optional(s.float64()),
  passingLong: s.optional(s.float64()),
  passingSacks: s.optional(s.float64()),
  passingSackYards: s.optional(s.float64()),
  rushingAttempts: s.optional(s.float64()),
  rushingYards: s.optional(s.float64()),
  rushingYardsPerAttempt: s.optional(s.float64()),
  rushingTouchdowns: s.optional(s.float64()),
  rushingLong: s.optional(s.float64()),
  receivingTargets: s.optionalNullable(s.float64()),
  receptions: s.optional(s.float64()),
  receivingYards: s.optional(s.float64()),
  receivingYardsPerReception: s.optional(s.float64()),
  receivingTouchdowns: s.optional(s.float64()),
  receivingLong: s.optional(s.float64()),
  fumbles: s.optional(s.float64()),
  fumblesLost: s.optionalNullable(s.float64()),
  puntReturns: s.optional(s.float64()),
  puntReturnYards: s.optional(s.float64()),
  puntReturnYardsPerAttempt: s.optional(s.float64()),
  puntReturnTouchdowns: s.optional(s.float64()),
  puntReturnLong: s.optional(s.float64()),
  kickReturns: s.optional(s.float64()),
  kickReturnYards: s.optional(s.float64()),
  kickReturnYardsPerAttempt: s.optional(s.float64()),
  kickReturnTouchdowns: s.optional(s.float64()),
  kickReturnLong: s.optional(s.float64()),
  soloTackles: s.optional(s.float64()),
  assistedTackles: s.optional(s.float64()),
  tacklesForLoss: s.optionalNullable(s.float64()),
  sacks: s.optional(s.float64()),
  sackYards: s.optional(s.float64()),
  quarterbackHits: s.optionalNullable(s.float64()),
  passesDefended: s.optional(s.float64()),
  fumblesForced: s.optional(s.float64()),
  fumblesRecovered: s.optional(s.float64()),
  fumbleReturnYards: s.optional(s.float64()),
  fumbleReturnTouchdowns: s.optional(s.float64()),
  interceptions: s.optional(s.float64()),
  interceptionReturnYards: s.optional(s.float64()),
  interceptionReturnTouchdowns: s.optional(s.float64()),
  blockedKicks: s.optional(s.float64()),
  specialTeamsSoloTackles: s.optional(s.float64()),
  specialTeamsAssistedTackles: s.optional(s.float64()),
  miscSoloTackles: s.optional(s.float64()),
  miscAssistedTackles: s.optional(s.float64()),
  punts: s.optional(s.float64()),
  puntYards: s.optional(s.float64()),
  puntAverage: s.optional(s.float64()),
  fieldGoalsAttempted: s.optional(s.float64()),
  fieldGoalsMade: s.optional(s.float64()),
  fieldGoalsLongestMade: s.optional(s.float64()),
  extraPointsMade: s.optional(s.float64()),
  twoPointConversionPasses: s.optional(s.float64()),
  twoPointConversionRuns: s.optional(s.float64()),
  twoPointConversionReceptions: s.optional(s.float64()),
  fantasyPoints: s.optional(s.float64()),
  fantasyPointsPpr: s.optional(s.float64()),
  receptionPercentage: s.optional(s.float64()),
  receivingYardsPerTarget: s.optional(s.float64()),
  tackles: s.optional(s.float64()),
  offensiveTouchdowns: s.optional(s.float64()),
  defensiveTouchdowns: s.optional(s.float64()),
  specialTeamsTouchdowns: s.optional(s.float64()),
  touchdowns: s.optional(s.float64()),
  fantasyPosition: s.optionalNullable(s.string()),
  fieldGoalPercentage: s.optional(s.float64()),
  playerSeasonId: s.optional(s.int()),
  fumblesOwnRecoveries: s.optionalNullable(s.float64()),
  fumblesOutOfBounds: s.optionalNullable(s.float64()),
  kickReturnFairCatches: s.optionalNullable(s.float64()),
  puntReturnFairCatches: s.optionalNullable(s.float64()),
  puntTouchbacks: s.optionalNullable(s.float64()),
  puntInside20: s.optionalNullable(s.float64()),
  puntNetAverage: s.optionalNullable(s.float64()),
  extraPointsAttempted: s.optionalNullable(s.float64()),
  blockedKickReturnTouchdowns: s.optionalNullable(s.float64()),
  fieldGoalReturnTouchdowns: s.optionalNullable(s.float64()),
  safeties: s.optionalNullable(s.float64()),
  fieldGoalsHadBlocked: s.optionalNullable(s.float64()),
  puntsHadBlocked: s.optionalNullable(s.float64()),
  extraPointsHadBlocked: s.optionalNullable(s.float64()),
  puntLong: s.optionalNullable(s.float64()),
  blockedKickReturnYards: s.optionalNullable(s.float64()),
  fieldGoalReturnYards: s.optionalNullable(s.float64()),
  puntNetYards: s.optionalNullable(s.float64()),
  specialTeamsFumblesForced: s.optionalNullable(s.float64()),
  specialTeamsFumblesRecovered: s.optionalNullable(s.float64()),
  miscFumblesForced: s.optionalNullable(s.float64()),
  miscFumblesRecovered: s.optionalNullable(s.float64()),
  shortName: s.optionalNullable(s.string()),
  safetiesAllowed: s.optionalNullable(s.float64()),
  temperature: s.optionalNullable(s.int()),
  humidity: s.optionalNullable(s.int()),
  windSpeed: s.optionalNullable(s.int()),
  offensiveSnapsPlayed: s.optionalNullable(s.int()),
  defensiveSnapsPlayed: s.optionalNullable(s.int()),
  specialTeamsSnapsPlayed: s.optionalNullable(s.int()),
  offensiveTeamSnaps: s.optionalNullable(s.int()),
  defensiveTeamSnaps: s.optionalNullable(s.int()),
  specialTeamsTeamSnaps: s.optionalNullable(s.int()),
  auctionValue: s.optionalNullable(s.float64()),
  auctionValuePpr: s.optionalNullable(s.float64()),
  twoPointConversionReturns: s.optionalNullable(s.float64()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fieldGoalsMade0To19: s.optionalNullable(s.float64()),
  fieldGoalsMade20To29: s.optionalNullable(s.float64()),
  fieldGoalsMade30To39: s.optionalNullable(s.float64()),
  fieldGoalsMade40To49: s.optionalNullable(s.float64()),
  fieldGoalsMade50Plus: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  averageDraftPosition: s.optionalNullable(s.float64()),
  averageDraftPositionPpr: s.optionalNullable(s.float64()),
  teamId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.float64()),
  scoringDetails: s.optional(s.array(s.lazy(() => scoringDetailSchema))),
  averageDraftPositionRookie: s.optionalNullable(s.float64()),
  averageDraftPositionDynasty: s.optionalNullable(s.float64()),
  averageDraftPosition2Qb: s.optionalNullable(s.float64()),
  offensiveFumbleRecoveryTouchdowns: s.optionalNullable(s.int()),
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
