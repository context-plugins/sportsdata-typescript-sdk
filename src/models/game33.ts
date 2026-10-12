import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { period1Schema, type Period1 } from "./period1.js";
import { stadium21Schema, type Stadium21 } from "./stadium21.js";

/** The game details of this box score */
export type Game33 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The College Football season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /** The week of the game */
  week?: number | null;
  /**
   * The status of the game. Possible values include: Scheduled; InProgress; Final; F/OT; Suspended;
   * Postponed; Delayed; Canceled; Forfeit
   */
  status?: string | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number;
  /** The unique ID of the home team */
  homeTeamId?: number;
  /** The name of the away team */
  awayTeamName?: string | null;
  /** The name of the home team */
  homeTeamName?: string | null;
  /** Total number of points the away team scored in this game */
  awayTeamScore?: number | null;
  /** Total number of points the home team scored in this game */
  homeTeamScore?: number | null;
  /** The current quarter in the game (Possible Values: 1; 2; 3; 4; Half; OT; F; F/OT; NULL) */
  period?: string | null;
  /** Total number of minutes remaining in the quarter */
  timeRemainingMinutes?: number | null;
  /** Total number of seconds remaining in the quarter */
  timeRemainingSeconds?: number | null;
  /**
   * The oddsmaker Point Spread at game start from the perspective of the HomeTeam. Note: negative
   * numbers indicate the HomeTeam is favored; positive numbers indicate the AwayTeam is favored
   */
  pointSpread?: number | null;
  /** The sportsbook's total points line at game start */
  overUnder?: number | null;
  /** The sportsbook's moneyline for the away team */
  awayTeamMoneyLine?: number | null;
  /** The sportsbook's moneyline for the home team */
  homeTeamMoneyLine?: number | null;
  /** The timestamp of when this game was last updated (US Eastern Time) */
  updated?: string | null;
  /** The timestamp of when this game was first created (in US Eastern Time) */
  created?: string | null;
  /**
   * A globally unique ID for this game. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalAwayTeamId?: number;
  /**
   * A globally unique ID for the home team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalHomeTeamId?: number;
  /** The unique ID of the stadium/venue where this game was played */
  stadiumId?: number | null;
  /** The details of the stadium where this game is played */
  stadium?: Stadium21;
  /** The yard line that the ball is on at the current state of the game */
  yardLine?: number | null;
  /** The team's side of the field that the ball is on */
  yardLineTerritory?: string | null;
  /** The current down */
  down?: number | null;
  /** The current distance to a first down */
  distance?: number | null;
  /** Which team currently has possession of the ball */
  possession?: string | null;
  /** The details of the periods (quarters & overtime) for this game */
  periods?: Period1[];
  /** Indicates whether the game is over and the final score has been verified */
  isClosed?: boolean;
  /** The date and time that the game ended (in US Eastern Time) */
  gameEndDateTime?: string | null;
  /** The title of the game (e.g. Rose Bowl, Citrus Bowl, etc) */
  title?: string | null;
  /** Rotation number of home team for this game */
  homeRotationNumber?: number | null;
  /** Rotation number of away team for this game */
  awayRotationNumber?: number | null;
  /** The television station broadcasting the game */
  channel?: string | null;
  /** Indicates whether this game is played in a neutral venue */
  neutralVenue?: boolean | null;
  /** The sportsbook's point spread payout for the away team */
  awayPointSpreadPayout?: number | null;
  /** The point spread payout for the home team */
  homePointSpreadPayout?: number | null;
  /** The sportsbook's payout for the over in the total points line */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** The date and time of the game (in UTC) */
  dateTimeUtc?: string | null;
  /** The total number of people who attended the game */
  attendance?: number | null;
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

export const game33Schema: Schema<Game33> = s.object<Game33>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  week: s.optionalNullable(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optional(s.int()),
  homeTeamId: s.optional(s.int()),
  awayTeamName: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  pointSpread: s.optionalNullable(s.float64()),
  overUnder: s.optionalNullable(s.float64()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  stadium: s.optional(s.lazy(() => stadium21Schema)),
  yardLine: s.optionalNullable(s.int()),
  yardLineTerritory: s.optionalNullable(s.string()),
  down: s.optionalNullable(s.int()),
  distance: s.optionalNullable(s.int()),
  possession: s.optionalNullable(s.string()),
  periods: s.optional(s.array(s.lazy(() => period1Schema))),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  channel: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  awayPointSpreadPayout: s.optionalNullable(s.int()),
  homePointSpreadPayout: s.optionalNullable(s.int()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  dateTimeUtc: s.optionalNullable(s.string()),
  attendance: s.optionalNullable(s.int()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
    status: "Status",
    day: "Day",
    dateTime: "DateTime",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    awayTeamName: "AwayTeamName",
    homeTeamName: "HomeTeamName",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    updated: "Updated",
    created: "Created",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    stadiumId: "StadiumID",
    stadium: "Stadium",
    yardLine: "YardLine",
    yardLineTerritory: "YardLineTerritory",
    down: "Down",
    distance: "Distance",
    possession: "Possession",
    periods: "Periods",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    title: "Title",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    channel: "Channel",
    neutralVenue: "NeutralVenue",
    awayPointSpreadPayout: "AwayPointSpreadPayout",
    homePointSpreadPayout: "HomePointSpreadPayout",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    dateTimeUtc: "DateTimeUTC",
    attendance: "Attendance",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
