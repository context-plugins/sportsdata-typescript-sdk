import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { seriesSchema, type Series } from "./series.js";

export type ScheduleBasic2 = {
  gameId?: number | null;
  season?: number;
  seasonType?: number;
  status?: string | null;
  day?: string | null;
  dateTime?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  rescheduledGameId?: number | null;
  stadiumId?: number | null;
  isClosed?: boolean;
  updated?: string | null;
  gameEndDateTime?: string | null;
  dateTimeUtc?: string | null;
  seriesInfo?: Series;
  rescheduledFromGameId?: number | null;
  suspensionResumeDay?: string | null;
  suspensionResumeDateTime?: string | null;
};

export const scheduleBasic2Schema: Schema<ScheduleBasic2> = s.object<ScheduleBasic2>({
  gameId: s.optionalNullable(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  rescheduledGameId: s.optionalNullable(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  isClosed: s.optional(s.boolean()),
  updated: s.optionalNullable(s.string()),
  gameEndDateTime: s.optionalNullable(s.string()),
  dateTimeUtc: s.optionalNullable(s.string()),
  seriesInfo: s.optional(s.lazy(() => seriesSchema)),
  rescheduledFromGameId: s.optionalNullable(s.number()),
  suspensionResumeDay: s.optionalNullable(s.string()),
  suspensionResumeDateTime: s.optionalNullable(s.string()),
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
    rescheduledGameId: "RescheduledGameID",
    stadiumId: "StadiumID",
    isClosed: "IsClosed",
    updated: "Updated",
    gameEndDateTime: "GameEndDateTime",
    dateTimeUtc: "DateTimeUTC",
    seriesInfo: "SeriesInfo",
    rescheduledFromGameId: "RescheduledFromGameID",
    suspensionResumeDay: "SuspensionResumeDay",
    suspensionResumeDateTime: "SuspensionResumeDateTime",
  },
});
