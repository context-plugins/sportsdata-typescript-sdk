import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddSchema, type GameOdd } from "./game-odd.js";

export type GameInfo = {
  /** Unique ID of the score/game */
  scoreId?: number;
  /** The year of the season during which this game occurs. */
  season?: number;
  /**
   * The type of season that this game corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star).
   */
  seasonType?: number;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number | null;
  /** The date of the game (in US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /**
   * The status of the game. For a description of possible values, see <a
   * href="https://support.sportsdata.io/hc/en-us/articles/14287629964567-Process-Guide-Game-Status"
   * target="_blank">here.</a> For how suspended and postponed games are handled specifically, see
   * <a
   * href="https://support.sportsdata.io/hc/en-us/articles/4404845580567-Postponed-and-Rescheduled-Games"
   * target="_blank">here</a>.
   */
  status?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** The name of the away team */
  awayTeamName?: string | null;
  /** The name of the home team. */
  homeTeamName?: string | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number;
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
  /** List of Pregame Odds from different sportsbooks */
  pregameOdds?: GameOdd[];
  /** List of Live Odds from different sportsbooks */
  liveOdds?: GameOdd[];
  /** Score of the home team (updated after game ends to allow for resolving bets) */
  homeTeamScore?: number | null;
  /** Score of the away team (updated after game ends to allow for resolving bets) */
  awayTeamScore?: number | null;
  /**
   * The total points scored by both teams in the game tied to this event (updated after game ends
   * to allow for resulting bets)
   */
  totalScore?: number | null;
  /** Rotation Number of home team in this game */
  homeRotationNumber?: number | null;
  /** Rotation Number of away team in this game */
  awayRotationNumber?: number | null;
  /** List of Alternate Market Pregame Odds from different sportsbooks */
  alternateMarketPregameOdds?: GameOdd[];
  /** The unique ID of this game */
  gameId?: number;
};

export const gameInfoSchema: Schema<GameInfo> = s.object<GameInfo>({
  scoreId: s.optional(s.int()),
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
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddSchema))),
  liveOdds: s.optional(s.array(s.lazy(() => gameOddSchema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  homeRotationNumber: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddSchema))),
  gameId: s.optional(s.int()),
  _keysMap: {
    scoreId: "ScoreId",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
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
    gameId: "GameId",
  },
});
