import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingSplit = {
  bettingMarketSplitId?: number;
  bettingMarketId?: number;
  bettingOutcomeTypeId?: number | null;
  bettingOutcomeType?: string | null;
  betPercentage?: number | null;
  moneyPercentage?: number | null;
  created?: string | null;
  lastSeen?: string | null;
};

export const bettingSplitSchema: Schema<BettingSplit> = s.object<BettingSplit>({
  bettingMarketSplitId: s.optional(s.number()),
  bettingMarketId: s.optional(s.number()),
  bettingOutcomeTypeId: s.optionalNullable(s.number()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  betPercentage: s.optionalNullable(s.number()),
  moneyPercentage: s.optionalNullable(s.number()),
  created: s.optionalNullable(s.string()),
  lastSeen: s.optionalNullable(s.string()),
  _keysMap: {
    bettingMarketSplitId: "BettingMarketSplitID",
    bettingMarketId: "BettingMarketID",
    bettingOutcomeTypeId: "BettingOutcomeTypeID",
    bettingOutcomeType: "BettingOutcomeType",
    betPercentage: "BetPercentage",
    moneyPercentage: "MoneyPercentage",
    created: "Created",
    lastSeen: "LastSeen",
  },
});
