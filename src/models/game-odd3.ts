import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOdd3 = {
  /** The unique ID of this odd */
  gameOddId?: number;
  /** Name of sportsbook */
  sportsbook?: string | null;
  /** Unique ID of the Sportsbook */
  sportsbookId?: number;
  /** The unique ID of this game */
  gameId?: number;
  /** The market type of the odd (ex: live, pregame, 1st-half, 2nd-quarter) */
  oddType?: string | null;
  /** The timestamp of when these odds were first created in US Eastern Time */
  created?: string | null;
  /** The timestamp of when this record was last updated (in US Eastern time) */
  updated?: string | null;
  /** The URL for the sportsbook event */
  sportsbookUrl?: string | null;
  /** The sportsbook's money line for the home team */
  homeMoneyLine?: number | null;
  /** The sportsbook's money line for the away team */
  awayMoneyLine?: number | null;
  /** The sportsbook's point spread for the home team */
  homePointSpread?: number | null;
  /** The sportsbook's point spread for the away team */
  awayPointSpread?: number | null;
  /** The sportsbook's point spread payout for the home team */
  homePointSpreadPayout?: number | null;
  /** The sportsbook's point spread payout for the away team */
  awayPointSpreadPayout?: number | null;
  /**
   * The sportsbook's total points scored over or under for the game. Note: this is also known as
   * the Total for the game.
   */
  overUnder?: number | null;
  /** The sportsbook's payout for the over */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
};

export const gameOdd3Schema: Schema<GameOdd3> = s.object<GameOdd3>({
  gameOddId: s.optional(s.int()),
  sportsbook: s.optionalNullable(s.string()),
  sportsbookId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  oddType: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  sportsbookUrl: s.optionalNullable(s.string()),
  homeMoneyLine: s.optionalNullable(s.int()),
  awayMoneyLine: s.optionalNullable(s.int()),
  homePointSpread: s.optionalNullable(s.float64()),
  awayPointSpread: s.optionalNullable(s.float64()),
  homePointSpreadPayout: s.optionalNullable(s.int()),
  awayPointSpreadPayout: s.optionalNullable(s.int()),
  overUnder: s.optionalNullable(s.float64()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  _keysMap: {
    gameOddId: "GameOddID",
    sportsbook: "Sportsbook",
    sportsbookId: "SportsbookID",
    gameId: "GameID",
    oddType: "OddType",
    created: "Created",
    updated: "Updated",
    sportsbookUrl: "SportsbookUrl",
    homeMoneyLine: "HomeMoneyLine",
    awayMoneyLine: "AwayMoneyLine",
    homePointSpread: "HomePointSpread",
    awayPointSpread: "AwayPointSpread",
    homePointSpreadPayout: "HomePointSpreadPayout",
    awayPointSpreadPayout: "AwayPointSpreadPayout",
    overUnder: "OverUnder",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
  },
});
