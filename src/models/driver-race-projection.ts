import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DriverRaceProjection = {
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
  /** The DraftKings salary of the driver for this race */
  draftKingsSalary?: number | null;
  /** The unique ID of this race */
  raceId?: number | null;
  /** The day of this race */
  day?: string | null;
  /** The date/time of this race */
  dateTime?: string | null;
  /** The date/time when this record was last updated */
  updated?: string | null;
  /** The date/time when this record was created */
  created?: string | null;
  /** The fantasy points scored by this driver */
  fantasyPoints?: number | null;
  /** The fantasy points scored by this driver, according to the DraftKings scoring system */
  fantasyPointsDraftKings?: number | null;
  /** The speed of this driver's car during the qualifying race */
  qualifyingSpeed?: number | null;
  /** The final position this driver finished in the qualifying race (pole) */
  poleFinalPosition?: number | null;
  /** The driver's starting position for the race (typically the same as the PoleFinalPosition) */
  startPosition?: number | null;
  /** The driver's final position for the race */
  finalPosition?: number | null;
  /** The driver's differential between the final position and the starting position */
  positionDifferential?: number | null;
  /** The total number of laps completed by the driver */
  laps?: number | null;
  /** The total number of laps that this driver finished in first place */
  lapsLed?: number | null;
  /** The total number of laps that this driver finished fastest */
  fastestLaps?: number | null;
  /** The total points scored by this driver */
  points?: number | null;
  /** The total bonus points scored by this driver */
  bonus?: number | null;
  /** The total penalty points applied to this driver */
  penalty?: number | null;
  /** Indicates whether this driver won the race */
  wins?: number | null;
  /** Indicates whether this driver won the qualifying race (pole) */
  poles?: number | null;
  /** Driver's current position in the race, updated live. */
  currentPosition?: number | null;
};

export const driverRaceProjectionSchema: Schema<DriverRaceProjection> = s.object<DriverRaceProjection>({
  statId: s.optional(s.int()),
  driverId: s.optional(s.int()),
  season: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.int()),
  numberDisplay: s.optionalNullable(s.string()),
  manufacturer: s.optionalNullable(s.string()),
  draftKingsSalary: s.optionalNullable(s.int()),
  raceId: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  qualifyingSpeed: s.optionalNullable(s.float64()),
  poleFinalPosition: s.optionalNullable(s.float64()),
  startPosition: s.optionalNullable(s.float64()),
  finalPosition: s.optionalNullable(s.float64()),
  positionDifferential: s.optionalNullable(s.float64()),
  laps: s.optionalNullable(s.float64()),
  lapsLed: s.optionalNullable(s.float64()),
  fastestLaps: s.optionalNullable(s.float64()),
  points: s.optionalNullable(s.float64()),
  bonus: s.optionalNullable(s.float64()),
  penalty: s.optionalNullable(s.float64()),
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
    draftKingsSalary: "DraftKingsSalary",
    raceId: "RaceID",
    day: "Day",
    dateTime: "DateTime",
    updated: "Updated",
    created: "Created",
    fantasyPoints: "FantasyPoints",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    qualifyingSpeed: "QualifyingSpeed",
    poleFinalPosition: "PoleFinalPosition",
    startPosition: "StartPosition",
    finalPosition: "FinalPosition",
    positionDifferential: "PositionDifferential",
    laps: "Laps",
    lapsLed: "LapsLed",
    fastestLaps: "FastestLaps",
    points: "Points",
    bonus: "Bonus",
    penalty: "Penalty",
    wins: "Wins",
    poles: "Poles",
    currentPosition: "CurrentPosition",
  },
});
