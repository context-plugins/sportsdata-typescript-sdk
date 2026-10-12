import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DriverBasic = {
  /** The unique ID of this driver (assigned by SportsDataIO) */
  driverId?: number;
  /** The driver's first name */
  firstName?: string | null;
  /** The driver's last name */
  lastName?: string | null;
  /** The driver's car number */
  number?: number | null;
  /** The driver's car number for display purposes (with leading zeros when necessary) */
  numberDisplay?: string | null;
  /** The driver's team name */
  team?: string | null;
  /** The driver's birthdate */
  birthDate?: string | null;
  /** The driver's birthplace */
  birthPlace?: string | null;
  /** The driver's gender */
  gender?: string | null;
  /** The driver's height */
  height?: number | null;
  /** The driver's weight */
  weight?: number | null;
  /** The manufacturer of the driver's car */
  manufacturer?: string | null;
  /** The engine type of the driver's car */
  engine?: string | null;
  /** The chassis of the driver's car */
  chassis?: string | null;
  /** The names of the sponsor(s) of the driver */
  sponsors?: string | null;
  /** The name of the crew chief for the driver */
  crewChief?: string | null;
  /** The date/time when this driver was last updated */
  updated?: string | null;
  /** The date/time when this driver was created (in US Eastern Time) */
  created?: string | null;
};

export const driverBasicSchema: Schema<DriverBasic> = s.object<DriverBasic>({
  driverId: s.optional(s.int()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  number: s.optionalNullable(s.int()),
  numberDisplay: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  birthDate: s.optionalNullable(s.string()),
  birthPlace: s.optionalNullable(s.string()),
  gender: s.optionalNullable(s.string()),
  height: s.optionalNullable(s.int()),
  weight: s.optionalNullable(s.int()),
  manufacturer: s.optionalNullable(s.string()),
  engine: s.optionalNullable(s.string()),
  chassis: s.optionalNullable(s.string()),
  sponsors: s.optionalNullable(s.string()),
  crewChief: s.optionalNullable(s.string()),
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
    updated: "Updated",
    created: "Created",
  },
});
