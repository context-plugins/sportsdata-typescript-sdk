import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The coach of the away team */
export type Coach3 = {
  /** The unique ID of the coach */
  coachId?: number;
  /** Coach's first name */
  firstName?: string | null;
  /** The last name of the coach */
  lastName?: string | null;
  /** The short name of the coach */
  shortName?: string | null;
  /** Coach's nationality */
  nationality?: string | null;
};

export const coach3Schema: Schema<Coach3> = s.object<Coach3>({
  coachId: s.optional(s.int()),
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
