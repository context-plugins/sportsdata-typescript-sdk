import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The fighter's overall career stats */
export type CareerStat2 = {
  /** The unique ID of this fighter */
  fighterId?: number | null;
  /** The first name of the fighter */
  firstName?: string | null;
  /** The last name of the fighter */
  lastName?: string | null;
  /** Significant strikes landed per minute over the fighter's career */
  sigStrikesLandedPerMinute?: number | null;
  /** Significant strikes landed divided by strikes attempted over the fighter's career */
  sigStrikeAccuracy?: number | null;
  /** Average takedowns landed per 15 minutes in the fighter's career */
  takedownAverage?: number | null;
  /** Average number of submissions attempted per 15 minutes in the fighter's career */
  submissionAverage?: number | null;
  /** The percentage of wins ending in a knockout by the fighter */
  knockoutPercentage?: number | null;
  /** Percentage of wins ending by TKO in the fighter's career */
  technicalKnockoutPercentage?: number | null;
  /** The percentage of wins ending in a decision by the fighter in their career */
  decisionPercentage?: number | null;
};

export const careerStat2Schema: Schema<CareerStat2> = s.object<CareerStat2>({
  fighterId: s.optionalNullable(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  sigStrikesLandedPerMinute: s.optionalNullable(s.float64()),
  sigStrikeAccuracy: s.optionalNullable(s.float64()),
  takedownAverage: s.optionalNullable(s.float64()),
  submissionAverage: s.optionalNullable(s.float64()),
  knockoutPercentage: s.optionalNullable(s.float64()),
  technicalKnockoutPercentage: s.optionalNullable(s.float64()),
  decisionPercentage: s.optionalNullable(s.float64()),
  _keysMap: {
    fighterId: "FighterId",
    firstName: "FirstName",
    lastName: "LastName",
    sigStrikesLandedPerMinute: "SigStrikesLandedPerMinute",
    sigStrikeAccuracy: "SigStrikeAccuracy",
    takedownAverage: "TakedownAverage",
    submissionAverage: "SubmissionAverage",
    knockoutPercentage: "KnockoutPercentage",
    technicalKnockoutPercentage: "TechnicalKnockoutPercentage",
    decisionPercentage: "DecisionPercentage",
  },
});
