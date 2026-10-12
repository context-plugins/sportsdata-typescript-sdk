import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player2 = {
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
  /** The abbreviation [Key] of the team that the player belongs to */
  team?: string | null;
  /** The player's jersey number. */
  jersey?: number | null;
  /** The player's position category. Possible values: DH, IF, OF, P, PH, PR */
  positionCategory?: string | null;
  /**
   * The player's position associated with the given game or season. Possible values: 1B; 2B; 3B; C;
   * CF; DH; IF; LF; OF; P; PH; PR; RF; RP; SP; SS
   */
  position?: string | null;
  /** The player's unique PlayerID for cross reference use with MLB AM */
  mlbamid?: number | null;
  /** The player's first name */
  firstName?: string | null;
  /** The player's last name */
  lastName?: string | null;
  /** The player's batting hand. Possible values: R, L, S */
  batHand?: string | null;
  /** The player's throwing hand. Possible values: R, L, S */
  throwHand?: string | null;
  /** The player's height in inches */
  height?: number | null;
  /** The weight of the player in pounds (lbs). */
  weight?: number | null;
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
   * The high school that the player attended. Note: If the player attended a college, this field
   * will be NULL
   */
  highSchool?: string | null;
  /**
   * The college that the player attended. Note: If player did not attend college this field will
   * contain "None" and a high school will be added if applicable
   */
  college?: string | null;
  /** The date that this player made his MLB debut. */
  proDebut?: string | null;
  /** Field is expected to be NULL */
  salary?: number | null;
  /** Field is expected to be NULL */
  photoUrl?: string | null;
  /** The player's unique PlayerID for cross reference use with Stats Player */
  sportRadarPlayerId?: string | null;
  /** The player's unique PlayerID for cross reference use with Rotoworld. */
  rotoworldPlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with RotoWire. */
  rotoWirePlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with FantasyAlarm */
  fantasyAlarmPlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with Stats Player. */
  statsPlayerId?: number | null;
  /**
   * The player's cross reference PlayerID to the SportsDirect data feeds, now part of Nielsen
   * GraceNote.
   */
  sportsDirectPlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with Xml Team */
  xmlTeamPlayerId?: number | null;
  /**
   * The player's current injury status; in the form of likelihood that player plays. Possible
   * values: Probable; Questionable; Doubtful; Out
   */
  injuryStatus?: string | null;
  /** Indicates the player's injured body part. (e.g. ankle; knee; elbow; etc.) */
  injuryBodyPart?: string | null;
  /** The day that the injury started or first discovered. */
  injuryStartDate?: string | null;
  /** Brief description of the player's injury and expected availability */
  injuryNotes?: string | null;
  /** The player's unique PlayerID for cross reference use with FanDuel */
  fanDuelPlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with DraftKings. */
  draftKingsPlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with Yahoo */
  yahooPlayerId?: number | null;
  /** The unique ID of a player's next upcoming game */
  upcomingGameId?: number | null;
  /** The player's name on FanDuel */
  fanDuelName?: string | null;
  /** The player's name on DraftKings */
  draftKingsName?: string | null;
  /** The player's name as displayed on/by Yahoo */
  yahooName?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** The player's name on Fantasy Draft */
  fantasyDraftName?: string | null;
  /** The player's unique PlayerID for cross reference use with Fantasy Draft */
  fantasyDraftPlayerId?: number | null;
  /** The player's years of experience */
  experience?: string | null;
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

export const player2Schema: Schema<Player2> = s.object<Player2>({
  playerId: s.optional(s.int()),
  sportsDataId: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  mlbamid: s.optionalNullable(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  batHand: s.optionalNullable(s.string()),
  throwHand: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  birthDate: s.optionalNullable(s.string()),
  birthCity: s.optionalNullable(s.string()),
  birthState: s.optionalNullable(s.string()),
  birthCountry: s.optionalNullable(s.string()),
  highSchool: s.optionalNullable(s.string()),
  college: s.optionalNullable(s.string()),
  proDebut: s.optionalNullable(s.string()),
  salary: s.optionalNullable(s.int()),
  photoUrl: s.optionalNullable(s.string()),
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
  upcomingGameId: s.optionalNullable(s.int()),
  fanDuelName: s.optionalNullable(s.string()),
  draftKingsName: s.optionalNullable(s.string()),
  yahooName: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.int()),
  experience: s.optionalNullable(s.string()),
  usaTodayPlayerId: s.optionalNullable(s.int()),
  usaTodayHeadshotUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  usaTodayHeadshotUpdated: s.optionalNullable(s.string()),
  usaTodayHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    sportsDataId: "SportsDataID",
    status: "Status",
    teamId: "TeamID",
    team: "Team",
    jersey: "Jersey",
    positionCategory: "PositionCategory",
    position: "Position",
    mlbamid: "MLBAMID",
    firstName: "FirstName",
    lastName: "LastName",
    batHand: "BatHand",
    throwHand: "ThrowHand",
    height: "Height",
    weight: "Weight",
    birthDate: "BirthDate",
    birthCity: "BirthCity",
    birthState: "BirthState",
    birthCountry: "BirthCountry",
    highSchool: "HighSchool",
    college: "College",
    proDebut: "ProDebut",
    salary: "Salary",
    photoUrl: "PhotoUrl",
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
    upcomingGameId: "UpcomingGameID",
    fanDuelName: "FanDuelName",
    draftKingsName: "DraftKingsName",
    yahooName: "YahooName",
    globalTeamId: "GlobalTeamID",
    fantasyDraftName: "FantasyDraftName",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    experience: "Experience",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
