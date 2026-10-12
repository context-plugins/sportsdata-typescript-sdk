import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerBasic = {
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /**
   * The abbreviation [Key] of the team that the player is on. Note: If this player is a free agent;
   * this field is NULL
   */
  team?: string | null;
  /** Player's jersey number */
  number?: number | null;
  /** Player's first name */
  firstName?: string | null;
  /** Player's last name */
  lastName?: string | null;
  /**
   * The primary position of the player. Possible Values: C; CB; DB; DE; DL; DT; FB; FS; G; ILB; K;
   * KR; LB; LS; NT; OL; OLB; OT; P; QB; RB; S; SS; T; TE; WR
   */
  position?: string | null;
  /**
   * The player's current status. Possible values include Active, Inactive, Injured Reserve,
   * Physically Unable to Perform, Practice Squad, Suspended, Non Football Injury, Non-Football
   * Illness, Commissioner Exempt List, Exempt/Left Team, Paternity, Bereavement, Reserve/COVID-19,
   * and Voluntary Opt Out. Inactive indicates that this player is a free agent. Active indicates
   * that this player is on his team's active roster.
   */
  status?: string | null;
  /** Height in feet, inches */
  height?: string | null;
  /** Weight in pounds */
  weight?: number | null;
  /** The player's date of birth */
  birthDate?: string | null;
  /** College team the player played for prior to turning professional */
  college?: string | null;
  /**
   * Number of years experience. Note: This number is incremented every year; in the Spring; when we
   * load the rookies following the NFL Draft. Rookies will have Experience = Zero; while second
   * year players will have Experience = 2.
   */
  experience?: number | null;
  /**
   * The player's fantasy football position. Possible values: QB; RB; WR; TE; DL; LB; DB; K; P; OL
   */
  fantasyPosition?: string | null;
  /** Whether or not the player is on the active roster of the NFL team */
  active?: boolean | null;
  /** The category of the player's position (OFF; DEF; ST) */
  positionCategory?: string | null;
  /** The player's full name */
  name?: string | null;
  /** The player's current age */
  age?: number | null;
  /** The first initial and last name of the player (J. Doe) */
  shortName?: string | null;
  /** The feet component of a player's height (if player is 6'3", then this value would be 6) */
  heightFeet?: number | null;
  /** The inches component of a player's height (if player is 6'3", then this value would be 3) */
  heightInches?: number | null;
  /**
   * The unique ID of the team that the player is on. Note: If the player is a free agent; this
   * field is NULL
   */
  teamId?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** The player's cross reference PlayerID to USA Today headshot data feeds. */
  usaTodayPlayerId?: number | null;
  /** The player's headshot URL as provided by USA Today. License from USA Today is required. */
  usaTodayHeadshotUrl?: string | null;
  /**
   * The player's transparent background headshot URL as provided by USA Today. License from USA
   * Today is required.
   */
  usaTodayHeadshotNoBackgroundUrl?: string | null;
  /**
   * The last updated date of the player's headshot as provided by USA Today. License from USA Today
   * is required.
   */
  usaTodayHeadshotUpdated?: string | null;
  /**
   * The last updated date of the player's transparent background headshot as provided by USA Today.
   * License from USA Today is required.
   */
  usaTodayHeadshotNoBackgroundUpdated?: string | null;
};

export const playerBasicSchema: Schema<PlayerBasic> = s.object<PlayerBasic>({
  playerId: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.string()),
  weight: s.optionalNullable(s.int()),
  birthDate: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  experience: s.optionalNullable(s.int()),
  fantasyPosition: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  positionCategory: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  age: s.optionalNullable(s.int()),
  shortName: s.optionalNullable(s.string()),
  heightFeet: s.optionalNullable(s.int()),
  heightInches: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  usaTodayPlayerId: s.optionalNullable(s.int()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    team: "Team",
    number: "Number",
    firstName: "FirstName",
    lastName: "LastName",
    position: "Position",
    status: "Status",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    college: "College",
    experience: "Experience",
    fantasyPosition: "FantasyPosition",
    active: "Active",
    positionCategory: "PositionCategory",
    name: "Name",
    age: "Age",
    shortName: "ShortName",
    heightFeet: "HeightFeet",
    heightInches: "HeightInches",
    teamId: "TeamID",
    globalTeamId: "GlobalTeamID",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
