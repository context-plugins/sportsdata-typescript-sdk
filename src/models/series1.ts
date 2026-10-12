import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Series1 = {
  /** The unique ID of this series */
  seriesId?: number;
  /** The name of this series */
  name?: string | null;
};

export const series1Schema: Schema<Series1> = s.object<Series1>({
  seriesId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    seriesId: "SeriesID",
    name: "Name",
  },
});
