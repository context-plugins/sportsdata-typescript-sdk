import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of the stadium where this game is played */
export type Stadium21 = {
  /** The unique ID of the stadium */
  stadiumId?: number;
  /** Whether or not this stadium is the home venue for an active team */
  active?: boolean;
  /** The full name of the stadium */
  name?: string | null;
  /** Indicates whether this stadium is a dome */
  dome?: boolean;
  /** The city where the stadium is located */
  city?: string | null;
  /**
   * The US state where the stadium is located Note: if stadium is outside United States; this value
   * is NULL
   */
  state?: string | null;
  /** The geographic latitude coordinate of this venue */
  geoLat?: number | null;
  /** The geographic longitude coordinate of this venue */
  geoLong?: number | null;
};

export const stadium21Schema: Schema<Stadium21> = s.object<Stadium21>({
  stadiumId: s.optional(s.int()),
  active: s.optional(s.boolean()),
  name: s.optionalNullable(s.string()),
  dome: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.float64()),
  geoLong: s.optionalNullable(s.float64()),
  _keysMap: {
    stadiumId: "StadiumID",
    active: "Active",
    name: "Name",
    dome: "Dome",
    city: "City",
    state: "State",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
  },
});
