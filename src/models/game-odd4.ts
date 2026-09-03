import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOdd4 = {
  gameOddId?: number;
  sportsbook?: string | null;
  gameId?: number;
  created?: string | null;
  updated?: string | null;
  homeMoneyLine?: number | null;
  awayMoneyLine?: number | null;
  drawMoneyLine?: number | null;
  homePointSpread?: number | null;
  awayPointSpread?: number | null;
  homePointSpreadPayout?: number | null;
  awayPointSpreadPayout?: number | null;
  overUnder?: number | null;
  overPayout?: number | null;
  underPayout?: number | null;
  sportsbookId?: number | null;
  sportsbookUrl?: string | null;
  homeTeamAsianHandicap?: number | null;
  awayTeamAsianHandicap?: number | null;
  homeTeamAsianHandicapPayout?: number | null;
  awayTeamAsianHandicapPayout?: number | null;
  asianTotal?: number | null;
  asianTotalOverPayout?: number | null;
  asianTotalUnderPayout?: number | null;
  oddType?: string | null;
};

export const gameOdd4Schema: Schema<GameOdd4> = s.object<GameOdd4>({
  gameOddId: s.optional(s.number()),
  sportsbook: s.optionalNullable(s.string()),
  gameId: s.optional(s.number()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  homeMoneyLine: s.optionalNullable(s.number()),
  awayMoneyLine: s.optionalNullable(s.number()),
  drawMoneyLine: s.optionalNullable(s.number()),
  homePointSpread: s.optionalNullable(s.number()),
  awayPointSpread: s.optionalNullable(s.number()),
  homePointSpreadPayout: s.optionalNullable(s.number()),
  awayPointSpreadPayout: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  sportsbookId: s.optionalNullable(s.number()),
  sportsbookUrl: s.optionalNullable(s.string()),
  homeTeamAsianHandicap: s.optionalNullable(s.number()),
  awayTeamAsianHandicap: s.optionalNullable(s.number()),
  homeTeamAsianHandicapPayout: s.optionalNullable(s.number()),
  awayTeamAsianHandicapPayout: s.optionalNullable(s.number()),
  asianTotal: s.optionalNullable(s.number()),
  asianTotalOverPayout: s.optionalNullable(s.number()),
  asianTotalUnderPayout: s.optionalNullable(s.number()),
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
