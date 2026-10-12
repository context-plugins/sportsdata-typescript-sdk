import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period2Schema, type Period2 } from "./period2.js";

export type Game16 = {
  /** The unique ID of the game */
  gameId?: number;
  /**
   * The season that the game occurs in Note: season is a single year that the majority of the
   * season occurs in
   */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar)
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled; InProgress; Final; F/OT;
   * Suspended; Postponed; Delayed; Canceled; Forfeit
   */
  status?: string | null;
  /** The date the game is scheduled to occur */
  day?: string | null;
  /** The timestamp of when the game is scheduled to start */
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
  /** The current quarter of the game (Possible Values: 1, 2, 3, 4, OT, NULL) */
  period?: string | null;
  /** Number of minutes remaining in the quarter */
  timeRemainingMinutes?: number | null;
  /** Number of seconds remaining in the quarter */
  timeRemainingSeconds?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalHomeTeamId?: number | null;
  /** The details of the periods (quarters & overtime) for this game */
  periods?: Period2[];
  /** The timestamp in UTC of when the game is scheduled to start */
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

export const game16Schema: Schema<Game16> = s.object<Game16>({
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
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  periods: s.optional(s.array(s.lazy(() => period2Schema))),
  dateTimeUtc: s.optionalNullable(s.string()),
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
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    periods: "Periods",
    dateTimeUtc: "DateTimeUTC",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
