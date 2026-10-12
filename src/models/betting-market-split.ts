import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingSplitSchema, type BettingSplit } from "./betting-split.js";

export type BettingMarketSplit = {
  /** The unique ID associated with the betting market */
  bettingMarketId?: number;
  /** The unique ID of the betting event associated with this split */
  bettingEventId?: number;
  /** The unique ID associated with the market type of the betting market */
  bettingMarketTypeId?: number;
  /** The name of the market type within a market (e.g. Player Prop, Team Prop, Game Prop, etc.) */
  bettingMarketType?: string | null;
  /** The ID associated with the name of the bet type within a market */
  bettingBetTypeId?: number;
  /** The name of the bet type within a market (e.g. Total Points, Moneyline, Spread, etc.) */
  bettingBetType?: string | null;
  /** The BettingPeriodTypeID of this market */
  bettingPeriodTypeId?: number;
  /** The BettingPeriodType of this market (e.g. Full Game; 1st Period; Overtime; Regular Season) */
  bettingPeriodType?: string | null;
  /** The team's unique TeamID as assigned by SportsDataIO tied this market (if applicable) */
  teamId?: number | null;
  /** The abbreviation [Key] of the team tied to this market (if applicable) */
  teamKey?: string | null;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO tied to this betting market
   * split. Note: this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /** The full name of the player associated with this market */
  playerName?: string | null;
  /** A list of betting splits for the BettingMarket */
  bettingSplits?: BettingSplit[];
};

export const bettingMarketSplitSchema: Schema<BettingMarketSplit> = s.object<BettingMarketSplit>({
  bettingMarketId: s.optional(s.int()),
  bettingEventId: s.optional(s.int()),
  bettingMarketTypeId: s.optional(s.int()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optional(s.int()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optional(s.int()),
  bettingPeriodType: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  teamKey: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
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
