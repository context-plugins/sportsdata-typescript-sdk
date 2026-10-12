import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadataSchema, type BettingEntityMetadata } from "./betting-entity-metadata.js";
import {
  bettingResultingMetadataSchema,
  type BettingResultingMetadata,
} from "./betting-resulting-metadata.js";

export type BettingEntityMetadataCollection = {
  /** The list of the bet types that can be found within a market */
  bettingBetTypes?: BettingEntityMetadata[];
  /**
   * A list of the possible Market Types within a Betting Event (e.g. Game Line, Team prop, Player
   * Future, etc.)
   */
  bettingMarketTypes?: BettingEntityMetadata[];
  /** A list of the possible BettingPeriodTypes (e.g. Full Game; Regulation ; 1st Quarter) */
  bettingPeriodTypes?: BettingEntityMetadata[];
  /** A list of the possible BettingEventTypes (e.g. Game; Future) */
  bettingEventTypes?: BettingEntityMetadata[];
  /** A list of the possible BettingOutcomeTypes (e.g. Home; Away; Under; Over) */
  bettingOutcomeTypes?: BettingEntityMetadata[];
  /**
   * A list of the combinations of MarketType, BetType, & PeriodType which we willl provide
   * automated resulting for
   */
  resultedMarketMetaData?: BettingResultingMetadata[];
  /**
   * The string identifier of the BettingResultType of this outcome (e.g. Won; Lost; Push; Not
   * Resulted; Incomplete)
   */
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
