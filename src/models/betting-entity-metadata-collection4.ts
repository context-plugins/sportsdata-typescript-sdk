import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadata1Schema, type BettingEntityMetadata1 } from "./betting-entity-metadata1.js";

export type BettingEntityMetadataCollection4 = {
  /**
   * A list of the bet types that can be found within a market (e.g. Total Significant Strikes
   * Landed; To Win by Unanimous Decision; Moneyline)
   */
  bettingBetTypes?: BettingEntityMetadata1[];
  /**
   * A list of the possible market types that can be found within a market (e.g. Fight Line; Fighter
   * Prop)
   */
  bettingMarketTypes?: BettingEntityMetadata1[];
  /**
   * A list of the period types that can be found within a market (e.g. Round 1; Round 2; Full
   * Fight)
   */
  bettingPeriodTypes?: BettingEntityMetadata1[];
  /** A list of the possible betting events */
  bettingEventTypes?: BettingEntityMetadata1[];
  /** A list of the possible BettingOutcomeTypes (e.g. Under; Over; X+; etc.) */
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
