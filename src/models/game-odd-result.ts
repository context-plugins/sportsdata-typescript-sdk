import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddOutcomeSchema, type GameOddOutcome } from "./game-odd-outcome.js";

export type GameOddResult = {
  gameOddId?: number;
  sportsbook?: string | null;
  scoreId?: number;
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
  oddType?: string | null;
  sportsbookUrl?: string | null;
  gameId?: number;
  gameOddOutcomeResults?: GameOddOutcome[];
};

export const gameOddResultSchema: Schema<GameOddResult> = s.object<GameOddResult>({
  gameOddId: s.optional(s.number()),
  sportsbook: s.optionalNullable(s.string()),
  scoreId: s.optional(s.number()),
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
  oddType: s.optionalNullable(s.string()),
  sportsbookUrl: s.optionalNullable(s.string()),
  gameId: s.optional(s.number()),
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
