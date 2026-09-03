import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team4 = {
  teamId?: number;
  key?: string | null;
  active?: boolean;
  school?: string | null;
  name?: string | null;
  stadiumId?: number;
  apRank?: number | null;
  wins?: number | null;
  losses?: number | null;
  conferenceWins?: number | null;
  conferenceLosses?: number | null;
  globalTeamId?: number;
  coachesRank?: number | null;
  playoffRank?: number | null;
  teamLogoUrl?: string | null;
  conferenceId?: number | null;
  conference?: string | null;
  shortDisplayName?: string | null;
  rankWeek?: number | null;
  rankSeason?: number | null;
  rankSeasonType?: number | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  tertiaryColor?: string | null;
  quaternaryColor?: string | null;
};

export const team4Schema: Schema<Team4> = s.object<Team4>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  school: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  stadiumId: s.optional(s.number()),
  apRank: s.optionalNullable(s.number()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  conferenceWins: s.optionalNullable(s.number()),
  conferenceLosses: s.optionalNullable(s.number()),
  globalTeamId: s.optional(s.number()),
  coachesRank: s.optionalNullable(s.number()),
  playoffRank: s.optionalNullable(s.number()),
  teamLogoUrl: s.optionalNullable(s.string()),
  conferenceId: s.optionalNullable(s.number()),
  conference: s.optionalNullable(s.string()),
  shortDisplayName: s.optionalNullable(s.string()),
  rankWeek: s.optionalNullable(s.number()),
  rankSeason: s.optionalNullable(s.number()),
  rankSeasonType: s.optionalNullable(s.number()),
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
