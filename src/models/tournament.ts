import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game9Schema, type Game9 } from "./game9.js";

export type Tournament = {
  tournamentId?: number;
  season?: number;
  name?: string | null;
  location?: string | null;
  games?: Game9[];
  leftTopBracketConference?: string | null;
  leftBottomBracketConference?: string | null;
  rightTopBracketConference?: string | null;
  rightBottomBracketConference?: string | null;
};

export const tournamentSchema: Schema<Tournament> = s.object<Tournament>({
  tournamentId: s.optional(s.number()),
  season: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  location: s.optionalNullable(s.string()),
  games: s.optional(s.array(s.lazy(() => game9Schema))),
  leftTopBracketConference: s.optionalNullable(s.string()),
  leftBottomBracketConference: s.optionalNullable(s.string()),
  rightTopBracketConference: s.optionalNullable(s.string()),
  rightBottomBracketConference: s.optionalNullable(s.string()),
  _keysMap: {
    tournamentId: "TournamentID",
    season: "Season",
    name: "Name",
    location: "Location",
    games: "Games",
    leftTopBracketConference: "LeftTopBracketConference",
    leftBottomBracketConference: "LeftBottomBracketConference",
    rightTopBracketConference: "RightTopBracketConference",
    rightBottomBracketConference: "RightBottomBracketConference",
  },
});
