import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "./betting-market-split.js";

export type GameBettingSplit2 = {
  gameId?: number;
  seasonType?: number;
  season?: number;
  week?: number;
  day?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  bettingMarketSplits?: BettingMarketSplit[];
};

export const gameBettingSplit2Schema: Schema<GameBettingSplit2> = s.object<GameBettingSplit2>({
  gameId: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  day: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  bettingMarketSplits: s.optional(s.array(s.lazy(() => bettingMarketSplitSchema))),
  _keysMap: {
    gameId: "GameID",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    day: "Day",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    bettingMarketSplits: "BettingMarketSplits",
  },
});
