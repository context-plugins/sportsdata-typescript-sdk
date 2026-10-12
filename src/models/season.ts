import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season = {
  /** The NBA season that these totals apply for */
  season?: number;
  /** The year in which the season started */
  startYear?: number;
  /** The year in which the season ended */
  endYear?: number;
  /**
   * The description of the season for display purposes (possible values include: 2017-18, 2018-19,
   * etc)
   */
  description?: string | null;
  /** The start date of the regular season */
  regularSeasonStartDate?: string | null;
  /** The start date of the postseason */
  postSeasonStartDate?: string | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: string | null;
  /**
   * The string to pass into subsequent API calls in the season parameter (e.g. 2025REG, 2025POST,
   * etc.)
   */
  apiSeason?: string | null;
};

export const seasonSchema: Schema<Season> = s.object<Season>({
  season: s.optional(s.int()),
  startYear: s.optional(s.int()),
  endYear: s.optional(s.int()),
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
