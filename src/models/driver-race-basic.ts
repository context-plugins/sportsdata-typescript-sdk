import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DriverRaceBasic = {
  statId?: number;
  driverId?: number;
  season?: number;
  name?: string | null;
  number?: number | null;
  numberDisplay?: string | null;
  manufacturer?: string | null;
  startPosition?: number | null;
  finalPosition?: number | null;
  positionDifferential?: number | null;
  laps?: number | null;
  lapsLed?: number | null;
  points?: number | null;
  wins?: number | null;
  poles?: number | null;
  currentPosition?: number | null;
};

export const driverRaceBasicSchema: Schema<DriverRaceBasic> = s.object<DriverRaceBasic>({
  statId: s.optional(s.number()),
  driverId: s.optional(s.number()),
  season: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.number()),
  numberDisplay: s.optionalNullable(s.string()),
  manufacturer: s.optionalNullable(s.string()),
  startPosition: s.optionalNullable(s.number()),
  finalPosition: s.optionalNullable(s.number()),
  positionDifferential: s.optionalNullable(s.number()),
  laps: s.optionalNullable(s.number()),
  lapsLed: s.optionalNullable(s.number()),
  points: s.optionalNullable(s.number()),
  wins: s.optionalNullable(s.number()),
  poles: s.optionalNullable(s.number()),
  currentPosition: s.optionalNullable(s.number()),
  _keysMap: {
    statId: "StatID",
    driverId: "DriverID",
    season: "Season",
    name: "Name",
    number: "Number",
    numberDisplay: "NumberDisplay",
    manufacturer: "Manufacturer",
    startPosition: "StartPosition",
    finalPosition: "FinalPosition",
    positionDifferential: "PositionDifferential",
    laps: "Laps",
    lapsLed: "LapsLed",
    points: "Points",
    wins: "Wins",
    poles: "Poles",
    currentPosition: "CurrentPosition",
  },
});
