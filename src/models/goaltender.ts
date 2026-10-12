import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Goaltender = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /** The unique ID of the team */
  teamId?: number;
  /** The abbreviation [Key] of the team the goaltender belongs to */
  team?: string | null;
  /** The first name of the goaltender */
  firstName?: string | null;
  /** The goaltender's last name */
  lastName?: string | null;
  /** The goaltender's jersey number */
  jersey?: number | null;
  /** Indicates whether the starting goaltender is projected or confirmed */
  confirmed?: boolean;
};

export const goaltenderSchema: Schema<Goaltender> = s.object<Goaltender>({
  playerId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  confirmed: s.optional(s.boolean()),
  _keysMap: {
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    firstName: "FirstName",
    lastName: "LastName",
    jersey: "Jersey",
    confirmed: "Confirmed",
  },
});
