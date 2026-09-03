import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOddOutcome = {
  gameOddId?: number;
  gameOddResultTypeId?: number | null;
  gameOddResultType?: string | null;
  oddType?: string | null;
  gameOddType?: string | null;
  betValue?: number | null;
  actualValue?: number | null;
};

export const gameOddOutcomeSchema: Schema<GameOddOutcome> = s.object<GameOddOutcome>({
  gameOddId: s.optional(s.number()),
  gameOddResultTypeId: s.optionalNullable(s.number()),
  gameOddResultType: s.optionalNullable(s.string()),
  oddType: s.optionalNullable(s.string()),
  gameOddType: s.optionalNullable(s.string()),
  betValue: s.optionalNullable(s.number()),
  actualValue: s.optionalNullable(s.number()),
  _keysMap: {
    gameOddId: "GameOddId",
    gameOddResultTypeId: "GameOddResultTypeId",
    gameOddResultType: "GameOddResultType",
    oddType: "OddType",
    gameOddType: "GameOddType",
    betValue: "BetValue",
    actualValue: "ActualValue",
  },
});
