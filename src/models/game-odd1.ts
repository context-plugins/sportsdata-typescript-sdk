import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOdd1 = {
  gameOddId?: number;
  sportsbook?: string | null;
  gameId?: number;
  created?: string | null;
  updated?: string | null;
  homeMoneyLine?: number | null;
  awayMoneyLine?: number | null;
  homePointSpread?: number | null;
  awayPointSpread?: number | null;
  homePointSpreadPayout?: number | null;
  awayPointSpreadPayout?: number | null;
  overUnder?: number | null;
  overPayout?: number | null;
  underPayout?: number | null;
  sportsbookId?: number | null;
  oddType?: string | null;
  sportsbookUrl?: string | null;
  unlisted?: string | null;
};

export const gameOdd1Schema: Schema<GameOdd1> = s.object<GameOdd1>({
  gameOddId: s.optional(s.number()),
  sportsbook: s.optionalNullable(s.string()),
  gameId: s.optional(s.number()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  homeMoneyLine: s.optionalNullable(s.number()),
  awayMoneyLine: s.optionalNullable(s.number()),
  homePointSpread: s.optionalNullable(s.number()),
  awayPointSpread: s.optionalNullable(s.number()),
  homePointSpreadPayout: s.optionalNullable(s.number()),
  awayPointSpreadPayout: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
  sportsbookId: s.optionalNullable(s.number()),
  oddType: s.optionalNullable(s.string()),
  sportsbookUrl: s.optionalNullable(s.string()),
  unlisted: s.optionalNullable(s.string()),
  _keysMap: {
    gameOddId: "GameOddId",
    sportsbook: "Sportsbook",
    gameId: "GameId",
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
    sportsbookId: "SportsbookId",
    oddType: "OddType",
    sportsbookUrl: "SportsbookUrl",
    unlisted: "Unlisted",
  },
});
