import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playoffAggregateScore2Schema, type PlayoffAggregateScore2 } from "./playoff-aggregate-score2.js";

export type Game25 = {
  gameId?: number;
  roundId?: number;
  season?: number;
  seasonType?: number;
  group?: string | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  venueId?: number | null;
  day?: string | null;
  dateTime?: string | null;
  status?: string | null;
  week?: number | null;
  period?: string | null;
  clock?: number | null;
  winner?: string | null;
  venueType?: string | null;
  awayTeamKey?: string | null;
  awayTeamName?: string | null;
  awayTeamCountryCode?: string | null;
  awayTeamScore?: number | null;
  awayTeamScorePeriod1?: number | null;
  awayTeamScorePeriod2?: number | null;
  awayTeamScoreExtraTime?: number | null;
  awayTeamScorePenalty?: number | null;
  homeTeamKey?: string | null;
  homeTeamName?: string | null;
  homeTeamCountryCode?: string | null;
  homeTeamScore?: number | null;
  homeTeamScorePeriod1?: number | null;
  homeTeamScorePeriod2?: number | null;
  homeTeamScoreExtraTime?: number | null;
  homeTeamScorePenalty?: number | null;
  homeTeamMoneyLine?: number | null;
  awayTeamMoneyLine?: number | null;
  drawMoneyLine?: number | null;
  pointSpread?: number | null;
  homeTeamPointSpreadPayout?: number | null;
  awayTeamPointSpreadPayout?: number | null;
  overUnder?: number | null;
  overPayout?: number | null;
  underPayout?: number | null;
  attendance?: number | null;
  updated?: string | null;
  updatedUtc?: string | null;
  globalGameId?: number;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  clockExtra?: number | null;
  clockDisplay?: string | null;
  isClosed?: boolean | null;
  homeTeamFormation?: string | null;
  awayTeamFormation?: string | null;
  playoffAggregateScore?: PlayoffAggregateScore2;
};

export const game25Schema: Schema<Game25> = s.object<Game25>({
  gameId: s.optional(s.number()),
  roundId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  group: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  venueId: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  week: s.optionalNullable(s.number()),
  period: s.optionalNullable(s.string()),
  clock: s.optionalNullable(s.number()),
  winner: s.optionalNullable(s.string()),
  venueType: s.optionalNullable(s.string()),
  awayTeamKey: s.optionalNullable(s.string()),
  awayTeamName: s.optionalNullable(s.string()),
  awayTeamCountryCode: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.number()),
  awayTeamScorePeriod1: s.optionalNullable(s.number()),
  awayTeamScorePeriod2: s.optionalNullable(s.number()),
  awayTeamScoreExtraTime: s.optionalNullable(s.number()),
  awayTeamScorePenalty: s.optionalNullable(s.number()),
  homeTeamKey: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  homeTeamCountryCode: s.optionalNullable(s.string()),
  homeTeamScore: s.optionalNullable(s.number()),
  homeTeamScorePeriod1: s.optionalNullable(s.number()),
  homeTeamScorePeriod2: s.optionalNullable(s.number()),
  homeTeamScoreExtraTime: s.optionalNullable(s.number()),
  homeTeamScorePenalty: s.optionalNullable(s.number()),
  homeTeamMoneyLine: s.optionalNullable(s.number()),
  awayTeamMoneyLine: s.optionalNullable(s.number()),
  drawMoneyLine: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  homeTeamPointSpreadPayout: s.optionalNullable(s.number()),
  awayTeamPointSpreadPayout: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  attendance: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  updatedUtc: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  clockExtra: s.optionalNullable(s.number()),
  clockDisplay: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  homeTeamFormation: s.optionalNullable(s.string()),
  awayTeamFormation: s.optionalNullable(s.string()),
  playoffAggregateScore: s.optional(s.lazy(() => playoffAggregateScore2Schema)),
  _keysMap: {
    gameId: "GameId",
    roundId: "RoundId",
    season: "Season",
    seasonType: "SeasonType",
    group: "Group",
    awayTeamId: "AwayTeamId",
    homeTeamId: "HomeTeamId",
    venueId: "VenueId",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    week: "Week",
    period: "Period",
    clock: "Clock",
    winner: "Winner",
    venueType: "VenueType",
    awayTeamKey: "AwayTeamKey",
    awayTeamName: "AwayTeamName",
    awayTeamCountryCode: "AwayTeamCountryCode",
    awayTeamScore: "AwayTeamScore",
    awayTeamScorePeriod1: "AwayTeamScorePeriod1",
    awayTeamScorePeriod2: "AwayTeamScorePeriod2",
    awayTeamScoreExtraTime: "AwayTeamScoreExtraTime",
    awayTeamScorePenalty: "AwayTeamScorePenalty",
    homeTeamKey: "HomeTeamKey",
    homeTeamName: "HomeTeamName",
    homeTeamCountryCode: "HomeTeamCountryCode",
    homeTeamScore: "HomeTeamScore",
    homeTeamScorePeriod1: "HomeTeamScorePeriod1",
    homeTeamScorePeriod2: "HomeTeamScorePeriod2",
    homeTeamScoreExtraTime: "HomeTeamScoreExtraTime",
    homeTeamScorePenalty: "HomeTeamScorePenalty",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    drawMoneyLine: "DrawMoneyLine",
    pointSpread: "PointSpread",
    homeTeamPointSpreadPayout: "HomeTeamPointSpreadPayout",
    awayTeamPointSpreadPayout: "AwayTeamPointSpreadPayout",
    overUnder: "OverUnder",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    attendance: "Attendance",
    updated: "Updated",
    updatedUtc: "UpdatedUtc",
    globalGameId: "GlobalGameId",
    globalAwayTeamId: "GlobalAwayTeamId",
    globalHomeTeamId: "GlobalHomeTeamId",
    clockExtra: "ClockExtra",
    clockDisplay: "ClockDisplay",
    isClosed: "IsClosed",
    homeTeamFormation: "HomeTeamFormation",
    awayTeamFormation: "AwayTeamFormation",
    playoffAggregateScore: "PlayoffAggregateScore",
  },
});
