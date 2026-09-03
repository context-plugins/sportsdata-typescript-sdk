import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season5 = {
  currentSeason?: number;
  startYear?: number;
  endYear?: number;
  description?: string | null;
  regularSeasonStartDate?: string | null;
  postSeasonStartDate?: string | null;
  apiSeason?: string | null;
};

export const season5Schema: Schema<Season5> = s.object<Season5>({
  currentSeason: s.optional(s.number()),
  startYear: s.optional(s.number()),
  endYear: s.optional(s.number()),
  description: s.optionalNullable(s.string()),
  regularSeasonStartDate: s.optionalNullable(s.string()),
  postSeasonStartDate: s.optionalNullable(s.string()),
  apiSeason: s.optionalNullable(s.string()),
  _keysMap: {
    currentSeason: "CurrentSeason",
    startYear: "StartYear",
    endYear: "EndYear",
    description: "Description",
    regularSeasonStartDate: "RegularSeasonStartDate",
    postSeasonStartDate: "PostSeasonStartDate",
    apiSeason: "ApiSeason",
  },
});
