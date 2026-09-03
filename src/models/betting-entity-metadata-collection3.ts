import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadata2Schema, type BettingEntityMetadata2 } from "./betting-entity-metadata2.js";

export type BettingEntityMetadataCollection3 = {
  bettingBetTypes?: BettingEntityMetadata2[];
  bettingMarketTypes?: BettingEntityMetadata2[];
  bettingPeriodTypes?: BettingEntityMetadata2[];
  bettingEventTypes?: BettingEntityMetadata2[];
  bettingOutcomeTypes?: BettingEntityMetadata2[];
};

export const bettingEntityMetadataCollection3Schema: Schema<BettingEntityMetadataCollection3> =
  s.object<BettingEntityMetadataCollection3>({
    bettingBetTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata2Schema))),
    bettingMarketTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata2Schema))),
    bettingPeriodTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata2Schema))),
    bettingEventTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata2Schema))),
    bettingOutcomeTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadata2Schema))),
    _keysMap: {
      bettingBetTypes: "BettingBetTypes",
      bettingMarketTypes: "BettingMarketTypes",
      bettingPeriodTypes: "BettingPeriodTypes",
      bettingEventTypes: "BettingEventTypes",
      bettingOutcomeTypes: "BettingOutcomeTypes",
    },
  });
