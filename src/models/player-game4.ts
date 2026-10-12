import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGame4 = {
  /** The unique ID of the stats associated with the player in this game */
  statId?: number;
  /** The unique ID of the team associated with this player */
  teamId?: number | null;
  /**
   * The unique ID of the player as assigned by SportsDataIO. Note: this ID remains with the player
   * their entire collegiate career
   */
  playerId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number | null;
  /** The college football season of the game */
  season?: number | null;
  /** The player's full name */
  name?: string | null;
  /** The abbreviation [Key] of the team that the player is on */
  team?: string | null;
  /**
   * The player's primary position. Possible values: C; CB; DB; DE; DL; DT; FB; G; K; KR; LB; LS;
   * NT; OL; OLB; OT; P; PR; QB; RB; S; SS; TE; WR
   */
  position?: string | null;
  /** The category (Offense, Defense or Special Teams) of the players position (OFF, DEF, ST) */
  positionCategory?: string | null;
  /**
   * Indicates the player's injury status (possible values include: Probable, Questionable,
   * Doubtful, Out)
   */
  injuryStatus?: string | null;
  /** The body part that is injured (Knee, Groin, Calf, Hamstring, etc.) */
  injuryBodyPart?: string | null;
  /** The day that the injury started or was first discovered. */
  injuryStartDate?: string | null;
  /** Brief description of the player's injury and expected availability. */
  injuryNotes?: string | null;
  /**
   * A globally unique ID for this player's team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** The DraftKings player position for this game. */
  draftKingsPosition?: string | null;
  /**
   * A DraftKings salary for the next "standard" slate this game is in. NOTE: this may change as
   * slates start & this value changes to the next slate's salary.
   */
  draftKingsSalary?: number | null;
  /** The NFL week of the game (weeks 18-21 denote playoff games) */
  week?: number | null;
  /** The unique ID of this game */
  gameId?: number | null;
  /** The unique ID of the team's opponent */
  opponentId?: number | null;
  /** The name of the opponent */
  opponent?: string | null;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game */
  dateTime?: string | null;
  /** Whether the team is home or away */
  homeOrAway?: string | null;
  /** Whether the game is over (true/false) */
  isGameOver?: boolean;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number | null;
  /**
   * A globally unique ID for this opponent. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalOpponentId?: number | null;
  /** The updated date and time of the stat. */
  updated?: string | null;
  /** The date and time of the created stat. */
  created?: string | null;
  /** Indicates whether or not a player has recorded any stats for a given game. */
  games?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
  /** Total passing attempts */
  passingAttempts?: number | null;
  /** Total passing completions */
  passingCompletions?: number | null;
  /** Total passing yards */
  passingYards?: number | null;
  /** Total passing completion percentage */
  passingCompletionPercentage?: number | null;
  /** Total passing yards per attempts */
  passingYardsPerAttempt?: number | null;
  /** Total passing yards per completion */
  passingYardsPerCompletion?: number | null;
  /** Total passing touchdowns */
  passingTouchdowns?: number | null;
  /** Total passing interceptions */
  passingInterceptions?: number | null;
  /** Total passing rating */
  passingRating?: number | null;
  /** Total rushing attempts */
  rushingAttempts?: number | null;
  /** Total rushing yards */
  rushingYards?: number | null;
  /** Total rushing yards per attempt */
  rushingYardsPerAttempt?: number | null;
  /** Total rushing touchdowns */
  rushingTouchdowns?: number | null;
  /** Longest rushing attempt */
  rushingLong?: number | null;
  /** Total receptions */
  receptions?: number | null;
  /** Total receiving yards */
  receivingYards?: number | null;
  /** Total receiving yards per reception */
  receivingYardsPerReception?: number | null;
  /** Total receiving touchdowns */
  receivingTouchdowns?: number | null;
  /** Long receiving reception */
  receivingLong?: number | null;
  /** Total punt returns */
  puntReturns?: number | null;
  /** Total punt return yards */
  puntReturnYards?: number | null;
  /** Total punt return yards per attempt */
  puntReturnYardsPerAttempt?: number | null;
  /** Total punt return touchdowns */
  puntReturnTouchdowns?: number | null;
  /** Longest punt return */
  puntReturnLong?: number | null;
  /** Total kick returns */
  kickReturns?: number | null;
  /** Total kick return yards */
  kickReturnYards?: number | null;
  /** Total kick return yards per attempt */
  kickReturnYardsPerAttempt?: number | null;
  /** Total kick return touchdowns */
  kickReturnTouchdowns?: number | null;
  /** Longest kick return */
  kickReturnLong?: number | null;
  /** Total punts */
  punts?: number | null;
  /** Total punt yards */
  puntYards?: number | null;
  /** Total punt average */
  puntAverage?: number | null;
  /** Longest punt */
  puntLong?: number | null;
  /** Total field goals attempted */
  fieldGoalsAttempted?: number | null;
  /** Total field goals made */
  fieldGoalsMade?: number | null;
  /** Total field goal percentage */
  fieldGoalPercentage?: number | null;
  /** Longest field goal made */
  fieldGoalsLongestMade?: number | null;
  /** Total extra points attempted */
  extraPointsAttempted?: number | null;
  /** Total extra points made */
  extraPointsMade?: number | null;
  /** Total interceptions */
  interceptions?: number | null;
  /** Total interception return yards */
  interceptionReturnYards?: number | null;
  /** Total interception return touchdowns */
  interceptionReturnTouchdowns?: number | null;
  /** Total Solo Tackles */
  soloTackles?: number | null;
  /** Total Assisted Tackles */
  assistedTackles?: number | null;
  /** Total Tackles for a loss of yardage */
  tacklesForLoss?: number | null;
  /** Total Quarterback Sacks */
  sacks?: number | null;
  /** Total Passes Defended */
  passesDefended?: number | null;
  /** Total Fumble Recoveries */
  fumblesRecovered?: number | null;
  /** Total Fumbles Recovered and returned for a touchdown */
  fumbleReturnTouchdowns?: number | null;
  /** Total Quarterback Hurries. NOTE: This field is deprecated as of 2021. */
  quarterbackHurries?: number | null;
  /** Total Fumbles */
  fumbles?: number | null;
  /** Total Fumbles Lost */
  fumblesLost?: number | null;
};

