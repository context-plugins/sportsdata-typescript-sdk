import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Sportsbook1 = {
  sportsbookId?: number;
  name?: string | null;
};

export const sportsbook1Schema: Schema<Sportsbook1> = s.object<Sportsbook1>({
  sportsbookId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    sportsbookId: "SportsbookID",
    name: "Name",
  },
});
