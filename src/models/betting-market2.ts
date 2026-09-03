import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome2Schema, type BettingOutcome2 } from "./betting-outcome2.js";
import { consensusOutcome2Schema, type ConsensusOutcome2 } from "./consensus-outcome2.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket2 = {
  bettingMarketId?: number;
  bettingEventId?: number;
  bettingMarketTypeId?: number | null;
  bettingMarketType?: string | null;
  bettingBetTypeId?: number | null;
  bettingBetType?: string | null;
  bettingPeriodTypeId?: number | null;
  bettingPeriodType?: string | null;
  name?: string | null;
  playerId?: number | null;
  playerName?: string | null;
  created?: string | null;
  updated?: string | null;
  availableSportsbooks?: Sportsbook[];
  anyBetsAvailable?: boolean | null;
  bettingOutcomes?: BettingOutcome2[];
  consensusOutcomes?: ConsensusOutcome2[];
};

export const bettingMarket2Schema: Schema<BettingMarket2> = s.object<BettingMarket2>({
  bettingMarketId: s.optional(s.number()),
  bettingEventId: s.optional(s.number()),
  bettingMarketTypeId: s.optionalNullable(s.number()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optionalNullable(s.number()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optionalNullable(s.number()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
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
