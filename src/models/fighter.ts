import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { careerStat2Schema, type CareerStat2 } from "./career-stat2.js";

export type Fighter = {
  fighterId?: number;
  firstName?: string | null;
  lastName?: string | null;
  nickname?: string | null;
  weightClass?: string | null;
  birthDate?: string | null;
  height?: number | null;
  weight?: number | null;
  reach?: number | null;
  wins?: number | null;
  losses?: number | null;
  draws?: number | null;
  noContests?: number | null;
  technicalKnockouts?: number | null;
  technicalKnockoutLosses?: number | null;
  submissions?: number | null;
  submissionLosses?: number | null;
  titleWins?: number | null;
  titleLosses?: number | null;
  titleDraws?: number | null;
  careerStats?: CareerStat2;
};

export const fighterSchema: Schema<Fighter> = s.object<Fighter>({
  fighterId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  nickname: s.optionalNullable(s.string()),
  weightClass: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  reach: s.optionalNullable(s.number()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  draws: s.optionalNullable(s.number()),
  noContests: s.optionalNullable(s.number()),
  technicalKnockouts: s.optionalNullable(s.number()),
  technicalKnockoutLosses: s.optionalNullable(s.number()),
  submissions: s.optionalNullable(s.number()),
  submissionLosses: s.optionalNullable(s.number()),
  titleWins: s.optionalNullable(s.number()),
  titleLosses: s.optionalNullable(s.number()),
  titleDraws: s.optionalNullable(s.number()),
  careerStats: s.optional(s.lazy(() => careerStat2Schema)),
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
    careerStats: "CareerStats",
  },
});
