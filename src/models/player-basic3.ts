import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic3 = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /** The first name of the player */
  firstName?: string | null;
  /** The player's last name */
  lastName?: string | null;
  /**
   * The player's current status. Possible values include Active; Inactive; Injured Reserve; Minors;
   * Suspended; Bereavement; Paternity
   */
  status?: string | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The abbreviation [Key] of the team this player is employed by */
  team?: string | null;
  /** The player's primary position. Possible values: C, RW, LW, D, or G. */
  position?: string | null;
  /** The player's jersey number */
  jersey?: number | null;
  /** The player's height in inches */
  height?: number | null;
  /** The player's weight in pounds (lbs) */
  weight?: number | null;
  /** The player's date of birth */
  birthDate?: string | null;
  /** The city in which the player was born */
  birthCity?: string | null;
  /**
   * The US state in which the player was born. NOTE: If a player was born outside of North America
   * or Australia, this field will be null
   */
  birthState?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
};

export const playerBasic3Schema: Schema<PlayerBasic3> = s.object<PlayerBasic3>({
  playerId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    position: "Position",
    jersey: "Jersey",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    globalTeamId: "GlobalTeamID",
  },
});
