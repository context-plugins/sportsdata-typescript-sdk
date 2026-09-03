import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stadium6 = {
  stadiumId?: number;
  active?: boolean;
  name?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
};

export const stadium6Schema: Schema<Stadium6> = s.object<Stadium6>({
  stadiumId: s.optional(s.number()),
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
