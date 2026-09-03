import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerRoundScore = {
  playerRoundId?: number;
  number?: number | null;
  day?: string | null;
  par?: number | null;
  score?: number | null;
  teeTime?: string | null;
  isWithdrawn?: boolean;
};

export const playerRoundScoreSchema: Schema<PlayerRoundScore> = s.object<PlayerRoundScore>({
  playerRoundId: s.optional(s.number()),
  number: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.number()),
  score: s.optionalNullable(s.number()),
  teeTime: s.optionalNullable(s.string()),
  isWithdrawn: s.optional(s.boolean()),
  _keysMap: {
    playerRoundId: "PlayerRoundId",
    number: "Number",
    day: "Day",
    par: "Par",
    score: "Score",
    teeTime: "TeeTime",
    isWithdrawn: "IsWithdrawn",
  },
});
