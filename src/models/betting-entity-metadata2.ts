import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingEntityMetadata2 = {
  /**
   * The ID of the record. Unique only within the same entity type (i.e. BettingMarketType Ids
   * overlap with BettingBetType Ids).
   */
  recordId?: number;
  /**
   * Denotes the name of the type (e.g. Betting Market Type, Betting Event Type, Betting Period
   * Type)
   */
  name?: string | null;
  /** Whether or not this market is currently in use */
  active?: boolean | null;
};

export const bettingEntityMetadata2Schema: Schema<BettingEntityMetadata2> = s.object<BettingEntityMetadata2>({
  recordId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    recordId: "RecordID",
    name: "Name",
    active: "Active",
  },
});
