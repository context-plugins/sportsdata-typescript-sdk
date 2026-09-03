import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inningSchema, type Inning } from "./inning.js";
import { seriesSchema, type Series } from "./series.js";

export type Game31 = {
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
  rescheduledGameId?: number | null;
  stadiumId?: number | null;
  channel?: string | null;
  inning?: number | null;
  inningHalf?: string | null;
  awayTeamRuns?: number | null;
  homeTeamRuns?: number | null;
  awayTeamHits?: number | null;
  homeTeamHits?: number | null;
  awayTeamErrors?: number | null;
  homeTeamErrors?: number | null;
  winningPitcherId?: number | null;
  losingPitcherId?: number | null;
  savingPitcherId?: number | null;
  attendance?: number | null;
  awayTeamProbablePitcherId?: number | null;
  homeTeamProbablePitcherId?: number | null;
  outs?: number | null;
  balls?: number | null;
  strikes?: number | null;
  currentPitcherId?: number | null;
  currentHitterId?: number | null;
  awayTeamStartingPitcherId?: number | null;
  homeTeamStartingPitcherId?: number | null;
  currentPitchingTeamId?: number | null;
  currentHittingTeamId?: number | null;
  pointSpread?: number | null;
  overUnder?: number | null;
  awayTeamMoneyLine?: number | null;
  homeTeamMoneyLine?: number | null;
  forecastTempLow?: number | null;
  forecastTempHigh?: number | null;
  forecastDescription?: string | null;
  forecastWindChill?: number | null;
  forecastWindSpeed?: number | null;
  forecastWindDirection?: number | null;
  rescheduledFromGameId?: number | null;
  runnerOnFirst?: boolean | null;
  runnerOnSecond?: boolean | null;
  runnerOnThird?: boolean | null;
  awayTeamStartingPitcher?: string | null;
  homeTeamStartingPitcher?: string | null;
  currentPitcher?: string | null;
  currentHitter?: string | null;
  winningPitcher?: string | null;
  losingPitcher?: string | null;
  savingPitcher?: string | null;
  dueUpHitterId1?: number | null;
  dueUpHitterId2?: number | null;
  dueUpHitterId3?: number | null;
  globalGameId?: number;
  globalAwayTeamId?: number;
  globalHomeTeamId?: number;
  pointSpreadAwayTeamMoneyLine?: number | null;
  pointSpreadHomeTeamMoneyLine?: number | null;
  lastPlay?: string | null;
  isClosed?: boolean;
  updated?: string | null;
  innings?: Inning[];
  gameEndDateTime?: string | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  neutralVenue?: boolean | null;
  inningDescription?: string | null;
  overPayout?: number | null;
  underPayout?: number | null;
  seriesInfo?: Series;
  dateTimeUtc?: string | null;
  homeTeamOpener?: boolean | null;
  awayTeamOpener?: boolean | null;
  suspensionResumeDay?: string | null;
  suspensionResumeDateTime?: string | null;
};

