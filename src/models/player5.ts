import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player5 = {
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
  /** The high school that the player attended */
  highSchool?: string | null;
  /** The player's cross reference PlayerID to the SportRadar API */
  sportRadarPlayerId?: string | null;
  /** The player's cross reference PlayerID to the Rotoworld news feed */
  rotoworldPlayerId?: number | null;
  /** The player's cross reference PlayerID to the RotoWire news feed */
  rotoWirePlayerId?: number | null;
  /** The player's cross reference PlayerID to the FantasyAlarm news feed */
  fantasyAlarmPlayerId?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** Injury status used to project availability. Statuses: Probable; Questionable; Doubtful; Out */
  injuryStatus?: string | null;
  /**
   * The player's body part(s) that are injured (e.g. Knee; Groin; Calf; Hamstring; etc.). Note: if
   * a player has multiple injured body parts they will appear like such: Hamstring/Ankle
   */
  injuryBodyPart?: string | null;
  /**
   * Short description of injury involving injured body part(s), game status, player name, team
   * name, and other extra news necessary. Notes are custom and can be unique
   */
  injuryNotes?: string | null;
  /** The date that the injury occurred, was first discovered, or was freshly updated */
  injuryStartDate?: string | null;
};

export const player5Schema: Schema<Player5> = s.object<Player5>({
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
  highSchool: s.optionalNullable(s.string()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  rotoworldPlayerId: s.optionalNullable(s.int()),
  rotoWirePlayerId: s.optionalNullable(s.int()),
  fantasyAlarmPlayerId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
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
    highSchool: "HighSchool",
    sportRadarPlayerId: "SportRadarPlayerID",
    rotoworldPlayerId: "RotoworldPlayerID",
    rotoWirePlayerId: "RotoWirePlayerID",
    fantasyAlarmPlayerId: "FantasyAlarmPlayerID",
    globalTeamId: "GlobalTeamID",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryNotes: "InjuryNotes",
    injuryStartDate: "InjuryStartDate",
  },
});
