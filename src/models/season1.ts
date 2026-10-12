import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season1 = {
  /** The MLB season for which these totals apply */
  season?: number;
  /** The start date of the regular season */
  regularSeasonStartDate?: string | null;
  /** The start date of the postseason */
  postSeasonStartDate?: string | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: string | null;
  /**
   * The string to pass into subsequent API calls in the season parameter (e.g. 2025REG, 2025POST,
   * etc.).
   */
  apiSeason?: string | null;
};

export const season1Schema: Schema<Season1> = s.object<Season1>({
  season: s.optional(s.int()),
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
