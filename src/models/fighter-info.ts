import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FighterInfo = {
  /** The unique ID of this fighter */
  fighterId?: number | null;
  /** The first name of the fighter */
  firstName?: string | null;
  /** The last name of the fighter */
  lastName?: string | null;
  /** The fighter's win total prior to the fight */
  preFightWins?: number | null;
  /** The fighter's loss total prior to the fight */
  preFightLosses?: number | null;
  /** The fighter's draw total prior to the fight */
  preFightDraws?: number | null;
  /** The fighter's no contest total prior to the fight */
  preFightNoContests?: number | null;
  /** Indicates if this fighter won the fight */
  winner?: boolean | null;
  /** Moneyline for the fighter's odds to win the fight */
  moneyline?: number | null;
  /** Indicates the fighter is still listed for this fight */
  active?: boolean | null;
};

export const fighterInfoSchema: Schema<FighterInfo> = s.object<FighterInfo>({
  fighterId: s.optionalNullable(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  preFightWins: s.optionalNullable(s.int()),
  preFightLosses: s.optionalNullable(s.int()),
  preFightDraws: s.optionalNullable(s.int()),
  preFightNoContests: s.optionalNullable(s.int()),
  winner: s.optionalNullable(s.boolean()),
  moneyline: s.optionalNullable(s.int()),
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
