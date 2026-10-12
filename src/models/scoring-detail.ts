import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringDetail = {
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameID is
   * composed of Season; SeasonType; Week and HomeTeam. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
  /**
   * The type of season that this game corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO tied to this scoring detail.
   * Note: this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The season during which the score happened */
  season?: number;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /**
   * The type of scoring play (e.g. BlockedFieldGoalReturnTouchdown, BlockedPuntReturnTouchdown,
   * FieldGoalMade, FieldGoalReturnTouchdown, FumbleReturnTouchdown, InterceptionReturnTouchdown,
   * KickoffReturnTouchdown, PassingTouchdown, PuntReturnTouchdown, ReceivingTouchdown,
   * RushingTouchdown, Safety)
   */
  scoringType?: string | null;
  /** The length in yards of the score */
  length?: number;
  /** Unique ID of this scoring detail */
  scoringDetailId?: number;
  /** Unique ID of the PlayerGame record tied to this scoring detail */
  playerGameId?: number;
  /** Unique ID of the score/game */
  scoreId?: number | null;
  /** Unique ID of the scoring play */
  scoringPlayId?: number | null;
};

export const scoringDetailSchema: Schema<ScoringDetail> = s.object<ScoringDetail>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  season: s.optional(s.int()),
  week: s.optional(s.int()),
  scoringType: s.optionalNullable(s.string()),
  length: s.optional(s.int()),
  scoringDetailId: s.optional(s.int()),
  playerGameId: s.optional(s.int()),
  scoreId: s.optionalNullable(s.int()),
  scoringPlayId: s.optionalNullable(s.int()),
  _keysMap: {
    gameKey: "GameKey",
    seasonType: "SeasonType",
    playerId: "PlayerID",
    team: "Team",
    season: "Season",
    week: "Week",
    scoringType: "ScoringType",
    length: "Length",
    scoringDetailId: "ScoringDetailID",
    playerGameId: "PlayerGameID",
    scoreId: "ScoreID",
    scoringPlayId: "ScoringPlayID",
  },
});
