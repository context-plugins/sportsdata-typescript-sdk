import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadata2Schema, type BettingEntityMetadata2 } from "./betting-entity-metadata2.js";

export type BettingEntityMetadataCollection3 = {
  /**
   * The list of the bet types that can be found within a market (e.g. Race Winner; Top 3 Finish)
   */
  bettingBetTypes?: BettingEntityMetadata2[];
  /** A list of the possible market types within a betting event (e.g. Race Line; Drive Future) */
  bettingMarketTypes?: BettingEntityMetadata2[];
  /**
   * A list of the possible period types within a betting event (e.g. Race; Truck Series; Cup
   * Series)
   */
  bettingPeriodTypes?: BettingEntityMetadata2[];
  /** A list of the possible BettingEventTypes */
  bettingEventTypes?: BettingEntityMetadata2[];
  /** A list of the possible betting outcomes types (e.g. Yes; No) */
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
