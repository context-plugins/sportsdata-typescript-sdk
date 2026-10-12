import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerHoleSchema, type PlayerHole } from "./player-hole.js";

export type PlayerRound = {
  /** The unique ID of this golfer/round combination */
  playerRoundId?: number;
  /** The unique ID of this player/tournament combination */
  playerTournamentId?: number;
  /** The number of the round associated with these stats */
  number?: number | null;
  /** The date that this round is being played on */
  day?: string | null;
  /** The par of the course this round is played on */
  par?: number | null;
  /** The total strokes this golfer has for this round in the tournament */
  score?: number | null;
  /** Indicates whether the player shot bogey-free during this round */
  bogeyFree?: boolean;
  /** Indicates whether the player got a streak of three birdies (or better) on this round */
  includesStreakOfThreeBirdiesOrBetter?: boolean;
  /** Total number of double eagles shot by this player on this round */
  doubleEagles?: number | null;
  /** Total eagles scored by the golfer in this round */
  eagles?: number | null;
  /** Total birdies scored by the golfer for this round */
  birdies?: number | null;
  /** Total pars scored by the player in this round of the tournament */
  pars?: number | null;
  /** Total bogeys scored by the golfer for this round */
  bogeys?: number | null;
  /** Total double bogeys scored by the golfer in this round */
  doubleBogeys?: number | null;
  /** Total holes the golfer scored worse than a double bogey for the round */
  worseThanDoubleBogey?: number | null;
  /** Total holes-in-one scored by the golfer in this round */
  holeInOnes?: number | null;
  /** Total triple bogeys this golfer scored for the round */
  tripleBogeys?: number | null;
  /** Total holes the golfer scored worse than a triple bogey for the round */
  worseThanTripleBogey?: number | null;
  /** The hole-by-hole results for this player in this round */
  holes?: PlayerHole[];
  /** The longest streak of birdies (or better) by the golfer */
  longestBirdieOrBetterStreak?: number | null;
  /** The sum of all back to back birdies (or better) by the golfer in this round */
  consecutiveBirdieOrBetterCount?: number | null;
  /** Total bounce back holes by the golfer for this round */
  bounceBackCount?: number | null;
  /** Indicates whether the player shot a streak of four birdies or better on this round */
  includesStreakOfFourBirdiesOrBetter?: boolean;
  /** Indicates whether the player shot a streak of five birdies or better on this round */
  includesStreakOfFiveBirdiesOrBetter?: boolean;
  /**
   * Indicates whether the player shot a streak of five (or more) birdies or better on this round
   */
  includesFiveOrMoreBirdiesOrBetter?: boolean;
  /** Indicates whether the player shot a six of five birdies or better on this round */
  includesStreakOfSixBirdiesOrBetter?: boolean;
  /** The time that this golfer tees off for the upcoming round (in US Eastern Time) */
  teeTime?: string | null;
  /** Indicates whether the player started with the back nine holes */
  backNineStart?: boolean | null;
};

export const playerRoundSchema: Schema<PlayerRound> = s.object<PlayerRound>({
  playerRoundId: s.optional(s.int()),
  playerTournamentId: s.optional(s.int()),
  number: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.int()),
  score: s.optionalNullable(s.int()),
  bogeyFree: s.optional(s.boolean()),
  includesStreakOfThreeBirdiesOrBetter: s.optional(s.boolean()),
  doubleEagles: s.optionalNullable(s.int()),
  eagles: s.optionalNullable(s.int()),
  birdies: s.optionalNullable(s.int()),
  pars: s.optionalNullable(s.int()),
  bogeys: s.optionalNullable(s.int()),
  doubleBogeys: s.optionalNullable(s.int()),
  worseThanDoubleBogey: s.optionalNullable(s.int()),
  holeInOnes: s.optionalNullable(s.int()),
  tripleBogeys: s.optionalNullable(s.int()),
  worseThanTripleBogey: s.optionalNullable(s.int()),
  holes: s.optional(s.array(s.lazy(() => playerHoleSchema))),
  longestBirdieOrBetterStreak: s.optionalNullable(s.float64()),
  consecutiveBirdieOrBetterCount: s.optionalNullable(s.float64()),
  bounceBackCount: s.optionalNullable(s.float64()),
  includesStreakOfFourBirdiesOrBetter: s.optional(s.boolean()),
  includesStreakOfFiveBirdiesOrBetter: s.optional(s.boolean()),
  includesFiveOrMoreBirdiesOrBetter: s.optional(s.boolean()),
  includesStreakOfSixBirdiesOrBetter: s.optional(s.boolean()),
  teeTime: s.optionalNullable(s.string()),
  backNineStart: s.optionalNullable(s.boolean()),
  _keysMap: {
    playerRoundId: "PlayerRoundID",
    playerTournamentId: "PlayerTournamentID",
    number: "Number",
    day: "Day",
    par: "Par",
    score: "Score",
    bogeyFree: "BogeyFree",
    includesStreakOfThreeBirdiesOrBetter: "IncludesStreakOfThreeBirdiesOrBetter",
    doubleEagles: "DoubleEagles",
    eagles: "Eagles",
    birdies: "Birdies",
    pars: "Pars",
    bogeys: "Bogeys",
    doubleBogeys: "DoubleBogeys",
    worseThanDoubleBogey: "WorseThanDoubleBogey",
    holeInOnes: "HoleInOnes",
    tripleBogeys: "TripleBogeys",
    worseThanTripleBogey: "WorseThanTripleBogey",
    holes: "Holes",
    longestBirdieOrBetterStreak: "LongestBirdieOrBetterStreak",
    consecutiveBirdieOrBetterCount: "ConsecutiveBirdieOrBetterCount",
    bounceBackCount: "BounceBackCount",
    includesStreakOfFourBirdiesOrBetter: "IncludesStreakOfFourBirdiesOrBetter",
    includesStreakOfFiveBirdiesOrBetter: "IncludesStreakOfFiveBirdiesOrBetter",
    includesFiveOrMoreBirdiesOrBetter: "IncludesFiveOrMoreBirdiesOrBetter",
    includesStreakOfSixBirdiesOrBetter: "IncludesStreakOfSixBirdiesOrBetter",
    teeTime: "TeeTime",
    backNineStart: "BackNineStart",
  },
});
