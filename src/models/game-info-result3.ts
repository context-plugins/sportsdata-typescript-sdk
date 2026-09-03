import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResult3Schema, type GameOddResult3 } from "./game-odd-result3.js";
import { periodSchema, type Period } from "./period.js";

export type GameInfoResult3 = {
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
  globalTeamHomeTeamId?: number | null;
  pregameOdds?: GameOddResult3[];
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
  totalScore?: number | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  alternateMarketPregameOdds?: GameOddResult3[];
  period?: string | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  periods?: Period[];
  isClosed?: boolean | null;
  liveOdds?: GameOddResult3[];
};

export const gameInfoResult3Schema: Schema<GameInfoResult3> = s.object<GameInfoResult3>({
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
  globalTeamHomeTeamId: s.optionalNullable(s.number()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  homeTeamScore: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  totalScore: s.optionalNullable(s.number()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  periods: s.optional(s.array(s.lazy(() => periodSchema))),
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
    globalTeamHomeTeamId: "GlobalTeamHomeTeamID",
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
