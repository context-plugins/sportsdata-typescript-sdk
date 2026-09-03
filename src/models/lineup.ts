import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Lineup = {
  playerId?: number;
  teamId?: number;
  team?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  position?: string | null;
  starting?: boolean | null;
  confirmed?: boolean | null;
  lineupStatus?: string | null;
};

export const lineupSchema: Schema<Lineup> = s.object<Lineup>({
  playerId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  starting: s.optionalNullable(s.boolean()),
  confirmed: s.optionalNullable(s.boolean()),
  lineupStatus: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    firstName: "FirstName",
    lastName: "LastName",
    position: "Position",
    starting: "Starting",
    confirmed: "Confirmed",
    lineupStatus: "LineupStatus",
  },
});
