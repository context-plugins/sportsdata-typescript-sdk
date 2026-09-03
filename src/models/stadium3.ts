import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stadium3 = {
  stadiumId?: number;
  active?: boolean;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  capacity?: number | null;
  surface?: string | null;
  leftField?: number | null;
  midLeftField?: number | null;
  leftCenterField?: number | null;
  midLeftCenterField?: number | null;
  centerField?: number | null;
  midRightCenterField?: number | null;
  rightCenterField?: number | null;
  midRightField?: number | null;
  rightField?: number | null;
  geoLat?: number | null;
  geoLong?: number | null;
  altitude?: number | null;
  homePlateDirection?: number | null;
  type?: string | null;
};

export const stadium3Schema: Schema<Stadium3> = s.object<Stadium3>({
  stadiumId: s.optional(s.number()),
  active: s.optional(s.boolean()),
  name: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.number()),
  surface: s.optionalNullable(s.string()),
  leftField: s.optionalNullable(s.number()),
  midLeftField: s.optionalNullable(s.number()),
  leftCenterField: s.optionalNullable(s.number()),
  midLeftCenterField: s.optionalNullable(s.number()),
  centerField: s.optionalNullable(s.number()),
  midRightCenterField: s.optionalNullable(s.number()),
  rightCenterField: s.optionalNullable(s.number()),
  midRightField: s.optionalNullable(s.number()),
  rightField: s.optionalNullable(s.number()),
  geoLat: s.optionalNullable(s.number()),
  geoLong: s.optionalNullable(s.number()),
  altitude: s.optionalNullable(s.number()),
  homePlateDirection: s.optionalNullable(s.number()),
  type: s.optionalNullable(s.string()),
  _keysMap: {
    stadiumId: "StadiumID",
    active: "Active",
    name: "Name",
    city: "City",
    state: "State",
    country: "Country",
    capacity: "Capacity",
    surface: "Surface",
    leftField: "LeftField",
    midLeftField: "MidLeftField",
    leftCenterField: "LeftCenterField",
    midLeftCenterField: "MidLeftCenterField",
    centerField: "CenterField",
    midRightCenterField: "MidRightCenterField",
    rightCenterField: "RightCenterField",
    midRightField: "MidRightField",
    rightField: "RightField",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
    altitude: "Altitude",
    homePlateDirection: "HomePlateDirection",
    type: "Type",
  },
});
