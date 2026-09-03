import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";

export type Game15 = {
  gameId?: number;
  season?: number;
  seasonType?: number;
  status?: string | null;
  day?: string | null;
  dateTime?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayTeamId?: number;
  homeTeamId?: number;
  stadiumId?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  updated?: string | null;
  quarter?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  globalGameId?: number;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  quarters?: Quarter1[];
  homeTeamMoneyLine?: number | null;
  awayTeamMoneyLine?: number | null;
  pointSpread?: number | null;
  pointSpreadHomeTeamPayout?: number | null;
  pointSpreadAwayTeamPayout?: number | null;
  overUnder?: number | null;
  overPayout?: number | null;
  underPayout?: number | null;
  isClosed?: boolean;
  gameEndDateTime?: string | null;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
};

export const game15Schema: Schema<Game15> = s.object<Game15>({
  gameId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.number()),
  homeTeamId: s.optional(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  quarters: s.optional(s.array(s.lazy(() => quarter1Schema))),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  pointSpreadHomeTeamPayout: s.optionalNullable(s.number()),
  pointSpreadAwayTeamPayout: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  rescheduledFromGameId: s.optionalNullable(s.number()),
  rescheduledGameId: s.optionalNullable(s.number()),
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
