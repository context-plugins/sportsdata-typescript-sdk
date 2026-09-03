import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOdd1Schema, type GameOdd1 } from "./game-odd1.js";

export type GameInfo1 = {
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
  pregameOdds?: GameOdd1[];
  liveOdds?: GameOdd1[];
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
  totalScore?: number | null;
  homeRotationNumber?: number | null;
  awayRotationNumber?: number | null;
  alternateMarketPregameOdds?: GameOdd1[];
};

export const gameInfo1Schema: Schema<GameInfo1> = s.object<GameInfo1>({
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
  pregameOdds: s.optional(s.array(s.lazy(() => gameOdd1Schema))),
  liveOdds: s.optional(s.array(s.lazy(() => gameOdd1Schema))),
  homeTeamScore: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  totalScore: s.optionalNullable(s.number()),
  homeRotationNumber: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOdd1Schema))),
  _keysMap: {
    gameId: "GameId",
    season: "Season",
    seasonType: "SeasonType",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    awayTeamId: "AwayTeamId",
    homeTeamId: "HomeTeamId",
    awayTeamName: "AwayTeamName",
    homeTeamName: "HomeTeamName",
    globalGameId: "GlobalGameId",
    globalAwayTeamId: "GlobalAwayTeamId",
    globalHomeTeamId: "GlobalHomeTeamId",
    pregameOdds: "PregameOdds",
    liveOdds: "LiveOdds",
    homeTeamScore: "HomeTeamScore",
    awayTeamScore: "AwayTeamScore",
    totalScore: "TotalScore",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
  },
});
