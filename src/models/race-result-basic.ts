import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { driverRaceBasicSchema, type DriverRaceBasic } from "./driver-race-basic.js";
import { raceBasic2Schema, type RaceBasic2 } from "./race-basic2.js";

export type RaceResultBasic = {
  /**
   * RaceBasic object (Includes basic information such as RaceID, Day, DateTime, Updated, and
   * Created)
   */
  race?: RaceBasic2;
  /**
   * StatBasic object (includes basic information on the drivers race performance such as DriveID,
   * Season, Driver's Name, Start and Final positions, Lap information, etc.)
   */
  driverRaces?: DriverRaceBasic[];
};

export const raceResultBasicSchema: Schema<RaceResultBasic> = s.object<RaceResultBasic>({
  race: s.optional(s.lazy(() => raceBasic2Schema)),
  driverRaces: s.optional(s.array(s.lazy(() => driverRaceBasicSchema))),
  _keysMap: {
    race: "Race",
    driverRaces: "DriverRaces",
  },
});
