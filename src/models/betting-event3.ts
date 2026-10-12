import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket1Schema, type BettingMarket1 } from "./betting-market1.js";

export type BettingEvent3 = {
  /** The unique ID assocated with the betting event */
  bettingEventId?: number;
  /** The name of this betting event */
  name?: string | null;
  /** The soccer regular season for which these totals apply */
  season?: number | null;
  /** The ID associated with the type of betting event */
  bettingEventTypeId?: number;
  /** Indicates the type of betting event - Game or Future */
  bettingEventType?: string | null;
  /** The last day for betting on this event */
  startDate?: string | null;
  /** The created date of this betting event (in US Eastern Time) */
  created?: string | null;
  /** The timestamp of when the betting event record was last updated (US Eastern Time) */
  updated?: string | null;
  /** The unique ID of the game */
  gameId?: number | null;
  /** A globally unique ID for this game tied to this event */
  globalGameId?: number | null;
  /** The status of the game tied to this event */
  gameStatus?: string | null;
  /** The quarter of the game tied to this event */
  quarter?: string | null;
  /** The abbreviation [Key] of the away team tied to this event */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team tied to this event */
  homeTeam?: string | null;
  /** The unique ID of the away team tied to this event */
  awayTeamId?: number | null;
  /** The unique ID of the home team tied to this event */
  homeTeamId?: number | null;
  /** A globally unique ID for the away team tied to this event */
  globalAwayTeamId?: number | null;
  /** A globally unique ID for the home team tied to this event */
  globalHomeTeamId?: number | null;
  /**
   * The away team score of the game tied to this event (updated after game ends to allow for
   * resolving bets)
   */
  awayTeamScore?: number | null;
  /**
   * The home team score of the game tied to this event (updated after game ends to allow for
   * resolving bets)
   */
  homeTeamScore?: number | null;
  /**
   * The total combined score of both teams in the game (updated after game ends to allow for
   * resolving bets)
   */
  totalScore?: number | null;
  /** The away team rotation number of the game tied to this event */
  awayRotationNumber?: number | null;
  /** The home team rotation number of the game tied to this event */
  homeRotationNumber?: number | null;
  /** The list of betting markets for this event */
  bettingMarkets?: BettingMarket1[];
  /** The Id of the competition related to this betting event */
  competitionId?: number | null;
};

export const bettingEvent3Schema: Schema<BettingEvent3> = s.object<BettingEvent3>({
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
  bettingMarkets: s.optional(s.array(s.lazy(() => bettingMarket1Schema))),
  competitionId: s.optionalNullable(s.int()),
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
    competitionId: "CompetitionId",
  },
});
