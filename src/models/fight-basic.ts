import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FightBasic = {
  /** The unique ID of this fight */
  fightId?: number;
  /** The order of this fight on the fight card */
  order?: number | null;
  /**
   * Indicates the fight's status. Possible values: Scheduled; Pre-fight; Walkouts; Intros; In
   * Progress; End of Round; Final; Canceled; and NULL
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
  /** Indicates the fight is still active */
  active?: boolean | null;
};

export const fightBasicSchema: Schema<FightBasic> = s.object<FightBasic>({
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
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
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
    active: "Active",
  },
});
