import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The first additional assistant referee */
export type Referee4 = {
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

export const referee4Schema: Schema<Referee4> = s.object<Referee4>({
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
