import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing3 = {
  /** The NHL regular season for which these totals apply */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number;
  /** The unique ID of the team */
  teamId?: number;
  /** The abbreviation [Key] of the team associated with this market (Ex. BOS, EDM, LAK) */
  key?: string | null;
  /** The city/location of the team (e.g. Los Angeles; Philadelphia; Boston; Chicago; etc.) */
  city?: string | null;
  /** The team's full name (ex. Minnesota Wild; New York Islanders) */
  name?: string | null;
  /** The conference of the team (possible values: Eastern; Western) */
  conference?: string | null;
  /** The division of the team (e.g. Atlantic; Metropolitan; Central; or Pacific) */
  division?: string | null;
  /** Total number of wins by the team in the season */
  wins?: number | null;
  /** Total losses for a team in the regular season */
  losses?: number | null;
  /** Total overtime losses by the team in the season */
  overtimeLosses?: number | null;
  /** The team's winning percentage */
  percentage?: number | null;
  /** Total number of conference wins for a team */
  conferenceWins?: number | null;
  /** Total number of conference losses for a team */
  conferenceLosses?: number | null;
  /** Total number of division wins by the team */
  divisionWins?: number | null;
  /** Total number of division losses by the team */
  divisionLosses?: number | null;
  /** Total regular season shutout wins by the team */
  shutoutWins?: number | null;
  /** Team rank at the conference level */
  conferenceRank?: number | null;
  /** Team rank at the division level */
  divisionRank?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** Returns TRUE if team has clinched their division; FALSE if not */
  clinchedDivision?: boolean | null;
  /** Returns TRUE if team has clinched a playoff spot; FALSE if not */
  clinchedPlayoffBerth?: boolean | null;
  /**
   * Returns TRUE if team has clinched the best record in their respective conference; FALSE if not
   */
  clinchedBestRecordInConference?: boolean | null;
  /** Returns TRUE if team has clinched best record in NHL (President's Trophy); FALSE if not */
  clinchedPresidentsTrophy?: boolean | null;
  /** Returns TRUE if team has been eliminated from playoff contention; FALSE if not */
  eliminatedFromPlayoffContention?: boolean | null;
};

export const standing3Schema: Schema<Standing3> = s.object<Standing3>({
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  overtimeLosses: s.optionalNullable(s.int()),
  percentage: s.optionalNullable(s.float64()),
  conferenceWins: s.optionalNullable(s.int()),
  conferenceLosses: s.optionalNullable(s.int()),
  divisionWins: s.optionalNullable(s.int()),
  divisionLosses: s.optionalNullable(s.int()),
  shutoutWins: s.optionalNullable(s.int()),
  conferenceRank: s.optionalNullable(s.int()),
  divisionRank: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  clinchedDivision: s.optionalNullable(s.boolean()),
  clinchedPlayoffBerth: s.optionalNullable(s.boolean()),
  clinchedBestRecordInConference: s.optionalNullable(s.boolean()),
  clinchedPresidentsTrophy: s.optionalNullable(s.boolean()),
  eliminatedFromPlayoffContention: s.optionalNullable(s.boolean()),
  _keysMap: {
    season: "Season",
    seasonType: "SeasonType",
    teamId: "TeamID",
    key: "Key",
    city: "City",
    name: "Name",
    conference: "Conference",
    division: "Division",
    wins: "Wins",
    losses: "Losses",
    overtimeLosses: "OvertimeLosses",
    percentage: "Percentage",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
    divisionWins: "DivisionWins",
    divisionLosses: "DivisionLosses",
    shutoutWins: "ShutoutWins",
    conferenceRank: "ConferenceRank",
    divisionRank: "DivisionRank",
    globalTeamId: "GlobalTeamID",
    clinchedDivision: "ClinchedDivision",
    clinchedPlayoffBerth: "ClinchedPlayoffBerth",
    clinchedBestRecordInConference: "ClinchedBestRecordInConference",
    clinchedPresidentsTrophy: "ClinchedPresidentsTrophy",
    eliminatedFromPlayoffContention: "EliminatedFromPlayoffContention",
  },
});
