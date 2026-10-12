import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing = {
  /**
   * The type of season that this game corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star).
   */
  seasonType?: number;
  /** The NFL season for which these totals apply */
  season?: number;
  /** The conference of the team (e.g. AFC or NFC) */
  conference?: string | null;
  /** The division of the team (e.g. East; North; South; West) */
  division?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The full name of the team */
  name?: string | null;
  /** Total number of wins by the team in the season */
  wins?: number;
  /** Regular season losses by the team */
  losses?: number;
  /** Total ties by the team */
  ties?: number;
  /** The winning percentage of the team in the season */
  percentage?: number;
  /** Total points scored by the team in the season */
  pointsFor?: number;
  /** Total points allowed by the team during the season */
  pointsAgainst?: number;
  /** Difference between PointsFor and PointsAgainst for the team */
  netPoints?: number;
  /** Total touchdowns scored by the team */
  touchdowns?: number | null;
  /** Regular season wins within the division by the team */
  divisionWins?: number;
  /** Regular season losses within the division by the team */
  divisionLosses?: number;
  /** Regular season wins within the conference by the team */
  conferenceWins?: number;
  /** Regular season losses within the conference by the team */
  conferenceLosses?: number;
  /** The unique ID of the team */
  teamId?: number;
  /** Regular season ties within the division by the team */
  divisionTies?: number;
  /** Regular season ties within the conference by the team */
  conferenceTies?: number;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** Team's rank within the division */
  divisionRank?: number;
  /** Team's rank within the conference */
  conferenceRank?: number;
  /** Home wins for the team */
  homeWins?: number | null;
  /** Home losses for the team */
  homeLosses?: number | null;
  /** Home ties for the team */
  homeTies?: number | null;
  /** Away wins for the team */
  awayWins?: number | null;
  /** Away losses for the team */
  awayLosses?: number | null;
  /** Away ties for the team */
  awayTies?: number | null;
  /**
   * The current winning or losing streak for this team (negative numbers represent losing streaks).
   */
  streak?: number | null;
  /** Returns TRUE if team has clinched their division; FALSE if not */
  clinchedDivision?: boolean | null;
  /** Returns TRUE if team has clinched a Wild Card spot; FALSE if not */
  clinchedWildCard?: boolean | null;
  /** Returns TRUE if team has clinched a first-round bye in the playoffs; FALSE if not */
  clinchedBye?: boolean | null;
  /** Returns TRUE if team has been eliminated from playoff contention; FALSE if not */
  eliminatedFromPlayoffContention?: boolean | null;
};

export const standingSchema: Schema<Standing> = s.object<Standing>({
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  wins: s.optional(s.int()),
  losses: s.optional(s.int()),
  ties: s.optional(s.int()),
  percentage: s.optional(s.float64()),
  pointsFor: s.optional(s.int()),
  pointsAgainst: s.optional(s.int()),
  netPoints: s.optional(s.int()),
  touchdowns: s.optionalNullable(s.int()),
  divisionWins: s.optional(s.int()),
  divisionLosses: s.optional(s.int()),
  conferenceWins: s.optional(s.int()),
  conferenceLosses: s.optional(s.int()),
  teamId: s.optional(s.int()),
  divisionTies: s.optional(s.int()),
  conferenceTies: s.optional(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  divisionRank: s.optional(s.int()),
  conferenceRank: s.optional(s.int()),
  homeWins: s.optionalNullable(s.int()),
  homeLosses: s.optionalNullable(s.int()),
  homeTies: s.optionalNullable(s.int()),
  awayWins: s.optionalNullable(s.int()),
  awayLosses: s.optionalNullable(s.int()),
  awayTies: s.optionalNullable(s.int()),
  streak: s.optionalNullable(s.int()),
  clinchedDivision: s.optionalNullable(s.boolean()),
  clinchedWildCard: s.optionalNullable(s.boolean()),
  clinchedBye: s.optionalNullable(s.boolean()),
  eliminatedFromPlayoffContention: s.optionalNullable(s.boolean()),
  _keysMap: {
    seasonType: "SeasonType",
    season: "Season",
    conference: "Conference",
    division: "Division",
    team: "Team",
    name: "Name",
    wins: "Wins",
    losses: "Losses",
    ties: "Ties",
    percentage: "Percentage",
    pointsFor: "PointsFor",
    pointsAgainst: "PointsAgainst",
    netPoints: "NetPoints",
    touchdowns: "Touchdowns",
    divisionWins: "DivisionWins",
    divisionLosses: "DivisionLosses",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
    teamId: "TeamID",
    divisionTies: "DivisionTies",
    conferenceTies: "ConferenceTies",
    globalTeamId: "GlobalTeamID",
    divisionRank: "DivisionRank",
    conferenceRank: "ConferenceRank",
    homeWins: "HomeWins",
    homeLosses: "HomeLosses",
    homeTies: "HomeTies",
    awayWins: "AwayWins",
    awayLosses: "AwayLosses",
    awayTies: "AwayTies",
    streak: "Streak",
    clinchedDivision: "ClinchedDivision",
    clinchedWildCard: "ClinchedWildCard",
    clinchedBye: "ClinchedBye",
    eliminatedFromPlayoffContention: "EliminatedFromPlayoffContention",
  },
});
