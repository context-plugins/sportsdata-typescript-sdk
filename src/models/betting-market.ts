import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcomeSchema, type BettingOutcome } from "./betting-outcome.js";
import { consensusOutcomeSchema, type ConsensusOutcome } from "./consensus-outcome.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket = {
  /** The unique ID associated with the betting market */
  bettingMarketId?: number;
  /** The unique ID assocated with the betting event */
  bettingEventId?: number;
  /** The unique ID associated with the market type of the betting market */
  bettingMarketTypeId?: number | null;
  /** The name of the market type within a market (e.g. Player Prop, Team Prop, Game Prop, etc.) */
  bettingMarketType?: string | null;
  /** The ID associated with the name of the bet type within a market */
  bettingBetTypeId?: number | null;
  /** The name of the bet type within a market (e.g. Total Points, Moneyline, Spread, etc.) */
  bettingBetType?: string | null;
  /** The BettingPeriodTypeID of this type of market which we can result */
  bettingPeriodTypeId?: number | null;
  /** The BettingPeriodType of this market (e.g. Full Game; 1st Period; Overtime; Regular Season) */
  bettingPeriodType?: string | null;
  /** The name of the betting market */
  name?: string | null;
  /** The team's unique TeamID as assigned by SportsDataIO tied this market (if applicable) */
  teamId?: number | null;
  /** The abbreviation [Key] of the team tied to this market (if applicable) */
  teamKey?: string | null;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO tied to this betting market.
   * Note: this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /** The full name of the player associated with this market */
  playerName?: string | null;
  /** The date and time when this betting market was created in US Eastern Time */
  created?: string | null;
  /** The date and time of the last update made to this betting market (in US Eastern Time) */
  updated?: string | null;
  /** The sportsbooks that have had odds in this market */
  availableSportsbooks?: Sportsbook[];
  /**
   * A field that returns "True" if there are any available bets to make within the market in
   * question. If there are no bets available to make, the field returns "False"
   */
  anyBetsAvailable?: boolean | null;
  /** The list of betting outcomes from each sportsbook in this market */
  bettingOutcomes?: BettingOutcome[];
  /** The single set of consensus outcomes of this market */
  consensusOutcomes?: ConsensusOutcome[];
  /** Indicates whether a BettingOutcome has been archived or not (true/false) */
  isArchived?: boolean;
  /**
   * If IsArchived is true, this returns the URL that can be used to retrieve the archived
   * BettingOutcomes. An API Key and Sportsbook Grouping will be required to retrieve this
   * information. If IsArchived is false, this returns an emtpy string
   */
  archiveLocation?: string | null;
};

export const bettingMarketSchema: Schema<BettingMarket> = s.object<BettingMarket>({
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
  bettingOutcomes: s.optional(s.array(s.lazy(() => bettingOutcomeSchema))),
  consensusOutcomes: s.optional(s.array(s.lazy(() => consensusOutcomeSchema))),
  isArchived: s.optional(s.boolean()),
  archiveLocation: s.optionalNullable(s.string()),
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
    isArchived: "IsArchived",
    archiveLocation: "ArchiveLocation",
  },
});
