import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduleBasic = {
  gameId?: number | null;
  globalGameId?: number | null;
  scoreId?: number | null;
  gameKey?: string | null;
  season?: number;
  seasonType?: number;
  status?: string | null;
  canceled?: boolean | null;
  date?: string | null;
  day?: string | null;
  dateTime?: string | null;
  dateTimeUtc?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  stadiumId?: number | null;
  closed?: boolean | null;
  lastUpdated?: string | null;
  isClosed?: boolean | null;
  week?: number;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
};

export const scheduleBasicSchema: Schema<ScheduleBasic> = s.object<ScheduleBasic>({
  gameId: s.optionalNullable(s.number()),
  globalGameId: s.optionalNullable(s.number()),
  scoreId: s.optionalNullable(s.number()),
  gameKey: s.optionalNullable(s.string()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  status: s.optionalNullable(s.string()),
  canceled: s.optionalNullable(s.boolean()),
  date: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  dateTimeUtc: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  closed: s.optionalNullable(s.boolean()),
  lastUpdated: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  week: s.optional(s.number()),
  rescheduledFromGameId: s.optionalNullable(s.number()),
  rescheduledGameId: s.optionalNullable(s.number()),
  _keysMap: {
    gameId: "GameID",
    globalGameId: "GlobalGameID",
    scoreId: "ScoreID",
    gameKey: "GameKey",
    season: "Season",
    seasonType: "SeasonType",
    status: "Status",
    canceled: "Canceled",
    date: "Date",
    day: "Day",
    dateTime: "DateTime",
    dateTimeUtc: "DateTimeUTC",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    stadiumId: "StadiumID",
    closed: "Closed",
    lastUpdated: "LastUpdated",
    isClosed: "IsClosed",
    week: "Week",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
