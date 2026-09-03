import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { driverRaceSchema, type DriverRace } from "./driver-race.js";
import { race1Schema, type Race1 } from "./race1.js";

export type RaceResult = {
  race?: Race1;
  driverRaces?: DriverRace[];
};

export const raceResultSchema: Schema<RaceResult> = s.object<RaceResult>({
  race: s.optional(s.lazy(() => race1Schema)),
  driverRaces: s.optional(s.array(s.lazy(() => driverRaceSchema))),
  _keysMap: {
    race: "Race",
    driverRaces: "DriverRaces",
  },
});
