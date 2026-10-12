import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayerOwnershipProjection = {
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /** Unique ID of the Associated Player (can be null when it is a Team Defense) */
  playerId?: number | null;
  /** Unique ID of the Team Defense (only set for Team Defenses) */
  fantasyDefensePlayerId?: number | null;
  /** Projected Ownership Percentage (0-100) */
  projectedOwnershipPercentage?: number;
  /** Indicates if this is the MVP/Captain slot for single game slates */
  isCaptain?: boolean;
};

export const dfsSlatePlayerOwnershipProjectionSchema: Schema<DfsSlatePlayerOwnershipProjection> =
  s.object<DfsSlatePlayerOwnershipProjection>({
    slateId: s.optional(s.int()),
    playerId: s.optionalNullable(s.int()),
    fantasyDefensePlayerId: s.optionalNullable(s.int()),
    projectedOwnershipPercentage: s.optional(s.float64()),
    isCaptain: s.optional(s.boolean()),
    _keysMap: {
      slateId: "SlateID",
      playerId: "PlayerID",
      fantasyDefensePlayerId: "FantasyDefensePlayerID",
      projectedOwnershipPercentage: "ProjectedOwnershipPercentage",
      isCaptain: "IsCaptain",
    },
  });
