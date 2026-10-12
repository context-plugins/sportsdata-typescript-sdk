import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FightStat = {
  /** The unique ID of this fighter */
  fighterId?: number | null;
  /** The first name of the fighter */
  firstName?: string | null;
  /** The last name of the fighter */
  lastName?: string | null;
  /** Indicates if this fighter won the fight */
  winner?: boolean | null;
  /** Total fantasy points scored by the fighter in the fight */
  fantasyPoints?: number | null;
  /** Total DraftKings fantasy points scored by the fighter in the fight */
  fantasyPointsDraftKings?: number | null;
  /** The total number of official knockdowns by the fighter to the opponent */
  knockdowns?: number | null;
  /** Total number of all strikes attempted by the fighter in this fight */
  totalStrikesAttempted?: number | null;
  /** Total number of all strikes landed by the fighter in this fight */
  totalStrikesLanded?: number | null;
  /**
   * Total number of strikes attempted that officials deem significant strikes by the fighter in
   * this fight
   */
  sigStrikesAttempted?: number | null;
  /**
   * Total number of strikes landed that officials deem significant strikes by the fighter in this
   * fight
   */
  sigStrikesLanded?: number | null;
  /** Total number of takedowns attempted by the fighter in this fight */
  takedownsAttempted?: number | null;
  /** Total number of takedowns landed by the fighter in this fight */
  takedownsLanded?: number | null;
  /**
   * Total number of takedowns that were a result of forcefully slamming opponent to ground by the
   * fighter in this fight
   */
  takedownsSlams?: number | null;
  /** Total number of takedowns landed divided by number of takedowns attempted */
  takedownAccuracy?: number | null;
  /** Total number of advances to half guard, side control, mount, or back control */
  advances?: number | null;
  /**
   * Transitions performed by countering your opponents transition and giving fighter the offensive
   * advantage.
   */
  reversals?: number | null;
  /** Total number of submissions or technical submissions attempted */
  submissions?: number | null;
  /** Number of takedown slams landed divided by number of takedowns attempted */
  slamRate?: number | null;
  /** Number of seconds fighter deemed in control by officials */
  timeInControl?: number | null;
  /** Indicates if this fighter won the fight in the first round */
  firstRoundWin?: boolean | null;
  /** Indicates if this fighter won the fight in the second round */
  secondRoundWin?: boolean | null;
  /** Indicates if this fighter won the fight in the third round */
  thirdRoundWin?: boolean | null;
  /** Indicates if this fighter won the fight in the fourth round */
  fourthRoundWin?: boolean | null;
  /** Indicates if this fighter won the fight in the fifth round */
  fifthRoundWin?: boolean | null;
  /** Indicates if this fighter won the fight by decision */
  decisionWin?: boolean | null;
};

export const fightStatSchema: Schema<FightStat> = s.object<FightStat>({
  fighterId: s.optionalNullable(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  winner: s.optionalNullable(s.boolean()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  knockdowns: s.optionalNullable(s.float64()),
  totalStrikesAttempted: s.optionalNullable(s.float64()),
  totalStrikesLanded: s.optionalNullable(s.float64()),
  sigStrikesAttempted: s.optionalNullable(s.float64()),
  sigStrikesLanded: s.optionalNullable(s.float64()),
  takedownsAttempted: s.optionalNullable(s.float64()),
  takedownsLanded: s.optionalNullable(s.float64()),
  takedownsSlams: s.optionalNullable(s.float64()),
  takedownAccuracy: s.optionalNullable(s.float64()),
  advances: s.optionalNullable(s.float64()),
  reversals: s.optionalNullable(s.float64()),
  submissions: s.optionalNullable(s.float64()),
  slamRate: s.optionalNullable(s.float64()),
  timeInControl: s.optionalNullable(s.float64()),
  firstRoundWin: s.optionalNullable(s.boolean()),
  secondRoundWin: s.optionalNullable(s.boolean()),
  thirdRoundWin: s.optionalNullable(s.boolean()),
  fourthRoundWin: s.optionalNullable(s.boolean()),
  fifthRoundWin: s.optionalNullable(s.boolean()),
  decisionWin: s.optionalNullable(s.boolean()),
  _keysMap: {
    fighterId: "FighterId",
    firstName: "FirstName",
    lastName: "LastName",
    winner: "Winner",
    fantasyPoints: "FantasyPoints",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    knockdowns: "Knockdowns",
    totalStrikesAttempted: "TotalStrikesAttempted",
    totalStrikesLanded: "TotalStrikesLanded",
    sigStrikesAttempted: "SigStrikesAttempted",
    sigStrikesLanded: "SigStrikesLanded",
    takedownsAttempted: "TakedownsAttempted",
    takedownsLanded: "TakedownsLanded",
    takedownsSlams: "TakedownsSlams",
    takedownAccuracy: "TakedownAccuracy",
    advances: "Advances",
    reversals: "Reversals",
    submissions: "Submissions",
    slamRate: "SlamRate",
    timeInControl: "TimeInControl",
    firstRoundWin: "FirstRoundWin",
    secondRoundWin: "SecondRoundWin",
    thirdRoundWin: "ThirdRoundWin",
    fourthRoundWin: "FourthRoundWin",
    fifthRoundWin: "FifthRoundWin",
    decisionWin: "DecisionWin",
  },
});
