import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome3Schema, type BettingOutcome3 } from "./betting-outcome3.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket3 = {
  /** The unique ID associated with the betting market */
  bettingMarketId?: number;
  /** The unique ID associated with the betting market within the betting event */
  bettingEventId?: number;
  /** The ID that distinguishes the different types of Market Types */
  bettingMarketTypeId?: number | null;
  /**
   * The name of the market type within a market (e.g. Race Prop, Driver Future, Race Line, etc.)
   */
  bettingMarketType?: string | null;
  /** The ID associated with the name of the bet type within a market */
  bettingBetTypeId?: number | null;
  /** The name of the bet type within a market (e.g. Tournament Winner, Best Score, etc.) */
  bettingBetType?: string | null;
  /** The BettingPeriodTypeID of this type of market which we can result */
  bettingPeriodTypeId?: number | null;
  /** The name of the period type of this market */
  bettingPeriodType?: string | null;
  /** The name of this betting market */
  name?: string | null;
  /** The unique ID of the driver tied to this market (if applicable) */
  driverId?: number | null;
  /** The name of the driver tied to this market (if applicable) */
  driverName?: string | null;
  /** The date/time when this betting market was created (in US Eastern Time) */
  created?: string | null;
  /** The last updated date of this market */
  updated?: string | null;
  /** The sportsbooks that have had odds in this market */
  availableSportsbooks?: Sportsbook[];
  /** Shows if any bets are currently available for betting in this market */
  anyBetsAvailable?: boolean | null;
  /** A list of the possible betting outcomes from each sportsbook in this market */
  bettingOutcomes?: BettingOutcome3[];
};

export const bettingMarket3Schema: Schema<BettingMarket3> = s.object<BettingMarket3>({
  bettingMarketId: s.optional(s.int()),
  bettingEventId: s.optional(s.int()),
  bettingMarketTypeId: s.optionalNullable(s.int()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optionalNullable(s.int()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optionalNullable(s.int()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  driverId: s.optionalNullable(s.int()),
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
