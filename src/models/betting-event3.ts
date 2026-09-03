import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket1Schema, type BettingMarket1 } from "./betting-market1.js";

export type BettingEvent3 = {
  bettingEventId?: number;
  name?: string | null;
  season?: number | null;
  bettingEventTypeId?: number;
  bettingEventType?: string | null;
  startDate?: string | null;
  created?: string | null;
  updated?: string | null;
  gameId?: number | null;
  globalGameId?: number | null;
  gameStatus?: string | null;
  quarter?: string | null;
  awayTeam?: string | null;
  homeTeam?: string | null;
  awayTeamId?: number | null;
  homeTeamId?: number | null;
  globalAwayTeamId?: number | null;
  globalHomeTeamId?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  totalScore?: number | null;
  awayRotationNumber?: number | null;
  homeRotationNumber?: number | null;
  bettingMarkets?: BettingMarket1[];
  competitionId?: number | null;
};

export const bettingEvent3Schema: Schema<BettingEvent3> = s.object<BettingEvent3>({
  bettingEventId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.number()),
  bettingEventTypeId: s.optional(s.number()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  gameId: s.optionalNullable(s.number()),
  globalGameId: s.optionalNullable(s.number()),
  gameStatus: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  homeTeamId: s.optionalNullable(s.number()),
  globalAwayTeamId: s.optionalNullable(s.number()),
  globalHomeTeamId: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  totalScore: s.optionalNullable(s.number()),
  awayRotationNumber: s.optionalNullable(s.number()),
  homeRotationNumber: s.optionalNullable(s.number()),
  bettingMarkets: s.optional(s.array(s.lazy(() => bettingMarket1Schema))),
  competitionId: s.optionalNullable(s.number()),
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
