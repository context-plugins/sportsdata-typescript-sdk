import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Bye = {
  /** The NFL season during which this bye week occurs. */
  season?: number;
  /**
   * The NFL week during this bye week (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to
   * 4). Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /** The abbreviation [Key] of the team who is on a bye */
  team?: string | null;
};

export const byeSchema: Schema<Bye> = s.object<Bye>({
  season: s.optional(s.int()),
  week: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  _keysMap: {
    season: "Season",
    week: "Week",
    team: "Team",
  },
});
