import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingOutcome1 = {
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
  teamId?: number | null;
  playerId?: number | null;
  globalTeamId?: number | null;
  sportsbookUrl?: string | null;
  isInPlay?: boolean | null;
};

export const bettingOutcome1Schema: Schema<BettingOutcome1> = s.object<BettingOutcome1>({
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
  teamId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
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
