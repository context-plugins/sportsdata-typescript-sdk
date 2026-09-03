import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FighterInfo = {
  fighterId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  preFightWins?: number | null;
  preFightLosses?: number | null;
  preFightDraws?: number | null;
  preFightNoContests?: number | null;
  winner?: boolean | null;
  moneyline?: number | null;
  active?: boolean | null;
};

export const fighterInfoSchema: Schema<FighterInfo> = s.object<FighterInfo>({
  fighterId: s.optionalNullable(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  preFightWins: s.optionalNullable(s.number()),
  preFightLosses: s.optionalNullable(s.number()),
  preFightDraws: s.optionalNullable(s.number()),
  preFightNoContests: s.optionalNullable(s.number()),
  winner: s.optionalNullable(s.boolean()),
  moneyline: s.optionalNullable(s.number()),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    fighterId: "FighterId",
    firstName: "FirstName",
    lastName: "LastName",
    preFightWins: "PreFightWins",
    preFightLosses: "PreFightLosses",
    preFightDraws: "PreFightDraws",
    preFightNoContests: "PreFightNoContests",
    winner: "Winner",
    moneyline: "Moneyline",
    active: "Active",
  },
});
