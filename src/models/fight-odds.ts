import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fighter1Schema, type Fighter1 } from "./fighter1.js";
import { fighter2Schema, type Fighter2 } from "./fighter2.js";

export type FightOdds = {
  fightOddId?: number | null;
  sportsbookId?: number | null;
  sportsbookName?: string | null;
  eventId?: number | null;
  fightId?: number | null;
  fighterA?: Fighter1;
  fighterB?: Fighter2;
  fighterAMoneyline?: number | null;
  fighterBMoneyline?: number | null;
  created?: string | null;
  updated?: string | null;
  sportsbookUrl?: string | null;
};

export const fightOddsSchema: Schema<FightOdds> = s.object<FightOdds>({
  fightOddId: s.optionalNullable(s.number()),
  sportsbookId: s.optionalNullable(s.number()),
  sportsbookName: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.number()),
  fightId: s.optionalNullable(s.number()),
  fighterA: s.optional(s.lazy(() => fighter1Schema)),
  fighterB: s.optional(s.lazy(() => fighter2Schema)),
  fighterAMoneyline: s.optionalNullable(s.number()),
  fighterBMoneyline: s.optionalNullable(s.number()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  sportsbookUrl: s.optionalNullable(s.string()),
  _keysMap: {
    fightOddId: "FightOddId",
    sportsbookId: "SportsbookId",
    sportsbookName: "SportsbookName",
    eventId: "EventId",
    fightId: "FightId",
    fighterA: "FighterA",
    fighterB: "FighterB",
    fighterAMoneyline: "FighterAMoneyline",
    fighterBMoneyline: "FighterBMoneyline",
    created: "Created",
    updated: "Updated",
    sportsbookUrl: "SportsbookUrl",
  },
});
