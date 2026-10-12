import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSchema, type BettingMarket } from "./betting-market.js";

export type BettingEvent2 = {
  /** The unique ID assocated with the betting event */
  bettingEventId?: number;
  /** The name of this betting event */
  name?: string | null;
  /** The college football season of the game */
  season?: number | null;
  /** The ID associated with the type of betting event - Game or Future */
  bettingEventTypeId?: number;
  /** Indicates the type of betting event - Game or Future */
  bettingEventType?: string | null;
  /** The furthest forward time any book has a market set to close for this betting event */
  startDate?: string | null;
  /** The created date of this betting event */
  created?: string | null;
  /** The last updated timestamp of this betting event (US Eastern Time) */
  updated?: string | null;
  /** The unique ID of this game tied to this event */
  gameId?: number | null;
  /**
   * A globally unique ID for this game tied to this event. Note: This value is guaranteed to be
   * unique across all sports/leagues
   */
  globalGameId?: number | null;
  /** The status of the game tied to this event */
  gameStatus?: string | null;
  /** The abbreviation [Key] of the away team tied to this event */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team tied to this event */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /**
   * A globally unique ID for the away team tied this event. Note: This value is guaranteed to be
   * unique across all sports/leagues
   */
  globalAwayTeamId?: number | null;
  /**
   * A globally unique ID for the home team. Note: This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalHomeTeamId?: number | null;
  /** The away team score of the game tied to this event (post-game) */
  awayTeamScore?: number | null;
  /** The home team score of the game tied to this event (postgame) */
  homeTeamScore?: number | null;
  /**
   * The total points scored by both teams in the game tied to this event (updated after game ends
   * to allow for resolving bets)
   */
  totalScore?: number | null;
  /** The away team rotation number of the game tied to this event */
  awayRotationNumber?: number | null;
  /** Rotation number of home team tied to this event */
  homeRotationNumber?: number | null;
  /** The list of betting markets for this event */
  bettingMarkets?: BettingMarket[];
  /** The date and time the connected game starts, where applicable */
  gameStartTime?: string | null;
};

export const bettingEvent2Schema: Schema<BettingEvent2> = s.object<BettingEvent2>({
  bettingEventId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.int()),
  bettingEventTypeId: s.optional(s.int()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  gameId: s.optionalNullable(s.int()),
  globalGameId: s.optionalNullable(s.int()),
  gameStatus: s.optionalNullable(s.string()),
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
    gameId: "GameID",
    globalGameId: "GlobalGameID",
    gameStatus: "GameStatus",
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
