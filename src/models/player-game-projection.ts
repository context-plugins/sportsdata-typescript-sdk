import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scoringDetailSchema, type ScoringDetail } from "./scoring-detail.js";

export type PlayerGameProjection = {
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameID is
   * composed of Season; SeasonType; Week and HomeTeam.. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
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
  /** The NFL season of the game */
  season?: number;
  /** The date and time the game is scheduled to start */
  gameDate?: string | null;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /**
   * The abbreviation [Key] of the team that the player is on. Note: if this player is a free agent;
   * this field is NULL
   */
  team?: string | null;
  /** The abbreviation [Key] of the opponent team */
  opponent?: string | null;
  /** Whether the team is home or away */
  homeOrAway?: string | null;
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
  /** Whether or not the player was active for the game */
  activated?: number;
  /**
   * Whether the player played at least one snap in the game Note: Will return "1" if player played
   * at least one snap and "0" if they did not
   */
  played?: number;
  /**
   * Whether the player started the game (on offensive or defense). Note: Started = 1 / Did Not
   * Start = 0
   */
  started?: number;
  /** Total passes thrown by the player in the game */
  passingAttempts?: number;
  /** Total passes completed by the player in the game */
  passingCompletions?: number;
  /** Total passing yards by the player in the game */
  passingYards?: number;
  /** The percentage of passes completed by the player in the game */
  passingCompletionPercentage?: number;
  /** Total average passing yards per attempt by the player in the game */
  passingYardsPerAttempt?: number;
  /** Total average passing yards per completion by the player in the game */
  passingYardsPerCompletion?: number;
  /** Total passing touchdowns by the player in the game */
  passingTouchdowns?: number;
  /** Total interceptions thrown by the player in the game */
  passingInterceptions?: number;
  /** The passer rating of the player in the game */
  passingRating?: number;
  /** Total yards of longest completion by the player in the game */
  passingLong?: number;
  /** The total number of times the player was sacked in the game */
  passingSacks?: number;
  /** Total yards lost by the player in the game as a result of being sacked */
  passingSackYards?: number;
  /** Total rushing attempts by the player in the game */
  rushingAttempts?: number;
  /** Total rushing yards by the player in the game */
  rushingYards?: number;
  /** Total rushing yards per attempt by the player in the game */
  rushingYardsPerAttempt?: number;
  /** Total rushing touchdowns by the player in the game */
  rushingTouchdowns?: number;
  /** The longest rush by the player in the game */
  rushingLong?: number;
  /** Total receiving targets by the player in the game */
  receivingTargets?: number | null;
  /** Total receptions by the player in the game */
  receptions?: number;
  /** Total receiving yards by the player in the game */
  receivingYards?: number;
  /** Average receiving yards per reception by the player in the game */
  receivingYardsPerReception?: number;
  /** Total receiving touchdowns by the player in the game */
  receivingTouchdowns?: number;
  /** The longest reception by the player in the game */
  receivingLong?: number;
  /** Total fumbles by the player in the game */
  fumbles?: number;
  /** Total fumbles lost by the player in the game */
  fumblesLost?: number | null;
  /** Total punt returns by the player in the game */
  puntReturns?: number;
  /** Total punt return yards by the player in the game */
  puntReturnYards?: number;
  /** Total average yards gained per punt return by the player in the game */
  puntReturnYardsPerAttempt?: number;
  /** Total punt return touchdowns by the player in the game */
  puntReturnTouchdowns?: number;
  /** The longest punt return by the player in the game */
  puntReturnLong?: number;
  /** Total kickoff returns by the player in the game */
  kickReturns?: number;
  /** Total kickoff return yards by the player in the game */
  kickReturnYards?: number;
  /** Average yards gained per kick return by the player in the game */
  kickReturnYardsPerAttempt?: number;
  /** Total kickoff return touchdowns by the player in the game */
  kickReturnTouchdowns?: number;
  /** Longest kick return by the player in the game */
  kickReturnLong?: number;
  /** Total defensive solo (unassisted) tackles by the player in the game */
  soloTackles?: number;
  /** Total defensive assisted tackles by the player in the game */
  assistedTackles?: number;
  /**
   * Total tackles for loss by the player in the game. Note: these are tackles behind the line of
   * scrimmage for loss of yards (including sacks)
   */
  tacklesForLoss?: number | null;
  /** Total defensive sacks by the player in the game */
  sacks?: number;
  /** Total defensive sacks yards by the player in the game */
  sackYards?: number;
  /**
   * Total quarterback hits by the player in the game. Note: This is a defensive stat that includes
   * sacks
   */
  quarterbackHits?: number | null;
  /** Total passes defended by the player in the game */
  passesDefended?: number;
  /** Total fumbles forced on defense by the player in the game */
  fumblesForced?: number;
  /** Total defensive fumble recoveries by the player in the game */
  fumblesRecovered?: number;
  /** Total fumble return yards by the player in the game */
  fumbleReturnYards?: number;
  /** Total fumble return touchdowns by the player in the game */
  fumbleReturnTouchdowns?: number;
  /** Total defensive interceptions by the player in the game */
  interceptions?: number;
  /** Total defensive interception return yards by the player in the game */
  interceptionReturnYards?: number;
  /** Total defensive interception return touchdowns by the player in the game */
  interceptionReturnTouchdowns?: number;
  /**
   * Total blocked kicks by the player in the game. Note: BlockedKicks include Field Goals and Punts
   * but NOT Extra Points
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
  /** Total number of punts by the player in the game */
  punts?: number;
  /** Total punt yards by the player in the game */
  puntYards?: number;
  /** The average number of yards per punt by the player in the game */
  puntAverage?: number;
  /** Total field goals attempted by the player in the game */
  fieldGoalsAttempted?: number;
  /** Total field goals made by the player in game */
  fieldGoalsMade?: number;
  /** Longest field goal made by the player in the game */
  fieldGoalsLongestMade?: number;
  /** Total extra points made by the player in the game */
  extraPointsMade?: number;
  /** Total successful two point conversion passes by the player in the game */
  twoPointConversionPasses?: number;
  /** Total successful two point conversion rushes by the player in the game */
  twoPointConversionRuns?: number;
  /** Total successful two point conversion receptions by the player in the game */
  twoPointConversionReceptions?: number;
  /** Fantasy points scored based on basic fantasy scoring system by the player in the game */
  fantasyPoints?: number;
  /** This field is expected to be NULL */
  fantasyPointsPpr?: number;
  /** Total percentage of receiving targets that were receptions by the player in the game */
  receptionPercentage?: number;
  /** Average receiving yards per target by the player in the game */
  receivingYardsPerTarget?: number;
  /** Total tackles (solo & assisted) by the player in the game */
  tackles?: number;
  /** Total offensive touchdowns scored by the player in the game */
  offensiveTouchdowns?: number;
  /** Total defensive touchdowns scored by the player in the game */
  defensiveTouchdowns?: number;
  /** Total special teams touchdowns scored by the player in the game */
  specialTeamsTouchdowns?: number;
  /** Total touchdowns scored by the player in the game (excludes passing touchdowns) */
  touchdowns?: number;
  /**
   * The player's fantasy football position. Possible values: QB; RB; WR; TE; DL; LB; DB; K; P; OL
   */
  fantasyPosition?: string | null;
  /** Total field goal attempts made by the player in the game */
  fieldGoalPercentage?: number;
  /**
   * Unique ID of PlayerGame record (subject to change, although it very rarely does). For a static
   * ID, use a combination of GameKey and PlayerID.
   */
  playerGameId?: number;
  /**
   * Total own fumble recoveries by the player in the game. Note: this fumble doesn't result in a
   * turnover - the fumbling team recovers the fumble
   */
  fumblesOwnRecoveries?: number | null;
  /** This field is deprecated */
  fumblesOutOfBounds?: number | null;
  /** This field is deprecated */
  kickReturnFairCatches?: number | null;
  /** This field is deprecated */
  puntReturnFairCatches?: number | null;
  /** Total punts that resulted in touchbacks by the player in the game */
  puntTouchbacks?: number | null;
  /** Total punts downed inside the 20 yard line by the player in the game */
  puntInside20?: number | null;
  /** The average net yards per punt by the player in the game */
  puntNetAverage?: number | null;
  /** Total extra point kicks attempted by the player in the game */
  extraPointsAttempted?: number | null;
  /** Total blocked kick recovery return touchdowns for the player in the game */
  blockedKickReturnTouchdowns?: number | null;
  /**
   * Total field goal return touchdowns by the player in the game. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnTouchdowns?: number | null;
  /** Total defensive safeties scored by the player in the game */
  safeties?: number | null;
  /** Total field goals by the player that were blocked in the game */
  fieldGoalsHadBlocked?: number | null;
  /** Total punts by the player that were blocked in the game */
  puntsHadBlocked?: number | null;
  /** Total extra point kick attempts by the player that were blocked in the game */
  extraPointsHadBlocked?: number | null;
  /** The longest punt by the player in the game */
  puntLong?: number | null;
  /** Total blocked kick recovery return yards for the player in the game */
  blockedKickReturnYards?: number | null;
  /**
   * Total field goal return yards by the player in the game. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnYards?: number | null;
  /** The net yards of the punts by the player in the game */
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
  /** The playing surface of the stadium */
  playingSurface?: string | null;
  /** Whether the game is over (true/false) */
  isGameOver?: boolean | null;
  /** This field is deprecated */
  safetiesAllowed?: number | null;
  /** Stadium of the event */
  stadium?: string | null;
  /** Temperature at game start (Fahrenheit) */
  temperature?: number | null;
  /** The humidity percentage at the start of the game */
  humidity?: number | null;
  /** The wind speed at the start of the game (in MPH) */
  windSpeed?: number | null;
  /** The player's salary for FanDuel daily fantasy contests. */
  fanDuelSalary?: number | null;
  /** The player's salary for DraftKings daily fantasy contests. */
  draftKingsSalary?: number | null;
  /**
   * The player's salary as calculated by SportsDataIO (formerly known as FantasyData). Based on the
   * same salary cap as DraftKings contests ($50,000).
   */
  fantasyDataSalary?: number | null;
  /**
   * Total snaps this player played on offense in the game. Note: Snap counts are available the
   * morning after the game.
   */
  offensiveSnapsPlayed?: number | null;
  /**
   * Total snaps this player played on defense in the game. Note: Snap counts are available the
   * morning after the game.
   */
  defensiveSnapsPlayed?: number | null;
  /**
   * Total snaps this player played on special teams in the game. Note: Snap counts are available
   * the morning after the game.
   */
  specialTeamsSnapsPlayed?: number | null;
  /**
   * Total offensive snaps this player's team played in the game. Note: Snap counts are available
   * the morning after the game.
   */
  offensiveTeamSnaps?: number | null;
  /**
   * Total defensive snaps this player's team played in the game. Note: Snap counts are available
   * the morning after the game.
   */
  defensiveTeamSnaps?: number | null;
  /**
   * Total special teams snaps this player's team played in the game. Note: Snap counts are
   * available the morning after the game.
   */
  specialTeamsTeamSnaps?: number | null;
  /** The player's salary for Victiv daily fantasy contests. */
  victivSalary?: number | null;
  /** Total successful two point conversion returns by the player in the game */
  twoPointConversionReturns?: number | null;
  /** Fantasy points based on FanDuel's scoring system by the player in the game */
  fantasyPointsFanDuel?: number | null;
  /** Total field goals of 0 to 19 yards made by the player in game */
  fieldGoalsMade0To19?: number | null;
  /** Total field goals of 20 to 29 yards made by the player in game */
  fieldGoalsMade20To29?: number | null;
  /** Total field goals of 30 to 39 yards made by the player in game */
  fieldGoalsMade30To39?: number | null;
  /** Total field goals of 40 to 49 yards made by the player in game */
  fieldGoalsMade40To49?: number | null;
  /** Total field goals of 50+ yards made by the player in game */
  fieldGoalsMade50Plus?: number | null;
  /** Fantasy points based on DraftKings' scoring system by the player in the game */
  fantasyPointsDraftKings?: number | null;
  /** The player's salary for Yahoo daily fantasy contests */
  yahooSalary?: number | null;
  /** Fantasy points based on Yahoo's daily fantasy scoring system by the player in the game */
  fantasyPointsYahoo?: number | null;
  /**
   * The player's current injury status; in the form of likelihood that player plays (Probable;
   * Questionable; Doubtful; Out)
   */
  injuryStatus?: string | null;
  /** The body part that is injured for the player (Knee; Groin; Calf; Hamstring; etc.) */
  injuryBodyPart?: string | null;
  /** The day that the player's injury started or was first discovered */
  injuryStartDate?: string | null;
  /** A brief description of the player's injury and expected availability */
  injuryNotes?: string | null;
  /** The player's eligible position in FanDuel's daily fantasy sports platform. */
  fanDuelPosition?: string | null;
  /** The player's eligible position in DraftKings' daily fantasy sports platform. */
  draftKingsPosition?: string | null;
  /** The player's eligible position in Yahoo's daily fantasy sports platform */
  yahooPosition?: string | null;
  /** The ranking of the player's opponent with regards to fantasy points allowed. */
  opponentRank?: number | null;
  /** The ranking of the player's opponent by position with regards to fantasy points allowed. */
  opponentPositionRank?: number | null;
  /** This field is deprecated */
  injuryPractice?: string | null;
  /** This field is deprecated */
  injuryPracticeDescription?: string | null;
  /**
   * Whether the player has been declared inactive. This value is updated in the hours leading up to
   * game start time; as teams announce their inactive players. Note: This is only updated for
   * offensive skill position players (QB; RB; WR; TE)
   */
  declaredInactive?: boolean;
  /** The player's salary for FantasyDraft daily fantasy contests. */
  fantasyDraftSalary?: number | null;
  /** The player's eligible position in FantasyDraft's daily fantasy sports platform. */
  fantasyDraftPosition?: string | null;
  /**
   * The unique ID of the team that the player is on. Note: if the player is a free agent; this
   * field is NULL
   */
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
   * A globally unique ID for this opposing team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalOpponentId?: number | null;
  /** Unique ID of the score/game */
  scoreId?: number;
  /** This field is no longer in use and will return null. */
  fantasyPointsFantasyDraft?: number | null;
  /** The details of the scoring plays this player recorded in the game */
  scoringDetails?: ScoringDetail[];
  /** This field is deprecated */
  offensiveFumbleRecoveryTouchdowns?: number | null;
  /**
   * Whether snap count fields are confirmed (true/false). Note: This takes place the morning after
   * the game.
   */
  snapCountsConfirmed?: boolean | null;
  /** Time of last update (in US Eastern time). Note: this does not indicate that stats changed. */
  updated?: string | null;
};

