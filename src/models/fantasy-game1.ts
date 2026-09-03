import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame1 = {
  gameId?: number | null;
  playerId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  day?: string | null;
  dateTime?: string | null;
  team?: string | null;
  opponent?: string | null;
  homeOrAway?: string | null;
  jersey?: number | null;
  name?: string | null;
  position?: string | null;
  positionCategory?: string | null;
  games?: number | null;
  started?: number | null;
  fantasyPoints?: number | null;
  isGameOver?: boolean;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsYahoo?: number | null;
  fantasyPointsDraftKings?: number | null;
  fandDuelPosition?: string | null;
  draftKingsPosition?: string | null;
  yahooPosition?: string | null;
  opponentRank?: number | null;
  opponentPositionRank?: number | null;
  globalGameId?: number | null;
  updated?: string | null;
};

export const fantasyGame1Schema: Schema<FantasyGame1> = s.object<FantasyGame1>({
  gameId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  seasonType: s.optionalNullable(s.number()),
  season: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.number()),
  started: s.optionalNullable(s.number()),
  fantasyPoints: s.optionalNullable(s.number()),
  isGameOver: s.optional(s.boolean()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fandDuelPosition: s.optionalNullable(s.string()),
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
    team: "Team",
    opponent: "Opponent",
    homeOrAway: "HomeOrAway",
    jersey: "Jersey",
    name: "Name",
    position: "Position",
    positionCategory: "PositionCategory",
    games: "Games",
    started: "Started",
    fantasyPoints: "FantasyPoints",
    isGameOver: "IsGameOver",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fandDuelPosition: "FandDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    opponentRank: "OpponentRank",
    opponentPositionRank: "OpponentPositionRank",
    globalGameId: "GlobalGameID",
    updated: "Updated",
  },
});
