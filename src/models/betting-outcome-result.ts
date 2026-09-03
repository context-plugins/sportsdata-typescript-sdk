import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingOutcomeResult = {
  bettingOutcomeId?: number;
  bettingResultTypeId?: number | null;
  bettingResultType?: string | null;
  bettingOutcomeTypeId?: number | null;
  bettingOutcomeType?: string | null;
  betValue?: number | null;
  actualValue?: number | null;
};

export const bettingOutcomeResultSchema: Schema<BettingOutcomeResult> = s.object<BettingOutcomeResult>({
  bettingOutcomeId: s.optional(s.number()),
  bettingResultTypeId: s.optionalNullable(s.number()),
  bettingResultType: s.optionalNullable(s.string()),
  bettingOutcomeTypeId: s.optionalNullable(s.number()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  betValue: s.optionalNullable(s.number()),
  actualValue: s.optionalNullable(s.number()),
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
