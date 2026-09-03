import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium2Schema, type Stadium2 } from "./stadium2.js";

export type Score1 = {
  gameKey?: string | null;
  seasonType?: number;
  season?: number;
  week?: number;
  date?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayScore?: number | null;
  homeScore?: number | null;
  channel?: string | null;
  pointSpread?: number | null;
  overUnder?: number | null;
  quarter?: string | null;
  timeRemaining?: string | null;
  possession?: string | null;
  down?: number | null;
  distance?: string | null;
  yardLine?: number | null;
  yardLineTerritory?: string | null;
  redZone?: string | null;
  awayScoreQuarter1?: number | null;
  awayScoreQuarter2?: number | null;
  awayScoreQuarter3?: number | null;
  awayScoreQuarter4?: number | null;
  awayScoreOvertime?: number | null;
  homeScoreQuarter1?: number | null;
  homeScoreQuarter2?: number | null;
  homeScoreQuarter3?: number | null;
  homeScoreQuarter4?: number | null;
  homeScoreOvertime?: number | null;
  hasStarted?: boolean;
  isInProgress?: boolean;
  isOver?: boolean;
  has1StQuarterStarted?: boolean;
  has2NdQuarterStarted?: boolean;
  has3RdQuarterStarted?: boolean;
  has4ThQuarterStarted?: boolean;
  isOvertime?: boolean;
  downAndDistance?: string | null;
  quarterDescription?: string | null;
  stadiumId?: number | null;
  lastUpdated?: string | null;
  geoLat?: number | null;
  geoLong?: number | null;
  forecastTempLow?: number | null;
  forecastTempHigh?: number | null;
  forecastDescription?: string | null;
  forecastWindChill?: number | null;
  forecastWindSpeed?: number | null;
  awayTeamMoneyLine?: number | null;
  homeTeamMoneyLine?: number | null;
  canceled?: boolean | null;
  closed?: boolean | null;
  lastPlay?: string | null;
  day?: string | null;
  dateTime?: string | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  globalGameId?: number | null;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  pointSpreadAwayTeamMoneyLine?: number | null;
  pointSpreadHomeTeamMoneyLine?: number | null;
  scoreId?: number;
  stadiumDetails?: Stadium2;
  status?: string | null;
  gameEndDateTime?: string | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  neutralVenue?: boolean | null;
  refereeId?: number | null;
  overPayout?: number | null;
  underPayout?: number | null;
  homeTimeouts?: number | null;
  awayTimeouts?: number | null;
  dateTimeUtc?: string | null;
  attendance?: number;
  isClosed?: boolean | null;
};

