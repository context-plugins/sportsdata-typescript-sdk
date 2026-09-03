import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamGame = {
  gameKey?: string | null;
  date?: string | null;
  seasonType?: number;
  season?: number;
  week?: number | null;
  team?: string | null;
  opponent?: string | null;
  homeOrAway?: string | null;
  score?: number;
  opponentScore?: number;
  totalScore?: number;
  stadium?: string | null;
  playingSurface?: string | null;
  temperature?: number | null;
  humidity?: number | null;
  windSpeed?: number | null;
  overUnder?: number | null;
  pointSpread?: number | null;
  scoreQuarter1?: number | null;
  scoreQuarter2?: number | null;
  scoreQuarter3?: number | null;
  scoreQuarter4?: number | null;
  scoreOvertime?: number;
  timeOfPossessionMinutes?: number | null;
  timeOfPossessionSeconds?: number | null;
  timeOfPossession?: string | null;
  firstDowns?: number | null;
  firstDownsByRushing?: number | null;
  firstDownsByPassing?: number | null;
  firstDownsByPenalty?: number | null;
  offensivePlays?: number;
  offensiveYards?: number;
  offensiveYardsPerPlay?: number;
  touchdowns?: number | null;
  rushingAttempts?: number | null;
  rushingYards?: number | null;
  rushingYardsPerAttempt?: number;
  rushingTouchdowns?: number | null;
  passingAttempts?: number | null;
  passingCompletions?: number | null;
  passingYards?: number | null;
  passingTouchdowns?: number | null;
  passingInterceptions?: number | null;
  passingYardsPerAttempt?: number;
  passingYardsPerCompletion?: number;
  completionPercentage?: number;
  passerRating?: number | null;
  thirdDownAttempts?: number | null;
  thirdDownConversions?: number | null;
  thirdDownPercentage?: number | null;
  fourthDownAttempts?: number | null;
  fourthDownConversions?: number | null;
  fourthDownPercentage?: number | null;
  redZoneAttempts?: number | null;
  redZoneConversions?: number | null;
  goalToGoAttempts?: number | null;
  goalToGoConversions?: number | null;
  returnYards?: number | null;
  penalties?: number | null;
  penaltyYards?: number | null;
  fumbles?: number | null;
  fumblesLost?: number | null;
  timesSacked?: number | null;
  timesSackedYards?: number | null;
  quarterbackHits?: number | null;
  tacklesForLoss?: number | null;
  safeties?: number | null;
  punts?: number | null;
  puntYards?: number | null;
  puntAverage?: number;
  giveaways?: number;
  takeaways?: number;
  turnoverDifferential?: number;
  opponentScoreQuarter1?: number | null;
  opponentScoreQuarter2?: number | null;
  opponentScoreQuarter3?: number | null;
  opponentScoreQuarter4?: number | null;
  opponentScoreOvertime?: number;
  opponentTimeOfPossessionMinutes?: number | null;
  opponentTimeOfPossessionSeconds?: number | null;
  opponentTimeOfPossession?: string | null;
  opponentFirstDowns?: number | null;
  opponentFirstDownsByRushing?: number | null;
  opponentFirstDownsByPassing?: number | null;
  opponentFirstDownsByPenalty?: number | null;
  opponentOffensivePlays?: number;
  opponentOffensiveYards?: number;
  opponentOffensiveYardsPerPlay?: number;
  opponentTouchdowns?: number | null;
  opponentRushingAttempts?: number | null;
  opponentRushingYards?: number | null;
  opponentRushingYardsPerAttempt?: number;
  opponentRushingTouchdowns?: number | null;
  opponentPassingAttempts?: number | null;
  opponentPassingCompletions?: number | null;
  opponentPassingYards?: number | null;
  opponentPassingTouchdowns?: number | null;
  opponentPassingInterceptions?: number | null;
  opponentPassingYardsPerAttempt?: number;
  opponentPassingYardsPerCompletion?: number;
  opponentCompletionPercentage?: number;
  opponentPasserRating?: number | null;
  opponentThirdDownAttempts?: number | null;
  opponentThirdDownConversions?: number | null;
  opponentThirdDownPercentage?: number | null;
  opponentFourthDownAttempts?: number | null;
  opponentFourthDownConversions?: number | null;
  opponentFourthDownPercentage?: number | null;
  opponentRedZoneAttempts?: number | null;
  opponentRedZoneConversions?: number | null;
  opponentGoalToGoAttempts?: number | null;
  opponentGoalToGoConversions?: number | null;
  opponentReturnYards?: number | null;
  opponentPenalties?: number | null;
  opponentPenaltyYards?: number | null;
  opponentFumbles?: number | null;
  opponentFumblesLost?: number | null;
  opponentTimesSacked?: number | null;
  opponentTimesSackedYards?: number | null;
  opponentQuarterbackHits?: number | null;
  opponentTacklesForLoss?: number | null;
  opponentSafeties?: number | null;
  opponentPunts?: number | null;
  opponentPuntYards?: number | null;
  opponentPuntAverage?: number;
  opponentGiveaways?: number;
  opponentTakeaways?: number;
  opponentTurnoverDifferential?: number;
  redZonePercentage?: number | null;
  goalToGoPercentage?: number | null;
  quarterbackHitsDifferential?: number | null;
  tacklesForLossDifferential?: number | null;
  quarterbackSacksDifferential?: number;
  tacklesForLossPercentage?: number | null;
  quarterbackHitsPercentage?: number | null;
  timesSackedPercentage?: number;
  opponentRedZonePercentage?: number | null;
  opponentGoalToGoPercentage?: number | null;
  opponentQuarterbackHitsDifferential?: number | null;
  opponentTacklesForLossDifferential?: number | null;
  opponentQuarterbackSacksDifferential?: number | null;
  opponentTacklesForLossPercentage?: number | null;
  opponentQuarterbackHitsPercentage?: number | null;
  opponentTimesSackedPercentage?: number;
  kickoffs?: number | null;
  kickoffsInEndZone?: number | null;
  kickoffTouchbacks?: number | null;
  puntsHadBlocked?: number | null;
  puntNetAverage?: number | null;
  extraPointKickingAttempts?: number | null;
  extraPointKickingConversions?: number | null;
  extraPointsHadBlocked?: number | null;
  extraPointPassingAttempts?: number | null;
  extraPointPassingConversions?: number | null;
  extraPointRushingAttempts?: number | null;
  extraPointRushingConversions?: number | null;
  fieldGoalAttempts?: number | null;
  fieldGoalsMade?: number | null;
  fieldGoalsHadBlocked?: number | null;
  puntReturns?: number | null;
  puntReturnYards?: number | null;
  kickReturns?: number | null;
  kickReturnYards?: number | null;
  interceptionReturns?: number | null;
  interceptionReturnYards?: number | null;
  opponentKickoffs?: number | null;
  opponentKickoffsInEndZone?: number | null;
  opponentKickoffTouchbacks?: number | null;
  opponentPuntsHadBlocked?: number | null;
  opponentPuntNetAverage?: number | null;
  opponentExtraPointKickingAttempts?: number | null;
  opponentExtraPointKickingConversions?: number | null;
  opponentExtraPointsHadBlocked?: number | null;
  opponentExtraPointPassingAttempts?: number | null;
  opponentExtraPointPassingConversions?: number | null;
  opponentExtraPointRushingAttempts?: number | null;
  opponentExtraPointRushingConversions?: number | null;
  opponentFieldGoalAttempts?: number | null;
  opponentFieldGoalsMade?: number | null;
  opponentFieldGoalsHadBlocked?: number | null;
  opponentPuntReturns?: number | null;
  opponentPuntReturnYards?: number | null;
  opponentKickReturns?: number | null;
  opponentKickReturnYards?: number | null;
  opponentInterceptionReturns?: number | null;
  opponentInterceptionReturnYards?: number | null;
  soloTackles?: number | null;
  assistedTackles?: number | null;
  sacks?: number | null;
  sackYards?: number | null;
  passesDefended?: number | null;
  fumblesForced?: number | null;
  fumblesRecovered?: number | null;
  fumbleReturnYards?: number | null;
  fumbleReturnTouchdowns?: number | null;
  interceptionReturnTouchdowns?: number | null;
  blockedKicks?: number | null;
  puntReturnTouchdowns?: number | null;
  puntReturnLong?: number | null;
  kickReturnTouchdowns?: number | null;
  kickReturnLong?: number | null;
  blockedKickReturnYards?: number | null;
  blockedKickReturnTouchdowns?: number | null;
  fieldGoalReturnYards?: number | null;
  fieldGoalReturnTouchdowns?: number | null;
  puntNetYards?: number | null;
  opponentSoloTackles?: number | null;
  opponentAssistedTackles?: number | null;
  opponentSacks?: number | null;
  opponentSackYards?: number | null;
  opponentPassesDefended?: number | null;
  opponentFumblesForced?: number | null;
  opponentFumblesRecovered?: number | null;
  opponentFumbleReturnYards?: number | null;
  opponentFumbleReturnTouchdowns?: number | null;
  opponentInterceptionReturnTouchdowns?: number | null;
  opponentBlockedKicks?: number | null;
  opponentPuntReturnTouchdowns?: number | null;
  opponentPuntReturnLong?: number | null;
  opponentKickReturnTouchdowns?: number | null;
  opponentKickReturnLong?: number | null;
  opponentBlockedKickReturnYards?: number | null;
  opponentBlockedKickReturnTouchdowns?: number | null;
  opponentFieldGoalReturnYards?: number | null;
  opponentFieldGoalReturnTouchdowns?: number | null;
  opponentPuntNetYards?: number | null;
  isGameOver?: boolean | null;
  teamName?: string | null;
  dayOfWeek?: string | null;
  passingDropbacks?: number | null;
  opponentPassingDropbacks?: number | null;
  teamGameId?: number;
  pointDifferential?: number | null;
  passingInterceptionPercentage?: number | null;
  puntReturnAverage?: number | null;
  kickReturnAverage?: number | null;
  extraPointPercentage?: number | null;
  fieldGoalPercentage?: number | null;
  opponentPassingInterceptionPercentage?: number | null;
  opponentPuntReturnAverage?: number | null;
  opponentKickReturnAverage?: number | null;
  opponentExtraPointPercentage?: number | null;
  opponentFieldGoalPercentage?: number | null;
  penaltyYardDifferential?: number | null;
  puntReturnYardDifferential?: number | null;
  kickReturnYardDifferential?: number | null;
  twoPointConversionReturns?: number | null;
  opponentTwoPointConversionReturns?: number | null;
  teamId?: number | null;
  opponentId?: number | null;
  day?: string | null;
  dateTime?: string | null;
  globalGameId?: number | null;
  globalTeamId?: number | null;
  globalOpponentId?: number | null;
  scoreId?: number;
};

