import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Membership = {
  /** The unique ID for the membership */
  membershipId?: number;
  /** The unique ID of the team */
  teamId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career.
   */
  playerId?: number;
  /** The player's full name */
  playerName?: string | null;
  /** The full name of the team */
  teamName?: string | null;
  /** The area the team is located within their home country */
  teamArea?: string | null;
  /** Whether the player's membership is active (true/false) */
  active?: boolean;
  /** The start date of the membership (in UTC) */
  startDate?: string | null;
  /** The end date of the membership (in UTC) */
  endDate?: string | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
  /** The player's jersey number on this team */
  jersey?: number | null;
};

export const membershipSchema: Schema<Membership> = s.object<Membership>({
  membershipId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  playerId: s.optional(s.int()),
  playerName: s.optionalNullable(s.string()),
  teamName: s.optionalNullable(s.string()),
  teamArea: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  _keysMap: {
    membershipId: "MembershipId",
    teamId: "TeamId",
    playerId: "PlayerId",
    playerName: "PlayerName",
    teamName: "TeamName",
    teamArea: "TeamArea",
    active: "Active",
    startDate: "StartDate",
    endDate: "EndDate",
    updated: "Updated",
    jersey: "Jersey",
  },
});
