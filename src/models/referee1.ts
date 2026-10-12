import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referee1 = {
  /** Unique ID of Referee */
  refereeId?: number;
  /** The referee's full name */
  name?: string | null;
  /** The number of the referee */
  number?: number | null;
  /** The position of the referee in the crew */
  position?: string | null;
  /** The college of the referee */
  college?: string | null;
  /** The number of years of experience the referee has in the NBA */
  experience?: number | null;
};

export const referee1Schema: Schema<Referee1> = s.object<Referee1>({
  refereeId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.int()),
  position: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  experience: s.optionalNullable(s.int()),
  _keysMap: {
    refereeId: "RefereeID",
    name: "Name",
    number: "Number",
    position: "Position",
    college: "College",
    experience: "Experience",
  },
});
