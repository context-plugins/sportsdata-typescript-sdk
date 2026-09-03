import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOdd3 = {
  gameOddId?: number;
  sportsbook?: string | null;
  sportsbookId?: number;
  gameId?: number;
  oddType?: string | null;
  created?: string | null;
  updated?: string | null;
  sportsbookUrl?: string | null;
  homeMoneyLine?: number | null;
  awayMoneyLine?: number | null;
  homePointSpread?: number | null;
  awayPointSpread?: number | null;
  homePointSpreadPayout?: number | null;
  awayPointSpreadPayout?: number | null;
  overUnder?: number | null;
  overPayout?: number | null;
  underPayout?: number | null;
};

export const gameOdd3Schema: Schema<GameOdd3> = s.object<GameOdd3>({
  gameOddId: s.optional(s.number()),
  sportsbook: s.optionalNullable(s.string()),
  sportsbookId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  oddType: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  sportsbookUrl: s.optionalNullable(s.string()),
  homeMoneyLine: s.optionalNullable(s.number()),
  awayMoneyLine: s.optionalNullable(s.number()),
  homePointSpread: s.optionalNullable(s.number()),
  awayPointSpread: s.optionalNullable(s.number()),
  homePointSpreadPayout: s.optionalNullable(s.number()),
  awayPointSpreadPayout: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  overPayout: s.optionalNullable(s.number()),
  underPayout: s.optionalNullable(s.number()),
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
