import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PenaltyShootout = {
  penaltyShootoutId?: number;
  gameId?: number;
  type?: string | null;
  teamId?: number;
  playerId?: number | null;
  name?: string | null;
  position?: string | null;
  order?: number;
};

export const penaltyShootoutSchema: Schema<PenaltyShootout> = s.object<PenaltyShootout>({
  penaltyShootoutId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  type: s.optionalNullable(s.string()),
  teamId: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  order: s.optional(s.number()),
  _keysMap: {
    penaltyShootoutId: "PenaltyShootoutId",
    gameId: "GameId",
    type: "Type",
    teamId: "TeamId",
    playerId: "PlayerId",
    name: "Name",
    position: "Position",
    order: "Order",
  },
});
