import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stadium21 = {
  stadiumId?: number;
  active?: boolean;
  name?: string | null;
  dome?: boolean;
  city?: string | null;
  state?: string | null;
  geoLat?: number | null;
  geoLong?: number | null;
};

export const stadium21Schema: Schema<Stadium21> = s.object<Stadium21>({
  stadiumId: s.optional(s.number()),
  active: s.optional(s.boolean()),
  name: s.optionalNullable(s.string()),
  dome: s.optional(s.boolean()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.number()),
  geoLong: s.optionalNullable(s.number()),
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
