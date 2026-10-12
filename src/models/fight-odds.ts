import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fighter1Schema, type Fighter1 } from "./fighter1.js";
import { fighter2Schema, type Fighter2 } from "./fighter2.js";

export type FightOdds = {
  /** The unique ID of this FIghtOdd */
  fightOddId?: number | null;
  /** The unique ID of this Sportsbook */
  sportsbookId?: number | null;
  /** The name of Sportsbook */
  sportsbookName?: string | null;
  /** The unique ID of this event */
  eventId?: number | null;
  /** The unique ID of this Fight */
  fightId?: number | null;
  /** The details of Fighter A */
  fighterA?: Fighter1;
  /** The details of Fighter B */
  fighterB?: Fighter2;
  /** The sportsbook's moneyline for Fighter A */
  fighterAMoneyline?: number | null;
  /** The sportsbook's moneyline for Fighter B */
  fighterBMoneyline?: number | null;
  /** The timestamp of when these odds were first created based on US Eastern Time */
  created?: string | null;
  /** The timestamp of when these odds were last updated (in US Eastern Time) */
  updated?: string | null;
  /** The URL for the sportsbook event */
  sportsbookUrl?: string | null;
};

export const fightOddsSchema: Schema<FightOdds> = s.object<FightOdds>({
  fightOddId: s.optionalNullable(s.int()),
  sportsbookId: s.optionalNullable(s.int()),
  sportsbookName: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.int()),
  fightId: s.optionalNullable(s.int()),
  fighterA: s.optional(s.lazy(() => fighter1Schema)),
  fighterB: s.optional(s.lazy(() => fighter2Schema)),
  fighterAMoneyline: s.optionalNullable(s.int()),
  fighterBMoneyline: s.optionalNullable(s.int()),
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
