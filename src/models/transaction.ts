import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transaction = {
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO tied to this transaction. Note:
   * this ID will stay with the player throughout their entire career
   */
  playerId?: number;
  /** Player's full name */
  name?: string | null;
  /** ID of Player's former team */
  formerTeamId?: number | null;
  /** Player's former team abbreviation [Key] (e.g. LAC; PHI; NE; IND etc.) */
  formerTeam?: string | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** Type of Transaction. Released, Waived, Signed, Promoted, Elevated, Demoted, and Traded. */
  type?: string | null;
  /** Date & time that the transaction took place (in US Eastern Time) */
  date?: string | null;
  /** Transaction Summary (e.g. "Harris has signed with the Commanders.") */
  note?: string | null;
  /** Date and time of the transaction creation (in US Eastern Time) */
  created?: string | null;
  /** Date and time last updated (in US Eastern Time) */
  updated?: string | null;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  formerTeamId: s.optionalNullable(s.int()),
  formerTeam: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
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
