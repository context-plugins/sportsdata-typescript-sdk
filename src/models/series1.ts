import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Series1 = {
  seriesId?: number;
  name?: string | null;
};

export const series1Schema: Schema<Series1> = s.object<Series1>({
  seriesId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    seriesId: "SeriesID",
    name: "Name",
  },
});
