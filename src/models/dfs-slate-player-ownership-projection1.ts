import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayerOwnershipProjection1 = {
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /** Unique ID of the Associated Player. */
  playerId?: number;
  /** Projected Ownership Percentage (0-100) */
  projectedOwnershipPercentage?: number;
  /** Indicates if this is the MVP/Captain slot for single game slates */
  isCaptain?: boolean;
};

export const dfsSlatePlayerOwnershipProjection1Schema: Schema<DfsSlatePlayerOwnershipProjection1> =
  s.object<DfsSlatePlayerOwnershipProjection1>({
    slateId: s.optional(s.int()),
    playerId: s.optional(s.int()),
    projectedOwnershipPercentage: s.optional(s.float64()),
    isCaptain: s.optional(s.boolean()),
    _keysMap: {
      slateId: "SlateID",
      playerId: "PlayerID",
      projectedOwnershipPercentage: "ProjectedOwnershipPercentage",
      isCaptain: "IsCaptain",
    },
  });
