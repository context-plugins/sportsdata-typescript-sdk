import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoreBasic5 = {
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
  updated?: string | null;
  tournamentId?: number | null;
  bracket?: string | null;
  round?: number | null;
  awayTeamSeed?: number | null;
  homeTeamSeed?: number | null;
  isClosed?: boolean;
  gameEndDateTime?: string | null;
  neutralVenue?: boolean | null;
  dateTimeUtc?: string | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
};

export const scoreBasic5Schema: Schema<ScoreBasic5> = s.object<ScoreBasic5>({
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
  updated: s.optionalNullable(s.string()),
  tournamentId: s.optionalNullable(s.number()),
  bracket: s.optionalNullable(s.string()),
  round: s.optionalNullable(s.number()),
  awayTeamSeed: s.optionalNullable(s.number()),
  homeTeamSeed: s.optionalNullable(s.number()),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
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
    updated: "Updated",
    tournamentId: "TournamentID",
    bracket: "Bracket",
    round: "Round",
    awayTeamSeed: "AwayTeamSeed",
    homeTeamSeed: "HomeTeamSeed",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    neutralVenue: "NeutralVenue",
    dateTimeUtc: "DateTimeUTC",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
  },
});
