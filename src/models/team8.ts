import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Team8 = {
  teamId?: number;
  areaId?: number | null;
  venueId?: number | null;
  key?: string | null;
  name?: string | null;
  fullName?: string | null;
  active?: boolean;
  areaName?: string | null;
  venueName?: string | null;
  gender?: string | null;
  type?: string | null;
  address?: string | null;
  city?: string | null;
  zip?: string | null;
  phone?: string | null;
  fax?: string | null;
  website?: string | null;
  email?: string | null;
  founded?: number | null;
  clubColor1?: string | null;
  clubColor2?: string | null;
  clubColor3?: string | null;
  nickname1?: string | null;
  nickname2?: string | null;
  nickname3?: string | null;
  wikipediaLogoUrl?: string | null;
  wikipediaWordMarkUrl?: string | null;
  globalTeamId?: number;
  fifaCountryCode?: string | null;
};

export const team8Schema: Schema<Team8> = s.object<Team8>({
  teamId: s.optional(s.number()),
  areaId: s.optionalNullable(s.number()),
  venueId: s.optionalNullable(s.number()),
  key: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  fullName: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  areaName: s.optionalNullable(s.string()),
  venueName: s.optionalNullable(s.string()),
  gender: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  zip: s.optionalNullable(s.string()),
  phone: s.optionalNullable(s.string()),
  fax: s.optionalNullable(s.string()),
  website: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  founded: s.optionalNullable(s.number()),
  clubColor1: s.optionalNullable(s.string()),
  clubColor2: s.optionalNullable(s.string()),
  clubColor3: s.optionalNullable(s.string()),
  nickname1: s.optionalNullable(s.string()),
  nickname2: s.optionalNullable(s.string()),
  nickname3: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.number()),
  fifaCountryCode: s.optionalNullable(s.string()),
  _keysMap: {
    teamId: "TeamId",
    areaId: "AreaId",
    venueId: "VenueId",
    key: "Key",
    name: "Name",
    fullName: "FullName",
    active: "Active",
    areaName: "AreaName",
    venueName: "VenueName",
    gender: "Gender",
    type: "Type",
    address: "Address",
    city: "City",
    zip: "Zip",
    phone: "Phone",
    fax: "Fax",
    website: "Website",
    email: "Email",
    founded: "Founded",
    clubColor1: "ClubColor1",
    clubColor2: "ClubColor2",
    clubColor3: "ClubColor3",
    nickname1: "Nickname1",
    nickname2: "Nickname2",
    nickname3: "Nickname3",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    wikipediaWordMarkUrl: "WikipediaWordMarkUrl",
    globalTeamId: "GlobalTeamId",
    fifaCountryCode: "FifaCountryCode",
  },
});
