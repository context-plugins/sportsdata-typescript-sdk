import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayerOwnershipProjection1 = {
  slateId?: number;
  playerId?: number;
  projectedOwnershipPercentage?: number;
  isCaptain?: boolean;
};

export const dfsSlatePlayerOwnershipProjection1Schema: Schema<DfsSlatePlayerOwnershipProjection1> =
  s.object<DfsSlatePlayerOwnershipProjection1>({
    slateId: s.optional(s.number()),
    playerId: s.optional(s.number()),
    projectedOwnershipPercentage: s.optional(s.number()),
    isCaptain: s.optional(s.boolean()),
    _keysMap: {
      slateId: "SlateID",
      playerId: "PlayerID",
      projectedOwnershipPercentage: "ProjectedOwnershipPercentage",
      isCaptain: "IsCaptain",
    },
  });
