import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "./betting-market-split.js";

export type GameBettingSplit1 = {
  /** The unique ID of the game associated with this GameBettingSplit */
  gameId?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition)
   */
  seasonType?: number;
  /** The NBA season of the game */
  season?: number;
  /** The day of the game */
  day?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** Shows the BettingMarketSplits included in a given game */
  bettingMarketSplits?: BettingMarketSplit[];
};

export const gameBettingSplit1Schema: Schema<GameBettingSplit1> = s.object<GameBettingSplit1>({
  gameId: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
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
