import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";
import { series2Schema, type Series2 } from "./series2.js";

export type Game4 = {
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
  channel?: string | null;
  attendance?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  updated?: string | null;
  quarter?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  pointSpread?: number | null;
  overUnder?: number | null;
  awayTeamMoneyLine?: number | null;
  homeTeamMoneyLine?: number | null;
  globalGameId?: number;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  pointSpreadAwayTeamMoneyLine?: number | null;
  pointSpreadHomeTeamMoneyLine?: number | null;
  lastPlay?: string | null;
  isClosed?: boolean;
  quarters?: Quarter1[];
  gameEndDateTime?: string | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  neutralVenue?: boolean | null;
  overPayout?: number | null;
  underPayout?: number | null;
  crewChiefId?: number | null;
  umpireId?: number | null;
  refereeId?: number | null;
  alternateId?: number | null;
  dateTimeUtc?: string | null;
  seriesInfo?: Series2;
  inseasonTournament?: boolean | null;
  rescheduledFromGameId?: number | null;
  rescheduledGameId?: number | null;
};

export const game4Schema: Schema<Game4> = s.object<Game4>({
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
  channel: s.optionalNullable(s.string()),
  attendance: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.number()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.number()),
  lastPlay: s.optionalNullable(s.string()),
  isClosed: s.optional(s.boolean()),
  quarters: s.optional(s.array(s.lazy(() => quarter1Schema))),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  neutralVenue: s.optionalNullable(s.boolean()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  crewChiefId: s.optionalNullable(s.number()),
  umpireId: s.optionalNullable(s.number()),
  refereeId: s.optionalNullable(s.number()),
  alternateId: s.optionalNullable(s.number()),
  dateTimeUtc: s.optionalNullable(s.string()),
  seriesInfo: s.optional(s.lazy(() => series2Schema)),
  inseasonTournament: s.optionalNullable(s.boolean()),
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
    channel: "Channel",
    attendance: "Attendance",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    quarter: "Quarter",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pointSpreadAwayTeamMoneyLine: "PointSpreadAwayTeamMoneyLine",
    pointSpreadHomeTeamMoneyLine: "PointSpreadHomeTeamMoneyLine",
    lastPlay: "LastPlay",
    isClosed: "IsClosed",
    quarters: "Quarters",
    gameEndDateTime: "GameEndDateTime",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    neutralVenue: "NeutralVenue",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    crewChiefId: "CrewChiefID",
    umpireId: "UmpireID",
    refereeId: "RefereeID",
    alternateId: "AlternateID",
    dateTimeUtc: "DateTimeUTC",
    seriesInfo: "SeriesInfo",
    inseasonTournament: "InseasonTournament",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
