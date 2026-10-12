import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DriverRaceBasic = {
  /** The unique ID of this stat record */
  statId?: number;
  /** The unique ID of this driver */
  driverId?: number;
  /** The season that this race is associated with */
  season?: number;
  /** The driver's full name */
  name?: string | null;
  /** The driver's car number */
  number?: number | null;
  /** The driver's car number for display purposes (with leading zeros when necessary) */
  numberDisplay?: string | null;
  /** The manufacturer of the driver's car */
  manufacturer?: string | null;
  /** The driver's starting position for the race (typically the same as the PoleFinalPosition) */
  startPosition?: number | null;
  /** The driver's final position for the race */
  finalPosition?: number | null;
  /** The driver's differential between their final position and their starting position */
  positionDifferential?: number | null;
  /** The total number of laps completed by the driver */
  laps?: number | null;
  /** The total number of laps that this driver completed while in first place */
  lapsLed?: number | null;
  /** The total points scored by this driver */
  points?: number | null;
  /** Indicates whether this driver won the race */
  wins?: number | null;
  /** Indicates whether this driver won the qualifying race (pole) */
  poles?: number | null;
  /** Driver's current position in the race; updated live */
  currentPosition?: number | null;
};

export const driverRaceBasicSchema: Schema<DriverRaceBasic> = s.object<DriverRaceBasic>({
  statId: s.optional(s.int()),
  driverId: s.optional(s.int()),
  season: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.int()),
  numberDisplay: s.optionalNullable(s.string()),
  manufacturer: s.optionalNullable(s.string()),
  startPosition: s.optionalNullable(s.float64()),
  finalPosition: s.optionalNullable(s.float64()),
  positionDifferential: s.optionalNullable(s.float64()),
  laps: s.optionalNullable(s.float64()),
  lapsLed: s.optionalNullable(s.float64()),
  points: s.optionalNullable(s.float64()),
  wins: s.optionalNullable(s.float64()),
  poles: s.optionalNullable(s.float64()),
  currentPosition: s.optionalNullable(s.float64()),
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
