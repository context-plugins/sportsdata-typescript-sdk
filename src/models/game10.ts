import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";

export type Game10 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The WNBA season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled; InProgress; Final; F/OT;
   * Suspended; Postponed; Delayed; Canceled; Forfeit; NotNecessary
   */
  status?: string | null;
  /** The day that the game is scheduled to be played (US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (US Eastern Time) */
  dateTime?: string | null;
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
  /** Total number of points the away team scored in the game */
  awayTeamScore?: number | null;
  /** Total number of points the home team scored in the game */
  homeTeamScore?: number | null;
  /** The timestamp of when this record was last updated (in US Eastern time) */
  updated?: string | null;
  /** The current quarter in the game. Possible values include: 1, 2, 3, 4, Half, OT, NULL */
  quarter?: string | null;
  /** Number of minutes remaining in the quarter */
  timeRemainingMinutes?: number | null;
  /** Number of seconds remaining in the quarter */
  timeRemainingSeconds?: number | null;
  /**
   * A globally unique ID for the game. This value is guaranteed to be unique across all
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
  /** The details of the quarters (including overtime periods) for this game. */
  quarters?: Quarter1[];
  /** Money line from the perspective of the home team */
  homeTeamMoneyLine?: number | null;
  /** Money line from the perspective of the away team */
  awayTeamMoneyLine?: number | null;
  /** The point spread (as listed for the home team) */
  pointSpread?: number | null;
  /** The payout for the home team beating the spread */
  pointSpreadHomeTeamPayout?: number | null;
  /** The payout for the away team beating the spread */
  pointSpreadAwayTeamPayout?: number | null;
  /**
   * The sportsbook's total points scored over or under for the game. Note: this is also known as
   * the Total for the game.
   */
  overUnder?: number | null;
  /** The sportsbook's payout for the over */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** Indicates whether the game is over and the final score has been verified and closed out. */
  isClosed?: boolean;
  /** The date and time that the game ended (US Eastern Time) */
  gameEndDateTime?: string | null;
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

export const game10Schema: Schema<Game10> = s.object<Game10>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.int()),
  homeTeamId: s.optional(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  quarters: s.optional(s.array(s.lazy(() => quarter1Schema))),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  pointSpread: s.optionalNullable(s.float64()),
  pointSpreadHomeTeamPayout: s.optionalNullable(s.int()),
  pointSpreadAwayTeamPayout: s.optionalNullable(s.int()),
  overUnder: s.optionalNullable(s.float64()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
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
    stadiumId: "StadiumID",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    quarter: "Quarter",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    quarters: "Quarters",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    pointSpread: "PointSpread",
    pointSpreadHomeTeamPayout: "PointSpreadHomeTeamPayout",
    pointSpreadAwayTeamPayout: "PointSpreadAwayTeamPayout",
    overUnder: "OverUnder",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
