import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbook1Schema, type Sportsbook1 } from "./sportsbook1.js";

export type ConsensusOutcome = {
  /** The number of sportsbooks odds that went into creating this consensus outcome */
  numberOfSportsbooks?: number;
  /** The unique ID associated with the betting outcome */
  bettingOutcomeId?: number | null;
  /** The unique ID associated with the betting market */
  bettingMarketId?: number | null;
  /** Name of sportsbook */
  sportsBook?: Sportsbook1;
  /** The unique ID associated with this BettingOutcomeType */
  bettingOutcomeTypeId?: number | null;
  /** The name of BettingOutcomeType (e.g. Home; Away; Under; Over) */
  bettingOutcomeType?: string | null;
  /** The payout of the bet, shown in American odds format */
  payoutAmerican?: number | null;
  /** The payout of the bet, shown in decimal odds format */
  payoutDecimal?: number | null;
  /** The number associated with the outcome (spread, total, etc) */
  value?: number | null;
  /**
   * This field is sourced from the related sportsbook and is shown as is; consider it as free-text
   * that can take any form. If a BettingOutcome has the PlayerId or TeamId field set; you should
   * use the respective Player or Team record to perform actions like displaying a player's name.
   * Note: if a BettingMarket has PlayerId or TeamId set; all the child BettingOutcomes will have
   * the field set as well
   */
  participant?: string | null;
  /** Indicates whether a BettingOutcome is available for betting or not (true/false) */
  isAvailable?: boolean | null;
  /** Indicates whether this is an alternate value or the core value (true/false) */
  isAlternate?: boolean | null;
  /** The date and time when this betting outcome was created in US Eastern Time. */
  created?: string | null;
  /** The date and time of the last update made to this betting outcome (in US Eastern Time) */
  updated?: string | null;
  /**
   * The timestamp of when these odds were first made unavailable to be bet on any further (In US
   * Eastern Time)
   */
  unlisted?: string | null;
  /** The team's unique TeamID as assigned by SportsDataIO tied this outcome (if applicable) */
  teamId?: number | null;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO tied to this betting outcome.
   * Note: this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /**
   * A globally unique ID for this team tied to this outcome. This value is guaranteed to be unique
   * across all sports/leagues (where applicable)
   */
  globalTeamId?: number | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
  /**
   * Was this outcome created after the start time of the game (only applies when the betting event
   * is of type game; true/false)
   */
  isInPlay?: boolean | null;
  /** The market id on the given sportsbook when available for deep links */
  sportsbookMarketId?: string | null;
  /** The outcome id on the given sportsbook when available for deep links */
  sportsbookOutcomeId?: string | null;
};

export const consensusOutcomeSchema: Schema<ConsensusOutcome> = s.object<ConsensusOutcome>({
  numberOfSportsbooks: s.optional(s.int()),
  bettingOutcomeId: s.optionalNullable(s.int()),
  bettingMarketId: s.optionalNullable(s.int()),
  sportsBook: s.optional(s.lazy(() => sportsbook1Schema)),
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
  sportsbookMarketId: s.optionalNullable(s.string()),
  sportsbookOutcomeId: s.optionalNullable(s.string()),
  _keysMap: {
    numberOfSportsbooks: "NumberOfSportsbooks",
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
    sportsbookMarketId: "SportsbookMarketID",
    sportsbookOutcomeId: "SportsbookOutcomeID",
  },
});
