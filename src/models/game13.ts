import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period1Schema, type Period1 } from "./period1.js";
import { stadium21Schema, type Stadium21 } from "./stadium21.js";

export type Game13 = {
  gameId?: number;
  season?: number;
  seasonType?: number;
  week?: number | null;
  status?: string | null;
  day?: string | null;
  dateTime?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayTeamId?: number;
  homeTeamId?: number;
  awayTeamName?: string | null;
  homeTeamName?: string | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  period?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  pointSpread?: number | null;
  overUnder?: number | null;
  awayTeamMoneyLine?: number | null;
  homeTeamMoneyLine?: number | null;
  updated?: string | null;
  created?: string | null;
  globalGameId?: number;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  stadiumId?: number | null;
  stadium?: Stadium21;
  yardLine?: number | null;
  yardLineTerritory?: string | null;
  down?: number | null;
  distance?: number | null;
  possession?: string | null;
  periods?: Period1[];
  isClosed?: boolean;
  gameEndDateTime?: string | null;
  title?: string | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  channel?: string | null;
  neutralVenue?: boolean | null;
  awayPointSpreadPayout?: number | null;
  homePointSpreadPayout?: number | null;
  overPayout?: number | null;
  underPayout?: number | null;
  dateTimeUtc?: string | null;
  attendance?: number | null;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
};

export const game13Schema: Schema<Game13> = s.object<Game13>({
  gameId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  week: s.optionalNullable(s.number()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.number()),
  homeTeamId: s.optional(s.number()),
  awayTeamName: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  stadium: s.optional(s.lazy(() => stadium21Schema)),
  yardLine: s.optionalNullable(s.number()),
  yardLineTerritory: s.optionalNullable(s.string()),
  down: s.optionalNullable(s.number()),
  distance: s.optionalNullable(s.number()),
  possession: s.optionalNullable(s.string()),
  periods: s.optional(s.array(s.lazy(() => period1Schema))),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  channel: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  awayPointSpreadPayout: s.optionalNullable(s.number()),
  homePointSpreadPayout: s.optionalNullable(s.number()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  dateTimeUtc: s.optionalNullable(s.string()),
  attendance: s.optionalNullable(s.number()),
  rescheduledFromGameId: s.optionalNullable(s.number()),
  rescheduledGameId: s.optionalNullable(s.number()),
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
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    updated: "Updated",
    created: "Created",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    stadiumId: "StadiumID",
    stadium: "Stadium",
    yardLine: "YardLine",
    yardLineTerritory: "YardLineTerritory",
    down: "Down",
    distance: "Distance",
    possession: "Possession",
    periods: "Periods",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    title: "Title",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    channel: "Channel",
    neutralVenue: "NeutralVenue",
    awayPointSpreadPayout: "AwayPointSpreadPayout",
    homePointSpreadPayout: "HomePointSpreadPayout",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    dateTimeUtc: "DateTimeUTC",
    attendance: "Attendance",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
