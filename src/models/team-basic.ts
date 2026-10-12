import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamBasic = {
  /** Abbreviation [Key] of the team (e.g. LAC; PHI; NE; IND; etc.) */
  key?: string | null;
  /** The unique ID of the team */
  teamId?: number;
  /**
   * The auto-generated unique ID of the Team, that avoids collisions with PlayerIDs. This is useful
   * when combining players and fantasy defenses to create fantasy teams.
   */
  playerId?: number;
  /**
   * The city/location of the team (e.g. Minnesota; Philadelphia; New England; Indianapolis; etc.)
   */
  city?: string | null;
  /** The mascot of the team (e.g. Chargers, Eagles, Patriots, Colts, etc.) */
  name?: string | null;
  /** The conference of the team (e.g. AFC or NFC) */
  conference?: string | null;
  /** The division of the team (e.g. East, North, South, West) */
  division?: string | null;
  /** The full name of the team (e.g. New England Patriots) */
  fullName?: string | null;
  /** The unique ID of the team's current home stadium */
  stadiumId?: number | null;
  /** The bye week of the team in the upcoming or current regular season */
  byeWeek?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** The current head coach of the team */
  headCoach?: string | null;
  /** The team's first color. (This is not licensed for public or commercial use) */
  primaryColor?: string | null;
  /** The team's second color. (This is not licensed for public or commercial use) */
  secondaryColor?: string | null;
  /** The team's third color. (This is not licensed for public or commercial use) */
  tertiaryColor?: string | null;
  /** The team's fourth color. (This is not licensed for public or commercial use) */
  quaternaryColor?: string | null;
  /**
   * The link to the team's logo hosted on Wikipedia (This is not licensed for public or commercial
   * use)
   */
  wikipediaLogoUrl?: string | null;
  /**
   * The link to the team's wordmark logo hosted on Wikipedia (This is not licensed for public or
   * commercial use)
   */
  wikipediaWordMarkUrl?: string | null;
  /**
   * The current offensive coordinator of the team. Note: field will be NULL if team doesn't have an
   * OFF coordinator
   */
  offensiveCoordinator?: string | null;
  /**
   * The current defensive coordinator of the team. Note: field will be NULL if team doesn't have an
   * DEFF coordinator
   */
  defensiveCoordinator?: string | null;
  /**
   * The current special teams coordinator of the team. Note: field will be NULL if team doesn't
   * have an ST coordinator
   */
  specialTeamsCoach?: string | null;
  /** The offensive scheme this team runs (PRO, 2TE, 3WR). This is decided at our discretion. */
  offensiveScheme?: string | null;
  /** The current defensive scheme this team runs (3-4, 4-3) */
  defensiveScheme?: string | null;
};

export const teamBasicSchema: Schema<TeamBasic> = s.object<TeamBasic>({
  key: s.optionalNullable(s.string()),
  teamId: s.optional(s.int()),
  playerId: s.optional(s.int()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  fullName: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.int()),
  byeWeek: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  headCoach: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  offensiveCoordinator: s.optionalNullable(s.string()),
  defensiveCoordinator: s.optionalNullable(s.string()),
  specialTeamsCoach: s.optionalNullable(s.string()),
  offensiveScheme: s.optionalNullable(s.string()),
  defensiveScheme: s.optionalNullable(s.string()),
  _keysMap: {
    key: "Key",
    teamId: "TeamID",
    playerId: "PlayerID",
    city: "City",
    name: "Name",
    conference: "Conference",
    division: "Division",
    fullName: "FullName",
    stadiumId: "StadiumID",
    byeWeek: "ByeWeek",
    globalTeamId: "GlobalTeamID",
    headCoach: "HeadCoach",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
    wikipediaLogoUrl: "WikipediaLogoURL",
    wikipediaWordMarkUrl: "WikipediaWordMarkURL",
    offensiveCoordinator: "OffensiveCoordinator",
    defensiveCoordinator: "DefensiveCoordinator",
    specialTeamsCoach: "SpecialTeamsCoach",
    offensiveScheme: "OffensiveScheme",
    defensiveScheme: "DefensiveScheme",
  },
});
