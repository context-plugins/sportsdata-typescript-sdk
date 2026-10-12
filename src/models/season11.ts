import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roundSchema, type Round } from "./round.js";

/** The current active season for this competition/league */
export type Season11 = {
  /** The unique ID of the season */
  seasonId?: number;
  /** The unique ID of the competition */
  competitionId?: number;
  /** The soccer regular season for which these totals apply */
  season?: number;
  /** The display name of the season (e.g. 2017/2018; 2018/19; etc) */
  name?: string | null;
  /** The display name of the competition associated with this season */
  competitionName?: string | null;
  /** The start date of the season */
  startDate?: string | null;
  /** The end date of the season (UTC) */
  endDate?: string | null;
  /** Indicates whether or not this season is the current season of the competition */
  currentSeason?: boolean;
  /** The unique ID of the round that this season is associated with */
  rounds?: Round[];
};

export const season11Schema: Schema<Season11> = s.object<Season11>({
  seasonId: s.optional(s.int()),
  competitionId: s.optional(s.int()),
  season: s.optional(s.int()),
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
