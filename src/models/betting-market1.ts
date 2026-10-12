import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome1Schema, type BettingOutcome1 } from "./betting-outcome1.js";
import { consensusOutcome1Schema, type ConsensusOutcome1 } from "./consensus-outcome1.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket1 = {
  /** The unique ID of the betting market */
  bettingMarketId?: number;
  /** The unique ID assocated with the betting event */
  bettingEventId?: number;
  /** The unique ID associated with the name of the market type */
  bettingMarketTypeId?: number | null;
  /**
   * The name of the market type within a betting market (e.g. Player Prop, Team Prop, Game Prop,
   * etc.)
   */
  bettingMarketType?: string | null;
  /** The ID associated with the name of the bet type within a market */
  bettingBetTypeId?: number | null;
  /** The name of the bet type within a market (e.g. Spread, Moneyline, Total Goals, etc.) */
  bettingBetType?: string | null;
  /** The ID associated with the betting period type which we can result */
  bettingPeriodTypeId?: number | null;
  /**
   * The name of the period type of a market (e.g. Regular Season; 1st half; 90 Minutes and Stoppage
   * Time; etc.)
   */
  bettingPeriodType?: string | null;
  /** The name of this betting market */
  name?: string | null;
  /** The unique ID of the team associated with betting market */
  teamId?: number | null;
  /** The abbreviation [Key] of the team associated with this betting market */
  teamKey?: string | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career
   */
  playerId?: number | null;
  /** The player's full name tied to this betting market */
  playerName?: string | null;
  /** The created date of this market (in US Eastern Time) */
  created?: string | null;
  /** The timestamp of when the betting market record was last updated (US Eastern Time) */
  updated?: string | null;
  /** The sportsbooks that have had odds in this market */
  availableSportsbooks?: Sportsbook[];
  /** Shows if any bets are currently available for betting in this market */
  anyBetsAvailable?: boolean | null;
  /** The list of betting outcomes from each sportsbook in this market */
  bettingOutcomes?: BettingOutcome1[];
  /** The single set of consesnus outcomes of this market */
  consensusOutcomes?: ConsensusOutcome1[];
};

export const bettingMarket1Schema: Schema<BettingMarket1> = s.object<BettingMarket1>({
  bettingMarketId: s.optional(s.int()),
  bettingEventId: s.optional(s.int()),
  bettingMarketTypeId: s.optionalNullable(s.int()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optionalNullable(s.int()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optionalNullable(s.int()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  teamKey: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  playerName: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  availableSportsbooks: s.optional(s.array(s.lazy(() => sportsbookSchema))),
  anyBetsAvailable: s.optionalNullable(s.boolean()),
  bettingOutcomes: s.optional(s.array(s.lazy(() => bettingOutcome1Schema))),
  consensusOutcomes: s.optional(s.array(s.lazy(() => consensusOutcome1Schema))),
  _keysMap: {
    bettingMarketId: "BettingMarketID",
    bettingEventId: "BettingEventID",
    bettingMarketTypeId: "BettingMarketTypeID",
    bettingMarketType: "BettingMarketType",
    bettingBetTypeId: "BettingBetTypeID",
    bettingBetType: "BettingBetType",
    bettingPeriodTypeId: "BettingPeriodTypeID",
    bettingPeriodType: "BettingPeriodType",
    name: "Name",
    teamId: "TeamID",
    teamKey: "TeamKey",
    playerId: "PlayerID",
    playerName: "PlayerName",
    created: "Created",
    updated: "Updated",
    availableSportsbooks: "AvailableSportsbooks",
    anyBetsAvailable: "AnyBetsAvailable",
    bettingOutcomes: "BettingOutcomes",
    consensusOutcomes: "ConsensusOutcomes",
  },
});
