import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of the team for the given season/team association */
export type Team11 = {
  /** The unique ID of the team */
  teamId?: number;
  /** The unique ID of the team's current home arena */
  areaId?: number | null;
  /** The unique ID of the team's venue */
  venueId?: number | null;
  /** Abbreviation of the team (e.g. LIV; ARS; MNU; etc.) */
  key?: string | null;
  /** The mascot of the team (e.g. The Reds, The Gunners, etc.) */
  name?: string | null;
  /** The full name of the team (e.g. Liverpool Football Club, Arsenal Football Club, etc.) */
  fullName?: string | null;
  /** Whether or not this team is active (true/false) */
  active?: boolean;
  /** The area name of the home team */
  areaName?: string | null;
  /** The name of the home team's venue */
  venueName?: string | null;
  /** The gender of the players on the team. Possible Values: Male; Female */
  gender?: string | null;
  /** The type of this team. Possible values: Club, National */
  type?: string | null;
  /** The address of the home team */
  address?: string | null;
  /** The city of the home team */
  city?: string | null;
  /** The zip code of the team's home location */
  zip?: string | null;
  /** The phone number of the home team */
  phone?: string | null;
  /** The fax number of the home team */
  fax?: string | null;
  /** The website address of the home team */
  website?: string | null;
  /** The email of the home team */
  email?: string | null;
  /** The calendar year that the team was founded */
  founded?: number | null;
  /** The primary color of this team's logo/uniform/branding */
  clubColor1?: string | null;
  /** The secondary color of this team's logo/uniform/branding */
  clubColor2?: string | null;
  /** The tertiary color of this team's logo/uniform/branding */
  clubColor3?: string | null;
  /** A nickname for this team */
  nickname1?: string | null;
  /** A nickname for this team */
  nickname2?: string | null;
  /** A nickname for this team */
  nickname3?: string | null;
  /**
   * The link to the team's logo hosted on Wikipedia (This is not licensed for public or commercial
   * use)
   */
  wikipediaLogoUrl?: string | null;
  /**
   * The link to the team's wordmark logo hosted on Wikipedia (This is not licensed for public or
   * commercial use)
   */
  wikipediaWordMarkUrl?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number;
  /** The official FIFA country code, for national teams only. */
  fifaCountryCode?: string | null;
};

export const team11Schema: Schema<Team11> = s.object<Team11>({
  teamId: s.optional(s.int()),
  areaId: s.optionalNullable(s.int()),
  venueId: s.optionalNullable(s.int()),
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
  founded: s.optionalNullable(s.int()),
  clubColor1: s.optionalNullable(s.string()),
  clubColor2: s.optionalNullable(s.string()),
  clubColor3: s.optionalNullable(s.string()),
  nickname1: s.optionalNullable(s.string()),
  nickname2: s.optionalNullable(s.string()),
  nickname3: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optional(s.int()),
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
