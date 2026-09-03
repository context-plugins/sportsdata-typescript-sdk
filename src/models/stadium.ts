import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stadium = {
  stadiumId?: number;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  capacity?: number | null;
  playingSurface?: string | null;
  geoLat?: number | null;
  geoLong?: number | null;
  type?: string | null;
};

export const stadiumSchema: Schema<Stadium> = s.object<Stadium>({
  stadiumId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.number()),
  playingSurface: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.number()),
  geoLong: s.optionalNullable(s.number()),
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
