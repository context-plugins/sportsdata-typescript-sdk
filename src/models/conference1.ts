import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { team5Schema, type Team5 } from "./team5.js";

export type Conference1 = {
  /** The ID of the team's conference */
  conferenceId?: number;
  /** The name of the team's conference (e.g. American Athletic, Big Ten, Conference USA) */
  name?: string | null;
  /** The college teams within this conference */
  teams?: Team5[];
};

export const conference1Schema: Schema<Conference1> = s.object<Conference1>({
  conferenceId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  teams: s.optional(s.array(s.lazy(() => team5Schema))),
  _keysMap: {
    conferenceId: "ConferenceID",
    name: "Name",
    teams: "Teams",
  },
});
