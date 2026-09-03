import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team2 = {
  teamId?: number;
  key?: string | null;
  active?: boolean;
  city?: string | null;
  name?: string | null;
  stadiumId?: number | null;
  league?: string | null;
  division?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  tertiaryColor?: string | null;
  quaternaryColor?: string | null;
  wikipediaLogoUrl?: string | null;
  wikipediaWordMarkUrl?: string | null;
  globalTeamId?: number;
  headCoach?: string | null;
  hittingCoach?: string | null;
  pitchingCoach?: string | null;
};

export const team2Schema: Schema<Team2> = s.object<Team2>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.number()),
  league: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.number()),
  headCoach: s.optionalNullable(s.string()),
  hittingCoach: s.optionalNullable(s.string()),
  pitchingCoach: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    city: "City",
    name: "Name",
    stadiumId: "StadiumID",
    league: "League",
    division: "Division",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    wikipediaWordMarkUrl: "WikipediaWordMarkUrl",
    globalTeamId: "GlobalTeamID",
    headCoach: "HeadCoach",
    hittingCoach: "HittingCoach",
    pitchingCoach: "PitchingCoach",
  },
});
