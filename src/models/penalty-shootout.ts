import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PenaltyShootout = {
  /** The unique ID of the penalty shootout */
  penaltyShootoutId?: number;
  /** The unique ID of the game tied to this penalty shootout */
  gameId?: number;
  /** The result of this penalty shootout kick. Possible values: Goal; Miss. */
  type?: string | null;
  /** The unique ID of the team */
  teamId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career.
   */
  playerId?: number | null;
  /** The name of the player in the penalty shootout */
  name?: string | null;
  /**
   * The position of the player. Possible values include: A (Attacker); M (Midfielder); D
   * (Defender); GK (Goalkeeper).
   */
  position?: string | null;
  /** The order of the penalty shootout */
  order?: number;
};

export const penaltyShootoutSchema: Schema<PenaltyShootout> = s.object<PenaltyShootout>({
  penaltyShootoutId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  type: s.optionalNullable(s.string()),
  teamId: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  order: s.optional(s.int()),
  _keysMap: {
    penaltyShootoutId: "PenaltyShootoutId",
    gameId: "GameId",
    type: "Type",
    teamId: "TeamId",
    playerId: "PlayerId",
    name: "Name",
    position: "Position",
    order: "Order",
  },
});
