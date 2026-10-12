import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingOutcome1 = {
  /** The unique ID associated with this specific outcome */
  bettingOutcomeId?: number | null;
  /** The unique ID of the betting market */
  bettingMarketId?: number | null;
  /** The sportsbook offering this outcome for betting */
  sportsBook?: Sportsbook;
  /** The ID associated with the betting outcome type */
  bettingOutcomeTypeId?: number | null;
  /** The name of the betting outcome within a betting market (e.g. Home; Away; Under; Over) */
  bettingOutcomeType?: string | null;
  /** The american odds payout */
  payoutAmerican?: number | null;
  /** The decimal odds payout */
  payoutDecimal?: number | null;
  /** The number associated with the outcome of a market (e.g. the spread, game total, etc.) */
  value?: number | null;
  /**
   * The name of the participant (typically team or player) associated with the outcome. NOTE: This
   * is provided by the sportsbook. In the case of Player odds, we highly recommend using PlayerID
   * as names of players can be inconsistent between sportsbooks.
   */
  participant?: string | null;
  /** Indicates if this outcome is available for betting as of the last update */
  isAvailable?: boolean | null;
  /** Indicates if this is an alternate value or the core value */
  isAlternate?: boolean | null;
  /** The created date of the outcome (in US Eastern Time) */
  created?: string | null;
  /** The timestamp of when the betting outcome was last updated (US Eastern Time) */
  updated?: string | null;
  /** The timestamp of when the outcome was no longer available for betting */
  unlisted?: string | null;
  /** The unique ID of the team associated with betting outcome */
  teamId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career
   */
  playerId?: number | null;
  /** A globally unique ID for this team associated with this outcome (where applicable) */
  globalTeamId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /**
   * Was this outcome created after the start time of the game (only applies when the betting event
   * is of type game)
   */
  isInPlay?: boolean | null;
};

export const bettingOutcome1Schema: Schema<BettingOutcome1> = s.object<BettingOutcome1>({
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
  teamId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  sportsbookUrl: s.optionalNullable(s.string()),
  isInPlay: s.optionalNullable(s.boolean()),
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
    teamId: "TeamID",
    playerId: "PlayerID",
    globalTeamId: "GlobalTeamID",
    sportsbookUrl: "SportsbookUrl",
    isInPlay: "IsInPlay",
  },
});
