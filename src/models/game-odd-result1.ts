import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddOutcomeSchema, type GameOddOutcome } from "./game-odd-outcome.js";

export type GameOddResult1 = {
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
  sportsbookId?: number;
  sportsbookUrl?: string | null;
  oddType?: string | null;
  gameOddOutcomeResults?: GameOddOutcome[];
};

export const gameOddResult1Schema: Schema<GameOddResult1> = s.object<GameOddResult1>({
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
  sportsbookId: s.optional(s.number()),
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
