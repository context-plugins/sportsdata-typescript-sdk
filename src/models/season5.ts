import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season5 = {
  /** The college basketball season of the game */
  currentSeason?: number;
  /** The year in which the season started */
  startYear?: number;
  /** The year in which the season ended */
  endYear?: number;
  /** The description of this season for display purposes (e.g. 2017-18, 2018-19, etc) */
  description?: string | null;
  /** The start date of the regular season */
  regularSeasonStartDate?: string | null;
  /** The start date of the postseason */
  postSeasonStartDate?: string | null;
  /**
   * The string to pass into subsequent API calls in the season parameter (e.g. 2025REG, 2025POST,
   * etc.)
   */
  apiSeason?: string | null;
};

export const season5Schema: Schema<Season5> = s.object<Season5>({
  currentSeason: s.optional(s.int()),
  startYear: s.optional(s.int()),
  endYear: s.optional(s.int()),
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
