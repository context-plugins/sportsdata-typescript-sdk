import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingResultingMetadata = {
  bettingMarketTypeId?: number;
  bettingBetTypeId?: number;
  bettingPeriodTypeId?: number;
};

export const bettingResultingMetadataSchema: Schema<BettingResultingMetadata> =
  s.object<BettingResultingMetadata>({
    bettingMarketTypeId: s.optional(s.number()),
    bettingBetTypeId: s.optional(s.number()),
    bettingPeriodTypeId: s.optional(s.number()),
    _keysMap: {
      bettingMarketTypeId: "BettingMarketTypeId",
      bettingBetTypeId: "BettingBetTypeId",
      bettingPeriodTypeId: "BettingPeriodTypeId",
    },
  });
