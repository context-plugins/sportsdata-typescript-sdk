import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingEntityMetadata1Schema, type BettingEntityMetadata1 } from "./betting-entity-metadata1.js";

export type BettingEntityMetadataCollection2 = {
  /**
   * The list of the bet types that can be found within a market (e.g. Best Score; Tournament
   * Winner; Top 10 Finish)
   */
  bettingBetTypes?: BettingEntityMetadata1[];
  /**
   * A list of the possible market types within a betting event (e.g. Tournament Prop; Matchup Prop;
   * Group Prop)
   */
  bettingMarketTypes?: BettingEntityMetadata1[];
  /**
   * A list of the possible period types within a betting event (e.g. Round 1, Through Round 2;
   * Tournament)
   */
  bettingPeriodTypes?: BettingEntityMetadata1[];
  /** A list of the possible BettingEventTypes */
  bettingEventTypes?: BettingEntityMetadata1[];
  /** A list of the possible betting outcomes types (e.g. Yes; No) */
  bettingOutcomeTypes?: BettingEntityMetadata1[];
};

export const bettingEntityMetadataCollection2Schema: Schema<BettingEntityMetadataCollection2> =
  s.object<BettingEntityMetadataCollection2>({
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
