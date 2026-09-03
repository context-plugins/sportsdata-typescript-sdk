import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referee3 = {
  refereeId?: number;
  firstName?: string | null;
  lastName?: string | null;
  shortName?: string | null;
  nationality?: string | null;
};

export const referee3Schema: Schema<Referee3> = s.object<Referee3>({
  refereeId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  nationality: s.optionalNullable(s.string()),
  _keysMap: {
    refereeId: "RefereeId",
    firstName: "FirstName",
    lastName: "LastName",
    shortName: "ShortName",
    nationality: "Nationality",
  },
});
