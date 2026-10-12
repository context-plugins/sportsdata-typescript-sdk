import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event1Schema, type Event1 } from "./event1.js";
import { fightOddsSchema, type FightOdds } from "./fight-odds.js";

export type EventOdds = {
  /**
   * The Event as an object - including the EventID, LeagueID, Name (and ShortName)of the Event,
   * Season, Day, DateTime, & Status
   */
  event?: Event1;
  /** The Event's collection of FightOdds */
  fightOdds?: FightOdds[];
};

export const eventOddsSchema: Schema<EventOdds> = s.object<EventOdds>({
  event: s.optional(s.lazy(() => event1Schema)),
  fightOdds: s.optional(s.array(s.lazy(() => fightOddsSchema))),
  _keysMap: {
    event: "Event",
    fightOdds: "FightOdds",
  },
});
