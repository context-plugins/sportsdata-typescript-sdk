import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GameOddOutcome1 = {
  gameOddId?: number | null;
  gameOddResultTypeId?: number | null;
  gameOddResultType?: string | null;
  oddType?: string | null;
  gameOddType?: string | null;
  betValue?: number | null;
  actualValue?: number | null;
};

export const gameOddOutcome1Schema: Schema<GameOddOutcome1> = s.object<GameOddOutcome1>({
  gameOddId: s.optionalNullable(s.number()),
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
