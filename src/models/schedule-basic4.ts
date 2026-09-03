import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduleBasic4 = {
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
  updated?: string | null;
  created?: string | null;
  globalGameId?: number;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  stadiumId?: number | null;
  isClosed?: boolean;
  gameEndDateTime?: string | null;
  title?: string | null;
  neutralVenue?: boolean | null;
  dateTimeUtc?: string | null;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
};

export const scheduleBasic4Schema: Schema<ScheduleBasic4> = s.object<ScheduleBasic4>({
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
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
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
