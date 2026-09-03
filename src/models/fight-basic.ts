import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FightBasic = {
  fightId?: number;
  order?: number | null;
  status?: string | null;
  weightClass?: string | null;
  cardSegment?: string | null;
  referee?: string | null;
  rounds?: number | null;
  resultClock?: number | null;
  resultRound?: number | null;
  resultType?: string | null;
  winnerId?: number | null;
  active?: boolean | null;
};

export const fightBasicSchema: Schema<FightBasic> = s.object<FightBasic>({
  fightId: s.optional(s.number()),
  order: s.optionalNullable(s.number()),
  status: s.optionalNullable(s.string()),
  weightClass: s.optionalNullable(s.string()),
  cardSegment: s.optionalNullable(s.string()),
  referee: s.optionalNullable(s.string()),
  rounds: s.optionalNullable(s.number()),
  resultClock: s.optionalNullable(s.number()),
  resultRound: s.optionalNullable(s.number()),
  resultType: s.optionalNullable(s.string()),
  winnerId: s.optionalNullable(s.number()),
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
