import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { team4Schema, type Team4 } from "./team4.js";

export type Conference = {
  conferenceId?: number;
  name?: string | null;
  teams?: Team4[];
  conferenceName?: string | null;
  divisionName?: string | null;
};

export const conferenceSchema: Schema<Conference> = s.object<Conference>({
  conferenceId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  teams: s.optional(s.array(s.lazy(() => team4Schema))),
  conferenceName: s.optionalNullable(s.string()),
  divisionName: s.optionalNullable(s.string()),
  _keysMap: {
    conferenceId: "ConferenceID",
    name: "Name",
    teams: "Teams",
    conferenceName: "ConferenceName",
    divisionName: "DivisionName",
  },
});
