import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSchema, type BettingMarket } from "./betting-market.js";

export type BettingEvent = {
  /** The unique ID assocated with the betting event */
  bettingEventId?: number;
  /** The name of the betting event */
  name?: string | null;
  /** The NFL season of the betting event */
  season?: number | null;
  /** The ID associated with the type of betting event */
  bettingEventTypeId?: number;
  /** Indicates the type of betting event - Game or Future */
  bettingEventType?: string | null;
  /** The furthest forward time any book has a market set to close for this betting event */
  startDate?: string | null;
  /** The date and time when this betting event was created in US Eastern Time */
  created?: string | null;
  /** The date and time of the last update made to this betting event (in US Eastern Time) */
  updated?: string | null;
  /**
   * ScoreID has been superseded by GameID and should not be used in any new integrations. Existing
   * integrations can be updated to use GameID instead, so that they are consistent with all other
   * sports.
   */
  scoreId?: number | null;
  /**
   * A globally unique ID for the game tied to this betting event. This value is guaranteed to be
   * unique across all sports/leagues
   */
  globalScoreId?: number | null;
  /** The status of the game tied to this betting event */
  gameStatus?: string | null;
  /** The quarter of the game tied to this event */
  quarter?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the Home Team */
  homeTeam?: string | null;
  /** The unique TeamID of the away team tied to this BettingEvent */
  awayTeamId?: number | null;
  /** The unique TeamID of the home team tied to this BettingEvent */
  homeTeamId?: number | null;
  /**
   * A globally unique ID for the away team tied to this BettingEvent This value is guaranteed to be
   * unique across all sports/leagues
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team tied to this BettingEvent. This value is guaranteed to
   * be unique across all sports/leagues.
   */
  globalHomeTeamId?: number | null;
  /**
   * Score of the away team tied to this betting event (updated after game ends to allow for
   * resolving bets)
   */
  awayTeamScore?: number | null;
  /**
   * Score of the home team tied to this betting event (updated after game ends to allow for
   * resolving bets)
   */
  homeTeamScore?: number | null;
  /**
   * The total points scored by both teams in the game tied to this event (updated after game ends
   * to allow for resulting bets)
   */
  totalScore?: number | null;
  /** Rotation number of away team for this game */
  awayRotationNumber?: number | null;
  /** Rotation number of home team for this game */
  homeRotationNumber?: number | null;
  /** The list of betting markets for this event */
  bettingMarkets?: BettingMarket[];
  /** The date and time the game starts */
  gameStartTime?: string | null;
};

export const bettingEventSchema: Schema<BettingEvent> = s.object<BettingEvent>({
  bettingEventId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.int()),
  bettingEventTypeId: s.optional(s.int()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  scoreId: s.optionalNullable(s.int()),
  globalScoreId: s.optionalNullable(s.int()),
  gameStatus: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  globalAwayTeamId: s.optionalNullable(s.int()),
  globalHomeTeamId: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  totalScore: s.optionalNullable(s.int()),
  awayRotationNumber: s.optionalNullable(s.int()),
  homeRotationNumber: s.optionalNullable(s.int()),
  bettingMarkets: s.optional(s.array(s.lazy(() => bettingMarketSchema))),
  gameStartTime: s.optionalNullable(s.string()),
  _keysMap: {
    bettingEventId: "BettingEventID",
    name: "Name",
    season: "Season",
    bettingEventTypeId: "BettingEventTypeID",
    bettingEventType: "BettingEventType",
    startDate: "StartDate",
    created: "Created",
    updated: "Updated",
    scoreId: "ScoreID",
    globalScoreId: "GlobalScoreID",
    gameStatus: "GameStatus",
    quarter: "Quarter",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    totalScore: "TotalScore",
    awayRotationNumber: "AwayRotationNumber",
    homeRotationNumber: "HomeRotationNumber",
    bettingMarkets: "BettingMarkets",
    gameStartTime: "GameStartTime",
  },
});
