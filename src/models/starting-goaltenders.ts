import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { goaltender1Schema, type Goaltender1 } from "./goaltender1.js";
import { goaltender3Schema, type Goaltender3 } from "./goaltender3.js";

export type StartingGoaltenders = {
  /** The unique ID of the game tied to the StartingGoaltenders */
  gameId?: number;
  /** The end year of season (2021-22 would be 2022) */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/SO, F/OT,
   * Postponed, Canceled, NotNecessary
   */
  status?: string | null;
  /** The unique ID of the home team tied to these StartingGoaltenders */
  homeTeamId?: number | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team as it relates to the starting goaltenders */
  awayTeamId?: number | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /**
   * The information of the home goaltender (PlayerID, TeamID, Team, First & Last Name, Jersey
   * Number, Confirmed)
   */
  homeGoaltender?: Goaltender3;
  /**
   * The information of the away goaltender (PlayerID, TeamID, Team, First & Last Name, Jersey
   * Number, Confirmed)
   */
  awayGoaltender?: Goaltender1;
};

export const startingGoaltendersSchema: Schema<StartingGoaltenders> = s.object<StartingGoaltenders>({
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
  homeGoaltender: s.optional(s.lazy(() => goaltender3Schema)),
  awayGoaltender: s.optional(s.lazy(() => goaltender1Schema)),
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
    homeGoaltender: "HomeGoaltender",
    awayGoaltender: "AwayGoaltender",
  },
});
