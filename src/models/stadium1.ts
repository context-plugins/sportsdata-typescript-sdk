import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stadium1 = {
  stadiumId?: number;
  active?: boolean;
  name?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  country?: string | null;
  capacity?: number | null;
  geoLat?: number | null;
  geoLong?: number | null;
};

export const stadium1Schema: Schema<Stadium1> = s.object<Stadium1>({
  stadiumId: s.optional(s.number()),
  active: s.optional(s.boolean()),
  name: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zip: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.number()),
  geoLat: s.optionalNullable(s.number()),
  geoLong: s.optionalNullable(s.number()),
  _keysMap: {
    stadiumId: "StadiumID",
    active: "Active",
    name: "Name",
    address: "Address",
    city: "City",
    state: "State",
    zip: "Zip",
    country: "Country",
    capacity: "Capacity",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
  },
});
