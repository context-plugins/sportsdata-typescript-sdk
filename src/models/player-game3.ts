import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGame3 = {
  /** The unique ID of the stat */
  statId?: number;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition)
   */
  seasonType?: number | null;
  /** The NHL season of the game */
  season?: number | null;
  /** The player's full name */
  name?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The player's primary position. Possible values: C; RW; LW; D; or G */
  position?: string | null;
  /**
   * The player's salary as calculated by SportsDataIO (formerly known as FantasyData). Based on the
   * same salary cap as DraftKings contests ($50,000)
   */
  fantasyDataSalary?: number | null;
  /** The player's salary for FanDuel daily fantasy contests */
  fanDuelSalary?: number | null;
  /** The player's salary for DraftKings daily fantasy contests */
  draftKingsSalary?: number | null;
  /** The player's salary for Yahoo daily fantasy contests. */
  yahooSalary?: number | null;
  /**
   * The player's current injury status; in the form of likelihood that player plays. Possible
   * values: Probable; Questionable; Doubtful; Out
   */
  injuryStatus?: string | null;
  /** The body part that is injured for the player (Knee; Groin; Calf; Upper-body; etc.) */
  injuryBodyPart?: string | null;
  /** The day that the injury started or was first discovered */
  injuryStartDate?: string | null;
  /** Brief description of the player's injury and expected availability */
  injuryNotes?: string | null;
  /** The player's eligible position in FanDuel's daily fantasy sports platform */
  fanDuelPosition?: string | null;
  /** The player's eligible position in DraftKings' daily fantasy sports platform */
  draftKingsPosition?: string | null;
  /** The player's eligible position in Yahoo's daily fantasy sports platform. */
  yahooPosition?: string | null;
  /** The ranking of the player's opponent with regards to fantasy points allowed */
  opponentRank?: number | null;
  /** The ranking of the player's opponent by position with regards to fantasy points allowed */
  opponentPositionRank?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** The player's salary for FantasyDraft daily fantasy contests */
  fantasyDraftSalary?: number | null;
  /** The player's eligible position in Fantasy Drafts daily fantasy sports platform. */
  fantasyDraftPosition?: string | null;
  /** The number of minutes played at even strength by the player in the game */
  evenStrengthMinutes?: number | null;
  /** The number of seconds played at even strength by the player in the game */
  evenStrengthSeconds?: number | null;
  /** Total minutes played by the player on the power play in the game */
  powerPlayMinutes?: number | null;
  /** The number of seconds (remainder after minutes) played on a Power Play */
  powerPlaySeconds?: number | null;
  /** The number of minutes played short handed by the player in the game */
  shortHandedMinutes?: number | null;
  /**
   * The number of seconds (remainder after minutes) played short handed by the player in the game
   */
  shortHandedSeconds?: number | null;
  /**
   * Total points for the player in the game. Note: points are calculated by adding up a player's
   * goals and assists
   */
  points?: number | null;
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

export const playerGame3Schema: Schema<PlayerGame3> = s.object<PlayerGame3>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  fantasyDataSalary: s.optionalNullable(s.int()),
  fanDuelSalary: s.optionalNullable(s.int()),
  draftKingsSalary: s.optionalNullable(s.int()),
  yahooSalary: s.optionalNullable(s.int()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.int()),
  opponentPositionRank: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  fantasyDraftSalary: s.optionalNullable(s.int()),
  fantasyDraftPosition: s.optionalNullable(s.string()),
  evenStrengthMinutes: s.optionalNullable(s.int()),
  evenStrengthSeconds: s.optionalNullable(s.int()),
  powerPlayMinutes: s.optionalNullable(s.int()),
  powerPlaySeconds: s.optionalNullable(s.int()),
  shortHandedMinutes: s.optionalNullable(s.int()),
  shortHandedSeconds: s.optionalNullable(s.int()),
  points: s.optionalNullable(s.float64()),
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
    playerId: "PlayerID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    position: "Position",
    fantasyDataSalary: "FantasyDataSalary",
    fanDuelSalary: "FanDuelSalary",
    draftKingsSalary: "DraftKingsSalary",
    yahooSalary: "YahooSalary",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    fanDuelPosition: "FanDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    opponentRank: "OpponentRank",
    opponentPositionRank: "OpponentPositionRank",
    globalTeamId: "GlobalTeamID",
    fantasyDraftSalary: "FantasyDraftSalary",
    fantasyDraftPosition: "FantasyDraftPosition",
    evenStrengthMinutes: "EvenStrengthMinutes",
    evenStrengthSeconds: "EvenStrengthSeconds",
    powerPlayMinutes: "PowerPlayMinutes",
    powerPlaySeconds: "PowerPlaySeconds",
    shortHandedMinutes: "ShortHandedMinutes",
    shortHandedSeconds: "ShortHandedSeconds",
    points: "Points",
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
