import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Lineup = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /** The unique ID of the team */
  teamId?: number;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The player's first name */
  firstName?: string | null;
  /** The player's last name */
  lastName?: string | null;
  /** The player's primary position. Possible values: C; PF; PG; SF; SG */
  position?: string | null;
  /** Indicates whether this player is in the starting lineup or on the bench */
  starting?: boolean | null;
  /** Indicated whether the 'Starting' field has been confirmed for a player */
  confirmed?: boolean | null;
  /** Indicates whether player is starting, active, or inactive */
  lineupStatus?: string | null;
};

export const lineupSchema: Schema<Lineup> = s.object<Lineup>({
  playerId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  starting: s.optionalNullable(s.boolean()),
  confirmed: s.optionalNullable(s.boolean()),
  lineupStatus: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    firstName: "FirstName",
    lastName: "LastName",
    position: "Position",
    starting: "Starting",
    confirmed: "Confirmed",
    lineupStatus: "LineupStatus",
  },
});
