import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddOutcomeSchema, type GameOddOutcome } from "./game-odd-outcome.js";

export type GameOddResult3 = {
  /** The unique ID of this odd */
  gameOddId?: number;
  /** The name of the sportsbook */
  sportsbook?: string | null;
  /** The unique ID of this game */
  gameId?: number;
  /** The date and time of when these odds were first created; based on US Eatern Time (EST/EDT) */
  created?: string | null;
  /** The timestamp of when these odds were last updated (in US Eastern Time) */
  updated?: string | null;
  /** The sportsbook's moneyline for the home team */
  homeMoneyLine?: number | null;
  /** The sportsbook's moneyline for the away team */
  awayMoneyLine?: number | null;
  /** The sportsbook's point spread for the home team */
  homePointSpread?: number | null;
  /** The sportsbook's point spread for the away team */
  awayPointSpread?: number | null;
  /** The sportsbook's point spread payout for the home team */
  homePointSpreadPayout?: number | null;
  /** The sportsbook's point spread payout for the away team */
  awayPointSpreadPayout?: number | null;
  /** The sportsbook's total goals scored over under for the game */
  overUnder?: number | null;
  /** The sportsbook's payout for the over */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** The unique ID of the sportsbook */
  sportsbookId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /** The market type of the odd (ex: live, pregame, 1st-pd, etc) */
  oddType?: string | null;
  /** List of outcomes showing results of betting markets that were bet on for the given game */
  gameOddOutcomeResults?: GameOddOutcome[];
};

export const gameOddResult3Schema: Schema<GameOddResult3> = s.object<GameOddResult3>({
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
  gameOddOutcomeResults: s.optional(s.array(s.lazy(() => gameOddOutcomeSchema))),
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
