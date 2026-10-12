import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerRoundSchema, type PlayerRound } from "./player-round.js";

export type PlayerTournament = {
  /** The unique ID of this player/tournament combination */
  playerTournamentId?: number;
  /** The unique ID of the golfer */
  playerId?: number;
  /** The unique ID of the tournament */
  tournamentId?: number;
  /** The full name of the golfer */
  name?: string | null;
  /** The rank of this golfer in the tournament */
  rank?: number | null;
  /** The country where this golfer is from */
  country?: string | null;
  /** The total score of the golfer for this tournament as compared to par */
  totalScore?: number | null;
  /** The total strokes this golfer has for this tournament */
  totalStrokes?: number | null;
  /** The current hole of this golfer for the current round */
  totalThrough?: number | null;
  /** Total money earned by the golfer in this tournament */
  earnings?: number | null;
  /** Total FedEx points scored by the golfer in this tournament */
  fedExPoints?: number | null;
  /**
   * Total fantasy points scored by the golfer in the tournament using the default SportsDataIO
   * scoring system
   */
  fantasyPoints?: number | null;
  /**
   * Total fantasy points scored by the golfer in the tournament using DraftKings' scoring system
   */
  fantasyPointsDraftKings?: number | null;
  /** The golfer's salary for DraftKings daily fantasy contests */
  draftKingsSalary?: number | null;
  /** Total double eagles scored by the golfer in this tournament */
  doubleEagles?: number | null;
  /** Total eagles scored by the golfer in this tournament */
  eagles?: number | null;
  /** Total birdies scored by the golfer for this tournament */
  birdies?: number | null;
  /** Total pars scored by the player in this tournament */
  pars?: number | null;
  /** Total bogeys scored by the golfer in this tournament */
  bogeys?: number | null;
  /** Total double bogeys scored by the golfer in this tournament */
  doubleBogeys?: number | null;
  /** Total holes the golfer scored worse than a double bogey for the tournament */
  worseThanDoubleBogey?: number | null;
  /** Total holes-in-one scored by the golfer in this tournament */
  holeInOnes?: number | null;
  /** Total streaks of three birdies (or better) this golfer scored */
  streaksOfThreeBirdiesOrBetter?: number | null;
  /** Total bogey-free rounds by the golfer in this tournament */
  bogeyFreeRounds?: number | null;
  /** Total rounds this golfer finished scoring under 70 strokes */
  roundsUnderSeventy?: number | null;
  /** Total triple bogeys this golfer scored for the tournament */
  tripleBogeys?: number | null;
  /** Total holes the golfer scored worse than a triple bogey for the tournament */
  worseThanTripleBogey?: number | null;
  /** The time that this golfer tees off for the upcoming round (in US Eastern Time) */
  teeTime?: string | null;
  /**
   * Indicates whether this golfer made the cut. This field defaults to 1 at tournament start, then
   * flips to 0 once a golfer has been cut
   */
  madeCut?: number | null;
  /**
   * Indicates whether this golfer won the tournament. Note: For tournament projections; this value
   * will be a decimal between 0 and 1 of the likelihood that the golfer wins the tournament
   */
  win?: number | null;
  /**
   * Indicates whether a golfer is not playing in this tournament. Note: If golfer is not playing;
   * this will be out
   */
  tournamentStatus?: string | null;
  /**
   * Indicates if a golfer is in the regular playing field or if they are an alternate for this
   * tournament
   */
  isAlternate?: boolean | null;
  /** The golfer's salary for FanDuel daily fantasy contests */
  fanDuelSalary?: number | null;
  /** The golfer's salary for FantasyDraft's daily fantasy contests */
  fantasyDraftSalary?: number | null;
  /** Indicates whether this golfer made the cut but did not finish the tournament */
  madeCutDidNotFinish?: boolean | null;
  /** The details of the rounds this golfer played */
  rounds?: PlayerRound[];
  /**
   * Odds to win the tournament displayed as a decimal (assumed over 1; ex. 9/2 = 4.5). This is the
   * payout from the sports book for each dollar wagered
   */
  oddsToWin?: number | null;
  /**
   * Odds to win the tournament displayed as text (ex. 9/2). This is the payout from the sports book
   * for each dollar wagered
   */
  oddsToWinDescription?: string | null;
  /** Total fantasy points scored by the golfer in the tournament using FanDuel's scoring system */
  fantasyPointsFanDuel?: number | null;
  /**
   * Total fantasy points scored by the golfer in the tournament using FantasyDraft's scoring system
   */
  fantasyPointsFantasyDraft?: number | null;
  /** Total streaks of four birdies (or better) this golfer scored */
  streaksOfFourBirdiesOrBetter?: number | null;
  /** Total streaks of five birdies (or better) this golfer scored */
  streaksOfFiveBirdiesOrBetter?: number | null;
  /** The sum of all back to back birdies (or better) by the golfer in this tournament */
  consecutiveBirdieOrBetterCount?: number | null;
  /**
   * The total bounce back holes for the golfer across all rounds of the tournament. Note: a bounce
   * back hole is an under par hole following an over par hole
   */
  bounceBackCount?: number | null;
  /** Total rounds that the golfer scored five or more birdies or better */
  roundsWithFiveOrMoreBirdiesOrBetter?: number | null;
  /** Indicates whether the player has withdrawn from the tournament */
  isWithdrawn?: boolean;
  /** Total fantasy points scored by the golfer in the tournament using Yahoo's scoring system */
  fantasyPointsYahoo?: number | null;
  /** Total streaks of six birdies (or better) this golfer scored */
  streaksOfSixBirdiesOrBetter?: number | null;
};

