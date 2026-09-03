import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcomeResultSchema, type BettingOutcomeResult } from "./betting-outcome-result.js";

export type BettingMarketResult = {
  bettingMarketId?: number;
  bettingMarketTypeId?: number;
  bettingMarketType?: string | null;
  bettingBetTypeId?: number;
  bettingBetType?: string | null;
  bettingPeriodTypeId?: number;
  bettingPeriodType?: string | null;
  name?: string | null;
  teamId?: number | null;
  teamKey?: string | null;
  playerId?: number | null;
  playerName?: string | null;
  bettingOutcomeResults?: BettingOutcomeResult[];
  isMarketResultingSupported?: boolean;
};

export const bettingMarketResultSchema: Schema<BettingMarketResult> = s.object<BettingMarketResult>({
  bettingMarketId: s.optional(s.number()),
  bettingMarketTypeId: s.optional(s.number()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optional(s.number()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optional(s.number()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  teamKey: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  playerName: s.optionalNullable(s.string()),
  bettingOutcomeResults: s.optional(s.array(s.lazy(() => bettingOutcomeResultSchema))),
  isMarketResultingSupported: s.optional(s.boolean()),
  _keysMap: {
    bettingMarketId: "BettingMarketID",
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
    bettingOutcomeResults: "BettingOutcomeResults",
    isMarketResultingSupported: "IsMarketResultingSupported",
  },
});
