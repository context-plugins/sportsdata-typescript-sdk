import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { team4Schema, type Team4 } from "./team4.js";

export type Conference = {
  /** The unique ID of the team's conference */
  conferenceId?: number;
  /** The name of the team's conference */
  name?: string | null;
  /** The teams that play within this conference */
  teams?: Team4[];
  /** The name of the team's parent conference (e.g. SEC, Big Ten, etc) */
  conferenceName?: string | null;
  /**
   * The name of the team's division (e.g. East; West; Atlantic; etc). Note: Not all conferences
   * have divisons
   */
  divisionName?: string | null;
};

export const conferenceSchema: Schema<Conference> = s.object<Conference>({
  conferenceId: s.optional(s.int()),
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
