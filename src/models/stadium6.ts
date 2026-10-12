import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stadium6 = {
  /** The unique ID of the stadium */
  stadiumId?: number;
  /** Whether or not this team is active. Note: Active = True & Inactive = False */
  active?: boolean;
  /** The full name of the stadium */
  name?: string | null;
  /** The city in which the stadium is located */
  city?: string | null;
  /** The state where the stadium is located (only US and Canadian stadiums will have values) */
  state?: string | null;
  /** The 2-digit country code where the stadium is located */
  country?: string | null;
};

export const stadium6Schema: Schema<Stadium6> = s.object<Stadium6>({
  stadiumId: s.optional(s.int()),
  active: s.optional(s.boolean()),
  name: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  _keysMap: {
    stadiumId: "StadiumID",
    active: "Active",
    name: "Name",
    city: "City",
    state: "State",
    country: "Country",
  },
});
