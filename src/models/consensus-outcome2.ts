import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type ConsensusOutcome2 = {
  numberOfSportsbooks?: number;
  bettingOutcomeId?: number | null;
  bettingMarketId?: number | null;
  sportsBook?: Sportsbook;
  bettingOutcomeTypeId?: number | null;
  bettingOutcomeType?: string | null;
  payoutAmerican?: number | null;
  payoutDecimal?: number | null;
  value?: number | null;
  participant?: string | null;
  isAvailable?: boolean | null;
  isAlternate?: boolean | null;
  created?: string | null;
  updated?: string | null;
  unlisted?: string | null;
  playerId?: number | null;
  sportsbookUrl?: string | null;
  groupKey?: number | null;
  isInPlayTournamentOdd?: boolean | null;
  sportsbookMarketId?: string | null;
  sportsbookOutcomeId?: string | null;
};

export const consensusOutcome2Schema: Schema<ConsensusOutcome2> = s.object<ConsensusOutcome2>({
  numberOfSportsbooks: s.optional(s.number()),
  bettingOutcomeId: s.optionalNullable(s.number()),
  bettingMarketId: s.optionalNullable(s.number()),
  sportsBook: s.optional(s.lazy(() => sportsbookSchema)),
  bettingOutcomeTypeId: s.optionalNullable(s.number()),
  bettingOutcomeType: s.optionalNullable(s.string()),
  payoutAmerican: s.optionalNullable(s.number()),
  payoutDecimal: s.optionalNullable(s.number()),
  value: s.optionalNullable(s.number()),
  participant: s.optionalNullable(s.string()),
  isAvailable: s.optionalNullable(s.boolean()),
  isAlternate: s.optionalNullable(s.boolean()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  unlisted: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  sportsbookUrl: s.optionalNullable(s.string()),
  groupKey: s.optionalNullable(s.number()),
  isInPlayTournamentOdd: s.optionalNullable(s.boolean()),
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
    playerId: "PlayerID",
    sportsbookUrl: "SportsbookUrl",
    groupKey: "GroupKey",
    isInPlayTournamentOdd: "IsInPlayTournamentOdd",
    sportsbookMarketId: "SportsbookMarketID",
    sportsbookOutcomeId: "SportsbookOutcomeID",
  },
});
