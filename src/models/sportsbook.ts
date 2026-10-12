import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The sportsbook offering this outcome for betting, Name of sportsbook, The sportsbook offering
 * this outcome for betting, The sportsbook offering this outcome for betting, The name of the
 * sportsbook that is offering this outcome for betting, The sportsbook offering this outcome for
 * betting, The sportsbook offering this outcome for betting, The sportsbook offering this outcome
 * for betting, The sportsbook offering this outcome for betting, The sportsbook offering this
 * outcome for betting
 */
export type Sportsbook = {
  /** Unique ID of the sportsbook */
  sportsbookId?: number;
  /** The name of the sportsbook(s) */
  name?: string | null;
};

export const sportsbookSchema: Schema<Sportsbook> = s.object<Sportsbook>({
  sportsbookId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    sportsbookId: "SportsbookID",
    name: "Name",
  },
});
