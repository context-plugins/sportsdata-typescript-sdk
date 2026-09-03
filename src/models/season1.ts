import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season1 = {
  season?: number;
  regularSeasonStartDate?: string | null;
  postSeasonStartDate?: string | null;
  seasonType?: string | null;
  apiSeason?: string | null;
};

export const season1Schema: Schema<Season1> = s.object<Season1>({
  season: s.optional(s.number()),
  regularSeasonStartDate: s.optionalNullable(s.string()),
  postSeasonStartDate: s.optionalNullable(s.string()),
  seasonType: s.optionalNullable(s.string()),
  apiSeason: s.optionalNullable(s.string()),
  _keysMap: {
    season: "Season",
    regularSeasonStartDate: "RegularSeasonStartDate",
    postSeasonStartDate: "PostSeasonStartDate",
    seasonType: "SeasonType",
    apiSeason: "ApiSeason",
  },
});
