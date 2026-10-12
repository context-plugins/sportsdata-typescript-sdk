import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic4 = {
  /**
   * The unique ID of the player as assigned by SportsDataIO. Note: this ID remains with the player
   * their entire collegiate career
   */
  playerId?: number;
  /** The player's first name */
  firstName?: string | null;
  /** The player's last name */
  lastName?: string | null;
  /** The unique ID of the team associated with this player */
  teamId?: number | null;
  /**
   * The abbreviation [Key] of the team that the player is on Note: If this player is a free agent;
   * this field is NULL
   */
  team?: string | null;
  /** The player's jersey number */
  jersey?: number | null;
  /**
   * The player's primary position. Possible values: C; CB; DB; DE; DL; DT; FB; G; K; KR; LB; LS;
   * NT; OL; OLB; OT; P; PR; QB; RB; S; SS; TE; WR
   */
  position?: string | null;
  /** The category (Offense, Defense or Special Teams) of the players position (OFF, DEF, ST) */
  positionCategory?: string | null;
  /**
   * The class of the player. Possible values: Freshman; Sophomore; Junior; Senior; Graduate
   * Student; as well as Redshirt for all classes
   */
  class?: string | null;
  /** The player's height in inches */
  height?: number | null;
  /** The player's weight in pounds (lbs) */
  weight?: number | null;
  /** The city in which the player was born */
  birthCity?: string | null;
  /** The state in which the player was born */
  birthState?: string | null;
  /** The timestamp of when this player was last updated (US Eastern Time) */
  updated?: string | null;
  /** The date and time the player was created (US Eastern Time) */
  created?: string | null;
  /**
   * A globally unique ID for the player's team. Note: This value is guaranteed to be unique across
   * all sports/leagues
   */
  globalTeamId?: number | null;
};

export const playerBasic4Schema: Schema<PlayerBasic4> = s.object<PlayerBasic4>({
  playerId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  class: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    position: "Position",
    positionCategory: "PositionCategory",
    class: "Class",
    height: "Height",
    weight: "Weight",
    birthCity: "BirthCity",
    birthState: "BirthState",
    updated: "Updated",
    created: "Created",
    globalTeamId: "GlobalTeamID",
  },
});
