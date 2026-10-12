import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period2Schema, type Period2 } from "./period2.js";
import { stadium1Schema, type Stadium1 } from "./stadium1.js";

/** Returns the game details for a given game's box score */
export type Game34 = {
  /** The unique ID of this game */
  gameId?: number;
  /**
   * The season that the game occurs in. Note: season is a single year that the majority of the
   * season occurs in
   */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/OT,
   * Suspended, Postponed, Delayed, Canceled, Forfeit
   */
  status?: string | null;
  /** The day that the game is scheduled to be played in */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** Total number of points the away team scored in the game */
  awayTeamScore?: number | null;
  /** Total number of points the home team scored in this game */
  homeTeamScore?: number | null;
  /** The timestamp of when this game was last updated (in US Eastern Time) */
  updated?: string | null;
  /** The current period of the game (Possible Values: 1; 2; Half; OT; NULL) */
  period?: string | null;
  /**
   * Number of minutes remaining in the half (from 0 to 20). Note: if game is scheduled or final
   * this field is NULL
   */
  timeRemainingMinutes?: number | null;
  /**
   * Number of seconds remaining in the half (from 0 to 59). Note: if game is scheduled or final
   * this field is NULL
   */
  timeRemainingSeconds?: number | null;
  /**
   * The consensus Point Spread at game start from the perspective of the HomeTeam (in the Game
   * table, the PointSpread field's negative numbers indicate the HomeTeam is favored; positive
   * numbers indicate the AwayTeam is favored. Note that this rule does not hold in betting-related
   * tables, where the spread is contingent on the bet line.)
   */
  pointSpread?: number | null;
  /** The total points line (over/under) as given by the sportsbook */
  overUnder?: number | null;
  /** Money line from the perspective of the away team */
  awayTeamMoneyLine?: number | null;
  /** Money line from the perspective of the home team */
  homeTeamMoneyLine?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number | null;
  /**
   * The unique ID of the tournament. Note: this field is specific to the NCAA tournament & does not
   * include other tournaments
   */
  tournamentId?: number | null;
  /**
   * The specific bracket of the tournament (e.g. East; West; Midwest; South). Note: this is
   * specific to the NCAA tournament
   */
  bracket?: string | null;
  /**
   * The current round of the NCAA tournament. Rounds: 1 = Round of 64, 2 = Round of 32, 3 = Sweet
   * Sixteen, 4 = Elite Eight, 5 = Final Four, 6 = Championship Note: First Four games Round = NULL
   */
  round?: number | null;
  /**
   * The seed of the away team (1-16). Note: this is specific to the NCAA tournament & does not
   * include other tournaments
   */
  awayTeamSeed?: number | null;
  /**
   * The seed of the home team (1-16). Note: this is specific to the NCAA tournament & does not
   * include other tournaments
   */
  homeTeamSeed?: number | null;
  /**
   * The Id of one of the NCAA tournament games which feeds this game. This gameid will be
   * inaccurate/invalid in free trial as it is scrambled. Null for some Round 1 and all play-in
   * games. Used for rendering. Does not change after tournament records have been created.
   */
  awayTeamPreviousGameId?: number | null;
  /**
   * The Id of one of the NCAA tournament games which feeds this game. This gameid will be
   * inaccurate/invalid in free trial as it is scrambled. Null for some Round 1 and all play-in
   * games. Used for rendering. Does not change after tournament records have been created.
   */
  homeTeamPreviousGameId?: number | null;
  /**
   * The unique global ID of the away team's previous game (This gameid will be inaccurate/invalid
   * in free trial as it is scrambled)
   */
  awayTeamPreviousGlobalGameId?: number | null;
  /**
   * The unique global ID of the away team's previous game (This gameid will be inaccurate/invalid
   * in free trial as it is scrambled)
   */
  homeTeamPreviousGlobalGameId?: number | null;
  /** The display order of this game. This is used for rendering NCAA Tournament bracket. */
  tournamentDisplayOrder?: number | null;
  /**
   * The display order of the home team for this game. This is used for rendering the NCAA
   * Tournament bracket, and it indicates whether the home team should be displayed at the top or
   * bottom of the game card. Possible values: Top, Bottom
   */
  tournamentDisplayOrderForHomeTeam?: string | null;
  /**
   * The details of the periods (halves & overtime) for this game. Note: the scores are for that
   * half/period only, not total score of game at that point
   */
  periods?: Period2[];
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean;
  /** The date and time that the game ended (in US Eastern Time) */
  gameEndDateTime?: string | null;
  /** The stadium details of where this game was played */
  stadium?: Stadium1;
  /** Rotation number of home team for this game */
  homeRotationNumber?: number | null;
  /** Rotation number of away team for this game. */
  awayRotationNumber?: number | null;
  /**
   * Previous game id of the team in the top slot of an NCAA tournament game. Used for rendering.
   */
  topTeamPreviousGameId?: number | null;
  /**
   * Previous game id of the team in the bottom slot of an NCAA tournament game. Used for rendering.
   */
  bottomTeamPreviousGameId?: number | null;
  /** The television station broadcasting the game */
  channel?: string | null;
  /**
   * Indicates whether this game is played in a neutral venue. Note: Neutral = True, Not Neutral =
   * False
   */
  neutralVenue?: boolean | null;
  /** The sportsbook's point spread payout for the away team. Note: this line is a consensus */
  awayPointSpreadPayout?: number | null;
  /** The sportsbook's point spread payout for the home team */
  homePointSpreadPayout?: number | null;
  /** The odds at which the sportsbook will pay out winning over bets at */
  overPayout?: number | null;
  /** The payout when betting the Under of the Over/Under */
  underPayout?: number | null;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
  /** The attendance of the game when available */
  attendance?: number | null;
  /**
   * The GameID of the originally scheduled, postponed game, that this game was rescheduled from.
   * This only pertains to games that are scheduled as "make up" games.
   */
  rescheduledFromGameId?: number | null;
  /**
   * The GameID of the game that was rescheduled from this game. This only pertains to postponed
   * games that require rescheduling.
   */
  rescheduledGameId?: number | null;
};

