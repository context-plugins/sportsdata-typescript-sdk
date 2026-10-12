import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FighterBasic = {
  /** The unique ID of this fighter */
  fighterId?: number;
  /** The first name of the fighter */
  firstName?: string | null;
  /** The last name of the fighter */
  lastName?: string | null;
  /** The nickname of the fighter */
  nickname?: string | null;
  /** The fighter's weight class */
  weightClass?: string | null;
  /** The fighter's date of birth */
  birthDate?: string | null;
  /** The height of the fighter */
  height?: number | null;
  /** The fighter's weight in pounds (lbs.) */
  weight?: number | null;
  /** The fighter's reach */
  reach?: number | null;
  /** The total number of wins the fighter has in their career */
  wins?: number | null;
  /** Total number of losses by the fighter in their career */
  losses?: number | null;
  /** The total number of fights in the fighter's career that ended in a draw */
  draws?: number | null;
  /** The total number of fights in the fighter's career that ended in a no contest */
  noContests?: number | null;
  /** Total technical knockout (TKO) wins by the fighter in their career */
  technicalKnockouts?: number | null;
  /** Total technical knockout (TKO) losses by the fighter in their career */
  technicalKnockoutLosses?: number | null;
  /** Total submission wins by the fighter in their career */
  submissions?: number | null;
  /** Total submission losses by the fighter in their career */
  submissionLosses?: number | null;
  /** Total title fight wins by the fighter in their career */
  titleWins?: number | null;
  /** Total title fight losses by the fighter in their career */
  titleLosses?: number | null;
  /** The fighter's title draws */
  titleDraws?: number | null;
};

export const fighterBasicSchema: Schema<FighterBasic> = s.object<FighterBasic>({
  fighterId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  nickname: s.optionalNullable(s.string()),
  weightClass: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.float64()),
  weight: s.optionalNullable(s.float64()),
  reach: s.optionalNullable(s.float64()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  draws: s.optionalNullable(s.int()),
  noContests: s.optionalNullable(s.int()),
  technicalKnockouts: s.optionalNullable(s.int()),
  technicalKnockoutLosses: s.optionalNullable(s.int()),
  submissions: s.optionalNullable(s.int()),
  submissionLosses: s.optionalNullable(s.int()),
  titleWins: s.optionalNullable(s.int()),
  titleLosses: s.optionalNullable(s.int()),
  titleDraws: s.optionalNullable(s.int()),
  _keysMap: {
    fighterId: "FighterId",
    firstName: "FirstName",
    lastName: "LastName",
    nickname: "Nickname",
    weightClass: "WeightClass",
    birthDate: "BirthDate",
    height: "Height",
    weight: "Weight",
    reach: "Reach",
    wins: "Wins",
    losses: "Losses",
    draws: "Draws",
    noContests: "NoContests",
    technicalKnockouts: "TechnicalKnockouts",
    technicalKnockoutLosses: "TechnicalKnockoutLosses",
    submissions: "Submissions",
    submissionLosses: "SubmissionLosses",
    titleWins: "TitleWins",
    titleLosses: "TitleLosses",
    titleDraws: "TitleDraws",
  },
});
