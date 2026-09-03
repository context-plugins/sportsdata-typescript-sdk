import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResult4Schema, type GameOddResult4 } from "./game-odd-result4.js";
import { period1Schema, type Period1 } from "./period1.js";

export type GameInfoResult4 = {
  gameId?: number;
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
  globalGameId?: number | null;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  pregameOdds?: GameOddResult4[];
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
  totalScore?: number | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  alternateMarketPregameOdds?: GameOddResult4[];
  period?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  periods?: Period1[];
  isClosed?: boolean;
  liveOdds?: GameOddResult4[];
};

export const gameInfoResult4Schema: Schema<GameInfoResult4> = s.object<GameInfoResult4>({
  gameId: s.optional(s.number()),
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
  globalGameId: s.optionalNullable(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResult4Schema))),
  homeTeamScore: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  totalScore: s.optionalNullable(s.number()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResult4Schema))),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  periods: s.optional(s.array(s.lazy(() => period1Schema))),
  isClosed: s.optional(s.boolean()),
  liveOdds: s.optional(s.array(s.lazy(() => gameOddResult4Schema))),
  _keysMap: {
    gameId: "GameID",
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
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    periods: "Periods",
    isClosed: "IsClosed",
    liveOdds: "LiveOdds",
  },
});
