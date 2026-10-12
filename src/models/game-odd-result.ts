import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddOutcomeSchema, type GameOddOutcome } from "./game-odd-outcome.js";

export type GameOddResult = {
  /** The unique ID of this odd */
  gameOddId?: number;
  /** Name of sportsbook */
  sportsbook?: string | null;
  /** Unique ID of the score/game */
  scoreId?: number;
  /** The timestamp of when these odds were first created (in US Eastern Time) */
  created?: string | null;
  /**
   * The timestamp of when these odds were last updated, based on US Eatern Time (EST/EDT). If these
   * are the latest odds for this game, and they have not been updated within the last few minutes,
   * then it indicates that there were problems connecting to the sportsbook.
   */
  updated?: string | null;
  /** The sportsbook's moneyline for the home team */
  homeMoneyLine?: number | null;
  /** The sportsbook's moneyline for the away team */
  awayMoneyLine?: number | null;
  /** The sportsbook's moneyline for a draw */
  drawMoneyLine?: number | null;
  /** The sportsbook's point spread for the home team */
  homePointSpread?: number | null;
  /** The sportsbook's point spread for the away team */
  awayPointSpread?: number | null;
  /** The sportsbook's point spread payout for the home team */
  homePointSpreadPayout?: number | null;
  /** The sportsbook's point spread payout for the away team */
  awayPointSpreadPayout?: number | null;
  /** The sportsbook's total points scored (over/under) for the game */
  overUnder?: number | null;
  /** The sportsbook's payout for over the total points line */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** Unique ID of the Sportsbook */
  sportsbookId?: number | null;
  /** The market type of this odd (ex: live, pregame, 1st-half, 1st-qtr, etc) */
  oddType?: string | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /** The unique ID of this game */
  gameId?: number;
  /** List of outcomes showing results of betting markets that were bet on for the given game */
  gameOddOutcomeResults?: GameOddOutcome[];
};

export const gameOddResultSchema: Schema<GameOddResult> = s.object<GameOddResult>({
  gameOddId: s.optional(s.int()),
  sportsbook: s.optionalNullable(s.string()),
  scoreId: s.optional(s.int()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  homeMoneyLine: s.optionalNullable(s.int()),
  awayMoneyLine: s.optionalNullable(s.int()),
  drawMoneyLine: s.optionalNullable(s.int()),
  homePointSpread: s.optionalNullable(s.float64()),
  awayPointSpread: s.optionalNullable(s.float64()),
  homePointSpreadPayout: s.optionalNullable(s.int()),
  awayPointSpreadPayout: s.optionalNullable(s.int()),
  overUnder: s.optionalNullable(s.float64()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  sportsbookId: s.optionalNullable(s.int()),
  oddType: s.optionalNullable(s.string()),
  sportsbookUrl: s.optionalNullable(s.string()),
  gameId: s.optional(s.int()),
  gameOddOutcomeResults: s.optional(s.array(s.lazy(() => gameOddOutcomeSchema))),
  _keysMap: {
    gameOddId: "GameOddID",
    sportsbook: "Sportsbook",
    scoreId: "ScoreID",
    created: "Created",
    updated: "Updated",
    homeMoneyLine: "HomeMoneyLine",
    awayMoneyLine: "AwayMoneyLine",
    drawMoneyLine: "DrawMoneyLine",
    homePointSpread: "HomePointSpread",
    awayPointSpread: "AwayPointSpread",
    homePointSpreadPayout: "HomePointSpreadPayout",
    awayPointSpreadPayout: "AwayPointSpreadPayout",
    overUnder: "OverUnder",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    sportsbookId: "SportsbookID",
    oddType: "OddType",
    sportsbookUrl: "SportsbookUrl",
    gameId: "GameID",
    gameOddOutcomeResults: "GameOddOutcomeResults",
  },
});
