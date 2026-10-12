import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game17Schema, type Game17 } from "./game17.js";
import { season11Schema, type Season11 } from "./season11.js";
import { season6Schema, type Season6 } from "./season6.js";
import { teamDetailSchema, type TeamDetail } from "./team-detail.js";

export type CompetitionDetail = {
  /** The current active season for this competition/league */
  currentSeason?: Season11;
  /** The list of active teams associated with this competition */
  teams?: TeamDetail[];
  /** The complete schedule for the current season of this competition/league */
  games?: Game17[];
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

export const competitionDetailSchema: Schema<CompetitionDetail> = s.object<CompetitionDetail>({
  currentSeason: s.optional(s.lazy(() => season11Schema)),
  teams: s.optional(s.array(s.lazy(() => teamDetailSchema))),
  games: s.optional(s.array(s.lazy(() => game17Schema))),
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
