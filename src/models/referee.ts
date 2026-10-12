import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referee = {
  /** The unique ID of the referee */
  refereeId?: number;
  /** The name of the referee */
  name?: string | null;
  /** The referee's number */
  number?: number;
  /** The referee's position */
  position?: string | null;
  /** The referee's college */
  college?: string | null;
  /** The referee's years of experience */
  experience?: number;
};

export const refereeSchema: Schema<Referee> = s.object<Referee>({
  refereeId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  number: s.optional(s.int()),
  position: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  experience: s.optional(s.int()),
  _keysMap: {
    refereeId: "RefereeID",
    name: "Name",
    number: "Number",
    position: "Position",
    college: "College",
    experience: "Experience",
  },
});
