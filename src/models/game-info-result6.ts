import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gameOddResult3Schema, type GameOddResult3 } from "./game-odd-result3.js";

export type GameInfoResult6 = {
  /** The unique ID of the game */
  gameId?: number;
  /** The soccer regular season for which these totals apply */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
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
  /** List of Pregame GameOdds from different sportsbooks with results */
  pregameOdds?: GameOddResult3[];
  /** Score of the home team (updated after game ends to allow for resolving bets) */
  homeTeamScore?: number | null;
  /** Score of the away team (updated after game ends to allow for resolving bets) */
  awayTeamScore?: number | null;
  /**
   * The total combined score of both teams in the game (updated after game ends to allow for
   * resolving bets)
   */
  totalScore?: number | null;
  /** The unique ID of the round that this game is associated with */
  roundId?: number;
  /** The week during the season/round in which this game occurs */
  week?: number | null;
  /**
   * List of Alternate Market GameOdds from different sportsbooks (such as 1st-half; 1st-qtr; etc)
   */
  alternateMarketPregameOdds?: GameOddResult3[];
  /**
   * The final period of the game. Possible values: Regular = Game ended in 90 minutes of regular
   * time; ExtraTime = Game ended in extra time / overtime; PenaltyShootout = Game finished in
   * penalty shootout time
   */
  period?: string | null;
  /**
   * The clock for the game if it is in progress. Note: if the game hasn't started or the game is
   * over; then this will be NULL
   */
  clock?: number | null;
  /** The winner of the game. Possible values: AwayTeam; HomeTeam; Draw */
  winner?: string | null;
  /** The first period score of the away team. */
  awayTeamScorePeriod1?: number | null;
  /** The second period score of the away team. */
  awayTeamScorePeriod2?: number | null;
  /** The extra time (overtime) score of the away team (if applicable). */
  awayTeamScoreExtraTime?: number | null;
  /** The penalty shootout score of the away team (if applicable). */
  awayTeamScorePenalty?: number | null;
  /** The first period score of the home team */
  homeTeamScorePeriod1?: number | null;
  /** The second period score of the home team */
  homeTeamScorePeriod2?: number | null;
  /** The extra time (overtime) score of the home team (if applicable) */
  homeTeamScoreExtraTime?: number | null;
  /** The penalty shootout score of the home team (if applicable) */
  homeTeamScorePenalty?: number | null;
  /**
   * The added stoppage time minute the game is currently in. Note: will be null when game is not in
   * stoppage time
   */
  clockExtra?: number | null;
  /** A convenient string display of the current clock with format Clock+ClockExtra (ex 90+3) */
  clockDisplay?: string | null;
  /**
   * Indicates whether the game is over and the final score and stats have been verified and closed
   * out
   */
  isClosed?: boolean | null;
  /** List of Live Odds from different sportsbooks with results */
  liveOdds?: GameOddResult3[];
};

export const gameInfoResult6Schema: Schema<GameInfoResult6> = s.object<GameInfoResult6>({
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
  pregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  homeTeamScore: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  roundId: s.optional(s.int()),
  week: s.optionalNullable(s.int()),
  alternateMarketPregameOdds: s.optional(s.array(s.lazy(() => gameOddResult3Schema))),
  period: s.optionalNullable(s.string()),
  clock: s.optionalNullable(s.int()),
  winner: s.optionalNullable(s.string()),
  awayTeamScorePeriod1: s.optionalNullable(s.int()),
  awayTeamScorePeriod2: s.optionalNullable(s.int()),
  awayTeamScoreExtraTime: s.optionalNullable(s.int()),
  awayTeamScorePenalty: s.optionalNullable(s.int()),
  homeTeamScorePeriod1: s.optionalNullable(s.int()),
  homeTeamScorePeriod2: s.optionalNullable(s.int()),
  homeTeamScoreExtraTime: s.optionalNullable(s.int()),
  homeTeamScorePenalty: s.optionalNullable(s.int()),
  clockExtra: s.optionalNullable(s.int()),
  clockDisplay: s.optionalNullable(s.string()),
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
    globalHomeTeamId: "GlobalHomeTeamID",
    pregameOdds: "PregameOdds",
    homeTeamScore: "HomeTeamScore",
    awayTeamScore: "AwayTeamScore",
    totalScore: "TotalScore",
    roundId: "RoundID",
    week: "Week",
    alternateMarketPregameOdds: "AlternateMarketPregameOdds",
    period: "Period",
    clock: "Clock",
    winner: "Winner",
    awayTeamScorePeriod1: "AwayTeamScorePeriod1",
    awayTeamScorePeriod2: "AwayTeamScorePeriod2",
    awayTeamScoreExtraTime: "AwayTeamScoreExtraTime",
    awayTeamScorePenalty: "AwayTeamScorePenalty",
    homeTeamScorePeriod1: "HomeTeamScorePeriod1",
    homeTeamScorePeriod2: "HomeTeamScorePeriod2",
    homeTeamScoreExtraTime: "HomeTeamScoreExtraTime",
    homeTeamScorePenalty: "HomeTeamScorePenalty",
    clockExtra: "ClockExtra",
    clockDisplay: "ClockDisplay",
    isClosed: "IsClosed",
    liveOdds: "LiveOdds",
  },
});
