import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The second assistant referee */
export type Referee21 = {
  /** The last name of the referee */
  refereeId?: number;
  /** The first name of the referee */
  firstName?: string | null;
  /** The last name of the referee */
  lastName?: string | null;
  /** The short name of the referee */
  shortName?: string | null;
  /** The nationality of the referee */
  nationality?: string | null;
};

export const referee21Schema: Schema<Referee21> = s.object<Referee21>({
  refereeId: s.optional(s.int()),
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
