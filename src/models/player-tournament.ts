import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerRoundSchema, type PlayerRound } from "./player-round.js";

export type PlayerTournament = {
  playerTournamentId?: number;
  playerId?: number;
  tournamentId?: number;
  name?: string | null;
  rank?: number | null;
  country?: string | null;
  totalScore?: number | null;
  totalStrokes?: number | null;
  totalThrough?: number | null;
  earnings?: number | null;
  fedExPoints?: number | null;
  fantasyPoints?: number | null;
  fantasyPointsDraftKings?: number | null;
  draftKingsSalary?: number | null;
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
  tournamentStatus?: string | null;
  isAlternate?: boolean | null;
  fanDuelSalary?: number | null;
  fantasyDraftSalary?: number | null;
  madeCutDidNotFinish?: boolean | null;
  rounds?: PlayerRound[];
  oddsToWin?: number | null;
  oddsToWinDescription?: string | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsFantasyDraft?: number | null;
  streaksOfFourBirdiesOrBetter?: number | null;
  streaksOfFiveBirdiesOrBetter?: number | null;
  consecutiveBirdieOrBetterCount?: number | null;
  bounceBackCount?: number | null;
  roundsWithFiveOrMoreBirdiesOrBetter?: number | null;
  isWithdrawn?: boolean;
  fantasyPointsYahoo?: number | null;
  streaksOfSixBirdiesOrBetter?: number | null;
};

export const playerTournamentSchema: Schema<PlayerTournament> = s.object<PlayerTournament>({
  playerTournamentId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  tournamentId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  rank: s.optionalNullable(s.number()),
  country: s.optionalNullable(s.string()),
  totalScore: s.optionalNullable(s.number()),
  totalStrokes: s.optionalNullable(s.number()),
  totalThrough: s.optionalNullable(s.number()),
  earnings: s.optionalNullable(s.number()),
  fedExPoints: s.optionalNullable(s.number()),
  fantasyPoints: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  draftKingsSalary: s.optionalNullable(s.number()),
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
  tournamentStatus: s.optionalNullable(s.string()),
  isAlternate: s.optionalNullable(s.boolean()),
  fanDuelSalary: s.optionalNullable(s.number()),
  fantasyDraftSalary: s.optionalNullable(s.number()),
  madeCutDidNotFinish: s.optionalNullable(s.boolean()),
  rounds: s.optional(s.array(s.lazy(() => playerRoundSchema))),
  oddsToWin: s.optionalNullable(s.number()),
  oddsToWinDescription: s.optionalNullable(s.string()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.number()),
  streaksOfFourBirdiesOrBetter: s.optionalNullable(s.number()),
  streaksOfFiveBirdiesOrBetter: s.optionalNullable(s.number()),
  consecutiveBirdieOrBetterCount: s.optionalNullable(s.number()),
  bounceBackCount: s.optionalNullable(s.number()),
  roundsWithFiveOrMoreBirdiesOrBetter: s.optionalNullable(s.number()),
  isWithdrawn: s.optional(s.boolean()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  streaksOfSixBirdiesOrBetter: s.optionalNullable(s.number()),
  _keysMap: {
    playerTournamentId: "PlayerTournamentID",
    playerId: "PlayerID",
    tournamentId: "TournamentID",
    name: "Name",
    rank: "Rank",
    country: "Country",
    totalScore: "TotalScore",
    totalStrokes: "TotalStrokes",
    totalThrough: "TotalThrough",
    earnings: "Earnings",
    fedExPoints: "FedExPoints",
    fantasyPoints: "FantasyPoints",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    draftKingsSalary: "DraftKingsSalary",
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
    tournamentStatus: "TournamentStatus",
    isAlternate: "IsAlternate",
    fanDuelSalary: "FanDuelSalary",
    fantasyDraftSalary: "FantasyDraftSalary",
    madeCutDidNotFinish: "MadeCutDidNotFinish",
    rounds: "Rounds",
    oddsToWin: "OddsToWin",
    oddsToWinDescription: "OddsToWinDescription",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
    streaksOfFourBirdiesOrBetter: "StreaksOfFourBirdiesOrBetter",
    streaksOfFiveBirdiesOrBetter: "StreaksOfFiveBirdiesOrBetter",
    consecutiveBirdieOrBetterCount: "ConsecutiveBirdieOrBetterCount",
    bounceBackCount: "BounceBackCount",
    roundsWithFiveOrMoreBirdiesOrBetter: "RoundsWithFiveOrMoreBirdiesOrBetter",
    isWithdrawn: "IsWithdrawn",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    streaksOfSixBirdiesOrBetter: "StreaksOfSixBirdiesOrBetter",
  },
});
