import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team1 = {
  /** The unique ID of the team */
  teamId?: number;
  /** Abbreviation of the team (e.g. LAL; PHI; BOS; CHI; etc.) */
  key?: string | null;
  /** Whether or not this team is active */
  active?: boolean;
  /** The city/location of the team (e.g. Los Angeles, Philadelphia, Boston, Chicago, etc.) */
  city?: string | null;
  /** The mascot of the team (e.g. Lakers, 76ers, Celtics, Bulls, etc.) */
  name?: string | null;
  /** This is no longer used (deprecated) */
  leagueId?: number | null;
  /** The unique ID of the team's current home stadium */
  stadiumId?: number | null;
  /** The conference of the team (possible values: Eastern, Western) */
  conference?: string | null;
  /** The division of the team (e.g. Atlantic, Central, Southeast, etc) */
  division?: string | null;
  /** The team's first color. (This is not licensed for public or commercial use) */
  primaryColor?: string | null;
  /** The team's second color. (This is not licensed for public or commercial use) */
  secondaryColor?: string | null;
  /** The team's third color. (This is not licensed for public or commercial use) */
  tertiaryColor?: string | null;
  /** The team's fourth color. (This is not licensed for public or commercial use) */
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
  /** The team's ID on NBAdotCom */
  nbaDotComTeamId?: number | null;
  /** The current head coach of the team */
  headCoach?: string | null;
};

export const team1Schema: Schema<Team1> = s.object<Team1>({
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  leagueId: s.optionalNullable(s.int()),
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
  nbaDotComTeamId: s.optionalNullable(s.int()),
  headCoach: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    city: "City",
    name: "Name",
    leagueId: "LeagueID",
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
    nbaDotComTeamId: "NbaDotComTeamID",
    headCoach: "HeadCoach",
  },
});
