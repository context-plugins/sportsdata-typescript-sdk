import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fightStatSchema, type FightStat } from "./fight-stat.js";
import { fighterInfoSchema, type FighterInfo } from "./fighter-info.js";

export type FightDetail = {
  /** Stats for each fighter in this fight */
  fightStats?: FightStat[];
  /** The unique ID of this fight */
  fightId?: number;
  /** The order of this fight on the fight card */
  order?: number | null;
  /**
   * Indicates the event's status. Possible values include: Scheduled; In Progress; Final;
   * Suspended; Postponed; Canceled; NULL
   */
  status?: string | null;
  /** The weight class this fight is taking place at */
  weightClass?: string | null;
  /** What segment of the card this fight is on (Main Card, Prelims, Early Prelims) */
  cardSegment?: string | null;
  /** The number of referee for this fight */
  referee?: string | null;
  /** The number of rounds for this fight */
  rounds?: number | null;
  /** The time on the clock in seconds when the fight ended */
  resultClock?: number | null;
  /** The round when the fight ended */
  resultRound?: number | null;
  /**
   * The way in which this fight ended (Possible values: No Contest; Decision; Submission; KO/TKO;
   * Decision - Majority; Decision - Unanimous; Decision - Split; Draw; DQ)
   */
  resultType?: string | null;
  /** The unique ID of the fighter who won the fight */
  winnerId?: number | null;
  /**
   * The fighters competing in this fight and their info (FighterID, FirstName, LastName,
   * PreFightWins, PreFightLosses, PreFightDraws, PreFightNoContests, Winner, Moneyline)
   */
  fighters?: FighterInfo[];
  /** Indicates the fight is still active */
  active?: boolean | null;
};

export const fightDetailSchema: Schema<FightDetail> = s.object<FightDetail>({
  fightStats: s.optional(s.array(s.lazy(() => fightStatSchema))),
  fightId: s.optional(s.int()),
  order: s.optionalNullable(s.int()),
  status: s.optionalNullable(s.string()),
  weightClass: s.optionalNullable(s.string()),
  cardSegment: s.optionalNullable(s.string()),
  referee: s.optionalNullable(s.string()),
  rounds: s.optionalNullable(s.int()),
  resultClock: s.optionalNullable(s.int()),
  resultRound: s.optionalNullable(s.int()),
  resultType: s.optionalNullable(s.string()),
  winnerId: s.optionalNullable(s.int()),
  fighters: s.optional(s.array(s.lazy(() => fighterInfoSchema))),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    fightStats: "FightStats",
    fightId: "FightId",
    order: "Order",
    status: "Status",
    weightClass: "WeightClass",
    cardSegment: "CardSegment",
    referee: "Referee",
    rounds: "Rounds",
    resultClock: "ResultClock",
    resultRound: "ResultRound",
    resultType: "ResultType",
    winnerId: "WinnerId",
    fighters: "Fighters",
    active: "Active",
  },
});
