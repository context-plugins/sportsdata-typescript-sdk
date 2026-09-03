import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Coach3 = {
  coachId?: number;
  firstName?: string | null;
  lastName?: string | null;
  shortName?: string | null;
  nationality?: string | null;
};

export const coach3Schema: Schema<Coach3> = s.object<Coach3>({
  coachId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  nationality: s.optionalNullable(s.string()),
  _keysMap: {
    coachId: "CoachId",
    firstName: "FirstName",
    lastName: "LastName",
    shortName: "ShortName",
    nationality: "Nationality",
  },
});
