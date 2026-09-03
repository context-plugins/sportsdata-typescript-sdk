import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type ConsensusOutcome3 = {
  numberOfSportsbooks?: number;
  bettingOutcomeId?: number;
  bettingMarketId?: number;
  sportsbook?: Sportsbook;
  bettingOutcomeTypeId?: number | null;
  bettingOutcomeType?: string | null;
  payoutAmerican?: number;
  payoutDecimal?: number | null;
  value?: number | null;
  participant?: string | null;
  isAvailable?: boolean;
  isAlternate?: boolean | null;
  created?: string | null;
  updated?: string | null;
  fighterId?: number | null;
  sportsbookUrl?: string | null;
  unlisted?: string | null;
};

export const consensusOutcome3Schema: Schema<ConsensusOutcome3> = s.object<ConsensusOutcome3>({
  numberOfSportsbooks: s.optional(s.number()),
  bettingOutcomeId: s.optional(s.number()),
  bettingMarketId: s.optional(s.number()),
  sportsbook: s.optional(s.lazy(() => sportsbookSchema)),
  bettingOutcomeTypeId: s.optionalNullable(s.number()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  payoutAmerican: s.optional(s.number()),
  payoutDecimal: s.optionalNullable(s.number()),
  value: s.optionalNullable(s.number()),
  participant: s.optionalNullable(s.string()),
  isAvailable: s.optional(s.boolean()),
  isAlternate: s.optionalNullable(s.boolean()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  fighterId: s.optionalNullable(s.number()),
  sportsbookUrl: s.optionalNullable(s.string()),
  unlisted: s.optionalNullable(s.string()),
  _keysMap: {
    numberOfSportsbooks: "NumberOfSportsbooks",
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
