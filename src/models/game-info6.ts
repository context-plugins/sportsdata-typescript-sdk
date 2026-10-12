import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOdd3Schema, type GameOdd3 } from "./game-odd3.js";

export type GameInfo6 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The WNBA season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number;
  /** The day that the game is scheduled to be played (US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (US Eastern Time) */
  dateTime?: string | null;
  /**
   * Indicates the game's status. Possible values include: Scheduled; InProgress; Final; F/OT;
   * Suspended; Postponed; Delayed; Canceled; Forfeit; NotNecessary
   */
  status?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** The full name of the away team (Ex. Indiana Fever, Phoenix Mercruy, New York Liberty) */
  awayTeamName?: string | null;
  /** The full name of the home team (Ex. Indiana Fever, Phoenix Mercruy, New York Liberty) */
  homeTeamName?: string | null;
  /**
   * A globally unique ID for the game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number;
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
  /** List of most recent Pregame odds from different sportsbooks */
  pregameOdds?: GameOdd3[];
  /**
   * Total number of points the home team scored in the game (updated after game ends to allow for
   * resolving bets)
   */
  homeTeamScore?: number | null;
  /**
   * Total number of points the away team scored in the game (updated after game ends to allow for
   * resolving bets)
   */
  awayTeamScore?: number | null;
  /** Total scored points in the game (updated after game ends to allow for resolving bets) */
  totalScore?: number | null;
};

export const gameInfo6Schema: Schema<GameInfo6> = s.object<GameInfo6>({
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
  pregameOdds: s.optional(s.array(s.lazy(() => gameOdd3Schema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
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
  },
});
