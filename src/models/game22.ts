import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";
import { seriesSchema, type Series } from "./series.js";

export type Game22 = {
  gameId?: number;
  season?: number;
  seasonType?: number;
  status?: string | null;
  day?: string | null;
  dateTime?: string | null;
  updated?: string | null;
  isClosed?: boolean | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayTeamId?: number;
  homeTeamId?: number;
  stadiumId?: number | null;
  channel?: string | null;
  attendance?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  period?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  awayTeamMoneyLine?: number | null;
  homeTeamMoneyLine?: number | null;
  pointSpread?: number | null;
  overUnder?: number | null;
  globalGameId?: number;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  pointSpreadAwayTeamMoneyLine?: number | null;
  pointSpreadHomeTeamMoneyLine?: number | null;
  lastPlay?: string | null;
  periods?: Period[];
  gameEndDateTime?: string | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  neutralVenue?: boolean | null;
  overPayout?: number | null;
  underPayout?: number | null;
  dateTimeUtc?: string | null;
  seriesInfo?: Series;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
  referee1Id?: number | null;
  referee2Id?: number | null;
  linesperson1Id?: number | null;
  linesperson2Id?: number | null;
};

export const game22Schema: Schema<Game22> = s.object<Game22>({
  gameId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.number()),
  homeTeamId: s.optional(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  channel: s.optionalNullable(s.string()),
  attendance: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.number()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.number()),
  lastPlay: s.optionalNullable(s.string()),
  periods: s.optional(s.array(s.lazy(() => periodSchema))),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  neutralVenue: s.optionalNullable(s.boolean()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  dateTimeUtc: s.optionalNullable(s.string()),
  seriesInfo: s.optional(s.lazy(() => seriesSchema)),
  rescheduledFromGameId: s.optionalNullable(s.number()),
  rescheduledGameId: s.optionalNullable(s.number()),
  referee1Id: s.optionalNullable(s.number()),
  referee2Id: s.optionalNullable(s.number()),
  linesperson1Id: s.optionalNullable(s.number()),
  linesperson2Id: s.optionalNullable(s.number()),
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
