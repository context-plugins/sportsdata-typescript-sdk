import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SchedulesBasic = {
  gameId?: number;
  season?: number;
  seasonType?: number;
  status?: string | null;
  day?: string | null;
  dateTime?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayTeamId?: number;
  homeTeamId?: number | null;
  stadiumId?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  updated?: string | null;
  globalGameId?: number;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  isClosed?: boolean;
  neutralVenue?: boolean | null;
  dateTimeUtc?: string | null;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
};

export const schedulesBasicSchema: Schema<SchedulesBasic> = s.object<SchedulesBasic>({
  gameId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  isClosed: s.optional(s.boolean()),
  neutralVenue: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
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
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    isClosed: "IsClosed",
    neutralVenue: "NeutralVenue",
    dateTimeUtc: "DateTimeUTC",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
