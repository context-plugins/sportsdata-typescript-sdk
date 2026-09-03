import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Sportsbook = {
  sportsbookId?: number;
  name?: string | null;
};

export const sportsbookSchema: Schema<Sportsbook> = s.object<Sportsbook>({
  sportsbookId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    sportsbookId: "SportsbookID",
    name: "Name",
  },
});
