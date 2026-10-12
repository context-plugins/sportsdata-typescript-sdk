import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "./betting-market-split.js";

export type GameBettingSplit2 = {
  /** The unique ID of this game tied to this split */
  gameId?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar).
   */
  seasonType?: number;
  /** The college football season of the game */
  season?: number;
  /** The week of the game related to this betting split */
  week?: number;
  /** The date of the game */
  day?: string | null;
  /** The abbreviation [Key] of the away team tied to this split */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** Shows the Market Types that have splits included for them in a given game */
  bettingMarketSplits?: BettingMarketSplit[];
};

export const gameBettingSplit2Schema: Schema<GameBettingSplit2> = s.object<GameBettingSplit2>({
  gameId: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optional(s.int()),
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
