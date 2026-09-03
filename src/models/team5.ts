import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium1Schema, type Stadium1 } from "./stadium1.js";

export type Team5 = {
  teamId?: number;
  key?: string | null;
  active?: boolean;
  school?: string | null;
  name?: string | null;
  apRank?: number | null;
  wins?: number | null;
  losses?: number | null;
  conferenceWins?: number | null;
  conferenceLosses?: number | null;
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

export const team5Schema: Schema<Team5> = s.object<Team5>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  school: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  apRank: s.optionalNullable(s.number()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  conferenceWins: s.optionalNullable(s.number()),
  conferenceLosses: s.optionalNullable(s.number()),
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
    apRank: "ApRank",
    wins: "Wins",
    losses: "Losses",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
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
