import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamBasic1 = {
  teamId?: number;
  key?: string | null;
  active?: boolean;
  school?: string | null;
  name?: string | null;
  stadiumId?: number;
  globalTeamId?: number;
  teamLogoUrl?: string | null;
  conferenceId?: number | null;
  conference?: string | null;
  shortDisplayName?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  tertiaryColor?: string | null;
  quaternaryColor?: string | null;
};

export const teamBasic1Schema: Schema<TeamBasic1> = s.object<TeamBasic1>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  school: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  stadiumId: s.optional(s.number()),
  globalTeamId: s.optional(s.number()),
  teamLogoUrl: s.optionalNullable(s.string()),
  conferenceId: s.optionalNullable(s.number()),
  conference: s.optionalNullable(s.string()),
  shortDisplayName: s.optionalNullable(s.string()),
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
    globalTeamId: "GlobalTeamID",
    teamLogoUrl: "TeamLogoUrl",
    conferenceId: "ConferenceID",
    conference: "Conference",
    shortDisplayName: "ShortDisplayName",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
  },
});
