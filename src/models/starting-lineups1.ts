import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineup1Schema, type Lineup1 } from "./lineup1.js";
import { lineup2Schema, type Lineup2 } from "./lineup2.js";
import { lineup3Schema, type Lineup3 } from "./lineup3.js";

export type StartingLineups1 = {
  /** The unique ID of the game tied to the StartingLineups */
  gameId?: number;
  /** The MLB season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar)
   */
  seasonType?: number;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /**
   * Indicates the game's status. Possible values include: Scheduled; InProgress; Final; Suspended;
   * Delayed; Postponed; Canceled; Forfeit; NotNecessary
   */
  status?: string | null;
  /** The unique ID of the home team tied to these StartingLineups */
  homeTeamId?: number | null;
  /** The abbreviation [Key] of the Home Team */
  homeTeam?: string | null;
  /** The unique TeamID of the away team */
  awayTeamId?: number | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** Home team starting pitcher. Note: this is a probable pitcher until confirmed field = TRUE. */
  homeStartingPitcher?: Lineup3;
  /** The batting lineup of the home team */
  homeBattingLineup?: Lineup1[];
  /** Away team starting pitcher. Note: this is a probable pitcher until confirmed field = TRUE. */
  awayStartingPitcher?: Lineup2;
  /** Away team batting lineup for the game */
  awayBattingLineup?: Lineup1[];
  /**
   * Indicates whether the home team will use an Opener as the starting pitcher. NOTE: An opener is
   * a pitcher (typically a relief pitcher) that is only scheduled to pitch the first 1-3 innings of
   * the game.
   */
  homeTeamOpener?: boolean | null;
  /**
   * Indicates whether the away team will use an Opener as the starting pitcher. NOTE: An opener is
   * a pitcher (typically a relief pitcher) that is only scheduled to pitch the first 1-3 innings of
   * the game.
   */
  awayTeamOpener?: boolean | null;
};

export const startingLineups1Schema: Schema<StartingLineups1> = s.object<StartingLineups1>({
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
  homeStartingPitcher: s.optional(s.lazy(() => lineup3Schema)),
  homeBattingLineup: s.optional(s.array(s.lazy(() => lineup1Schema))),
  awayStartingPitcher: s.optional(s.lazy(() => lineup2Schema)),
  awayBattingLineup: s.optional(s.array(s.lazy(() => lineup1Schema))),
  homeTeamOpener: s.optionalNullable(s.boolean()),
  awayTeamOpener: s.optionalNullable(s.boolean()),
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
    homeStartingPitcher: "HomeStartingPitcher",
    homeBattingLineup: "HomeBattingLineup",
    awayStartingPitcher: "AwayStartingPitcher",
    awayBattingLineup: "AwayBattingLineup",
    homeTeamOpener: "HomeTeamOpener",
    awayTeamOpener: "AwayTeamOpener",
  },
});