export const playerGameProjectionSchema: Schema<PlayerGameProjection> = s.object<PlayerGameProjection>({
  gameKey: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  gameDate: s.optionalNullable(s.string()),
  week: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
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
  playerGameId: s.optional(s.int()),
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
  playingSurface: s.optionalNullable(s.string()),
  isGameOver: s.optionalNullable(s.boolean()),
  safetiesAllowed: s.optionalNullable(s.float64()),
  stadium: s.optionalNullable(s.string()),
  temperature: s.optionalNullable(s.int()),
  humidity: s.optionalNullable(s.int()),
  windSpeed: s.optionalNullable(s.int()),
  fanDuelSalary: s.optionalNullable(s.int()),
  draftKingsSalary: s.optionalNullable(s.int()),
  fantasyDataSalary: s.optionalNullable(s.int()),
  offensiveSnapsPlayed: s.optionalNullable(s.int()),
  defensiveSnapsPlayed: s.optionalNullable(s.int()),
  specialTeamsSnapsPlayed: s.optionalNullable(s.int()),
  offensiveTeamSnaps: s.optionalNullable(s.int()),
  defensiveTeamSnaps: s.optionalNullable(s.int()),
  specialTeamsTeamSnaps: s.optionalNullable(s.int()),
  victivSalary: s.optionalNullable(s.int()),
  twoPointConversionReturns: s.optionalNullable(s.float64()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fieldGoalsMade0To19: s.optionalNullable(s.float64()),
  fieldGoalsMade20To29: s.optionalNullable(s.float64()),
  fieldGoalsMade30To39: s.optionalNullable(s.float64()),
  fieldGoalsMade40To49: s.optionalNullable(s.float64()),
  fieldGoalsMade50Plus: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  yahooSalary: s.optionalNullable(s.int()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.int()),
  opponentPositionRank: s.optionalNullable(s.int()),
  injuryPractice: s.optionalNullable(s.string()),
  injuryPracticeDescription: s.optionalNullable(s.string()),
  declaredInactive: s.optional(s.boolean()),
  fantasyDraftSalary: s.optionalNullable(s.int()),
  fantasyDraftPosition: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  opponentId: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  globalGameId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  globalOpponentId: s.optionalNullable(s.int()),
  scoreId: s.optional(s.int()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.float64()),
  scoringDetails: s.optional(s.array(s.lazy(() => scoringDetailSchema))),
  offensiveFumbleRecoveryTouchdowns: s.optionalNullable(s.float64()),
  snapCountsConfirmed: s.optionalNullable(s.boolean()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    gameKey: "GameKey",
    playerId: "PlayerID",
    seasonType: "SeasonType",
    season: "Season",
    gameDate: "GameDate",
    week: "Week",
    team: "Team",
    opponent: "Opponent",
    homeOrAway: "HomeOrAway",
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
    playerGameId: "PlayerGameID",
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
    playingSurface: "PlayingSurface",
    isGameOver: "IsGameOver",
    safetiesAllowed: "SafetiesAllowed",
    stadium: "Stadium",
    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "WindSpeed",
    fanDuelSalary: "FanDuelSalary",
    draftKingsSalary: "DraftKingsSalary",
    fantasyDataSalary: "FantasyDataSalary",
    offensiveSnapsPlayed: "OffensiveSnapsPlayed",
    defensiveSnapsPlayed: "DefensiveSnapsPlayed",
    specialTeamsSnapsPlayed: "SpecialTeamsSnapsPlayed",
    offensiveTeamSnaps: "OffensiveTeamSnaps",
    defensiveTeamSnaps: "DefensiveTeamSnaps",
    specialTeamsTeamSnaps: "SpecialTeamsTeamSnaps",
    victivSalary: "VictivSalary",
    twoPointConversionReturns: "TwoPointConversionReturns",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fieldGoalsMade0To19: "FieldGoalsMade0to19",
    fieldGoalsMade20To29: "FieldGoalsMade20to29",
    fieldGoalsMade30To39: "FieldGoalsMade30to39",
    fieldGoalsMade40To49: "FieldGoalsMade40to49",
    fieldGoalsMade50Plus: "FieldGoalsMade50Plus",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    yahooSalary: "YahooSalary",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    fanDuelPosition: "FanDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    opponentRank: "OpponentRank",
    opponentPositionRank: "OpponentPositionRank",
    injuryPractice: "InjuryPractice",
    injuryPracticeDescription: "InjuryPracticeDescription",
    declaredInactive: "DeclaredInactive",
    fantasyDraftSalary: "FantasyDraftSalary",
    fantasyDraftPosition: "FantasyDraftPosition",
    teamId: "TeamID",
    opponentId: "OpponentID",
    day: "Day",
    dateTime: "DateTime",
    globalGameId: "GlobalGameID",
    globalTeamId: "GlobalTeamID",
    globalOpponentId: "GlobalOpponentID",
    scoreId: "ScoreID",
    fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
    scoringDetails: "ScoringDetails",
    offensiveFumbleRecoveryTouchdowns: "OffensiveFumbleRecoveryTouchdowns",
    snapCountsConfirmed: "SnapCountsConfirmed",
    updated: "Updated",
  },
});
