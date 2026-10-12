import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerHole = {
  /** The unique ID of this golfer/round combination */
  playerRoundId?: number;
  /** The number of the hole associated with these stats */
  number?: number | null;
  /** The par of this hole */
  par?: number | null;
  /** The golfer's total strokes on the hole */
  score?: number | null;
  /** The player's score on this hole (+/- par) */
  toPar?: number | null;
  /** Indicates whether this player shot a hole-in-one on this hole */
  holeInOne?: boolean;
  /** Indicates whether this player shot a double eagle on this hole */
  doubleEagle?: boolean;
  /** Indicates whether this player shot an eagle on this hole */
  eagle?: boolean;
  /** Indicates whether this player shot a birdie on this hole */
  birdie?: boolean;
  /** Indicates whether this player shot par on this hole */
  isPar?: boolean;
  /** Indicates whether this player shot a bogey on this hole */
  bogey?: boolean;
  /** Indicates whether this player shot a double bogey on this hole */
  doubleBogey?: boolean;
  /** Indicates whether this player shot worse than a double bogey on this hole */
  worseThanDoubleBogey?: boolean;
};

export const playerHoleSchema: Schema<PlayerHole> = s.object<PlayerHole>({
  playerRoundId: s.optional(s.int()),
  number: s.optionalNullable(s.int()),
  par: s.optionalNullable(s.int()),
  score: s.optionalNullable(s.int()),
  toPar: s.optionalNullable(s.int()),
  holeInOne: s.optional(s.boolean()),
  doubleEagle: s.optional(s.boolean()),
  eagle: s.optional(s.boolean()),
  birdie: s.optional(s.boolean()),
  isPar: s.optional(s.boolean()),
  bogey: s.optional(s.boolean()),
  doubleBogey: s.optional(s.boolean()),
  worseThanDoubleBogey: s.optional(s.boolean()),
  _keysMap: {
    playerRoundId: "PlayerRoundID",
    number: "Number",
    par: "Par",
    score: "Score",
    toPar: "ToPar",
    holeInOne: "HoleInOne",
    doubleEagle: "DoubleEagle",
    eagle: "Eagle",
    birdie: "Birdie",
    isPar: "IsPar",
    bogey: "Bogey",
    doubleBogey: "DoubleBogey",
    worseThanDoubleBogey: "WorseThanDoubleBogey",
  },
});
