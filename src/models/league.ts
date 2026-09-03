import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type League = {
  leagueId?: number;
  name?: string | null;
  key?: string | null;
};

export const leagueSchema: Schema<League> = s.object<League>({
  leagueId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  key: s.optionalNullable(s.string()),
  _keysMap: {
    leagueId: "LeagueId",
    name: "Name",
    key: "Key",
  },
});
