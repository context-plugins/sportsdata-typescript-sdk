import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOdd1Schema, type GameOdd1 } from "./game-odd1.js";

export type GameInfo1 = {
  /** The unique ID of the game. */
  gameId?: number;
  /** The NBA season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition)
   */
  seasonType?: number;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game */
  dateTime?: string | null;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/OT,
   * Suspended, Postponed, Delayed, Canceled, Forfeit, NotNecessary
   */
  status?: string | null;
  /** The unique ID of the away team */
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
  /** The rotation number of the home team for this game */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number | null;
  /** List of Pregame GameOdds from different sportsbooks */
  pregameOdds?: GameOdd1[];
  /** List of Live GameOdds from different sportsbooks */
  liveOdds?: GameOdd1[];
  /**
   * Total points scored by the home team in the game (updated after the game ends to allow for
   * resolving bets)
   */
  homeTeamScore?: number | null;
  /**
   * Total number of points the away team scored in the game (updated after game ends to allow for
   * resolving bets)
   */
  awayTeamScore?: number | null;
  /**
   * The total amount of points scored in the game by both teams. Updated after the game ends to
   * allow for resulting bets
   */
  totalScore?: number | null;
  /** The Rotation number of the home team for this game */
  homeRotationNumber?: number | null;
  /** The rotation number of the away team for this game */
  awayRotationNumber?: number | null;
  /**
   * A list of Alternate Market Pregame GameOdds from different sportsbooks (such as 1st-half;
   * 1st-qtr; etc)
   */
  alternateMarketPregameOdds?: GameOdd1[];
};

export const gameInfo1Schema: Schema<GameInfo1> = s.object<GameInfo1>({
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
