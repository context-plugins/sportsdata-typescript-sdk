import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team6 = {
  teamId?: number;
  key?: string | null;
  active?: boolean;
  city?: string | null;
  name?: string | null;
  conference?: string | null;
  wikipediaLogoUrl?: string | null;
  globalTeamId?: number;
};

export const team6Schema: Schema<Team6> = s.object<Team6>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.number()),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    active: "Active",
    city: "City",
    name: "Name",
    conference: "Conference",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    globalTeamId: "GlobalTeamID",
  },
});
