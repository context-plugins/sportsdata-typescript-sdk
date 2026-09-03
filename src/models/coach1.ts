import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Coach1 = {
  coachId?: number;
  firstName?: string | null;
  lastName?: string | null;
  shortName?: string | null;
  nationality?: string | null;
};

export const coach1Schema: Schema<Coach1> = s.object<Coach1>({
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
