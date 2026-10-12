import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame2 = {
  /** The unique ID of this game */
  gameId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their MLB career
   */
  playerId?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar).
   */
  seasonType?: number | null;
  /** The MLB season of the game */
  season?: number | null;
  /** The date of the game */
  day?: string | null;
  /** The date and time of the game in US Eastern Time */
  dateTime?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The name [Key] of the player's opponent in the game */
  opponent?: string | null;
  /** Whether the team is home or away */
  homeOrAway?: string | null;
  /** The player's jersey number. */
  jersey?: number | null;
  /** Player's full name */
  name?: string | null;
  /**
   * The player's position associated with the given game or season. Possible values: 1B, 2B, 3B, C,
   * CF, DH, IF, LF, OF, P, PH, PR, RF, RP, SP, SS
   */
  position?: string | null;
  /** The player's position category. Possible values: DH; IF; OF; P; PH; PR */
  positionCategory?: string | null;
  /** The number of games played by the player. Note: for game feeds this will always = 1 */
  games?: number | null;
  /** Whether the player started in the game. Note: started = 1 and not starting = 0 */
  started?: number | null;
  /** Total fantasy points by the player during the game */
  fantasyPoints?: number | null;
  /** Total batting fantasy points by the player in the game */
  fantasyPointsBatting?: number | null;
  /** Total pitching fantasy points by the player in the game */
  fantasyPointsPitching?: number | null;
  /** Whether or not the game is over (returns ture/false) */
  isGameOver?: boolean | null;
  /** Total FanDuel fantasy points by the player in the game */
  fantasyPointsFanDuel?: number | null;
  /** Total Yahoo fantasy points by the player in the game */
  fantasyPointsYahoo?: number | null;
  /** Total DraftKings fantasy points by the player in the game */
  fantasyPointsDraftKings?: number | null;
  /** The player's eligible position in FanDuel's daily fantasy sports platform. */
  fanDuelPosition?: string | null;
  /** The player's eligible position in DraftKings' daily fantasy sports platform. */
  draftKingsPosition?: string | null;
  /** The player's eligible position in Yahoo's daily fantasy sports platform */
  yahooPosition?: string | null;
  /** The ranking of the player's opponent with regards to fantasy points allowed */
  opponentRank?: number | null;
  /** The ranking of the player's opponent by position with regards to fantasy points allowed */
  oppositionPositionRank?: number | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number | null;
  /** The date and time of the late update made to this record (in US Eastern Time) */
  updated?: string | null;
};

export const fantasyGame2Schema: Schema<FantasyGame2> = s.object<FantasyGame2>({
  gameId: s.optional(s.int()),
  playerId: s.optional(s.int()),
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
  positionCategory: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  started: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsBatting: s.optionalNullable(s.float64()),
  fantasyPointsPitching: s.optionalNullable(s.float64()),
  isGameOver: s.optionalNullable(s.boolean()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.int()),
  oppositionPositionRank: s.optionalNullable(s.int()),
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
