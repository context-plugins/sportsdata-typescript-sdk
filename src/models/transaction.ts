import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transaction = {
  playerId?: number;
  name?: string | null;
  formerTeamId?: number | null;
  formerTeam?: string | null;
  teamId?: number | null;
  team?: string | null;
  type?: string | null;
  date?: string | null;
  note?: string | null;
  created?: string | null;
  updated?: string | null;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  playerId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  formerTeamId: s.optionalNullable(s.number()),
  formerTeam: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  date: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    name: "Name",
    formerTeamId: "FormerTeamID",
    formerTeam: "FormerTeam",
    teamId: "TeamID",
    team: "Team",
    type: "Type",
    date: "Date",
    note: "Note",
    created: "Created",
    updated: "Updated",
  },
});
