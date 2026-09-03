import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game5Schema, type Game5 } from "./game5.js";
import { play1Schema, type Play1 } from "./play1.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";

export type PlayByPlay1 = {
  game?: Game5;
  quarters?: Quarter1[];
  plays?: Play1[];
};

export const playByPlay1Schema: Schema<PlayByPlay1> = s.object<PlayByPlay1>({
  game: s.optional(s.lazy(() => game5Schema)),
  quarters: s.optional(s.array(s.lazy(() => quarter1Schema))),
  plays: s.optional(s.array(s.lazy(() => play1Schema))),
  _keysMap: {
    game: "Game",
    quarters: "Quarters",
    plays: "Plays",
  },
});
