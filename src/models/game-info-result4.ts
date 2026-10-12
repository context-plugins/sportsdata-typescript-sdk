import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResult4Schema, type GameOddResult4 } from "./game-odd-result4.js";
import { period1Schema, type Period1 } from "./period1.js";

export type GameInfoResult4 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The college football season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /** The week of the game related to this result */
  week?: number | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /**
   * The status of the game. Possible values include: Scheduled; InProgress; Final; F/OT; Suspended;
   * Postponed; Delayed; Canceled; Forfeit
   */
  status?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** The name of the away team */
  awayTeamName?: string | null;
  /** The name of the home team */
  homeTeamName?: string | null;
  /**
   * A globally unique ID for this game. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number | null;
  /**
   * A globally unique ID for the away team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalHomeTeamId?: number | null;
  /** List of Pregame Odds from different sportsbooks with results */
  pregameOdds?: GameOddResult4[];
  /** Score of the home team (updated after game ends to allow for resolving bets) */
  homeTeamScore?: number | null;
  /** Score of the away team (updated after game ends to allow for resolving bets) */
  awayTeamScore?: number | null;
  /**
   * The total points scored by both teams in the game tied to this event (updated after game ends
   * to allow for resolving bets)
   */
  totalScore?: number | null;
  /** Rotation number of home team for this game */
  homeRotationNumber?: number | null;
  /** Rotation number of away team for this game */
  awayRotationNumber?: number | null;
  /** List of Alternate Market Pregame Odds from different sportsbooks with results */
  alternateMarketPregameOdds?: GameOddResult4[];
  /** The current quarter in the game (Possible Values: 1; 2; 3; 4; Half; OT; F; F/OT; NULL) */
  period?: string | null;
  /** Total number of minutes remaining in the quarter */
  timeRemainingMinutes?: number | null;
  /** Total number of seconds remaining in the quarter */
  timeRemainingSeconds?: number | null;
  /** The details of the periods (quarters & overtime) for this game */
  periods?: Period1[];
  /** Indicates whether the game is over and the final score has been verified */
  isClosed?: boolean;
  /** List of Live Odds from different sportsbooks with results */
  liveOdds?: GameOddResult4[];
};

export const gameInfoResult4Schema: Schema<GameInfoResult4> = s.object<GameInfoResult4>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  week: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  awayTeamName: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  globalGameId: s.optionalNullable(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResult4Schema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResult4Schema))),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  periods: s.optional(s.array(s.lazy(() => period1Schema))),
  isClosed: s.optional(s.boolean()),
  liveOdds: s.optional(s.array(s.lazy(() => gameOddResult4Schema))),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    awayTeamName: "AwayTeamName",
    homeTeamName: "HomeTeamName",
    globalGameId: "GlobalGameID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    pregameOdds: "PregameOdds",
    homeTeamScore: "HomeTeamScore",
    awayTeamScore: "AwayTeamScore",
    totalScore: "TotalScore",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
    period: "Period",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    periods: "Periods",
    isClosed: "IsClosed",
    liveOdds: "LiveOdds",
  },
});
