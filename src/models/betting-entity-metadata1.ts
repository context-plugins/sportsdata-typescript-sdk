import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingEntityMetadata1 = {
  recordId?: number;
  name?: string | null;
  active?: boolean | null;
};

export const bettingEntityMetadata1Schema: Schema<BettingEntityMetadata1> = s.object<BettingEntityMetadata1>({
  recordId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    recordId: "RecordId",
    name: "Name",
    active: "Active",
  },
});
