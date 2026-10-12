import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingOutcome4 = {
  /** The unique ID of this outcome */
  bettingOutcomeId?: number;
  /** The unique ID associated with the betting market */
  bettingMarketId?: number;
  /** The sportsbook offering this outcome for betting */
  sportsbook?: Sportsbook;
  /** The BettingOutcomeTypeID of this outcome */
  bettingOutcomeTypeId?: number | null;
  /** The name of Betting Outcome Type (e.g. Under; Over; etc.) */
  bettingOutcomeType?: string | null;
  /** The American odds payout */
  payoutAmerican?: number;
  /** The decimal odds payout */
  payoutDecimal?: number | null;
  /** The number/handicap associated with the outcome (spread/total/etc.,) */
  value?: number | null;
  /**
   * The name of the participant (typically team or player) associated with the outcome. NOTE: This
   * is provided by the sportsbook. In the case of Player odds, we highly recommend using PlayerID
   * as names of players can be inconsistent between sportsbooks.
   */
  participant?: string | null;
  /** Indicates if this outcome is available for betting as of the last update */
  isAvailable?: boolean;
  /** Indicates if this is an alternate value or the core value */
  isAlternate?: boolean | null;
  /** The timestamp of when the betting outcome was created */
  created?: string | null;
  /** The last updated timestamp of the outcome (in US Eastern Time) */
  updated?: string | null;
  /** The unique ID of the fighter tied to this betting outcome (where applicable) */
  fighterId?: number | null;
  /** The URL for the sportsbook event */
  sportsbookUrl?: string | null;
  /** The datetime the outcome was unlisted (no longer available for bets) */
  unlisted?: string | null;
};

export const bettingOutcome4Schema: Schema<BettingOutcome4> = s.object<BettingOutcome4>({
  bettingOutcomeId: s.optional(s.int()),
  bettingMarketId: s.optional(s.int()),
  sportsbook: s.optional(s.lazy(() => sportsbookSchema)),
  bettingOutcomeTypeId: s.optionalNullable(s.int()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  payoutAmerican: s.optional(s.int()),
  payoutDecimal: s.optionalNullable(s.float64()),
  value: s.optionalNullable(s.float64()),
  participant: s.optionalNullable(s.string()),
  isAvailable: s.optional(s.boolean()),
  isAlternate: s.optionalNullable(s.boolean()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  fighterId: s.optionalNullable(s.int()),
  sportsbookUrl: s.optionalNullable(s.string()),
  unlisted: s.optionalNullable(s.string()),
  _keysMap: {
    bettingOutcomeId: "BettingOutcomeID",
    bettingMarketId: "BettingMarketID",
    sportsbook: "Sportsbook",
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
    fighterId: "FighterId",
    sportsbookUrl: "SportsbookUrl",
    unlisted: "Unlisted",
  },
});
