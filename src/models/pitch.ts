import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pitch = {
  /** The unique ID of the pitch */
  pitchId?: number;
  /** The unique ID of the play assigned by SportsDataIO */
  playId?: number;
  /** The number of pitches in the at bat in which the pitch occurred. */
  pitchNumberThisAtBat?: number | null;
  /** The PlayerID of the pitcher who threw the pitch */
  pitcherId?: number | null;
  /** The unique PlayerID of the hitter who represents the play */
  hitterId?: number | null;
  /** The number of outs when the pitch occurred */
  outs?: number | null;
  /** The number of balls the pitcher has thrown before the current pitch */
  ballsBeforePitch?: number | null;
  /** The number of strikes the pitcher has thrown before the current pitch */
  strikesBeforePitch?: number | null;
  /** Whether the pitch was a strike (true/false) */
  strike?: boolean | null;
  /** Whether the pitch was a ball (true/false) */
  ball?: boolean | null;
  /** Whether the pitch was hit foul (true/false) */
  foul?: boolean | null;
  /** Whether the hitter struck out swinging (true/false) */
  swinging?: boolean | null;
  /** Whether or not the hitter struck out looking (returns true/false) */
  looking?: boolean | null;
};

export const pitchSchema: Schema<Pitch> = s.object<Pitch>({
  pitchId: s.optional(s.int()),
  playId: s.optional(s.int()),
  pitchNumberThisAtBat: s.optionalNullable(s.int()),
  pitcherId: s.optionalNullable(s.int()),
  hitterId: s.optionalNullable(s.int()),
  outs: s.optionalNullable(s.int()),
  ballsBeforePitch: s.optionalNullable(s.int()),
  strikesBeforePitch: s.optionalNullable(s.int()),
  strike: s.optionalNullable(s.boolean()),
  ball: s.optionalNullable(s.boolean()),
  foul: s.optionalNullable(s.boolean()),
  swinging: s.optionalNullable(s.boolean()),
  looking: s.optionalNullable(s.boolean()),
  _keysMap: {
    pitchId: "PitchID",
    playId: "PlayID",
    pitchNumberThisAtBat: "PitchNumberThisAtBat",
    pitcherId: "PitcherID",
    hitterId: "HitterID",
    outs: "Outs",
    ballsBeforePitch: "BallsBeforePitch",
    strikesBeforePitch: "StrikesBeforePitch",
    strike: "Strike",
    ball: "Ball",
    foul: "Foul",
    swinging: "Swinging",
    looking: "Looking",
  },
});
