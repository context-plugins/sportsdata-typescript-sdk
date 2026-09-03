import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadata1Schema, type BettingEntityMetadata1 } from "./betting-entity-metadata1.js";

export type BettingEntityMetadataCollection4 = {
  bettingBetTypes?: BettingEntityMetadata1[];
  bettingMarketTypes?: BettingEntityMetadata1[];
  bettingPeriodTypes?: BettingEntityMetadata1[];
  bettingEventTypes?: BettingEntityMetadata1[];
  bettingOutcomeTypes?: BettingEntityMetadata1[];
};

export const bettingEntityMetadataCollection4Schema: Schema<BettingEntityMetadataCollection4> =
  s.object<BettingEntityMetadataCollection4>({
    bettingBetTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata1Schema))),
    bettingMarketTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata1Schema))),
    bettingPeriodTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata1Schema))),
    bettingEventTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata1Schema))),
    bettingOutcomeTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata1Schema))),
    _keysMap: {
      bettingBetTypes: "BettingBetTypes",
      bettingMarketTypes: "BettingMarketTypes",
      bettingPeriodTypes: "BettingPeriodTypes",
      bettingEventTypes: "BettingEventTypes",
      bettingOutcomeTypes: "BettingOutcomeTypes",
    },
  });
