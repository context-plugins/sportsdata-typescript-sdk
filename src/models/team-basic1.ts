import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamBasic1 = {
  /** The unique ID of the team */
  teamId?: number;
  /**
   * A unique abbreviation of the team (e.g. OAE; TAS; UAD; KAF; etc.) These are not recommended for
   * front end use as they may not match common usage; see the ShortDisplayName instead.
   */
  key?: string | null;
  /** Whether or not this team is active */
  active?: boolean;
  /**
   * The name of the school as used in college sports (e.g. SMU; South Florida; Stony Brook; UCLA;
   * etc.)
   */
  school?: string | null;
  /** The full name of the stadium */
  name?: string | null;
  /** The unique ID of the stadium that the team plays its home games at */
  stadiumId?: number;
  /**
   * A globally unique ID for the team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number;
  /** The url of the team logo image */
  teamLogoUrl?: string | null;
  /** The unique ID of the team's conference */
  conferenceId?: number | null;
  /** The name of the team's parent conference (e.g. SEC; Big Ten; etc) */
  conference?: string | null;
  /**
   * The shortened name of the team - recommended for front end applications. May not be unique; if
   * you need a 100% unique letter identifier see the Key field in this table.
   */
  shortDisplayName?: string | null;
  /** The team's primary color. (This is not licensed for public or commercial use) */
  primaryColor?: string | null;
  /** The team's secondary color. (This is not licensed for public or commercial use) */
  secondaryColor?: string | null;
  /** The team's tertiary color. (This is not licensed for public or commercial use) */
  tertiaryColor?: string | null;
  /** The team's quaternary color. (This is not licensed for public or commercial use) */
  quaternaryColor?: string | null;
};

export const teamBasic1Schema: Schema<TeamBasic1> = s.object<TeamBasic1>({
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  school: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  stadiumId: s.optional(s.int()),
  globalTeamId: s.optional(s.int()),
  teamLogoUrl: s.optionalNullable(s.string()),
  conferenceId: s.optionalNullable(s.int()),
  conference: s.optionalNullable(s.string()),
  shortDisplayName: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    school: "School",
    name: "Name",
    stadiumId: "StadiumID",
    globalTeamId: "GlobalTeamID",
    teamLogoUrl: "TeamLogoUrl",
    conferenceId: "ConferenceID",
    conference: "Conference",
    shortDisplayName: "ShortDisplayName",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
  },
});