export const game31Schema: Schema<Game31> = s.object<Game31>({
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
  rescheduledGameId: s.optionalNullable(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  channel: s.optionalNullable(s.string()),
  inning: s.optionalNullable(s.number()),
  inningHalf: s.optionalNullable(s.string()),
  awayTeamRuns: s.optionalNullable(s.number()),
  homeTeamRuns: s.optionalNullable(s.number()),
  awayTeamHits: s.optionalNullable(s.number()),
  homeTeamHits: s.optionalNullable(s.number()),
  awayTeamErrors: s.optionalNullable(s.number()),
  homeTeamErrors: s.optionalNullable(s.number()),
  winningPitcherId: s.optionalNullable(s.number()),
  losingPitcherId: s.optionalNullable(s.number()),
  savingPitcherId: s.optionalNullable(s.number()),
  attendance: s.optionalNullable(s.number()),
  awayTeamProbablePitcherId: s.optionalNullable(s.number()),
  homeTeamProbablePitcherId: s.optionalNullable(s.number()),
  outs: s.optionalNullable(s.number()),
  balls: s.optionalNullable(s.number()),
  strikes: s.optionalNullable(s.number()),
  currentPitcherId: s.optionalNullable(s.number()),
  currentHitterId: s.optionalNullable(s.number()),
  awayTeamStartingPitcherId: s.optionalNullable(s.number()),
  homeTeamStartingPitcherId: s.optionalNullable(s.number()),
  currentPitchingTeamId: s.optionalNullable(s.number()),
  currentHittingTeamId: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  forecastTempLow: s.optionalNullable(s.number()),
  forecastTempHigh: s.optionalNullable(s.number()),
  forecastDescription: s.optionalNullable(s.string()),
  forecastWindChill: s.optionalNullable(s.number()),
  forecastWindSpeed: s.optionalNullable(s.number()),
  forecastWindDirection: s.optionalNullable(s.number()),
  rescheduledFromGameId: s.optionalNullable(s.number()),
  runnerOnFirst: s.optionalNullable(s.boolean()),
  runnerOnSecond: s.optionalNullable(s.boolean()),
  runnerOnThird: s.optionalNullable(s.boolean()),
  awayTeamStartingPitcher: s.optionalNullable(s.string()),
  homeTeamStartingPitcher: s.optionalNullable(s.string()),
  currentPitcher: s.optionalNullable(s.string()),
  currentHitter: s.optionalNullable(s.string()),
  winningPitcher: s.optionalNullable(s.string()),
  losingPitcher: s.optionalNullable(s.string()),
  savingPitcher: s.optionalNullable(s.string()),
  dueUpHitterId1: s.optionalNullable(s.number()),
  dueUpHitterId2: s.optionalNullable(s.number()),
  dueUpHitterId3: s.optionalNullable(s.number()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optional(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.number()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.number()),
  lastPlay: s.optionalNullable(s.string()),
  isClosed: s.optional(s.boolean()),
  updated: s.optionalNullable(s.string()),
  innings: s.optional(s.array(s.lazy(() => inningSchema))),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  neutralVenue: s.optionalNullable(s.boolean()),
  inningDescription: s.optionalNullable(s.string()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  seriesInfo: s.optional(s.lazy(() => seriesSchema)),
  dateTimeUtc: s.optionalNullable(s.string()),
  homeTeamOpener: s.optionalNullable(s.boolean()),
  awayTeamOpener: s.optionalNullable(s.boolean()),
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
    channel: "Channel",
    inning: "Inning",
    inningHalf: "InningHalf",
    awayTeamRuns: "AwayTeamRuns",
    homeTeamRuns: "HomeTeamRuns",
    awayTeamHits: "AwayTeamHits",
    homeTeamHits: "HomeTeamHits",
    awayTeamErrors: "AwayTeamErrors",
    homeTeamErrors: "HomeTeamErrors",
    winningPitcherId: "WinningPitcherID",
    losingPitcherId: "LosingPitcherID",
    savingPitcherId: "SavingPitcherID",
    attendance: "Attendance",
    awayTeamProbablePitcherId: "AwayTeamProbablePitcherID",
    homeTeamProbablePitcherId: "HomeTeamProbablePitcherID",
    outs: "Outs",
    balls: "Balls",
    strikes: "Strikes",
    currentPitcherId: "CurrentPitcherID",
    currentHitterId: "CurrentHitterID",
    awayTeamStartingPitcherId: "AwayTeamStartingPitcherID",
    homeTeamStartingPitcherId: "HomeTeamStartingPitcherID",
    currentPitchingTeamId: "CurrentPitchingTeamID",
    currentHittingTeamId: "CurrentHittingTeamID",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    forecastTempLow: "ForecastTempLow",
    forecastTempHigh: "ForecastTempHigh",
    forecastDescription: "ForecastDescription",
    forecastWindChill: "ForecastWindChill",
    forecastWindSpeed: "ForecastWindSpeed",
    forecastWindDirection: "ForecastWindDirection",
    rescheduledFromGameId: "RescheduledFromGameID",
    runnerOnFirst: "RunnerOnFirst",
    runnerOnSecond: "RunnerOnSecond",
    runnerOnThird: "RunnerOnThird",
    awayTeamStartingPitcher: "AwayTeamStartingPitcher",
    homeTeamStartingPitcher: "HomeTeamStartingPitcher",
    currentPitcher: "CurrentPitcher",
    currentHitter: "CurrentHitter",
    winningPitcher: "WinningPitcher",
    losingPitcher: "LosingPitcher",
    savingPitcher: "SavingPitcher",
    dueUpHitterId1: "DueUpHitterID1",
    dueUpHitterId2: "DueUpHitterID2",
    dueUpHitterId3: "DueUpHitterID3",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pointSpreadAwayTeamMoneyLine: "PointSpreadAwayTeamMoneyLine",
    pointSpreadHomeTeamMoneyLine: "PointSpreadHomeTeamMoneyLine",
    lastPlay: "LastPlay",
    isClosed: "IsClosed",
    updated: "Updated",
    innings: "Innings",
    gameEndDateTime: "GameEndDateTime",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    neutralVenue: "NeutralVenue",
    inningDescription: "InningDescription",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    seriesInfo: "SeriesInfo",
    dateTimeUtc: "DateTimeUTC",
    homeTeamOpener: "HomeTeamOpener",
    awayTeamOpener: "AwayTeamOpener",
    suspensionResumeDay: "SuspensionResumeDay",
    suspensionResumeDateTime: "SuspensionResumeDateTime",
  },
});