export const game34Schema: Schema<Game34> = s.object<Game34>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  pointSpread: s.optionalNullable(s.float64()),
  overUnder: s.optionalNullable(s.float64()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  tournamentId: s.optionalNullable(s.int()),
  bracket: s.optionalNullable(s.string()),
  round: s.optionalNullable(s.int()),
  awayTeamSeed: s.optionalNullable(s.int()),
  homeTeamSeed: s.optionalNullable(s.int()),
  awayTeamPreviousGameId: s.optionalNullable(s.int()),
  homeTeamPreviousGameId: s.optionalNullable(s.int()),
  awayTeamPreviousGlobalGameId: s.optionalNullable(s.int()),
  homeTeamPreviousGlobalGameId: s.optionalNullable(s.int()),
  tournamentDisplayOrder: s.optionalNullable(s.int()),
  tournamentDisplayOrderForHomeTeam: s.optionalNullable(s.string()),
  periods: s.optional(s.array(s.lazy(() => period2Schema))),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  stadium: s.optional(s.lazy(() => stadium1Schema)),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  topTeamPreviousGameId: s.optionalNullable(s.int()),
  bottomTeamPreviousGameId: s.optionalNullable(s.int()),
  channel: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  awayPointSpreadPayout: s.optionalNullable(s.int()),
  homePointSpreadPayout: s.optionalNullable(s.int()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  dateTimeUtc: s.optionalNullable(s.string()),
  attendance: s.optionalNullable(s.int()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    status: "Status",
    day: "Day",
    dateTime: "DateTime",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    tournamentId: "TournamentID",
    bracket: "Bracket",
    round: "Round",
    awayTeamSeed: "AwayTeamSeed",
    homeTeamSeed: "HomeTeamSeed",
    awayTeamPreviousGameId: "AwayTeamPreviousGameID",
    homeTeamPreviousGameId: "HomeTeamPreviousGameID",
    awayTeamPreviousGlobalGameId: "AwayTeamPreviousGlobalGameID",
    homeTeamPreviousGlobalGameId: "HomeTeamPreviousGlobalGameID",
    tournamentDisplayOrder: "TournamentDisplayOrder",
    tournamentDisplayOrderForHomeTeam: "TournamentDisplayOrderForHomeTeam",
    periods: "Periods",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    stadium: "Stadium",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    topTeamPreviousGameId: "TopTeamPreviousGameId",
    bottomTeamPreviousGameId: "BottomTeamPreviousGameId",
    channel: "Channel",
    neutralVenue: "NeutralVenue",
    awayPointSpreadPayout: "AwayPointSpreadPayout",
    homePointSpreadPayout: "HomePointSpreadPayout",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    dateTimeUtc: "DateTimeUTC",
    attendance: "Attendance",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
