import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium1Schema, type Stadium1 } from "./stadium1.js";

export type TeamBasic2 = {
  teamId?: number;
  key?: string | null;
  active?: boolean;
  school?: string | null;
  name?: string | null;
  globalTeamId?: number;
  conferenceId?: number | null;
  conference?: string | null;
  teamLogoUrl?: string | null;
  shortDisplayName?: string | null;
  stadium?: Stadium1;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  tertiaryColor?: string | null;
  quaternaryColor?: string | null;
};

export const teamBasic2Schema: Schema<TeamBasic2> = s.object<TeamBasic2>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  school: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.number()),
  conferenceId: s.optionalNullable(s.number()),
  conference: s.optionalNullable(s.string()),
  teamLogoUrl: s.optionalNullable(s.string()),
  shortDisplayName: s.optionalNullable(s.string()),
  stadium: s.optional(s.lazy(() => stadium1Schema)),
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
    globalTeamId: "GlobalTeamID",
    conferenceId: "ConferenceID",
    conference: "Conference",
    teamLogoUrl: "TeamLogoUrl",
    shortDisplayName: "ShortDisplayName",
    stadium: "Stadium",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
  },
});
