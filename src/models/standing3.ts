import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standing3 = {
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
  overtimeLosses?: number | null;
  percentage?: number | null;
  conferenceWins?: number | null;
  conferenceLosses?: number | null;
  divisionWins?: number | null;
  divisionLosses?: number | null;
  shutoutWins?: number | null;
  conferenceRank?: number | null;
  divisionRank?: number | null;
  globalTeamId?: number | null;
  clinchedDivision?: boolean | null;
  clinchedPlayoffBerth?: boolean | null;
  clinchedBestRecordInConference?: boolean | null;
  clinchedPresidentsTrophy?: boolean | null;
  eliminatedFromPlayoffContention?: boolean | null;
};

export const standing3Schema: Schema<Standing3> = s.object<Standing3>({
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
  overtimeLosses: s.optionalNullable(s.number()),
  percentage: s.optionalNullable(s.number()),
  conferenceWins: s.optionalNullable(s.number()),
  conferenceLosses: s.optionalNullable(s.number()),
  divisionWins: s.optionalNullable(s.number()),
  divisionLosses: s.optionalNullable(s.number()),
  shutoutWins: s.optionalNullable(s.number()),
  conferenceRank: s.optionalNullable(s.number()),
  divisionRank: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
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
