import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season7 = {
  /** The year of the season usable in the API */
  seasonId?: number;
  /** The calendar year that the current season is happening */
  description?: string | null;
  /** The start date of the season */
  startDate?: string | null;
  /** The end date of the season */
  endDate?: string | null;
};

export const season7Schema: Schema<Season7> = s.object<Season7>({
  seasonId: s.optional(s.int()),
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
