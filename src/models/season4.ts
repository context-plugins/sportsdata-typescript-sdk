import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season4 = {
  year?: number;
  preseasonStartDate?: string | null;
  regularSeasonStartDate?: string | null;
  postSeasonStartDate?: string | null;
  currentSeasonType?: string | null;
  apiSeason?: string | null;
};

export const season4Schema: Schema<Season4> = s.object<Season4>({
  year: s.optional(s.number()),
  preseasonStartDate: s.optionalNullable(s.string()),
  regularSeasonStartDate: s.optionalNullable(s.string()),
  postSeasonStartDate: s.optionalNullable(s.string()),
  currentSeasonType: s.optionalNullable(s.string()),
  apiSeason: s.optionalNullable(s.string()),
  _keysMap: {
    year: "Year",
    preseasonStartDate: "PreseasonStartDate",
    regularSeasonStartDate: "RegularSeasonStartDate",
    postSeasonStartDate: "PostSeasonStartDate",
    currentSeasonType: "CurrentSeasonType",
    apiSeason: "ApiSeason",
  },
});
