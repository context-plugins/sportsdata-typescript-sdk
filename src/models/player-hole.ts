import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerHole = {
  playerRoundId?: number;
  number?: number | null;
  par?: number | null;
  score?: number | null;
  toPar?: number | null;
  holeInOne?: boolean;
  doubleEagle?: boolean;
  eagle?: boolean;
  birdie?: boolean;
  isPar?: boolean;
  bogey?: boolean;
  doubleBogey?: boolean;
  worseThanDoubleBogey?: boolean;
};

export const playerHoleSchema: Schema<PlayerHole> = s.object<PlayerHole>({
  playerRoundId: s.optional(s.number()),
  number: s.optionalNullable(s.number()),
  par: s.optionalNullable(s.number()),
  score: s.optionalNullable(s.number()),
  toPar: s.optionalNullable(s.number()),
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
