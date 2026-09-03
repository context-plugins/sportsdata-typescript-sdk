import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerHoleSchema, type PlayerHole } from "./player-hole.js";

export type PlayerRound = {
  playerRoundId?: number;
  playerTournamentId?: number;
  number?: number | null;
  day?: string | null;
  par?: number | null;
  score?: number | null;
  bogeyFree?: boolean;
  includesStreakOfThreeBirdiesOrBetter?: boolean;
  doubleEagles?: number | null;
  eagles?: number | null;
  birdies?: number | null;
  pars?: number | null;
  bogeys?: number | null;
  doubleBogeys?: number | null;
  worseThanDoubleBogey?: number | null;
  holeInOnes?: number | null;
  tripleBogeys?: number | null;
  worseThanTripleBogey?: number | null;
  holes?: PlayerHole[];
  longestBirdieOrBetterStreak?: number | null;
  consecutiveBirdieOrBetterCount?: number | null;
  bounceBackCount?: number | null;
  includesStreakOfFourBirdiesOrBetter?: boolean;
  includesStreakOfFiveBirdiesOrBetter?: boolean;
  includesFiveOrMoreBirdiesOrBetter?: boolean;
  includesStreakOfSixBirdiesOrBetter?: boolean;
  teeTime?: string | null;
  backNineStart?: boolean | null;
};

export const playerRoundSchema: Schema<PlayerRound> = s.object<PlayerRound>({
  playerRoundId: s.optional(s.number()),
  playerTournamentId: s.optional(s.number()),
  number: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  par: s.optionalNullable(s.number()),
  score: s.optionalNullable(s.number()),
  bogeyFree: s.optional(s.boolean()),
  includesStreakOfThreeBirdiesOrBetter: s.optional(s.boolean()),
  doubleEagles: s.optionalNullable(s.number()),
  eagles: s.optionalNullable(s.number()),
  birdies: s.optionalNullable(s.number()),
  pars: s.optionalNullable(s.number()),
  bogeys: s.optionalNullable(s.number()),
  doubleBogeys: s.optionalNullable(s.number()),
  worseThanDoubleBogey: s.optionalNullable(s.number()),
  holeInOnes: s.optionalNullable(s.number()),
  tripleBogeys: s.optionalNullable(s.number()),
  worseThanTripleBogey: s.optionalNullable(s.number()),
  holes: s.optional(s.array(s.lazy(() => playerHoleSchema))),
  longestBirdieOrBetterStreak: s.optionalNullable(s.number()),
  consecutiveBirdieOrBetterCount: s.optionalNullable(s.number()),
  bounceBackCount: s.optionalNullable(s.number()),
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
