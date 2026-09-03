import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerSeason9 = {
  playerSeasonId?: number;
  season?: number;
  playerId?: number;
  name?: string | null;
  worldGolfRank?: number | null;
  worldGolfRankLastWeek?: number | null;
  events?: number | null;
  averagePoints?: number | null;
  totalPoints?: number | null;
  pointsLost?: number | null;
  pointsGained?: number | null;
};

export const playerSeason9Schema: Schema<PlayerSeason9> = s.object<PlayerSeason9>({
  playerSeasonId: s.optional(s.number()),
  season: s.optional(s.number()),
  playerId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  worldGolfRank: s.optionalNullable(s.number()),
  worldGolfRankLastWeek: s.optionalNullable(s.number()),
  events: s.optionalNullable(s.number()),
  averagePoints: s.optionalNullable(s.number()),
  totalPoints: s.optionalNullable(s.number()),
  pointsLost: s.optionalNullable(s.number()),
  pointsGained: s.optionalNullable(s.number()),
  _keysMap: {
    playerSeasonId: "PlayerSeasonID",
    season: "Season",
    playerId: "PlayerID",
    name: "Name",
    worldGolfRank: "WorldGolfRank",
    worldGolfRankLastWeek: "WorldGolfRankLastWeek",
    events: "Events",
    averagePoints: "AveragePoints",
    totalPoints: "TotalPoints",
    pointsLost: "PointsLost",
    pointsGained: "PointsGained",
  },
});
