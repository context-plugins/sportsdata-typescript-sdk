import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerSeason9 = {
  /** The unique ID of the golfer season record */
  playerSeasonId?: number;
  /** The PGA season for which this record applies */
  season?: number;
  /** The unique ID of the golfer */
  playerId?: number;
  /** The full name of the golfer */
  name?: string | null;
  /** The player's latest World Golf Ranking */
  worldGolfRank?: number | null;
  /** The player's World Golf Ranking from the previous week */
  worldGolfRankLastWeek?: number | null;
  /** The total number of tournaments the player competed in during the season */
  events?: number | null;
  /** The total Average World Golf Ranking points scored on tournaments during this season */
  averagePoints?: number | null;
  /** Total World Golf Ranking points scored on tournaments during this season */
  totalPoints?: number | null;
  /** Total World Golf Ranking points lost after the golfers most recent performance */
  pointsLost?: number | null;
  /** Total World Golf Ranking points gained after the golfers most recent performance */
  pointsGained?: number | null;
};

export const playerSeason9Schema: Schema<PlayerSeason9> = s.object<PlayerSeason9>({
  playerSeasonId: s.optional(s.int()),
  season: s.optional(s.int()),
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  worldGolfRank: s.optionalNullable(s.int()),
  worldGolfRankLastWeek: s.optionalNullable(s.int()),
  events: s.optionalNullable(s.int()),
  averagePoints: s.optionalNullable(s.float64()),
  totalPoints: s.optionalNullable(s.float64()),
  pointsLost: s.optionalNullable(s.float64()),
  pointsGained: s.optionalNullable(s.float64()),
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
