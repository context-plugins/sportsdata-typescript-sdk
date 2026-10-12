import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season3 = {
  /**
   * The season that the game occurs in. Note: season is a single year that the majority of the
   * season occurs in
   */
  season?: number;
  /** The year in which the season started */
  startYear?: number;
  /** The year in which the season ended */
  endYear?: number;
  /** The description of this season for display purposes (e.g. 2024-25; 2025-26; etc) */
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

export const season3Schema: Schema<Season3> = s.object<Season3>({
  season: s.optional(s.int()),
  startYear: s.optional(s.int()),
  endYear: s.optional(s.int()),
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
