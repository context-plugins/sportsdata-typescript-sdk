import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { seriesSchema, type Series } from "./series.js";

export type ScoreBasic2 = {
  /** Number of runs scored by the away team in the game */
  awayTeamRuns?: number | null;
  /** Number of runs scored by the home team in the game */
  homeTeamRuns?: number | null;
  /** Total hits by the away team in the game */
  awayTeamHits?: number | null;
  /** Total hits by the home team in the game */
  homeTeamHits?: number | null;
  /** Total errors committed by the away team in the game */
  awayTeamErrors?: number | null;
  /** Total errors committed by the home team in the game */
  homeTeamErrors?: number | null;
  /** Total number of people who attended the game */
  attendance?: number | null;
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
  /** Indicates whether this game is played in a neutral venue */
  neutralVenue?: boolean | null;
  /**
   * The inning that the game is currently in, or the inning in which the game ended. Possible
   * values include: NULL, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, etc)
   */
  inning?: number | null;
  /**
   * The inning half that the game is currently in; or the inning half in which the game ended
   * (possible values: T; B; E: M: NULL)
   */
  inningHalf?: string | null;
  /** The unique ID of this game */
  gameId?: number | null;
  /** The MLB season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar)
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled; InProgress; Final; Suspended;
   * Delayed; Postponed; Canceled; Forfeit; NotNecessary
   */
  status?: string | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the Home Team */
  homeTeam?: string | null;
  /** The unique TeamID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /**
   * The GameID of the game that was rescheduled from this game. This only pertains to postponed
   * games that require rescheduling.
   */
  rescheduledGameId?: number | null;
  /** The unique ID of the stadium */
  stadiumId?: number | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status.
   */
  isClosed?: boolean;
  /** The date and time of the late update made to this record (in US Eastern Time) */
  updated?: string | null;
  /** The date and time that the game ended in US Eastern Time */
  gameEndDateTime?: string | null;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
  /**
   * Contains relevant series data for postseason series only - HomeTeamWins; AwayTeamWins;
   * GameNumber; and MaxLength
   */
  seriesInfo?: Series;
  /**
   * The GameID of the originally scheduled, postponed game, that this game was rescheduled from.
   * This only pertains to games that are scheduled as "make up" games.
   */
  rescheduledFromGameId?: number | null;
  /**
   * The date a game that was suspended in play will be resumed for play. Useful for tracking when a
   * Suspended game will return to an InProgress status.
   */
  suspensionResumeDay?: string | null;
  /**
   * The date and start-time that the suspended in play game will be resumed for play. Useful for
   * tracking when a Suspended game will return to an InProgress status.
   */
  suspensionResumeDateTime?: string | null;
};

export const scoreBasic2Schema: Schema<ScoreBasic2> = s.object<ScoreBasic2>({
  awayTeamRuns: s.optionalNullable(s.int()),
  homeTeamRuns: s.optionalNullable(s.int()),
  awayTeamHits: s.optionalNullable(s.int()),
  homeTeamHits: s.optionalNullable(s.int()),
  awayTeamErrors: s.optionalNullable(s.int()),
  homeTeamErrors: s.optionalNullable(s.int()),
  attendance: s.optionalNullable(s.int()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  neutralVenue: s.optionalNullable(s.boolean()),
  inning: s.optionalNullable(s.int()),
  inningHalf: s.optionalNullable(s.string()),
  gameId: s.optionalNullable(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  isClosed: s.optional(s.boolean()),
  updated: s.optionalNullable(s.string()),
  gameEndDateTime: s.optionalNullable(s.string()),
  dateTimeUtc: s.optionalNullable(s.string()),
  seriesInfo: s.optional(s.lazy(() => seriesSchema)),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  suspensionResumeDay: s.optionalNullable(s.string()),
  suspensionResumeDateTime: s.optionalNullable(s.string()),
  _keysMap: {
    awayTeamRuns: "AwayTeamRuns",
    homeTeamRuns: "HomeTeamRuns",
    awayTeamHits: "AwayTeamHits",
    homeTeamHits: "HomeTeamHits",
    awayTeamErrors: "AwayTeamErrors",
    homeTeamErrors: "HomeTeamErrors",
    attendance: "Attendance",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    neutralVenue: "NeutralVenue",
    inning: "Inning",
    inningHalf: "InningHalf",
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
    rescheduledGameId: "RescheduledGameID",
    stadiumId: "StadiumID",
    isClosed: "IsClosed",
    updated: "Updated",
    gameEndDateTime: "GameEndDateTime",
    dateTimeUtc: "DateTimeUTC",
    seriesInfo: "SeriesInfo",
    rescheduledFromGameId: "RescheduledFromGameID",
    suspensionResumeDay: "SuspensionResumeDay",
    suspensionResumeDateTime: "SuspensionResumeDateTime",
  },
});
