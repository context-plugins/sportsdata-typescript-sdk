import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Membership = {
  membershipId?: number;
  teamId?: number;
  playerId?: number;
  playerName?: string | null;
  teamName?: string | null;
  teamArea?: string | null;
  active?: boolean;
  startDate?: string | null;
  endDate?: string | null;
  updated?: string | null;
  jersey?: number | null;
};

export const membershipSchema: Schema<Membership> = s.object<Membership>({
  membershipId: s.optional(s.number()),
  teamId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  playerName: s.optionalNullable(s.string()),
  teamName: s.optionalNullable(s.string()),
  teamArea: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
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
