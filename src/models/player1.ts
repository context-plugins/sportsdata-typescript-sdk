import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player1 = {
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
  /** The player's height in inches. */
  height?: number | null;
  /** The player's weight in pounds (lbs). */
  weight?: number | null;
  /** The player's date of birth. */
  birthDate?: string | null;
  /** The city in which the player was born. */
  birthCity?: string | null;
  /** The state in which the player was born. */
  birthState?: string | null;
  /** The country in which the player was born. */
  birthCountry?: string | null;
  /** The high school that the player attended. */
  highSchool?: string | null;
  /** The college that the player attended. */
  college?: string | null;
  /** Deprecated (do not use) */
  salary?: number | null;
  /**
   * This field is deprecated. Photos are no longer available through it. Headshots are now
   * delivered through IMAGN. Please see our Headshots products for further information.
   */
  photoUrl?: string | null;
  /** The number of years experience the player has in the NBA. */
  experience?: number | null;
  /** The player's cross reference PlayerID to the SportRadar API. */
  sportRadarPlayerId?: string | null;
  /** The player's cross reference PlayerID to the Rotoworld news feed. */
  rotoworldPlayerId?: number | null;
  /** The player's cross reference PlayerID to the RotoWire news feed. */
  rotoWirePlayerId?: number | null;
  /** The player's cross reference PlayerID to the FantasyAlarm news feed. */
  fantasyAlarmPlayerId?: number | null;
  /** The player's cross reference PlayerID to the STATS data feeds. */
  statsPlayerId?: number | null;
  /**
   * The player's cross reference PlayerID to the SportsDirect data feeds, now part of Nielsen
   * GraceNote.
   */
  sportsDirectPlayerId?: number | null;
  /** The player's cross reference PlayerID to the XML Team data feeds. */
  xmlTeamPlayerId?: number | null;
  /**
   * The player's current injury status; in the form of likelihood that player plays Possible
   * values: Probable; Questionable; Doubtful; Out
   */
  injuryStatus?: string | null;
  /** The body part that is injured (Knee, Groin, Calf, Hamstring, etc.) */
  injuryBodyPart?: string | null;
  /** The day that the injury started or first discovered. */
  injuryStartDate?: string | null;
  /** Brief description of the player's injury and expected availability. */
  injuryNotes?: string | null;
  /** The player's cross reference PlayerID to FanDuel. */
  fanDuelPlayerId?: number | null;
  /** The player's cross reference PlayerID to DraftKings. */
  draftKingsPlayerId?: number | null;
  /** The player's cross reference PlayerID to Yahoo Daily Fantasy Sports Contests. */
  yahooPlayerId?: number | null;
  /** The player's full name in FanDuel's daily fantasy sports platform. */
  fanDuelName?: string | null;
  /** The player's full name in DraftKings' daily fantasy sports platform. */
  draftKingsName?: string | null;
  /** The player's full name in Yahoo's daily fantasy sports platform. */
  yahooName?: string | null;
  /** The position of the player on the depth chart. */
  depthChartPosition?: string | null;
  /** The order of the player on the depth chart. */
  depthChartOrder?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** The player's full name in FantasyDraft's daily fantasy sports platform. */
  fantasyDraftName?: string | null;
  /** The player's cross reference PlayerID to Fantasy Draft. */
  fantasyDraftPlayerId?: number | null;
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
  /** The player's personID on nba dot com */
  nbaDotComPlayerId?: number | null;
};

export const player1Schema: Schema<Player1> = s.object<Player1>({
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
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  highSchool: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  salary: s.optionalNullable(s.int()),
  photoUrl: s.optionalNullable(s.string()),
  experience: s.optionalNullable(s.int()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  rotoworldPlayerId: s.optionalNullable(s.int()),
  rotoWirePlayerId: s.optionalNullable(s.int()),
  fantasyAlarmPlayerId: s.optionalNullable(s.int()),
  statsPlayerId: s.optionalNullable(s.int()),
  sportsDirectPlayerId: s.optionalNullable(s.int()),
  xmlTeamPlayerId: s.optionalNullable(s.int()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  fanDuelPlayerId: s.optionalNullable(s.int()),
  draftKingsPlayerId: s.optionalNullable(s.int()),
  yahooPlayerId: s.optionalNullable(s.int()),
  fanDuelName: s.optionalNullable(s.string()),
  draftKingsName: s.optionalNullable(s.string()),
  yahooName: s.optionalNullable(s.string()),
  depthChartPosition: s.optionalNullable(s.string()),
  depthChartOrder: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.int()),
  usaTodayPlayerId: s.optionalNullable(s.int()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  nbaDotComPlayerId: s.optionalNullable(s.int()),
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
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    highSchool: "HighSchool",
    college: "College",
    salary: "Salary",
    photoUrl: "PhotoUrl",
    experience: "Experience",
    sportRadarPlayerId: "SportRadarPlayerID",
    rotoworldPlayerId: "RotoworldPlayerID",
    rotoWirePlayerId: "RotoWirePlayerID",
    fantasyAlarmPlayerId: "FantasyAlarmPlayerID",
    statsPlayerId: "StatsPlayerID",
    sportsDirectPlayerId: "SportsDirectPlayerID",
    xmlTeamPlayerId: "XmlTeamPlayerID",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    fanDuelPlayerId: "FanDuelPlayerID",
    draftKingsPlayerId: "DraftKingsPlayerID",
    yahooPlayerId: "YahooPlayerID",
    fanDuelName: "FanDuelName",
    draftKingsName: "DraftKingsName",
    yahooName: "YahooName",
    depthChartPosition: "DepthChartPosition",
    depthChartOrder: "DepthChartOrder",
    globalTeamId: "GlobalTeamID",
    fantasyDraftName: "FantasyDraftName",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
    nbaDotComPlayerId: "NbaDotComPlayerID",
  },
});
