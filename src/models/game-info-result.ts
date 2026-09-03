import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResultSchema, type GameOddResult } from "./game-odd-result.js";

export type GameInfoResult = {
  scoreId?: number;
  season?: number;
  seasonType?: number;
  week?: number | null;
  day?: string | null;
  dateTime?: string | null;
  status?: string | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  awayTeamName?: string | null;
  homeTeamName?: string | null;
  globalGameId?: number;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number;
  pregameOdds?: GameOddResult[];
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
  totalScore?: number | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  alternateMarketPregameOdds?: GameOddResult[];
  gameId?: number;
  quarter?: string | null;
  timeRemaining?: string | null;
  awayScoreQuarter1?: number | null;
  awayScoreQuarter2?: number | null;
  awayScoreQuarter3?: number | null;
  awayScoreQuarter4?: number | null;
  awayScoreOvertime?: number | null;
  homeScoreQuarter1?: number | null;
  homeScoreQuarter2?: number | null;
  homeScoreQuarter3?: number | null;
  homeScoreQuarter4?: number | null;
  homeScoreOvertime?: number | null;
  isClosed?: boolean | null;
  liveOdds?: GameOddResult[];
};

export const gameInfoResultSchema: Schema<GameInfoResult> = s.object<GameInfoResult>({
  scoreId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  week: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  awayTeamName: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optional(s.number()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResultSchema))),
  homeTeamScore: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  totalScore: s.optionalNullable(s.number()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResultSchema))),
  gameId: s.optional(s.number()),
  quarter: s.optionalNullable(s.string()),
  timeRemaining: s.optionalNullable(s.string()),
  awayScoreQuarter1: s.optionalNullable(s.number()),
  awayScoreQuarter2: s.optionalNullable(s.number()),
  awayScoreQuarter3: s.optionalNullable(s.number()),
  awayScoreQuarter4: s.optionalNullable(s.number()),
  awayScoreOvertime: s.optionalNullable(s.number()),
  homeScoreQuarter1: s.optionalNullable(s.number()),
  homeScoreQuarter2: s.optionalNullable(s.number()),
  homeScoreQuarter3: s.optionalNullable(s.number()),
  homeScoreQuarter4: s.optionalNullable(s.number()),
  homeScoreOvertime: s.optionalNullable(s.number()),
  isClosed: s.optionalNullable(s.boolean()),
  liveOdds: s.optional(s.array(s.lazy(() => gameOddResultSchema))),
  _keysMap: {
    scoreId: "ScoreID",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
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
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
    gameId: "GameID",
    quarter: "Quarter",
    timeRemaining: "TimeRemaining",
    awayScoreQuarter1: "AwayScoreQuarter1",
    awayScoreQuarter2: "AwayScoreQuarter2",
    awayScoreQuarter3: "AwayScoreQuarter3",
    awayScoreQuarter4: "AwayScoreQuarter4",
    awayScoreOvertime: "AwayScoreOvertime",
    homeScoreQuarter1: "HomeScoreQuarter1",
    homeScoreQuarter2: "HomeScoreQuarter2",
    homeScoreQuarter3: "HomeScoreQuarter3",
    homeScoreQuarter4: "HomeScoreQuarter4",
    homeScoreOvertime: "HomeScoreOvertime",
    isClosed: "IsClosed",
    liveOdds: "LiveOdds",
  },
});
