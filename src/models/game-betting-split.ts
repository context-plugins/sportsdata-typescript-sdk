import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "./betting-market-split.js";

export type GameBettingSplit = {
  /** Unique ID of the score/game */
  scoreId?: number;
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameID is
   * composed of Season; SeasonType; Week and HomeTeam. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
  /**
   * The type of season that this game corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star).
   */
  seasonType?: number;
  /** The season of the score */
  season?: number;
  /**
   * The NFL week associated with this betting split (regular season: 1 to 18; preseason: 0 to 4;
   * postseason: 1 to 4). Note: seasons after 2021 will have 3 preseason weeks
   */
  week?: number;
  /** The date and time of the game (in US Eastern Time) */
  date?: string | null;
  /** The abbreviation [Key} of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** Shows the Market Types that have splits included for them in a given game */
  bettingMarketSplits?: BettingMarketSplit[];
};

export const gameBettingSplitSchema: Schema<GameBettingSplit> = s.object<GameBettingSplit>({
  scoreId: s.optional(s.int()),
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optional(s.int()),
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
