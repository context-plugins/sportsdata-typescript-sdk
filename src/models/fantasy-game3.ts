import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame3 = {
  /** The unique ID of this game */
  gameId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number | null;
  /** The NHL season of the game */
  season?: number | null;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /** The abbreviation [Key] of the team this player is employed by */
  team?: string | null;
  /** The abbreviation [Key] of the opponent team */
  opponent?: string | null;
  /** Indicates whether the team is home or away */
  homeOrAway?: string | null;
  /** The player's jersey number */
  jersey?: number | null;
  /** The player's full name */
  name?: string | null;
  /** The player's primary position. Possible values: C; RW; LW; D; or G. */
  position?: string | null;
  /**
   * Total games played by the player in the game. NOTE: this will be 1 or 0 for single game feeds
   */
  games?: number | null;
  /**
   * Indicates whether or not the player started the game Note: this will be one or zero for single
   * game feeds
   */
  started?: number | null;
  /** Total fantasy points by the player in the game */
  fantasyPoints?: number | null;
  /** Whether the game is over (returns true/false) */
  isGameOver?: boolean;
  /** Total FanDuel daily fantasy points by the player in the game */
  fantasyPointsFanDuel?: number | null;
  /** Total Yahoo daily fantasy points by the player in the game */
  fantasyPointsYahoo?: number | null;
  /** Total DraftKings daily fantasy points by the player in the game */
  fantasyPointsDraftKings?: number | null;
  /** The player's eligible position in FanDuel's daily fantasy sports platform */
  fanDuelPosition?: string | null;
  /** The player's eligible position in DraftKings' daily fantasy sports platform */
  draftKingsPosition?: string | null;
  /** The player's eligible position in Yahoo's daily fantasy sports platform. */
  yahooPosition?: string | null;
  /** The ranking of the player's opponent with regards to fantasy points allowed */
  opponentRank?: number | null;
  /** The ranking of the player's opponent by position with regards to fantasy points allowed */
  opponentPositionRank?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number | null;
  /** The timestamp of when the record was last updated (in US Eastern Time) */
  updated?: string | null;
};

export const fantasyGame3Schema: Schema<FantasyGame3> = s.object<FantasyGame3>({
  gameId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  started: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  isGameOver: s.optional(s.boolean()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.int()),
  opponentPositionRank: s.optionalNullable(s.int()),
  globalGameId: s.optionalNullable(s.int()),
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
    games: "Games",
    started: "Started",
    fantasyPoints: "FantasyPoints",
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