export const teamGameSchema: Schema<TeamGame> = s.object<TeamGame>({
  gameKey: s.optionalNullable(s.string()),
  date: s.optionalNullable(s.string()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  score: s.optional(s.number()),
  opponentScore: s.optional(s.number()),
  totalScore: s.optional(s.number()),
  stadium: s.optionalNullable(s.string()),
  playingSurface: s.optionalNullable(s.string()),
  temperature: s.optionalNullable(s.number()),
  humidity: s.optionalNullable(s.number()),
  windSpeed: s.optionalNullable(s.number()),
  overUnder: s.optionalNullable(s.number()),
  pointSpread: s.optionalNullable(s.number()),
  scoreQuarter1: s.optionalNullable(s.number()),
  scoreQuarter2: s.optionalNullable(s.number()),
  scoreQuarter3: s.optionalNullable(s.number()),
  scoreQuarter4: s.optionalNullable(s.number()),
  scoreOvertime: s.optional(s.number()),
  timeOfPossessionMinutes: s.optionalNullable(s.number()),
  timeOfPossessionSeconds: s.optionalNullable(s.number()),
  timeOfPossession: s.optionalNullable(s.string()),
  firstDowns: s.optionalNullable(s.number()),
  firstDownsByRushing: s.optionalNullable(s.number()),
  firstDownsByPassing: s.optionalNullable(s.number()),
  firstDownsByPenalty: s.optionalNullable(s.number()),
  offensivePlays: s.optional(s.number()),
  offensiveYards: s.optional(s.number()),
  offensiveYardsPerPlay: s.optional(s.number()),
  touchdowns: s.optionalNullable(s.number()),
  rushingAttempts: s.optionalNullable(s.number()),
  rushingYards: s.optionalNullable(s.number()),
  rushingYardsPerAttempt: s.optional(s.number()),
  rushingTouchdowns: s.optionalNullable(s.number()),
  passingAttempts: s.optionalNullable(s.number()),
  passingCompletions: s.optionalNullable(s.number()),
  passingYards: s.optionalNullable(s.number()),
  passingTouchdowns: s.optionalNullable(s.number()),
  passingInterceptions: s.optionalNullable(s.number()),
  passingYardsPerAttempt: s.optional(s.number()),
  passingYardsPerCompletion: s.optional(s.number()),
  completionPercentage: s.optional(s.number()),
  passerRating: s.optionalNullable(s.number()),
  thirdDownAttempts: s.optionalNullable(s.number()),
  thirdDownConversions: s.optionalNullable(s.number()),
  thirdDownPercentage: s.optionalNullable(s.number()),
  fourthDownAttempts: s.optionalNullable(s.number()),
  fourthDownConversions: s.optionalNullable(s.number()),
  fourthDownPercentage: s.optionalNullable(s.number()),
  redZoneAttempts: s.optionalNullable(s.number()),
  redZoneConversions: s.optionalNullable(s.number()),
  goalToGoAttempts: s.optionalNullable(s.number()),
  goalToGoConversions: s.optionalNullable(s.number()),
  returnYards: s.optionalNullable(s.number()),
  penalties: s.optionalNullable(s.number()),
  penaltyYards: s.optionalNullable(s.number()),
  fumbles: s.optionalNullable(s.number()),
  fumblesLost: s.optionalNullable(s.number()),
  timesSacked: s.optionalNullable(s.number()),
  timesSackedYards: s.optionalNullable(s.number()),
  quarterbackHits: s.optionalNullable(s.number()),
  tacklesForLoss: s.optionalNullable(s.number()),
  safeties: s.optionalNullable(s.number()),
  punts: s.optionalNullable(s.number()),
  puntYards: s.optionalNullable(s.number()),
  puntAverage: s.optional(s.number()),
  giveaways: s.optional(s.number()),
  takeaways: s.optional(s.number()),
  turnoverDifferential: s.optional(s.number()),
  opponentScoreQuarter1: s.optionalNullable(s.number()),
  opponentScoreQuarter2: s.optionalNullable(s.number()),
  opponentScoreQuarter3: s.optionalNullable(s.number()),
  opponentScoreQuarter4: s.optionalNullable(s.number()),
  opponentScoreOvertime: s.optional(s.number()),
  opponentTimeOfPossessionMinutes: s.optionalNullable(s.number()),
  opponentTimeOfPossessionSeconds: s.optionalNullable(s.number()),
  opponentTimeOfPossession: s.optionalNullable(s.string()),
  opponentFirstDowns: s.optionalNullable(s.number()),
  opponentFirstDownsByRushing: s.optionalNullable(s.number()),
  opponentFirstDownsByPassing: s.optionalNullable(s.number()),
  opponentFirstDownsByPenalty: s.optionalNullable(s.number()),
  opponentOffensivePlays: s.optional(s.number()),
  opponentOffensiveYards: s.optional(s.number()),
  opponentOffensiveYardsPerPlay: s.optional(s.number()),
  opponentTouchdowns: s.optionalNullable(s.number()),
  opponentRushingAttempts: s.optionalNullable(s.number()),
  opponentRushingYards: s.optionalNullable(s.number()),
  opponentRushingYardsPerAttempt: s.optional(s.number()),
  opponentRushingTouchdowns: s.optionalNullable(s.number()),
  opponentPassingAttempts: s.optionalNullable(s.number()),
  opponentPassingCompletions: s.optionalNullable(s.number()),
  opponentPassingYards: s.optionalNullable(s.number()),
  opponentPassingTouchdowns: s.optionalNullable(s.number()),
  opponentPassingInterceptions: s.optionalNullable(s.number()),
  opponentPassingYardsPerAttempt: s.optional(s.number()),
  opponentPassingYardsPerCompletion: s.optional(s.number()),
  opponentCompletionPercentage: s.optional(s.number()),
  opponentPasserRating: s.optionalNullable(s.number()),
  opponentThirdDownAttempts: s.optionalNullable(s.number()),
  opponentThirdDownConversions: s.optionalNullable(s.number()),
  opponentThirdDownPercentage: s.optionalNullable(s.number()),
  opponentFourthDownAttempts: s.optionalNullable(s.number()),
  opponentFourthDownConversions: s.optionalNullable(s.number()),
  opponentFourthDownPercentage: s.optionalNullable(s.number()),
  opponentRedZoneAttempts: s.optionalNullable(s.number()),
  opponentRedZoneConversions: s.optionalNullable(s.number()),
  opponentGoalToGoAttempts: s.optionalNullable(s.number()),
  opponentGoalToGoConversions: s.optionalNullable(s.number()),
  opponentReturnYards: s.optionalNullable(s.number()),
  opponentPenalties: s.optionalNullable(s.number()),
  opponentPenaltyYards: s.optionalNullable(s.number()),
  opponentFumbles: s.optionalNullable(s.number()),
  opponentFumblesLost: s.optionalNullable(s.number()),
  opponentTimesSacked: s.optionalNullable(s.number()),
  opponentTimesSackedYards: s.optionalNullable(s.number()),
  opponentQuarterbackHits: s.optionalNullable(s.number()),
  opponentTacklesForLoss: s.optionalNullable(s.number()),
  opponentSafeties: s.optionalNullable(s.number()),
  opponentPunts: s.optionalNullable(s.number()),
  opponentPuntYards: s.optionalNullable(s.number()),
  opponentPuntAverage: s.optional(s.number()),
  opponentGiveaways: s.optional(s.number()),
  opponentTakeaways: s.optional(s.number()),
  opponentTurnoverDifferential: s.optional(s.number()),
  redZonePercentage: s.optionalNullable(s.number()),
  goalToGoPercentage: s.optionalNullable(s.number()),
  quarterbackHitsDifferential: s.optionalNullable(s.number()),
  tacklesForLossDifferential: s.optionalNullable(s.number()),
  quarterbackSacksDifferential: s.optional(s.number()),
  tacklesForLossPercentage: s.optionalNullable(s.number()),
  quarterbackHitsPercentage: s.optionalNullable(s.number()),
  timesSackedPercentage: s.optional(s.number()),
  opponentRedZonePercentage: s.optionalNullable(s.number()),
  opponentGoalToGoPercentage: s.optionalNullable(s.number()),
  opponentQuarterbackHitsDifferential: s.optionalNullable(s.number()),
  opponentTacklesForLossDifferential: s.optionalNullable(s.number()),
  opponentQuarterbackSacksDifferential: s.optionalNullable(s.number()),
  opponentTacklesForLossPercentage: s.optionalNullable(s.number()),
  opponentQuarterbackHitsPercentage: s.optionalNullable(s.number()),
  opponentTimesSackedPercentage: s.optional(s.number()),
  kickoffs: s.optionalNullable(s.number()),
  kickoffsInEndZone: s.optionalNullable(s.number()),
  kickoffTouchbacks: s.optionalNullable(s.number()),
  puntsHadBlocked: s.optionalNullable(s.number()),
  puntNetAverage: s.optionalNullable(s.number()),
  extraPointKickingAttempts: s.optionalNullable(s.number()),
  extraPointKickingConversions: s.optionalNullable(s.number()),
  extraPointsHadBlocked: s.optionalNullable(s.number()),
  extraPointPassingAttempts: s.optionalNullable(s.number()),
  extraPointPassingConversions: s.optionalNullable(s.number()),
  extraPointRushingAttempts: s.optionalNullable(s.number()),
  extraPointRushingConversions: s.optionalNullable(s.number()),
  fieldGoalAttempts: s.optionalNullable(s.number()),
  fieldGoalsMade: s.optionalNullable(s.number()),
  fieldGoalsHadBlocked: s.optionalNullable(s.number()),
  puntReturns: s.optionalNullable(s.number()),
  puntReturnYards: s.optionalNullable(s.number()),
  kickReturns: s.optionalNullable(s.number()),
  kickReturnYards: s.optionalNullable(s.number()),
  interceptionReturns: s.optionalNullable(s.number()),
  interceptionReturnYards: s.optionalNullable(s.number()),
  opponentKickoffs: s.optionalNullable(s.number()),
  opponentKickoffsInEndZone: s.optionalNullable(s.number()),
  opponentKickoffTouchbacks: s.optionalNullable(s.number()),
  opponentPuntsHadBlocked: s.optionalNullable(s.number()),
  opponentPuntNetAverage: s.optionalNullable(s.number()),
  opponentExtraPointKickingAttempts: s.optionalNullable(s.number()),
  opponentExtraPointKickingConversions: s.optionalNullable(s.number()),
  opponentExtraPointsHadBlocked: s.optionalNullable(s.number()),
  opponentExtraPointPassingAttempts: s.optionalNullable(s.number()),
  opponentExtraPointPassingConversions: s.optionalNullable(s.number()),
  opponentExtraPointRushingAttempts: s.optionalNullable(s.number()),
  opponentExtraPointRushingConversions: s.optionalNullable(s.number()),
  opponentFieldGoalAttempts: s.optionalNullable(s.number()),
  opponentFieldGoalsMade: s.optionalNullable(s.number()),
  opponentFieldGoalsHadBlocked: s.optionalNullable(s.number()),
  opponentPuntReturns: s.optionalNullable(s.number()),
  opponentPuntReturnYards: s.optionalNullable(s.number()),
  opponentKickReturns: s.optionalNullable(s.number()),
  opponentKickReturnYards: s.optionalNullable(s.number()),
  opponentInterceptionReturns: s.optionalNullable(s.number()),
  opponentInterceptionReturnYards: s.optionalNullable(s.number()),
  soloTackles: s.optionalNullable(s.number()),
  assistedTackles: s.optionalNullable(s.number()),
  sacks: s.optionalNullable(s.number()),
  sackYards: s.optionalNullable(s.number()),
  passesDefended: s.optionalNullable(s.number()),
  fumblesForced: s.optionalNullable(s.number()),
  fumblesRecovered: s.optionalNullable(s.number()),
  fumbleReturnYards: s.optionalNullable(s.number()),
  fumbleReturnTouchdowns: s.optionalNullable(s.number()),
  interceptionReturnTouchdowns: s.optionalNullable(s.number()),
  blockedKicks: s.optionalNullable(s.number()),
  puntReturnTouchdowns: s.optionalNullable(s.number()),
  puntReturnLong: s.optionalNullable(s.number()),
  kickReturnTouchdowns: s.optionalNullable(s.number()),
  kickReturnLong: s.optionalNullable(s.number()),
  blockedKickReturnYards: s.optionalNullable(s.number()),
  blockedKickReturnTouchdowns: s.optionalNullable(s.number()),
  fieldGoalReturnYards: s.optionalNullable(s.number()),
  fieldGoalReturnTouchdowns: s.optionalNullable(s.number()),
  puntNetYards: s.optionalNullable(s.number()),
  opponentSoloTackles: s.optionalNullable(s.number()),
  opponentAssistedTackles: s.optionalNullable(s.number()),
  opponentSacks: s.optionalNullable(s.number()),
  opponentSackYards: s.optionalNullable(s.number()),
  opponentPassesDefended: s.optionalNullable(s.number()),
  opponentFumblesForced: s.optionalNullable(s.number()),
  opponentFumblesRecovered: s.optionalNullable(s.number()),
  opponentFumbleReturnYards: s.optionalNullable(s.number()),
  opponentFumbleReturnTouchdowns: s.optionalNullable(s.number()),
  opponentInterceptionReturnTouchdowns: s.optionalNullable(s.number()),
  opponentBlockedKicks: s.optionalNullable(s.number()),
  opponentPuntReturnTouchdowns: s.optionalNullable(s.number()),
  opponentPuntReturnLong: s.optionalNullable(s.number()),
  opponentKickReturnTouchdowns: s.optionalNullable(s.number()),
  opponentKickReturnLong: s.optionalNullable(s.number()),
  opponentBlockedKickReturnYards: s.optionalNullable(s.number()),
  opponentBlockedKickReturnTouchdowns: s.optionalNullable(s.number()),
  opponentFieldGoalReturnYards: s.optionalNullable(s.number()),
  opponentFieldGoalReturnTouchdowns: s.optionalNullable(s.number()),
  opponentPuntNetYards: s.optionalNullable(s.number()),
  isGameOver: s.optionalNullable(s.boolean()),
  teamName: s.optionalNullable(s.string()),
  dayOfWeek: s.optionalNullable(s.string()),
  passingDropbacks: s.optionalNullable(s.number()),
  opponentPassingDropbacks: s.optionalNullable(s.number()),
  teamGameId: s.optional(s.number()),
  pointDifferential: s.optionalNullable(s.number()),
  passingInterceptionPercentage: s.optionalNullable(s.number()),
  puntReturnAverage: s.optionalNullable(s.number()),
  kickReturnAverage: s.optionalNullable(s.number()),
  extraPointPercentage: s.optionalNullable(s.number()),
  fieldGoalPercentage: s.optionalNullable(s.number()),
  opponentPassingInterceptionPercentage: s.optionalNullable(s.number()),
  opponentPuntReturnAverage: s.optionalNullable(s.number()),
  opponentKickReturnAverage: s.optionalNullable(s.number()),
  opponentExtraPointPercentage: s.optionalNullable(s.number()),
  opponentFieldGoalPercentage: s.optionalNullable(s.number()),
  penaltyYardDifferential: s.optionalNullable(s.number()),
  puntReturnYardDifferential: s.optionalNullable(s.number()),
  kickReturnYardDifferential: s.optionalNullable(s.number()),
  twoPointConversionReturns: s.optionalNullable(s.number()),
  opponentTwoPointConversionReturns: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  opponentId: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  globalGameId: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  globalOpponentId: s.optionalNullable(s.number()),
  scoreId: s.optional(s.number()),
  _keysMap: {
    gameKey: "GameKey",
    date: "Date",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    team: "Team",
    opponent: "Opponent",
    homeOrAway: "HomeOrAway",
    score: "Score",
    opponentScore: "OpponentScore",
    totalScore: "TotalScore",
    stadium: "Stadium",
    playingSurface: "PlayingSurface",
    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "WindSpeed",
    overUnder: "OverUnder",
    pointSpread: "PointSpread",
    scoreQuarter1: "ScoreQuarter1",
    scoreQuarter2: "ScoreQuarter2",
    scoreQuarter3: "ScoreQuarter3",
    scoreQuarter4: "ScoreQuarter4",
    scoreOvertime: "ScoreOvertime",
    timeOfPossessionMinutes: "TimeOfPossessionMinutes",
    timeOfPossessionSeconds: "TimeOfPossessionSeconds",
    timeOfPossession: "TimeOfPossession",
    firstDowns: "FirstDowns",
    firstDownsByRushing: "FirstDownsByRushing",
    firstDownsByPassing: "FirstDownsByPassing",
    firstDownsByPenalty: "FirstDownsByPenalty",
    offensivePlays: "OffensivePlays",
    offensiveYards: "OffensiveYards",
    offensiveYardsPerPlay: "OffensiveYardsPerPlay",
    touchdowns: "Touchdowns",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingYardsPerAttempt: "RushingYardsPerAttempt",
    rushingTouchdowns: "RushingTouchdowns",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingYardsPerAttempt: "PassingYardsPerAttempt",
    passingYardsPerCompletion: "PassingYardsPerCompletion",
    completionPercentage: "CompletionPercentage",
    passerRating: "PasserRating",
    thirdDownAttempts: "ThirdDownAttempts",
    thirdDownConversions: "ThirdDownConversions",
    thirdDownPercentage: "ThirdDownPercentage",
    fourthDownAttempts: "FourthDownAttempts",
    fourthDownConversions: "FourthDownConversions",
    fourthDownPercentage: "FourthDownPercentage",
    redZoneAttempts: "RedZoneAttempts",
    redZoneConversions: "RedZoneConversions",
    goalToGoAttempts: "GoalToGoAttempts",
    goalToGoConversions: "GoalToGoConversions",
    returnYards: "ReturnYards",
    penalties: "Penalties",
    penaltyYards: "PenaltyYards",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
    timesSacked: "TimesSacked",
    timesSackedYards: "TimesSackedYards",
    quarterbackHits: "QuarterbackHits",
    tacklesForLoss: "TacklesForLoss",
    safeties: "Safeties",
    punts: "Punts",
    puntYards: "PuntYards",
    puntAverage: "PuntAverage",
    giveaways: "Giveaways",
    takeaways: "Takeaways",
    turnoverDifferential: "TurnoverDifferential",
    opponentScoreQuarter1: "OpponentScoreQuarter1",
    opponentScoreQuarter2: "OpponentScoreQuarter2",
    opponentScoreQuarter3: "OpponentScoreQuarter3",
    opponentScoreQuarter4: "OpponentScoreQuarter4",
    opponentScoreOvertime: "OpponentScoreOvertime",
    opponentTimeOfPossessionMinutes: "OpponentTimeOfPossessionMinutes",
    opponentTimeOfPossessionSeconds: "OpponentTimeOfPossessionSeconds",
    opponentTimeOfPossession: "OpponentTimeOfPossession",
    opponentFirstDowns: "OpponentFirstDowns",
    opponentFirstDownsByRushing: "OpponentFirstDownsByRushing",
    opponentFirstDownsByPassing: "OpponentFirstDownsByPassing",
    opponentFirstDownsByPenalty: "OpponentFirstDownsByPenalty",
    opponentOffensivePlays: "OpponentOffensivePlays",
    opponentOffensiveYards: "OpponentOffensiveYards",
    opponentOffensiveYardsPerPlay: "OpponentOffensiveYardsPerPlay",
    opponentTouchdowns: "OpponentTouchdowns",
    opponentRushingAttempts: "OpponentRushingAttempts",
    opponentRushingYards: "OpponentRushingYards",
    opponentRushingYardsPerAttempt: "OpponentRushingYardsPerAttempt",
    opponentRushingTouchdowns: "OpponentRushingTouchdowns",
    opponentPassingAttempts: "OpponentPassingAttempts",
    opponentPassingCompletions: "OpponentPassingCompletions",
    opponentPassingYards: "OpponentPassingYards",
    opponentPassingTouchdowns: "OpponentPassingTouchdowns",
    opponentPassingInterceptions: "OpponentPassingInterceptions",
    opponentPassingYardsPerAttempt: "OpponentPassingYardsPerAttempt",
    opponentPassingYardsPerCompletion: "OpponentPassingYardsPerCompletion",
    opponentCompletionPercentage: "OpponentCompletionPercentage",
    opponentPasserRating: "OpponentPasserRating",
    opponentThirdDownAttempts: "OpponentThirdDownAttempts",
    opponentThirdDownConversions: "OpponentThirdDownConversions",
    opponentThirdDownPercentage: "OpponentThirdDownPercentage",
    opponentFourthDownAttempts: "OpponentFourthDownAttempts",
    opponentFourthDownConversions: "OpponentFourthDownConversions",
    opponentFourthDownPercentage: "OpponentFourthDownPercentage",
    opponentRedZoneAttempts: "OpponentRedZoneAttempts",
    opponentRedZoneConversions: "OpponentRedZoneConversions",
    opponentGoalToGoAttempts: "OpponentGoalToGoAttempts",
    opponentGoalToGoConversions: "OpponentGoalToGoConversions",
    opponentReturnYards: "OpponentReturnYards",
    opponentPenalties: "OpponentPenalties",
    opponentPenaltyYards: "OpponentPenaltyYards",
    opponentFumbles: "OpponentFumbles",
    opponentFumblesLost: "OpponentFumblesLost",
    opponentTimesSacked: "OpponentTimesSacked",
    opponentTimesSackedYards: "OpponentTimesSackedYards",
    opponentQuarterbackHits: "OpponentQuarterbackHits",
    opponentTacklesForLoss: "OpponentTacklesForLoss",
    opponentSafeties: "OpponentSafeties",
    opponentPunts: "OpponentPunts",
    opponentPuntYards: "OpponentPuntYards",
    opponentPuntAverage: "OpponentPuntAverage",
    opponentGiveaways: "OpponentGiveaways",
    opponentTakeaways: "OpponentTakeaways",
    opponentTurnoverDifferential: "OpponentTurnoverDifferential",
    redZonePercentage: "RedZonePercentage",
    goalToGoPercentage: "GoalToGoPercentage",
    quarterbackHitsDifferential: "QuarterbackHitsDifferential",
    tacklesForLossDifferential: "TacklesForLossDifferential",
    quarterbackSacksDifferential: "QuarterbackSacksDifferential",
    tacklesForLossPercentage: "TacklesForLossPercentage",
    quarterbackHitsPercentage: "QuarterbackHitsPercentage",
    timesSackedPercentage: "TimesSackedPercentage",
    opponentRedZonePercentage: "OpponentRedZonePercentage",
    opponentGoalToGoPercentage: "OpponentGoalToGoPercentage",
    opponentQuarterbackHitsDifferential: "OpponentQuarterbackHitsDifferential",
    opponentTacklesForLossDifferential: "OpponentTacklesForLossDifferential",
    opponentQuarterbackSacksDifferential: "OpponentQuarterbackSacksDifferential",
    opponentTacklesForLossPercentage: "OpponentTacklesForLossPercentage",
    opponentQuarterbackHitsPercentage: "OpponentQuarterbackHitsPercentage",
    opponentTimesSackedPercentage: "OpponentTimesSackedPercentage",
    kickoffs: "Kickoffs",
    kickoffsInEndZone: "KickoffsInEndZone",
    kickoffTouchbacks: "KickoffTouchbacks",
    puntsHadBlocked: "PuntsHadBlocked",
    puntNetAverage: "PuntNetAverage",
    extraPointKickingAttempts: "ExtraPointKickingAttempts",
    extraPointKickingConversions: "ExtraPointKickingConversions",
    extraPointsHadBlocked: "ExtraPointsHadBlocked",
    extraPointPassingAttempts: "ExtraPointPassingAttempts",
    extraPointPassingConversions: "ExtraPointPassingConversions",
    extraPointRushingAttempts: "ExtraPointRushingAttempts",
    extraPointRushingConversions: "ExtraPointRushingConversions",
    fieldGoalAttempts: "FieldGoalAttempts",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalsHadBlocked: "FieldGoalsHadBlocked",
    puntReturns: "PuntReturns",
    puntReturnYards: "PuntReturnYards",
    kickReturns: "KickReturns",
    kickReturnYards: "KickReturnYards",
    interceptionReturns: "InterceptionReturns",
    interceptionReturnYards: "InterceptionReturnYards",
    opponentKickoffs: "OpponentKickoffs",
    opponentKickoffsInEndZone: "OpponentKickoffsInEndZone",
    opponentKickoffTouchbacks: "OpponentKickoffTouchbacks",
    opponentPuntsHadBlocked: "OpponentPuntsHadBlocked",
    opponentPuntNetAverage: "OpponentPuntNetAverage",
    opponentExtraPointKickingAttempts: "OpponentExtraPointKickingAttempts",
    opponentExtraPointKickingConversions: "OpponentExtraPointKickingConversions",
    opponentExtraPointsHadBlocked: "OpponentExtraPointsHadBlocked",
    opponentExtraPointPassingAttempts: "OpponentExtraPointPassingAttempts",
    opponentExtraPointPassingConversions: "OpponentExtraPointPassingConversions",
    opponentExtraPointRushingAttempts: "OpponentExtraPointRushingAttempts",
    opponentExtraPointRushingConversions: "OpponentExtraPointRushingConversions",
    opponentFieldGoalAttempts: "OpponentFieldGoalAttempts",
    opponentFieldGoalsMade: "OpponentFieldGoalsMade",
    opponentFieldGoalsHadBlocked: "OpponentFieldGoalsHadBlocked",
    opponentPuntReturns: "OpponentPuntReturns",
    opponentPuntReturnYards: "OpponentPuntReturnYards",
    opponentKickReturns: "OpponentKickReturns",
    opponentKickReturnYards: "OpponentKickReturnYards",
    opponentInterceptionReturns: "OpponentInterceptionReturns",
    opponentInterceptionReturnYards: "OpponentInterceptionReturnYards",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    sacks: "Sacks",
    sackYards: "SackYards",
    passesDefended: "PassesDefended",
    fumblesForced: "FumblesForced",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnYards: "FumbleReturnYards",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    blockedKicks: "BlockedKicks",
    puntReturnTouchdowns: "PuntReturnTouchdowns",
    puntReturnLong: "PuntReturnLong",
    kickReturnTouchdowns: "KickReturnTouchdowns",
    kickReturnLong: "KickReturnLong",
    blockedKickReturnYards: "BlockedKickReturnYards",
    blockedKickReturnTouchdowns: "BlockedKickReturnTouchdowns",
    fieldGoalReturnYards: "FieldGoalReturnYards",
    fieldGoalReturnTouchdowns: "FieldGoalReturnTouchdowns",
    puntNetYards: "PuntNetYards",
    opponentSoloTackles: "OpponentSoloTackles",
    opponentAssistedTackles: "OpponentAssistedTackles",
    opponentSacks: "OpponentSacks",
    opponentSackYards: "OpponentSackYards",
    opponentPassesDefended: "OpponentPassesDefended",
    opponentFumblesForced: "OpponentFumblesForced",
    opponentFumblesRecovered: "OpponentFumblesRecovered",
    opponentFumbleReturnYards: "OpponentFumbleReturnYards",
    opponentFumbleReturnTouchdowns: "OpponentFumbleReturnTouchdowns",
    opponentInterceptionReturnTouchdowns: "OpponentInterceptionReturnTouchdowns",
    opponentBlockedKicks: "OpponentBlockedKicks",
    opponentPuntReturnTouchdowns: "OpponentPuntReturnTouchdowns",
    opponentPuntReturnLong: "OpponentPuntReturnLong",
    opponentKickReturnTouchdowns: "OpponentKickReturnTouchdowns",
    opponentKickReturnLong: "OpponentKickReturnLong",
    opponentBlockedKickReturnYards: "OpponentBlockedKickReturnYards",
    opponentBlockedKickReturnTouchdowns: "OpponentBlockedKickReturnTouchdowns",
    opponentFieldGoalReturnYards: "OpponentFieldGoalReturnYards",
    opponentFieldGoalReturnTouchdowns: "OpponentFieldGoalReturnTouchdowns",
    opponentPuntNetYards: "OpponentPuntNetYards",
    isGameOver: "IsGameOver",
    teamName: "TeamName",
    dayOfWeek: "DayOfWeek",
    passingDropbacks: "PassingDropbacks",
    opponentPassingDropbacks: "OpponentPassingDropbacks",
    teamGameId: "TeamGameID",
    pointDifferential: "PointDifferential",
    passingInterceptionPercentage: "PassingInterceptionPercentage",
    puntReturnAverage: "PuntReturnAverage",
    kickReturnAverage: "KickReturnAverage",
    extraPointPercentage: "ExtraPointPercentage",
    fieldGoalPercentage: "FieldGoalPercentage",
    opponentPassingInterceptionPercentage: "OpponentPassingInterceptionPercentage",
    opponentPuntReturnAverage: "OpponentPuntReturnAverage",
    opponentKickReturnAverage: "OpponentKickReturnAverage",
    opponentExtraPointPercentage: "OpponentExtraPointPercentage",
    opponentFieldGoalPercentage: "OpponentFieldGoalPercentage",
    penaltyYardDifferential: "PenaltyYardDifferential",
    puntReturnYardDifferential: "PuntReturnYardDifferential",
    kickReturnYardDifferential: "KickReturnYardDifferential",
    twoPointConversionReturns: "TwoPointConversionReturns",
    opponentTwoPointConversionReturns: "OpponentTwoPointConversionReturns",
    teamId: "TeamID",
    opponentId: "OpponentID",
    day: "Day",
    dateTime: "DateTime",
    globalGameId: "GlobalGameID",
    globalTeamId: "GlobalTeamID",
    globalOpponentId: "GlobalOpponentID",
    scoreId: "ScoreID",
  },
});
