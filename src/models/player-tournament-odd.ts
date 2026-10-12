import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerTournamentOdd = {
  /** The unique ID of this player/tournament odd record */
  playerTournamentOddId?: number;
  /** The Id of the Sportsbook associated with this record. */
  sportsbookId?: number;
  /** The name of the sportsbook */
  sportbookName?: string | null;
  /** The name of the golfer */
  name?: string | null;
  /** The unique ID of the golfer associated with this record */
  playerId?: number;
  /** The odds for this record; in American format (i.e. +800; -200; etc.) */
  oddsToWin?: number;
  /** The timestamp of when this odds record was created */
  created?: string | null;
  /** The date and time when this record was updated. */
  updated?: string | null;
  /**
   * Indicates whether the odd is available for wagering at the related sportsbook (excludes
   * Consensus)
   */
  isAvailable?: boolean;
  /** The market type of the odd (e.g. live; pregame; Round 1; Thru Round 4) */
  oddType?: string | null;
  /** The URL for sportsbook event */
  sportsbookUrl?: string | null;
};

export const playerTournamentOddSchema: Schema<PlayerTournamentOdd> = s.object<PlayerTournamentOdd>({
  playerTournamentOddId: s.optional(s.int()),
  sportsbookId: s.optional(s.int()),
  sportbookName: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  playerId: s.optional(s.int()),
  oddsToWin: s.optional(s.int()),
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
