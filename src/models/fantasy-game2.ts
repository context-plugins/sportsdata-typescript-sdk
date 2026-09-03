import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame2 = {
  gameId?: number;
  playerId?: number;
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
  fantasyPointsBatting?: number | null;
  fantasyPointsPitching?: number | null;
  isGameOver?: boolean | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsYahoo?: number | null;
  fantasyPointsDraftKings?: number | null;
  fanDuelPosition?: string | null;
  draftKingsPosition?: string | null;
  yahooPosition?: string | null;
  opponentRank?: number | null;
  oppositionPositionRank?: number | null;
  globalGameId?: number | null;
  updated?: string | null;
};

export const fantasyGame2Schema: Schema<FantasyGame2> = s.object<FantasyGame2>({
  gameId: s.optional(s.number()),
  playerId: s.optional(s.number()),
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
  fantasyPointsBatting: s.optionalNullable(s.number()),
  fantasyPointsPitching: s.optionalNullable(s.number()),
  isGameOver: s.optionalNullable(s.boolean()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.number()),
  oppositionPositionRank: s.optionalNullable(s.number()),
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
    fantasyPointsBatting: "FantasyPointsBatting",
    fantasyPointsPitching: "FantasyPointsPitching",
    isGameOver: "IsGameOver",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fanDuelPosition: "FanDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    opponentRank: "OpponentRank",
    oppositionPositionRank: "OppositionPositionRank",
    globalGameId: "GlobalGameID",
    updated: "Updated",
  },
});