export const score1Schema: Schema<Score1> = s.object<Score1>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  date: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.number()),
  homeScore: s.optionalNullable(s.number()),
  channel: s.optionalNullable(s.string()),
  pointSpread: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  quarter: s.optionalNullable(s.string()),
  timeRemaining: s.optionalNullable(s.string()),
  possession: s.optionalNullable(s.string()),
  down: s.optionalNullable(s.number()),
  distance: s.optionalNullable(s.string()),
  yardLine: s.optionalNullable(s.number()),
  yardLineTerritory: s.optionalNullable(s.string()),
  redZone: s.optionalNullable(s.string()),
  awayScoreQuarter1: s.optionalNullable(s.number()),
  awayScoreQuarter2: s.optionalNullable(s.number()),
  awayScoreQuarter3: s.optionalNullable(s.number()),
  awayScoreQuarter4: s.optionalNullable(s.number()),
  awayScoreOvertime: s.optionalNullable(s.number()),
  homeScoreQuarter1: s.optionalNullable(s.number()),
  homeScoreQuarter2: s.optionalNullable(s.number()),
  homeScoreQuarter3: s.optionalNullable(s.number()),
  homeScoreQuarter4: s.optionalNullable(s.number()),
  homeScoreOvertime: s.optionalNullable(s.number()),
  hasStarted: s.optional(s.boolean()),
  isInProgress: s.optional(s.boolean()),
  isOver: s.optional(s.boolean()),
  has1StQuarterStarted: s.optional(s.boolean()),
  has2NdQuarterStarted: s.optional(s.boolean()),
  has3RdQuarterStarted: s.optional(s.boolean()),
  has4ThQuarterStarted: s.optional(s.boolean()),
  isOvertime: s.optional(s.boolean()),
  downAndDistance: s.optionalNullable(s.string()),
  quarterDescription: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.number()),
  lastUpdated: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.number()),
  geoLong: s.optionalNullable(s.number()),
  forecastTempLow: s.optionalNullable(s.number()),
  forecastTempHigh: s.optionalNullable(s.number()),
  forecastDescription: s.optionalNullable(s.string()),
  forecastWindChill: s.optionalNullable(s.number()),
  forecastWindSpeed: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  canceled: s.optionalNullable(s.boolean()),
  closed: s.optionalNullable(s.boolean()),
  lastPlay: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  globalGameId: s.optionalNullable(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.number()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.number()),
  scoreId: s.optional(s.number()),
  stadiumDetails: s.optional(s.lazy(() => stadium2Schema)),
  status: s.optionalNullable(s.string()),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  neutralVenue: s.optionalNullable(s.boolean()),
  refereeId: s.optionalNullable(s.number()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  homeTimeouts: s.optionalNullable(s.number()),
  awayTimeouts: s.optionalNullable(s.number()),
  dateTimeUtc: s.optionalNullable(s.string()),
  attendance: s.optional(s.number()),
  isClosed: s.optionalNullable(s.boolean()),
  _keysMap: {
    gameKey: "GameKey",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    date: "Date",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
    channel: "Channel",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    quarter: "Quarter",
    timeRemaining: "TimeRemaining",
    possession: "Possession",
    down: "Down",
    distance: "Distance",
    yardLine: "YardLine",
    yardLineTerritory: "YardLineTerritory",
    redZone: "RedZone",
    awayScoreQuarter1: "AwayScoreQuarter1",
    awayScoreQuarter2: "AwayScoreQuarter2",
    awayScoreQuarter3: "AwayScoreQuarter3",
    awayScoreQuarter4: "AwayScoreQuarter4",
    awayScoreOvertime: "AwayScoreOvertime",
    homeScoreQuarter1: "HomeScoreQuarter1",
    homeScoreQuarter2: "HomeScoreQuarter2",
    homeScoreQuarter3: "HomeScoreQuarter3",
    homeScoreQuarter4: "HomeScoreQuarter4",
    homeScoreOvertime: "HomeScoreOvertime",
    hasStarted: "HasStarted",
    isInProgress: "IsInProgress",
    isOver: "IsOver",
    has1StQuarterStarted: "Has1stQuarterStarted",
    has2NdQuarterStarted: "Has2ndQuarterStarted",
    has3RdQuarterStarted: "Has3rdQuarterStarted",
    has4ThQuarterStarted: "Has4thQuarterStarted",
    isOvertime: "IsOvertime",
    downAndDistance: "DownAndDistance",
    quarterDescription: "QuarterDescription",
    stadiumId: "StadiumID",
    lastUpdated: "LastUpdated",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
    forecastTempLow: "ForecastTempLow",
    forecastTempHigh: "ForecastTempHigh",
    forecastDescription: "ForecastDescription",
    forecastWindChill: "ForecastWindChill",
    forecastWindSpeed: "ForecastWindSpeed",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    canceled: "Canceled",
    closed: "Closed",
    lastPlay: "LastPlay",
    day: "Day",
    dateTime: "DateTime",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pointSpreadAwayTeamMoneyLine: "PointSpreadAwayTeamMoneyLine",
    pointSpreadHomeTeamMoneyLine: "PointSpreadHomeTeamMoneyLine",
    scoreId: "ScoreID",
    stadiumDetails: "StadiumDetails",
    status: "Status",
    gameEndDateTime: "GameEndDateTime",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    neutralVenue: "NeutralVenue",
    refereeId: "RefereeID",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    homeTimeouts: "HomeTimeouts",
    awayTimeouts: "AwayTimeouts",
    dateTimeUtc: "DateTimeUTC",
    attendance: "Attendance",
    isClosed: "IsClosed",
  },
});
