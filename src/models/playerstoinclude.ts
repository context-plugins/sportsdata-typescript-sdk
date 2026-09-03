import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Playerstoinclude = {
  All: "all",
  Fantasy: "fantasy",
  Idp: "idp",
} as const;
export type Playerstoinclude = (typeof Playerstoinclude)[keyof typeof Playerstoinclude] | (string & {});

export const playerstoincludeSchema: EnumSchema<Playerstoinclude> =
  s.enumOf<Playerstoinclude>(Playerstoinclude);
