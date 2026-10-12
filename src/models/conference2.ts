import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { team7Schema, type Team7 } from "./team7.js";

export type Conference2 = {
  /** The ID of the team's conference */
  conferenceId?: number;
  /**
   * The name of the team's conference (e.g. American Conference; Big Ten Conference; Conference
   * USA)
   */
  name?: string | null;
  /** The list of teams within the conference */
  teams?: Team7[];
};

export const conference2Schema: Schema<Conference2> = s.object<Conference2>({
  conferenceId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  teams: s.optional(s.array(s.lazy(() => team7Schema))),
  _keysMap: {
    conferenceId: "ConferenceID",
    name: "Name",
    teams: "Teams",
  },
});
