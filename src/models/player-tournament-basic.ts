import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerRoundSchema, type PlayerRound } from "./player-round.js";

export type PlayerTournamentBasic = {
  playerTournamentId?: number;
  playerId?: number;
  name?: string | null;
  rank?: number | null;
  country?: string | null;
  totalScore?: number | null;
  totalStrokes?: number | null;
  totalThrough?: number | null;
  earnings?: number | null;
  fedExPoints?: number | null;
  doubleEagles?: number | null;
  eagles?: number | null;
  birdies?: number | null;
  pars?: number | null;
  bogeys?: number | null;
  doubleBogeys?: number | null;
  worseThanDoubleBogey?: number | null;
  holeInOnes?: number | null;
  streaksOfThreeBirdiesOrBetter?: number | null;
  bogeyFreeRounds?: number | null;
  roundsUnderSeventy?: number | null;
  tripleBogeys?: number | null;
  worseThanTripleBogey?: number | null;
  teeTime?: string | null;
  madeCut?: number | null;
  win?: number | null;
  isAlternate?: boolean | null;
  madeCutDidNotFinish?: boolean | null;
  streaksOfFourBirdiesOrBetter?: number | null;
  streaksOfFiveBirdiesOrBetter?: number | null;
  consecutiveBirdieOrBetterCount?: number | null;
  bounceBackCount?: number | null;
  roundsWithFiveOrMoreBirdiesOrBetter?: number | null;
  isWithdrawn?: boolean;
  streaksOfSixBirdiesOrBetter?: number | null;
  rounds?: PlayerRound[];
};

export const playerTournamentBasicSchema: Schema<PlayerTournamentBasic> = s.object<PlayerTournamentBasic>({
  playerTournamentId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  rank: s.optionalNullable(s.number()),
  country: s.optionalNullable(s.string()),
  totalScore: s.optionalNullable(s.number()),
  totalStrokes: s.optionalNullable(s.number()),
  totalThrough: s.optionalNullable(s.number()),
  earnings: s.optionalNullable(s.number()),
  fedExPoints: s.optionalNullable(s.number()),
  doubleEagles: s.optionalNullable(s.number()),
  eagles: s.optionalNullable(s.number()),
  birdies: s.optionalNullable(s.number()),
  pars: s.optionalNullable(s.number()),
  bogeys: s.optionalNullable(s.number()),
  doubleBogeys: s.optionalNullable(s.number()),
  worseThanDoubleBogey: s.optionalNullable(s.number()),
  holeInOnes: s.optionalNullable(s.number()),
  streaksOfThreeBirdiesOrBetter: s.optionalNullable(s.number()),
  bogeyFreeRounds: s.optionalNullable(s.number()),
  roundsUnderSeventy: s.optionalNullable(s.number()),
  tripleBogeys: s.optionalNullable(s.number()),
  worseThanTripleBogey: s.optionalNullable(s.number()),
  teeTime: s.optionalNullable(s.string()),
  madeCut: s.optionalNullable(s.number()),
  win: s.optionalNullable(s.number()),
  isAlternate: s.optionalNullable(s.boolean()),
  madeCutDidNotFinish: s.optionalNullable(s.boolean()),
  streaksOfFourBirdiesOrBetter: s.optionalNullable(s.number()),
  streaksOfFiveBirdiesOrBetter: s.optionalNullable(s.number()),
  consecutiveBirdieOrBetterCount: s.optionalNullable(s.number()),
  bounceBackCount: s.optionalNullable(s.number()),
  roundsWithFiveOrMoreBirdiesOrBetter: s.optionalNullable(s.number()),
  isWithdrawn: s.optional(s.boolean()),
  streaksOfSixBirdiesOrBetter: s.optionalNullable(s.number()),
  rounds: s.optional(s.array(s.lazy(() => playerRoundSchema))),
  _keysMap: {
    playerTournamentId: "PlayerTournamentID",
    playerId: "PlayerID",
    name: "Name",
    rank: "Rank",
    country: "Country",
    totalScore: "TotalScore",
    totalStrokes: "TotalStrokes",
    totalThrough: "TotalThrough",
    earnings: "Earnings",
    fedExPoints: "FedExPoints",
    doubleEagles: "DoubleEagles",
    eagles: "Eagles",
    birdies: "Birdies",
    pars: "Pars",
    bogeys: "Bogeys",
    doubleBogeys: "DoubleBogeys",
    worseThanDoubleBogey: "WorseThanDoubleBogey",
    holeInOnes: "HoleInOnes",
    streaksOfThreeBirdiesOrBetter: "StreaksOfThreeBirdiesOrBetter",
    bogeyFreeRounds: "BogeyFreeRounds",
    roundsUnderSeventy: "RoundsUnderSeventy",
    tripleBogeys: "TripleBogeys",
    worseThanTripleBogey: "WorseThanTripleBogey",
    teeTime: "TeeTime",
    madeCut: "MadeCut",
    win: "Win",
    isAlternate: "IsAlternate",
    madeCutDidNotFinish: "MadeCutDidNotFinish",
    streaksOfFourBirdiesOrBetter: "StreaksOfFourBirdiesOrBetter",
    streaksOfFiveBirdiesOrBetter: "StreaksOfFiveBirdiesOrBetter",
    consecutiveBirdieOrBetterCount: "ConsecutiveBirdieOrBetterCount",
    bounceBackCount: "BounceBackCount",
    roundsWithFiveOrMoreBirdiesOrBetter: "RoundsWithFiveOrMoreBirdiesOrBetter",
    isWithdrawn: "IsWithdrawn",
    streaksOfSixBirdiesOrBetter: "StreaksOfSixBirdiesOrBetter",
    rounds: "Rounds",
  },
});
