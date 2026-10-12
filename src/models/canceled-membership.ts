import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CanceledMembership = {
  /** The unique ID of the canceled membership */
  canceledMembershipId?: number;
  /**
   * The unique ID of the membership which is being canceled; should be used to find memberships
   * which may be safely deleted.
   */
  membershipId?: number;
  /** The unique ID of the team associated with this canceled membership */
  teamId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career
   */
  playerId?: number;
  /** The date and time when this canceled membership was created */
  created?: string | null;
};

export const canceledMembershipSchema: Schema<CanceledMembership> = s.object<CanceledMembership>({
  canceledMembershipId: s.optional(s.int()),
  membershipId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  playerId: s.optional(s.int()),
  created: s.optionalNullable(s.string()),
  _keysMap: {
    canceledMembershipId: "CanceledMembershipId",
    membershipId: "MembershipId",
    teamId: "TeamId",
    playerId: "PlayerID",
    created: "Created",
  },
});
