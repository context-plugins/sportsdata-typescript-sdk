import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerSeason5 = {
  statId?: number;
  teamId?: number | null;
  playerId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  name?: string | null;
  team?: string | null;
  position?: string | null;
  positionCategory?: string | null;
  globalTeamId?: number | null;
  updated?: string | null;
  created?: string | null;
  games?: number | null;
  fantasyPoints?: number | null;
  passingAttempts?: number | null;
  passingCompletions?: number | null;
  passingYards?: number | null;
  passingCompletionPercentage?: number | null;
  passingYardsPerAttempt?: number | null;
  passingYardsPerCompletion?: number | null;
  passingTouchdowns?: number | null;
  passingInterceptions?: number | null;
  passingRating?: number | null;
  rushingAttempts?: number | null;
  rushingYards?: number | null;
  rushingYardsPerAttempt?: number | null;
  rushingTouchdowns?: number | null;
  rushingLong?: number | null;
  receptions?: number | null;
  receivingYards?: number | null;
  receivingYardsPerReception?: number | null;
  receivingTouchdowns?: number | null;
  receivingLong?: number | null;
  puntReturns?: number | null;
  puntReturnYards?: number | null;
  puntReturnYardsPerAttempt?: number | null;
  puntReturnTouchdowns?: number | null;
  puntReturnLong?: number | null;
  kickReturns?: number | null;
  kickReturnYards?: number | null;
  kickReturnYardsPerAttempt?: number | null;
  kickReturnTouchdowns?: number | null;
  kickReturnLong?: number | null;
  punts?: number | null;
  puntYards?: number | null;
  puntAverage?: number | null;
  puntLong?: number | null;
  fieldGoalsAttempted?: number | null;
  fieldGoalsMade?: number | null;
  fieldGoalPercentage?: number | null;
  fieldGoalsLongestMade?: number | null;
  extraPointsAttempted?: number | null;
  extraPointsMade?: number | null;
  interceptions?: number | null;
  interceptionReturnYards?: number | null;
  interceptionReturnTouchdowns?: number | null;
  soloTackles?: number | null;
  assistedTackles?: number | null;
  tacklesForLoss?: number | null;
  sacks?: number | null;
  passesDefended?: number | null;
  fumblesRecovered?: number | null;
  fumbleReturnTouchdowns?: number | null;
  quarterbackHurries?: number | null;
  fumbles?: number | null;
  fumblesLost?: number | null;
};

