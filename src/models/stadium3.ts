import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stadium3 = {
  /** The unique ID of the stadium */
  stadiumId?: number;
  /** Whether or not this stadium is active */
  active?: boolean;
  /** The full name of the stadium */
  name?: string | null;
  /** The city where the stadium is located */
  city?: string | null;
  /** The state where the stadium is located (only US and Canadian stadiums will have values) */
  state?: string | null;
  /** The 3-digit country code where the stadium is located */
  country?: string | null;
  /** The estimated seating capacity of the stadium */
  capacity?: number | null;
  /** The playing surface of the stadium (Grass, Artificial or Dome) */
  surface?: string | null;
  /** The estimated distance between home plate and the left field wall */
  leftField?: number | null;
  /** The estimated distance between home plate and the mid left field wall */
  midLeftField?: number | null;
  /** The estimated distance between home plate and the left center field wall */
  leftCenterField?: number | null;
  /** The estimated distance between home plate and the mid left center field wall */
  midLeftCenterField?: number | null;
  /** The estimated distance between home plate and the center field wall */
  centerField?: number | null;
  /** The estimated distance between home plate and the mid right center field wall */
  midRightCenterField?: number | null;
  /** The estimated distance between home plate and the right center field wall */
  rightCenterField?: number | null;
  /** The estimated distance between home plate and the mid right field wall */
  midRightField?: number | null;
  /** The estimated distance between home plate and the right field wall */
  rightField?: number | null;
  /** The geographic latitude coordinate of this venue */
  geoLat?: number | null;
  /** The geographic longitude coordinate of this venue */
  geoLong?: number | null;
  /** The altitude of the stadium in feet */
  altitude?: number | null;
  /**
   * The direction that the batter is facing while looking at the pitcher's mound. If the home plate
   * is at the north of the stadium, the batter is facing south, so the value is given as 180
   * degrees. If home plate is at the east the batter faces west, so it's 270 degrees. If the home
   * plate is at the south the batter faces north, so it's 0 degrees. If the home plate is at the
   * west the batter faces east, so it's 90 degrees.
   */
  homePlateDirection?: number | null;
  /** The type of the stadium (possible values: Outdoor, Dome, RetractableDome) */
  type?: string | null;
};

export const stadium3Schema: Schema<Stadium3> = s.object<Stadium3>({
  stadiumId: s.optional(s.int()),
  active: s.optional(s.boolean()),
  name: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  capacity: s.optionalNullable(s.int()),
  surface: s.optionalNullable(s.string()),
  leftField: s.optionalNullable(s.int()),
  midLeftField: s.optionalNullable(s.int()),
  leftCenterField: s.optionalNullable(s.int()),
  midLeftCenterField: s.optionalNullable(s.int()),
  centerField: s.optionalNullable(s.int()),
  midRightCenterField: s.optionalNullable(s.int()),
  rightCenterField: s.optionalNullable(s.int()),
  midRightField: s.optionalNullable(s.int()),
  rightField: s.optionalNullable(s.int()),
  geoLat: s.optionalNullable(s.float64()),
  geoLong: s.optionalNullable(s.float64()),
  altitude: s.optionalNullable(s.int()),
  homePlateDirection: s.optionalNullable(s.int()),
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
