import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerOwnership = {
  playerId?: number;
  season?: number;
  seasonType?: number;
  week?: number;
  name?: string | null;
  position?: string | null;
  team?: string | null;
  teamId?: number | null;
  ownershipPercentage?: number | null;
  deltaOwnershipPercentage?: number | null;
  startPercentage?: number | null;
  deltaStartPercentage?: number | null;
};

export const playerOwnershipSchema: Schema<PlayerOwnership> = s.object<PlayerOwnership>({
  playerId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  week: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  ownershipPercentage: s.optionalNullable(s.number()),
  deltaOwnershipPercentage: s.optionalNullable(s.number()),
  startPercentage: s.optionalNullable(s.number()),
  deltaStartPercentage: s.optionalNullable(s.number()),
  _keysMap: {
    playerId: "PlayerID",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
    name: "Name",
    position: "Position",
    team: "Team",
    teamId: "TeamID",
    ownershipPercentage: "OwnershipPercentage",
    deltaOwnershipPercentage: "DeltaOwnershipPercentage",
    startPercentage: "StartPercentage",
    deltaStartPercentage: "DeltaStartPercentage",
  },
});
