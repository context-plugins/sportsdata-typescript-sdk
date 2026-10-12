import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of the stadium where this game is played */
export type Stadium2 = {
  /** The unique ID of the stadium */
  stadiumId?: number;
  /** The full name of the stadium */
  name?: string | null;
  /** The city where the stadium is located */
  city?: string | null;
  /** The city where the venue is located */
  state?: string | null;
  /** The 3-digit country code where the stadium is located */
  country?: string | null;
  /** The estimated seating capacity of the stadium */
  capacity?: number | null;
  /** The playing surface of the stadium (Grass, Artificial or Dome) */
  playingSurface?: string | null;
  /** The geographic latitude coordinate of this venue */
  geoLat?: number | null;
  /** The geographic longitude coordinate of this venue. */
  geoLong?: number | null;
  /** The type of the stadium (possible values: Outdoor, Dome, RetractableDome) */
  type?: string | null;
};

export const stadium2Schema: Schema<Stadium2> = s.object<Stadium2>({
  stadiumId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.int()),
  playingSurface: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.float64()),
  geoLong: s.optionalNullable(s.float64()),
  type: s.optionalNullable(s.string()),
  _keysMap: {
    stadiumId: "StadiumID",
    name: "Name",
    city: "City",
    state: "State",
    country: "Country",
    capacity: "Capacity",
    playingSurface: "PlayingSurface",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
    type: "Type",
  },
});
