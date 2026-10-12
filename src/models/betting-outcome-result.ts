import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingOutcomeResult = {
  /** The unique ID associated with the betting outcome */
  bettingOutcomeId?: number;
  /** The BettingResultTypeID of this outcome */
  bettingResultTypeId?: number | null;
  /**
   * The string identifier of the BettingResultType of this outcome (e.g. Win; Loss; Push; Not
   * Resulted; Incomplete)
   */
  bettingResultType?: string | null;
  /** The unique ID associated with this BettingOutcomeType */
  bettingOutcomeTypeId?: number | null;
  /** The name of BettingOutcomeType (e.g. Home; Away; Under; Over) */
  bettingOutcomeType?: string | null;
  /**
   * The offered betting line from a sportsbook for a game (i.e. If a team won a game by 5 and the
   * spread was -6.5, the actual value would be 5 and the bet value would be -6.5)
   */
  betValue?: number | null;
  /**
   * The value of the actual result that occured in game (i.e. If a team won a game by 5 and the
   * spread was -6.5, the actual value would be 5 and the bet value would be -6.5)
   */
  actualValue?: number | null;
};

export const bettingOutcomeResultSchema: Schema<BettingOutcomeResult> = s.object<BettingOutcomeResult>({
  bettingOutcomeId: s.optional(s.int()),
  bettingResultTypeId: s.optionalNullable(s.int()),
  bettingResultType: s.optionalNullable(s.string()),
  bettingOutcomeTypeId: s.optionalNullable(s.int()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  betValue: s.optionalNullable(s.float64()),
  actualValue: s.optionalNullable(s.float64()),
  _keysMap: {
    bettingOutcomeId: "BettingOutcomeID",
    bettingResultTypeId: "BettingResultTypeID",
    bettingResultType: "BettingResultType",
    bettingOutcomeTypeId: "BettingOutcomeTypeID",
    bettingOutcomeType: "BettingOutcomeType",
    betValue: "BetValue",
    actualValue: "ActualValue",
  },
});
