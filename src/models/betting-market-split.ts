import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingSplitSchema, type BettingSplit } from "./betting-split.js";

export type BettingMarketSplit = {
  bettingMarketId?: number;
  bettingEventId?: number;
  bettingMarketTypeId?: number;
  bettingMarketType?: string | null;
  bettingBetTypeId?: number;
  bettingBetType?: string | null;
  bettingPeriodTypeId?: number;
  bettingPeriodType?: string | null;
  teamId?: number | null;
  teamKey?: string | null;
  playerId?: number | null;
  playerName?: string | null;
  bettingSplits?: BettingSplit[];
};

export const bettingMarketSplitSchema: Schema<BettingMarketSplit> = s.object<BettingMarketSplit>({
  bettingMarketId: s.optional(s.number()),
  bettingEventId: s.optional(s.number()),
  bettingMarketTypeId: s.optional(s.number()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optional(s.number()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optional(s.number()),
  bettingPeriodType: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  teamKey: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  playerName: s.optionalNullable(s.string()),
  bettingSplits: s.optional(s.array(s.lazy(() => bettingSplitSchema))),
  _keysMap: {
    bettingMarketId: "BettingMarketID",
    bettingEventId: "BettingEventID",
    bettingMarketTypeId: "BettingMarketTypeID",
    bettingMarketType: "BettingMarketType",
    bettingBetTypeId: "BettingBetTypeID",
    bettingBetType: "BettingBetType",
    bettingPeriodTypeId: "BettingPeriodTypeID",
    bettingPeriodType: "BettingPeriodType",
    teamId: "TeamID",
    teamKey: "TeamKey",
    playerId: "PlayerID",
    playerName: "PlayerName",
    bettingSplits: "BettingSplits",
  },
});
