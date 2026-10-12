import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playSchema, type Play } from "./play.js";
import { quarterSchema, type Quarter } from "./quarter.js";
import { score4Schema, type Score4 } from "./score4.js";

export type PlayByPlay = {
  /** The score object and other game details of the given game */
  score?: Score4;
  /** The details of the quarters (including overtime periods) for the given game */
  quarters?: Quarter[];
  /** The list of plays for the given game */
  plays?: Play[];
};

export const playByPlaySchema: Schema<PlayByPlay> = s.object<PlayByPlay>({
  score: s.optional(s.lazy(() => score4Schema)),
  quarters: s.optional(s.array(s.lazy(() => quarterSchema))),
  plays: s.optional(s.array(s.lazy(() => playSchema))),
  _keysMap: {
    score: "Score",
    quarters: "Quarters",
    plays: "Plays",
  },
});
