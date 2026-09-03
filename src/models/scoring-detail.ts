import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringDetail = {
  gameKey?: string | null;
  seasonType?: number;
  playerId?: number | null;
  team?: string | null;
  season?: number;
  week?: number;
  scoringType?: string | null;
  length?: number;
  scoringDetailId?: number;
  playerGameId?: number;
  scoreId?: number | null;
  scoringPlayId?: number | null;
};

export const scoringDetailSchema: Schema<ScoringDetail> = s.object<ScoringDetail>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  scoringType: s.optionalNullable(s.string()),
  length: s.optional(s.number()),
  scoringDetailId: s.optional(s.number()),
  playerGameId: s.optional(s.number()),
  scoreId: s.optionalNullable(s.number()),
  scoringPlayId: s.optionalNullable(s.number()),
  _keysMap: {
    gameKey: "GameKey",
    seasonType: "SeasonType",
    playerId: "PlayerID",
    team: "Team",
    season: "Season",
    week: "Week",
    scoringType: "ScoringType",
    length: "Length",
    scoringDetailId: "ScoringDetailID",
    playerGameId: "PlayerGameID",
    scoreId: "ScoreID",
    scoringPlayId: "ScoringPlayID",
  },
});
