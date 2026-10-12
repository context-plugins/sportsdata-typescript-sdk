import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerRoundScore = {
  /** The unique ID of this golfer/round combination */
  playerRoundId?: number;
  /** The number of the round associated with this score */
  number?: number | null;
  /** The date that this round is being played on */
  day?: string | null;
  /** The par of the course this round is played on */
  par?: number | null;
  /** The total strokes this golfer has for this round in the tournament */
  score?: number | null;
  /** The time that this golfer tees off for the upcoming round (in US Eastern Time) */
  teeTime?: string | null;
  /** Indicates whether the player has withdrawn from the tournament */
  isWithdrawn?: boolean;
};

export const playerRoundScoreSchema: Schema<PlayerRoundScore> = s.object<PlayerRoundScore>({
  playerRoundId: s.optional(s.int()),
  number: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.int()),
  score: s.optionalNullable(s.int()),
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
