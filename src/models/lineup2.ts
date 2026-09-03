import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Lineup2 = {
  playerId?: number;
  teamId?: number;
  team?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  battingOrder?: number | null;
  position?: string | null;
  starting?: boolean | null;
  confirmed?: boolean | null;
};

export const lineup2Schema: Schema<Lineup2> = s.object<Lineup2>({
  playerId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  battingOrder: s.optionalNullable(s.number()),
  position: s.optionalNullable(s.string()),
  starting: s.optionalNullable(s.boolean()),
  confirmed: s.optionalNullable(s.boolean()),
  _keysMap: {
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    firstName: "FirstName",
    lastName: "LastName",
    battingOrder: "BattingOrder",
    position: "Position",
    starting: "Starting",
    confirmed: "Confirmed",
  },
});