export const playerSeason5Schema: Schema<PlayerSeason5> = s.object<PlayerSeason5>({
  statId: s.optional(s.number()),
  teamId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  seasonType: s.optionalNullable(s.number()),
  season: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.number()),
  fantasyPoints: s.optionalNullable(s.number()),
  passingAttempts: s.optionalNullable(s.number()),
  passingCompletions: s.optionalNullable(s.number()),
  passingYards: s.optionalNullable(s.number()),
  passingCompletionPercentage: s.optionalNullable(s.number()),
  passingYardsPerAttempt: s.optionalNullable(s.number()),
  passingYardsPerCompletion: s.optionalNullable(s.number()),
  passingTouchdowns: s.optionalNullable(s.number()),
  passingInterceptions: s.optionalNullable(s.number()),
  passingRating: s.optionalNullable(s.number()),
  rushingAttempts: s.optionalNullable(s.number()),
  rushingYards: s.optionalNullable(s.number()),
  rushingYardsPerAttempt: s.optionalNullable(s.number()),
  rushingTouchdowns: s.optionalNullable(s.number()),
  rushingLong: s.optionalNullable(s.number()),
  receptions: s.optionalNullable(s.number()),
  receivingYards: s.optionalNullable(s.number()),
  receivingYardsPerReception: s.optionalNullable(s.number()),
  receivingTouchdowns: s.optionalNullable(s.number()),
  receivingLong: s.optionalNullable(s.number()),
  puntReturns: s.optionalNullable(s.number()),
  puntReturnYards: s.optionalNullable(s.number()),
  puntReturnYardsPerAttempt: s.optionalNullable(s.number()),
  puntReturnTouchdowns: s.optionalNullable(s.number()),
  puntReturnLong: s.optionalNullable(s.number()),
  kickReturns: s.optionalNullable(s.number()),
  kickReturnYards: s.optionalNullable(s.number()),
  kickReturnYardsPerAttempt: s.optionalNullable(s.number()),
  kickReturnTouchdowns: s.optionalNullable(s.number()),
  kickReturnLong: s.optionalNullable(s.number()),
  punts: s.optionalNullable(s.number()),
  puntYards: s.optionalNullable(s.number()),
  puntAverage: s.optionalNullable(s.number()),
  puntLong: s.optionalNullable(s.number()),
  fieldGoalsAttempted: s.optionalNullable(s.number()),
  fieldGoalsMade: s.optionalNullable(s.number()),
  fieldGoalPercentage: s.optionalNullable(s.number()),
  fieldGoalsLongestMade: s.optionalNullable(s.number()),
  extraPointsAttempted: s.optionalNullable(s.number()),
  extraPointsMade: s.optionalNullable(s.number()),
  interceptions: s.optionalNullable(s.number()),
  interceptionReturnYards: s.optionalNullable(s.number()),
  interceptionReturnTouchdowns: s.optionalNullable(s.number()),
  soloTackles: s.optionalNullable(s.number()),
  assistedTackles: s.optionalNullable(s.number()),
  tacklesForLoss: s.optionalNullable(s.number()),
  sacks: s.optionalNullable(s.number()),
  passesDefended: s.optionalNullable(s.number()),
  fumblesRecovered: s.optionalNullable(s.number()),
  fumbleReturnTouchdowns: s.optionalNullable(s.number()),
  quarterbackHurries: s.optionalNullable(s.number()),
  fumbles: s.optionalNullable(s.number()),
  fumblesLost: s.optionalNullable(s.number()),
  _keysMap: {
    statId: "StatID",
    teamId: "TeamID",
    playerId: "PlayerID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    position: "Position",
    positionCategory: "PositionCategory",
    globalTeamId: "GlobalTeamID",
    updated: "Updated",
    created: "Created",
    games: "Games",
    fantasyPoints: "FantasyPoints",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingCompletionPercentage: "PassingCompletionPercentage",
    passingYardsPerAttempt: "PassingYardsPerAttempt",
    passingYardsPerCompletion: "PassingYardsPerCompletion",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingRating: "PassingRating",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingYardsPerAttempt: "RushingYardsPerAttempt",
    rushingTouchdowns: "RushingTouchdowns",
    rushingLong: "RushingLong",
    receptions: "Receptions",
    receivingYards: "ReceivingYards",
    receivingYardsPerReception: "ReceivingYardsPerReception",
    receivingTouchdowns: "ReceivingTouchdowns",
    receivingLong: "ReceivingLong",
    puntReturns: "PuntReturns",
    puntReturnYards: "PuntReturnYards",
    puntReturnYardsPerAttempt: "PuntReturnYardsPerAttempt",
    puntReturnTouchdowns: "PuntReturnTouchdowns",
    puntReturnLong: "PuntReturnLong",
    kickReturns: "KickReturns",
    kickReturnYards: "KickReturnYards",
    kickReturnYardsPerAttempt: "KickReturnYardsPerAttempt",
    kickReturnTouchdowns: "KickReturnTouchdowns",
    kickReturnLong: "KickReturnLong",
    punts: "Punts",
    puntYards: "PuntYards",
    puntAverage: "PuntAverage",
    puntLong: "PuntLong",
    fieldGoalsAttempted: "FieldGoalsAttempted",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalPercentage: "FieldGoalPercentage",
    fieldGoalsLongestMade: "FieldGoalsLongestMade",
    extraPointsAttempted: "ExtraPointsAttempted",
    extraPointsMade: "ExtraPointsMade",
    interceptions: "Interceptions",
    interceptionReturnYards: "InterceptionReturnYards",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    tacklesForLoss: "TacklesForLoss",
    sacks: "Sacks",
    passesDefended: "PassesDefended",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    quarterbackHurries: "QuarterbackHurries",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
  },
});
