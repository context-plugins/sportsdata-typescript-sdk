import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Bye = {
  season?: number;
  week?: number;
  team?: string | null;
};

export const byeSchema: Schema<Bye> = s.object<Bye>({
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  _keysMap: {
    season: "Season",
    week: "Week",
    team: "Team",
  },
});
