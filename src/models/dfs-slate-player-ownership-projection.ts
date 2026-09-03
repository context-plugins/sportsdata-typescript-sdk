import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DfsSlatePlayerOwnershipProjection = {
  slateId?: number;
  playerId?: number | null;
  fantasyDefensePlayerId?: number | null;
  projectedOwnershipPercentage?: number;
  isCaptain?: boolean;
};

export const dfsSlatePlayerOwnershipProjectionSchema: Schema<DfsSlatePlayerOwnershipProjection> =
  s.object<DfsSlatePlayerOwnershipProjection>({
    slateId: s.optional(s.number()),
    playerId: s.optionalNullable(s.number()),
    fantasyDefensePlayerId: s.optionalNullable(s.number()),
    projectedOwnershipPercentage: s.optional(s.number()),
    isCaptain: s.optional(s.boolean()),
    _keysMap: {
      slateId: "SlateID",
      playerId: "PlayerID",
      fantasyDefensePlayerId: "FantasyDefensePlayerID",
      projectedOwnershipPercentage: "ProjectedOwnershipPercentage",
      isCaptain: "IsCaptain",
    },
  });
