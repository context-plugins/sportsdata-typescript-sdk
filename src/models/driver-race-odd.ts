import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DriverRaceOdd = {
  driverRaceOddId?: number;
  sportsbookId?: number | null;
  sportsbookName?: string | null;
  driverName?: string | null;
  driverId?: number | null;
  oddsToWin?: number;
  created?: string | null;
  updated?: string | null;
  isAvailable?: boolean;
  sportsbookUrl?: string | null;
};

export const driverRaceOddSchema: Schema<DriverRaceOdd> = s.object<DriverRaceOdd>({
  driverRaceOddId: s.optional(s.number()),
  sportsbookId: s.optionalNullable(s.number()),
  sportsbookName: s.optionalNullable(s.string()),
  driverName: s.optionalNullable(s.string()),
  driverId: s.optionalNullable(s.number()),
  oddsToWin: s.optional(s.number()),
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
