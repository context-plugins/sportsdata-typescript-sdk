import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduleBasic4 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The College Football season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /** The week of the game */
  week?: number | null;
  /**
   * The status of the game. Possible values include: Scheduled; InProgress; Final; F/OT; Suspended;
   * Postponed; Delayed; Canceled; Forfeit
   */
  status?: string | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number;
  /** The unique ID of the home team */
  homeTeamId?: number;
  /** The name of the away team */
  awayTeamName?: string | null;
  /** The name of the home team */
  homeTeamName?: string | null;
  /** Total number of points the away team scored in this game */
  awayTeamScore?: number | null;
  /** Total number of points the home team scored in this game */
  homeTeamScore?: number | null;
  /** The timestamp of when this game was last updated (US Eastern Time) */
  updated?: string | null;
  /** The timestamp of when this game was first created (in US Eastern Time) */
  created?: string | null;
  /**
   * A globally unique ID for this game. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalAwayTeamId?: number;
  /**
   * A globally unique ID for the home team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalHomeTeamId?: number;
  /** The unique ID of the stadium/venue where this game was played */
  stadiumId?: number | null;
  /** Indicates whether the game is over and the final score has been verified */
  isClosed?: boolean;
  /** The date and time that the game ended (in US Eastern Time) */
  gameEndDateTime?: string | null;
  /** The title of the game (e.g. Rose Bowl, Citrus Bowl, etc) */
  title?: string | null;
  /** Indicates whether this game is played in a neutral venue */
  neutralVenue?: boolean | null;
  /** The date and time of the game (in UTC) */
  dateTimeUtc?: string | null;
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

export const scheduleBasic4Schema: Schema<ScheduleBasic4> = s.object<ScheduleBasic4>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  week: s.optionalNullable(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.int()),
  homeTeamId: s.optional(s.int()),
  awayTeamName: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
    status: "Status",
    day: "Day",
    dateTime: "DateTime",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    awayTeamName: "AwayTeamName",
    homeTeamName: "HomeTeamName",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    created: "Created",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    stadiumId: "StadiumID",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    title: "Title",
    neutralVenue: "NeutralVenue",
    dateTimeUtc: "DateTimeUTC",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
