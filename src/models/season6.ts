import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roundSchema, type Round } from "./round.js";

export type Season6 = {
  seasonId?: number;
  competitionId?: number;
  season?: number;
  name?: string | null;
  competitionName?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  currentSeason?: boolean;
  rounds?: Round[];
};

export const season6Schema: Schema<Season6> = s.object<Season6>({
  seasonId: s.optional(s.number()),
  competitionId: s.optional(s.number()),
  season: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  competitionName: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  currentSeason: s.optional(s.boolean()),
  rounds: s.optional(s.array(s.lazy(() => roundSchema))),
  _keysMap: {
    seasonId: "SeasonId",
    competitionId: "CompetitionId",
    season: "Season",
    name: "Name",
    competitionName: "CompetitionName",
    startDate: "StartDate",
    endDate: "EndDate",
    currentSeason: "CurrentSeason",
    rounds: "Rounds",
  },
});
