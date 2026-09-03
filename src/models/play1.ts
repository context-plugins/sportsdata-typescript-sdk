import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Play1 = {
  playId?: number;
  quarterId?: number;
  quarterName?: string | null;
  sequence?: number;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  potentialPoints?: number | null;
  points?: number | null;
  shotMade?: boolean | null;
  category?: string | null;
  type?: string | null;
  teamId?: number | null;
  team?: string | null;
  opponentId?: number | null;
  opponent?: string | null;
  receivingTeamId?: number | null;
  receivingTeam?: string | null;
  description?: string | null;
  playerId?: number | null;
  assistedByPlayerId?: number | null;
  blockedByPlayerId?: number | null;
  fastBreak?: boolean | null;
  sideOfBasket?: string | null;
  updated?: string | null;
  created?: string | null;
  substituteInPlayerId?: number | null;
  substituteOutPlayerId?: number | null;
  awayPlayerId?: number | null;
  homePlayerId?: number | null;
  receivingPlayerId?: number | null;
  baselineOffsetPercentage?: number | null;
  sidelineOffsetPercentage?: number | null;
  coordinates?: string | null;
  stolenByPlayerId?: number | null;
};

export const play1Schema: Schema<Play1> = s.object<Play1>({
  playId: s.optional(s.number()),
  quarterId: s.optional(s.number()),
  quarterName: s.optionalNullable(s.string()),
  sequence: s.optional(s.number()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  potentialPoints: s.optionalNullable(s.number()),
  points: s.optionalNullable(s.number()),
  shotMade: s.optionalNullable(s.boolean()),
  category: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  opponentId: s.optionalNullable(s.number()),
  opponent: s.optionalNullable(s.string()),
  receivingTeamId: s.optionalNullable(s.number()),
  receivingTeam: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  assistedByPlayerId: s.optionalNullable(s.number()),
  blockedByPlayerId: s.optionalNullable(s.number()),
  fastBreak: s.optionalNullable(s.boolean()),
  sideOfBasket: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  substituteInPlayerId: s.optionalNullable(s.number()),
  substituteOutPlayerId: s.optionalNullable(s.number()),
  awayPlayerId: s.optionalNullable(s.number()),
  homePlayerId: s.optionalNullable(s.number()),
  receivingPlayerId: s.optionalNullable(s.number()),
  baselineOffsetPercentage: s.optionalNullable(s.number()),
  sidelineOffsetPercentage: s.optionalNullable(s.number()),
  coordinates: s.optionalNullable(s.string()),
  stolenByPlayerId: s.optionalNullable(s.number()),
  _keysMap: {
    playId: "PlayID",
    quarterId: "QuarterID",
    quarterName: "QuarterName",
    sequence: "Sequence",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    potentialPoints: "PotentialPoints",
    points: "Points",
    shotMade: "ShotMade",
    category: "Category",
    type: "Type",
    teamId: "TeamID",
    team: "Team",
    opponentId: "OpponentID",
    opponent: "Opponent",
    receivingTeamId: "ReceivingTeamID",
    receivingTeam: "ReceivingTeam",
    description: "Description",
    playerId: "PlayerID",
    assistedByPlayerId: "AssistedByPlayerID",
    blockedByPlayerId: "BlockedByPlayerID",
    fastBreak: "FastBreak",
    sideOfBasket: "SideOfBasket",
    updated: "Updated",
    created: "Created",
    substituteInPlayerId: "SubstituteInPlayerID",
    substituteOutPlayerId: "SubstituteOutPlayerID",
    awayPlayerId: "AwayPlayerID",
    homePlayerId: "HomePlayerID",
    receivingPlayerId: "ReceivingPlayerID",
    baselineOffsetPercentage: "BaselineOffsetPercentage",
    sidelineOffsetPercentage: "SidelineOffsetPercentage",
    coordinates: "Coordinates",
    stolenByPlayerId: "StolenByPlayerID",
  },
});
