import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyGame4 = {
  /** The unique ID of the game */
  gameId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career
   */
  playerId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number | null;
  /** The soccer regular season for which these totals apply */
  season?: number | null;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game (in UTC) */
  dateTime?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The name of the opponent team */
  opponent?: string | null;
  /** The player's jersey number */
  jersey?: number | null;
  /** The player's full name */
  name?: string | null;
  /**
   * The position of the player. Possible values include: A (Attacker); M (Midfielder); D
   * (Defender); GK (Goalkeeper)
   */
  position?: string | null;
  /** The player's position category */
  positionCategory?: string | null;
  /** The total number of games the player started */
  started?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
  /** Whether the game is over (true) or not (false) */
  isGameOver?: boolean;
  /** This field is expected to be NULL */
  fantasyPointsFanDuel?: number | null;
  /** This field is expected to be NULL */
  fantasyPointsYahoo?: number | null;
  /** Total DraftKings daily fantasy points scored by the player in the game */
  fantasyPointsDraftKings?: number | null;
  /** The player's eligible position in FanDuel's daily fantasy sports platform. */
  fanDuelPosition?: string | null;
  /** The player's eligible position in DraftKings' daily fantasy sports platform. */
  draftKingsPosition?: string | null;
  /** The player's eligible position in Yahoo's daily fantasy sports platform */
  yahooPosition?: string | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
};

export const fantasyGame4Schema: Schema<FantasyGame4> = s.object<FantasyGame4>({
  gameId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  started: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  isGameOver: s.optional(s.boolean()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
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
