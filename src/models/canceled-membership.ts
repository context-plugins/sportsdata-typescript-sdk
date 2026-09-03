import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CanceledMembership = {
  canceledMembershipId?: number;
  membershipId?: number;
  teamId?: number;
  playerId?: number;
  created?: string | null;
};

export const canceledMembershipSchema: Schema<CanceledMembership> = s.object<CanceledMembership>({
  canceledMembershipId: s.optional(s.number()),
  membershipId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  created: s.optionalNullable(s.string()),
  _keysMap: {
    canceledMembershipId: "CanceledMembershipId",
    membershipId: "MembershipId",
    teamId: "TeamId",
    playerId: "PlayerID",
    created: "Created",
  },
});
