import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tracks = {
  track?: string | null;
};

export const tracksSchema: Schema<Tracks> = s.object<Tracks>({
  track: s.optionalNullable(s.string()),
  _keysMap: {
    track: "Track",
  },
});
