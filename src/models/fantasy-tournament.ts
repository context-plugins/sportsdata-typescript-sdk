import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FantasyTournament = {
  tournamentId?: number;
  playerId?: number;
  season?: number | null;
  teeTime?: string | null;
  name?: string | null;
  rank?: number | null;
  tournamentStatus?: string | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsYahoo?: number | null;
  updated?: string | null;
  fantasyPoints?: number | null;
  fantasyPointsDraftKings?: number | null;
};

export const fantasyTournamentSchema: Schema<FantasyTournament> = s.object<FantasyTournament>({
  tournamentId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  season: s.optionalNullable(s.number()),
  teeTime: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  rank: s.optionalNullable(s.number()),
  tournamentStatus: s.optionalNullable(s.string()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  fantasyPoints: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
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
