import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pitchSchema, type Pitch } from "./pitch.js";

export type Play2 = {
  /** The unique ID of the play assigned by SportsDataIO */
  playId?: number;
  /** The unique ID associated with this specific inning in which the play occurred */
  inningId?: number;
  /** The inning number in which the particular play occurred */
  inningNumber?: number | null;
  /**
   * The inning half that the game is currently in; or the inning half in which the game ended
   * (possible values: T; B; E: M: NULL)
   */
  inningHalf?: string | null;
  /** The order in which plays occurred in a game */
  playNumber?: number | null;
  /** The batter number in the inning where the play occurred. */
  inningBatterNumber?: number | null;
  /** Number of runs scored by the away team on this specific play */
  awayTeamRuns?: number | null;
  /** Number of runs scored by the home team on this specific play */
  homeTeamRuns?: number | null;
  /** The unique PlayerID of the hitter involved with the play */
  hitterId?: number | null;
  /** The PlayerID of the pitcher involved in the play */
  pitcherId?: number | null;
  /** The TeamID of the hitter's team. */
  hitterTeamId?: number | null;
  /** The ID of the pitcher's team */
  pitcherTeamId?: number | null;
  /** The first and last name of the hitter involved in the play */
  hitterName?: string | null;
  /** The full name of the pitcher involved in the play */
  pitcherName?: string | null;
  /** The throwing hand of the pitcher in which the play occurred. (right or left) */
  pitcherThrowHand?: string | null;
  /** The batter's handedness for which the play occurred. (R; L; S) */
  hitterBatHand?: string | null;
  /** TheÂ position of the player in which the play occrred. (e.g. P;C;1B; SS; OF) */
  hitterPosition?: string | null;
  /** The number of outs in which the play occurred */
  outs?: number | null;
  /** The number of balls in the count in which the play occurred */
  balls?: number | null;
  /** The number of strikes in the count in which the play occurred */
  strikes?: number | null;
  /** The number of pitches in the at bat in which the play occurred */
  pitchNumberThisAtBat?: number | null;
  /**
   * The result of the play. Possible values include: Batter's Interference, Bunted into Double
   * Play, Catcher's Interference, Double, Error, Fielder's Choice, Fly into Double Play, Fly Out,
   * Foul Out, Fouled into Double Play, Ground into Double Play, Ground Out, Hit by Pitch, Home Run,
   * Infield Fly Out, Intentional Walk, Line into Double Play, Lineout, Pop Out, Popped into Double
   * Play, Sacrifice, Sacrifice Fly, Single, Strikeout Bunting, Strikeout Looking, Strikeout
   * Swinging, Triple, Triple Play, Walk, Stolen Base, Caught Stealing, Passed Ball, Wild Pitch,
   * Pick Off, Balk, Error, Fielders Indifference
   */
  result?: string | null;
  /** The number of outs recorded on the play */
  numberOfOutsOnPlay?: number | null;
  /** The number of runs batted in on the play */
  runsBattedIn?: number | null;
  /** Whether this plate appearance resulted in an at bat */
  atBat?: boolean | null;
  /** Whether the play resulted with a strikeout (returns true/false) */
  strikeout?: boolean | null;
  /** Indicates whether the play resulted in a walk for the hitter (returns true/false) */
  walk?: boolean | null;
  /** Whether this play resulted in a hit (true/false) */
  hit?: boolean | null;
  /** Whether this play resutled in an out (true/false) */
  out?: boolean | null;
  /** Whether the play resulted in a sacrifice (returns true/false) */
  sacrifice?: boolean | null;
  /** Whether this play resulted in an error (true/false) */
  error?: boolean | null;
  /** The database generated timestamp of when this record was last updated (in US Eastern Time) */
  updated?: string | null;
  /** The description of the play for display purposes */
  description?: string | null;
  /** The details of the pitches associated with this play */
  pitches?: Pitch[];
  /** The PlayerID of the player on first as a result of the play (post-play) */
  runner1Id?: number | null;
  /** The PlayerID of the player on second as a result of the play (post-play) */
  runner2Id?: number | null;
  /** The PlayerID of the player on third as a result of the play (post-play) */
  runner3Id?: number | null;
};

export const play2Schema: Schema<Play2> = s.object<Play2>({
  playId: s.optional(s.int()),
  inningId: s.optional(s.int()),
  inningNumber: s.optionalNullable(s.int()),
  inningHalf: s.optionalNullable(s.string()),
  playNumber: s.optionalNullable(s.int()),
  inningBatterNumber: s.optionalNullable(s.int()),
  awayTeamRuns: s.optionalNullable(s.int()),
  homeTeamRuns: s.optionalNullable(s.int()),
  hitterId: s.optionalNullable(s.int()),
  pitcherId: s.optionalNullable(s.int()),
  hitterTeamId: s.optionalNullable(s.int()),
  pitcherTeamId: s.optionalNullable(s.int()),
  hitterName: s.optionalNullable(s.string()),
  pitcherName: s.optionalNullable(s.string()),
  pitcherThrowHand: s.optionalNullable(s.string()),
  hitterBatHand: s.optionalNullable(s.string()),
  hitterPosition: s.optionalNullable(s.string()),
  outs: s.optionalNullable(s.int()),
  balls: s.optionalNullable(s.int()),
  strikes: s.optionalNullable(s.int()),
  pitchNumberThisAtBat: s.optionalNullable(s.int()),
  result: s.optionalNullable(s.string()),
  numberOfOutsOnPlay: s.optionalNullable(s.int()),
  runsBattedIn: s.optionalNullable(s.int()),
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
  runner1Id: s.optionalNullable(s.int()),
  runner2Id: s.optionalNullable(s.int()),
  runner3Id: s.optionalNullable(s.int()),
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
