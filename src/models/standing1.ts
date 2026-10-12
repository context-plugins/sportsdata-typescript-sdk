import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing1 = {
  /** The NBA season that these totals apply for */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number;
  /** The unique ID for the team */
  teamId?: number;
  /** The key (short team name) of the team */
  key?: string | null;
  /** The city/location of the team (e.g. Los Angeles; Philadelphia; Boston; Chicago; etc.) */
  city?: string | null;
  /** The team's full name */
  name?: string | null;
  /** The conference of the team (can either be Eastern or Western) */
  conference?: string | null;
  /** The division of the team (e.g. Atlantic, Central, Southeast, etc.) */
  division?: string | null;
  /** Total wins by the team */
  wins?: number | null;
  /** Total losses by the team */
  losses?: number | null;
  /** The team's winning percentage */
  percentage?: number | null;
  /** Total conference wins */
  conferenceWins?: number | null;
  /** Total conference losses */
  conferenceLosses?: number | null;
  /** Total number of division wins */
  divisionWins?: number | null;
  /** Total number of division losses */
  divisionLosses?: number | null;
  /** Total number of home game wins */
  homeWins?: number | null;
  /** Total number of home game losses */
  homeLosses?: number | null;
  /** Total number of away game wins */
  awayWins?: number | null;
  /** Total number of away game losses */
  awayLosses?: number | null;
  /** Total wins in the last 10 games */
  lastTenWins?: number | null;
  /** Total losses in the last 10 games */
  lastTenLosses?: number | null;
  /** Average points scored by the team per game */
  pointsPerGameFor?: number | null;
  /** Average points scored against the team per game */
  pointsPerGameAgainst?: number | null;
  /** Total games that the streak (winning or losing) has lasted */
  streak?: number | null;
  /** Total number of games behind the top ranked team for a given team */
  gamesBack?: number | null;
  /** The winning or losing streak written in the form W5 or L1 */
  streakDescription?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** Team rank at the conference level */
  conferenceRank?: number | null;
  /** Team rank at the division level */
  divisionRank?: number | null;
  /** Returns TRUE if a team has clinched their division; FALSE if not */
  clinchedDivision?: boolean | null;
  /** Returns TRUE if a team has clinched a playoff spot; FALSE if not */
  clinchedPlayoffBerth?: boolean | null;
  /** Returns TRUE if a team has clinched a playoff spot through the play-in; FALSE if not */
  wonPlayInTournament?: boolean | null;
  /** Returns TRUE if a team has clinched a spot in the play-in; FALSE if not */
  clinchedPlayInTournamentBerth?: boolean | null;
  /** Returns TRUE if a team has been eliminated from playoff contention; FALSE if not */
  eliminatedFromPlayoffContention?: boolean | null;
  /** Returns TRUE if a team has clinched their conference; FALSE if not */
  clinchedConference?: boolean | null;
};

export const standing1Schema: Schema<Standing1> = s.object<Standing1>({
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
  percentage: s.optionalNullable(s.float64()),
  conferenceWins: s.optionalNullable(s.int()),
  conferenceLosses: s.optionalNullable(s.int()),
  divisionWins: s.optionalNullable(s.int()),
  divisionLosses: s.optionalNullable(s.int()),
  homeWins: s.optionalNullable(s.int()),
  homeLosses: s.optionalNullable(s.int()),
  awayWins: s.optionalNullable(s.int()),
  awayLosses: s.optionalNullable(s.int()),
  lastTenWins: s.optionalNullable(s.int()),
  lastTenLosses: s.optionalNullable(s.int()),
  pointsPerGameFor: s.optionalNullable(s.float64()),
  pointsPerGameAgainst: s.optionalNullable(s.float64()),
  streak: s.optionalNullable(s.int()),
  gamesBack: s.optionalNullable(s.float64()),
  streakDescription: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  conferenceRank: s.optionalNullable(s.int()),
  divisionRank: s.optionalNullable(s.int()),
  clinchedDivision: s.optionalNullable(s.boolean()),
  clinchedPlayoffBerth: s.optionalNullable(s.boolean()),
  wonPlayInTournament: s.optionalNullable(s.boolean()),
  clinchedPlayInTournamentBerth: s.optionalNullable(s.boolean()),
  eliminatedFromPlayoffContention: s.optionalNullable(s.boolean()),
  clinchedConference: s.optionalNullable(s.boolean()),
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
    percentage: "Percentage",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
    divisionWins: "DivisionWins",
    divisionLosses: "DivisionLosses",
    homeWins: "HomeWins",
    homeLosses: "HomeLosses",
    awayWins: "AwayWins",
    awayLosses: "AwayLosses",
    lastTenWins: "LastTenWins",
    lastTenLosses: "LastTenLosses",
    pointsPerGameFor: "PointsPerGameFor",
    pointsPerGameAgainst: "PointsPerGameAgainst",
    streak: "Streak",
    gamesBack: "GamesBack",
    streakDescription: "StreakDescription",
    globalTeamId: "GlobalTeamID",
    conferenceRank: "ConferenceRank",
    divisionRank: "DivisionRank",
    clinchedDivision: "ClinchedDivision",
    clinchedPlayoffBerth: "ClinchedPlayoffBerth",
    wonPlayInTournament: "WonPlayInTournament",
    clinchedPlayInTournamentBerth: "ClinchedPlayInTournamentBerth",
    eliminatedFromPlayoffContention: "EliminatedFromPlayoffContention",
    clinchedConference: "ClinchedConference",
  },
});