export const playerGame4Schema: Schema<PlayerGame4> = s.object<PlayerGame4>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  draftKingsPosition: s.optionalNullable(s.string()),
  draftKingsSalary: s.optionalNullable(s.int()),
  week: s.optionalNullable(s.int()),
  gameId: s.optionalNullable(s.int()),
  opponentId: s.optionalNullable(s.int()),
  opponent: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  isGameOver: s.optional(s.boolean()),
  globalGameId: s.optionalNullable(s.int()),
  globalOpponentId: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  passingAttempts: s.optionalNullable(s.float64()),
  passingCompletions: s.optionalNullable(s.float64()),
  passingYards: s.optionalNullable(s.float64()),
  passingCompletionPercentage: s.optionalNullable(s.float64()),
  passingYardsPerAttempt: s.optionalNullable(s.float64()),
  passingYardsPerCompletion: s.optionalNullable(s.float64()),
  passingTouchdowns: s.optionalNullable(s.float64()),
  passingInterceptions: s.optionalNullable(s.float64()),
  passingRating: s.optionalNullable(s.float64()),
  rushingAttempts: s.optionalNullable(s.float64()),
  rushingYards: s.optionalNullable(s.float64()),
  rushingYardsPerAttempt: s.optionalNullable(s.float64()),
  rushingTouchdowns: s.optionalNullable(s.float64()),
  rushingLong: s.optionalNullable(s.float64()),
  receptions: s.optionalNullable(s.float64()),
  receivingYards: s.optionalNullable(s.float64()),
  receivingYardsPerReception: s.optionalNullable(s.float64()),
  receivingTouchdowns: s.optionalNullable(s.float64()),
  receivingLong: s.optionalNullable(s.float64()),
  puntReturns: s.optionalNullable(s.float64()),
  puntReturnYards: s.optionalNullable(s.float64()),
  puntReturnYardsPerAttempt: s.optionalNullable(s.float64()),
  puntReturnTouchdowns: s.optionalNullable(s.float64()),
  puntReturnLong: s.optionalNullable(s.float64()),
  kickReturns: s.optionalNullable(s.float64()),
  kickReturnYards: s.optionalNullable(s.float64()),
  kickReturnYardsPerAttempt: s.optionalNullable(s.float64()),
  kickReturnTouchdowns: s.optionalNullable(s.float64()),
  kickReturnLong: s.optionalNullable(s.float64()),
  punts: s.optionalNullable(s.float64()),
  puntYards: s.optionalNullable(s.float64()),
  puntAverage: s.optionalNullable(s.float64()),
  puntLong: s.optionalNullable(s.float64()),
  fieldGoalsAttempted: s.optionalNullable(s.float64()),
  fieldGoalsMade: s.optionalNullable(s.float64()),
  fieldGoalPercentage: s.optionalNullable(s.float64()),
  fieldGoalsLongestMade: s.optionalNullable(s.float64()),
  extraPointsAttempted: s.optionalNullable(s.float64()),
  extraPointsMade: s.optionalNullable(s.float64()),
  interceptions: s.optionalNullable(s.float64()),
  interceptionReturnYards: s.optionalNullable(s.float64()),
  interceptionReturnTouchdowns: s.optionalNullable(s.float64()),
  soloTackles: s.optionalNullable(s.float64()),
  assistedTackles: s.optionalNullable(s.float64()),
  tacklesForLoss: s.optionalNullable(s.float64()),
  sacks: s.optionalNullable(s.float64()),
  passesDefended: s.optionalNullable(s.float64()),
  fumblesRecovered: s.optionalNullable(s.float64()),
  fumbleReturnTouchdowns: s.optionalNullable(s.float64()),
  quarterbackHurries: s.optionalNullable(s.float64()),
  fumbles: s.optionalNullable(s.float64()),
  fumblesLost: s.optionalNullable(s.float64()),
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
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    globalTeamId: "GlobalTeamID",
    draftKingsPosition: "DraftKingsPosition",
    draftKingsSalary: "DraftKingsSalary",
    week: "Week",
    gameId: "GameID",
    opponentId: "OpponentID",
    opponent: "Opponent",
    day: "Day",
    dateTime: "DateTime",
    homeOrAway: "HomeOrAway",
    isGameOver: "IsGameOver",
    globalGameId: "GlobalGameID",
    globalOpponentId: "GlobalOpponentID",
    updated: "Updated",
    created: "Created",
    games: "Games",
    fantasyPoints: "FantasyPoints",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingCompletionPercentage: "PassingCompletionPercentage",
    passingYardsPerAttempt: "PassingYardsPerAttempt",
    passingYardsPerCompletion: "PassingYardsPerCompletion",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingRating: "PassingRating",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingYardsPerAttempt: "RushingYardsPerAttempt",
    rushingTouchdowns: "RushingTouchdowns",
    rushingLong: "RushingLong",
    receptions: "Receptions",
    receivingYards: "ReceivingYards",
    receivingYardsPerReception: "ReceivingYardsPerReception",
    receivingTouchdowns: "ReceivingTouchdowns",
    receivingLong: "ReceivingLong",
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
    punts: "Punts",
    puntYards: "PuntYards",
    puntAverage: "PuntAverage",
    puntLong: "PuntLong",
    fieldGoalsAttempted: "FieldGoalsAttempted",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalPercentage: "FieldGoalPercentage",
    fieldGoalsLongestMade: "FieldGoalsLongestMade",
    extraPointsAttempted: "ExtraPointsAttempted",
    extraPointsMade: "ExtraPointsMade",
    interceptions: "Interceptions",
    interceptionReturnYards: "InterceptionReturnYards",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    tacklesForLoss: "TacklesForLoss",
    sacks: "Sacks",
    passesDefended: "PassesDefended",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    quarterbackHurries: "QuarterbackHurries",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
  },
});
