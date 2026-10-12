import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium2Schema, type Stadium2 } from "./stadium2.js";

/** Upcoming game for this team */
export type Score1 = {
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameID is
   * composed of Season; SeasonType; Week and HomeTeam. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
  /**
   * The type of season that this game corresponds to (1=Regular Season, 2=Preseason, 3=Postseason,
   * 4=Offseason, 5=All-Star).
   */
  seasonType?: number;
  /** The NFL season of the game */
  season?: number;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /** The date and time of the game (in US Eastern Time) */
  date?: string | null;
  /** The abbreviation [Key} of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The final score of the Away Team */
  awayScore?: number | null;
  /** The final score of the Home Team */
  homeScore?: number | null;
  /** The television station broadcasting the game */
  channel?: string | null;
  /**
   * The oddsmaker point spread at game start from the perspective of the team (negative numbers
   * indicate the HomeTeam is favored; positive numbers indicate the AwayTeam is favored)
   */
  pointSpread?: number | null;
  /** The total points line (over/under) at game start */
  overUnder?: number | null;
  /**
   * The current quarter of the game (1, 2, 3, 4, HALF, OT, F, F/OT or NULL if game has not yet
   * started)
   */
  quarter?: string | null;
  /**
   * The amount of time remaining in the current quarter (e.g. 11:23; 5:34; NULL if game is not in
   * progress or at halftime)
   */
  timeRemaining?: string | null;
  /**
   * The team that currently has possession of the ball (Ex. PHI; NE; NULL if game is not in
   * progress or at halftime)
   */
  possession?: string | null;
  /** The current down in the game (1, 2, 3, 4 or NULL) */
  down?: number | null;
  /** The yards to go for a first down (this can be any positive number or "Goal") */
  distance?: string | null;
  /**
   * the yard line of the ball's current position on the field as of the most recently completed
   * play
   */
  yardLine?: number | null;
  /** The team's side of the field that the ball is on when the play occurred */
  yardLineTerritory?: string | null;
  /**
   * The team abbreviation [Key] that currently has the ball in the opponent's red zone (Ex: "SF";
   * "BAL" or NULL)
   */
  redZone?: string | null;
  /** Points scored by the away team in Quarter 1 */
  awayScoreQuarter1?: number | null;
  /** Points scored by the away team in Quarter 2 */
  awayScoreQuarter2?: number | null;
  /** Points scored by the away team in Quarter 3 */
  awayScoreQuarter3?: number | null;
  /** Points scored by the away team in Quarter 4 */
  awayScoreQuarter4?: number | null;
  /** Points scored by the away team in overtime */
  awayScoreOvertime?: number | null;
  /** Points scored by the home team in Quarter 1 */
  homeScoreQuarter1?: number | null;
  /** Points scored by the home team in Quarter 2 */
  homeScoreQuarter2?: number | null;
  /** Points scored by the home team in Quarter 3 */
  homeScoreQuarter3?: number | null;
  /** Points scored by the home team in Quarter 4 */
  homeScoreQuarter4?: number | null;
  /** Points scored by the home team in overtime */
  homeScoreOvertime?: number | null;
  /** Whether the game has started (true/false) */
  hasStarted?: boolean;
  /** Whether the game is currently in progress (true/false) */
  isInProgress?: boolean;
  /** Whether the game is over (true/false) */
  isOver?: boolean;
  /** Whether the 1st quarter has started */
  has1StQuarterStarted?: boolean;
  /** Whether the 2nd quarter has started */
  has2NdQuarterStarted?: boolean;
  /** Whether the 3rd quarter has started */
  has3RdQuarterStarted?: boolean;
  /** Whether the 4th quarter has started */
  has4ThQuarterStarted?: boolean;
  /** Whether this game went into overtime */
  isOvertime?: boolean;
  /** The description of the down and distance for display purposes */
  downAndDistance?: string | null;
  /** Description of the current quarter for display purposes */
  quarterDescription?: string | null;
  /** The unique ID of the team's current home stadium */
  stadiumId?: number | null;
  /** The date and time that this game was last updated (in US Eastern Time) */
  lastUpdated?: string | null;
  /** The geographic latitude coordinate of the venue where the game is taking place */
  geoLat?: number | null;
  /** The geographic longitude coordinate of the venue where the game is taking place */
  geoLong?: number | null;
  /** The forecasted low temperature on game day at this venue (Fahrenheit) */
  forecastTempLow?: number | null;
  /** The forecasted high temperature on game day at this venue (Fahrenheit) */
  forecastTempHigh?: number | null;
  /** The forecast description on game day at this venue. */
  forecastDescription?: string | null;
  /** The forecasted wind chill on game day at this venue. */
  forecastWindChill?: number | null;
  /** The forecasted wind speed on game day at this venue. */
  forecastWindSpeed?: number | null;
  /** The sportsbook's moneyline for the away team */
  awayTeamMoneyLine?: number | null;
  /** The sportsbook's moneyline for the home team */
  homeTeamMoneyLine?: number | null;
  /** Indicates whether the game was canceled */
  canceled?: boolean | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  closed?: boolean | null;
  /**
   * The description of the most recent play/event of the game. Note: This is for display purposes
   * and does not include corresponding data points
   */
  lastPlay?: string | null;
  /** The date of the game (in US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number | null;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalHomeTeamId?: number | null;
  /** The payout on the away team's spread */
  pointSpreadAwayTeamMoneyLine?: number | null;
  /** The payout on the home team's spread */
  pointSpreadHomeTeamMoneyLine?: number | null;
  /** Unique ID of the Score/Game */
  scoreId?: number;
  /** The details of the stadium where this game is played */
  stadiumDetails?: Stadium2;
  /**
   * The status of the game. For a description of possible values, see <a
   * href="https://support.sportsdata.io/hc/en-us/articles/14287629964567-Process-Guide-Game-Status"
   * target="_blank">here.</a> For how suspended and postponed games are handled specifically, see
   * <a
   * href="https://support.sportsdata.io/hc/en-us/articles/4404845580567-Postponed-and-Rescheduled-Games"
   * target="_blank">here</a>.
   */
  status?: string | null;
  /**
   * The date and time of when the game officially ended. Note: This field is populated after the
   * game and score are finalized
   */
  gameEndDateTime?: string | null;
  /** Rotation number of home team in this game */
  homeRotationNumber?: number | null;
  /** Rotation number of away team in this game */
  awayRotationNumber?: number | null;
  /** Indicates whether this game is played in a neutral venue */
  neutralVenue?: boolean | null;
  /** The unique ID of the head referee */
  refereeId?: number | null;
  /** The sportsbook's payout for over the total points line */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** The number of timeouts remaining for the Home Team */
  homeTimeouts?: number | null;
  /** The number of timeouts remaining for the Away Team */
  awayTimeouts?: number | null;
  /** The date and time of the game (in UTC) */
  dateTimeUtc?: string | null;
  /** The total attendance for the game */
  attendance?: number;
  /** Indicates whether the game is over and the final score has been verified and closed out. */
  isClosed?: boolean | null;
};

