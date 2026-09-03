import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season3 = {
  season?: number;
  startYear?: number;
  endYear?: number;
  description?: string | null;
  regularSeasonStartDate?: string | null;
  postSeasonStartDate?: string | null;
  apiSeason?: string | null;
};

export const season3Schema: Schema<Season3> = s.object<Season3>({
  season: s.optional(s.number()),
  startYear: s.optional(s.number()),
  endYear: s.optional(s.number()),
  description: s.optionalNullable(s.string()),
  regularSeasonStartDate: s.optionalNullable(s.string()),
  postSeasonStartDate: s.optionalNullable(s.string()),
  apiSeason: s.optionalNullable(s.string()),
  _keysMap: {
    season: "Season",
    startYear: "StartYear",
    endYear: "EndYear",
    description: "Description",
    regularSeasonStartDate: "RegularSeasonStartDate",
    postSeasonStartDate: "PostSeasonStartDate",
    apiSeason: "ApiSeason",
  },
});
