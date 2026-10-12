import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGame6 = {
  /** The unique ID of the stat */
  statId?: number;
  /** The unique ID of the player's team */
  teamId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number | null;
  /** The WNBA season of the game */
  season?: number | null;
  /** Player's full name */
  name?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The player's primary position. Possible values: PG; SG; SF; PF; C */
  position?: string | null;
  /** Whether the player started in the game */
  started?: number | null;
  /**
   * Injury status used to project availability. Statuses: Probable; Questionable; Doubtful; Out. If
   * a player has a NULL injury status, they are healthy/available to play.
   */
  injuryStatus?: string | null;
  /**
   * "The player's body part(s) that are injured (e.g. Knee; Groin; Calf; Hamstring; etc.) Note: if
   * a player has multiple injured body parts they will appear as such - Hamstring/Ankle"
   */
  injuryBodyPart?: string | null;
  /** The date that the injury occurred, was first discovered, or was freshly updated */
  injuryStartDate?: string | null;
  /**
   * Short description of injury involving injured body part(s), game status, player name, team
   * name, and other extra news necessary. Notes are custom and can be unique.
   */
  injuryNotes?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** The unique ID of this game */
  gameId?: number | null;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game */
  dateTime?: string | null;
  /** Whether the team is home or away */
  homeOrAway?: string | null;
  /** Whether the game is over (true/false) */
  isGameOver?: boolean;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
  /** The number of games played */
  games?: number | null;
  /** Total number of minutes played */
  minutes?: number | null;
  /** Total number of seconds played */
  seconds?: number | null;
  /** Total number of field goals made */
  fieldGoalsMade?: number | null;
  /** Total number of field goals attempted */
  fieldGoalsAttempted?: number | null;
  /** Total field goal percentage */
  fieldGoalsPercentage?: number | null;
  /** Total effective field goals percentage */
  effectiveFieldGoalsPercentage?: number | null;
  /** Total two pointers made */
  twoPointersMade?: number | null;
  /** Total two pointers attempted */
  twoPointersAttempted?: number | null;
  /** Total two pointers percentage */
  twoPointersPercentage?: number | null;
  /** Total three pointers made */
  threePointersMade?: number | null;
  /** Total three pointers attempted */
  threePointersAttempted?: number | null;
  /** Total three pointers percentage */
  threePointersPercentage?: number | null;
  /** Total free throws made */
  freeThrowsMade?: number | null;
  /** Total free throws attempted */
  freeThrowsAttempted?: number | null;
  /** Total free throws percentage */
  freeThrowsPercentage?: number | null;
  /** Total offensive rebounds */
  offensiveRebounds?: number | null;
  /** Total defensive rebounds */
  defensiveRebounds?: number | null;
  /** Total rebounds */
  rebounds?: number | null;
  /** Total assists */
  assists?: number | null;
  /** Total steals */
  steals?: number | null;
  /** Total blocked shots */
  blockedShots?: number | null;
  /** Total turnovers */
  turnovers?: number | null;
  /** Total personal fouls */
  personalFouls?: number | null;
  /** Total points scored */
  points?: number | null;
  /**
   * The player's true shooting attempts as defined here:
   * http://www.basketball-reference.com/about/glossary.html
   */
  trueShootingAttempts?: number | null;
  /**
   * The player's true shooting percentage as defined here:
   * http://www.basketball-reference.com/about/glossary.html
   */
  trueShootingPercentage?: number | null;
  /** Total plus minus */
  plusMinus?: number | null;
  /** Total double-doubles scored */
  doubleDoubles?: number | null;
  /** Total triple-doubles scored */
  tripleDoubles?: number | null;
};

export const playerGame6Schema: Schema<PlayerGame6> = s.object<PlayerGame6>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  started: s.optionalNullable(s.int()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  gameId: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  isGameOver: s.optional(s.boolean()),
  globalGameId: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  minutes: s.optionalNullable(s.int()),
  seconds: s.optionalNullable(s.int()),
  fieldGoalsMade: s.optionalNullable(s.float64()),
  fieldGoalsAttempted: s.optionalNullable(s.float64()),
  fieldGoalsPercentage: s.optionalNullable(s.float64()),
  effectiveFieldGoalsPercentage: s.optionalNullable(s.float64()),
  twoPointersMade: s.optionalNullable(s.float64()),
  twoPointersAttempted: s.optionalNullable(s.float64()),
  twoPointersPercentage: s.optionalNullable(s.float64()),
  threePointersMade: s.optionalNullable(s.float64()),
  threePointersAttempted: s.optionalNullable(s.float64()),
  threePointersPercentage: s.optionalNullable(s.float64()),
  freeThrowsMade: s.optionalNullable(s.float64()),
  freeThrowsAttempted: s.optionalNullable(s.float64()),
  freeThrowsPercentage: s.optionalNullable(s.float64()),
  offensiveRebounds: s.optionalNullable(s.float64()),
  defensiveRebounds: s.optionalNullable(s.float64()),
  rebounds: s.optionalNullable(s.float64()),
  assists: s.optionalNullable(s.float64()),
  steals: s.optionalNullable(s.float64()),
  blockedShots: s.optionalNullable(s.float64()),
  turnovers: s.optionalNullable(s.float64()),
  personalFouls: s.optionalNullable(s.float64()),
  points: s.optionalNullable(s.float64()),
  trueShootingAttempts: s.optionalNullable(s.float64()),
  trueShootingPercentage: s.optionalNullable(s.float64()),
  plusMinus: s.optionalNullable(s.float64()),
  doubleDoubles: s.optionalNullable(s.float64()),
  tripleDoubles: s.optionalNullable(s.float64()),
  _keysMap: {
    statId: "StatID",
    teamId: "TeamID",
    playerId: "PlayerID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    position: "Position",
    started: "Started",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    globalTeamId: "GlobalTeamID",
    gameId: "GameID",
    day: "Day",
    dateTime: "DateTime",
    homeOrAway: "HomeOrAway",
    isGameOver: "IsGameOver",
    globalGameId: "GlobalGameID",
    updated: "Updated",
    games: "Games",
    minutes: "Minutes",
    seconds: "Seconds",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalsAttempted: "FieldGoalsAttempted",
    fieldGoalsPercentage: "FieldGoalsPercentage",
    effectiveFieldGoalsPercentage: "EffectiveFieldGoalsPercentage",
    twoPointersMade: "TwoPointersMade",
    twoPointersAttempted: "TwoPointersAttempted",
    twoPointersPercentage: "TwoPointersPercentage",
    threePointersMade: "ThreePointersMade",
    threePointersAttempted: "ThreePointersAttempted",
    threePointersPercentage: "ThreePointersPercentage",
    freeThrowsMade: "FreeThrowsMade",
    freeThrowsAttempted: "FreeThrowsAttempted",
    freeThrowsPercentage: "FreeThrowsPercentage",
    offensiveRebounds: "OffensiveRebounds",
    defensiveRebounds: "DefensiveRebounds",
    rebounds: "Rebounds",
    assists: "Assists",
    steals: "Steals",
    blockedShots: "BlockedShots",
    turnovers: "Turnovers",
    personalFouls: "PersonalFouls",
    points: "Points",
    trueShootingAttempts: "TrueShootingAttempts",
    trueShootingPercentage: "TrueShootingPercentage",
    plusMinus: "PlusMinus",
    doubleDoubles: "DoubleDoubles",
    tripleDoubles: "TripleDoubles",
  },
});
