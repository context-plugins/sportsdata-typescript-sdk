import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Venue = {
  venueId?: number;
  name?: string | null;
  address?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  open?: boolean;
  opened?: number | null;
  nickname1?: string | null;
  nickname2?: string | null;
  capacity?: number | null;
  surface?: string | null;
  geoLat?: number | null;
  geoLong?: number | null;
};

export const venueSchema: Schema<Venue> = s.object<Venue>({
  venueId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  zip: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  open: s.optional(s.boolean()),
  opened: s.optionalNullable(s.number()),
  nickname1: s.optionalNullable(s.string()),
  nickname2: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.number()),
  surface: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.number()),
  geoLong: s.optionalNullable(s.number()),
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
