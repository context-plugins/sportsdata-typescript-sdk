import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FightStat = {
  fighterId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  winner?: boolean | null;
  fantasyPoints?: number | null;
  fantasyPointsDraftKings?: number | null;
  knockdowns?: number | null;
  totalStrikesAttempted?: number | null;
  totalStrikesLanded?: number | null;
  sigStrikesAttempted?: number | null;
  sigStrikesLanded?: number | null;
  takedownsAttempted?: number | null;
  takedownsLanded?: number | null;
  takedownsSlams?: number | null;
  takedownAccuracy?: number | null;
  advances?: number | null;
  reversals?: number | null;
  submissions?: number | null;
  slamRate?: number | null;
  timeInControl?: number | null;
  firstRoundWin?: boolean | null;
  secondRoundWin?: boolean | null;
  thirdRoundWin?: boolean | null;
  fourthRoundWin?: boolean | null;
  fifthRoundWin?: boolean | null;
  decisionWin?: boolean | null;
};

export const fightStatSchema: Schema<FightStat> = s.object<FightStat>({
  fighterId: s.optionalNullable(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  winner: s.optionalNullable(s.boolean()),
  fantasyPoints: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  knockdowns: s.optionalNullable(s.number()),
  totalStrikesAttempted: s.optionalNullable(s.number()),
  totalStrikesLanded: s.optionalNullable(s.number()),
  sigStrikesAttempted: s.optionalNullable(s.number()),
  sigStrikesLanded: s.optionalNullable(s.number()),
  takedownsAttempted: s.optionalNullable(s.number()),
  takedownsLanded: s.optionalNullable(s.number()),
  takedownsSlams: s.optionalNullable(s.number()),
  takedownAccuracy: s.optionalNullable(s.number()),
  advances: s.optionalNullable(s.number()),
  reversals: s.optionalNullable(s.number()),
  submissions: s.optionalNullable(s.number()),
  slamRate: s.optionalNullable(s.number()),
  timeInControl: s.optionalNullable(s.number()),
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
