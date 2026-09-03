import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period2Schema, type Period2 } from "./period2.js";
import { stadium1Schema, type Stadium1 } from "./stadium1.js";

export type Game14 = {
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
  period?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  pointSpread?: number | null;
  overUnder?: number | null;
  awayTeamMoneyLine?: number | null;
  homeTeamMoneyLine?: number | null;
  globalGameId?: number;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  tournamentId?: number | null;
  bracket?: string | null;
  round?: number | null;
  awayTeamSeed?: number | null;
  homeTeamSeed?: number | null;
  awayTeamPreviousGameId?: number | null;
  homeTeamPreviousGameId?: number | null;
  awayTeamPreviousGlobalGameId?: number | null;
  homeTeamPreviousGlobalGameId?: number | null;
  tournamentDisplayOrder?: number | null;
  tournamentDisplayOrderForHomeTeam?: string | null;
  periods?: Period2[];
  isClosed?: boolean;
  gameEndDateTime?: string | null;
  stadium?: Stadium1;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  topTeamPreviousGameId?: number | null;
  bottomTeamPreviousGameId?: number | null;
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

export const game14Schema: Schema<Game14> = s.object<Game14>({
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
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  tournamentId: s.optionalNullable(s.number()),
  bracket: s.optionalNullable(s.string()),
  round: s.optionalNullable(s.number()),
  awayTeamSeed: s.optionalNullable(s.number()),
  homeTeamSeed: s.optionalNullable(s.number()),
  awayTeamPreviousGameId: s.optionalNullable(s.number()),
  homeTeamPreviousGameId: s.optionalNullable(s.number()),
  awayTeamPreviousGlobalGameId: s.optionalNullable(s.number()),
  homeTeamPreviousGlobalGameId: s.optionalNullable(s.number()),
  tournamentDisplayOrder: s.optionalNullable(s.number()),
  tournamentDisplayOrderForHomeTeam: s.optionalNullable(s.string()),
  periods: s.optional(s.array(s.lazy(() => period2Schema))),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  stadium: s.optional(s.lazy(() => stadium1Schema)),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  topTeamPreviousGameId: s.optionalNullable(s.number()),
  bottomTeamPreviousGameId: s.optionalNullable(s.number()),
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
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    tournamentId: "TournamentID",
    bracket: "Bracket",
    round: "Round",
    awayTeamSeed: "AwayTeamSeed",
    homeTeamSeed: "HomeTeamSeed",
    awayTeamPreviousGameId: "AwayTeamPreviousGameID",
    homeTeamPreviousGameId: "HomeTeamPreviousGameID",
    awayTeamPreviousGlobalGameId: "AwayTeamPreviousGlobalGameID",
    homeTeamPreviousGlobalGameId: "HomeTeamPreviousGlobalGameID",
    tournamentDisplayOrder: "TournamentDisplayOrder",
    tournamentDisplayOrderForHomeTeam: "TournamentDisplayOrderForHomeTeam",
    periods: "Periods",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    stadium: "Stadium",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    topTeamPreviousGameId: "TopTeamPreviousGameId",
    bottomTeamPreviousGameId: "BottomTeamPreviousGameId",
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
