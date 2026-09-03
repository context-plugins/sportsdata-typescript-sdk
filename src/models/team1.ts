import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team1 = {
  teamId?: number;
  key?: string | null;
  active?: boolean;
  city?: string | null;
  name?: string | null;
  leagueId?: number | null;
  stadiumId?: number | null;
  conference?: string | null;
  division?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  tertiaryColor?: string | null;
  quaternaryColor?: string | null;
  wikipediaLogoUrl?: string | null;
  wikipediaWordMarkUrl?: string | null;
  globalTeamId?: number;
  nbaDotComTeamId?: number | null;
  headCoach?: string | null;
};

export const team1Schema: Schema<Team1> = s.object<Team1>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  leagueId: s.optionalNullable(s.number()),
  stadiumId: s.optionalNullable(s.number()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.number()),
  nbaDotComTeamId: s.optionalNullable(s.number()),
  headCoach: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    city: "City",
    name: "Name",
    leagueId: "LeagueID",
    stadiumId: "StadiumID",
    conference: "Conference",
    division: "Division",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    wikipediaWordMarkUrl: "WikipediaWordMarkUrl",
    globalTeamId: "GlobalTeamID",
    nbaDotComTeamId: "NbaDotComTeamID",
    headCoach: "HeadCoach",
  },
});
