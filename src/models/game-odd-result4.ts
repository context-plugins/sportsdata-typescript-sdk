import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddOutcomeSchema, type GameOddOutcome } from "./game-odd-outcome.js";

export type GameOddResult4 = {
  /** Unique ID of this odd */
  gameOddId?: number;
  /** The name of the sportsbook */
  sportsbook?: string | null;
  /** The unique ID of this game */
  gameId?: number;
  /** The timestamp of when these odds were first created (in US Eastern Time) */
  created?: string | null;
  /**
   * The timestamp of when these odds were last updated, based on US Eastern Time (EST/EDT). If
   * these are the latest odds for this game, and they have not been updated within the last few
   * minutes, then it indicates that there were problems connecting to the sportsbook
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
  /** The sportsbook's total points line at game start */
  overUnder?: number | null;
  /** The sportsbook's payout for the over in the total points line */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** The unique ID of the sportsbook */
  sportsbookId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /** The market type of the odd (ex: live; pregame; 1st-5th Inning; etc) */
  oddType?: string | null;
  /** The list of outcomes under this Game Odd Record with results */
  gameOddOutcomeResults?: GameOddOutcome[];
};

export const gameOddResult4Schema: Schema<GameOddResult4> = s.object<GameOddResult4>({
  gameOddId: s.optional(s.int()),
  sportsbook: s.optionalNullable(s.string()),
  gameId: s.optional(s.int()),
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
  sportsbookUrl: s.optionalNullable(s.string()),
  oddType: s.optionalNullable(s.string()),
  gameOddOutcomeResults: s.optional(s.array(s.lazy(() => gameOddOutcomeSchema))),
  _keysMap: {
    gameOddId: "GameOddID",
    sportsbook: "Sportsbook",
    gameId: "GameID",
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
    sportsbookUrl: "SportsbookUrl",
    oddType: "OddType",
    gameOddOutcomeResults: "GameOddOutcomeResults",
  },
});
