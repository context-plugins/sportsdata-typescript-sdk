import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamGame6 = {
  /** The unique ID of the stat */
  statId?: number;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * The type of season that this record corresponds to. (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar; 6=Exhibition).
   */
  seasonType?: number | null;
  /** The WNBA season of the game */
  season?: number | null;
  /** The mascot of the team (e.g. Sparks; Suns; Dream; etc.) */
  name?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /**
   * The total number of wins by the team in the game. Note: this field will be zero or one for
   * single game feeds
   */
  wins?: number | null;
  /** Total number of team losses */
  losses?: number | null;
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

export const teamGame6Schema: Schema<TeamGame6> = s.object<TeamGame6>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
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
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    wins: "Wins",
    losses: "Losses",
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
