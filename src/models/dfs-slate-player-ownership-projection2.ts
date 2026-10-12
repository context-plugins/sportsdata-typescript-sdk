import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayerOwnershipProjection2 = {
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /** Unique ID of the Associated Player. */
  playerId?: number;
  /** Projected Ownership Percentage (0-100) */
  projectedOwnershipPercentage?: number;
};

export const dfsSlatePlayerOwnershipProjection2Schema: Schema<DfsSlatePlayerOwnershipProjection2> =
  s.object<DfsSlatePlayerOwnershipProjection2>({
    slateId: s.optional(s.int()),
    playerId: s.optional(s.int()),
    projectedOwnershipPercentage: s.optional(s.float64()),
    _keysMap: {
      slateId: "SlateID",
      playerId: "PlayerID",
      projectedOwnershipPercentage: "ProjectedOwnershipPercentage",
    },
  });
