import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerTournamentOdd = {
  playerTournamentOddId?: number;
  sportsbookId?: number;
  sportbookName?: string | null;
  name?: string | null;
  playerId?: number;
  oddsToWin?: number;
  created?: string | null;
  updated?: string | null;
  isAvailable?: boolean;
  oddType?: string | null;
  sportsbookUrl?: string | null;
};

export const playerTournamentOddSchema: Schema<PlayerTournamentOdd> = s.object<PlayerTournamentOdd>({
  playerTournamentOddId: s.optional(s.number()),
  sportsbookId: s.optional(s.number()),
  sportbookName: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  playerId: s.optional(s.number()),
  oddsToWin: s.optional(s.number()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  isAvailable: s.optional(s.boolean()),
  oddType: s.optionalNullable(s.string()),
  sportsbookUrl: s.optionalNullable(s.string()),
  _keysMap: {
    playerTournamentOddId: "PlayerTournamentOddId",
    sportsbookId: "SportsbookId",
    sportbookName: "SportbookName",
    name: "Name",
    playerId: "PlayerId",
    oddsToWin: "OddsToWin",
    created: "Created",
    updated: "Updated",
    isAvailable: "IsAvailable",
    oddType: "OddType",
    sportsbookUrl: "SportsbookUrl",
  },
});
