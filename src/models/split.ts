import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Split = {
  L: "L",
  R: "R",
  S: "S",
} as const;
export type Split = (typeof Split)[keyof typeof Split] | (string & {});

export const splitSchema: EnumSchema<Split> = s.enumOf<Split>(Split);
