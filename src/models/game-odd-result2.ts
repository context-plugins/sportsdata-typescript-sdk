import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddOutcome1Schema, type GameOddOutcome1 } from "./game-odd-outcome1.js";

export type GameOddResult2 = {
  /** Unique ID of this odd */
  gameOddId?: number;
  /** Name of sportsbook */
  sportsbook?: string | null;
  /** The unique ID of this game */
  gameId?: number;
  /** The date and time when these odds were first created in US Eastern Time */
  created?: string | null;
  /**
   * The date and time of when these odds were last updated (in US Eatern Time). If these are the
   * latest odds for this game; and they have not been updated within the last few minutes; then it
   * indicates that there were problems connecting to the sportsbook.
   */
  updated?: string | null;
  /** The sportsbook's moneyline for the home team */
  homeMoneyLine?: number | null;
  /** The sportsbook's moneyline for the away team */
  awayMoneyLine?: number | null;
  /** The sportsbook's run line for the home team */
  homePointSpread?: number | null;
  /** The sportsbook's run line for the away team */
  awayPointSpread?: number | null;
  /** The sportsbook's run line payout for the home team */
  homePointSpreadPayout?: number | null;
  /** The sportsbook's run line payout for the away team */
  awayPointSpreadPayout?: number | null;
  /** The total points line as given by the sportsbook */
  overUnder?: number | null;
  /** The sportsbook's payout for the over */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** Unique ID of the sportsbook */
  sportsbookId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /** The market type of the odd (ex: live; pregame; 1st inning; etc) */
  oddType?: string | null;
  /** List of outcomes showing results of betting markets that were bet on for the given game */
  gameOddOutcomeResults?: GameOddOutcome1[];
};

export const gameOddResult2Schema: Schema<GameOddResult2> = s.object<GameOddResult2>({
  gameOddId: s.optional(s.int()),
  sportsbook: s.optionalNullable(s.string()),
  gameId: s.optional(s.int()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  homeMoneyLine: s.optionalNullable(s.int()),
  awayMoneyLine: s.optionalNullable(s.int()),
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
  gameOddOutcomeResults: s.optional(s.array(s.lazy(() => gameOddOutcome1Schema))),
  _keysMap: {
    gameOddId: "GameOddID",
    sportsbook: "Sportsbook",
    gameId: "GameID",
    created: "Created",
    updated: "Updated",
    homeMoneyLine: "HomeMoneyLine",
    awayMoneyLine: "AwayMoneyLine",
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
