import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic2 = {
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their MLB career
   */
  playerId?: number;
  /** Deprecated. Use SportRadarPlayerID instead. */
  sportsDataId?: string | null;
  /**
   * Indicates the player's status of being on an Major League Active Roster. Possible values
   * include: Active, 40 Man Active, Non-Roster Invitee, Minors, Inactive, 7 Day Injury List, 10 Day
   * Injury List, 15 Day Injury List, 60 Day Injury List, Restricted List, Paternity List,
   * Bereavement List, Military List
   */
  status?: string | null;
  /** The team's unique TeamID as assigned by SportsDataIO */
  teamId?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The player's jersey number */
  jersey?: number | null;
  /** The player's position category. Possible values: DH, IF, OF, P, PH, PR */
  positionCategory?: string | null;
  /**
   * The player's position associated with the given game or season. Possible values: 1B; 2B; 3B; C;
   * CF; DH; IF; LF; OF; P; PH; PR; RF; RP; SP; SS
   */
  position?: string | null;
  /** The player's first name */
  firstName?: string | null;
  /** The player's last name */
  lastName?: string | null;
  /** The player's date of birth */
  birthDate?: string | null;
  /** The city in which the player was born */
  birthCity?: string | null;
  /**
   * The state in which the player was born. Note: State will be NULL for all countries outside of
   * North America and Australia
   */
  birthState?: string | null;
  /** The country in which the player was born */
  birthCountry?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** The player's batting hand. Possible values: R, L, S */
  batHand?: string | null;
  /** The player's throwing hand. Possible values: R, L, S */
  throwHand?: string | null;
  /** The player's height in inches */
  height?: number | null;
  /** The weight of the player in pounds (lbs.) */
  weight?: number | null;
};

export const playerBasic2Schema: Schema<PlayerBasic2> = s.object<PlayerBasic2>({
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
  batHand: s.optionalNullable(s.string()),
  throwHand: s.optionalNullable(s.string()),
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
    batHand: "BatHand",
    throwHand: "ThrowHand",
    height: "Height",
    weight: "Weight",
  },
});
