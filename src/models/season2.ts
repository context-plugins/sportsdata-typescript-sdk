import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season2 = {
  season?: number;
  startYear?: number;
  endYear?: number;
  description?: string | null;
  apiSeason?: string | null;
  apiWeek?: number | null;
};

export const season2Schema: Schema<Season2> = s.object<Season2>({
  season: s.optional(s.number()),
  startYear: s.optional(s.number()),
  endYear: s.optional(s.number()),
  description: s.optionalNullable(s.string()),
  apiSeason: s.optionalNullable(s.string()),
  apiWeek: s.optionalNullable(s.number()),
  _keysMap: {
    season: "Season",
    startYear: "StartYear",
    endYear: "EndYear",
    description: "Description",
    apiSeason: "ApiSeason",
    apiWeek: "ApiWeek",
  },
});
