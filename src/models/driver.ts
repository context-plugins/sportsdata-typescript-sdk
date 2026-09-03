import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Driver = {
  driverId?: number;
  firstName?: string | null;
  lastName?: string | null;
  number?: number | null;
  numberDisplay?: string | null;
  team?: string | null;
  birthDate?: string | null;
  birthPlace?: string | null;
  gender?: string | null;
  height?: number | null;
  weight?: number | null;
  manufacturer?: string | null;
  engine?: string | null;
  chassis?: string | null;
  sponsors?: string | null;
  crewChief?: string | null;
  photoUrl?: string | null;
  updated?: string | null;
  created?: string | null;
};

export const driverSchema: Schema<Driver> = s.object<Driver>({
  driverId: s.optional(s.number()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.number()),
  numberDisplay: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthPlace: s.optionalNullable(s.string()),
  gender: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.number()),
  weight: s.optionalNullable(s.number()),
  manufacturer: s.optionalNullable(s.string()),
  engine: s.optionalNullable(s.string()),
  chassis: s.optionalNullable(s.string()),
  sponsors: s.optionalNullable(s.string()),
  crewChief: s.optionalNullable(s.string()),
  photoUrl: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  _keysMap: {
    driverId: "DriverID",
    firstName: "FirstName",
    lastName: "LastName",
    number: "Number",
    numberDisplay: "NumberDisplay",
    team: "Team",
    birthDate: "BirthDate",
    birthPlace: "BirthPlace",
    gender: "Gender",
    height: "Height",
    weight: "Weight",
    manufacturer: "Manufacturer",
    engine: "Engine",
    chassis: "Chassis",
    sponsors: "Sponsors",
    crewChief: "CrewChief",
    photoUrl: "PhotoUrl",
    updated: "Updated",
    created: "Created",
  },
});
