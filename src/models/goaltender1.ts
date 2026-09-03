import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Goaltender1 = {
  playerId?: number;
  teamId?: number;
  team?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  jersey?: number | null;
  confirmed?: boolean;
};

export const goaltender1Schema: Schema<Goaltender1> = s.object<Goaltender1>({
  playerId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  confirmed: s.optional(s.boolean()),
  _keysMap: {
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    firstName: "FirstName",
    lastName: "LastName",
    jersey: "Jersey",
    confirmed: "Confirmed",
  },
});
