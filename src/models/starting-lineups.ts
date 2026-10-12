import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineupSchema, type Lineup } from "./lineup.js";

export type StartingLineups = {
  /** The unique ID of the game associated with this lineup */
  gameId?: number;
  /** The NBA season of the game that the lineups is associated with */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number;
  /** The day of the game */
  day?: string | null;
  /** Date and Time of Game */
  dateTime?: string | null;
  /**
   * Indicates the game's status. Possible values include: Scheduled; InProgress; Final; F/OT;
   * Suspended; Postponed; Delayed; Canceled; Forfeit; NotNecessary
   */
  status?: string | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** Unique ID of Away Team */
  awayTeamId?: number | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The lineup (starters and bench players) of the home team in a given game */
  homeLineup?: Lineup[];
  /** The lineup (starters and bench players) of the away team in a given game */
  awayLineup?: Lineup[];
};

export const startingLineupsSchema: Schema<StartingLineups> = s.object<StartingLineups>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  homeTeamId: s.optionalNullable(s.int()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  awayTeam: s.optionalNullable(s.string()),
  homeLineup: s.optional(s.array(s.lazy(() => lineupSchema))),
  awayLineup: s.optional(s.array(s.lazy(() => lineupSchema))),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    homeTeamId: "HomeTeamID",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    awayTeam: "AwayTeam",
    homeLineup: "HomeLineup",
    awayLineup: "AwayLineup",
  },
});
