import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BettingEntityMetadata2 = {
  recordId?: number;
  name?: string | null;
  active?: boolean | null;
};

export const bettingEntityMetadata2Schema: Schema<BettingEntityMetadata2> = s.object<BettingEntityMetadata2>({
  recordId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    recordId: "RecordID",
    name: "Name",
    active: "Active",
  },
});
