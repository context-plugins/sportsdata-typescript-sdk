import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket4Schema, type BettingMarket4 } from "./betting-market4.js";

export type BettingEvent6 = {
  bettingEventId?: number;
  name?: string | null;
  bettingEventTypeId?: number;
  bettingEventType?: string | null;
  startDate?: string | null;
  created?: string | null;
  updated?: string | null;
  fightId?: number | null;
  bettingMarkets?: BettingMarket4[];
};

export const bettingEvent6Schema: Schema<BettingEvent6> = s.object<BettingEvent6>({
  bettingEventId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  bettingEventTypeId: s.optional(s.number()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  fightId: s.optionalNullable(s.number()),
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
