import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket4Schema, type BettingMarket4 } from "./betting-market4.js";

export type BettingEvent6 = {
  /** The unique ID associated with the betting event */
  bettingEventId?: number;
  /** The name of the betting event */
  name?: string | null;
  /** The ID associated with the type of betting event */
  bettingEventTypeId?: number;
  /** Indicates the type of betting event */
  bettingEventType?: string | null;
  /** The start date of this betting event */
  startDate?: string | null;
  /** The timestamp of when the betting event was created */
  created?: string | null;
  /** The last updated date of this betting event (in US Eastern Time) */
  updated?: string | null;
  /** The unique ID of the fight related to the betting event */
  fightId?: number | null;
  /** A list of possible betting markets found within the betting event */
  bettingMarkets?: BettingMarket4[];
};

export const bettingEvent6Schema: Schema<BettingEvent6> = s.object<BettingEvent6>({
  bettingEventId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  bettingEventTypeId: s.optional(s.int()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  fightId: s.optionalNullable(s.int()),
  bettingMarkets: s.optional(s.array(s.lazy(() => bettingMarket4Schema))),
  _keysMap: {
    bettingEventId: "BettingEventId",
    name: "Name",
    bettingEventTypeId: "BettingEventTypeID",
    bettingEventType: "BettingEventType",
    startDate: "StartDate",
    created: "Created",
    updated: "Updated",
    fightId: "FightId",
    bettingMarkets: "BettingMarkets",
  },
});
