import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playoffAggregateScore2Schema, type PlayoffAggregateScore2 } from "./playoff-aggregate-score2.js";

export type Game17 = {
  /** The unique ID of the game */
  gameId?: number;
  /** The unique ID of the round that this game is associated with. */
  roundId?: number;
  /** The soccer regular season for which these totals apply */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /** The name of the group in which this game occurs. Note: This is used in tournaments & cups */
  group?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** The unique ID of the venue */
  venueId?: number | null;
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
  /** The week during the season/round in which this game occurs */
  week?: number | null;
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
  /** Shows which team has home field advantage. Possible values: Home; Away; Neutral */
  venueType?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeamKey?: string | null;
  /** The name of the away team */
  awayTeamName?: string | null;
  /** The country code of the away team. */
  awayTeamCountryCode?: string | null;
  /** The final score of the away team */
  awayTeamScore?: number | null;
  /** The first period score of the away team. */
  awayTeamScorePeriod1?: number | null;
  /** The second period score of the away team. */
  awayTeamScorePeriod2?: number | null;
  /** The extra time (overtime) score of the away team (if applicable). */
  awayTeamScoreExtraTime?: number | null;
  /** The penalty shootout score of the away team (if applicable). */
  awayTeamScorePenalty?: number | null;
  /** The abbreviation [Key] of the home team */
  homeTeamKey?: string | null;
  /** The name of the home team */
  homeTeamName?: string | null;
  /** The country code of the home team */
  homeTeamCountryCode?: string | null;
  /** The final score of the home team */
  homeTeamScore?: number | null;
  /** The first period score of the home team */
  homeTeamScorePeriod1?: number | null;
  /** The second period score of the home team */
  homeTeamScorePeriod2?: number | null;
  /** The extra time (overtime) score of the home team (if applicable) */
  homeTeamScoreExtraTime?: number | null;
  /** The penalty shootout score of the home team (if applicable) */
  homeTeamScorePenalty?: number | null;
  /** Payout on a bet that the away home wins */
  homeTeamMoneyLine?: number | null;
  /** Payout on a bet that the away team wins. */
  awayTeamMoneyLine?: number | null;
  /** The sportsbook's money line for a draw */
  drawMoneyLine?: number | null;
  /** Point spread for the home team */
  pointSpread?: number | null;
  /** Payout if the home team covers the spread */
  homeTeamPointSpreadPayout?: number | null;
  /** Payout if the away team covers the spread */
  awayTeamPointSpreadPayout?: number | null;
  /** The sportsbook's total goals line (over/under) for the game */
  overUnder?: number | null;
  /** The sportsbook's payout for the over bet on the total goals line */
  overPayout?: number | null;
  /** The sportsbook's payout for the under */
  underPayout?: number | null;
  /** The attendance for the game. */
  attendance?: number | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
  /** The timestamp of when this record was updated (in UTC) */
  updatedUtc?: string | null;
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
  /**
   * The added stoppage time minute the game is currently in. Note: will be null when game is not in
   * stoppage time
   */
  clockExtra?: number | null;
  /**
   * A convenient string display of the current clock with format Clock+ClockExtra (example: 90+3)
   */
  clockDisplay?: string | null;
  /**
   * Indicates whether the game is over and the final score and stats have been verified and closed
   * out
   */
  isClosed?: boolean | null;
  /** The formation for the home team (4-4-2; 4-3-3; etc.) */
  homeTeamFormation?: string | null;
  /** The formation for the away team (4-4-2, 4-3-3, etc.) */
  awayTeamFormation?: string | null;
  /**
   * Aggregate scoring information for 2-leg/home-and-home games (i.e. Champions League Round of
   * 16). Team A is determined by the first legs home team.
   */
  playoffAggregateScore?: PlayoffAggregateScore2;
};

