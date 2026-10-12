import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket3Schema, type BettingMarket3 } from "./betting-market3.js";

export type BettingEvent5 = {
  /** The unique ID assocated with the betting event */
  bettingEventId?: number;
  /** The name of this betting event */
  name?: string | null;
  /** The season of this betting event */
  season?: number | null;
  /** The ID associated with the type of betting event */
  bettingEventTypeId?: number;
  /** Indicates the type of betting event */
  bettingEventType?: string | null;
  /** The last day for betting on this event */
  startDate?: string | null;
  /** The date/time when this betting event was created (in US Eastern Time) */
  created?: string | null;
  /** The last updated date of this betting event */
  updated?: string | null;
  /** The unique ID of the race tied to this event */
  raceId?: number | null;
  /** A list of the possible betting markets within a betting event */
  bettingMarkets?: BettingMarket3[];
};

export const bettingEvent5Schema: Schema<BettingEvent5> = s.object<BettingEvent5>({
  bettingEventId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.int()),
  bettingEventTypeId: s.optional(s.int()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  raceId: s.optionalNullable(s.int()),
  bettingMarkets: s.optional(s.array(s.lazy(() => bettingMarket3Schema))),
  _keysMap: {
    bettingEventId: "BettingEventID",
    name: "Name",
    season: "Season",
    bettingEventTypeId: "BettingEventTypeID",
    bettingEventType: "BettingEventType",
    startDate: "StartDate",
    created: "Created",
    updated: "Updated",
    raceId: "RaceID",
    bettingMarkets: "BettingMarkets",
  },
});
