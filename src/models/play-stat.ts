import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayStat = {
  playStatId?: number;
  playId?: number;
  sequence?: number;
  playerId?: number;
  name?: string | null;
  team?: string | null;
  opponent?: string | null;
  homeOrAway?: string | null;
  direction?: string | null;
  updated?: string | null;
  created?: string | null;
  passingAttempts?: number | null;
  passingCompletions?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passingInterceptions?: number | null;
  passingSacks?: number | null;
  passingSackYards?: number | null;
  rushingAttempts?: number | null;
  rushingYards?: number | null;
  rushingTouchdowns?: number | null;
  receivingTargets?: number | null;
  receptions?: number | null;
  receivingYards?: number | null;
  receivingTouchdowns?: number | null;
  fumbles?: number | null;
  fumblesLost?: number | null;
  twoPointConversionAttempts?: number | null;
  twoPointConversionPasses?: number | null;
  twoPointConversionRuns?: number | null;
  twoPointConversionReceptions?: number | null;
  twoPointConversionReturns?: number | null;
  soloTackles?: number | null;
  assistedTackles?: number | null;
  tacklesForLoss?: number | null;
  sacks?: number | null;
  sackYards?: number | null;
  passesDefended?: number | null;
  safeties?: number | null;
  fumblesForced?: number | null;
  fumblesRecovered?: number | null;
  fumbleReturnYards?: number | null;
  fumbleReturnTouchdowns?: number | null;
  interceptions?: number | null;
  interceptionReturnYards?: number | null;
  interceptionReturnTouchdowns?: number | null;
  puntReturns?: number | null;
  puntReturnYards?: number | null;
  puntReturnTouchdowns?: number | null;
  kickReturns?: number | null;
  kickReturnYards?: number | null;
  kickReturnTouchdowns?: number | null;
  blockedKicks?: number | null;
  blockedKickReturns?: number | null;
  blockedKickReturnYards?: number | null;
  blockedKickReturnTouchdowns?: number | null;
  fieldGoalReturns?: number | null;
  fieldGoalReturnYards?: number | null;
  fieldGoalReturnTouchdowns?: number | null;
  kickoffs?: number | null;
  kickoffYards?: number | null;
  kickoffTouchbacks?: number | null;
  punts?: number | null;
  puntYards?: number | null;
  puntTouchbacks?: number | null;
  puntsHadBlocked?: number | null;
  fieldGoalsAttempted?: number | null;
  fieldGoalsMade?: number | null;
  fieldGoalsYards?: number | null;
  fieldGoalsHadBlocked?: number | null;
  extraPointsAttempted?: number | null;
  extraPointsMade?: number | null;
  extraPointsHadBlocked?: number | null;
  penalties?: number | null;
  penaltyYards?: number | null;
};

