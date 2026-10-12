import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Player = {
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career.
   */
  playerId?: number;
  /**
   * The abbreviation [Key] of the team that the player is on. Note: If this player is a free agent;
   * this field is NULL.
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
   * KR; LB; LS; NT; OL; OLB; OT; P; QB; RB; S; SS; T; TE; WR.
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
  /** Player's weight in pounds */
  weight?: number | null;
  /** Player's date of birth */
  birthDate?: string | null;
  /** College team the player played for prior to turning professional */
  college?: string | null;
  /**
   * Number of years experience. Note: This number is incremented every year; in the Spring; when we
   * load the rookies following the NFL Draft. Rookies will have Experience = 0; while second year
   * players will have Experience = 2.
   */
  experience?: number | null;
  /**
   * The player's fantasy football position. Possible values: QB; RB; WR; TE; DL; LB; DB; K; P; OL.
   */
  fantasyPosition?: string | null;
  /** Whether or not the player is on the active roster of the NFL team (True/False) */
  active?: boolean | null;
  /** The category of the player's position (OFF; DEF; ST) */
  positionCategory?: string | null;
  /** Player's full name */
  name?: string | null;
  /** The player's current age */
  age?: number | null;
  /** The player's experience converted to a string */
  experienceString?: string | null;
  /** The player's date of birth converted to a string */
  birthDateString?: string | null;
  /**
   * This field is deprecated. Note: Headshots are now delivered through IMAGN. Please see our
   * Headshots products for further information.
   */
  photoUrl?: string | null;
  /** The week the player is on bye for the upcoming or current season */
  byeWeek?: number | null;
  /** The opposing team the player is playing against in the upcoming week */
  upcomingGameOpponent?: string | null;
  /**
   * The week of the player's upcoming game (this will be the upcoming week unless the player is on
   * Bye that week, which would bump it to the next week)
   */
  upcomingGameWeek?: number;
  /** The first initial and last name of the player (J. Doe) */
  shortName?: string | null;
  /** The average draft position of the player in re-draft leagues */
  averageDraftPosition?: number | null;
  /**
   * The category (Offense, Defense or Special Teams) of the players DepthPositionCategory (OFF,
   * DEF, ST)
   */
  depthPositionCategory?: string | null;
  /**
   * The position this player is listed at on his team's depth chart (e.g. QB; LWR; RDE; LILB, K)
   */
  depthPosition?: string | null;
  /**
   * The order this player is at his position (1 = Starter; 2 = Backup; 3 = 3rd String; 4 = 4th
   * String; 5 = 5th String)
   */
  depthOrder?: number | null;
  /** The display order of the positions (for display purposes) */
  depthDisplayOrder?: number | null;
  /**
   * The team who currently employs this player. This value is null when this player is unemployed
   * (for example a free agent or retired player).
   */
  currentTeam?: string | null;
  /**
   * The team who drafted this player. Note: If this player was an Undrafted Free Agent; then it's
   * the team who first signed him as a rookie.
   */
  collegeDraftTeam?: string | null;
  /** The year this player entered the NFL as a rookie */
  collegeDraftYear?: number | null;
  /** The round this player was drafted in */
  collegeDraftRound?: number | null;
  /** The overall pick in the draft this player was selected */
  collegeDraftPick?: number | null;
  /**
   * Whether this player was an undrafted free agent. This value is True if the player was not
   * drafted.
   */
  isUndraftedFreeAgent?: boolean;
  /** The feet component of a player's height (if player is 6'3", then this value would be 6) */
  heightFeet?: number | null;
  /** The inches component of a player's height (if player is 6'3", then this value would be 3) */
  heightInches?: number | null;
  /** The player's upcoming opponent's rank in fantasy points allowed */
  upcomingOpponentRank?: number | null;
  /** The player's upcoming opponent's rank in fantasy points allowed to his fantasy position */
  upcomingOpponentPositionRank?: number | null;
  /**
   * The player's current status. Possible values include Active, Inactive, Injured Reserve,
   * Physically Unable to Perform, Practice Squad, Suspended, Non Football Injury, Non-Football
   * Illness, Commissioner Exempt List, Exempt/Left Team, Paternity, Bereavement, Reserve/COVID-19,
   * and Voluntary Opt Out. Inactive indicates that this player is a free agent. Active indicates
   * that this player is on his team's active roster. Can also include injury status.
   */
  currentStatus?: string | null;
  /**
   * The player's salary for the upcoming week in accordance with a $50,000 salary cap. This is used
   * for daily fantasy sports salary cap contests. Salaries represent those published by DraftKings.
   * When DraftKings doesn't publish a salary for a given game; the most recent DraftKings salary is
   * used. We recommend using our new DFS endpoints instead.
   */
  upcomingSalary?: number | null;
  /** The player's cross reference PlayerID to the FantasyAlarm news feed */
  fantasyAlarmPlayerId?: number | null;
  /** The player's cross reference PlayerID to the SportRadar API */
  sportRadarPlayerId?: string | null;
  /** The player's cross reference PlayerID to the Rotoworld news feed */
  rotoworldPlayerId?: number | null;
  /** The player's cross reference PlayerID to the RotoWire news feed */
  rotoWirePlayerId?: number | null;
  /** The player's cross reference PlayerID to the STATS data feeds */
  statsPlayerId?: number | null;
  /**
   * The player's cross reference PlayerID to the SportsDirect data feeds, now part of Nielsen
   * GraceNote
   */
  sportsDirectPlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with XML Team data feeds */
  xmlTeamPlayerId?: number | null;
  /** The player's cross reference PlayerID to FanDuel */
  fanDuelPlayerId?: number | null;
  /** The player's cross reference PlayerID to DraftKings */
  draftKingsPlayerId?: number | null;
  /** The player's unique PlayerID for cross reference use with Yahoo */
  yahooPlayerId?: number | null;
  /**
   * The player's current injury status, in the form of likelihood that player plays (Probable,
   * Questionable, Doubtful, Out)
   */
  injuryStatus?: string | null;
  /** The body part that is injured for the player (Knee; Groin; Calf; Hamstring; etc.) */
  injuryBodyPart?: string | null;
  /** The day that the player's injury started or was first discovered */
  injuryStartDate?: string | null;
  /** A brief description of the player's injury and expected availability */
  injuryNotes?: string | null;
  /** The player's full name in FanDuel's daily fantasy sports platform */
  fanDuelName?: string | null;
  /** The player's full name in DraftKings' daily fantasy sports platform */
  draftKingsName?: string | null;
  /** The player's name in Yahoo's daily fantasy sports platform */
  yahooName?: string | null;
  /** The order this player is at his team's FantasyPosition */
  fantasyPositionDepthOrder?: number | null;
  /** This field is deprecated */
  injuryPractice?: string | null;
  /** This field is deprecated */
  injuryPracticeDescription?: string | null;
  /**
   * Whether the player has been declared inactive. This value is updated in the hours leading up to
   * game start time; as teams announce their inactive players. Note: This is only updated for
   * offensive skill position players (QB; RB; WR; TE).
   */
  declaredInactive?: boolean;
  /**
   * The player's FanDuel salary for the upcoming week. Note: We recommend using our new DFS
   * endpoints instead.
   */
  upcomingFanDuelSalary?: number | null;
  /**
   * The player's DraftKings salary for the upcoming week. Note: We recommend using our new DFS
   * endpoints instead.
   */
  upcomingDraftKingsSalary?: number | null;
  /**
   * The player's Yahoo salary for the upcoming week. We recommend using our new DFS endpoints
   * instead.
   */
  upcomingYahooSalary?: number | null;
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
  /** The player's cross reference PlayerID to FantasyDraft */
  fantasyDraftPlayerId?: number | null;
  /** The player's full name in FantasyDraft's daily fantasy sports platform */
  fantasyDraftName?: string | null;
  /** The player's cross reference PlayerID to USA Today headshot data feeds */
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

export const playerSchema: Schema<Player> = s.object<Player>({
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
  experienceString: s.optionalNullable(s.string()),
  birthDateString: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  byeWeek: s.optionalNullable(s.int()),
  upcomingGameOpponent: s.optionalNullable(s.string()),
  upcomingGameWeek: s.optional(s.int()),
  shortName: s.optionalNullable(s.string()),
  averageDraftPosition: s.optionalNullable(s.float64()),
  depthPositionCategory: s.optionalNullable(s.string()),
  depthPosition: s.optionalNullable(s.string()),
  depthOrder: s.optionalNullable(s.int()),
  depthDisplayOrder: s.optionalNullable(s.int()),
  currentTeam: s.optionalNullable(s.string()),
  collegeDraftTeam: s.optionalNullable(s.string()),
  collegeDraftYear: s.optionalNullable(s.int()),
  collegeDraftRound: s.optionalNullable(s.int()),
  collegeDraftPick: s.optionalNullable(s.int()),
  isUndraftedFreeAgent: s.optional(s.boolean()),
  heightFeet: s.optionalNullable(s.int()),
  heightInches: s.optionalNullable(s.int()),
  upcomingOpponentRank: s.optionalNullable(s.int()),
  upcomingOpponentPositionRank: s.optionalNullable(s.int()),
  currentStatus: s.optionalNullable(s.string()),
  upcomingSalary: s.optionalNullable(s.int()),
  fantasyAlarmPlayerId: s.optionalNullable(s.int()),
  sportRadarPlayerId: s.optionalNullable(s.string()),
  rotoworldPlayerId: s.optionalNullable(s.int()),
  rotoWirePlayerId: s.optionalNullable(s.int()),
  statsPlayerId: s.optionalNullable(s.int()),
  sportsDirectPlayerId: s.optionalNullable(s.int()),
  xmlTeamPlayerId: s.optionalNullable(s.int()),
  fanDuelPlayerId: s.optionalNullable(s.int()),
  draftKingsPlayerId: s.optionalNullable(s.int()),
  yahooPlayerId: s.optionalNullable(s.int()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  fanDuelName: s.optionalNullable(s.string()),
  draftKingsName: s.optionalNullable(s.string()),
  yahooName: s.optionalNullable(s.string()),
  fantasyPositionDepthOrder: s.optionalNullable(s.int()),
  injuryPractice: s.optionalNullable(s.string()),
  injuryPracticeDescription: s.optionalNullable(s.string()),
  declaredInactive: s.optional(s.boolean()),
  upcomingFanDuelSalary: s.optionalNullable(s.int()),
  upcomingDraftKingsSalary: s.optionalNullable(s.int()),
  upcomingYahooSalary: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  fantasyDraftPlayerId: s.optionalNullable(s.int()),
  fantasyDraftName: s.optionalNullable(s.string()),
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
    experienceString: "ExperienceString",
    birthDateString: "BirthDateString",
    photoUrl: "PhotoUrl",
    byeWeek: "ByeWeek",
    upcomingGameOpponent: "UpcomingGameOpponent",
    upcomingGameWeek: "UpcomingGameWeek",
    shortName: "ShortName",
    averageDraftPosition: "AverageDraftPosition",
    depthPositionCategory: "DepthPositionCategory",
    depthPosition: "DepthPosition",
    depthOrder: "DepthOrder",
    depthDisplayOrder: "DepthDisplayOrder",
    currentTeam: "CurrentTeam",
    collegeDraftTeam: "CollegeDraftTeam",
    collegeDraftYear: "CollegeDraftYear",
    collegeDraftRound: "CollegeDraftRound",
    collegeDraftPick: "CollegeDraftPick",
    isUndraftedFreeAgent: "IsUndraftedFreeAgent",
    heightFeet: "HeightFeet",
    heightInches: "HeightInches",
    upcomingOpponentRank: "UpcomingOpponentRank",
    upcomingOpponentPositionRank: "UpcomingOpponentPositionRank",
    currentStatus: "CurrentStatus",
    upcomingSalary: "UpcomingSalary",
    fantasyAlarmPlayerId: "FantasyAlarmPlayerID",
    sportRadarPlayerId: "SportRadarPlayerID",
    rotoworldPlayerId: "RotoworldPlayerID",
    rotoWirePlayerId: "RotoWirePlayerID",
    statsPlayerId: "StatsPlayerID",
    sportsDirectPlayerId: "SportsDirectPlayerID",
    xmlTeamPlayerId: "XmlTeamPlayerID",
    fanDuelPlayerId: "FanDuelPlayerID",
    draftKingsPlayerId: "DraftKingsPlayerID",
    yahooPlayerId: "YahooPlayerID",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    fanDuelName: "FanDuelName",
    draftKingsName: "DraftKingsName",
    yahooName: "YahooName",
    fantasyPositionDepthOrder: "FantasyPositionDepthOrder",
    injuryPractice: "InjuryPractice",
    injuryPracticeDescription: "InjuryPracticeDescription",
    declaredInactive: "DeclaredInactive",
    upcomingFanDuelSalary: "UpcomingFanDuelSalary",
    upcomingDraftKingsSalary: "UpcomingDraftKingsSalary",
    upcomingYahooSalary: "UpcomingYahooSalary",
    teamId: "TeamID",
    globalTeamId: "GlobalTeamID",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    fantasyDraftName: "FantasyDraftName",
    usaTodayPlayerId: "UsaTodayPlayerID",
    usaTodayHeadshotUrl: "UsaTodayHeadshotUrl",
    usaTodayHeadshotNoBackgroundUrl: "UsaTodayHeadshotNoBackgroundUrl",
    usaTodayHeadshotUpdated: "UsaTodayHeadshotUpdated",
    usaTodayHeadshotNoBackgroundUpdated: "UsaTodayHeadshotNoBackgroundUpdated",
  },
});
