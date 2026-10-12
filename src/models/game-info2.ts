import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOdd1Schema, type GameOdd1 } from "./game-odd1.js";

export type GameInfo2 = {
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
  /** The unique ID of the home team */
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
  /** List of Pregame GameOdds from different sportsbooks */
  pregameOdds?: GameOdd1[];
  /** Shows a list of live odds from different sportsbooks */
  liveOdds?: GameOdd1[];
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
  /** List of Alternate Market Game Odds from different sportsbooks. */
  alternateMarketPregameOdds?: GameOdd1[];
};

export const gameInfo2Schema: Schema<GameInfo2> = s.object<GameInfo2>({
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
  pregameOdds: s.optional(s.array(s.lazy(() => gameOdd1Schema))),
  liveOdds: s.optional(s.array(s.lazy(() => gameOdd1Schema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOdd1Schema))),
  _keysMap: {
    gameId: "GameId",
    season: "Season",
    seasonType: "SeasonType",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    awayTeamId: "AwayTeamId",
    homeTeamId: "HomeTeamId",
    awayTeamName: "AwayTeamName",
    homeTeamName: "HomeTeamName",
    globalGameId: "GlobalGameId",
    globalAwayTeamId: "GlobalAwayTeamId",
    globalHomeTeamId: "GlobalHomeTeamId",
    pregameOdds: "PregameOdds",
    liveOdds: "LiveOdds",
    homeTeamScore: "HomeTeamScore",
    awayTeamScore: "AwayTeamScore",
    totalScore: "TotalScore",
    homeRotationNumber: "HomeRotationNumber",
    awayRotationNumber: "AwayRotationNumber",
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
  },
});
