import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingEntityMetadata = {
  /**
   * The ID of the record. Unique only within the same entity type (i.e. BettingMarketType IDs
   * overlap with BettingBetType IDs)
   */
  recordId?: number;
  /** A text value for the record (e.g. Moneyline; Player Prop; 3rd Quarter) */
  name?: string | null;
};

export const bettingEntityMetadataSchema: Schema<BettingEntityMetadata> = s.object<BettingEntityMetadata>({
  recordId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    recordId: "RecordId",
    name: "Name",
  },
});
