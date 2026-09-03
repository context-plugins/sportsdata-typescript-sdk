import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing1 = {
  season?: number;
  seasonType?: number;
  teamId?: number;
  key?: string | null;
  city?: string | null;
  name?: string | null;
  conference?: string | null;
  division?: string | null;
  wins?: number | null;
  losses?: number | null;
  percentage?: number | null;
  conferenceWins?: number | null;
  conferenceLosses?: number | null;
  divisionWins?: number | null;
  divisionLosses?: number | null;
  homeWins?: number | null;
  homeLosses?: number | null;
  awayWins?: number | null;
  awayLosses?: number | null;
  lastTenWins?: number | null;
  lastTenLosses?: number | null;
  pointsPerGameFor?: number | null;
  pointsPerGameAgainst?: number | null;
  streak?: number | null;
  gamesBack?: number | null;
  streakDescription?: string | null;
  globalTeamId?: number | null;
  conferenceRank?: number | null;
  divisionRank?: number | null;
  clinchedDivision?: boolean | null;
  clinchedPlayoffBerth?: boolean | null;
  wonPlayInTournament?: boolean | null;
  clinchedPlayInTournamentBerth?: boolean | null;
  eliminatedFromPlayoffContention?: boolean | null;
  clinchedConference?: boolean | null;
};

export const standing1Schema: Schema<Standing1> = s.object<Standing1>({
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  percentage: s.optionalNullable(s.number()),
  conferenceWins: s.optionalNullable(s.number()),
  conferenceLosses: s.optionalNullable(s.number()),
  divisionWins: s.optionalNullable(s.number()),
  divisionLosses: s.optionalNullable(s.number()),
  homeWins: s.optionalNullable(s.number()),
  homeLosses: s.optionalNullable(s.number()),
  awayWins: s.optionalNullable(s.number()),
  awayLosses: s.optionalNullable(s.number()),
  lastTenWins: s.optionalNullable(s.number()),
  lastTenLosses: s.optionalNullable(s.number()),
  pointsPerGameFor: s.optionalNullable(s.number()),
  pointsPerGameAgainst: s.optionalNullable(s.number()),
  streak: s.optionalNullable(s.number()),
  gamesBack: s.optionalNullable(s.number()),
  streakDescription: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  conferenceRank: s.optionalNullable(s.number()),
  divisionRank: s.optionalNullable(s.number()),
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
