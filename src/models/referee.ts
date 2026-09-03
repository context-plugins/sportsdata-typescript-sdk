import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Referee = {
  refereeId?: number;
  name?: string | null;
  number?: number;
  position?: string | null;
  college?: string | null;
  experience?: number;
};

export const refereeSchema: Schema<Referee> = s.object<Referee>({
  refereeId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  number: s.optional(s.number()),
  position: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  experience: s.optional(s.number()),
  _keysMap: {
    refereeId: "RefereeID",
    name: "Name",
    number: "Number",
    position: "Position",
    college: "College",
    experience: "Experience",
  },
});
