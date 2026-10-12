import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";
import { series2Schema, type Series2 } from "./series2.js";

/** The details of the Game that this SlateGame refers to. */
export type Game1 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The NBA season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition)
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/OT,
   * Suspended, Postponed, Delayed, Canceled, Forfeit, NotNecessary
   */
  status?: string | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game */
  dateTime?: string | null;
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
  /** The television station broadcasting the game */
  channel?: string | null;
  /** The total number of people in attendance at the game */
  attendance?: number | null;
  /** Total number of points the away team scored in the game */
  awayTeamScore?: number | null;
  /** Total number of points the home team scored in this game */
  homeTeamScore?: number | null;
  /** The timestamp of when this game was last updated (in US Eastern Time) */
  updated?: string | null;
  /** The current quarter in the game. Possible values include: 1, 2, 3, 4, Half, OT, NULL */
  quarter?: string | null;
  /** The number of minutes remaining in the quarter */
  timeRemainingMinutes?: number | null;
  /** The number of seconds remaining in the quarter */
  timeRemainingSeconds?: number | null;
  /**
   * The oddsmaker Point Spread at game start from the perspective of the HomeTeam (negative numbers
   * indicate the HomeTeam is favored; positive numbers indicate the AwayTeam is favored)
   */
  pointSpread?: number | null;
  /** The sportsbook's total points scored over under for the game */
  overUnder?: number | null;
  /** Money line from the perspective of the away team */
  awayTeamMoneyLine?: number | null;
  /** Money line from the perspective of the home team */
  homeTeamMoneyLine?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalAwayTeamId?: number;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number;
  /** The money line payout odds when betting on the away team with the point spread. */
  pointSpreadAwayTeamMoneyLine?: number | null;
  /** The money line payout odds when betting on the away team with the point spread. */
  pointSpreadHomeTeamMoneyLine?: number | null;
  /**
   * The description of the most recent play/event of the game. This is for display purposes and
   * does not include corresponding data points.
   */
  lastPlay?: string | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean;
  /** The details of the quarters (including overtime periods) for this game. */
  quarters?: Quarter1[];
  /** The date and time that the game ended (in US Eastern Time) */
  gameEndDateTime?: string | null;
  /** The rotation number of the home team for this game */
  homeRotationNumber?: number | null;
  /** The rotation number of the away team for this game */
  awayRotationNumber?: number | null;
  /** Indicates whether this game is played in a neutral venue */
  neutralVenue?: boolean | null;
  /** The sportsbook's payout for the over on the total points line */
  overPayout?: number | null;
  /** The sportsbook's payout for the under on the total points line */
  underPayout?: number | null;
  /** Unique ID of officiating Crew Chief */
  crewChiefId?: number | null;
  /** Unique ID of officiating Umpire referee */
  umpireId?: number | null;
  /** Unique ID of officiating referee */
  refereeId?: number | null;
  /** Unique ID of officiating Alternate referee */
  alternateId?: number | null;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
  /**
   * Contains relevant series data for playoff series only - HomeTeamWins, AwayTeamWins, GameNumber,
   * and MaxLength
   */
  seriesInfo?: Series2;
  /**
   * A flag to indicate this game is part of the inseason NBA tournament (can be considered a part
   * of regular season still) - a null would also indicate false
   */
  inseasonTournament?: boolean | null;
  /**
   * The GameID of the originally scheduled, postponed game, that this game was rescheduled from.
   * This only pertains to games that are scheduled as "make up" games.
   */
  rescheduledFromGameId?: number | null;
  /**
   * The GameID of the game that was rescheduled from this game. This only pertains to postponed
   * games that require rescheduling.
   */
  rescheduledGameId?: number | null;
};

export const game1Schema: Schema<Game1> = s.object<Game1>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.int()),
  homeTeamId: s.optional(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  channel: s.optionalNullable(s.string()),
  attendance: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  pointSpread: s.optionalNullable(s.float64()),
  overUnder: s.optionalNullable(s.float64()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.int()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.int()),
  lastPlay: s.optionalNullable(s.string()),
  isClosed: s.optional(s.boolean()),
  quarters: s.optional(s.array(s.lazy(() => quarter1Schema))),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  neutralVenue: s.optionalNullable(s.boolean()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  crewChiefId: s.optionalNullable(s.int()),
  umpireId: s.optionalNullable(s.int()),
  refereeId: s.optionalNullable(s.int()),
  alternateId: s.optionalNullable(s.int()),
  dateTimeUtc: s.optionalNullable(s.string()),
  seriesInfo: s.optional(s.lazy(() => series2Schema)),
  inseasonTournament: s.optionalNullable(s.boolean()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    status: "Status",
    day: "Day",
    dateTime: "DateTime",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    stadiumId: "StadiumID",
    channel: "Channel",
    attendance: "Attendance",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    quarter: "Quarter",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pointSpreadAwayTeamMoneyLine: "PointSpreadAwayTeamMoneyLine",
    pointSpreadHomeTeamMoneyLine: "PointSpreadHomeTeamMoneyLine",
    lastPlay: "LastPlay",
    isClosed: "IsClosed",
    quarters: "Quarters",
    gameEndDateTime: "GameEndDateTime",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    neutralVenue: "NeutralVenue",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    crewChiefId: "CrewChiefID",
    umpireId: "UmpireID",
    refereeId: "RefereeID",
    alternateId: "AlternateID",
    dateTimeUtc: "DateTimeUTC",
    seriesInfo: "SeriesInfo",
    inseasonTournament: "InseasonTournament",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
