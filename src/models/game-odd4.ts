import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOdd4 = {
  /** The unique ID of this odd */
  gameOddId?: number;
  /** The name of the sportsbook */
  sportsbook?: string | null;
  /** The unique ID of the game */
  gameId?: number;
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
  /** The sportsbook's money line for the away team */
  awayMoneyLine?: number | null;
  /** The sportsbook's money line for a draw */
  drawMoneyLine?: number | null;
  /** The sportsbook's point spread for the home team */
  homePointSpread?: number | null;
  /** The sportsbook's point spread for the away team */
  awayPointSpread?: number | null;
  /** The sportsbook's point spread payout for the home team */
  homePointSpreadPayout?: number | null;
  /** The sportsbook's point spread payout for the away team */
  awayPointSpreadPayout?: number | null;
  /** The sportsbook's total goals line (over/under) for the game */
  overUnder?: number | null;
  /** The sportsbook's payout for the over bet on the total goals line */
  overPayout?: number | null;
  /** The sportsbook's payout for the under bet on the total goals line */
  underPayout?: number | null;
  /** The unique ID of the sportsbook */
  sportsbookId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /** The sportsbook's asian handicap for the home team */
  homeTeamAsianHandicap?: number | null;
  /** The sportsbook's asian handicap for the away team */
  awayTeamAsianHandicap?: number | null;
  /** The sportsbook's Asian handicap payout for the home team */
  homeTeamAsianHandicapPayout?: number | null;
  /** The sportsbook's asian handicap payout for the away team covering */
  awayTeamAsianHandicapPayout?: number | null;
  /** The sportsbook's asian total for the game */
  asianTotal?: number | null;
  /** The sportsbook's payout for a result over the asian total */
  asianTotalOverPayout?: number | null;
  /** The sportsbook's payout for a result under the asian total */
  asianTotalUnderPayout?: number | null;
  /** The market type of the odd (ex: live; pregame; 90 minutes + stoppage time; etc.) */
  oddType?: string | null;
};

export const gameOdd4Schema: Schema<GameOdd4> = s.object<GameOdd4>({
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
  homeTeamAsianHandicap: s.optionalNullable(s.float64()),
  awayTeamAsianHandicap: s.optionalNullable(s.float64()),
  homeTeamAsianHandicapPayout: s.optionalNullable(s.int()),
  awayTeamAsianHandicapPayout: s.optionalNullable(s.int()),
  asianTotal: s.optionalNullable(s.float64()),
  asianTotalOverPayout: s.optionalNullable(s.int()),
  asianTotalUnderPayout: s.optionalNullable(s.int()),
  oddType: s.optionalNullable(s.string()),
  _keysMap: {
    gameOddId: "GameOddId",
    sportsbook: "Sportsbook",
    gameId: "GameId",
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
    sportsbookId: "SportsbookId",
    sportsbookUrl: "SportsbookUrl",
    homeTeamAsianHandicap: "HomeTeamAsianHandicap",
    awayTeamAsianHandicap: "AwayTeamAsianHandicap",
    homeTeamAsianHandicapPayout: "HomeTeamAsianHandicapPayout",
    awayTeamAsianHandicapPayout: "AwayTeamAsianHandicapPayout",
    asianTotal: "AsianTotal",
    asianTotalOverPayout: "AsianTotalOverPayout",
    asianTotalUnderPayout: "AsianTotalUnderPayout",
    oddType: "OddType",
  },
});
