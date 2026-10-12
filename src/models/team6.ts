import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team6 = {
  /** The unique ID of the team */
  teamId?: number;
  /**
   * A unique abbreviation of the team (e.g. LA; PHX; NY; etc.). Note: Due to being selected for
   * uniqueness; these are not always matching broadcaster abbreviations. For that use case; use
   * ShortDisplayName.
   */
  key?: string | null;
  /** Whether or not this team is active. Note: Active = True & Inactive = False */
  active?: boolean;
  /** The city in which the team is located in (e.g. Los Angeles, Phoenix, New York, etc.) */
  city?: string | null;
  /** The mascot of the team (e.g. Sparks, Suns, Dream, etc.) */
  name?: string | null;
  /** The conference of a given team (possible values: Eastern; Western) */
  conference?: string | null;
  /**
   * The link to the team's logo hosted on Wikipedia. (This is not licensed for public or commercial
   * use)
   */
  wikipediaLogoUrl?: string | null;
  /**
   * A globally unique ID for the team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number;
};

export const team6Schema: Schema<Team6> = s.object<Team6>({
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.int()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    city: "City",
    name: "Name",
    conference: "Conference",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    globalTeamId: "GlobalTeamID",
  },
});
