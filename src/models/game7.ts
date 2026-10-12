import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";
import { seriesSchema, type Series } from "./series.js";

export type Game7 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The NHL season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 5=AllStar, 6=Exhibition).
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/SO, F/OT,
   * Postponed, Canceled, NotNecessary
   */
  status?: string | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /** The timestamp of when the record was last updated (in US Eastern Time). */
  updated?: string | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. NOTE:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number;
  /** The unique ID of the home team */
  homeTeamId?: number;
  /** The unique ID of the stadium */
  stadiumId?: number | null;
  /** The television station broadcasting the game */
  channel?: string | null;
  /** The total number of people who attended the game */
  attendance?: number | null;
  /** Total number of goals scored by the away team in the game */
  awayTeamScore?: number | null;
  /** Total number of goals scored by the home team in the game */
  homeTeamScore?: number | null;
  /** Indicates the current period of the game. Possible values include: 1; 2; 3; OT; SO; NULL */
  period?: string | null;
  /** Number of minutes remaining in the current period */
  timeRemainingMinutes?: number | null;
  /**
   * Number of seconds that have passed in the current period. NOTE: this field name might be
   * misleading as it actually represents the game clock sconds which are the number of minutes that
   * have already passed in the period.
   */
  timeRemainingSeconds?: number | null;
  /** Moneyline from the perspective of the away team */
  awayTeamMoneyLine?: number | null;
  /** Moneyline from the perspective of the home team */
  homeTeamMoneyLine?: number | null;
  /**
   * The oddsmaker puck line at game start from the perspective of the HomeTeam (negative numbers
   * indicate the HomeTeam is favored; positive numbers indicate the AwayTeam is favored).
   */
  pointSpread?: number | null;
  /** The sportsbook's total goals scored line (Over/Under) for the game */
  overUnder?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalAwayTeamId?: number;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number;
  /** The payout odds when betting on the away team with the puck line */
  pointSpreadAwayTeamMoneyLine?: number | null;
  /** The payout odds when betting on the home team with the puck line */
  pointSpreadHomeTeamMoneyLine?: number | null;
  /**
   * The description of the most recent play/event of the game. This is for display purposes and
   * does not include corresponding data points.
   */
  lastPlay?: string | null;
  /** The details of the periods (including overtime if applicable) for this game. */
  periods?: Period[];
  /** The date and time that the game ended in US Eastern Time */
  gameEndDateTime?: string | null;
  /** The rotation number of the home team for this game */
  homeRotationNumber?: number | null;
  /** The rotation number of the away team for a game */
  awayRotationNumber?: number | null;
  /** Indicates whether this game is played in a neutral venue */
  neutralVenue?: boolean | null;
  /** The sportsbook's payout for the over */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
  /**
   * Contains relevant series data for playoff series only - HomeTeamWins, AwayTeamWins, GameNumber,
   * and MaxLength
   */
  seriesInfo?: Series;
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
  /** The unique ID of the main referee of this game */
  referee1Id?: number | null;
  /** The unique ID of the secondary referee of this game */
  referee2Id?: number | null;
  /** The unique ID of the main linesperson of this game */
  linesperson1Id?: number | null;
  /** The unique ID of the secondary linesperson of this game */
  linesperson2Id?: number | null;
};

export const game7Schema: Schema<Game7> = s.object<Game7>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.int()),
  homeTeamId: s.optional(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  channel: s.optionalNullable(s.string()),
  attendance: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  pointSpread: s.optionalNullable(s.float64()),
  overUnder: s.optionalNullable(s.float64()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.int()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.int()),
  lastPlay: s.optionalNullable(s.string()),
  periods: s.optional(s.array(s.lazy(() => periodSchema))),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  neutralVenue: s.optionalNullable(s.boolean()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  dateTimeUtc: s.optionalNullable(s.string()),
  seriesInfo: s.optional(s.lazy(() => seriesSchema)),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  referee1Id: s.optionalNullable(s.int()),
  referee2Id: s.optionalNullable(s.int()),
  linesperson1Id: s.optionalNullable(s.int()),
  linesperson2Id: s.optionalNullable(s.int()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    status: "Status",
    day: "Day",
    dateTime: "DateTime",
    updated: "Updated",
    isClosed: "IsClosed",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    stadiumId: "StadiumID",
    channel: "Channel",
    attendance: "Attendance",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pointSpreadAwayTeamMoneyLine: "PointSpreadAwayTeamMoneyLine",
    pointSpreadHomeTeamMoneyLine: "PointSpreadHomeTeamMoneyLine",
    lastPlay: "LastPlay",
    periods: "Periods",
    gameEndDateTime: "GameEndDateTime",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    neutralVenue: "NeutralVenue",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    dateTimeUtc: "DateTimeUTC",
    seriesInfo: "SeriesInfo",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
    referee1Id: "Referee1ID",
    referee2Id: "Referee2ID",
    linesperson1Id: "Linesperson1ID",
    linesperson2Id: "Linesperson2ID",
  },
});
