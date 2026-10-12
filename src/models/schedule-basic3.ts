import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { seriesSchema, type Series } from "./series.js";

export type ScheduleBasic3 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The NHL season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition)
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
  /** The timestamp of when the record was last updated (in US Eastern Time) */
  updated?: string | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the stadium */
  stadiumId?: number | null;
  /** Total number of goals scored by the away team in the game */
  awayTeamScore?: number | null;
  /** Total number of goals scored by the home team in the game */
  homeTeamScore?: number | null;
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
  /** The date and time that the game ended in US Eastern Time */
  gameEndDateTime?: string | null;
  /** Indicates whether this game is played in a neutral venue */
  neutralVenue?: boolean | null;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
  /**
   * Contains relevant series data for playoff series only - HomeTeamWins, AwayTeamWins, GameNumber,
   * and MaxLength
   */
  seriesInfo?: Series;
  /** The unique ID of the away team */
  awayTeamId?: number;
  /** The unique ID of the home team */
  homeTeamId?: number;
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

export const scheduleBasic3Schema: Schema<ScheduleBasic3> = s.object<ScheduleBasic3>({
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
  stadiumId: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  gameEndDateTime: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
  seriesInfo: s.optional(s.lazy(() => seriesSchema)),
  awayTeamId: s.optional(s.int()),
  homeTeamId: s.optional(s.int()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
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
    stadiumId: "StadiumID",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    gameEndDateTime: "GameEndDateTime",
    neutralVenue: "NeutralVenue",
    dateTimeUtc: "DateTimeUTC",
    seriesInfo: "SeriesInfo",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
