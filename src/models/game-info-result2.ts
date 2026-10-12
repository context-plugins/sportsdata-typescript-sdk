import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResult2Schema, type GameOddResult2 } from "./game-odd-result2.js";
import { inningSchema, type Inning } from "./inning.js";

export type GameInfoResult2 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The MLB season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
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
  /** The unique TeamID of the away team */
  awayTeamId?: number | null;
  /** The unique TeamID of the home team */
  homeTeamId?: number | null;
  /** The abbreviation [Key] of the away team */
  awayTeamName?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeamName?: string | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number | null;
  /** List of Pregame GameOdds from different sportsbooks with results */
  pregameOdds?: GameOddResult2[];
  /** Score of the home team (updated after game ends to allow for resolving bets) */
  homeTeamScore?: number | null;
  /** Score of the away team (updated after game ends to allow for resolving bets) */
  awayTeamScore?: number | null;
  /** The combined scores of the home and away team of the game tied to this event (post-game) */
  totalScore?: number | null;
  /** Rotation number of home team for this game */
  homeRotationNumber?: number | null;
  /** Rotation number of away team for this game */
  awayRotationNumber?: number | null;
  /** List of Alternate Market Game Odds from different sportsbooks with results */
  alternateMarketPregameOdds?: GameOddResult2[];
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
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean;
  /** The inning details associated with the game */
  innings?: Inning[];
  /** Shows a list of live odds from different sportsbooks with results */
  liveOdds?: GameOddResult2[];
};

export const gameInfoResult2Schema: Schema<GameInfoResult2> = s.object<GameInfoResult2>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  awayTeamName: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResult2Schema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResult2Schema))),
  inning: s.optionalNullable(s.int()),
  inningHalf: s.optionalNullable(s.string()),
  isClosed: s.optional(s.boolean()),
  innings: s.optional(s.array(s.lazy(() => inningSchema))),
  liveOdds: s.optional(s.array(s.lazy(() => gameOddResult2Schema))),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
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
    inning: "Inning",
    inningHalf: "InningHalf",
    isClosed: "IsClosed",
    innings: "Innings",
    liveOdds: "LiveOdds",
  },
});
