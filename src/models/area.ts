import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { competitionSchema, type Competition } from "./competition.js";

export type Area = {
  areaId?: number;
  countryCode?: string | null;
  name?: string | null;
  competitions?: Competition[];
};

export const areaSchema: Schema<Area> = s.object<Area>({
  areaId: s.optional(s.number()),
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
