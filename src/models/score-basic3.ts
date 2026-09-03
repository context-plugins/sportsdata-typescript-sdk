import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoreBasic3 = {
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
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  gameEndDateTime?: string | null;
  dateTimeUtc?: string | null;
};

export const scoreBasic3Schema: Schema<ScoreBasic3> = s.object<ScoreBasic3>({
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
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  gameEndDateTime: s.optionalNullable(s.string()),
  dateTimeUtc: s.optionalNullable(s.string()),
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
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    gameEndDateTime: "GameEndDateTime",
    dateTimeUtc: "DateTimeUTC",
  },
});
