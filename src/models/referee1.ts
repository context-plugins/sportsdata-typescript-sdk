import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referee1 = {
  refereeId?: number;
  name?: string | null;
  number?: number | null;
  position?: string | null;
  college?: string | null;
  experience?: number | null;
};

export const referee1Schema: Schema<Referee1> = s.object<Referee1>({
  refereeId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.number()),
  position: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  experience: s.optionalNullable(s.number()),
  _keysMap: {
    refereeId: "RefereeID",
    name: "Name",
    number: "Number",
    position: "Position",
    college: "College",
    experience: "Experience",
  },
});
