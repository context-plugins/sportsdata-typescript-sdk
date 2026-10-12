import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingOutcome2 = {
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
  /** The american odds payout */
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
  /** Indicates if this outcome is available for betting as of last update */
  isAvailable?: boolean | null;
  /** Indicates if this is an alternate value or the core value */
  isAlternate?: boolean | null;
  /** The timestamp of when this betting outcome was created */
  created?: string | null;
  /** The last updated date of the outcome */
  updated?: string | null;
  /** The datetime the outcome was unlisted (no longer available for bets) */
  unlisted?: string | null;
  /** The unique ID of the golfer tied to this outcome */
  playerId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /**
   * A key to identify outcomes which are related and part of the same offering at a sportsbook (for
   * instance, with SixShooter markets, this key would identify all the options for a particular
   * group of golfers)
   */
  groupKey?: number | null;
  /**
   * Indicates if this outcome is considered in-play/live (i.e. was created after the tournament
   * start date)
   */
  isInPlayTournamentOdd?: boolean | null;
  /** The market ID of the given sportsbook when available for deep links */
  sportsbookMarketId?: string | null;
  /** The outcome ID of the given sportsbook when available for deep links */
  sportsbookOutcomeId?: string | null;
};

export const bettingOutcome2Schema: Schema<BettingOutcome2> = s.object<BettingOutcome2>({
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
  playerId: s.optionalNullable(s.int()),
  sportsbookUrl: s.optionalNullable(s.string()),
  groupKey: s.optionalNullable(s.int()),
  isInPlayTournamentOdd: s.optionalNullable(s.boolean()),
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
    playerId: "PlayerID",
    sportsbookUrl: "SportsbookUrl",
    groupKey: "GroupKey",
    isInPlayTournamentOdd: "IsInPlayTournamentOdd",
    sportsbookMarketId: "SportsbookMarketID",
    sportsbookOutcomeId: "SportsbookOutcomeID",
  },
});