export const playerTournamentSchema: Schema<PlayerTournament> = s.object<PlayerTournament>({
  playerTournamentId: s.optional(s.int()),
  playerId: s.optional(s.int()),
  tournamentId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  rank: s.optionalNullable(s.int()),
  country: s.optionalNullable(s.string()),
  totalScore: s.optionalNullable(s.float64()),
  totalStrokes: s.optionalNullable(s.float64()),
  totalThrough: s.optionalNullable(s.int()),
  earnings: s.optionalNullable(s.float64()),
  fedExPoints: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  draftKingsSalary: s.optionalNullable(s.int()),
  doubleEagles: s.optionalNullable(s.float64()),
  eagles: s.optionalNullable(s.float64()),
  birdies: s.optionalNullable(s.float64()),
  pars: s.optionalNullable(s.float64()),
  bogeys: s.optionalNullable(s.float64()),
  doubleBogeys: s.optionalNullable(s.float64()),
  worseThanDoubleBogey: s.optionalNullable(s.float64()),
  holeInOnes: s.optionalNullable(s.float64()),
  streaksOfThreeBirdiesOrBetter: s.optionalNullable(s.float64()),
  bogeyFreeRounds: s.optionalNullable(s.float64()),
  roundsUnderSeventy: s.optionalNullable(s.float64()),
  tripleBogeys: s.optionalNullable(s.float64()),
  worseThanTripleBogey: s.optionalNullable(s.float64()),
  teeTime: s.optionalNullable(s.string()),
  madeCut: s.optionalNullable(s.float64()),
  win: s.optionalNullable(s.float64()),
  tournamentStatus: s.optionalNullable(s.string()),
  isAlternate: s.optionalNullable(s.boolean()),
  fanDuelSalary: s.optionalNullable(s.int()),
  fantasyDraftSalary: s.optionalNullable(s.int()),
  madeCutDidNotFinish: s.optionalNullable(s.boolean()),
  rounds: s.optional(s.array(s.lazy(() => playerRoundSchema))),
  oddsToWin: s.optionalNullable(s.float64()),
  oddsToWinDescription: s.optionalNullable(s.string()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.float64()),
  streaksOfFourBirdiesOrBetter: s.optionalNullable(s.float64()),
  streaksOfFiveBirdiesOrBetter: s.optionalNullable(s.float64()),
  consecutiveBirdieOrBetterCount: s.optionalNullable(s.float64()),
  bounceBackCount: s.optionalNullable(s.float64()),
  roundsWithFiveOrMoreBirdiesOrBetter: s.optionalNullable(s.float64()),
  isWithdrawn: s.optional(s.boolean()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  streaksOfSixBirdiesOrBetter: s.optionalNullable(s.float64()),
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
