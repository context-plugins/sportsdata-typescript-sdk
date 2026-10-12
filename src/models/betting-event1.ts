import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarketSchema, type BettingMarket } from "./betting-market.js";

export type BettingEvent1 = {
  /** The unique ID associated with the betting event */
  bettingEventId?: number;
  /** The name of this betting event */
  name?: string | null;
  /** The NBA season of the BettingEvent */
  season?: number | null;
  /** The ID associated with the type of betting event */
  bettingEventTypeId?: number;
  /** Indicates the type of betting event - Game or Future */
  bettingEventType?: string | null;
  /**
   * The furthest forward time any sportsbook has an event or market set to start for this betting
   * event
   */
  startDate?: string | null;
  /** The date and time when this betting event was created (in US Eastern Time) */
  created?: string | null;
  /** The timestamp of the last time this betting event was updated (in US Eastern Time) */
  updated?: string | null;
  /** The unique ID of the game associated with this BettingEvent */
  gameId?: number | null;
  /** The GlobalGameID of the game tied to this event */
  globalGameId?: number | null;
  /** The status of the game in tied to this event */
  gameStatus?: string | null;
  /**
   * The current quarter in the game tied to this betting event. Possible values include: 1; 2; 3;
   * 4; Half; OT; NULL
   */
  quarter?: string | null;
  /** The abbreviation [Key] of the away team tied to the event */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team tied to the event */
  awayTeamId?: number | null;
  /** The unique ID of the home team tied to the event */
  homeTeamId?: number | null;
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
  /** Total number of points the away team scored in the game tied to the event (post-game) */
  awayTeamScore?: number | null;
  /** Total points scored by the home team in the game (post-game) */
  homeTeamScore?: number | null;
  /**
   * The total amount of points scored in the game by both teams. Updated after the game ends to
   * allow for resulting bets
   */
  totalScore?: number | null;
  /**
   * Rotation number of away team for this event Note: if the betting event is a future this field
   * will be NULL
   */
  awayRotationNumber?: number | null;
  /**
   * The rotation number of the home team for this event Note: If betting event is a future this
   * field will be NULL
   */
  homeRotationNumber?: number | null;
  /** The list of betting markets for this event */
  bettingMarkets?: BettingMarket[];
  /** The date and time that the game started (in US Eastern Time) */
  gameStartTime?: string | null;
};

export const bettingEvent1Schema: Schema<BettingEvent1> = s.object<BettingEvent1>({
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
    gameId: "GameID",
    globalGameId: "GlobalGameID",
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
