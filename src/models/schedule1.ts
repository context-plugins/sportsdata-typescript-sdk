import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium2Schema, type Stadium2 } from "./stadium2.js";

export type Schedule1 = {
  gameKey?: string | null;
  seasonType?: number;
  season?: number;
  week?: number;
  date?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  channel?: string | null;
  pointSpread?: number | null;
  overUnder?: number | null;
  stadiumId?: number | null;
  canceled?: boolean | null;
  geoLat?: number | null;
  geoLong?: number | null;
  forecastTempLow?: number | null;
  forecastTempHigh?: number | null;
  forecastDescription?: string | null;
  forecastWindChill?: number | null;
  forecastWindSpeed?: number | null;
  awayTeamMoneyLine?: number | null;
  homeTeamMoneyLine?: number | null;
  day?: string | null;
  dateTime?: string | null;
  globalGameId?: number | null;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  scoreId?: number;
  stadiumDetails?: Stadium2;
  status?: string | null;
  isClosed?: boolean | null;
  dateTimeUtc?: string | null;
};

export const schedule1Schema: Schema<Schedule1> = s.object<Schedule1>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  date: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  channel: s.optionalNullable(s.string()),
  pointSpread: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  canceled: s.optionalNullable(s.boolean()),
  geoLat: s.optionalNullable(s.number()),
  geoLong: s.optionalNullable(s.number()),
  forecastTempLow: s.optionalNullable(s.number()),
  forecastTempHigh: s.optionalNullable(s.number()),
  forecastDescription: s.optionalNullable(s.string()),
  forecastWindChill: s.optionalNullable(s.number()),
  forecastWindSpeed: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  globalGameId: s.optionalNullable(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  scoreId: s.optional(s.number()),
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