export const game17Schema: Schema<Game17> = s.object<Game17>({
  gameId: s.optional(s.int()),
  roundId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  group: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  venueId: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  week: s.optionalNullable(s.int()),
  period: s.optionalNullable(s.string()),
  clock: s.optionalNullable(s.int()),
  winner: s.optionalNullable(s.string()),
  venueType: s.optionalNullable(s.string()),
  awayTeamKey: s.optionalNullable(s.string()),
  awayTeamName: s.optionalNullable(s.string()),
  awayTeamCountryCode: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.int()),
  awayTeamScorePeriod1: s.optionalNullable(s.int()),
  awayTeamScorePeriod2: s.optionalNullable(s.int()),
  awayTeamScoreExtraTime: s.optionalNullable(s.int()),
  awayTeamScorePenalty: s.optionalNullable(s.int()),
  homeTeamKey: s.optionalNullable(s.string()),
  homeTeamName: s.optionalNullable(s.string()),
  homeTeamCountryCode: s.optionalNullable(s.string()),
  homeTeamScore: s.optionalNullable(s.int()),
  homeTeamScorePeriod1: s.optionalNullable(s.int()),
  homeTeamScorePeriod2: s.optionalNullable(s.int()),
  homeTeamScoreExtraTime: s.optionalNullable(s.int()),
  homeTeamScorePenalty: s.optionalNullable(s.int()),
  homeTeamMoneyLine: s.optionalNullable(s.int()),
  awayTeamMoneyLine: s.optionalNullable(s.int()),
  drawMoneyLine: s.optionalNullable(s.int()),
  pointSpread: s.optionalNullable(s.float64()),
  homeTeamPointSpreadPayout: s.optionalNullable(s.int()),
  awayTeamPointSpreadPayout: s.optionalNullable(s.int()),
  overUnder: s.optionalNullable(s.float64()),
  overPayout: s.optionalNullable(s.int()),
  underPayout: s.optionalNullable(s.int()),
  attendance: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  updatedUtc: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  clockExtra: s.optionalNullable(s.int()),
  clockDisplay: s.optionalNullable(s.string()),
  isClosed: s.optionalNullable(s.boolean()),
  homeTeamFormation: s.optionalNullable(s.string()),
  awayTeamFormation: s.optionalNullable(s.string()),
  playoffAggregateScore: s.optional(s.lazy(() => playoffAggregateScore2Schema)),
  _keysMap: {
    gameId: "GameId",
    roundId: "RoundId",
    season: "Season",
    seasonType: "SeasonType",
    group: "Group",
    awayTeamId: "AwayTeamId",
    homeTeamId: "HomeTeamId",
    venueId: "VenueId",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    week: "Week",
    period: "Period",
    clock: "Clock",
    winner: "Winner",
    venueType: "VenueType",
    awayTeamKey: "AwayTeamKey",
    awayTeamName: "AwayTeamName",
    awayTeamCountryCode: "AwayTeamCountryCode",
    awayTeamScore: "AwayTeamScore",
    awayTeamScorePeriod1: "AwayTeamScorePeriod1",
    awayTeamScorePeriod2: "AwayTeamScorePeriod2",
    awayTeamScoreExtraTime: "AwayTeamScoreExtraTime",
    awayTeamScorePenalty: "AwayTeamScorePenalty",
    homeTeamKey: "HomeTeamKey",
    homeTeamName: "HomeTeamName",
    homeTeamCountryCode: "HomeTeamCountryCode",
    homeTeamScore: "HomeTeamScore",
    homeTeamScorePeriod1: "HomeTeamScorePeriod1",
    homeTeamScorePeriod2: "HomeTeamScorePeriod2",
    homeTeamScoreExtraTime: "HomeTeamScoreExtraTime",
    homeTeamScorePenalty: "HomeTeamScorePenalty",
    homeTeamMoneyLine: "HomeTeamMoneyLine",
    awayTeamMoneyLine: "AwayTeamMoneyLine",
    drawMoneyLine: "DrawMoneyLine",
    pointSpread: "PointSpread",
    homeTeamPointSpreadPayout: "HomeTeamPointSpreadPayout",
    awayTeamPointSpreadPayout: "AwayTeamPointSpreadPayout",
    overUnder: "OverUnder",
    overPayout: "OverPayout",
    underPayout: "UnderPayout",
    attendance: "Attendance",
    updated: "Updated",
    updatedUtc: "UpdatedUtc",
    globalGameId: "GlobalGameId",
    globalAwayTeamId: "GlobalAwayTeamId",
    globalHomeTeamId: "GlobalHomeTeamId",
    clockExtra: "ClockExtra",
    clockDisplay: "ClockDisplay",
    isClosed: "IsClosed",
    homeTeamFormation: "HomeTeamFormation",
    awayTeamFormation: "AwayTeamFormation",
    playoffAggregateScore: "PlayoffAggregateScore",
  },
});
