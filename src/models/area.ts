import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { competitionSchema, type Competition } from "./competition.js";

export type Area = {
  /** The unique ID of the area */
  areaId?: number;
  /** The 3-digit country or continent code where the area is located */
  countryCode?: string | null;
  /** The display name of the area */
  name?: string | null;
  /** The competitions that are associated with and/or played in the area */
  competitions?: Competition[];
};

export const areaSchema: Schema<Area> = s.object<Area>({
  areaId: s.optional(s.int()),
  countryCode: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  competitions: s.optional(s.array(s.lazy(() => competitionSchema))),
  _keysMap: {
    areaId: "AreaId",
    countryCode: "CountryCode",
    name: "Name",
    competitions: "Competitions",
  },
});
