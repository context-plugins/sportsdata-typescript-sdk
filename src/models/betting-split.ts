import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingSplit = {
  /** The unique ID associated with the betting split */
  bettingMarketSplitId?: number;
  /** The unique ID associated with the betting market */
  bettingMarketId?: number;
  /** The unique ID associated with this BettingOutcomeType */
  bettingOutcomeTypeId?: number | null;
  /** The name of BettingOutcomeType (e.g. Home; Away; Under; Over) */
  bettingOutcomeType?: string | null;
  /** Percentage of bets placed on a specific outcome */
  betPercentage?: number | null;
  /** The percentage of the money placed in wagers on this market taken by this type of bet */
  moneyPercentage?: number | null;
  /** The date and time this betting split was created in US Eastern Time */
  created?: string | null;
  /** The date and time this set of values was last seen */
  lastSeen?: string | null;
};

export const bettingSplitSchema: Schema<BettingSplit> = s.object<BettingSplit>({
  bettingMarketSplitId: s.optional(s.int()),
  bettingMarketId: s.optional(s.int()),
  bettingOutcomeTypeId: s.optionalNullable(s.int()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  betPercentage: s.optionalNullable(s.int()),
  moneyPercentage: s.optionalNullable(s.int()),
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
