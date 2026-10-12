import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The stadium details of where this game was played, The active home stadium of the team */
export type Stadium1 = {
  /** The unique ID of the stadium */
  stadiumId?: number;
  /** Whether or not this stadium is the home venue for an active team */
  active?: boolean;
  /** The full name of the stadium */
  name?: string | null;
  /** The address where the stadium is located */
  address?: string | null;
  /** The city where the stadium is located */
  city?: string | null;
  /**
   * The US state in which the stadium is located. Note: If the stadium is outside of the US, this
   * value is NULL
   */
  state?: string | null;
  /** The zip code of the stadium */
  zip?: string | null;
  /** The 2-digit country code where the stadium is located */
  country?: string | null;
  /** The estimated seating capacity of the stadium */
  capacity?: number | null;
  /** The geographic latitude coordinate of this venue. */
  geoLat?: number | null;
  /** The geographic longitude coordinate of this venue. */
  geoLong?: number | null;
};

export const stadium1Schema: Schema<Stadium1> = s.object<Stadium1>({
  stadiumId: s.optional(s.int()),
  active: s.optional(s.boolean()),
  name: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zip: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.int()),
  geoLat: s.optionalNullable(s.float64()),
  geoLong: s.optionalNullable(s.float64()),
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
