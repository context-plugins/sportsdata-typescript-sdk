import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingOutcome3 = {
  /** The unique ID associated with this specific outcome */
  bettingOutcomeId?: number | null;
  /** The unique ID associated with the betting market */
  bettingMarketId?: number | null;
  /** The sportsbook offering this outcome for betting */
  sportsBook?: Sportsbook;
  /** The ID of this specific outcome type */
  bettingOutcomeTypeId?: number | null;
  /** The name of betting outcome type */
  bettingOutcomeType?: string | null;
  /** The American odds payout */
  payoutAmerican?: number | null;
  /** The decimal odds payout */
  payoutDecimal?: number | null;
  /** The number associated with the outcome (spread/total/etc) */
  value?: number | null;
  /**
   * The name of the participant (typically team or player) associated with the outcome. NOTE: This
   * is provided by the sportsbook. In the case of Player odds, we highly recommend using PlayerID
   * as names of players can be inconsistent between sportsbooks.
   */
  participant?: string | null;
  /** Denotes whether or not the betting outcome is currently available */
  isAvailable?: boolean | null;
  /** Denotes whether or not the betting outcome is an alternate line */
  isAlternate?: boolean | null;
  /** The date/time when this betting outcome was created (in US Eastern Time) */
  created?: string | null;
  /** The last updated date of the outcome */
  updated?: string | null;
  /** The datetime the outcome was unlisted (no longer available for bets) */
  unlisted?: string | null;
  /** The unique ID of the driver tied to this outcome (if applicable) */
  driverId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /**
   * A key to identify outcomes which are related and part of the same offering at a sportsbook (for
   * instance; with Group markets; this key would identify all the options for a particular group of
   * drivers)
   */
  groupKey?: number | null;
  /**
   * Indicates if this outcome is considered in-play/live (was created after the race start date)
   */
  isInPlayRaceOdd?: boolean | null;
  /** The market ID on the given sportsbook for deeplinking (when available) */
  sportsbookMarketId?: string | null;
  /** The outcome ID on the given sportsbook for deeplinking (when available) */
  sportsbookOutcomeId?: string | null;
};

export const bettingOutcome3Schema: Schema<BettingOutcome3> = s.object<BettingOutcome3>({
  bettingOutcomeId: s.optionalNullable(s.int()),
  bettingMarketId: s.optionalNullable(s.int()),
  sportsBook: s.optional(s.lazy(() => sportsbookSchema)),
  bettingOutcomeTypeId: s.optionalNullable(s.int()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  payoutAmerican: s.optionalNullable(s.int()),
  payoutDecimal: s.optionalNullable(s.float64()),
  value: s.optionalNullable(s.float64()),
  participant: s.optionalNullable(s.string()),
  isAvailable: s.optionalNullable(s.boolean()),
  isAlternate: s.optionalNullable(s.boolean()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  unlisted: s.optionalNullable(s.string()),
  driverId: s.optionalNullable(s.int()),
  sportsbookUrl: s.optionalNullable(s.string()),
  groupKey: s.optionalNullable(s.int()),
  isInPlayRaceOdd: s.optionalNullable(s.boolean()),
  sportsbookMarketId: s.optionalNullable(s.string()),
  sportsbookOutcomeId: s.optionalNullable(s.string()),
  _keysMap: {
    bettingOutcomeId: "BettingOutcomeID",
    bettingMarketId: "BettingMarketID",
    sportsBook: "SportsBook",
    bettingOutcomeTypeId: "BettingOutcomeTypeID",
    bettingOutcomeType: "BettingOutcomeType",
    payoutAmerican: "PayoutAmerican",
    payoutDecimal: "PayoutDecimal",
    value: "Value",
    participant: "Participant",
    isAvailable: "IsAvailable",
    isAlternate: "IsAlternate",
    created: "Created",
    updated: "Updated",
    unlisted: "Unlisted",
    driverId: "DriverID",
    sportsbookUrl: "SportsbookUrl",
    groupKey: "GroupKey",
    isInPlayRaceOdd: "IsInPlayRaceOdd",
    sportsbookMarketId: "SportsbookMarketID",
    sportsbookOutcomeId: "SportsbookOutcomeID",
  },
});