export const playStatSchema: Schema<PlayStat> = s.object<PlayStat>({
  playStatId: s.optional(s.number()),
  playId: s.optional(s.number()),
  sequence: s.optional(s.number()),
  playerId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  direction: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  passingAttempts: s.optionalNullable(s.number()),
  passingCompletions: s.optionalNullable(s.number()),
  passingYards: s.optionalNullable(s.number()),
  passingTouchdowns: s.optionalNullable(s.number()),
  passingInterceptions: s.optionalNullable(s.number()),
  passingSacks: s.optionalNullable(s.number()),
  passingSackYards: s.optionalNullable(s.number()),
  rushingAttempts: s.optionalNullable(s.number()),
  rushingYards: s.optionalNullable(s.number()),
  rushingTouchdowns: s.optionalNullable(s.number()),
  receivingTargets: s.optionalNullable(s.number()),
  receptions: s.optionalNullable(s.number()),
  receivingYards: s.optionalNullable(s.number()),
  receivingTouchdowns: s.optionalNullable(s.number()),
  fumbles: s.optionalNullable(s.number()),
  fumblesLost: s.optionalNullable(s.number()),
  twoPointConversionAttempts: s.optionalNullable(s.number()),
  twoPointConversionPasses: s.optionalNullable(s.number()),
  twoPointConversionRuns: s.optionalNullable(s.number()),
  twoPointConversionReceptions: s.optionalNullable(s.number()),
  twoPointConversionReturns: s.optionalNullable(s.number()),
  soloTackles: s.optionalNullable(s.number()),
  assistedTackles: s.optionalNullable(s.number()),
  tacklesForLoss: s.optionalNullable(s.number()),
  sacks: s.optionalNullable(s.number()),
  sackYards: s.optionalNullable(s.number()),
  passesDefended: s.optionalNullable(s.number()),
  safeties: s.optionalNullable(s.number()),
  fumblesForced: s.optionalNullable(s.number()),
  fumblesRecovered: s.optionalNullable(s.number()),
  fumbleReturnYards: s.optionalNullable(s.number()),
  fumbleReturnTouchdowns: s.optionalNullable(s.number()),
  interceptions: s.optionalNullable(s.number()),
  interceptionReturnYards: s.optionalNullable(s.number()),
  interceptionReturnTouchdowns: s.optionalNullable(s.number()),
  puntReturns: s.optionalNullable(s.number()),
  puntReturnYards: s.optionalNullable(s.number()),
  puntReturnTouchdowns: s.optionalNullable(s.number()),
  kickReturns: s.optionalNullable(s.number()),
  kickReturnYards: s.optionalNullable(s.number()),
  kickReturnTouchdowns: s.optionalNullable(s.number()),
  blockedKicks: s.optionalNullable(s.number()),
  blockedKickReturns: s.optionalNullable(s.number()),
  blockedKickReturnYards: s.optionalNullable(s.number()),
  blockedKickReturnTouchdowns: s.optionalNullable(s.number()),
  fieldGoalReturns: s.optionalNullable(s.number()),
  fieldGoalReturnYards: s.optionalNullable(s.number()),
  fieldGoalReturnTouchdowns: s.optionalNullable(s.number()),
  kickoffs: s.optionalNullable(s.number()),
  kickoffYards: s.optionalNullable(s.number()),
  kickoffTouchbacks: s.optionalNullable(s.number()),
  punts: s.optionalNullable(s.number()),
  puntYards: s.optionalNullable(s.number()),
  puntTouchbacks: s.optionalNullable(s.number()),
  puntsHadBlocked: s.optionalNullable(s.number()),
  fieldGoalsAttempted: s.optionalNullable(s.number()),
  fieldGoalsMade: s.optionalNullable(s.number()),
  fieldGoalsYards: s.optionalNullable(s.number()),
  fieldGoalsHadBlocked: s.optionalNullable(s.number()),
  extraPointsAttempted: s.optionalNullable(s.number()),
  extraPointsMade: s.optionalNullable(s.number()),
  extraPointsHadBlocked: s.optionalNullable(s.number()),
  penalties: s.optionalNullable(s.number()),
  penaltyYards: s.optionalNullable(s.number()),
  _keysMap: {
    playStatId: "PlayStatID",
    playId: "PlayID",
    sequence: "Sequence",
    playerId: "PlayerID",
    name: "Name",
    team: "Team",
    opponent: "Opponent",
    homeOrAway: "HomeOrAway",
    direction: "Direction",
    updated: "Updated",
    created: "Created",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingSacks: "PassingSacks",
    passingSackYards: "PassingSackYards",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingTouchdowns: "RushingTouchdowns",
    receivingTargets: "ReceivingTargets",
    receptions: "Receptions",
    receivingYards: "ReceivingYards",
    receivingTouchdowns: "ReceivingTouchdowns",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
    twoPointConversionAttempts: "TwoPointConversionAttempts",
    twoPointConversionPasses: "TwoPointConversionPasses",
    twoPointConversionRuns: "TwoPointConversionRuns",
    twoPointConversionReceptions: "TwoPointConversionReceptions",
    twoPointConversionReturns: "TwoPointConversionReturns",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    tacklesForLoss: "TacklesForLoss",
    sacks: "Sacks",
    sackYards: "SackYards",
    passesDefended: "PassesDefended",
    safeties: "Safeties",
    fumblesForced: "FumblesForced",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnYards: "FumbleReturnYards",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    interceptions: "Interceptions",
    interceptionReturnYards: "InterceptionReturnYards",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    puntReturns: "PuntReturns",
    puntReturnYards: "PuntReturnYards",
    puntReturnTouchdowns: "PuntReturnTouchdowns",
    kickReturns: "KickReturns",
    kickReturnYards: "KickReturnYards",
    kickReturnTouchdowns: "KickReturnTouchdowns",
    blockedKicks: "BlockedKicks",
    blockedKickReturns: "BlockedKickReturns",
    blockedKickReturnYards: "BlockedKickReturnYards",
    blockedKickReturnTouchdowns: "BlockedKickReturnTouchdowns",
    fieldGoalReturns: "FieldGoalReturns",
    fieldGoalReturnYards: "FieldGoalReturnYards",
    fieldGoalReturnTouchdowns: "FieldGoalReturnTouchdowns",
    kickoffs: "Kickoffs",
    kickoffYards: "KickoffYards",
    kickoffTouchbacks: "KickoffTouchbacks",
    punts: "Punts",
    puntYards: "PuntYards",
    puntTouchbacks: "PuntTouchbacks",
    puntsHadBlocked: "PuntsHadBlocked",
    fieldGoalsAttempted: "FieldGoalsAttempted",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalsYards: "FieldGoalsYards",
    fieldGoalsHadBlocked: "FieldGoalsHadBlocked",
    extraPointsAttempted: "ExtraPointsAttempted",
    extraPointsMade: "ExtraPointsMade",
    extraPointsHadBlocked: "ExtraPointsHadBlocked",
    penalties: "Penalties",
    penaltyYards: "PenaltyYards",
  },
});
