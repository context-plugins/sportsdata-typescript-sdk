import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inningSchema, type Inning } from "./inning.js";
import { seriesSchema, type Series } from "./series.js";

export type Game6 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The MLB season of the game */
  season?: number;
  /**
   * The type of season stage the game belongs to, e.g. Regular season, Post-season. For a
   * description of possible values and how they work, see <a
   * href="https://support.sportsdata.io/hc/en-us/articles/15196612633623-Process-Guide-Season-Types-and-Parameters"
   * target="_blank">here.
   */
  seasonType?: number;
  /**
   * The status of the game. For a description of possible values, see <a
   * href="https://support.sportsdata.io/hc/en-us/articles/14287629964567-Process-Guide-Game-Status"
   * target="_blank">here.</a> For how suspended and postponed games are handled specifically, see
   * <a
   * href="https://support.sportsdata.io/hc/en-us/articles/4404845580567-Postponed-and-Rescheduled-Games"
   * target="_blank">here</a>.
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
  /** The unique TeamID of the away team */
  awayTeamId?: number;
  /** The unique ID of the home team */
  homeTeamId?: number;
  /**
   * The GameID of the game that was rescheduled from this game. This only pertains to postponed
   * games that require rescheduling.
   */
  rescheduledGameId?: number | null;
  /** The unique ID of the stadium */
  stadiumId?: number | null;
  /** The television station broadcasting the game */
  channel?: string | null;
  /**
   * The inning that the game is currently in, or the inning in which the game ended. Possible
   * values include: NULL, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, etc)
   */
  inning?: number | null;
  /**
   * The inning half that the game is currently in; or the inning half in which the game ended
   * (possible values: T; B; E: M: NULL)
   */
  inningHalf?: string | null;
  /** Number of runs scored by the away team in the game */
  awayTeamRuns?: number | null;
  /** Number of runs scored by the home team in the game */
  homeTeamRuns?: number | null;
  /** Total hits by the away team in the game */
  awayTeamHits?: number | null;
  /** Total hits by the home team in the game */
  homeTeamHits?: number | null;
  /** Total errors committed by the away team in the game */
  awayTeamErrors?: number | null;
  /** Total errors committed by the home team in the game */
  homeTeamErrors?: number | null;
  /** The PlayerID of the pitcher who recorded the win in the game */
  winningPitcherId?: number | null;
  /** The PlayerID of the losing pitcher in the game */
  losingPitcherId?: number | null;
  /** The PlayerID of the pitcher who recorded the save in the game */
  savingPitcherId?: number | null;
  /** Total number of people who attended the game */
  attendance?: number | null;
  /** The PlayerID of the away team's probable pitcher */
  awayTeamProbablePitcherId?: number | null;
  /** The PlayerID of the home team's probable pitcher */
  homeTeamProbablePitcherId?: number | null;
  /** The number of outs recorded in the current inning of the game */
  outs?: number | null;
  /** The number of balls thrown for the current at bat */
  balls?: number | null;
  /** The number of strikes thrown for the current at bat */
  strikes?: number | null;
  /** The PlayerID of the current pitcher */
  currentPitcherId?: number | null;
  /** The PlayerID of the current hitter */
  currentHitterId?: number | null;
  /** The PlayerID of the away team's starting pitcher */
  awayTeamStartingPitcherId?: number | null;
  /** The PlayerID of the home team starting pitcher in the game */
  homeTeamStartingPitcherId?: number | null;
  /** The TeamID of the current pitcher's team */
  currentPitchingTeamId?: number | null;
  /** The TeamID of the current hitter's team */
  currentHittingTeamId?: number | null;
  /**
   * The consensus Run Line at game start from the perspective of the HomeTeam (in the Game table,
   * the PointSpread field's negative numbers indicate the HomeTeam is favored; positive numbers
   * indicate the AwayTeam is favored. Note that this rule does not hold in betting-related tables,
   * where the run line is contingent on the bet line). Note: In MLB, Point Spread may also be
   * referred to as Run Line
   */
  pointSpread?: number | null;
  /** The oddsmaker total points line at game start */
  overUnder?: number | null;
  /** Moneyline from the perspective of the away team */
  awayTeamMoneyLine?: number | null;
  /** Moneyline from the perspective of the home team */
  homeTeamMoneyLine?: number | null;
  /** The forecasted low temperature on game day at this venue (in Fahrenheit) */
  forecastTempLow?: number | null;
  /** The forecasted high temperature on game day at this venue (in Fahrenheit) */
  forecastTempHigh?: number | null;
  /**
   * The description of the weather forecast. Posible values include: Broken Clouds, Clear Sky, Few
   * Clouds, Heavy Intensity Rain, Light Rain, Moderate Rain, Mostly Cloudy, Mostly Sunny, Overcast
   * Clouds, Partly Cloudy, Scattered Clouds, Showers, Thunderstorms
   */
  forecastDescription?: string | null;
  /** The forecasted wind chill on game day at this venue. */
  forecastWindChill?: number | null;
  /** The forecasted wind speed on game day at this venue. */
  forecastWindSpeed?: number | null;
  /**
   * The wind direction isn't baseball specific. It refers to the direction that the wind is coming
   * from. 90 would be wind coming from the east. 180 is wind from the south. 270 is a wind from the
   * west ... and so on.
   */
  forecastWindDirection?: number | null;
  /**
   * The GameID of the originally scheduled, postponed game, that this game was rescheduled from.
   * This only pertains to games that are scheduled as "make up" games.
   */
  rescheduledFromGameId?: number | null;
  /** Indicates if there is a runner on first base */
  runnerOnFirst?: boolean | null;
  /** Indicates if there is a runner on second base */
  runnerOnSecond?: boolean | null;
  /** Indicates if there is a runner on third base */
  runnerOnThird?: boolean | null;
  /** The first and last name of the away team's starting pitcher for the game */
  awayTeamStartingPitcher?: string | null;
  /** The first and last name of the home team starting pitcher for the game */
  homeTeamStartingPitcher?: string | null;
  /** Indicates the current pitcher's name */
  currentPitcher?: string | null;
  /** Indicates the current hitter's name */
  currentHitter?: string | null;
  /** The name of the pitcher who recorded the win in the game */
  winningPitcher?: string | null;
  /** The first and last name of the losing pitcher in the game */
  losingPitcher?: string | null;
  /** The name of the pitcher who recorded the save in the game */
  savingPitcher?: string | null;
  /** The PlayerID of the hitter due up first from the current hitter */
  dueUpHitterId1?: number | null;
  /** The PlayerID of the hitter due up second from the current hitter */
  dueUpHitterId2?: number | null;
  /** The PlayerID of the hitter due up third from the current hitter */
  dueUpHitterId3?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalAwayTeamId?: number;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number;
  /** The moneyline payout odds when betting on the away team with the run line */
  pointSpreadAwayTeamMoneyLine?: number | null;
  /** The moneyline payout odds when betting on the home team with the run line */
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
  /** The date and time of the late update made to this record (in US Eastern Time) */
  updated?: string | null;
  /** The inning details associated with the game */
  innings?: Inning[];
  /** The date and time that the game ended in US Eastern Time */
  gameEndDateTime?: string | null;
  /** Rotation number of home team for this game */
  homeRotationNumber?: number | null;
  /** Rotation number of away team for this game */
  awayRotationNumber?: number | null;
  /**
   * Indicates whether this game is played in a neutral venue. Note: Neutral = True, not neutral =
   * False
   */
  neutralVenue?: boolean | null;
  /**
   * The current status of the inning for display purposes (possible values: Top 2, Mid 2, Bot 2,
   * End 2, etc)
   */
  inningDescription?: string | null;
  /** The sportsbook's payout for the over */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /**
   * Contains relevant series data for postseason series only - HomeTeamWins; AwayTeamWins;
   * GameNumber; and MaxLength
   */
  seriesInfo?: Series;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
  /**
   * Indicates whether the home team will use an opener as the starting pitcher. NOTE: An opener is
   * a pitcher (typically a relief pitcher) that is only scheduled to pitch the first 1-3 innings of
   * the game
   */
  homeTeamOpener?: boolean | null;
  /**
   * Indicates whether the away team will use an opener as the starting pitcher.. NOTE: An opener is
   * a pitcher (typically a relief pitcher) that is only scheduled to pitch the first 1-3 innings of
   * the game
   */
  awayTeamOpener?: boolean | null;
  /**
   * The date a game that was suspended in play will be resumed for play. Useful for tracking when a
   * Suspended game will return to an InProgress status.
   */
  suspensionResumeDay?: string | null;
  /**
   * The date and start-time that the suspended in play game will be resumed for play. Useful for
   * tracking when a Suspended game will return to an InProgress status.
   */
  suspensionResumeDateTime?: string | null;
};

