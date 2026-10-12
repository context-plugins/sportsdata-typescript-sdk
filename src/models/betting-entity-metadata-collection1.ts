import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadata1Schema, type BettingEntityMetadata1 } from "./betting-entity-metadata1.js";

export type BettingEntityMetadataCollection1 = {
  /** The list of the bet types that can be found within a market */
  bettingBetTypes?: BettingEntityMetadata1[];
  /**
   * A list of the possible market types within a Betting Event (e.g. Game Line, Team prop, Player
   * Future, etc.)
   */
  bettingMarketTypes?: BettingEntityMetadata1[];
  /**
   * The name of the period type of a market (e.g. Regular Season; 1st half; 90 Minutes and Stoppage
   * Time; etc.)
   */
  bettingPeriodTypes?: BettingEntityMetadata1[];
  /** A list of the possible BettingEventTypes (e.g. Game, Future) */
  bettingEventTypes?: BettingEntityMetadata1[];
  /** A list of the possible BettingOutcomeTypes (e.g. Home; Away; Under; Over) */
  bettingOutcomeTypes?: BettingEntityMetadata1[];
};

export const bettingEntityMetadataCollection1Schema: Schema<BettingEntityMetadataCollection1> =
  s.object<BettingEntityMetadataCollection1>({
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
