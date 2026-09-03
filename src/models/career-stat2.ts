import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CareerStat2 = {
  fighterId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  sigStrikesLandedPerMinute?: number | null;
  sigStrikeAccuracy?: number | null;
  takedownAverage?: number | null;
  submissionAverage?: number | null;
  knockoutPercentage?: number | null;
  technicalKnockoutPercentage?: number | null;
  decisionPercentage?: number | null;
};

export const careerStat2Schema: Schema<CareerStat2> = s.object<CareerStat2>({
  fighterId: s.optionalNullable(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  sigStrikesLandedPerMinute: s.optionalNullable(s.number()),
  sigStrikeAccuracy: s.optionalNullable(s.number()),
  takedownAverage: s.optionalNullable(s.number()),
  submissionAverage: s.optionalNullable(s.number()),
  knockoutPercentage: s.optionalNullable(s.number()),
  technicalKnockoutPercentage: s.optionalNullable(s.number()),
  decisionPercentage: s.optionalNullable(s.number()),
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
