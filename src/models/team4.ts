import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team4 = {
  /** The unique ID of the team */
  teamId?: number;
  /**
   * A unique abbreviation of the team (e.g. OAE; TAS; UAD; KAF; etc.) Note: Due to being selected
   * for uniqueness; these are not always a match with broadcaster abbreviations. For that use case;
   * use ShortDisplayName
   */
  key?: string | null;
  /** Whether or not this team is active */
  active?: boolean;
  /**
   * The name of the school as used in college sports (e.g. SMU, South Florida, Stony Brook, UCLA,
   * etc.)
   */
  school?: string | null;
  /** The mascot of the team (e.g. Sooners, Red Raiders, Trojans, Wildcats, etc.) */
  name?: string | null;
  /** The unique ID of the stadium that the team plays its home games at */
  stadiumId?: number;
  /** The rank of the team assigned to them by the Associated Press (AP) */
  apRank?: number | null;
  /** Total number of wins by the team */
  wins?: number | null;
  /** The total number of losses by the team in the current season */
  losses?: number | null;
  /** The total number of conference wins by the team */
  conferenceWins?: number | null;
  /** The total number of conference losses by the team */
  conferenceLosses?: number | null;
  /**
   * A globally unique ID for the team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number;
  /** The Coaches Rank of the team */
  coachesRank?: number | null;
  /** The CFP Rank of the team */
  playoffRank?: number | null;
  /** The url of the team logo image */
  teamLogoUrl?: string | null;
  /** The unique ID of the team's conference */
  conferenceId?: number | null;
  /** The name of the team's parent conference (e.g. SEC; Big Ten; etc) */
  conference?: string | null;
  /** The shortened name of the team */
  shortDisplayName?: string | null;
  /** The week that the AP Rank/CoachesRank was last updated */
  rankWeek?: number | null;
  /** The season that the AP Rank/CoachesRank was last updated */
  rankSeason?: number | null;
  /** The season type that the AP Rank/CoachesRank was last updated */
  rankSeasonType?: number | null;
  /** The team's primary color. (This is not licensed for public or commercial use) */
  primaryColor?: string | null;
  /** The team's secondary color. (This is not licensed for public or commercial use) */
  secondaryColor?: string | null;
  /** The team's tertiary color. (This is not licensed for public or commercial use) */
  tertiaryColor?: string | null;
  /** The team's quaternary color. (This is not licensed for public or commercial use) */
  quaternaryColor?: string | null;
};

export const team4Schema: Schema<Team4> = s.object<Team4>({
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  school: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  stadiumId: s.optional(s.int()),
  apRank: s.optionalNullable(s.int()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  conferenceWins: s.optionalNullable(s.int()),
  conferenceLosses: s.optionalNullable(s.int()),
  globalTeamId: s.optional(s.int()),
  coachesRank: s.optionalNullable(s.int()),
  playoffRank: s.optionalNullable(s.int()),
  teamLogoUrl: s.optionalNullable(s.string()),
  conferenceId: s.optionalNullable(s.int()),
  conference: s.optionalNullable(s.string()),
  shortDisplayName: s.optionalNullable(s.string()),
  rankWeek: s.optionalNullable(s.int()),
  rankSeason: s.optionalNullable(s.int()),
  rankSeasonType: s.optionalNullable(s.int()),
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
    apRank: "ApRank",
    wins: "Wins",
    losses: "Losses",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
    globalTeamId: "GlobalTeamID",
    coachesRank: "CoachesRank",
    playoffRank: "PlayoffRank",
    teamLogoUrl: "TeamLogoUrl",
    conferenceId: "ConferenceID",
    conference: "Conference",
    shortDisplayName: "ShortDisplayName",
    rankWeek: "RankWeek",
    rankSeason: "RankSeason",
    rankSeasonType: "RankSeasonType",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
  },
});
