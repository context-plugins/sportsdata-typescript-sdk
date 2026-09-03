import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome1Schema, type BettingOutcome1 } from "./betting-outcome1.js";
import { consensusOutcome1Schema, type ConsensusOutcome1 } from "./consensus-outcome1.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket1 = {
  bettingMarketId?: number;
  bettingEventId?: number;
  bettingMarketTypeId?: number | null;
  bettingMarketType?: string | null;
  bettingBetTypeId?: number | null;
  bettingBetType?: string | null;
  bettingPeriodTypeId?: number | null;
  bettingPeriodType?: string | null;
  name?: string | null;
  teamId?: number | null;
  teamKey?: string | null;
  playerId?: number | null;
  playerName?: string | null;
  created?: string | null;
  updated?: string | null;
  availableSportsbooks?: Sportsbook[];
  anyBetsAvailable?: boolean | null;
  bettingOutcomes?: BettingOutcome1[];
  consensusOutcomes?: ConsensusOutcome1[];
};

export const bettingMarket1Schema: Schema<BettingMarket1> = s.object<BettingMarket1>({
  bettingMarketId: s.optional(s.number()),
  bettingEventId: s.optional(s.number()),
  bettingMarketTypeId: s.optionalNullable(s.number()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optionalNullable(s.number()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optionalNullable(s.number()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  teamKey: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
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
