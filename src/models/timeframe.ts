import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Timeframe = {
  seasonType?: number;
  season?: number;
  week?: number | null;
  name?: string | null;
  shortName?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  firstGameStart?: string | null;
  firstGameEnd?: string | null;
  lastGameEnd?: string | null;
  hasGames?: boolean;
  hasStarted?: boolean;
  hasEnded?: boolean;
  hasFirstGameStarted?: boolean;
  hasFirstGameEnded?: boolean;
  hasLastGameEnded?: boolean;
  apiSeason?: string | null;
  apiWeek?: string | null;
};

export const timeframeSchema: Schema<Timeframe> = s.object<Timeframe>({
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  firstGameStart: s.optionalNullable(s.string()),
  firstGameEnd: s.optionalNullable(s.string()),
  lastGameEnd: s.optionalNullable(s.string()),
  hasGames: s.optional(s.boolean()),
  hasStarted: s.optional(s.boolean()),
  hasEnded: s.optional(s.boolean()),
  hasFirstGameStarted: s.optional(s.boolean()),
  hasFirstGameEnded: s.optional(s.boolean()),
  hasLastGameEnded: s.optional(s.boolean()),
  apiSeason: s.optionalNullable(s.string()),
  apiWeek: s.optionalNullable(s.string()),
  _keysMap: {
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    name: "Name",
    shortName: "ShortName",
    startDate: "StartDate",
    endDate: "EndDate",
    firstGameStart: "FirstGameStart",
    firstGameEnd: "FirstGameEnd",
    lastGameEnd: "LastGameEnd",
    hasGames: "HasGames",
    hasStarted: "HasStarted",
    hasEnded: "HasEnded",
    hasFirstGameStarted: "HasFirstGameStarted",
    hasFirstGameEnded: "HasFirstGameEnded",
    hasLastGameEnded: "HasLastGameEnded",
    apiSeason: "ApiSeason",
    apiWeek: "ApiWeek",
  },
});
