import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket3Schema, type BettingMarket3 } from "./betting-market3.js";

export type BettingEvent5 = {
  bettingEventId?: number;
  name?: string | null;
  season?: number | null;
  bettingEventTypeId?: number;
  bettingEventType?: string | null;
  startDate?: string | null;
  created?: string | null;
  updated?: string | null;
  raceId?: number | null;
  bettingMarkets?: BettingMarket3[];
};

export const bettingEvent5Schema: Schema<BettingEvent5> = s.object<BettingEvent5>({
  bettingEventId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.number()),
  bettingEventTypeId: s.optional(s.number()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  raceId: s.optionalNullable(s.number()),
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
