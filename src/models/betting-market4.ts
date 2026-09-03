import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome4Schema, type BettingOutcome4 } from "./betting-outcome4.js";
import { consensusOutcome3Schema, type ConsensusOutcome3 } from "./consensus-outcome3.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket4 = {
  bettingMarketId?: number;
  bettingEventId?: number;
  bettingMarketTypeId?: number;
  bettingMarketType?: string | null;
  bettingBetTypeId?: number;
  bettingBetType?: string | null;
  bettingPeriodTypeId?: number;
  bettingPeriodType?: string | null;
  name?: string | null;
  fighterId?: number | null;
  fighterName?: string | null;
  created?: string | null;
  updated?: string | null;
  availableSportsbooks?: Sportsbook[];
  anyBetsAvailable?: boolean;
  bettingOutcomes?: BettingOutcome4[];
  consensusOutcomes?: ConsensusOutcome3[];
};

export const bettingMarket4Schema: Schema<BettingMarket4> = s.object<BettingMarket4>({
  bettingMarketId: s.optional(s.number()),
  bettingEventId: s.optional(s.number()),
  bettingMarketTypeId: s.optional(s.number()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optional(s.number()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optional(s.number()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  fighterId: s.optionalNullable(s.number()),
  fighterName: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  availableSportsbooks: s.optional(s.array(s.lazy(() => sportsbookSchema))),
  anyBetsAvailable: s.optional(s.boolean()),
  bettingOutcomes: s.optional(s.array(s.lazy(() => bettingOutcome4Schema))),
  consensusOutcomes: s.optional(s.array(s.lazy(() => consensusOutcome3Schema))),
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
    fighterId: "FighterId",
    fighterName: "FighterName",
    created: "Created",
    updated: "Updated",
    availableSportsbooks: "AvailableSportsbooks",
    anyBetsAvailable: "AnyBetsAvailable",
    bettingOutcomes: "BettingOutcomes",
    consensusOutcomes: "ConsensusOutcomes",
  },
});
