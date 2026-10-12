import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamGame3 = {
  /** The unique ID of the stat */
  statId?: number;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition)
   */
  seasonType?: number | null;
  /** The NHL season of the game */
  season?: number | null;
  /** The team's full name (ex. Minnesota Wild; New York Islanders) */
  name?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** Total number of wins by the team in the game. NOTE: this will be one for single game feeds */
  wins?: number | null;
  /**
   * Total losses for the team in the game. NOTE: this will be a maximum of one for single game
   * feeds
   */
  losses?: number | null;
  /** Total overtime losses by the team in the game */
  overtimeLosses?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
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
  /** The timestamp of when the record was last updated (US Eastern Time). */
  updated?: string | null;
  /** The number of games played. */
  games?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
  /** Total FanDuel daily fantasy points scored */
  fantasyPointsFanDuel?: number | null;
  /** Total DraftKings daily fantasy points scored */
  fantasyPointsDraftKings?: number | null;
  /** Total Yahoo daily fantasy points scored */
  fantasyPointsYahoo?: number | null;
  /** Total number of minutes played */
  minutes?: number | null;
  /** Total number of seconds played */
  seconds?: number | null;
  /** Total number of goals scored */
  goals?: number | null;
  /** Total number of assists */
  assists?: number | null;
  /** Total number of shots on goal */
  shotsOnGoal?: number | null;
  /** Total number of power play goals */
  powerPlayGoals?: number | null;
  /** Total number of short handed goals */
  shortHandedGoals?: number | null;
  /** Total number of empty net goals */
  emptyNetGoals?: number | null;
  /** Total number of power play assists */
  powerPlayAssists?: number | null;
  /** Total number of short handed assists */
  shortHandedAssists?: number | null;
  /** Total number of hat tricks */
  hatTricks?: number | null;
  /** Total number of shootout goals */
  shootoutGoals?: number | null;
  /** Total plus minus */
  plusMinus?: number | null;
  /** Total pentalty minutes */
  penaltyMinutes?: number | null;
  /** Total blocked shots */
  blocks?: number | null;
  /** Total hits */
  hits?: number | null;
  /** Total takeaways */
  takeaways?: number | null;
  /** Total giveaways */
  giveaways?: number | null;
  /** Total faceoffs won */
  faceoffsWon?: number | null;
  /** Total faceoffs lost */
  faceoffsLost?: number | null;
  /** Total shifts */
  shifts?: number | null;
  /** Total goaltending minutes */
  goaltendingMinutes?: number | null;
  /** Total goaltending seconds */
  goaltendingSeconds?: number | null;
  /** Total goaltending shots against */
  goaltendingShotsAgainst?: number | null;
  /** Total goaltending goals against */
  goaltendingGoalsAgainst?: number | null;
  /** Total goaltending saves */
  goaltendingSaves?: number | null;
  /** Total goaltending wins */
  goaltendingWins?: number | null;
  /** Total goaltendings losses */
  goaltendingLosses?: number | null;
  /** Total goaltendings shutouts */
  goaltendingShutouts?: number | null;
  /** Total games started */
  started?: number | null;
  /** Total bench pentalty minutes */
  benchPenaltyMinutes?: number | null;
  /** Total goaltending overtime losses */
  goaltendingOvertimeLosses?: number | null;
  /** Total FantasyDraft daily fantasy points scored */
  fantasyPointsFantasyDraft?: number | null;
};

export const teamGame3Schema: Schema<TeamGame3> = s.object<TeamGame3>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  overtimeLosses: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
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
  games: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  minutes: s.optionalNullable(s.int()),
  seconds: s.optionalNullable(s.int()),
  goals: s.optionalNullable(s.float64()),
  assists: s.optionalNullable(s.float64()),
  shotsOnGoal: s.optionalNullable(s.float64()),
  powerPlayGoals: s.optionalNullable(s.float64()),
  shortHandedGoals: s.optionalNullable(s.float64()),
  emptyNetGoals: s.optionalNullable(s.float64()),
  powerPlayAssists: s.optionalNullable(s.float64()),
  shortHandedAssists: s.optionalNullable(s.float64()),
  hatTricks: s.optionalNullable(s.float64()),
  shootoutGoals: s.optionalNullable(s.float64()),
  plusMinus: s.optionalNullable(s.float64()),
  penaltyMinutes: s.optionalNullable(s.float64()),
  blocks: s.optionalNullable(s.float64()),
  hits: s.optionalNullable(s.float64()),
  takeaways: s.optionalNullable(s.float64()),
  giveaways: s.optionalNullable(s.float64()),
  faceoffsWon: s.optionalNullable(s.float64()),
  faceoffsLost: s.optionalNullable(s.float64()),
  shifts: s.optionalNullable(s.float64()),
  goaltendingMinutes: s.optionalNullable(s.int()),
  goaltendingSeconds: s.optionalNullable(s.int()),
  goaltendingShotsAgainst: s.optionalNullable(s.float64()),
  goaltendingGoalsAgainst: s.optionalNullable(s.float64()),
  goaltendingSaves: s.optionalNullable(s.float64()),
  goaltendingWins: s.optionalNullable(s.float64()),
  goaltendingLosses: s.optionalNullable(s.float64()),
  goaltendingShutouts: s.optionalNullable(s.float64()),
  started: s.optionalNullable(s.int()),
  benchPenaltyMinutes: s.optionalNullable(s.float64()),
  goaltendingOvertimeLosses: s.optionalNullable(s.float64()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.float64()),
  _keysMap: {
    statId: "StatID",
    teamId: "TeamID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    wins: "Wins",
    losses: "Losses",
    overtimeLosses: "OvertimeLosses",
    globalTeamId: "GlobalTeamID",
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
    games: "Games",
    fantasyPoints: "FantasyPoints",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    minutes: "Minutes",
    seconds: "Seconds",
    goals: "Goals",
    assists: "Assists",
    shotsOnGoal: "ShotsOnGoal",
    powerPlayGoals: "PowerPlayGoals",
    shortHandedGoals: "ShortHandedGoals",
    emptyNetGoals: "EmptyNetGoals",
    powerPlayAssists: "PowerPlayAssists",
    shortHandedAssists: "ShortHandedAssists",
    hatTricks: "HatTricks",
    shootoutGoals: "ShootoutGoals",
    plusMinus: "PlusMinus",
    penaltyMinutes: "PenaltyMinutes",
    blocks: "Blocks",
    hits: "Hits",
    takeaways: "Takeaways",
    giveaways: "Giveaways",
    faceoffsWon: "FaceoffsWon",
    faceoffsLost: "FaceoffsLost",
    shifts: "Shifts",
    goaltendingMinutes: "GoaltendingMinutes",
    goaltendingSeconds: "GoaltendingSeconds",
    goaltendingShotsAgainst: "GoaltendingShotsAgainst",
    goaltendingGoalsAgainst: "GoaltendingGoalsAgainst",
    goaltendingSaves: "GoaltendingSaves",
    goaltendingWins: "GoaltendingWins",
    goaltendingLosses: "GoaltendingLosses",
    goaltendingShutouts: "GoaltendingShutouts",
    started: "Started",
    benchPenaltyMinutes: "BenchPenaltyMinutes",
    goaltendingOvertimeLosses: "GoaltendingOvertimeLosses",
    fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
  },
});
