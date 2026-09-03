import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game17Schema, type Game17 } from "./game17.js";
import { season11Schema, type Season11 } from "./season11.js";
import { season6Schema, type Season6 } from "./season6.js";
import { teamDetailSchema, type TeamDetail } from "./team-detail.js";

export type CompetitionDetail = {
  currentSeason?: Season11;
  teams?: TeamDetail[];
  games?: Game17[];
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

export const competitionDetailSchema: Schema<CompetitionDetail> = s.object<CompetitionDetail>({
  currentSeason: s.optional(s.lazy(() => season11Schema)),
  teams: s.optional(s.array(s.lazy(() => teamDetailSchema))),
  games: s.optional(s.array(s.lazy(() => game17Schema))),
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
    currentSeason: "CurrentSeason",
    teams: "Teams",
    games: "Games",
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
