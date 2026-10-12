import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team2 = {
  /** The team's unique TeamID as assigned by SportsDataIO */
  teamId?: number;
  /** Abbreviation of the team (e.g. LAD, PHI, BOS, CHC, etc.) */
  key?: string | null;
  /** Whether or not this team is active */
  active?: boolean;
  /** The city/location of the team (e.g. Los Angeles, Philadelphia, Boston, Chicago, etc.) */
  city?: string | null;
  /** The mascot of the team (e.g. Dodgers, Phillies, Red Sox, Cubs, etc.) */
  name?: string | null;
  /** The unique ID of the team's current home stadium */
  stadiumId?: number | null;
  /** The league of the team (possible values: AL, NL) */
  league?: string | null;
  /** The division of the team (e.g. East; Central; West) */
  division?: string | null;
  /** The team's primary color. (This is not licensed for public or commercial use) */
  primaryColor?: string | null;
  /** The team's secondary color. (This is not licensed for public or commercial use) */
  secondaryColor?: string | null;
  /** The team's tertiary color. (This is not licensed for public or commercial use) */
  tertiaryColor?: string | null;
  /** The team's quaternary color. (This is not licensed for public or commercial use) */
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
   * sports/leagues
   */
  globalTeamId?: number;
  /** The current head coach (manager) of the team */
  headCoach?: string | null;
  /**
   * The current hitting coach of the team. Note: some teams may have multiple or no hitting coaches
   */
  hittingCoach?: string | null;
  /**
   * The current pitching coach of the team. Note: some teams may have multiple or no pitching
   * coaches
   */
  pitchingCoach?: string | null;
};

export const team2Schema: Schema<Team2> = s.object<Team2>({
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.int()),
  league: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.int()),
  headCoach: s.optionalNullable(s.string()),
  hittingCoach: s.optionalNullable(s.string()),
  pitchingCoach: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    city: "City",
    name: "Name",
    stadiumId: "StadiumID",
    league: "League",
    division: "Division",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    wikipediaWordMarkUrl: "WikipediaWordMarkUrl",
    globalTeamId: "GlobalTeamID",
    headCoach: "HeadCoach",
    hittingCoach: "HittingCoach",
    pitchingCoach: "PitchingCoach",
  },
});
