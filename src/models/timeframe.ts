import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Timeframe = {
  /**
   * The season type of the timeframe (1=Regular Season, 2=Preseason, 3=Postseason, 4=Offseason,
   * 5=All-Star)
   */
  seasonType?: number;
  /**
   * The league year of the timeframe (this gets incremented on the first day of the league year
   * during free agency)
   */
  season?: number;
  /**
   * The week of the timeframe (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to4;
   * offseason=NULL). Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number | null;
  /** The friendly name of the Timeframe */
  name?: string | null;
  /** The shorter name of the Timeframe */
  shortName?: string | null;
  /** The start date/time of this Timeframe */
  startDate?: string | null;
  /** The end date and time of the timeframe */
  endDate?: string | null;
  /**
   * The start date/time of the first game of the Timeframe (if no games then returns the StartDate)
   */
  firstGameStart?: string | null;
  /** The end date/time of the first game of the Timeframe (if no games then returns the EndDate) */
  firstGameEnd?: string | null;
  /** The end date/time of the last game of the Timeframe (if no games then returns the EndDate) */
  lastGameEnd?: string | null;
  /** Whether there are any games in this Timeframe */
  hasGames?: boolean;
  /** Whether this Timeframe has started */
  hasStarted?: boolean;
  /** Whether this Timeframe has ended */
  hasEnded?: boolean;
  /** Whether the first game has started */
  hasFirstGameStarted?: boolean;
  /** Whether the first game has ended */
  hasFirstGameEnded?: boolean;
  /** Whether the last game has ended */
  hasLastGameEnded?: boolean;
  /** The value of the Season parameter used to pass into the API */
  apiSeason?: string | null;
  /** The value of the Week parameter used to pass into the API */
  apiWeek?: string | null;
};

export const timeframeSchema: Schema<Timeframe> = s.object<Timeframe>({
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optionalNullable(s.int()),
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
