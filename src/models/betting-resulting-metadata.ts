import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingResultingMetadata = {
  /** The unique ID associated with the market type of the betting market */
  bettingMarketTypeId?: number;
  /** The ID associated with the name of the bet type within a market */
  bettingBetTypeId?: number;
  /** The BettingPeriodTypeID of this market */
  bettingPeriodTypeId?: number;
};

export const bettingResultingMetadataSchema: Schema<BettingResultingMetadata> =
  s.object<BettingResultingMetadata>({
    bettingMarketTypeId: s.optional(s.int()),
    bettingBetTypeId: s.optional(s.int()),
    bettingPeriodTypeId: s.optional(s.int()),
    _keysMap: {
      bettingMarketTypeId: "BettingMarketTypeId",
      bettingBetTypeId: "BettingBetTypeId",
      bettingPeriodTypeId: "BettingPeriodTypeId",
    },
  });
