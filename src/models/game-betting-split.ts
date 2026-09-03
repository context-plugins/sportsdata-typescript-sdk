import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "./betting-market-split.js";

export type GameBettingSplit = {
  scoreId?: number;
  gameKey?: string | null;
  seasonType?: number;
  season?: number;
  week?: number;
  date?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  bettingMarketSplits?: BettingMarketSplit[];
};

export const gameBettingSplitSchema: Schema<GameBettingSplit> = s.object<GameBettingSplit>({
  scoreId: s.optional(s.number()),
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  date: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  bettingMarketSplits: s.optional(s.array(s.lazy(() => bettingMarketSplitSchema))),
  _keysMap: {
    scoreId: "ScoreId",
    gameKey: "GameKey",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    date: "Date",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    bettingMarketSplits: "BettingMarketSplits",
  },
});
