import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerSeasonProjection1 = {
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
  /** The NBA season in which these totals apply */
  season?: number | null;
  /** The name of the player */
  name?: string | null;
  /** The abbreviation [Key] of the player's team */
  team?: string | null;
  /**
   * The player's position associated with the given game or season. Possible values: PG; SG; SF;
   * PF; C
   */
  position?: string | null;
  /** Indicates how many games the player has started in the season */
  started?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
  /** The number of games played */
  games?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
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
  /** Total offensive rebounds percentage */
  offensiveReboundsPercentage?: number | null;
  /** Total defensive rebounds percentage */
  defensiveReboundsPercentage?: number | null;
  /** The player/team total rebounds percentage */
  totalReboundsPercentage?: number | null;
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
  /**
   * The player's linear weight efficiency rating as defined here:
   * http://bleacherreport.com/articles/113144-cracking-the-code-how-to-calculate-hollingers-per-without-all-the-mess
   */
  playerEfficiencyRating?: number | null;
  /**
   * The player's assist percentage as defined here:
   * http://www.basketball-reference.com/about/glossary.html
   */
  assistsPercentage?: number | null;
  /**
   * The player's steal percentage as defined here:
   * http://www.basketball-reference.com/about/glossary.html
   */
  stealsPercentage?: number | null;
  /**
   * The player's block percentage as defined here:
   * http://www.basketball-reference.com/about/glossary.html
   */
  blocksPercentage?: number | null;
  /**
   * The player's turnover percentage as defined here:
   * http://www.basketball-reference.com/about/glossary.html
   */
  turnOversPercentage?: number | null;
  /**
   * The player's usage rate percentage as defined here:
   * http://www.basketball-reference.com/about/glossary.html
   */
  usageRatePercentage?: number | null;
  /** Total FanDuel daily fantasy points scored */
  fantasyPointsFanDuel?: number | null;
  /** Total DraftKings daily fantasy points scored */
  fantasyPointsDraftKings?: number | null;
  /** Total Yahoo daily fantasy points scored */
  fantasyPointsYahoo?: number | null;
  /** Total plus minus */
  plusMinus?: number | null;
  /** Total double-doubles scored */
  doubleDoubles?: number | null;
  /** Total triple-doubles scored */
  tripleDoubles?: number | null;
  /** Total FantasyDraft daily fantasy points scored */
  fantasyPointsFantasyDraft?: number | null;
  /**
   * Indicates whether the game is over and the stats for this player have been verified and closed
   * out.
   */
  isClosed?: boolean;
  /** Indicates whether starting lineup is confirmed */
  lineupConfirmed?: boolean | null;
  /** Indicates whether player is starting, active, or inactive */
  lineupStatus?: string | null;
};

export const playerSeasonProjection1Schema: Schema<PlayerSeasonProjection1> =
  s.object<PlayerSeasonProjection1>({
    statId: s.optional(s.int()),
    teamId: s.optionalNullable(s.int()),
    playerId: s.optionalNullable(s.int()),
    seasonType: s.optionalNullable(s.int()),
    season: s.optionalNullable(s.int()),
    name: s.optionalNullable(s.string()),
    team: s.optionalNullable(s.string()),
    position: s.optionalNullable(s.string()),
    started: s.optionalNullable(s.int()),
    globalTeamId: s.optionalNullable(s.int()),
    updated: s.optionalNullable(s.string()),
    games: s.optionalNullable(s.int()),
    fantasyPoints: s.optionalNullable(s.float64()),
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
    offensiveReboundsPercentage: s.optionalNullable(s.float64()),
    defensiveReboundsPercentage: s.optionalNullable(s.float64()),
    totalReboundsPercentage: s.optionalNullable(s.float64()),
    assists: s.optionalNullable(s.float64()),
    steals: s.optionalNullable(s.float64()),
    blockedShots: s.optionalNullable(s.float64()),
    turnovers: s.optionalNullable(s.float64()),
    personalFouls: s.optionalNullable(s.float64()),
    points: s.optionalNullable(s.float64()),
    trueShootingAttempts: s.optionalNullable(s.float64()),
    trueShootingPercentage: s.optionalNullable(s.float64()),
    playerEfficiencyRating: s.optionalNullable(s.float64()),
    assistsPercentage: s.optionalNullable(s.float64()),
    stealsPercentage: s.optionalNullable(s.float64()),
    blocksPercentage: s.optionalNullable(s.float64()),
    turnOversPercentage: s.optionalNullable(s.float64()),
    usageRatePercentage: s.optionalNullable(s.float64()),
    fantasyPointsFanDuel: s.optionalNullable(s.float64()),
    fantasyPointsDraftKings: s.optionalNullable(s.float64()),
    fantasyPointsYahoo: s.optionalNullable(s.float64()),
    plusMinus: s.optionalNullable(s.float64()),
    doubleDoubles: s.optionalNullable(s.float64()),
    tripleDoubles: s.optionalNullable(s.float64()),
    fantasyPointsFantasyDraft: s.optionalNullable(s.float64()),
    isClosed: s.optional(s.boolean()),
    lineupConfirmed: s.optionalNullable(s.boolean()),
    lineupStatus: s.optionalNullable(s.string()),
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
      globalTeamId: "GlobalTeamID",
      updated: "Updated",
      games: "Games",
      fantasyPoints: "FantasyPoints",
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
      offensiveReboundsPercentage: "OffensiveReboundsPercentage",
      defensiveReboundsPercentage: "DefensiveReboundsPercentage",
      totalReboundsPercentage: "TotalReboundsPercentage",
      assists: "Assists",
      steals: "Steals",
      blockedShots: "BlockedShots",
      turnovers: "Turnovers",
      personalFouls: "PersonalFouls",
      points: "Points",
      trueShootingAttempts: "TrueShootingAttempts",
      trueShootingPercentage: "TrueShootingPercentage",
      playerEfficiencyRating: "PlayerEfficiencyRating",
      assistsPercentage: "AssistsPercentage",
      stealsPercentage: "StealsPercentage",
      blocksPercentage: "BlocksPercentage",
      turnOversPercentage: "TurnOversPercentage",
      usageRatePercentage: "UsageRatePercentage",
      fantasyPointsFanDuel: "FantasyPointsFanDuel",
      fantasyPointsDraftKings: "FantasyPointsDraftKings",
      fantasyPointsYahoo: "FantasyPointsYahoo",
      plusMinus: "PlusMinus",
      doubleDoubles: "DoubleDoubles",
      tripleDoubles: "TripleDoubles",
      fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
      isClosed: "IsClosed",
      lineupConfirmed: "LineupConfirmed",
      lineupStatus: "LineupStatus",
    },
  });
