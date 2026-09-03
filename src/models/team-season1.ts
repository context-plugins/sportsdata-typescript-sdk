import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { opponentSeason2Schema, type OpponentSeason2 } from "./opponent-season2.js";

export type TeamSeason1 = {
  statId?: number;
  teamId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  name?: string | null;
  team?: string | null;
  wins?: number | null;
  losses?: number | null;
  opponentPosition?: string | null;
  possessions?: number | null;
  globalTeamId?: number | null;
  opponentStat?: OpponentSeason2;
  updated?: string | null;
  games?: number | null;
  fantasyPoints?: number | null;
  minutes?: number | null;
  seconds?: number | null;
  fieldGoalsMade?: number | null;
  fieldGoalsAttempted?: number | null;
  fieldGoalsPercentage?: number | null;
  effectiveFieldGoalsPercentage?: number | null;
  twoPointersMade?: number | null;
  twoPointersAttempted?: number | null;
  twoPointersPercentage?: number | null;
  threePointersMade?: number | null;
  threePointersAttempted?: number | null;
  threePointersPercentage?: number | null;
  freeThrowsMade?: number | null;
  freeThrowsAttempted?: number | null;
  freeThrowsPercentage?: number | null;
  offensiveRebounds?: number | null;
  defensiveRebounds?: number | null;
  rebounds?: number | null;
  offensiveReboundsPercentage?: number | null;
  defensiveReboundsPercentage?: number | null;
  totalReboundsPercentage?: number | null;
  assists?: number | null;
  steals?: number | null;
  blockedShots?: number | null;
  turnovers?: number | null;
  personalFouls?: number | null;
  points?: number | null;
  trueShootingAttempts?: number | null;
  trueShootingPercentage?: number | null;
  playerEfficiencyRating?: number | null;
  assistsPercentage?: number | null;
  stealsPercentage?: number | null;
  blocksPercentage?: number | null;
  turnOversPercentage?: number | null;
  usageRatePercentage?: number | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsDraftKings?: number | null;
  fantasyPointsYahoo?: number | null;
  plusMinus?: number | null;
  doubleDoubles?: number | null;
  tripleDoubles?: number | null;
  fantasyPointsFantasyDraft?: number | null;
  isClosed?: boolean;
  lineupConfirmed?: boolean | null;
  lineupStatus?: string | null;
};

export const teamSeason1Schema: Schema<TeamSeason1> = s.object<TeamSeason1>({
  statId: s.optional(s.number()),
  teamId: s.optionalNullable(s.number()),
  seasonType: s.optionalNullable(s.number()),
  season: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  opponentPosition: s.optionalNullable(s.string()),
  possessions: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  opponentStat: s.optional(s.lazy(() => opponentSeason2Schema)),
  updated: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.number()),
  fantasyPoints: s.optionalNullable(s.number()),
  minutes: s.optionalNullable(s.number()),
  seconds: s.optionalNullable(s.number()),
  fieldGoalsMade: s.optionalNullable(s.number()),
  fieldGoalsAttempted: s.optionalNullable(s.number()),
  fieldGoalsPercentage: s.optionalNullable(s.number()),
  effectiveFieldGoalsPercentage: s.optionalNullable(s.number()),
  twoPointersMade: s.optionalNullable(s.number()),
  twoPointersAttempted: s.optionalNullable(s.number()),
  twoPointersPercentage: s.optionalNullable(s.number()),
  threePointersMade: s.optionalNullable(s.number()),
  threePointersAttempted: s.optionalNullable(s.number()),
  threePointersPercentage: s.optionalNullable(s.number()),
  freeThrowsMade: s.optionalNullable(s.number()),
  freeThrowsAttempted: s.optionalNullable(s.number()),
  freeThrowsPercentage: s.optionalNullable(s.number()),
  offensiveRebounds: s.optionalNullable(s.number()),
  defensiveRebounds: s.optionalNullable(s.number()),
  rebounds: s.optionalNullable(s.number()),
  offensiveReboundsPercentage: s.optionalNullable(s.number()),
  defensiveReboundsPercentage: s.optionalNullable(s.number()),
  totalReboundsPercentage: s.optionalNullable(s.number()),
  assists: s.optionalNullable(s.number()),
  steals: s.optionalNullable(s.number()),
  blockedShots: s.optionalNullable(s.number()),
  turnovers: s.optionalNullable(s.number()),
  personalFouls: s.optionalNullable(s.number()),
  points: s.optionalNullable(s.number()),
  trueShootingAttempts: s.optionalNullable(s.number()),
  trueShootingPercentage: s.optionalNullable(s.number()),
  playerEfficiencyRating: s.optionalNullable(s.number()),
  assistsPercentage: s.optionalNullable(s.number()),
  stealsPercentage: s.optionalNullable(s.number()),
  blocksPercentage: s.optionalNullable(s.number()),
  turnOversPercentage: s.optionalNullable(s.number()),
  usageRatePercentage: s.optionalNullable(s.number()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  plusMinus: s.optionalNullable(s.number()),
  doubleDoubles: s.optionalNullable(s.number()),
  tripleDoubles: s.optionalNullable(s.number()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.number()),
  isClosed: s.optional(s.boolean()),
  lineupConfirmed: s.optionalNullable(s.boolean()),
  lineupStatus: s.optionalNullable(s.string()),
  _keysMap: {
    statId: "StatID",
    teamId: "TeamID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    wins: "Wins",
    losses: "Losses",
    opponentPosition: "OpponentPosition",
    possessions: "Possessions",
    globalTeamId: "GlobalTeamID",
    opponentStat: "OpponentStat",
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
