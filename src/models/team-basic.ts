import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamBasic = {
  key?: string | null;
  teamId?: number;
  playerId?: number;
  city?: string | null;
  name?: string | null;
  conference?: string | null;
  division?: string | null;
  fullName?: string | null;
  stadiumId?: number | null;
  byeWeek?: number | null;
  globalTeamId?: number | null;
  headCoach?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  tertiaryColor?: string | null;
  quaternaryColor?: string | null;
  wikipediaLogoUrl?: string | null;
  wikipediaWordMarkUrl?: string | null;
  offensiveCoordinator?: string | null;
  defensiveCoordinator?: string | null;
  specialTeamsCoach?: string | null;
  offensiveScheme?: string | null;
  defensiveScheme?: string | null;
};

export const teamBasicSchema: Schema<TeamBasic> = s.object<TeamBasic>({
  key: s.optionalNullable(s.string()),
  teamId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  fullName: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.number()),
  byeWeek: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  headCoach: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  offensiveCoordinator: s.optionalNullable(s.string()),
  defensiveCoordinator: s.optionalNullable(s.string()),
  specialTeamsCoach: s.optionalNullable(s.string()),
  offensiveScheme: s.optionalNullable(s.string()),
  defensiveScheme: s.optionalNullable(s.string()),
  _keysMap: {
    key: "Key",
    teamId: "TeamID",
    playerId: "PlayerID",
    city: "City",
    name: "Name",
    conference: "Conference",
    division: "Division",
    fullName: "FullName",
    stadiumId: "StadiumID",
    byeWeek: "ByeWeek",
    globalTeamId: "GlobalTeamID",
    headCoach: "HeadCoach",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
    wikipediaLogoUrl: "WikipediaLogoURL",
    wikipediaWordMarkUrl: "WikipediaWordMarkURL",
    offensiveCoordinator: "OffensiveCoordinator",
    defensiveCoordinator: "DefensiveCoordinator",
    specialTeamsCoach: "SpecialTeamsCoach",
    offensiveScheme: "OffensiveScheme",
    defensiveScheme: "DefensiveScheme",
  },
});
