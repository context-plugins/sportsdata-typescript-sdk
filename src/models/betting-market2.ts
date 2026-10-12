import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome2Schema, type BettingOutcome2 } from "./betting-outcome2.js";
import { consensusOutcome2Schema, type ConsensusOutcome2 } from "./consensus-outcome2.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket2 = {
  /** The unique ID associated with the betting market */
  bettingMarketId?: number;
  /** The unique ID associated with the betting market within the betting event */
  bettingEventId?: number;
  /** The ID that distinguishes the different types of Market Types */
  bettingMarketTypeId?: number | null;
  /** The name of the market type within a market (e.g. Golfer Prop, Tournament Prop, etc.) */
  bettingMarketType?: string | null;
  /** The ID associated with the name of the bet type within a market */
  bettingBetTypeId?: number | null;
  /** The name of the bet type within a market (e.g. Tournament Winner, Best Score, etc.) */
  bettingBetType?: string | null;
  /** The BettingPeriodTypeID of this type of market which we can result */
  bettingPeriodTypeId?: number | null;
  /** The name of the period type of this market (e.g. Round 1, Tournament, etc.) */
  bettingPeriodType?: string | null;
  /** The generic name of this market */
  name?: string | null;
  /** The unique ID of the golfer tied to this market (if applicable) */
  playerId?: number | null;
  /** The name of the golfer tied to this market (if applicable) */
  playerName?: string | null;
  /** The timestamp of when this betting market was created */
  created?: string | null;
  /** The last updated date of this market */
  updated?: string | null;
  /** The sportsbooks that have had odds in this market */
  availableSportsbooks?: Sportsbook[];
  /** Shows if any bets are currently available for betting in this market */
  anyBetsAvailable?: boolean | null;
  /** A list of the possible betting outcomes from each sportsbook in this market */
  bettingOutcomes?: BettingOutcome2[];
  /** The single set of consensus outcomes of this market */
  consensusOutcomes?: ConsensusOutcome2[];
};

export const bettingMarket2Schema: Schema<BettingMarket2> = s.object<BettingMarket2>({
  bettingMarketId: s.optional(s.int()),
  bettingEventId: s.optional(s.int()),
  bettingMarketTypeId: s.optionalNullable(s.int()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optionalNullable(s.int()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optionalNullable(s.int()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  playerName: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  availableSportsbooks: s.optional(s.array(s.lazy(() => sportsbookSchema))),
  anyBetsAvailable: s.optionalNullable(s.boolean()),
  bettingOutcomes: s.optional(s.array(s.lazy(() => bettingOutcome2Schema))),
  consensusOutcomes: s.optional(s.array(s.lazy(() => consensusOutcome2Schema))),
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
