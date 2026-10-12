import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team7 = {
  /** The unique ID of the team */
  teamId?: number;
  /**
   * A unique abbreviation of the team (e.g. OKL; TXTECH; USC; UK; etc.). Note: Due to being
   * selected for uniqueness; these are not always matching broadcaster abbreviations. For that use
   * case; use ShortDisplayName
   */
  key?: string | null;
  /** Indicates whether or not this team is active */
  active?: boolean;
  /**
   * The name of the team as used in college sports (e.g. SMU; South Florida; Stony Brook; UCLA;
   * etc.)
   */
  school?: string | null;
  /** The mascot of the team (e.g. Sooners, Red Raiders, Trojans, Wildcats, etc.) */
  name?: string | null;
  /** The AP Rank of the team (1-25) */
  apRank?: number | null;
  /** The total number of wins by the team */
  wins?: number | null;
  /** The total number of losses by the team */
  losses?: number | null;
  /** The total number of conference wins by the team */
  conferenceWins?: number | null;
  /** The total number of conference losses by the team */
  conferenceLosses?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number;
  /** The ID of the team's conference */
  conferenceId?: number | null;
  /**
   * The name of the team's conference (e.g. American Conference; Big Ten Conference; Conference
   * USA)
   */
  conference?: string | null;
  /** The URL of the team logo image */
  teamLogoUrl?: string | null;
  /**
   * A abbreviation of the team as seen on most broadcasts. Note: This field could have the same
   * name for multiple teams. If a completely unique name is need use [Key]
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

export const team7Schema: Schema<Team7> = s.object<Team7>({
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  school: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  apRank: s.optionalNullable(s.int()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  conferenceWins: s.optionalNullable(s.int()),
  conferenceLosses: s.optionalNullable(s.int()),
  globalTeamId: s.optional(s.int()),
  conferenceId: s.optionalNullable(s.int()),
  conference: s.optionalNullable(s.string()),
  teamLogoUrl: s.optionalNullable(s.string()),
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
    apRank: "ApRank",
    wins: "Wins",
    losses: "Losses",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
    globalTeamId: "GlobalTeamID",
    conferenceId: "ConferenceID",
    conference: "Conference",
    teamLogoUrl: "TeamLogoUrl",
    shortDisplayName: "ShortDisplayName",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
  },
});
