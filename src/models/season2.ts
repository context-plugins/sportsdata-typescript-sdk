import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Season2 = {
  /** The NCAA football season */
  season?: number;
  /** The year in which the season started */
  startYear?: number;
  /** The year in which the season ended */
  endYear?: number;
  /** The description of this season for display purposes */
  description?: string | null;
  /** The string to pass into subsequent API calls in the season parameter */
  apiSeason?: string | null;
  /** The current week which can be passed into subsequent API calls in the week parameter */
  apiWeek?: number | null;
};

export const season2Schema: Schema<Season2> = s.object<Season2>({
  season: s.optional(s.int()),
  startYear: s.optional(s.int()),
  endYear: s.optional(s.int()),
  description: s.optionalNullable(s.string()),
  apiSeason: s.optionalNullable(s.string()),
  apiWeek: s.optionalNullable(s.int()),
  _keysMap: {
    season: "Season",
    startYear: "StartYear",
    endYear: "EndYear",
    description: "Description",
    apiSeason: "ApiSeason",
    apiWeek: "ApiWeek",
  },
});
