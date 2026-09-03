import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayerOwnershipProjection2 = {
  slateId?: number;
  playerId?: number;
  projectedOwnershipPercentage?: number;
};

export const dfsSlatePlayerOwnershipProjection2Schema: Schema<DfsSlatePlayerOwnershipProjection2> =
  s.object<DfsSlatePlayerOwnershipProjection2>({
    slateId: s.optional(s.number()),
    playerId: s.optional(s.number()),
    projectedOwnershipPercentage: s.optional(s.number()),
    _keysMap: {
      slateId: "SlateID",
      playerId: "PlayerID",
      projectedOwnershipPercentage: "ProjectedOwnershipPercentage",
    },
  });
