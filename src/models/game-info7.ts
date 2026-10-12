import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOdd4Schema, type GameOdd4 } from "./game-odd4.js";

export type GameInfo7 = {
  /** The unique ID of the game */
  gameId?: number;
  /** The unique ID of the round that this game is associated with */
  roundId?: number;
  /** The soccer regular season for which these totals apply */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /** The week during the season/round in which this game occurs */
  week?: number | null;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game (in UTC) */
  dateTime?: string | null;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Break, Final,
   * Awarded, Postponed, Canceled, Suspended, Start Delay, Rain Delay, No Result, & NotNecessary. If
   * a game is called off before it starts, the Status is set to Postponed, until a new date/time is
   * scheduled, at which point, the DateTime is updated, and the Status is set back to Scheduled. If
   * a game has already started, and temporarily interrupted, it's Status is set to Suspended, until
   * it either resumes, or gets postponed and replayed at a later date. If the game is at halftime,
   * then the Status will be Break. Awarded is used in cases where a game is decided on the so
   * called "green table." That means that a game was decided by the Federation/League to one team
   * for a reason. This can include situations like riots, where the opponent team gets 3:0 win
   * awarded as punishment. Awarded is also used when a club withdraws during the season from the
   * competition then all the remaining matches getting awarded 3:0.
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
  globalHomeTeamId?: number | null;
  /** List of Pregame Odds from different sportsbooks */
  pregameOdds?: GameOdd4[];
  /** List of Live Odds from different sportsbooks */
  liveOdds?: GameOdd4[];
  /** Score of the home team (updated after game ends to allow for resolving bets) */
  homeTeamScore?: number | null;
  /** Score of the away team (updated after game ends to allow for resolving bets) */
  awayTeamScore?: number | null;
  /**
   * The total combined score of both teams in the game (updated after game ends to allow for
   * resolving bets)
   */
  totalScore?: number | null;
  /**
   * List of Alternate Market GameOdds from different sportsbooks (such as 1st-half, 1st-qtr, etc)
   */
  alternateMarketPregameOdds?: GameOdd4[];
};

export const gameInfo7Schema: Schema<GameInfo7> = s.object<GameInfo7>({
  gameId: s.optional(s.int()),
  roundId: s.optional(s.int()),
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
  pregameOdds: s.optional(s.array(s.lazy(() => gameOdd4Schema))),
  liveOdds: s.optional(s.array(s.lazy(() => gameOdd4Schema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOdd4Schema))),
  _keysMap: {
    gameId: "GameId",
    roundId: "RoundId",
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
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
  },
});
