import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome3Schema, type BettingOutcome3 } from "./betting-outcome3.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket3 = {
  bettingMarketId?: number;
  bettingEventId?: number;
  bettingMarketTypeId?: number | null;
  bettingMarketType?: string | null;
  bettingBetTypeId?: number | null;
  bettingBetType?: string | null;
  bettingPeriodTypeId?: number | null;
  bettingPeriodType?: string | null;
  name?: string | null;
  driverId?: number | null;
  driverName?: string | null;
  created?: string | null;
  updated?: string | null;
  availableSportsbooks?: Sportsbook[];
  anyBetsAvailable?: boolean | null;
  bettingOutcomes?: BettingOutcome3[];
};

export const bettingMarket3Schema: Schema<BettingMarket3> = s.object<BettingMarket3>({
  bettingMarketId: s.optional(s.number()),
  bettingEventId: s.optional(s.number()),
  bettingMarketTypeId: s.optionalNullable(s.number()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optionalNullable(s.number()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optionalNullable(s.number()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  driverId: s.optionalNullable(s.number()),
  driverName: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  availableSportsbooks: s.optional(s.array(s.lazy(() => sportsbookSchema))),
  anyBetsAvailable: s.optionalNullable(s.boolean()),
  bettingOutcomes: s.optional(s.array(s.lazy(() => bettingOutcome3Schema))),
  _keysMap: {
    bettingMarketId: "BettingMarketID",
    bettingEventId: "BettingEventID",
    bettingMarketTypeId: "BettingMarketTypeID",
    bettingMarketType: "BettingMarketType",
    bettingBetTypeId: "BettingBetTypeID",
    bettingBetType: "BettingBetType",
    bettingPeriodTypeId: "BettingPeriodTypeID",
    bettingPeriodType: "BettingPeriodType",
    name: "Name",
    driverId: "DriverID",
    driverName: "DriverName",
    created: "Created",
    updated: "Updated",
    availableSportsbooks: "AvailableSportsbooks",
    anyBetsAvailable: "AnyBetsAvailable",
    bettingOutcomes: "BettingOutcomes",
  },
});
