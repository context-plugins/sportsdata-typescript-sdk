import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoreBasic3 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The NHL season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition)
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/SO, F/OT,
   * Postponed, Canceled, NotNecessary
   */
  status?: string | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /** The timestamp of when the record was last updated (in US Eastern Time) */
  updated?: string | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number;
  /** The unique ID of the home team */
  homeTeamId?: number;
  /** The unique ID of the stadium */
  stadiumId?: number | null;
  /** Total number of goals scored by the away team in the game */
  awayTeamScore?: number | null;
  /** Total number of goals scored by the home team in the game */
  homeTeamScore?: number | null;
  /** The date and time that the game ended in US Eastern Time */
  gameEndDateTime?: string | null;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
};

export const scoreBasic3Schema: Schema<ScoreBasic3> = s.object<ScoreBasic3>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.int()),
  homeTeamId: s.optional(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  gameEndDateTime: s.optionalNullable(s.string()),
  dateTimeUtc: s.optionalNullable(s.string()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    status: "Status",
    day: "Day",
    dateTime: "DateTime",
    updated: "Updated",
    isClosed: "IsClosed",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    stadiumId: "StadiumID",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    gameEndDateTime: "GameEndDateTime",
    dateTimeUtc: "DateTimeUTC",
  },
});
