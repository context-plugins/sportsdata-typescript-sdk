import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResult3Schema, type GameOddResult3 } from "./game-odd-result3.js";

export type GameInfoResult6 = {
  gameId?: number;
  season?: number;
  seasonType?: number;
  day?: string | null;
  dateTime?: string | null;
  status?: string | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  awayTeamName?: string | null;
  homeTeamName?: string | null;
  globalGameId?: number;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  pregameOdds?: GameOddResult3[];
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
  totalScore?: number | null;
  roundId?: number;
  week?: number | null;
  alternateMarketPregameOdds?: GameOddResult3[];
  period?: string | null;
  clock?: number | null;
  winner?: string | null;
  awayTeamScorePeriod1?: number | null;
  awayTeamScorePeriod2?: number | null;
  awayTeamScoreExtraTime?: number | null;
  awayTeamScorePenalty?: number | null;
  homeTeamScorePeriod1?: number | null;
  homeTeamScorePeriod2?: number | null;
  homeTeamScoreExtraTime?: number | null;
  homeTeamScorePenalty?: number | null;
  clockExtra?: number | null;
  clockDisplay?: string | null;
  isClosed?: boolean | null;
  liveOdds?: GameOddResult3[];
};

export const gameInfoResult6Schema: Schema<GameInfoResult6> = s.object<GameInfoResult6>({
  gameId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  awayTeamName: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  homeTeamScore: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  totalScore: s.optionalNullable(s.number()),
  roundId: s.optional(s.number()),
  week: s.optionalNullable(s.number()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  period: s.optionalNullable(s.string()),
  clock: s.optionalNullable(s.number()),
  winner: s.optionalNullable(s.string()),
  awayTeamScorePeriod1: s.optionalNullable(s.number()),
  awayTeamScorePeriod2: s.optionalNullable(s.number()),
  awayTeamScoreExtraTime: s.optionalNullable(s.number()),
  awayTeamScorePenalty: s.optionalNullable(s.number()),
  homeTeamScorePeriod1: s.optionalNullable(s.number()),
  homeTeamScorePeriod2: s.optionalNullable(s.number()),
  homeTeamScoreExtraTime: s.optionalNullable(s.number()),
  homeTeamScorePenalty: s.optionalNullable(s.number()),
  clockExtra: s.optionalNullable(s.number()),
  clockDisplay: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  liveOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    awayTeamName: "AwayTeamName",
    homeTeamName: "HomeTeamName",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pregameOdds: "PregameOdds",
    homeTeamScore: "HomeTeamScore",
    awayTeamScore: "AwayTeamScore",
    totalScore: "TotalScore",
    roundId: "RoundID",
    week: "Week",
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
    period: "Period",
    clock: "Clock",
    winner: "Winner",
    awayTeamScorePeriod1: "AwayTeamScorePeriod1",
    awayTeamScorePeriod2: "AwayTeamScorePeriod2",
    awayTeamScoreExtraTime: "AwayTeamScoreExtraTime",
    awayTeamScorePenalty: "AwayTeamScorePenalty",
    homeTeamScorePeriod1: "HomeTeamScorePeriod1",
    homeTeamScorePeriod2: "HomeTeamScorePeriod2",
    homeTeamScoreExtraTime: "HomeTeamScoreExtraTime",
    homeTeamScorePenalty: "HomeTeamScorePenalty",
    clockExtra: "ClockExtra",
    clockDisplay: "ClockDisplay",
    isClosed: "IsClosed",
    liveOdds: "LiveOdds",
  },
});
