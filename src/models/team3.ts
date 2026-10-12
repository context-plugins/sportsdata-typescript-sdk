import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team3 = {
  /** The unique ID of the team */
  teamId?: number;
  /** Abbreviation of the team (e.g. LA, PHI, BOS, CHI, etc.) */
  key?: string | null;
  /** Whether or not this team is active */
  active?: boolean;
  /** The city/location of the team (e.g. Los Angeles, Philadelphia, Boston, Chicago, etc.) */
  city?: string | null;
  /** The mascot of the team (e.g. Kings, Flyers, Bruins, Blackhawks, etc.) */
  name?: string | null;
  /** The unique ID of the team's current home arena */
  stadiumId?: number | null;
  /** The conference of the team (possible values: Eastern, Western) */
  conference?: string | null;
  /** The division of the team (e.g. Atlantic; Metropolitan; Central; or Pacific) */
  division?: string | null;
  /** The team's first color (This is not licensed for public or commercial use) */
  primaryColor?: string | null;
  /** The team's second color (This is not licensed for public or commercial use) */
  secondaryColor?: string | null;
  /** The team's third color (This is not licensed for public or commercial use) */
  tertiaryColor?: string | null;
  /** The team's fourth color (This is not licensed for public or commercial use) */
  quaternaryColor?: string | null;
  /**
   * The link to the team's logo hosted on Wikipedia. (This is not licensed for public or commercial
   * use)
   */
  wikipediaLogoUrl?: string | null;
  /**
   * The link to the team's wordmark logo hosted on Wikipedia. (This is not licensed for public or
   * commercial use)
   */
  wikipediaWordMarkUrl?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number;
  /** The current head coach of the team */
  headCoach?: string | null;
};

export const team3Schema: Schema<Team3> = s.object<Team3>({
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.int()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.int()),
  headCoach: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    city: "City",
    name: "Name",
    stadiumId: "StadiumID",
    conference: "Conference",
    division: "Division",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    wikipediaWordMarkUrl: "WikipediaWordMarkUrl",
    globalTeamId: "GlobalTeamID",
    headCoach: "HeadCoach",
  },
});
