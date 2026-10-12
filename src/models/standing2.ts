import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing2 = {
  /** The MLB season for which these totals apply */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar)
   */
  seasonType?: number;
  /** The team's unique TeamID as assigned by SportsDataIO */
  teamId?: number;
  /** Abbreviation of the team (e.g. LAD; PHI; BOS; CHC; etc.) */
  key?: string | null;
  /** The city/location of the team (e.g. Los Angeles; Philadelphia; Boston; Chicago; etc.) */
  city?: string | null;
  /** Team's full name (city and mascot) */
  name?: string | null;
  /** The league of the team (possible values: AL; NL) */
  league?: string | null;
  /** The division of the team (e.g. East, Central, West) */
  division?: string | null;
  /** The total number of wins by a team in the season */
  wins?: number | null;
  /** Total number of losses by the team in the season */
  losses?: number | null;
  /** Winning percentage of a team */
  percentage?: number | null;
  /** Total number of division wins in the season */
  divisionWins?: number | null;
  /** Total number of division losses in a season */
  divisionLosses?: number | null;
  /** Number of games behind the first place team */
  gamesBehind?: number | null;
  /** Total number of wins in the last ten games */
  lastTenGamesWins?: number | null;
  /** Total number of losses in the last ten games */
  lastTenGamesLosses?: number | null;
  /** Current streak the team is on (e.g. Win 3, Lost 3) */
  streak?: string | null;
  /** The ranking in the league */
  leagueRank?: number | null;
  /** The ranking in the division (e.g. 1, 2, 3, 4, 5) */
  divisionRank?: number | null;
  /** The rank of the team in terms of Wild Card standings only */
  wildCardRank?: number | null;
  /** The number of games behind a team is of the final Wild Card spot */
  wildCardGamesBehind?: number | null;
  /** Total number of home wins in the season */
  homeWins?: number | null;
  /** Total number of home losses in the season */
  homeLosses?: number | null;
  /** Total number of away wins in the season */
  awayWins?: number | null;
  /** Total number of away losses in the season */
  awayLosses?: number | null;
  /** Total number of wins in daytime games */
  dayWins?: number | null;
  /** Total number of losses in daytime games */
  dayLosses?: number | null;
  /** Total number of wins in nighttime games */
  nightWins?: number | null;
  /** Total number of losses in nighttime games */
  nightLosses?: number | null;
  /** Total runs scored by the team in the season */
  runsScored?: number | null;
  /** Total number of runs scored by the opponents of a specified team */
  runsAgainst?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** Returns TRUE if team has clinched the best record in their respective league; FALSE if not */
  clinchedBestLeagueRecord?: boolean | null;
  /** Returns TRUE if team has clinched Wild Card spot; FALSE if not */
  clinchedWildCard?: boolean | null;
  /** Returns TRUE if team has clinched their division; FALSE if not */
  clinchedDivision?: boolean | null;
  /** Returns TRUE if team has been eliminated from playoff contention; FALSE if not */
  eliminatedFromPlayoffContention?: boolean | null;
};

export const standing2Schema: Schema<Standing2> = s.object<Standing2>({
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  teamId: s.optional(s.int()),
  key: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  league: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  percentage: s.optionalNullable(s.float64()),
  divisionWins: s.optionalNullable(s.int()),
  divisionLosses: s.optionalNullable(s.int()),
  gamesBehind: s.optionalNullable(s.float64()),
  lastTenGamesWins: s.optionalNullable(s.int()),
  lastTenGamesLosses: s.optionalNullable(s.int()),
  streak: s.optionalNullable(s.string()),
  leagueRank: s.optionalNullable(s.int()),
  divisionRank: s.optionalNullable(s.int()),
  wildCardRank: s.optionalNullable(s.int()),
  wildCardGamesBehind: s.optionalNullable(s.float64()),
  homeWins: s.optionalNullable(s.int()),
  homeLosses: s.optionalNullable(s.int()),
  awayWins: s.optionalNullable(s.int()),
  awayLosses: s.optionalNullable(s.int()),
  dayWins: s.optionalNullable(s.int()),
  dayLosses: s.optionalNullable(s.int()),
  nightWins: s.optionalNullable(s.int()),
  nightLosses: s.optionalNullable(s.int()),
  runsScored: s.optionalNullable(s.int()),
  runsAgainst: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  clinchedBestLeagueRecord: s.optionalNullable(s.boolean()),
  clinchedWildCard: s.optionalNullable(s.boolean()),
  clinchedDivision: s.optionalNullable(s.boolean()),
  eliminatedFromPlayoffContention: s.optionalNullable(s.boolean()),
  _keysMap: {
    season: "Season",
    seasonType: "SeasonType",
    teamId: "TeamID",
    key: "Key",
    city: "City",
    name: "Name",
    league: "League",
    division: "Division",
    wins: "Wins",
    losses: "Losses",
    percentage: "Percentage",
    divisionWins: "DivisionWins",
    divisionLosses: "DivisionLosses",
    gamesBehind: "GamesBehind",
    lastTenGamesWins: "LastTenGamesWins",
    lastTenGamesLosses: "LastTenGamesLosses",
    streak: "Streak",
    leagueRank: "LeagueRank",
    divisionRank: "DivisionRank",
    wildCardRank: "WildCardRank",
    wildCardGamesBehind: "WildCardGamesBehind",
    homeWins: "HomeWins",
    homeLosses: "HomeLosses",
    awayWins: "AwayWins",
    awayLosses: "AwayLosses",
    dayWins: "DayWins",
    dayLosses: "DayLosses",
    nightWins: "NightWins",
    nightLosses: "NightLosses",
    runsScored: "RunsScored",
    runsAgainst: "RunsAgainst",
    globalTeamId: "GlobalTeamID",
    clinchedBestLeagueRecord: "ClinchedBestLeagueRecord",
    clinchedWildCard: "ClinchedWildCard",
    clinchedDivision: "ClinchedDivision",
    eliminatedFromPlayoffContention: "EliminatedFromPlayoffContention",
  },
});
