import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResult3Schema, type GameOddResult3 } from "./game-odd-result3.js";
import { periodSchema, type Period } from "./period.js";

export type GameInfoResult3 = {
  /** The unique ID of this game */
  gameId?: number;
  /** The NHL season of the game */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number;
  /** The day that the game is scheduled to be played */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/SO, F/OT,
   * Postponed, Canceled, NotNecessary
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
   * A globally unique ID for this game. This value is guaranteed to be unique across all
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
  globalTeamHomeTeamId?: number | null;
  /** List of Pregame GameOdds from different sportsbooks with results */
  pregameOdds?: GameOddResult3[];
  /**
   * Total number of goals the home team scored in the game (updated after game ends to allow for
   * resolving bets)
   */
  homeTeamScore?: number | null;
  /**
   * Total number of goals the away team scored in the game (updated after game ends to allow for
   * resolving bets)
   */
  awayTeamScore?: number | null;
  /** Total goals scored in the game (updated after game ends to allow for resolving bets) */
  totalScore?: number | null;
  /** The rotation number of the home team for this game */
  homeRotationNumber?: number | null;
  /** The rotation number of the away team for this game */
  awayRotationNumber?: number | null;
  /**
   * A list of Alternate Market Pregame GameOdds from different sportsbooks (e.g. 1st Period; 2nd
   * Period; etc.)
   */
  alternateMarketPregameOdds?: GameOddResult3[];
  /** Indicates the current period of the game. Possible values include: 1; 2; 3; OT; SO; NULL */
  period?: string | null;
  /**
   * Number of minutes that have passed in the current period. NOTE: this field name might be
   * misleading as it actually represents the game clock minutes which are the number of minutes
   * that have already passed in the period.
   */
  timeRemainingMinutes?: number | null;
  /**
   * Number of seconds that have passed in the current period. NOTE: this field name might be
   * misleading as it actually represents the game clock sconds which are the number of minutes that
   * have already passed in the period.
   */
  timeRemainingSeconds?: number | null;
  /** The details of the periods (including overtime if applicable) for this game */
  periods?: Period[];
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean | null;
  /** List of Live Odds from different sportsbooks with results */
  liveOdds?: GameOddResult3[];
};

export const gameInfoResult3Schema: Schema<GameInfoResult3> = s.object<GameInfoResult3>({
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
  globalTeamHomeTeamId: s.optionalNullable(s.int()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  period: s.optionalNullable(s.string()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  periods: s.optional(s.array(s.lazy(() => periodSchema))),
  isClosed: s.optionalNullable(s.boolean()),
  liveOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
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
    globalTeamHomeTeamId: "GlobalTeamHomeTeamID",
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
