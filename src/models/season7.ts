import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season7 = {
  seasonId?: number;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export const season7Schema: Schema<Season7> = s.object<Season7>({
  seasonId: s.optional(s.number()),
  description: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  _keysMap: {
    seasonId: "SeasonID",
    description: "Description",
    startDate: "StartDate",
    endDate: "EndDate",
  },
});
