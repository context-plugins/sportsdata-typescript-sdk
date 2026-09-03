import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Quarter = {
  quarterId?: number;
  scoreId?: number;
  number?: number;
  name?: string | null;
  description?: string | null;
  awayTeamScore?: number | null;
  homeTeamScore?: number | null;
  updated?: string | null;
  created?: string | null;
};

export const quarterSchema: Schema<Quarter> = s.object<Quarter>({
  quarterId: s.optional(s.number()),
  scoreId: s.optional(s.number()),
  number: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  awayTeamScore: s.optionalNullable(s.number()),
  homeTeamScore: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  _keysMap: {
    quarterId: "QuarterID",
    scoreId: "ScoreID",
    number: "Number",
    name: "Name",
    description: "Description",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    created: "Created",
  },
});
