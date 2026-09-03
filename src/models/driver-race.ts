import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DriverRace = {
  statId?: number;
  driverId?: number;
  season?: number;
  name?: string | null;
  number?: number | null;
  numberDisplay?: string | null;
  manufacturer?: string | null;
  draftKingsSalary?: number | null;
  raceId?: number | null;
  day?: string | null;
  dateTime?: string | null;
  updated?: string | null;
  created?: string | null;
  fantasyPoints?: number | null;
  fantasyPointsDraftKings?: number | null;
  qualifyingSpeed?: number | null;
  poleFinalPosition?: number | null;
  startPosition?: number | null;
  finalPosition?: number | null;
  positionDifferential?: number | null;
  laps?: number | null;
  lapsLed?: number | null;
  fastestLaps?: number | null;
  points?: number | null;
  bonus?: number | null;
  penalty?: number | null;
  wins?: number | null;
  poles?: number | null;
  currentPosition?: number | null;
};

export const driverRaceSchema: Schema<DriverRace> = s.object<DriverRace>({
  statId: s.optional(s.number()),
  driverId: s.optional(s.number()),
  season: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.number()),
  numberDisplay: s.optionalNullable(s.string()),
  manufacturer: s.optionalNullable(s.string()),
  draftKingsSalary: s.optionalNullable(s.number()),
  raceId: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  fantasyPoints: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  qualifyingSpeed: s.optionalNullable(s.number()),
  poleFinalPosition: s.optionalNullable(s.number()),
  startPosition: s.optionalNullable(s.number()),
  finalPosition: s.optionalNullable(s.number()),
  positionDifferential: s.optionalNullable(s.number()),
  laps: s.optionalNullable(s.number()),
  lapsLed: s.optionalNullable(s.number()),
  fastestLaps: s.optionalNullable(s.number()),
  points: s.optionalNullable(s.number()),
  bonus: s.optionalNullable(s.number()),
  penalty: s.optionalNullable(s.number()),
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
