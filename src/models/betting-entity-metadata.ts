import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingEntityMetadata = {
  recordId?: number;
  name?: string | null;
};

export const bettingEntityMetadataSchema: Schema<BettingEntityMetadata> = s.object<BettingEntityMetadata>({
  recordId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    recordId: "RecordId",
    name: "Name",
  },
});