export const game6Schema: Schema<Game6> = s.object<Game6>({
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
  rescheduledGameId: s.optionalNullable(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  channel: s.optionalNullable(s.string()),
  inning: s.optionalNullable(s.int()),
  inningHalf: s.optionalNullable(s.string()),
  awayTeamRuns: s.optionalNullable(s.int()),
  homeTeamRuns: s.optionalNullable(s.int()),
  awayTeamHits: s.optionalNullable(s.int()),
  homeTeamHits: s.optionalNullable(s.int()),
  awayTeamErrors: s.optionalNullable(s.int()),
  homeTeamErrors: s.optionalNullable(s.int()),
  winningPitcherId: s.optionalNullable(s.int()),
  losingPitcherId: s.optionalNullable(s.int()),
  savingPitcherId: s.optionalNullable(s.int()),
  attendance: s.optionalNullable(s.int()),
  awayTeamProbablePitcherId: s.optionalNullable(s.int()),
  homeTeamProbablePitcherId: s.optionalNullable(s.int()),
  outs: s.optionalNullable(s.int()),
  balls: s.optionalNullable(s.int()),
  strikes: s.optionalNullable(s.int()),
  currentPitcherId: s.optionalNullable(s.int()),
  currentHitterId: s.optionalNullable(s.int()),
  awayTeamStartingPitcherId: s.optionalNullable(s.int()),
  homeTeamStartingPitcherId: s.optionalNullable(s.int()),
  currentPitchingTeamId: s.optionalNullable(s.int()),
  currentHittingTeamId: s.optionalNullable(s.int()),
  pointSpread: s.optionalNullable(s.float64()),
  overUnder: s.optionalNullable(s.float64()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  forecastTempLow: s.optionalNullable(s.int()),
  forecastTempHigh: s.optionalNullable(s.int()),
  forecastDescription: s.optionalNullable(s.string()),
  forecastWindChill: s.optionalNullable(s.int()),
  forecastWindSpeed: s.optionalNullable(s.int()),
  forecastWindDirection: s.optionalNullable(s.int()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  runnerOnFirst: s.optionalNullable(s.boolean()),
  runnerOnSecond: s.optionalNullable(s.boolean()),
  runnerOnThird: s.optionalNullable(s.boolean()),
  awayTeamStartingPitcher: s.optionalNullable(s.string()),
  homeTeamStartingPitcher: s.optionalNullable(s.string()),
  currentPitcher: s.optionalNullable(s.string()),
  currentHitter: s.optionalNullable(s.string()),
  winningPitcher: s.optionalNullable(s.string()),
  losingPitcher: s.optionalNullable(s.string()),
  savingPitcher: s.optionalNullable(s.string()),
  dueUpHitterId1: s.optionalNullable(s.int()),
  dueUpHitterId2: s.optionalNullable(s.int()),
  dueUpHitterId3: s.optionalNullable(s.int()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  pointSpreadAwayTeamMoneyLine: s.optionalNullable(s.int()),
  pointSpreadHomeTeamMoneyLine: s.optionalNullable(s.int()),
  lastPlay: s.optionalNullable(s.string()),
  isClosed: s.optional(s.boolean()),
  updated: s.optionalNullable(s.string()),
  innings: s.optional(s.array(s.lazy(() => inningSchema))),
  gameEndDateTime: s.optionalNullable(s.string()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  neutralVenue: s.optionalNullable(s.boolean()),
  inningDescription: s.optionalNullable(s.string()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  seriesInfo: s.optional(s.lazy(() => seriesSchema)),
  dateTimeUtc: s.optionalNullable(s.string()),
  homeTeamOpener: s.optionalNullable(s.boolean()),
  awayTeamOpener: s.optionalNullable(s.boolean()),
  suspensionResumeDay: s.optionalNullable(s.string()),
  suspensionResumeDateTime: s.optionalNullable(s.string()),
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
    rescheduledGameId: "RescheduledGameID",
    stadiumId: "StadiumID",
    channel: "Channel",
    inning: "Inning",
    inningHalf: "InningHalf",
    awayTeamRuns: "AwayTeamRuns",
    homeTeamRuns: "HomeTeamRuns",
    awayTeamHits: "AwayTeamHits",
    homeTeamHits: "HomeTeamHits",
    awayTeamErrors: "AwayTeamErrors",
    homeTeamErrors: "HomeTeamErrors",
    winningPitcherId: "WinningPitcherID",
    losingPitcherId: "LosingPitcherID",
    savingPitcherId: "SavingPitcherID",
    attendance: "Attendance",
    awayTeamProbablePitcherId: "AwayTeamProbablePitcherID",
    homeTeamProbablePitcherId: "HomeTeamProbablePitcherID",
    outs: "Outs",
    balls: "Balls",
    strikes: "Strikes",
    currentPitcherId: "CurrentPitcherID",
    currentHitterId: "CurrentHitterID",
    awayTeamStartingPitcherId: "AwayTeamStartingPitcherID",
    homeTeamStartingPitcherId: "HomeTeamStartingPitcherID",
    currentPitchingTeamId: "CurrentPitchingTeamID",
    currentHittingTeamId: "CurrentHittingTeamID",
    pointSpread: "PointSpread",
    overUnder: "OverUnder",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    forecastTempLow: "ForecastTempLow",
    forecastTempHigh: "ForecastTempHigh",
    forecastDescription: "ForecastDescription",
    forecastWindChill: "ForecastWindChill",
    forecastWindSpeed: "ForecastWindSpeed",
    forecastWindDirection: "ForecastWindDirection",
    rescheduledFromGameId: "RescheduledFromGameID",
    runnerOnFirst: "RunnerOnFirst",
    runnerOnSecond: "RunnerOnSecond",
    runnerOnThird: "RunnerOnThird",
    awayTeamStartingPitcher: "AwayTeamStartingPitcher",
    homeTeamStartingPitcher: "HomeTeamStartingPitcher",
    currentPitcher: "CurrentPitcher",
    currentHitter: "CurrentHitter",
    winningPitcher: "WinningPitcher",
    losingPitcher: "LosingPitcher",
    savingPitcher: "SavingPitcher",
    dueUpHitterId1: "DueUpHitterID1",
    dueUpHitterId2: "DueUpHitterID2",
    dueUpHitterId3: "DueUpHitterID3",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pointSpreadAwayTeamMoneyLine: "PointSpreadAwayTeamMoneyLine",
    pointSpreadHomeTeamMoneyLine: "PointSpreadHomeTeamMoneyLine",
    lastPlay: "LastPlay",
    isClosed: "IsClosed",
    updated: "Updated",
    innings: "Innings",
    gameEndDateTime: "GameEndDateTime",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    neutralVenue: "NeutralVenue",
    inningDescription: "InningDescription",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    seriesInfo: "SeriesInfo",
    dateTimeUtc: "DateTimeUTC",
    homeTeamOpener: "HomeTeamOpener",
    awayTeamOpener: "AwayTeamOpener",
    suspensionResumeDay: "SuspensionResumeDay",
    suspensionResumeDateTime: "SuspensionResumeDateTime",
  },
});
