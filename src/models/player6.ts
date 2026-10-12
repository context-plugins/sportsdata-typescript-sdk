import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player6 = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player through their career
   */
  playerId?: number;
  /** The player's first name. */
  firstName?: string | null;
  /** The player's last name. */
  lastName?: string | null;
  /**
   * Indicates the player's status of being on an active roster. Possible values include: Active;
   * Inactive; Suspended; Maternity; Bereavement
   */
  status?: string | null;
  /** The timestamp of when this record was last updated (in US Eastern time) */
  updated?: string | null;
  /** Designates whether or not the player is available (returns true/false) */
  available?: boolean | null;
  /** The unique ID of the player's team */
  teamId?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The jersey number of the player */
  jersey?: number | null;
  /** The player's primary position. Possible values: PG; SG; SF; PF; C */
  position?: string | null;
  /** The height of the player in inches */
  height?: number | null;
  /** The weight of the player in pounds (lbs.) */
  weight?: number | null;
  /** The date (MM/DD/YYYY) the player was born */
  birthDate?: string | null;
  /** The city in which the player was born */
  birthCity?: string | null;
  /**
   * The state in which the player was born (2-letter abbreviation). Note: If the player was born
   * outside of North America or Australia, this field will be blank
   */
  birthState?: string | null;
  /** The country in which the player was born */
  birthCountry?: string | null;
  /**
   * The last college attened by the player. Note: If the player did not attend a college, this
   * field will be "None"
   */
  college?: string | null;
  /**
   * Injury status used to project availability Statuses: Probable; Questionable; Doubtful; Out. If
   * a player has a NULL injury status, they are healthy/available to play
   */
  injuryStatus?: string | null;
  /**
   * The player's body part(s) that are injured (e.g. Knee; Groin; Calf; Hamstring; etc.) Note: if a
   * player has multiple injured body parts they will appear as such - Hamstring/Ankle
   */
  injuryBodyPart?: string | null;
  /**
   * Short description of injury involving injured body part(s), game status, player name, team
   * name, and other extra news necessary. Notes are custom and can be unique
   */
  injuryNotes?: string | null;
  /** The date that the injury occurred, was first discovered, or was freshly updated */
  injuryStartDate?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
};

export const player6Schema: Schema<Player6> = s.object<Player6>({
  playerId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  available: s.optionalNullable(s.boolean()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  position: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  _keysMap: {
    playerId: "PlayerID",
    firstName: "FirstName",
    lastName: "LastName",
    status: "Status",
    updated: "Updated",
    available: "Available",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    position: "Position",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    college: "College",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryNotes: "InjuryNotes",
    injuryStartDate: "InjuryStartDate",
    globalTeamId: "GlobalTeamID",
  },
});
