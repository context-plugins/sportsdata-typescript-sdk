import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pitchSchema, type Pitch } from "./pitch.js";

export type Play2 = {
  playId?: number;
  inningId?: number;
  inningNumber?: number | null;
  inningHalf?: string | null;
  playNumber?: number | null;
  inningBatterNumber?: number | null;
  awayTeamRuns?: number | null;
  homeTeamRuns?: number | null;
  hitterId?: number | null;
  pitcherId?: number | null;
  hitterTeamId?: number | null;
  pitcherTeamId?: number | null;
  hitterName?: string | null;
  pitcherName?: string | null;
  pitcherThrowHand?: string | null;
  hitterBatHand?: string | null;
  hitterPosition?: string | null;
  outs?: number | null;
  balls?: number | null;
  strikes?: number | null;
  pitchNumberThisAtBat?: number | null;
  result?: string | null;
  numberOfOutsOnPlay?: number | null;
  runsBattedIn?: number | null;
  atBat?: boolean | null;
  strikeout?: boolean | null;
  walk?: boolean | null;
  hit?: boolean | null;
  out?: boolean | null;
  sacrifice?: boolean | null;
  error?: boolean | null;
  updated?: string | null;
  description?: string | null;
  pitches?: Pitch[];
  runner1Id?: number | null;
  runner2Id?: number | null;
  runner3Id?: number | null;
};

export const play2Schema: Schema<Play2> = s.object<Play2>({
  playId: s.optional(s.number()),
  inningId: s.optional(s.number()),
  inningNumber: s.optionalNullable(s.number()),
  inningHalf: s.optionalNullable(s.string()),
  playNumber: s.optionalNullable(s.number()),
  inningBatterNumber: s.optionalNullable(s.number()),
  awayTeamRuns: s.optionalNullable(s.number()),
  homeTeamRuns: s.optionalNullable(s.number()),
  hitterId: s.optionalNullable(s.number()),
  pitcherId: s.optionalNullable(s.number()),
  hitterTeamId: s.optionalNullable(s.number()),
  pitcherTeamId: s.optionalNullable(s.number()),
  hitterName: s.optionalNullable(s.string()),
  pitcherName: s.optionalNullable(s.string()),
  pitcherThrowHand: s.optionalNullable(s.string()),
  hitterBatHand: s.optionalNullable(s.string()),
  hitterPosition: s.optionalNullable(s.string()),
  outs: s.optionalNullable(s.number()),
  balls: s.optionalNullable(s.number()),
  strikes: s.optionalNullable(s.number()),
  pitchNumberThisAtBat: s.optionalNullable(s.number()),
  result: s.optionalNullable(s.string()),
  numberOfOutsOnPlay: s.optionalNullable(s.number()),
  runsBattedIn: s.optionalNullable(s.number()),
  atBat: s.optionalNullable(s.boolean()),
  strikeout: s.optionalNullable(s.boolean()),
  walk: s.optionalNullable(s.boolean()),
  hit: s.optionalNullable(s.boolean()),
  out: s.optionalNullable(s.boolean()),
  sacrifice: s.optionalNullable(s.boolean()),
  error: s.optionalNullable(s.boolean()),
  updated: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  pitches: s.optional(s.array(s.lazy(() => pitchSchema))),
  runner1Id: s.optionalNullable(s.number()),
  runner2Id: s.optionalNullable(s.number()),
  runner3Id: s.optionalNullable(s.number()),
  _keysMap: {
    playId: "PlayID",
    inningId: "InningID",
    inningNumber: "InningNumber",
    inningHalf: "InningHalf",
    playNumber: "PlayNumber",
    inningBatterNumber: "InningBatterNumber",
    awayTeamRuns: "AwayTeamRuns",
    homeTeamRuns: "HomeTeamRuns",
    hitterId: "HitterID",
    pitcherId: "PitcherID",
    hitterTeamId: "HitterTeamID",
    pitcherTeamId: "PitcherTeamID",
    hitterName: "HitterName",
    pitcherName: "PitcherName",
    pitcherThrowHand: "PitcherThrowHand",
    hitterBatHand: "HitterBatHand",
    hitterPosition: "HitterPosition",
    outs: "Outs",
    balls: "Balls",
    strikes: "Strikes",
    pitchNumberThisAtBat: "PitchNumberThisAtBat",
    result: "Result",
    numberOfOutsOnPlay: "NumberOfOutsOnPlay",
    runsBattedIn: "RunsBattedIn",
    atBat: "AtBat",
    strikeout: "Strikeout",
    walk: "Walk",
    hit: "Hit",
    out: "Out",
    sacrifice: "Sacrifice",
    error: "Error",
    updated: "Updated",
    description: "Description",
    pitches: "Pitches",
    runner1Id: "Runner1ID",
    runner2Id: "Runner2ID",
    runner3Id: "Runner3ID",
  },
});
