import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing2 = {
  season?: number;
  seasonType?: number;
  teamId?: number;
  key?: string | null;
  city?: string | null;
  name?: string | null;
  league?: string | null;
  division?: string | null;
  wins?: number | null;
  losses?: number | null;
  percentage?: number | null;
  divisionWins?: number | null;
  divisionLosses?: number | null;
  gamesBehind?: number | null;
  lastTenGamesWins?: number | null;
  lastTenGamesLosses?: number | null;
  streak?: string | null;
  leagueRank?: number | null;
  divisionRank?: number | null;
  wildCardRank?: number | null;
  wildCardGamesBehind?: number | null;
  homeWins?: number | null;
  homeLosses?: number | null;
  awayWins?: number | null;
  awayLosses?: number | null;
  dayWins?: number | null;
  dayLosses?: number | null;
  nightWins?: number | null;
  nightLosses?: number | null;
  runsScored?: number | null;
  runsAgainst?: number | null;
  globalTeamId?: number | null;
  clinchedBestLeagueRecord?: boolean | null;
  clinchedWildCard?: boolean | null;
  clinchedDivision?: boolean | null;
  eliminatedFromPlayoffContention?: boolean | null;
};

export const standing2Schema: Schema<Standing2> = s.object<Standing2>({
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  league: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  percentage: s.optionalNullable(s.number()),
  divisionWins: s.optionalNullable(s.number()),
  divisionLosses: s.optionalNullable(s.number()),
  gamesBehind: s.optionalNullable(s.number()),
  lastTenGamesWins: s.optionalNullable(s.number()),
  lastTenGamesLosses: s.optionalNullable(s.number()),
  streak: s.optionalNullable(s.string()),
  leagueRank: s.optionalNullable(s.number()),
  divisionRank: s.optionalNullable(s.number()),
  wildCardRank: s.optionalNullable(s.number()),
  wildCardGamesBehind: s.optionalNullable(s.number()),
  homeWins: s.optionalNullable(s.number()),
  homeLosses: s.optionalNullable(s.number()),
  awayWins: s.optionalNullable(s.number()),
  awayLosses: s.optionalNullable(s.number()),
  dayWins: s.optionalNullable(s.number()),
  dayLosses: s.optionalNullable(s.number()),
  nightWins: s.optionalNullable(s.number()),
  nightLosses: s.optionalNullable(s.number()),
  runsScored: s.optionalNullable(s.number()),
  runsAgainst: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
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
