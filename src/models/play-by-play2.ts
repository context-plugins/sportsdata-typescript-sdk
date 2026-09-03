import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game51Schema, type Game51 } from "./game51.js";
import { play2Schema, type Play2 } from "./play2.js";

export type PlayByPlay2 = {
  game?: Game51;
  plays?: Play2[];
};

export const playByPlay2Schema: Schema<PlayByPlay2> = s.object<PlayByPlay2>({
  game: s.optional(s.lazy(() => game51Schema)),
  plays: s.optional(s.array(s.lazy(() => play2Schema))),
  _keysMap: {
    game: "Game",
    plays: "Plays",
  },
});
