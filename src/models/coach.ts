import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Coach = {
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

export const coachSchema: Schema<Coach> = s.object<Coach>({
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
