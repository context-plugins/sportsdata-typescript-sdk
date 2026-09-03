import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame = {
  gameId?: number | null;
  playerId?: number | null;
  seasonType?: number;
  season?: number;
  day?: string | null;
  dateTime?: string | null;
  week?: number;
  team?: string | null;
  opponent?: string | null;
  homeOrAway?: string | null;
  number?: number;
  name?: string | null;
  position?: string | null;
  positionCategory?: string | null;
  activated?: number;
  played?: number;
  started?: number;
  fantasyPoints?: number;
  fantasyPointsPpr?: number;
  fantasyPosition?: string | null;
  isGameOver?: boolean | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsYahoo?: number | null;
  fantasyPointsDraftKings?: number | null;
  fanDuelPosition?: string | null;
  draftKingsPosition?: string | null;
  yahooPosition?: string | null;
  opponentRank?: number | null;
  opponentPositionRank?: number | null;
  globalGameId?: number | null;
  updated?: string | null;
};

export const fantasyGameSchema: Schema<FantasyGame> = s.object<FantasyGame>({
  gameId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  week: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  number: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  activated: s.optional(s.number()),
  played: s.optional(s.number()),
  started: s.optional(s.number()),
  fantasyPoints: s.optional(s.number()),
  fantasyPointsPpr: s.optional(s.number()),
  fantasyPosition: s.optionalNullable(s.string()),
  isGameOver: s.optionalNullable(s.boolean()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.number()),
  opponentPositionRank: s.optionalNullable(s.number()),
  globalGameId: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    gameId: "GameID",
    playerId: "PlayerID",
    seasonType: "SeasonType",
    season: "Season",
    day: "Day",
    dateTime: "DateTime",
    week: "Week",
    team: "Team",
    opponent: "Opponent",
    homeOrAway: "HomeOrAway",
    number: "Number",
    name: "Name",
    position: "Position",
    positionCategory: "PositionCategory",
    activated: "Activated",
    played: "Played",
    started: "Started",
    fantasyPoints: "FantasyPoints",
    fantasyPointsPpr: "FantasyPointsPPR",
    fantasyPosition: "FantasyPosition",
    isGameOver: "IsGameOver",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fanDuelPosition: "FanDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    opponentRank: "OpponentRank",
    opponentPositionRank: "OpponentPositionRank",
    globalGameId: "GlobalGameID",
    updated: "Updated",
  },
});
