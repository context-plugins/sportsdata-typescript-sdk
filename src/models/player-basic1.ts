import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic1 = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /** Deprecated. Use SportRadarPlayerID instead. */
  sportsDataId?: string | null;
  /**
   * Indicates the player's status of being on an active roster. Possible values include: Active,
   * Inactive
   */
  status?: string | null;
  /** The unique ID of the player's team */
  teamId?: number | null;
  /** The abbreviation [Key] of the player's team */
  team?: string | null;
  /** The player's jersey number. */
  jersey?: number | null;
  /** The player's position category. Possible values: C, F, G */
  positionCategory?: string | null;
  /** The player's primary position. Possible values: PG; SG; SF; PF; C */
  position?: string | null;
  /** The player's first name. */
  firstName?: string | null;
  /** The player's last name. */
  lastName?: string | null;
  /** The player's date of birth. */
  birthDate?: string | null;
  /** The city in which the player was born. */
  birthCity?: string | null;
  /** The state in which the player was born. */
  birthState?: string | null;
  /** The country in which the player was born. */
  birthCountry?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** The player's height in inches. */
  height?: number | null;
  /** The player's weight in pounds (lbs). */
  weight?: number | null;
};

export const playerBasic1Schema: Schema<PlayerBasic1> = s.object<PlayerBasic1>({
  playerId: s.optional(s.int()),
  sportsDataId: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  _keysMap: {
    playerId: "PlayerID",
    sportsDataId: "SportsDataID",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    positionCategory: "PositionCategory",
    position: "Position",
    firstName: "FirstName",
    lastName: "LastName",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    globalTeamId: "GlobalTeamID",
    height: "Height",
    weight: "Weight",
  },
});
