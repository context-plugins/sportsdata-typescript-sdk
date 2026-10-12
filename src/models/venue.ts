import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Venue = {
  /** The unique ID of the venue */
  venueId?: number;
  /** The full name of the venue */
  name?: string | null;
  /** The address where the venue is located */
  address?: string | null;
  /** The city where the venue is located */
  city?: string | null;
  /** The zip code of where the venue is located */
  zip?: string | null;
  /** The country name of where the venue is located */
  country?: string | null;
  /** Indicates whether this venue is actively used */
  open?: boolean;
  /** The year the venue opened (e.g. 1950; 1960; etc) */
  opened?: number | null;
  /** A nickname for this venue */
  nickname1?: string | null;
  /** A nickname for this venue */
  nickname2?: string | null;
  /** The estimated seating capacity of the venue */
  capacity?: number | null;
  /** The playing surface of the stadium. Possible values: Grass; Artificial */
  surface?: string | null;
  /** The geographic latitude coordinate of this venue */
  geoLat?: number | null;
  /** The geographic latitude coordinate of this venue */
  geoLong?: number | null;
};

export const venueSchema: Schema<Venue> = s.object<Venue>({
  venueId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  zip: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  open: s.optional(s.boolean()),
  opened: s.optionalNullable(s.int()),
  nickname1: s.optionalNullable(s.string()),
  nickname2: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.int()),
  surface: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.float64()),
  geoLong: s.optionalNullable(s.float64()),
  _keysMap: {
    venueId: "VenueId",
    name: "Name",
    address: "Address",
    city: "City",
    zip: "Zip",
    country: "Country",
    open: "Open",
    opened: "Opened",
    nickname1: "Nickname1",
    nickname2: "Nickname2",
    capacity: "Capacity",
    surface: "Surface",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
  },
});
