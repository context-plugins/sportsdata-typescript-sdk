import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DriverRaceOdd = {
  /** The unique ID of the DriverRaceOdd record */
  driverRaceOddId?: number;
  /** The ID of the Sportsbook associated with this record */
  sportsbookId?: number | null;
  /** The name of the Sportbook */
  sportsbookName?: string | null;
  /** The driver's full name */
  driverName?: string | null;
  /** The unique ID of the driver associated with this record */
  driverId?: number | null;
  /** The odds for this record, in American format i.e. +800, -200, etc. */
  oddsToWin?: number;
  /** The date/time when this race was created (in US Eastern Time) */
  created?: string | null;
  /** The date and time when this record was last seen from the sportsbook */
  updated?: string | null;
  /**
   * Indicates whether the odd is available for wagering at the related Sportsbook (excludes
   * Consensus)
   */
  isAvailable?: boolean;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
};

export const driverRaceOddSchema: Schema<DriverRaceOdd> = s.object<DriverRaceOdd>({
  driverRaceOddId: s.optional(s.int()),
  sportsbookId: s.optionalNullable(s.int()),
  sportsbookName: s.optionalNullable(s.string()),
  driverName: s.optionalNullable(s.string()),
  driverId: s.optionalNullable(s.int()),
  oddsToWin: s.optional(s.int()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  isAvailable: s.optional(s.boolean()),
  sportsbookUrl: s.optionalNullable(s.string()),
  _keysMap: {
    driverRaceOddId: "DriverRaceOddID",
    sportsbookId: "SportsbookID",
    sportsbookName: "SportsbookName",
    driverName: "DriverName",
    driverId: "DriverID",
    oddsToWin: "OddsToWin",
    created: "Created",
    updated: "Updated",
    isAvailable: "IsAvailable",
    sportsbookUrl: "SportsbookUrl",
  },
});
