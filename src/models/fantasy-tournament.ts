import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyTournament = {
  /** The unique ID of the tournament */
  tournamentId?: number;
  /** The unique ID of the golfer */
  playerId?: number;
  /** The PGA season for which this record applies */
  season?: number | null;
  /** The time that this golfer tees off for the upcoming round (in US Eastern Time) */
  teeTime?: string | null;
  /** The name of the golfer */
  name?: string | null;
  /** The rank of this golfer in the tournament */
  rank?: number | null;
  /**
   * Indicates whether a golfer is not playing in this tournament. Note: If golfer is not playing;
   * this will be out
   */
  tournamentStatus?: string | null;
  /** Total fantasy points scored by the golfer in the tournament using FanDuel's scoring system */
  fantasyPointsFanDuel?: number | null;
  /** Total fantasy points scored by the golfer in the tournament using Yahoo's scoring system */
  fantasyPointsYahoo?: number | null;
  /** The date and time when this record was updated. */
  updated?: string | null;
  /**
   * Total fantasy points scored by the golfer in the tournament using the default SportsDataIO
   * scoring system
   */
  fantasyPoints?: number | null;
  /**
   * Total fantasy points scored by the golfer in the tournament using DraftKings' scoring system
   */
  fantasyPointsDraftKings?: number | null;
};

export const fantasyTournamentSchema: Schema<FantasyTournament> = s.object<FantasyTournament>({
  tournamentId: s.optional(s.int()),
  playerId: s.optional(s.int()),
  season: s.optionalNullable(s.int()),
  teeTime: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  rank: s.optionalNullable(s.int()),
  tournamentStatus: s.optionalNullable(s.string()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  updated: s.optionalNullable(s.string()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  _keysMap: {
    tournamentId: "TournamentID",
    playerId: "PlayerID",
    season: "Season",
    teeTime: "TeeTime",
    name: "Name",
    rank: "Rank",
    tournamentStatus: "TournamentStatus",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    updated: "Updated",
    fantasyPoints: "FantasyPoints",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
  },
});
