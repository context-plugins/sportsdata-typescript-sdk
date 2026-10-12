import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type League = {
  /** The unique ID of the MMA league */
  leagueId?: number;
  /** The name of this MMA league */
  name?: string | null;
  /** The league abbreviation of the MMA league */
  key?: string | null;
};

export const leagueSchema: Schema<League> = s.object<League>({
  leagueId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  key: s.optionalNullable(s.string()),
  _keysMap: {
    leagueId: "LeagueId",
    name: "Name",
    key: "Key",
  },
});
