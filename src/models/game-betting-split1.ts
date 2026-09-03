import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "./betting-market-split.js";

export type GameBettingSplit1 = {
  gameId?: number;
  seasonType?: number;
  season?: number;
  day?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  bettingMarketSplits?: BettingMarketSplit[];
};

export const gameBettingSplit1Schema: Schema<GameBettingSplit1> = s.object<GameBettingSplit1>({
  gameId: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  day: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  bettingMarketSplits: s.optional(s.array(s.lazy(() => bettingMarketSplitSchema))),
  _keysMap: {
    gameId: "GameID",
    seasonType: "SeasonType",
    season: "Season",
    day: "Day",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    bettingMarketSplits: "BettingMarketSplits",
  },
});
