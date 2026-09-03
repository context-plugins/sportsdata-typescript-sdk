import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pitch = {
  pitchId?: number;
  playId?: number;
  pitchNumberThisAtBat?: number | null;
  pitcherId?: number | null;
  hitterId?: number | null;
  outs?: number | null;
  ballsBeforePitch?: number | null;
  strikesBeforePitch?: number | null;
  strike?: boolean | null;
  ball?: boolean | null;
  foul?: boolean | null;
  swinging?: boolean | null;
  looking?: boolean | null;
};

export const pitchSchema: Schema<Pitch> = s.object<Pitch>({
  pitchId: s.optional(s.number()),
  playId: s.optional(s.number()),
  pitchNumberThisAtBat: s.optionalNullable(s.number()),
  pitcherId: s.optionalNullable(s.number()),
  hitterId: s.optionalNullable(s.number()),
  outs: s.optionalNullable(s.number()),
  ballsBeforePitch: s.optionalNullable(s.number()),
  strikesBeforePitch: s.optionalNullable(s.number()),
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
