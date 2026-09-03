import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduleBasic6 = {
  gameId?: number;
  season?: number;
  seasonType?: number;
  status?: string | null;
  day?: string | null;
  dateTime?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  updated?: string | null;
  globalGameId?: number;
  tournamentId?: number | null;
  bracket?: string | null;
  round?: number | null;
  awayTeamSeed?: number | null;
  homeTeamSeed?: number | null;
  isClosed?: boolean | null;
  gameEndDateTime?: string | null;
  neutralVenue?: boolean | null;
  dateTimeUtc?: string | null;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
};

export const scheduleBasic6Schema: Schema<ScheduleBasic6> = s.object<ScheduleBasic6>({
  gameId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.number()),
  tournamentId: s.optionalNullable(s.number()),
  bracket: s.optionalNullable(s.string()),
  round: s.optionalNullable(s.number()),
  awayTeamSeed: s.optionalNullable(s.number()),
  homeTeamSeed: s.optionalNullable(s.number()),
  isClosed: s.optionalNullable(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
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
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    globalGameId: "GlobalGameID",
    tournamentId: "TournamentID",
    bracket: "Bracket",
    round: "Round",
    awayTeamSeed: "AwayTeamSeed",
    homeTeamSeed: "HomeTeamSeed",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    neutralVenue: "NeutralVenue",
    dateTimeUtc: "DateTimeUTC",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
