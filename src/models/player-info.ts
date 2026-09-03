import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerInfo = {
  playerId?: number;
  name?: string | null;
  teamId?: number | null;
  team?: string | null;
  position?: string | null;
};

export const playerInfoSchema: Schema<PlayerInfo> = s.object<PlayerInfo>({
  playerId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    name: "Name",
    teamId: "TeamID",
    team: "Team",
    position: "Position",
  },
});
