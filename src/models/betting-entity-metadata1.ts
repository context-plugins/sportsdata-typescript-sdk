import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingEntityMetadata1 = {
  /**
   * The ID of the record. Unique only within the same entity type (i.e. BettingMarketType IDs
   * overlap with BettingBetType IDs)
   */
  recordId?: number;
  /** A text value for the record (e.g. Moneyline; Player Prop; 3rd Quarter) */
  name?: string | null;
  /** Whether or not this market is currently is use. Note: Active = True & Inactive = False */
  active?: boolean | null;
};

export const bettingEntityMetadata1Schema: Schema<BettingEntityMetadata1> = s.object<BettingEntityMetadata1>({
  recordId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    recordId: "RecordId",
    name: "Name",
    active: "Active",
  },
});
