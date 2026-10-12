import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoreBasic = {
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
  /** Description of the current quarter for display purposes */
  quarterDescription?: string | null;
  /**
   * The date and time of when the game officially ended. Note: This field is populated after the
   * game and score are finalized
   */
  gameEndDateTime?: string | null;
  /** The final score of the away team */
  awayScore?: number | null;
  /** The final score of the Home Team */
  homeScore?: number | null;
  /** The unique ID of the game */
  gameId?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number | null;
  /** Unique ID of the score/game */
  scoreId?: number | null;
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameKey is
   * composed of Season; SeasonType; Week and HomeTeam. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
  /** The NFL season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
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
  /** Indicates whether the game was canceled. */
  canceled?: boolean | null;
  /** The date and time of the game (in US Eastern Time) */
  date?: string | null;
  /** The date of the game (in US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /** The date and time of the game (in UTC) */
  dateTimeUtc?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** The unique ID of the team's current home stadium */
  stadiumId?: number | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  closed?: boolean | null;
  /** The date and time that this game was last updated (in US Eastern Time) */
  lastUpdated?: string | null;
  /** Indicates whether the game is over and the final score has been verified and closed out. */
  isClosed?: boolean | null;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
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

export const scoreBasicSchema: Schema<ScoreBasic> = s.object<ScoreBasic>({
  quarter: s.optionalNullable(s.string()),
  timeRemaining: s.optionalNullable(s.string()),
  quarterDescription: s.optionalNullable(s.string()),
  gameEndDateTime: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.int()),
  homeScore: s.optionalNullable(s.int()),
  gameId: s.optionalNullable(s.int()),
  globalGameId: s.optionalNullable(s.int()),
  scoreId: s.optionalNullable(s.int()),
  gameKey: s.optionalNullable(s.string()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  canceled: s.optionalNullable(s.boolean()),
  date: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  dateTimeUtc: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  stadiumId: s.optionalNullable(s.int()),
  closed: s.optionalNullable(s.boolean()),
  lastUpdated: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  week: s.optional(s.int()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  _keysMap: {
    quarter: "Quarter",
    timeRemaining: "TimeRemaining",
    quarterDescription: "QuarterDescription",
    gameEndDateTime: "GameEndDateTime",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
    gameId: "GameID",
    globalGameId: "GlobalGameID",
    scoreId: "ScoreID",
    gameKey: "GameKey",
    season: "Season",
    seasonType: "SeasonType",
    status: "Status",
    canceled: "Canceled",
    date: "Date",
    day: "Day",
    dateTime: "DateTime",
    dateTimeUtc: "DateTimeUTC",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    stadiumId: "StadiumID",
    closed: "Closed",
    lastUpdated: "LastUpdated",
    isClosed: "IsClosed",
    week: "Week",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
