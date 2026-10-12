import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Lineup4 = {
  /** The unique ID of this lineup */
  lineupId?: number;
  /** The unique ID of the game tied to this lineup */
  gameId?: number;
  /** The player's status in the lineup. Possible values: Substitute In; Starter; Bench. */
  type?: string | null;
  /** The unique ID of the team associated with this lineup */
  teamId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career.
   */
  playerId?: number;
  /** The player's full name */
  name?: string | null;
  /**
   * The position of the player. Possible values include: A (Attacker); M (Midfielder); D
   * (Defender); GK (Goalkeeper).
   */
  position?: string | null;
  /** The unique ID of the replaced player */
  replacedPlayerId?: number | null;
  /** The name of the replaced player */
  replacedPlayerName?: string | null;
  /** The minute of the game */
  gameMinute?: number | null;
  /** The extra minute of the game */
  gameMinuteExtra?: number | null;
  /**
   * The pitch position of where this player lined up on the field. Note: This is used for rendering
   * an image of a soccer/football field with the players marked as such. This will be a number
   * between 0 and 50.
   */
  pitchPositionHorizontal?: number | null;
  /**
   * The pitch position of where this player lined up on the field. Note: This is used for rendering
   * an image of a soccer/football field with the players marked as such. This will be a number
   * between 0 and 50.
   */
  pitchPositionVertical?: number | null;
};

export const lineup4Schema: Schema<Lineup4> = s.object<Lineup4>({
  lineupId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  type: s.optionalNullable(s.string()),
  teamId: s.optional(s.int()),
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  replacedPlayerId: s.optionalNullable(s.int()),
  replacedPlayerName: s.optionalNullable(s.string()),
  gameMinute: s.optionalNullable(s.int()),
  gameMinuteExtra: s.optionalNullable(s.int()),
  pitchPositionHorizontal: s.optionalNullable(s.int()),
  pitchPositionVertical: s.optionalNullable(s.int()),
  _keysMap: {
    lineupId: "LineupId",
    gameId: "GameId",
    type: "Type",
    teamId: "TeamId",
    playerId: "PlayerId",
    name: "Name",
    position: "Position",
    replacedPlayerId: "ReplacedPlayerId",
    replacedPlayerName: "ReplacedPlayerName",
    gameMinute: "GameMinute",
    gameMinuteExtra: "GameMinuteExtra",
    pitchPositionHorizontal: "PitchPositionHorizontal",
    pitchPositionVertical: "PitchPositionVertical",
  },
});
