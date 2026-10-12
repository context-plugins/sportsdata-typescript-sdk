import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium2Schema, type Stadium2 } from "./stadium2.js";

export type Schedule = {
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameID is
   * composed of Season; SeasonType; Week and HomeTeam. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
  /**
   * The type of season that this game corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /** The NFL season of the game */
  season?: number;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /** The date and time of the game (in US Eastern Time) */
  date?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The television station broadcasting the game */
  channel?: string | null;
  /**
   * The oddsmaker point spread at game start from the perspective of the team (negative numbers
   * indicate the HomeTeam is favored; positive numbers indicate the AwayTeam is favored)
   */
  pointSpread?: number | null;
  /** The total points line (over/under) at game start */
  overUnder?: number | null;
  /** The unique ID of the team's current home stadium */
  stadiumId?: number | null;
  /** Indicates whether the game was canceled */
  canceled?: boolean | null;
  /** The geographic latitude coordinate of the venue where the game is taking place */
  geoLat?: number | null;
  /** The geographic longitude coordinate of the venue where the game is taking place */
  geoLong?: number | null;
  /** The forecasted low temperature on game day at this venue (Fahrenheit). */
  forecastTempLow?: number | null;
  /** The forecasted high temperature on game day at this venue (Fahrenheit). */
  forecastTempHigh?: number | null;
  /** The forecast description on game day at this venue. */
  forecastDescription?: string | null;
  /** The forecasted wind chill on game day at this venue. */
  forecastWindChill?: number | null;
  /** The forecasted wind speed on game day at this venue. */
  forecastWindSpeed?: number | null;
  /** The sportsbook's moneyline for the away team */
  awayTeamMoneyLine?: number | null;
  /** The sportsbook's moneyline for the home team */
  homeTeamMoneyLine?: number | null;
  /** The date of the game (in US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number | null;
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
  /** Unique ID of the score/game */
  scoreId?: number;
  /** The details of the stadium where this game is played */
  stadiumDetails?: Stadium2;
  /**
   * The status of the game. For a description of possible values, see <a
   * href="https://support.sportsdata.io/hc/en-us/articles/14287629964567-Process-Guide-Game-Status"
   * target="_blank">here.</a> For how suspended and postponed games are handled specifically, see
   * <a
   * href="https://support.sportsdata.io/hc/en-us/articles/4404845580567-Postponed-and-Rescheduled-Games"
   * target="_blank">here</a>.
   */
  status?: string | null;
  /** Indicates whether the game is over and the final score has been verified and closed out. */
  isClosed?: boolean | null;
  /** The date and time of the game (in UTC) */
  dateTimeUtc?: string | null;
};

export const scheduleSchema: Schema<Schedule> = s.object<Schedule>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optional(s.int()),
  date: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  channel: s.optionalNullable(s.string()),
  pointSpread: s.optionalNullable(s.float64()),
  overUnder: s.optionalNullable(s.float64()),
  stadiumId: s.optionalNullable(s.int()),
  canceled: s.optionalNullable(s.boolean()),
  geoLat: s.optionalNullable(s.float64()),
  geoLong: s.optionalNullable(s.float64()),
  forecastTempLow: s.optionalNullable(s.int()),
  forecastTempHigh: s.optionalNullable(s.int()),
  forecastDescription: s.optionalNullable(s.string()),
  forecastWindChill: s.optionalNullable(s.int()),
  forecastWindSpeed: s.optionalNullable(s.int()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  globalGameId: s.optionalNullable(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  scoreId: s.optional(s.int()),
  stadiumDetails: s.optional(s.lazy(() => stadium2Schema)),
  status: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
  _keysMap: {
    gameKey: "GameKey",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    date: "Date",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    channel: "Channel",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    stadiumId: "StadiumID",
    canceled: "Canceled",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
    forecastTempLow: "ForecastTempLow",
    forecastTempHigh: "ForecastTempHigh",
    forecastDescription: "ForecastDescription",
    forecastWindChill: "ForecastWindChill",
    forecastWindSpeed: "ForecastWindSpeed",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    day: "Day",
    dateTime: "DateTime",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    scoreId: "ScoreID",
    stadiumDetails: "StadiumDetails",
    status: "Status",
    isClosed: "IsClosed",
    dateTimeUtc: "DateTimeUTC",
  },
});
