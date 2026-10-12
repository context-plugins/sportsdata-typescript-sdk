import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOddOutcome1 = {
  /** Unique ID of this odd */
  gameOddId?: number | null;
  /** The unique ID of this GameOddResultType */
  gameOddResultTypeId?: number | null;
  /** The result/outcome of a bet (e.g. Won; Lost; Push; Not Resulted; Incomplete) */
  gameOddResultType?: string | null;
  /** The market type of the odd (ex: live; pregame; 1st inning; etc) */
  oddType?: string | null;
  /** The GameOddResultType of an outcome in the form of a string */
  gameOddType?: string | null;
  /**
   * The offered betting line from a sportsbook for a game (i.e. If a team won a game by 2 and the
   * run line was -1.5, the actual value would be 2 and the bet value would be -1.5)
   */
  betValue?: number | null;
  /**
   * The value of the actual result that occured in game (i.e. If a team won a game by 2 and the
   * spread was -1.5, the actual value would be 2 and the bet value would be -1.5)
   */
  actualValue?: number | null;
};

export const gameOddOutcome1Schema: Schema<GameOddOutcome1> = s.object<GameOddOutcome1>({
  gameOddId: s.optionalNullable(s.int()),
  gameOddResultTypeId: s.optionalNullable(s.int()),
  gameOddResultType: s.optionalNullable(s.string()),
  oddType: s.optionalNullable(s.string()),
  gameOddType: s.optionalNullable(s.string()),
  betValue: s.optionalNullable(s.float64()),
  actualValue: s.optionalNullable(s.float64()),
  _keysMap: {
    gameOddId: "GameOddId",
    gameOddResultTypeId: "GameOddResultTypeId",
    gameOddResultType: "GameOddResultType",
    oddType: "OddType",
    gameOddType: "GameOddType",
    betValue: "BetValue",
    actualValue: "ActualValue",
  },
});
