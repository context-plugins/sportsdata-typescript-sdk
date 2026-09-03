import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season = {
  season?: number;
  startYear?: number;
  endYear?: number;
  description?: string | null;
  regularSeasonStartDate?: string | null;
  postSeasonStartDate?: string | null;
  seasonType?: string | null;
  apiSeason?: string | null;
};

export const seasonSchema: Schema<Season> = s.object<Season>({
  season: s.optional(s.number()),
  startYear: s.optional(s.number()),
  endYear: s.optional(s.number()),
  description: s.optionalNullable(s.string()),
  regularSeasonStartDate: s.optionalNullable(s.string()),
  postSeasonStartDate: s.optionalNullable(s.string()),
  seasonType: s.optionalNullable(s.string()),
  apiSeason: s.optionalNullable(s.string()),
  _keysMap: {
    season: "Season",
    startYear: "StartYear",
    endYear: "EndYear",
    description: "Description",
    regularSeasonStartDate: "RegularSeasonStartDate",
    postSeasonStartDate: "PostSeasonStartDate",
    seasonType: "SeasonType",
    apiSeason: "ApiSeason",
  },
});
