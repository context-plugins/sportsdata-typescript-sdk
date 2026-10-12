import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamSeason5 = {
  /** The unique ID of the stat */
  statId?: number;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar)
   */
  seasonType?: number | null;
  /**
   * The season that the team is participating in. Note: season is a single year that the majority
   * of the season occurs in
   */
  season?: number | null;
  /** The team's full name */
  name?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The total number of wins by the team (conference & non-conference) */
  wins?: number | null;
  /** The total number of losses by the team (conference & non-conference) */
  losses?: number | null;
  /** The total number of conference wins by the team */
  conferenceWins?: number | null;
  /** The total number of conference losses by the team */
  conferenceLosses?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** Total number of estimated team possessions by the team in the season */
  possessions?: number | null;
  /** The timestamp of when the record was last updated (US Eastern Time). */
  updated?: string | null;
  /** The number of games played. */
  games?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
  /** Total number of minutes played */
  minutes?: number | null;
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
  /** Total points */
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
  /** Total Fan Duel daily fantasy points scored */
  fantasyPointsFanDuel?: number | null;
  /** Total Draft Kings daily fantasy points scored */
  fantasyPointsDraftKings?: number | null;
  /** Total Yahoo daily fantasy points scored */
  fantasyPointsYahoo?: number | null;
};

export const teamSeason5Schema: Schema<TeamSeason5> = s.object<TeamSeason5>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  conferenceWins: s.optionalNullable(s.int()),
  conferenceLosses: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  possessions: s.optionalNullable(s.float64()),
  updated: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  minutes: s.optionalNullable(s.int()),
  fieldGoalsMade: s.optionalNullable(s.int()),
  fieldGoalsAttempted: s.optionalNullable(s.int()),
  fieldGoalsPercentage: s.optionalNullable(s.float64()),
  effectiveFieldGoalsPercentage: s.optionalNullable(s.float64()),
  twoPointersMade: s.optionalNullable(s.int()),
  twoPointersAttempted: s.optionalNullable(s.int()),
  twoPointersPercentage: s.optionalNullable(s.float64()),
  threePointersMade: s.optionalNullable(s.int()),
  threePointersAttempted: s.optionalNullable(s.int()),
  threePointersPercentage: s.optionalNullable(s.float64()),
  freeThrowsMade: s.optionalNullable(s.int()),
  freeThrowsAttempted: s.optionalNullable(s.int()),
  freeThrowsPercentage: s.optionalNullable(s.float64()),
  offensiveRebounds: s.optionalNullable(s.int()),
  defensiveRebounds: s.optionalNullable(s.int()),
  rebounds: s.optionalNullable(s.int()),
  offensiveReboundsPercentage: s.optionalNullable(s.float64()),
  defensiveReboundsPercentage: s.optionalNullable(s.float64()),
  totalReboundsPercentage: s.optionalNullable(s.float64()),
  assists: s.optionalNullable(s.int()),
  steals: s.optionalNullable(s.int()),
  blockedShots: s.optionalNullable(s.int()),
  turnovers: s.optionalNullable(s.int()),
  personalFouls: s.optionalNullable(s.int()),
  points: s.optionalNullable(s.int()),
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
  _keysMap: {
    statId: "StatID",
    teamId: "TeamID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    wins: "Wins",
    losses: "Losses",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
    globalTeamId: "GlobalTeamID",
    possessions: "Possessions",
    updated: "Updated",
    games: "Games",
    fantasyPoints: "FantasyPoints",
    minutes: "Minutes",
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
  },
});
