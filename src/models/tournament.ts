import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game9Schema, type Game9 } from "./game9.js";

export type Tournament = {
  /**
   * The unique ID of the tournament. Note: this field is specific to March Madness tournament &
   * does not include other tournaments
   */
  tournamentId?: number;
  /**
   * The season that the tournament occurs in. Note: season is a single year that the majority of
   * the season occurs in
   */
  season?: number;
  /** The name of the tournament */
  name?: string | null;
  /** Where the tournament in question is located/being played */
  location?: string | null;
  /** Shows a list of games that are held within a tournament for a given season */
  games?: Game9[];
  /** The region that is designated to be in the top-left of the NCAA Tournament bracket */
  leftTopBracketConference?: string | null;
  /** The region that is designated to be in the bottom-left of the NCAA Tournament bracket */
  leftBottomBracketConference?: string | null;
  /** The region that is designated to be in the top-right of the NCAA Tournament bracket */
  rightTopBracketConference?: string | null;
  /** The region that is designated to be in the bottom-right of the NCAA Tournament bracket */
  rightBottomBracketConference?: string | null;
};

export const tournamentSchema: Schema<Tournament> = s.object<Tournament>({
  tournamentId: s.optional(s.int()),
  season: s.optional(s.int()),
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
