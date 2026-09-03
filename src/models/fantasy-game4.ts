import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame4 = {
  gameId?: number | null;
  playerId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  day?: string | null;
  dateTime?: string | null;
  team?: string | null;
  opponent?: string | null;
  jersey?: number | null;
  name?: string | null;
  position?: string | null;
  positionCategory?: string | null;
  started?: number | null;
  fantasyPoints?: number | null;
  isGameOver?: boolean;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsYahoo?: number | null;
  fantasyPointsDraftKings?: number | null;
  fanDuelPosition?: string | null;
  draftKingsPosition?: string | null;
  yahooPosition?: string | null;
  globalGameId?: number | null;
  updated?: string | null;
};

export const fantasyGame4Schema: Schema<FantasyGame4> = s.object<FantasyGame4>({
  gameId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  seasonType: s.optionalNullable(s.number()),
  season: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  started: s.optionalNullable(s.number()),
  fantasyPoints: s.optionalNullable(s.number()),
  isGameOver: s.optional(s.boolean()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
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
    jersey: "Jersey",
    name: "Name",
    position: "Position",
    positionCategory: "PositionCategory",
    started: "Started",
    fantasyPoints: "FantasyPoints",
    isGameOver: "IsGameOver",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fanDuelPosition: "FanDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    globalGameId: "GlobalGameID",
    updated: "Updated",
  },
});
