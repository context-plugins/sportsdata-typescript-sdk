import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { season6Schema, type Season6 } from "./season6.js";

export type Competition = {
  /** The unique ID of the competition/league */
  competitionId?: number;
  /** The unique ID of the area where this competition/league is played */
  areaId?: number;
  /** The display name of the area where this competition/league is played */
  areaName?: string | null;
  /** The display name of the competition/league */
  name?: string | null;
  /** The gender of the players on the team Possible Values: Male; Female */
  gender?: string | null;
  /** The type of this competition/league Possible values: Club; International */
  type?: string | null;
  /** The format of the competition/league. Possible values: Domestic League; International Cup */
  format?: string | null;
  /** The seasons associated with this competition/league */
  seasons?: Season6[];
  /** The unique string key of the competition/league */
  key?: string | null;
};

export const competitionSchema: Schema<Competition> = s.object<Competition>({
  competitionId: s.optional(s.int()),
  areaId: s.optional(s.int()),
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
