import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame = {
  /** The unique ID of this game */
  gameId?: number | null;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO tied to this FantasyGame record
   * Note: this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /**
   * The type of season that this player corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=All-Star).
   */
  seasonType?: number;
  /** The NFL season of the game */
  season?: number;
  /** The date of the game (in US Eastern Time) */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The abbreviation [Key] of the opponent team */
  opponent?: string | null;
  /** Whether the team is home or away */
  homeOrAway?: string | null;
  /** Player's jersey number */
  number?: number;
  /** Player's full name */
  name?: string | null;
  /**
   * The primary position of the player Possible Values: C; CB; DB; DE; DL; DT; FB; FS; G; ILB; K;
   * KR; LB; LS; NT; OL; OLB; OT; P; QB; RB; S; SS; T; TE; WR
   */
  position?: string | null;
  /** The category of the player's position (OFF; DEF; ST) */
  positionCategory?: string | null;
  /** Whether or not the player was active for the game */
  activated?: number;
  /**
   * Whether the player played at least one snap in the game Note: Will return "1" if player played
   * at least one snap and "0" if they did not
   */
  played?: number;
  /**
   * Whether the player started the game (on offensive or defense) Note: Started = 1 / Did Not Start
   * = 0
   */
  started?: number;
  /** Total fantasy points by the player in the game */
  fantasyPoints?: number;
  /** Fantasy points scored based on basic PPR fantasy scoring system by the player in the game */
  fantasyPointsPpr?: number;
  /**
   * The player's fantasy football position Possible values: QB; RB; WR; TE; DL; LB; DB; K; P; OL
   */
  fantasyPosition?: string | null;
  /** Whether the game is over (true/false) */
  isGameOver?: boolean | null;
  /** Fantasy points based on FanDuel's scoring system by the player in the game */
  fantasyPointsFanDuel?: number | null;
  /** Fantasy points based on Yahoo's daily fantasy scoring system by the player in the game */
  fantasyPointsYahoo?: number | null;
  /** Total DraftKings daily fantasy points scored by the player in the game */
  fantasyPointsDraftKings?: number | null;
  /** The player's eligible position in FanDuel's daily fantasy sports platform */
  fanDuelPosition?: string | null;
  /** The player's eligible position in DraftKings' daily fantasy sports platform */
  draftKingsPosition?: string | null;
  /** The player's eligible position in Yahoo's daily fantasy sports platform */
  yahooPosition?: string | null;
  /** The ranking of the player's opponent with regards to fantasy points allowed */
  opponentRank?: number | null;
  /** The ranking of the player's opponent by position with regards to fantasy points allowed */
  opponentPositionRank?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalGameId?: number | null;
  /** Time of last update (in US Eastern time) Note: this does not indicate that stats changed */
  updated?: string | null;
};

export const fantasyGameSchema: Schema<FantasyGame> = s.object<FantasyGame>({
  gameId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  week: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  number: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  activated: s.optional(s.int()),
  played: s.optional(s.int()),
  started: s.optional(s.int()),
  fantasyPoints: s.optional(s.float64()),
  fantasyPointsPpr: s.optional(s.float64()),
  fantasyPosition: s.optionalNullable(s.string()),
  isGameOver: s.optionalNullable(s.boolean()),
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
