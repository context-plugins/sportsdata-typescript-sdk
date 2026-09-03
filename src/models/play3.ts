import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Play3 = {
  playId?: number;
  periodId?: number;
  periodName?: string | null;
  sequence?: number;
  clockMinutes?: number | null;
  clockSeconds?: number | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  teamId?: number | null;
  team?: string | null;
  opponentId?: number | null;
  opponent?: string | null;
  category?: string | null;
  type?: string | null;
  description?: string | null;
  playerId?: number | null;
  updated?: string | null;
  created?: string | null;
  firstAssistedByPlayerId?: number | null;
  secondAssistedByPlayerId?: number | null;
  powerPlayTeamId?: number | null;
  powerPlayTeam?: string | null;
  opposingPlayerId?: number | null;
};

export const play3Schema: Schema<Play3> = s.object<Play3>({
  playId: s.optional(s.number()),
  periodId: s.optional(s.number()),
  periodName: s.optionalNullable(s.string()),
  sequence: s.optional(s.number()),
  clockMinutes: s.optionalNullable(s.number()),
  clockSeconds: s.optionalNullable(s.number()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  opponentId: s.optionalNullable(s.number()),
  opponent: s.optionalNullable(s.string()),
  category: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  firstAssistedByPlayerId: s.optionalNullable(s.number()),
  secondAssistedByPlayerId: s.optionalNullable(s.number()),
  powerPlayTeamId: s.optionalNullable(s.number()),
  powerPlayTeam: s.optionalNullable(s.string()),
  opposingPlayerId: s.optionalNullable(s.number()),
  _keysMap: {
    playId: "PlayID",
    periodId: "PeriodID",
    periodName: "PeriodName",
    sequence: "Sequence",
    clockMinutes: "ClockMinutes",
    clockSeconds: "ClockSeconds",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    teamId: "TeamID",
    team: "Team",
    opponentId: "OpponentID",
    opponent: "Opponent",
    category: "Category",
    type: "Type",
    description: "Description",
    playerId: "PlayerID",
    updated: "Updated",
    created: "Created",
    firstAssistedByPlayerId: "FirstAssistedByPlayerID",
    secondAssistedByPlayerId: "SecondAssistedByPlayerID",
    powerPlayTeamId: "PowerPlayTeamID",
    powerPlayTeam: "PowerPlayTeam",
    opposingPlayerId: "OpposingPlayerID",
  },
});
