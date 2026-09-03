import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadataSchema, type BettingEntityMetadata } from "./betting-entity-metadata.js";
import {
  bettingResultingMetadataSchema,
  type BettingResultingMetadata,
} from "./betting-resulting-metadata.js";

export type BettingEntityMetadataCollection = {
  bettingBetTypes?: BettingEntityMetadata[];
  bettingMarketTypes?: BettingEntityMetadata[];
  bettingPeriodTypes?: BettingEntityMetadata[];
  bettingEventTypes?: BettingEntityMetadata[];
  bettingOutcomeTypes?: BettingEntityMetadata[];
  resultedMarketMetaData?: BettingResultingMetadata[];
  bettingResultTypes?: BettingEntityMetadata[];
};

export const bettingEntityMetadataCollectionSchema: Schema<BettingEntityMetadataCollection> =
  s.object<BettingEntityMetadataCollection>({
    bettingBetTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadataSchema))),
    bettingMarketTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadataSchema))),
    bettingPeriodTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadataSchema))),
    bettingEventTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadataSchema))),
    bettingOutcomeTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadataSchema))),
    resultedMarketMetaData: s.optional(s.array(s.lazy(() => bettingResultingMetadataSchema))),
    bettingResultTypes: s.optional(s.array(s.lazy(() => bettingEntityMetadataSchema))),
    _keysMap: {
      bettingBetTypes: "BettingBetTypes",
      bettingMarketTypes: "BettingMarketTypes",
      bettingPeriodTypes: "BettingPeriodTypes",
      bettingEventTypes: "BettingEventTypes",
      bettingOutcomeTypes: "BettingOutcomeTypes",
      resultedMarketMetaData: "ResultedMarketMetaData",
      bettingResultTypes: "BettingResultTypes",
    },
  });