export const score1Schema: Schema<Score1> = s.object<Score1>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optional(s.int()),
  date: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.int()),
  homeScore: s.optionalNullable(s.int()),
  channel: s.optionalNullable(s.string()),
  pointSpread: s.optionalNullable(s.float64()),
  overUnder: s.optionalNullable(s.float64()),
  quarter: s.optionalNullable(s.string()),
  timeRemaining: s.optionalNullable(s.string()),
  possession: s.optionalNullable(s.string()),
  down: s.optionalNullable(s.int()),
  distance: s.optionalNullable(s.string()),
  yardLine: s.optionalNullable(s.int()),
  yardLineTerritory: s.optionalNullable(s.string()),
  redZone: s.optionalNullable(s.string()),
  awayScoreQuarter1: s.optionalNullable(s.int()),
  awayScoreQuarter2: s.optionalNullable(s.int()),
  awayScoreQuarter3: s.optionalNullable(s.int()),
  awayScoreQuarter4: s.optionalNullable(s.int()),
  awayScoreOvertime: s.optionalNullable(s.int()),
  homeScoreQuarter1: s.optionalNullable(s.int()),
  homeScoreQuarter2: s.optionalNullable(s.int()),
  homeScoreQuarter3: s.optionalNullable(s.int()),
  homeScoreQuarter4: s.optionalNullable(s.int()),
  homeScoreOvertime: s.optionalNullable(s.int()),
  hasStarted: s.optional(s.boolean()),
  isInProgress: s.optional(s.boolean()),
  isOver: s.optional(s.boolean()),
  has1StQuarterStarted: s.optional(s.boolean()),
  has2NdQuarterStarted: s.optional(s.boolean()),
  has3RdQuarterStarted: s.optional(s.boolean()),
  has4ThQuarterStarted: s.optional(s.boolean()),
  isOvertime: s.optional(s.boolean()),
  downAndDistance: s.optionalNullable(s.string()),
  quarterDescription: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.int()),
  lastUpdated: s.optionalNullable(s.string()),
  geoLat: s.optionalNullable(s.float64()),
  geoLong: s.optionalNullable(s.float64()),
  forecastTempLow: s.optionalNullable(s.int()),
  forecastTempHigh: s.optionalNullable(s.int()),
  forecastDescription: s.optionalNullable(s.string()),
  forecastWindChill: s.optionalNullable(s.int()),
  forecastWindSpeed: s.optionalNullable(s.int()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  canceled: s.optionalNullable(s.boolean()),
  closed: s.optionalNullable(s.boolean()),
  lastPlay: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  globalGameId: s.optionalNullable(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.int()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.int()),
  scoreId: s.optional(s.int()),
  stadiumDetails: s.optional(s.lazy(() => stadium2Schema)),
  status: s.optionalNullable(s.string()),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  neutralVenue: s.optionalNullable(s.boolean()),
  refereeId: s.optionalNullable(s.int()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  homeTimeouts: s.optionalNullable(s.int()),
  awayTimeouts: s.optionalNullable(s.int()),
  dateTimeUtc: s.optionalNullable(s.string()),
  attendance: s.optional(s.int()),
  isClosed: s.optionalNullable(s.boolean()),
  _keysMap: {
    gameKey: "GameKey",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    date: "Date",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
    channel: "Channel",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    quarter: "Quarter",
    timeRemaining: "TimeRemaining",
    possession: "Possession",
    down: "Down",
    distance: "Distance",
    yardLine: "YardLine",
    yardLineTerritory: "YardLineTerritory",
    redZone: "RedZone",
    awayScoreQuarter1: "AwayScoreQuarter1",
    awayScoreQuarter2: "AwayScoreQuarter2",
    awayScoreQuarter3: "AwayScoreQuarter3",
    awayScoreQuarter4: "AwayScoreQuarter4",
    awayScoreOvertime: "AwayScoreOvertime",
    homeScoreQuarter1: "HomeScoreQuarter1",
    homeScoreQuarter2: "HomeScoreQuarter2",
    homeScoreQuarter3: "HomeScoreQuarter3",
    homeScoreQuarter4: "HomeScoreQuarter4",
    homeScoreOvertime: "HomeScoreOvertime",
    hasStarted: "HasStarted",
    isInProgress: "IsInProgress",
    isOver: "IsOver",
    has1StQuarterStarted: "Has1stQuarterStarted",
    has2NdQuarterStarted: "Has2ndQuarterStarted",
    has3RdQuarterStarted: "Has3rdQuarterStarted",
    has4ThQuarterStarted: "Has4thQuarterStarted",
    isOvertime: "IsOvertime",
    downAndDistance: "DownAndDistance",
    quarterDescription: "QuarterDescription",
    stadiumId: "StadiumID",
    lastUpdated: "LastUpdated",
    geoLat: "GeoLat",
    geoLong: "GeoLong",
    forecastTempLow: "ForecastTempLow",
    forecastTempHigh: "ForecastTempHigh",
    forecastDescription: "ForecastDescription",
    forecastWindChill: "ForecastWindChill",
    forecastWindSpeed: "ForecastWindSpeed",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    canceled: "Canceled",
    closed: "Closed",
    lastPlay: "LastPlay",
    day: "Day",
    dateTime: "DateTime",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pointSpreadAwayTeamMoneyLine: "PointSpreadAwayTeamMoneyLine",
    pointSpreadHomeTeamMoneyLine: "PointSpreadHomeTeamMoneyLine",
    scoreId: "ScoreID",
    stadiumDetails: "StadiumDetails",
    status: "Status",
    gameEndDateTime: "GameEndDateTime",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    neutralVenue: "NeutralVenue",
    refereeId: "RefereeID",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    homeTimeouts: "HomeTimeouts",
    awayTimeouts: "AwayTimeouts",
    dateTimeUtc: "DateTimeUTC",
    attendance: "Attendance",
    isClosed: "IsClosed",
  },
});
