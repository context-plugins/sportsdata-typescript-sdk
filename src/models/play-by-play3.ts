import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game52Schema, type Game52 } from "./game52.js";
import { play3Schema, type Play3 } from "./play3.js";

export type PlayByPlay3 = {
  game?: Game52;
  plays?: Play3[];
};

export const playByPlay3Schema: Schema<PlayByPlay3> = s.object<PlayByPlay3>({
  game: s.optional(s.lazy(() => game52Schema)),
  plays: s.optional(s.array(s.lazy(() => play3Schema))),
  _keysMap: {
    game: "Game",
    plays: "Plays",
  },
});
