import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Home team starting pitcher. Note: this is a probable pitcher until confirmed field = TRUE. */
export type Lineup3 = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO Note: this ID will stay with the
   * player throughout their MLB career
   */
  playerId?: number;
  /** The team's unique TeamID as assigned by SportsDataIO */
  teamId?: number;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The player's first name */
  firstName?: string | null;
  /** The player's last name */
  lastName?: string | null;
  /** Where the player batted in the lineup for the game (1;2;3; etc.) */
  battingOrder?: number | null;
  /**
   * Player's position in the starting lineup (if started); otherwise the position he substituted
   * for
   */
  position?: string | null;
  /** Indicates if this player is starting. Note: started = 1 and non starting= 0 */
  starting?: boolean | null;
  /** Indicates if batting order has been confirmed (true/false) */
  confirmed?: boolean | null;
};

export const lineup3Schema: Schema<Lineup3> = s.object<Lineup3>({
  playerId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  battingOrder: s.optionalNullable(s.int()),
  position: s.optionalNullable(s.string()),
  starting: s.optionalNullable(s.boolean()),
  confirmed: s.optionalNullable(s.boolean()),
  _keysMap: {
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    firstName: "FirstName",
    lastName: "LastName",
    battingOrder: "BattingOrder",
    position: "Position",
    starting: "Starting",
    confirmed: "Confirmed",
  },
});
