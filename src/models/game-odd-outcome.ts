import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOddOutcome = {
  /** The unique ID of this odd */
  gameOddId?: number;
  /** The unique ID of this GameOddResultType */
  gameOddResultTypeId?: number | null;
  /** The result/outcome of a bet (e.g. Won; Lost; Push; Not Resulted; Incomplete) */
  gameOddResultType?: string | null;
  /** The market type of the odd (ex. live, pregame, 1st-5th ining, etc) */
  oddType?: string | null;
  /** The GameOddOutcomeType of this outcome as a string */
  gameOddType?: string | null;
  /** The value that was bet in this outcome (if applicable) */
  betValue?: number | null;
  /**
   * The value of the actual result that occured in game (i.e. If a team won a game by 5 and the
   * spread was -6.5, the actual value would be 5 and the bet value would be -6.5)
   */
  actualValue?: number | null;
};

export const gameOddOutcomeSchema: Schema<GameOddOutcome> = s.object<GameOddOutcome>({
  gameOddId: s.optional(s.int()),
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
