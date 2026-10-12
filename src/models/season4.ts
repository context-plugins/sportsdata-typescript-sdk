import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season4 = {
  /** The WNBA season for which these totals apply */
  year?: number;
  /** The start date of the preseason */
  preseasonStartDate?: string | null;
  /** The start date of the regular season */
  regularSeasonStartDate?: string | null;
  /** The start date of the postseason */
  postSeasonStartDate?: string | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar)
   */
  currentSeasonType?: string | null;
  /**
   * The string to pass into subsequent API calls in the season parameter (e.g. 2025REG, 2025POST,
   * etc.).
   */
  apiSeason?: string | null;
};

export const season4Schema: Schema<Season4> = s.object<Season4>({
  year: s.optional(s.int()),
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
