import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGame6 = {
  statId?: number;
  teamId?: number | null;
  playerId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  name?: string | null;
  team?: string | null;
  position?: string | null;
  started?: number | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryStartDate?: string | null;
  injuryNotes?: string | null;
  globalTeamId?: number | null;
  gameId?: number | null;
  day?: string | null;
  dateTime?: string | null;
  homeOrAway?: string | null;
  isGameOver?: boolean;
  globalGameId?: number | null;
  updated?: string | null;
  games?: number | null;
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
  assists?: number | null;
  steals?: number | null;
  blockedShots?: number | null;
  turnovers?: number | null;
  personalFouls?: number | null;
  points?: number | null;
  trueShootingAttempts?: number | null;
  trueShootingPercentage?: number | null;
  plusMinus?: number | null;
  doubleDoubles?: number | null;
  tripleDoubles?: number | null;
};

export const playerGame6Schema: Schema<PlayerGame6> = s.object<PlayerGame6>({
  statId: s.optional(s.number()),
  teamId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  seasonType: s.optionalNullable(s.number()),
  season: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  started: s.optionalNullable(s.number()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  gameId: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  isGameOver: s.optional(s.boolean()),
  globalGameId: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.number()),
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
  assists: s.optionalNullable(s.number()),
  steals: s.optionalNullable(s.number()),
  blockedShots: s.optionalNullable(s.number()),
  turnovers: s.optionalNullable(s.number()),
  personalFouls: s.optionalNullable(s.number()),
  points: s.optionalNullable(s.number()),
  trueShootingAttempts: s.optionalNullable(s.number()),
  trueShootingPercentage: s.optionalNullable(s.number()),
  plusMinus: s.optionalNullable(s.number()),
  doubleDoubles: s.optionalNullable(s.number()),
  tripleDoubles: s.optionalNullable(s.number()),
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
