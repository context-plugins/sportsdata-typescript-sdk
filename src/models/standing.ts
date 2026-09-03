import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing = {
  seasonType?: number;
  season?: number;
  conference?: string | null;
  division?: string | null;
  team?: string | null;
  name?: string | null;
  wins?: number;
  losses?: number;
  ties?: number;
  percentage?: number;
  pointsFor?: number;
  pointsAgainst?: number;
  netPoints?: number;
  touchdowns?: number | null;
  divisionWins?: number;
  divisionLosses?: number;
  conferenceWins?: number;
  conferenceLosses?: number;
  teamId?: number;
  divisionTies?: number;
  conferenceTies?: number;
  globalTeamId?: number | null;
  divisionRank?: number;
  conferenceRank?: number;
  homeWins?: number | null;
  homeLosses?: number | null;
  homeTies?: number | null;
  awayWins?: number | null;
  awayLosses?: number | null;
  awayTies?: number | null;
  streak?: number | null;
  clinchedDivision?: boolean | null;
  clinchedWildCard?: boolean | null;
  clinchedBye?: boolean | null;
  eliminatedFromPlayoffContention?: boolean | null;
};

export const standingSchema: Schema<Standing> = s.object<Standing>({
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  wins: s.optional(s.number()),
  losses: s.optional(s.number()),
  ties: s.optional(s.number()),
  percentage: s.optional(s.number()),
  pointsFor: s.optional(s.number()),
  pointsAgainst: s.optional(s.number()),
  netPoints: s.optional(s.number()),
  touchdowns: s.optionalNullable(s.number()),
  divisionWins: s.optional(s.number()),
  divisionLosses: s.optional(s.number()),
  conferenceWins: s.optional(s.number()),
  conferenceLosses: s.optional(s.number()),
  teamId: s.optional(s.number()),
  divisionTies: s.optional(s.number()),
  conferenceTies: s.optional(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  divisionRank: s.optional(s.number()),
  conferenceRank: s.optional(s.number()),
  homeWins: s.optionalNullable(s.number()),
  homeLosses: s.optionalNullable(s.number()),
  homeTies: s.optionalNullable(s.number()),
  awayWins: s.optionalNullable(s.number()),
  awayLosses: s.optionalNullable(s.number()),
  awayTies: s.optionalNullable(s.number()),
  streak: s.optionalNullable(s.number()),
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
