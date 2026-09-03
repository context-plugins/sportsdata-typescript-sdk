import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { season6Schema, type Season6 } from "./season6.js";

export type Competition = {
  competitionId?: number;
  areaId?: number;
  areaName?: string | null;
  name?: string | null;
  gender?: string | null;
  type?: string | null;
  format?: string | null;
  seasons?: Season6[];
  key?: string | null;
};

export const competitionSchema: Schema<Competition> = s.object<Competition>({
  competitionId: s.optional(s.number()),
  areaId: s.optional(s.number()),
  areaName: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  gender: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  format: s.optionalNullable(s.string()),
  seasons: s.optional(s.array(s.lazy(() => season6Schema))),
  key: s.optionalNullable(s.string()),
  _keysMap: {
    competitionId: "CompetitionId",
    areaId: "AreaId",
    areaName: "AreaName",
    name: "Name",
    gender: "Gender",
    type: "Type",
    format: "Format",
    seasons: "Seasons",
    key: "Key",
  },
});
