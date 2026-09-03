import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOdd4Schema, type GameOdd4 } from "./game-odd4.js";

export type GameInfo7 = {
  gameId?: number;
  roundId?: number;
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
  globalHomeTeamId?: number | null;
  pregameOdds?: GameOdd4[];
  liveOdds?: GameOdd4[];
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
  totalScore?: number | null;
  alternateMarketPregameOdds?: GameOdd4[];
};

export const gameInfo7Schema: Schema<GameInfo7> = s.object<GameInfo7>({
  gameId: s.optional(s.number()),
  roundId: s.optional(s.number()),
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
  globalHomeTeamId: s.optionalNullable(s.number()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOdd4Schema))),
  liveOdds: s.optional(s.array(s.lazy(() => gameOdd4Schema))),
  homeTeamScore: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  totalScore: s.optionalNullable(s.number()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOdd4Schema))),
  _keysMap: {
    gameId: "GameId",
    roundId: "RoundId",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
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
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
  },
});
