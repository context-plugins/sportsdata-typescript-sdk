import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic5 = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their collegiate career
   */
  playerId?: number;
  /** The player's first name */
  firstName?: string | null;
  /** The player's last name */
  lastName?: string | null;
  /** The unique ID of the player's team */
  teamId?: number | null;
  /** The abbreviation [Key] of the player's team */
  team?: string | null;
  /** The player's jersey number (0-99) */
  jersey?: number | null;
  /** The player's eligible position(s). Possible values: C; F; F-C; G; G-F, PG, SG, SF, PF */
  position?: string | null;
  /**
   * The class of the year (e.g. Freshman; Sophomore; Junior; Senior; Graduate Student). Note:
   * Redshirt classes available for Freshman, Sophomore, Junior, Senior
   */
  class?: string | null;
  /** The player's height in inches */
  height?: number | null;
  /** The player's weight in pounds (lbs) */
  weight?: number | null;
  /** The city in which the player was born */
  birthCity?: string | null;
  /** The state in which the player was born (two letter abbreviation) */
  birthState?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
};

export const playerBasic5Schema: Schema<PlayerBasic5> = s.object<PlayerBasic5>({
  playerId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  position: s.optionalNullable(s.string()),
  class: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    position: "Position",
    class: "Class",
    height: "Height",
    weight: "Weight",
    birthCity: "BirthCity",
    birthState: "BirthState",
    globalTeamId: "GlobalTeamID",
  },
});
